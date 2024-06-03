// temporary deeplink boolean. change to hash or qs or whatevs.
var deeplink = false;

var Product = {
    "id": null,
    "category": null,
    "fabricOptions": [],
    "panels": [],
    "colorOptions": {},
    "colorSwatches": null,
    "patternOptions": [],
    "printingOptions": null,
    "textColors": [],
    "minQuantity": null,
    "views": [],
    "sizes": []
}

var Cust = {
    "step": null,
    "fabric": null,
    "colors": {},
    "swatch": null,
    "pattern": null,
    "patternColors": {},
    "text": [],
    "printingOption": null,
    "stockLogos": [],
    "uploads": null,
    "notes": null
}

var Pricing = {
    "base": null,
    "fabrics": {
        "sizes": {
            "43": {
                "xxxs": 0.00,
                "xxs": 0.00
            },
            "96": {
                "xxxs": 0.00,
                "xxs": 0.00
            }
        },
        "wSizes": {
            "43": {
                "xxxs": 0.00,
                "xxs": 0.00
            },
            "96": {
                "xxxs": 0.00,
                "xxs": 0.00
            }
        }
    }
}

var Quantity = {}

var Builder = {
    viewOnly: false,
    frontOnly: false,
    id: null,	//design id
    guid: null,
    step: 0,
    maxStep: 4,
    STEPS: ['fabric', 'color', 'content', 'sizing', 'review'],
    VIEWS: ['_Front', '_Back', '_Left', '_Right'],
    viewsToLoad: 0,
    viewsLoaded: 0,
    swatchMode: false,
    patternsDisplayed: false,
    priceTotal: 0,
    cartObj: { 'w': [], 'm': [] },
    patternColorsTemp: [],
    chosenDealer: null,
    uploadFiles: null,
    userData: null,
    modSku: null,
    modSkuW: null,
    hgSku: "CE58",
    ckwrap: false,
    permalinkId: null,
    init: function () {
        
        // locker page view
        if ($.QueryString['f']) {
            $('body').addClass("view-only");
            $('body').addClass("front-only");
            Builder.viewOnly = true;
            Builder.frontOnly = true;
            Builder.postInit();
        } else {
            Api.call(Api.endpoints.getUser, JSON.stringify({}), function (data) {
                //Builder.loadProduct(data);
                //console.log("get user", data);

                if (data.ID != '0' && data.ID[0] != '-') {
                    // user logged in
                    $(".modal.dealer .user-info .name").text(data.FirstName + " " + data.LastName);
                    $(".user-info-header > div.name span").text(data.FirstName);
                    $(".modal.dealer .user-info .email").text(data.email);
                    $(".user-info-header > div").show();
                } else {
                    // user not logged in
                    $(".user-info-header > a").show();
                }
                Builder.userData = data;
                Builder.postInit();

            });
        }

        Api.call(Api.endpoints.getUser, JSON.stringify({}), function (data) {
            console.log("get user", data);

            if (data.ID > 0)
                $('body').addClass('loggedin');
            else
                $('body').addClass('guest');
        });

    },
    postInit: function () {
        
        Builder.permalinkId = $.QueryString['id'];
        if (typeof (Builder.permalinkId) != 'undefined') {
            console.log('permalink duplicate');

            Api.call(Api.endpoints.duplicateDesign, JSON.stringify({ id: parseInt(Builder.permalinkId) }), function (data) {
                console.log("open design", data);
                //Api.call(Api.endpoints.getDesigns, JSON.stringify({}), Locker.displayDesigns);
                location.href = "/builder?design=" + data.guid;
            });
        }
        else {
            Builder.guid = $.QueryString['design'];
            Builder.loadDesign();

            // Add events
            $('#upload-image, #upload-zip').on('change', Builder.prepareUpload);

            //$('#upload-image').on('change', Builder.prepareUpload);

            //$('form').on('submit', uploadFiles);



            // Catch the form submit and upload the files

            window.onbeforeunload = function () {
                if ($('body').hasClass('changed') && !$('body').hasClass('view-only')) {
                    return Alerts[108];
                }
            };
            // Api.call(Api.endpoints.updateDesignStatusBE, JSON.stringify({
            // 	'ID': '6195',
            // 	'Status': 'with-dealer'
            // }), function(data) {
            // 	//Builder.loadProduct(data);
            // 	//console.log("pricing", data);
            // });
        }
    },
    garmentPricingCodes: {},
    garmentPricingCodesW: {},
    getPricingFromAPI: function (pid) {
        if (Builder.viewOnly) return;

        //console.log('product id for pricing', pid);

        var modSku = Product.sku.replace('_FULL', '').replace('_QUARTER', '');
        var modSkuW = Product.wSku;
        if (modSkuW == null) modSkuW = 'ignore';

        if (Builder.ckwrap) modSku = 'CKWRAP';

        if (Product.addUserSelectedColors) {
            var userColorList = "";
            $.each(Cust.colors, function (i) {
                userColorList += Cust.colors[i];
            });
            modSku += "-" + userColorList;
            modSkuW += "-" + userColorList;
        }

        if (Product.addFabric == false && typeof (Product.addColor) == 'string') {
            modSku = Product.addColor;
        }
        else if (Product.addFabric == false && Product.addColor == false) {

        }
        else if (Product.addFabric == true && Product.cut.length == 0) {
            modSku += Cust.fabric;
            modSkuW += Cust.fabric;
        }
        else if (Product.addFabric == true && Product.cut.length > 0) {
            modSku = modSku.substr(0, modSku.length - 1) + Cust.fabric + modSku.substr(-1, 1);
            modSkuW = modSkuW.substr(0, modSkuW.length - 1) + Cust.fabric + modSkuW.substr(-1, 1);
        }
        if (Product.addColor == true) {
            modSku += "-" + (Cust.swatch || $('[data-svg-id=swatch] [data-code]:eq(0)').data('code'));
            modSkuW += "-" + (Cust.swatch || $('[data-svg-id=swatch] [data-code]:eq(0)').data('code'));
        }
        //get each for sizes like (for each Product.sizes
        //do womens skus too like && Product.wSku != null 
        function addPricingCode(modSku, size) {
            var this_pricing_code = modSku;
            if (Product.sizes.length > 1) this_pricing_code += '-' + size;
            if (typeof Builder.garmentPricingCodes[this_pricing_code] != 'undefined' && Builder.garmentPricingCodes[this_pricing_code] != 'loading') {
                //console.log('already fetched, populate html', this_pricing_code, Builder.garmentPricingCodes[this_pricing_code]);
                $('.sizing-chart-options .row[data-size="' + size + '"] .per-piece span').html(Builder.garmentPricingCodes[this_pricing_code].toFixed(2));
                Builder.updatePricing(null, true);
            }
            else if (Builder.garmentPricingCodes[this_pricing_code] == 'loading') {
                //let it load
            }
            else {
                //console.log(this_pricing_code + ' is undefined, returning string and queuing price load');
                Builder.garmentPricingCodes[this_pricing_code] = 'loading';
                Api.call(Api.endpoints.getPricing, JSON.stringify({
                    productID: this_pricing_code
                }), function (data) {
                    //console.log(size, "loaded: $" ,  data.TotalPrice, $('.sizing-chart-options .row[data-size="'+size+'"] .per-piece span').length )
                    Builder.garmentPricingCodes[this_pricing_code] = data.TotalPrice;
                    $('.sizing-chart-options .row[data-size="' + size + '"] .per-piece span').html(data.TotalPrice.toFixed(2));
                    Builder.updatePricing(null, true);
                });
            }
        }
        function addPricingCodeW(modSkuW, size) {
            var this_pricing_code = modSkuW + '-' + size;
            if (typeof Builder.garmentPricingCodesW[this_pricing_code] != 'undefined' && Builder.garmentPricingCodesW[this_pricing_code] != 'loading') {
                //already fetched, populate html
                $('.sizing-chart-options-women .row[data-size="' + size + '"] .per-piece span').html(Builder.garmentPricingCodesW[this_pricing_code].toFixed(2));
                Builder.updatePricing(null, true);
            }
            else if (Builder.garmentPricingCodesW[this_pricing_code] == 'loading') {
                //let it load
            }
            else {
                //console.log(this_pricing_code + ' is undefined, returning string and queuing price load');
                Builder.garmentPricingCodesW[this_pricing_code] = 'loading';
                Api.call(Api.endpoints.getPricing, JSON.stringify({
                    productID: this_pricing_code
                }), function (data) {
                    //console.log(size, "w loaded: $" ,  data.TotalPrice, '.sizing-chart-options .row[data-size="'+size+'"] .per-piece span')
                    Builder.garmentPricingCodesW[this_pricing_code] = data.TotalPrice;
                    $('.sizing-chart-options-women .row[data-size="' + size + '"] .per-piece span').html(data.TotalPrice.toFixed(2));
                    Builder.updatePricing(null, true);
                });
            }
        }
        for (var i = 0; i < Product.sizes.length; i++) {
            addPricingCode(modSku, Product.sizes[i]);
        }
        if (Product.wSku != null) {
            for (var i = 0; i < Product.wSizes.length; i++) {
                addPricingCodeW(modSkuW, Product.wSizes[i]);
            }
        }

        Builder.modSku = modSku;
        Builder.modSkuW = modSkuW;
    },
    loadDesign: function () {
        
        var IsAdmin = false;
        Api.call(Api.endpoints.getAdmin, JSON.stringify({}), function (Data) {
            if (Data != null)
            {
                if(Data=="Admin")
                {
                    IsAdmin = true;
                }
            }
        });
              
        Api.call(Api.endpoints.getDesign, JSON.stringify({
            guid: Builder.guid
        }), function (data) {
            //console.log('loadDesign', data, typeof(data));
            if (data == null) {
                window.location = "/builder/404";
            }
            else {

                Builder.loadProduct(data);
            }
        });
    },
    loadProduct: function (data) {
        Builder.id = data.ID;
        if (typeof data.Customization != 'undefined' && data.Customization != "" && data.Customization != null) Cust = JSON.parse(data.Customization);

        if (data.hasOwnProperty('Notes') && typeof (data.Notes) != 'undefined' && data.Notes != '' && data.Notes != null) $('.garment-notes').html(data.Notes);
        else { $('.garment-notes').remove(); }

        Quantity = JSON.parse(data.Quantities);

        Builder.updateZipLink();

        var urlPath = "/svg/" + data.Product + "/" + data.Product + ".js";
        $.ajax({
            url: urlPath,
            type: 'GET',
            dataType: 'json',
            success: function (response) {
                Product = response;
                //console.log("product obj",Product);
                if (Product.colorSwatches) Builder.swatchMode = true;

                // $(".option-set.ctas .buttons").prepend('<a href="#" class="to-dealer button">SEND TO DEALER</a>');
                // 	$(".button.to-dealer").bind('click', Builder.openDealerModal);

                if (Product.category.indexOf('singlet') > 0 || Product.category.indexOf('Sublimation') > 0) {
                    //console.log('is singlet');
                    // send to dealer
                    if (Builder.userData) {
                        if (!Builder.userData.IsDealer) {
                            //console.log('not a dealer, show send to dealer button');
                            $(".option-set.ctas .buttons").prepend('<a href="#" class="to-dealer button">SEND TO DEALER</a>');
                            $(".button.to-dealer").bind('click', Builder.openDealerModal);
                            $(".option-set.ctas .buttons .to-cart").remove();
                        } else {
                            //console.log('is a dealer, show add to cart');
                            $(".option-set.ctas .buttons").prepend('<a class="to-cart button"><span>ADD TO CART</span><img src="../images/button-ajax-spinner.gif" /></a>');
                            $(".button.to-cart").bind('click', function (e) {
                                e.preventDefault();
                                Builder.addToCart();
                            })
                        }
                    }
                } else {
                    // add to cart
                    //console.log('not a singlet, show add to cart', Product.category);
                    $(".option-set.ctas .buttons").prepend('<a class="to-cart button"><span>ADD TO CART</span><img src="../images/button-ajax-spinner.gif" /></a>');
                    $(".button.to-cart").bind('click', function (e) {
                        e.preventDefault();
                        Builder.addToCart();
                    })
                }

                $(".design-details span.sku").text(Product.sku);
                $(".design-details span.category").text(Product.category);

                //set some defaults
                //console.log("load products", Cust)
                if (typeof Cust.fabric == 'undefined' || Cust.fabric == null) Cust.fabric = Product.fabricOptions[0].id;
                Builder.getArtworkObject();

                Builder.displayProduct();

                Builder.getPricingFromAPI(Product.sku);
            },
            error: function (data, status, e) {
                console.log(data, status, e);
                //Api.error(9);
            }
        })


    },
    initViewModel: function (data, product) {

    },
    productDataForSaving: function (status) {

        if (status == null || status == undefined) status = 'NEW';

        Cust.text = Builder.getArtworkObject();

        //Cust.printingOption = null;


        var qObj = { "sizes": {}, "wSizes": {} };
        $(".sizing-chart-options input").each(function () {
            var name = $(this).attr("name");
            var quant = $(this).val() || 0;

            qObj.sizes[name] = quant;
        });
        $(".sizing-chart-options-women input").each(function () {
            var name = $(this).attr("name");
            var quant = $(this).val() || 0;

            qObj.wSizes[name] = quant;
        });

        //console.log("quantities", qObj);
        Cust.notes = $("#notes").val();

        //console.log("Cust", Cust);
        return {
            id: Builder.id,
            productId: Product.sku,
            category: Product.category,
            customization: JSON.stringify(Cust),
            quantities: JSON.stringify(qObj),
            Status: status
        }
    },
    getArtworkObject: function () {

        // possible saved objects
        var custFront = Cust.text["_Front"];
        var custBack = Cust.text["_Back"];
        var custLeft = Cust.text["_Left"];
        var custRight = Cust.text["_Right"];

        // possible new objects
        var artFront = svgText.layerObjects["_Front"];
        var artBack = svgText.layerObjects["_Back"];
        var artLeft = svgText.layerObjects["_Left"];
        var artRight = svgText.layerObjects["_Right"];

        // if there's no new stuff use the old stuff, bro
        if (artFront.length > 0) custFront = svgText.layerObjects["_Front"];
        if (artBack.length > 0) custBack = svgText.layerObjects["_Back"];
        if (artLeft.length > 0) custLeft = svgText.layerObjects["_Left"];
        if (artRight.length > 0) custRight = svgText.layerObjects["_Right"];

        return {
            "_Front": custFront,
            "_Back": custBack,
            "_Left": custLeft,
            "_Right": custRight
        };
    },
    initUi: function () {
        console.log('initUi');
        $("[data-nav]").bind('click', function (e) {
            e.preventDefault();
            var newStep = $(this).data('nav');

            if (newStep == "next") {
                newStep = Builder.step + 1;
                while ($('[data-nav=' + newStep + ']').css('display') == 'none') {
                    newStep++;
                }
            }

            if (newStep == "prev") {
                newStep = Builder.step - 1;
                while ($('[data-nav=' + newStep + ']').css('display') == 'none') {
                    newStep--;
                }
            }

            var keepGoing = true;
            for (var i = Builder.step; i < newStep; i++) {
                //if ($('[data-nav='+newStep+']').css('display') != 'none') {
                if (!Builder.validateStep(i)) {
                    Builder.gotoStep(i);
                    Builder.validateStep(i, true)
                    keepGoing = false;
                    break;
                }
                //}
            }

            if (keepGoing) // if moving forward, validate the step first
                Builder.gotoStep(newStep);
        })

        $('body').on('click', '[data-nav]', function () {
            $('body').addClass('working');
            //console.log('save data', JSON.stringify(Builder.productDataForSaving()));
            Api.call(Api.endpoints.saveDesign,
			JSON.stringify(Builder.productDataForSaving("NEW")),
			Builder.acknowledgeSaveQuietly);
        });

        $('body').on('click', '[data-save]', function () {
            $('body').addClass('working');
            Api.call(Api.endpoints.saveDesign,
			JSON.stringify(Builder.productDataForSaving("NEW")),
			Builder.acknowledgeSave);
        });

        $('body').on('click', '.modal .close', function (e) {
            e.preventDefault();
            $(".modal, .modal-bknd").removeClass("active");
        });

        $(".option-set.sizing input").change(Builder.updatePricing);

        $(".button.print").bind('click', function (e) {
            e.preventDefault();
            window.print();
        })

        $(".preview-nav a").bind('click', function (e) {
            e.preventDefault();
            var position = $(this).data('view');
            $(".preview div[data-view]").removeClass("active");
            $(".preview div[data-view=" + position + "]").addClass("active");
            $(".preview-nav a").removeClass("active");
            $(this).addClass("active");
        });

        /*$(".add-image").click(function(){
			Builder.addImage();
		});*/

        $(".option-set.cuff .pattern").bind('click', function (e) {
            e.preventDefault();
            $(".option-set.cuff .pattern").removeClass("active");
            $(this).addClass("active");

            // set the pattern in svg
            // reset colors?
            // display colors associated with pattern
        });

        $(".zoom").click(function (e) {
            e.preventDefault();
            var html = '';
            var count = 0;
            $(".canvas-wrapper").each(function (e) {
                html += "<div class='view'>" + $(this).children(".svg").html() + "</div>";
            });

            $(".modal.expand .content").html(html);
            $(".modal.expand, .modal-bknd").addClass('active');
        });

        $(".option-set.review h3").click(function () {
            $(this).parent().toggleClass("active");
        })

        $(".button.custom-browse").bind('click', function (e) {
            e.preventDefault();
            //$("input.add-image").click();
            $("#upload-image").click();
        })

        $(".button.stock-logos").bind('click', function (e) {
            e.preventDefault();
            if (!$(".modal.stock-logos").hasClass("loaded")) {
                $(".modal.stock-logos .logos ul li").each(function () {
                    var file = $(this).data('svg');
                    Builder.loadStockLogoSvg(file, $(this).attr("id"));
                });
                $(".modal.stock-logos").addClass("loaded");
            }
            $(".modal.stock-logos, .modal-bknd").addClass("active");

        });

        $(".modal.stock-logos .buttons .tab").bind('click', function (e) {
            var id = $(this).attr("id");
            $(".logos ul").removeClass("active");
            $("ul." + id).addClass("active");
            $(".modal.stock-logos .buttons .button").addClass("light");
            $(this).removeClass("light");
        });

        $(".logos ul li").click(function (e) {
            e.preventDefault();
            var svg = $(this).children("div").html();//.children("svg")
            $(".modal.stock-logos .close").trigger('click');
            svgText.addSVGLogo(svg, $(this).attr("data-svg"));
        })

        if (Product.wSku != null) {
            $(".option-set.sizing .sub-title .button").bind('click', function (e) {
                e.preventDefault();
                $(".option-set.sizing .sub-title .button").removeClass("active");
                $(this).addClass("active");
                var style = $(this).data('style');
                $(".option-set.sizing .sub-title .style").text(style);
                $(".option-set.sizing .charts").removeClass('Women').removeClass('Men');
                $(".option-set.sizing .charts").addClass(style);
            });
        }
        else {
            $(".option-set.sizing>.sub-title .womens").css({ 'display': 'none' });
            $(".option-set.sizing>.sub-title").html("Sizing Chart");
        }



        // leave this at the bottom
        $(".button.disabled").click(function (e) { e.preventDefault(); return false; });


        $(".modal.dealer .submit").bind('click', function (e) {
            e.preventDefault();
            //console.log('assignDesignToDealer data to send', JSON.stringify({"id":Builder.id, "DealerID":Builder.chosenDealer.id, "DealerEmail":Builder.chosenDealer.email,"message":$(".modal.dealer textarea").val()}));
            Api.call(Api.endpoints.assignDesignToDealer, JSON.stringify({ "id": Builder.id, "DealerID": Builder.chosenDealer.id, "DealerEmail": Builder.chosenDealer.email, "message": $(".modal.dealer textarea").val() }), function () {
                Api.call(Api.endpoints.saveDesign,
                JSON.stringify(Builder.productDataForSaving("with-dealer")),
                function () {
                    $(".modal.dealer .close").trigger('click');
                    location.href = "/locker";
                });

            });
        });

        // if one or fewer fabric options, hide fabric nav
        if (Product.fabricOptions.length <= 1) {
            $(".row.steps span[data-nav='0']").hide().next("em").hide();
            if (Cust.step == 0 || Cust.step == null || Cust.step == undefined) {
                Cust.step = 1;
            }
        }

        // if no color options, hide color nav
        if (Product.hasOwnProperty('skipColor')) {
            $(".row.steps span[data-nav='1']").hide().next("em").hide();
            if (Cust.step == 1 || Cust.step == null || Cust.step == undefined) {
                Cust.step = 2;
            }
        }

        // if no art options, hide art nav
        if (Product.hasOwnProperty('skipPrinting')) {
            $(".row.steps span[data-nav='2']").hide().next("em").hide();
            if (Cust.step == 2) {
                Cust.step = 3;
            }
        }

        if (Cust.step == null) Cust.step = 0;

        $("#print_type").each(function () {

            if (Product.printingOptions == "Screen Printing" && Product.hasOwnProperty('sublimationColors')) {
                $(this).find("input").change(function () {
                    var id = $(this).attr("id");
                    var type = $(this).val();
                    Cust.printingOption = type;
                    //console.log("change", Cust.printingOption);
                    svgText.pricing.getCustomPanels();
                });
            }
            else if (Product.printingOptions == "Screen Printing") {//screen only
                $(this).find("input,label").css({ 'display': 'none' });
                $(this).find("label[for='print_option_screen_printing']").css({ 'display': '' });
            }
            else if (Product.printingOptions == "Sublimation Printing") { //sublimation only
                $(this).find("input,label").css({ 'display': 'none' });
                $(this).find("label[for='print_option_sublimation_printing']").css({ 'display': '' });
            }
            else {
                //should never happen
                $('#print_type').hide();
            }

        });

        Builder.populateWithCustomization();


    },
    initStepUi: function () {
        console.log('initStepUi', Builder.step);
        $.each(Builder.STEPS, function (index, value) {
            $('body').removeClass(value);
        });
        $('body').addClass(Builder.STEPS[Builder.step]);

        $(".canvas-wrapper").removeClass("review-active");

        switch (Builder.step) {
            case 0:	//fabric
                $("g[id^=BOX]").hide();
                break;
            case 1:	//color
                $("g[id^=BOX]").hide();
                Builder.displayProductColors();
                Builder.populateColorsWithCustomization();
                if (Product.patternOptions && Product.patternOptions.length == 0)
                    $(".option-set.patterns").hide();
                break;
            case 2:	//content
                $("g[id^=BOX]").show();
                Builder.recheckPrintingOptions();
                break;
            case 3:	//sizing
                $("g[id^=BOX]").hide();
                Builder.updatePricing();
                break;
            case 4:	//review
                $("g[id^=BOX]").hide();
                Builder.updatePricing();
                svgText.showAllArt();
                break;
            default:
                break;
        }
    },
    recheckPrintingOptions: function () {
        if (Product.hasOwnProperty('sublimationColors') && Cust.hasOwnProperty('swatch')) {
            //(because only stock garments have an option)

            //check if text colors include any color OTHER than the allowed sublimationColors

            var subColors = Product.sublimationColors;
            var notAllowedColorFound = false;

            $($.merge($.merge($.merge(svgText.layerObjects['_Front'], svgText.layerObjects['_Back']), svgText.layerObjects['_Left']), svgText.layerObjects['_Right'])).each(function () {
                $(this).each(function () {
                    var layer = this;
                    $(subColors).each(function () {
                        if (layer.type == 'imageLayer')
                            notAllowedColorFound = true;
                        else {
                            if (layer.hasOwnProperty('strokecode') && layer.strokecode != this) notAllowedColorFound = true;
                            if (layer.hasOwnProperty('fillcode') && layer.fillcode != this) notAllowedColorFound = true;
                            if (layer.hasOwnProperty('area1code') && layer.area1code != this) notAllowedColorFound = true;
                            if (layer.hasOwnProperty('area2code') && layer.area2code && layer.area2code != this) notAllowedColorFound = true;
                            if (layer.hasOwnProperty('area3code') && layer.area3code && layer.area3code != this) notAllowedColorFound = true;
                        }
                    })
                })
            })

            //console.log(notAllowedColorFound);

            if (notAllowedColorFound) {
                //if so, set the choice to screenprinting and remove the choice
                $("#print_option_screen_printing").click();
                $("#print_type").find("input,label").css({ 'display': 'none' });
                $("#print_type").find("label[for='print_option_screen_printing']").css({ 'display': '' });
                Cust.printingOption = (Cust.printingOption == null) ? $("#print_type input:checked").attr("id") : Cust.printingOption;
            }
            else {
                //if no, show screen print choice
                $("#print_type").find("input,label").css({ 'display': '' });
                $("#" + Cust.printingOption).prop('checked', true);
                Cust.printingOption = (Cust.printingOption == null) ? $("#print_type input:checked").attr("id") : Cust.printingOption;
            }
        }
    },
    validateStep: function (step, hideAlerts) {
        console.log('validateStep', step);

        switch (step) {
            case 0:	//fabric
                if (Product.fabricOptions.length > 1) {
                    var fabricIsChosen = false;

                    $(".fabric-opt").each(function () {
                        if ($(this).hasClass("active"))
                            fabricIsChosen = true;
                    });

                    if (Product.fabricOptions[0].id < 0) {
                        fabricIsChosen = true;
                    }

                    if (!fabricIsChosen) !hideAlerts && CK.alert(103);
                    return fabricIsChosen;
                } else {
                    return true;
                }
                break;
            case 1:	//color
                if (!Product.hasOwnProperty('skipColor')) {
                    // make sure all colors are selected
                    var groupCount = $(".option-set.color .group").length;
                    groupCount += $(".option-set.patterns .group").length;
                    var colorCount = 0;

                    var colorMatchError = false;

                    if (Product.sku.indexOf("SWJUSA") >= 0) {
                        // sleeves and certain panels cannot match
                        var sleeves = $("div[data-svg-id='SLEEVES']");
                        var sleeveColor = sleeves.find('.active').data("code");
                    }

                    $(".option-set.color .group").each(function () {
                        if ($(this).children('ul').children("li.active").length > 0)
                            colorCount++;
                        else
                            $(this).addClass("error");

                        if (sleeveColor && $(this).data("svg-id").indexOf('BODY') >= 0 && $(this).data("svg-id") != 'SLEEVES') {
                            if ($(this).find('.active').data('code') == sleeveColor) {
                                $(this).addClass("error");
                                colorMatchError = true;
                            }
                        }
                    });
                    $(".option-set.patterns .group").each(function () {
                        if ($(this).children('ul').children("li.active").length > 0)
                            colorCount++;
                        else
                            $(this).addClass("error");
                    });

                    if (colorCount != groupCount) {
                        !hideAlerts && CK.alert(104);
                        return false;
                    }

                    if (colorMatchError) {
                        !hideAlerts && CK.alert(110);
                        return false;
                    }
                }
                return true;
                break;
            case 2:	//text
                // check bounding boxes
                return true;
                break;
            case 3:	//sizing
                // make sure quantity is >= min quanitity
                var total_quantity = 0;
                $(".option-set.sizing input").each(function () {
                    total_quantity += Number($(this).val() || 0);
                });
                if (total_quantity < Product.minQuantity) {
                    !hideAlerts && CK.alert(101);
                    return false;
                }

                return true;
                break;
            case 4:	//review
                // no validation

                return true;
                break;
            default:
                return false;
                break;
        }


    },
    gotoStep: function (step) {
        console.log('gotoStep', step);
        if (step <= Builder.maxStep && step >= 0 && !$.QueryString['f']) {
            if ((step == 3 || step == 4) && Builder.userData.ID < 0) {

                CK.alert(300);
            } else {
                if (step == 0)
                    $("[data-nav=prev]").addClass("disabled");
                else if (step == Builder.maxStep)
                    $("[data-nav=prev]").removeClass("disabled");
                else
                    $("[data-nav]").removeClass("disabled");

                $(".option-set.active, [data-nav]").removeClass("active")
                $(".option-set[data-step=" + step + "]").addClass("active");
                $("[data-nav=" + step + "]").addClass("active");

                Builder.step = step;
                Cust.step = step;
                Builder.initStepUi();
            }

        }
    },
    hasChanged: function (reason) {
        //console.log("builder has changed but why?", "because: "+reason);
        $("body").addClass("changed");
        Builder.recheckPrintingOptions();
        Cust.text = Builder.getArtworkObject();
    },
    initSVGDrag: function () {
        $("svg image").mousedown(function (e) {
            $(this).attr("data-cx", $(this).attr("x"));
            $(this).attr("data-cy", $(this).attr("y"));
            $(this).attr("data-zero-x", e.pageX);
            $(this).attr("data-zero-y", e.pageY);
            $(this).attr("data-dragme", "true");
        }).mouseup(function () {
            $(this).attr("data-dragme", "false");
        }).mousemove(function (e) {
            if ($(this).attr("data-dragme") == "true") {
                var mx = e.pageX;
                var my = e.pageY;

                var xpos = Number($(this).attr("data-cx")) + (mx - Number($(this).attr("data-zero-x")));
                var ypos = Number($(this).attr("data-cy")) + (my - Number($(this).attr("data-zero-y")));

                $(this).attr("x", xpos);
                $(this).attr("y", ypos);
            }
        });
    },
    checkLoadProgress: function (type) {
        console.log('checkLoadProgress', Builder.viewsLoaded, Builder.viewsToLoad);
        if (type == "view") {
            if (Builder.viewsLoaded >= Builder.viewsToLoad) {
                Builder.displayProductColors();
                Builder.populateColorsWithCustomization();
                Builder.initPatterns();
                svgText.init();
                $('body').removeClass("changed").addClass('loaded');
                if (Builder.viewOnly) $("g[id^=BOX]").hide();
                Builder.initStepUi();
            }
        }
        else if (type == "logo") {

        }
    },
    loadGarmentSvg: function (viewId) {
        console.log('loadGarmentSvg', viewId);
        var view = Builder.VIEWS[viewId];
        $.get("../svg/" + Product.sku + "/" + Product.sku + view + ".svg", function (data) {
            var svg = $(data).children("svg");
            $("g[id]", svg).each(function () {
                $(this).attr("id", ($(this).attr("id") + view));

                $("path", $(this)).each(function () {
                    $(this).attr("data-orig-fill", $(this).attr("fill"));
                });
            });

            //var defaultMask;
            $(Product.masks[view.substr(1)]).each(function () {
                //var mask_name = (Product.sku == "E58") ? this.name+"-MASK" : this.name;

                var originalSvgShapeForMask = $("g[id^='" + this.name + "']:not([id*='PATTERN'])", svg);
                var cleansedMaskSvgHtml = '<svg height="0" width="0"><defs><clipPath id="mask-' + this.name + view + '">';

                //clip paths can only have shapes so need to cleanse the svg node of other elements
                //<circle>, <ellipse>, <line>, <path>, <polygon>, <polyline>, <rect>) or a <text>
                var allowed = { 'circle': 1, 'ellipse': 1, 'line': 1, 'path': 1, 'polygon': 1, 'polyline': 1, 'rect': 1, 'text': 1 };
                function parseChildren(node) {
                    $.each($(node).children(), function () {
                        if ($(this).children().length > 0)
                            parseChildren(this);

                        else {
                            if (allowed.hasOwnProperty(this.nodeName.toLowerCase()))
                                cleansedMaskSvgHtml += $('<div>').append($(this).clone()).html();
                        }
                    })
                }
                parseChildren(originalSvgShapeForMask);

                cleansedMaskSvgHtml += '</clipPath></defs></svg>';
                $(".svg-masks").append($(cleansedMaskSvgHtml));

            });

            var custom_svg = $("g[id^='CUSTOM']", svg);
            $(".canvas-wrapper[data-view=" + view + "] .svg").html(svg);

            //custom_svg.attr("width", 360).attr("height", 756).attr("clip-path", "url(#"+defaultMask+")");

            var viewName = Builder.VIEWS[viewId].substr(1).toUpperCase();
            if (typeof (Product.views[viewId]) == "string")
                viewName = Product.views[viewId].toUpperCase();

            $(".preview-nav a[data-view=" + view + "]").html("<span><img src='/images/thumbs/" + Product.look + "/" + viewId + ".png' /></span><br>" + viewName);

            Builder.viewsLoaded++;
            Builder.checkLoadProgress("view");
        });
    },
    loadStockLogoSvg: function (file_ref, group) {
        $.get("../svg/stock_logos/" + file_ref + ".svg", function (data) {
            var svg = $(data).children("svg");
            /*
                        var a1 = '#000000';
                        var a2 = '#f4ed9d';
                        var a3 = '#e01b07';
                        $(svg).find('*[id="AREA_1"] path').each(function(){
                            $(this)[0].style.fill = a1;
                            $(this)[0].style.stroke = a1;
                        })
                        $(svg).find('*[id="AREA_2"] path').each(function(){
                            $(this)[0].style.fill = a2;
                            $(this)[0].style.stroke = a2;
                        })
                        $(svg).find('*[id="AREA_3"] path').each(function(){
                            $(this)[0].style.fill = a3;
                            $(this)[0].style.stroke = a3;
                        })
                        */
            $("li[data-svg='" + file_ref + "']").addClass("loaded").children("div").html(svg);

            Builder.checkLoadProgress("logo");
        });
    },
    setSvgColor: function (group, hex, code, image) {
        if (hex != null) {
            if ($("g[id^=" + group + "]").length > 0) {
                $("g[id^=" + group + "PATTERN]").hide();
                $("g[id^=" + group + "] path, g[id^=" + group + "] rect, g[id^=" + group + "] polygon, g[id^=" + group + "] ellipse").attr("fill", "#" + hex);

                if (image) {
                    $("g[id^=" + group + "PATTERN]").hide();
                    $("g[id^=" + group + "PATTERN_" + code + "]").show();
                    //console.log("g[id^="+group+"PATTERN_"+$(this).data('code')+"]");
                }
            }
            else {
                //gradient
                $("stop[data-grad-id^=" + group + "]").css("stop-color", "#" + hex);
            }
        }
    },
    resetGarmentSvg: function () {
        $("svg path[data-orig-fill], svg rect[data-orig-fill], svg polygon[data-orig-fill], svg ellipse[data-orig-fill]").each(function () {
            $(this).attr("fill", $(this).attr("data-orig-fill"));
        });
    },
    displayProduct: function () {
        console.log('displayProduct');


        $("body").addClass(Product.sku);
        if (Product.hasOwnProperty('blackOnly'))
            $("body").addClass('blackOnly');
        $(".product-title .text").text(Product.sku);

        // fabrics
        $('.option-set.fabric').empty();

        if (Product.fabricOptions[0].id >= 0) {
            $(Product.fabricOptions).each(function () {
                var html = '<div class="fabric-opt" data-fabric-id="' + this.id + '">';
                html += "<strong>" + this.name + "</strong>";
                html += "<p>" + this.description + "</p>";
                html += '</div>';

                $('.option-set.fabric').append($(html));
            });
            $('.option-set.fabric').on('click', '[data-fabric-id]:not(.active)', function () {
                var $fabric = $(this);
                CK.prompt(105, function () {
                    $('[data-fabric-id]').removeClass('active');
                    $fabric.addClass('active');
                    Builder.resetGarmentSvg();

                    Cust.fabric = $fabric.data('fabric-id');
                    if (Builder.swatchMode) {
                        Cust.swatch = null;
                    }
                    else {
                        $.each(Cust.colors, function (key, value) {
                            Cust.colors[key] = null;
                        })
                    }
                });
            })
        } else {
            $('.option-set.fabric, .navigation .steps span[data-nav=0]').hide();
            $('.steps em').eq(0).hide();
            $('.navigation .steps span[data-nav=0]').trigger('click');

        }

        //colors are done in initStepUi bc dependant on fabric

        // patterns
        // use Builder.initPatterns after svg is loaded

        // texts



        // views
        $('.preview-nav [data-view]').addClass('hide');
        if (Builder.frontOnly) {
            Builder.viewsToLoad = 1;
            $('.preview-nav [data-view]').eq(0).removeClass('hide');
            Builder.loadGarmentSvg(0);
        }
        else {
            $(Product.views).each(function () {
                if (this != false)
                    Builder.viewsToLoad++;
            });
            $(Product.views).each(function (e, i) {
                if (this != false) {
                    $('.preview-nav [data-view]').eq(e).removeClass('hide');
                    Builder.loadGarmentSvg(e);
                }
            });
        }

        $(".preview").attr("data-views", Builder.viewsToLoad);

        //sizing
        $('[data-min]').text(Product.minQuantity);
        $('.sizing-chart-options').empty();
        $(Product.sizes).each(function () {
            var html = '<div class="row" data-size="' + this + '">';
            html += '<div class="col"><strong>' + this + '</strong></div>';
            html += '<div class="col men">:<input type="text" value="0" name="' + this + '" /></div>';
            html += '<div class="col per-piece">$<span></span></div>';
            html += '<div class="col piece-total">0.00</div>';
            html += '</div>';
            $('.sizing-chart-options').append($(html));
        });
        if (Product.wSku != null) {
            $(Product.wSizes).each(function () {
                var html = '<div class="row" data-size="' + this + '">';
                html += '<div class="col"><strong>' + this + '</strong></div>';
                html += '<div class="col women">:<input type="text" value="0" name="' + this + '" /></div>';
                html += '<div class="col per-piece">$<span></span></div>';
                html += '<div class="col piece-total">0.00</div>';
                html += '</div>';
                $('.sizing-chart-options-women').append($(html));
            });
        }

        if (Product.hasOwnProperty('printEmbroideryOption')) {
            $(".embroidery-note").addClass("active");
        }

        Builder.initUi();
    },
    displayProductColors: function () {
        console.log('displayProductColors');
        $('.option-set.color').empty();

        if (Builder.swatchMode) { //stock garment
            var html = '<div class="group" data-svg-id="swatch">';
            html += '<strong>Color Options</strong>';
            html += '<ul>';
            html += '</ul>';
            html += '</div>';
            $('.option-set.color').append($(html));

            $(Product.colorSwatches[Cust.fabric]).each(function () {
                var $li = $('<li title="' + this.name + '" data-hex="' + this.hex + '" data-code="' + this.code + '"></li>').data('colors', this.colors);
                $('.option-set.color .group ul').append($li);
            });

            $(".option-set.color .group ul li").each(function () {
                $(this).css("background-color", "#" + $(this).data("hex"));
                $(this).click(function (e) {
                    var colors = $(this).data('colors');
                    $(this).parent().parent().removeClass("error");
                    $(this).siblings("li.active").removeClass("active");
                    $(this).addClass("active");
                    $(Product.panels).each(function () {
                        Builder.setSvgColor(this.name, colors[this.name]['hex']);
                    })
                    Cust.swatch = $(this).data('code');

                    if ($(this).data('code') == "NY" || $(this).data('code') == "BK" || $(this).data('code') == "PR" || $(this).data('code') == "NYSG" || $(this).data('code') == "BKOR" || $(this).data('code') == "NYCB" || $(this).data('code') == "BKSG" || $(this).data('code') == "BKSC" || $(this).data('code') == "NYVG") {
                        $("g[id^=BOX] *").attr('stroke', '#00FF99');
                    }
                    else {
                        $("g[id^=BOX] *").attr('stroke', '#000000');
                    }
                });
            });
        }
        else { //fully custom colors
            $(Product.panels).each(function () {
                var panel = this;
                var html = '<div class="group" data-svg-id="' + panel.name + '">';
                html += '<strong>' + panel.display + ' Color</strong>';
                html += '<ul>';
                $(Product.colorOptions[Cust.fabric][panel.name]).each(function () {
                    html += '<li title="' + this.name + '" data-hex="' + this.hex + '" data-code="' + this.code + '" data-image="' + (typeof (this.image) != 'undefined') + '">';
                    if (typeof (this.thumb) != 'undefined') {
                        html += '<img src="' + this.thumb + '" />';
                    }
                    html += '</li>';
                    //check for image
                });
                html += '</ul>';
                html += '</div>';
                $('.option-set.color').append($(html));

            });

            $(".option-set.color .group ul li").each(function () {
                $(this).css("background-color", "#" + $(this).data("hex"));

                $(this).click(function (e) {
                    $(this).parent().parent().removeClass("error");
                    $(this).siblings("li.active").removeClass("active");
                    $(this).addClass("active");
                    var group = $(this).closest(".group").data("svg-id");
                    console.log('CLR', group, $(this).data('code'));
                    if (group == "BODY") {
                        if ($(this).data('code') == "BK" || $(this).data('code') == "BN" || $(this).data('code') == "NY" || $(this).data('code') == "PR") {
                            $("g[id^=BOX] *").attr('stroke', '#00FF99');
                        }
                        else {
                            $("g[id^=BOX] *").attr('stroke', '#000000');
                        }
                    }
                    /*
                                        if(Product.sku == "CE58" && group == "STRAPS"){
                                            if($(this).data('code') == 'WH'){
                                                Builder.hgSku = "E58";
                                            }else{
                                                Builder.hgSku = "CE58";
                                            }
                                        }
                    */
                    var thisGroup = $(this).parent().parent().data('svg-id');
                    //trigger clicks on other image tiles
                    if ($(this).data('image')) {
                        $('li[data-code=' + $(this).data('code') + ']').each(function () {
                            $(this).parent().parent().removeClass("error");
                            $(this).siblings("li.active").removeClass("active");
                            $(this).addClass("active");
                            var group = $(this).closest(".group").data("svg-id");
                            Builder.setSvgColor(group, $(this).data('hex'), $(this).data('code'), $(this).data('image'));
                            Cust.colors[group] = $(this).data('code');
                        });

                        $("li.pattern").removeClass("active");
                        $('li[data-pattern=' + $(this).data('code') + ']').addClass('active');
                        Builder.enablePattern($('li[data-pattern=' + $(this).data('code') + ']').data('pattern-data'));
                    }
                    else if ($(this).siblings('[data-code^=MO]').length > 0 && $('li[data-code^=MO].active').length > 0) {
                        $('li[data-code^=MO].active').siblings('[data-code=WH]').each(function () {
                            if ($(this).parent().parent().data('svg-id') != thisGroup) {
                                $(this).parent().parent().removeClass("error");
                                $(this).siblings("li.active").removeClass("active");
                                $(this).addClass("active");
                                var group = $(this).closest(".group").data("svg-id");
                                Builder.setSvgColor(group, $(this).data('hex'), $(this).data('code'), $(this).data('image'));
                                Cust.colors[group] = $(this).data('code');
                            }
                        });

                        $("li.pattern").removeClass("active");
                        $('#btn-pattern-1').addClass('active');
                        Builder.enablePattern($('#btn-pattern-1').data('pattern-data'));
                    }
                    Builder.setSvgColor(group, $(this).data('hex'), $(this).data('code'), $(this).data('image'));

                    Cust.colors[group] = $(this).data('code');

                    //if addUserSelectedColors, relookup pricing
                    if (Product.addUserSelectedColors == true) {
                        Builder.getPricingFromAPI();
                    }
                });
            });
        }
    },
    populateWithCustomization: function () {
        console.log('populateWithCustomization');

        //fabrics
        $('[data-fabric-id=' + Cust.fabric + ']').addClass('active');

        //colors are done in initStepUi bc dependant on fabric

        //patterns

        //texts
        // if(Cust.hasOwnProperty('printingOption')){
        // 	if(Cust.printingOption != null){
        // 		$("#"+Cust.printingOption).prop('checked', true);
        // 	}
        // }

        //sizing
        //console.log("Quantity", Quantity);
        if (Quantity != null) {
            //console.log('set quants in table');
            $(Product.sizes).each(function () {
                $('.sizing-chart-options [name="' + this + '"]').val(Quantity.sizes[this]);
                Builder.cartObj['m'][this] = Quantity.sizes[this];
                //console.log('size', Builder.cartObj[this]);
            });
            $(Product.wSizes).each(function () {
                $('.sizing-chart-options-women [name="' + this + '"]').val(Quantity.wSizes[this]);
                Builder.cartObj['w'][this] = Quantity.sizes[this];
            });
        } else {
            //console.log('no quants to show');
            $('.sizing-chart-options input, .sizing-chart-options-women input').val(0);
        }
        Builder.updatePricing(null, true);

        if (Cust.notes != null) $("#notes").text(Cust.notes);

        var toStep = (Builder.viewOnly) ? 1 : Cust.step;
        //console.log('gotoStep', toStep);
        Builder.gotoStep(toStep);
    },
    populateColorsWithCustomization: function () {
        console.log('populateColorsWithCustomization');
        $("g[id*=PATTERN_MO]:not([id*=_A_])").hide();

        if (Builder.swatchMode) {
            if (Cust.swatch && Cust.fabric) {
                var swatch;
                $(Product.colorSwatches[Cust.fabric]).each(function () {
                    if (this.code == Cust.swatch)
                        swatch = this;
                });
                if (!swatch) {
                    CK.alert(Errors.GENERIC);
                    return;
                }

                $('[data-code=' + Cust.swatch + ']').addClass('active');
                $(Product.panels).each(function () {
                    Builder.setSvgColor(this.name, swatch.colors[this.name].hex);
                });


                if (Cust.swatch == "NY" || Cust.swatch == "BK" || Cust.swatch == "PR" || Cust.swatch == "NYSG" || Cust.swatch == "BKOR" || Cust.swatch == "NYCB" || Cust.swatch == "BKSG" || Cust.swatch == "BKSC" || Cust.swatch == "NYVG") {
                    $("g[id^=BOX] *").attr('stroke', '#00FF99');
                }
                else {
                    $("g[id^=BOX] *").attr('stroke', '#000000');
                }
            }
        }
        else {
            $(Product.panels).each(function () {
                var group = this.name, hex, image;
                var code = Cust.colors[group];
                if (code) {
                    var el = $('[data-svg-id="' + group + '"] [data-code="' + code + '"]').addClass('active');
                    hex = el.data('hex');
                    image = el.data('image');
                }
                else
                    hex = null;

                Builder.setSvgColor(group, hex, code, image);

                if (group == "BODY") {
                    if (code == "BK" || code == "BN" || code == "NY" || code == "PR") {
                        $("g[id^=BOX] *").attr('stroke', '#00FF99');
                    }
                    else {
                        $("g[id^=BOX] *").attr('stroke', '#000000');
                    }
                }
            });
        }
    },
    initPatterns: function (force) {
        if (!Builder.patternsDisplayed || force) {
            $(Product.patternOptions).each(function () {
                var id = this.id;
                var name = this.name;
                var areas = this.areas;
                var pattern = this;

                var html = '<li class="pattern" id="btn-pattern-' + id + '" data-pattern="' + id + '">';
                html += '<img src="../images/cuff-patterns/pattern-' + id + '.png" />';
                html += '<div>' + name + '</div>';
                html += '</li>';
                var el = $(html);
                $(el).data('pattern-data', pattern);

                $(".svg g[id^='PATTERN']").attr("class", "hide-pattern");

                $(".option-set.patterns").children("ul").append(el);//.addClass("active")

                $("#btn-pattern-" + id).bind('click', function () {
                    $("li.pattern").removeClass("active");
                    $(this).addClass('active');
                    Builder.enablePattern($(this).data('pattern-data'));

                    //trigger texture panels if texture not colors
                    if (id != parseInt(id)) {
                        $('li[data-code=' + id + ']:eq(0)').click();
                    }
                });
                $(".option-set.patterns").attr("data-step", 1);
                if ($(".option-set.color").hasClass("active")) $(".option-set.patterns").addClass("active");
            });
            Builder.patternsDisplayed = true;
            if (Product.hasOwnProperty('patternName'))
                $('div.patterns>.sub-title').text(Product.patternName + " Patterns");
        }

        if (Builder.patternsDisplayed && (!Cust.pattern)) Cust.pattern = 1;

        if (Cust.pattern && (Cust.pattern > 0 || Cust.pattern.length > 0)) {
            Builder.patternColorsTemp = Cust.patternColors;
            $("#btn-pattern-" + Cust.pattern).trigger('click');
            //console.log('Cust.patternColors', Cust.patternColors);
            for (var areaId in Builder.patternColorsTemp) {
                //console.log('patternColorsTemp obj', Builder.patternColorsTemp);
                var obj = Builder.patternColorsTemp[areaId];
                var panel = "PATTERN_" + Cust.pattern + "_" + areaId;
                $(".group[data-svg-id=" + panel + "] li[data-code=" + obj.color.code + "]").trigger('click');
            }
        }

    },
    enablePattern: function (pattern) {
        if (typeof (pattern) == 'undefined') {
            console.log('b pattern');
            return false;
        }
        console.log("enablePattern", pattern, pattern.areas.length);
        var id = pattern.id;
        $('.pattern-colors .c').empty();
        Cust.patternColors = {};
        Cust.pattern = id;
        if (pattern.areas[0].colors.length > 0) {
            $('.pattern-colors').show();
            $(pattern.areas).each(function (e) {
                var colors = this.colors;
                var areaId = this.areaId;

                var panel = "PATTERN_" + id + "_" + areaId;
                var html = '<div class="group" data-svg-id="' + panel + '">';
                html += '<strong>Pattern Area ' + (e + 1) + ' Color</strong>';
                html += '<ul>';
                $(colors).each(function () {
                    html += '<li title="' + this.name + '" data-hex="' + this.hex + '" data-code="' + this.code + '"></li>';
                });
                html += '</ul>';
                html += '</div>';

                $('.pattern-colors .c').append($(html));
                $(".pattern-colors .c .group ul li").each(function () {
                    $(this).css("background-color", "#" + $(this).data("hex"));
                    $(this).bind('click', function (e) {
                        $(this).siblings("li.active").removeClass("active");
                        $(this).addClass("active");
                        var group = $(this).closest(".group").data("svg-id");
                        console.log(group);
                        Builder.setSvgColor(group, $(this).data('hex'));
                        //update view model
                        var pa = group.split("_");
                        var pattern_num = pa[1];
                        var areaId = pa[2];
                        var code = $(this).data('code');
                        var hex = $(this).data('hex');
                        var name = $(this).attr("title");
                        var color_obj = {
                            "areaId": areaId,
                            "color": {
                                "code": code,
                                "hex": hex,
                                "name": name
                            }
                        }
                        Cust.patternColors[areaId] = color_obj;
                    });
                });
            });
        }
        else {
            $('.pattern-colors').hide();
        }
        // if(id == Cust.pattern){
        // 	$(Cust.patternColors).each(function(){
        // 		var areaId = this.areaId;
        // 		var panel = "PATTERN_"+Cust.pattern+"_"+areaId;
        // 		$(".group[data-svg-id="+panel+"] li[data-code="+this.color.code+"]").trigger('click');
        // 	})
        // }
        $(".svg g[id^='PATTERN']").attr("class", "hide-pattern");
        $(".svg g[id^='PATTERN_" + id + "']").attr("class", "show-pattern");
    },
    addImage: function () {
        var svg = $(".canvas-wrapper.active .svg svg g[id^='BODY']");
        var mask_id = "mask" + $(".canvas-wrapper.active").data("view");

        var $image = $('<svg><image xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="https://farm1.staticflickr.com/438/19503927318_a13c9c9513.jpg" width="333" height="500" x="0" y="0" clip-path="url(#' + mask_id + ')" ></image></svg>');

        $(".svg-masks").append('<svg height="0" width="0"><defs><clipPath id="' + mask_id + '">' + svg.html() + '</clipPath></defs></svg>');

        svg.append($image);

        Builder.initSVGDrag();
    },
    updatePricing: function (e, dontValidate) {
        console.log('updatePricing', dontValidate);

        $('.did span').text(Builder.guid);

        //if ckwrap status changes, relookup pricing
        if (Builder.checkCkwrap()) {
            //console.log('ckwrap changed, relookup');
            Builder.getPricingFromAPI(Builder.hgSku);
        }

        Builder.priceTotal = 0;
        //Builder.priceTotal += parseFloat(svgText.pricing.pricingTotal);//once?
        var totalQuantity = 0;
        $(".option-set.sizing input").each(function () {
            $(this).removeClass("error");
            var val = $(this).val() || 0;
            if (!isInt(val) || String(val).indexOf("0") == 0 && val != "" && val != "0" && !$(this).hasClass('error')) {
                $(this).addClass('error');
                if (!dontValidate) CK.alert(102);
            }
            else {
                var per_piece = Number($(this).parent().siblings('.per-piece').children("span").text());
                var total_price = per_piece * val;
                Builder.priceTotal += total_price;
                //console.log(svgText.pricing.pricingTotal)
                var total_container = $(this).parent().siblings('.piece-total');
                var total_price_str = "$" + total_price.formatMoney(2, '.', ',');
                total_container.text(total_price_str);

                totalQuantity += Number(val);

                if ($(this).parent().hasClass("men")) {
                    Builder.cartObj['m'][$(this).attr("name")] = val;
                } else if ($(this).parent().hasClass("women")) {
                    Builder.cartObj['w'][$(this).attr("name")] = val;
                }

                //console.log('updatePricing', Builder.cartObj);
            }
        });
        //console.log('price total', Builder.priceTotal);
        //console.log('total quantity', totalQuantity);
        Builder.priceForArt = totalQuantity * parseFloat(svgText.pricing.pricingTotal);
        Builder.priceTotal += Builder.priceForArt;
        Builder.priceTotal = Builder.priceTotal.toFixed(2).toLocaleString();
        $('.preview .details .price span').text(Builder.priceTotal);
        Builder.hasChanged();
        Builder.compileReview();
    },
    checkCkwrap: function () {
        var priceReLookupNeeded = false;

        // CKWRAP logic
        if (Product.sku == "CE58") {
            //console.log('validate ckwrap');

            var artFront = svgText.layerObjects["_Front"];
            if (artFront.length > 0) {
                //console.log('ckwrap', true);
                if (Builder.ckwrap == false) priceReLookupNeeded = true;
                Builder.ckwrap = true;
                Builder.hgSku = "CE58";
            }
            else {
                //console.log('ckwrap', false);
                if (Builder.ckwrap == true) priceReLookupNeeded = true;
                Builder.ckwrap = false;
            }

            if (Builder.ckwrap == false) {
                if (Builder.hgSku == "CE58") {
                    $(Product.panels).each(function () {
                        var group = this.name;
                        if (Cust.colors[group] && group == 'STRAPS' && Cust.colors[group] == "WH") {
                            Builder.hgSku = "E58";
                            priceReLookupNeeded = true;
                        }
                    });
                }
                else {
                    $(Product.panels).each(function () {
                        var group = this.name;
                        if (Cust.colors[group] && group == 'STRAPS' && Cust.colors[group] != "WH") {
                            Builder.hgSku = "CE58";
                            priceReLookupNeeded = true;
                        }
                    });
                }
            }
        }
        return priceReLookupNeeded;
    },
    compileReview: function () {
        console.log('compileReview');

        //fabric
        var container = $(".option-set.review .design");
        $(".category span", container).text(Product.category);
        $(".sku span", container).text(Product.sku);
        $(".fabric span", container).text(Cust.fabric);
        if (Cust.fabric < 0) $(".fabric", container).hide();

        //color
        $(".option-set.review .colors ul").empty();
        $(".option-set.color .group").each(function () {
            var zone = $(this).children("strong").text();
            var color = $("li.active", $(this)).attr("title");
            var html = "<li><strong>" + zone + "</strong>: <span>" + color + "</span></li>";
            $(".option-set.review .colors ul").append(html);
        })

        //patterns
        $(".option-set.patterns > ul li").each(function () {
            if ($(this).hasClass("active")) {
                var pattern = $("div", $(this)).text();
                var html = "<li><strong>Pattern</strong>: <span>" + pattern + "</span></li>";
                $(".pattern-colors .group").each(function () {
                    var zone = $(this).children("strong").text();
                    var color = $("li.active", $(this)).attr("title");
                    html += "<li><strong>" + zone + "</strong>: <span>" + color + "</span></li>";
                })
                $(".option-set.review .colors ul").append(html);
            }
        })

        //art
        $(".option-set.review .lettering ul").empty();
        $("#text_palette .palette_view:not(:empty)").each(function () {
            var html = "";
            var id = $(this).attr("id");
            var id_ar = id.split("_");
            var side = id_ar[id_ar.length - 1];
            html += "<li><strong>View</strong>: <span>" + side + "</span></li>";
            $(">div", $(this)).each(function () {
                var type = $(this).children(".text").text();
                var content = $(this).children(".text").children("strong").text();
                html += "<li>&nbsp;&nbsp;&nbsp;&nbsp;" + type + "</li>";
            })
            $(".option-set.review .lettering ul").append(html);
        });

        if (Cust.hasOwnProperty('printingOption')) {
            if (Cust.printingOption != null) {
                var type = Cust.printingOption;
                $("li.print_type span").text(type.replace(/_/g, ' ')).parent().show();

            } else {
                $("li.print_type").hide();
            }
        }
        if ($(".option-set.review .lettering ul").children().length < 1) {
            var html = "";
            html += "<li><strong>None</strong></li>";
            $(".option-set.review .lettering ul").append(html);
        }

        var html = "";
        html += "<li><strong>Printing Fee</strong>: <span>$" + Builder.priceForArt.toFixed(2).toLocaleString() + "</span></li>";
        $(".option-set.review .lettering ul").append(html);

        //sizing
        $(".option-set.review .quantity .table").empty();
        var total_quant = 0;

        var html = '<div class="row">';
        html += "<h2>Men's Sizing</h2>";
        html += '</div>';
        $(".option-set.review .quantity .table").append(html);

        $(".sizing-chart-options > .row").each(function () {
            var size = $(this).children('.col').eq(0).children("strong").text();
            var quant = $('input', $(this)).val();
            total_quant += Number(quant);
            var price_per = $('.per-piece', $(this)).children('span').text();
            var total = $('.piece-total', $(this)).text();

            var html = '<div class="row">';
            html += '<span>' + size.toUpperCase() + '</span>';
            html += '<span>' + quant + '</span>';
            html += '<span>$' + price_per + '</span>';
            html += '<span>' + total + '</span>';
            html += '</div>';

            $(".option-set.review .quantity .table").append(html);
        });

        if (Product.wSku != null) {
            var html = '<div class="row">';
            html += "<h2>Women's Sizing</h2>";
            html += '</div>';
            $(".option-set.review .quantity .table").append(html);

            $(".sizing-chart-options-women > .row").each(function () {
                var size = $(this).children('.col').eq(0).children("strong").text();
                var quant = $('input', $(this)).val();
                total_quant += Number(quant);
                var price_per = $('.per-piece', $(this)).children('span').text();
                var total = $('.piece-total', $(this)).text();

                var html = '<div class="row">';
                html += '<span>' + size.toUpperCase() + '</span>';
                html += '<span>' + quant + '</span>';
                html += '<span>$' + price_per + '</span>';
                html += '<span>' + total + '</span>';
                html += '</div>';

                $(".option-set.review .quantity .table").append(html);
            });
        }
        $(".option-set.review .total-quantity").children('span').text(total_quant);

        $(".preview-nav a").each(function () {
            if (!$(this).hasClass("hide")) {
                $(".canvas-wrapper[data-view=" + $(this).data('view') + "]").addClass("review-active");
            }
        });

        // set up CTAs for logged in vs temp

    },
    acknowledgeSave: function (guid) {
        console.log('saved, tell the user they dont have to click save');
        CK.alert(107)
        $('body').removeClass('changed').removeClass('working');
    },
    acknowledgeSaveQuietly: function (guid) {
        console.log('saved');
        $('body').removeClass('changed').removeClass('working');
    },
    openDealerModal: function (e) {
        e.preventDefault();
        $(".modal.dealer, .modal-bknd").addClass("active");
        var getDealerUrl = Api.url + Api.endpoints.getDealers.path;
        var options = {

            url: getDealerUrl,

            getValue: function (element) {
                //alert(element.DealerId);
                return element.DealerName + " - " + element.DealerEmail;
            },

            list: {
                match: {
                    enabled: true
                },
                onChooseEvent: function () {
                    var dealerID = $("#dealer-email").getSelectedItemData().DealerID;
                    var dealerEmail = $("#dealer-email").getSelectedItemData().DealerEmail;
                    var dealerName = $("#dealer-email").getSelectedItemData().DealerName;
                    Builder.chosenDealer = { "id": dealerID, "email": dealerEmail, "name": dealerName };
                    //console.log("Builder.chosenDealer", Builder.chosenDealer);
                }
            },

            theme: "square"
        };

        $("#dealer-email").easyAutocomplete(options);

    },
    createProductList: function () {
        /*
		Product Code will be combination of Uniform Builder item code – size (say S794344-XXXS). If there are multiple sizes to be added to cart, then pass the combination as comma separated values (say obj.lstChildProduct = "S794344-XXXS ~2, S794344-XXL~2 , S794344-XS~2 ";). The combination needs to be maintained because this is how the SKU code is set up in ecommerce.
		*/

        var pairs = new Array();
        if (Product.sku == 'CE58') {
            pairs.push((Builder.ckwrap ? "CKWRAP" : Builder.hgSku) + "~" + $(".row[data-size='onesize'] input").val());
        }
        else {

            if (Product.sizes.length == 1) {
                var quantity = Builder.cartObj['m'][Product.sizes[0]];
                if (quantity > 0) pairs.push(Builder.modSku + "~" + String(quantity));
            }
            else {
                for (var size in Builder.cartObj['m']) {
                    var quantity = Builder.cartObj['m'][size];// Product.sku
                    if (quantity > 0) pairs.push(Builder.modSku + "-" + size.toUpperCase() + "~" + String(quantity));
                }
                if (Product.wSku != null) {
                    for (var size in Builder.cartObj['w']) {
                        var quantity = Builder.cartObj['w'][size];// Product.sku
                        if (quantity > 0) pairs.push(Builder.modSkuW + "-" + size.toUpperCase() + "~" + String(quantity));
                    }
                }
            }

            //console.log('pairs', pairs); SW794341J-XXS~6,SW794341J-S~10
        }

        //art
        var artSkus = svgText.pricing.getSkuCount();
        var total_quantity = 0;
        $(".option-set.sizing input").each(function () {
            total_quantity += Number($(this).val());
        });
        $.each(artSkus, function (key, val) {
            //console.log(key, val, total_quantity);
            pairs.push(key + '~' + val * total_quantity);
        });

        var r = pairs.join();//S794344 "S794344-XS~2";//"S794341-XS~2,S794341-XS~2";//


        //console.log("r", r);
        return r;
    },
    addToCart: function () {

        $(".button.to-cart").addClass("processing");

        var obj = {};

        $.ajax({
            crossDomain: true,
            url: ckstoreURL + "/addtockcart.asmx/AddToCart",
            data: { lstChildProduct: Builder.createProductList(), designId: Builder.guid },
            contentType: "application/json; charset=utf-8",
            dataType: "jsonp",
            success: Builder.onCartSuccess,
            failure: function (response) {
                // alert code 108
                console.log(response);
                CK.alert(108);
                //Add your custom error message based on the failure response to display the customer that the item is not added successfully to cart.
            }
        });

    },
    onCartSuccess: function (response) {

        $(".button.to-cart").removeClass("processing");
        //alert code 107
        console.log(response);
        var code = 200 + Number(response);
        CK.alert(code);

        // 		0-Failed to add item to cart.
        // 		1-Item Successfully Added to cart
        //      2-Failed to as Custom Uniform already exists in cart
        //      3-Failed to as stock items exists already exists in cart

        // Add your own custom logic whether to redirect the customer to ecommerce shopping cart page or stay on same the same page.
    },
    getZipUrl: function () {
        return "/UploadFiles/zipFolder/" + Builder.id + "/" + Cust.uploads;
    },
    updateZipLink: function () {
        if (Cust.uploads != null) $(".zip-link").empty().append("Support Files: <a href='" + Builder.getZipUrl() + "'>" + Cust.uploads + "</a>");
    },
    prepareUpload: function (event) {
        var type = (event.target.id == "upload-image") ? "image" : "zip";
        Builder.uploadFiles = event.target.files;
        Builder.sendFiles(type);
    },
    sendFiles: function (type) {
        // $("form input#ID").val(Builder.id);
        // //console.log($("form input#ID").val());
        // var data = new FormData($("#uploadImageForm")[0]);

        var data = new FormData();
        var api_url = (type == "image") ? Api.url + Api.endpoints.uploadImage.path : Api.url + Api.endpoints.uploadZip.path;

        // Add the uploaded image content to the form data collection
        if (Builder.uploadFiles.length > 0) {
            if (type == "image") {
                data.append("UploadedImage", Builder.uploadFiles[0], Builder.uploadFiles[0].name);
            } else if (type == "zip") {
                data.append("UploadedZip", Builder.uploadFiles[0], Builder.uploadFiles[0].name);
                $(".zip-link").empty().append("Uploading zip...");
            }
            //console.log(data);
        }

        data.append('id', String(Builder.id));

        //console.log(data);

        $.ajax({
            url: api_url,
            type: Api.endpoints.uploadImage.method,
            data: data,
            cache: false,
            dataType: 'json',
            processData: false, // Don't process the files
            contentType: false, // Set content type to false as jQuery will tell the server its a query string request
            success: function (data, textStatus, jqXHR) {
                if (typeof data.error === 'undefined' && data.Success) {
                    // Success so call function to process the form
                    //console.log('uploadFiles', data);

                    var filename = data.Data;

                    if (filename.indexOf(".zip") > 0) {

                        Cust.uploads = filename;
                        Builder.updateZipLink();

                        //save design to include uploaded zip in Cust
                        Api.call(Api.endpoints.saveDesign,
						JSON.stringify(Builder.productDataForSaving("NEW")),
						Builder.acknowledgeSaveQuietly);

                        $("#upload-zip").val('');
                    } else {
                        svgText.makeNewImage("/UploadFiles/imgFolder/" + Builder.id + "/" + filename);
                    }
                }
                else {
                    // Handle errors here
                    console.log('ERRORS: ' + data.ErrorText);
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                // Handle errors here
                //console.log('ERRORS2: ', jqXHR);
                // STOP LOADING SPINNER
            }
        });
    }
}