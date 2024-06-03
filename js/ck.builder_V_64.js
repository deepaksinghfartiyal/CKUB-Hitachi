// temporary deeplink boolean. change to hash or qs or whatevs.
var deeplink = false;
var TotalCountForLoading = 0;    //22/1/2019
var TotalCountForKit = 0;  //4/2/2019
var counter = 0;
var counterFormagnify = 0;
var CurrentClickKitView = "";
var TotalKit0Count = 0;
var CaptureImagePath = [];
var IsPrduct_WJ200S = false;

var Kit0 = { "sizes": {}, "wSizes": {} };
var Kit1_Shirt = { "sizes": {}, "wSizes": {}, "price": {}, "wPrice": {} };
var Kit1_Shorts = { "sizes": {}, "wSizes": {}, "price": {}, "wPrice": {} };

var Kit2_Shirt = { "sizes": {}, "wSizes": {}, "price": {}, "wPrice": {} };
var Kit2_Shorts = { "sizes": {}, "wSizes": {}, "price": {}, "wPrice": {}, "Kit4SetUpFee": {}, "OPTION2_ShortsImagePath": {} };

var Kit3_Shirt = { "sizes": {}, "wSizes": {}, "price": {}, "wPrice": {} };
var Kit3_Shorts = { "sizes": {}, "wSizes": {}, "price": {}, "wPrice": {} };

var Product = {
    "id": null,
    "category": null,
    "fabricOptions": [],
    "panels": [],
    "colorOptions": {},
    "colorSwatches": null,
    "patternOptionsSecond": [],
    "patternOptions": [],
    "printingOptions": null,
    "DifferentPrintingOptions": null,
    "textColors": [],
    "minQuantity": null,
    "views": [],
    "sizes": [],
    "KitID": [],
    "KitCategory": [],
    "sizesShirt": [],
    "wsizesShirt": [],
    "sizesShorts": [],
    "wsizesShorts": [],
    "priceShirt": [],
    "wpricesShirt": [],
    "priceShorts": [],
    "wpriceShorts": [],
    "minQuantityOPTION1": null,
    "minQuantityOPTION_2_Shirt": null,
    "minQuantityOPTION_2_Shorts": null,
    "minQuantityOPTION_3_Singlet": null,
    "minQuantityOPTION_3_Shorts": null,
    "minQuantityOPTION_4_Shirt": null,
    "minQuantityOPTION_4_Shorts": null,
    "printingFee": null,
    "ApplyArtOnShortsSleeves": null,  //25/4/2019
    "IncreaseArtworkSizeForLargeSizeproduct": null,  //28/5/2019
    "Note": null,  //1/5/2019,
    "NotificationSection": null,//29/8/2019  Notification for checkboxes in pritnt type section
    "productCategory": null,
    "removecssForKitShort_OPTION3": null,
    "ShowAddToCartButtion": null
};

var ProductKit = {
    "kit_0": JSON.parse(JSON.stringify(Product)),
    "kit_1": JSON.parse(JSON.stringify(Product)),
    "kit_2": JSON.parse(JSON.stringify(Product)),
    "kit_3": JSON.parse(JSON.stringify(Product)),
    "kit_4": JSON.parse(JSON.stringify(Product))
};

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
    "notes": null,
    "kitID": null,
    "activeKitName": null,
    "PrintingTypeValue": null,
    "PrintingTypeValueBasedOnColorFirst": null,
    "PrintingTypeValueBasedOnColorSecond": null
};

var KitId = {
    "id": 0
};

var kitBuilder = {
    "kit_0": JSON.parse(JSON.stringify(KitId)),
    "kit_1": JSON.parse(JSON.stringify(KitId)),
    "kit_2": JSON.parse(JSON.stringify(KitId)),
    "kit_3": JSON.parse(JSON.stringify(KitId)),
    "kit_4": JSON.parse(JSON.stringify(KitId))
};

var CustKit = {
    "kit_0": JSON.parse(JSON.stringify(Cust)),
    "kit_1": JSON.parse(JSON.stringify(Cust)),
    "kit_2": JSON.parse(JSON.stringify(Cust)),
    "kit_3": JSON.parse(JSON.stringify(Cust)),
    "kit_4": JSON.parse(JSON.stringify(Cust))

};

var ViewCount = {
    "viewsLoadedKit": 0,
    "viewsToLoadKit": 0
};
var kitView = {
    "kit_0": JSON.parse(JSON.stringify(ViewCount)),
    "kit_1": JSON.parse(JSON.stringify(ViewCount)),
    "kit_2": JSON.parse(JSON.stringify(ViewCount)),
    "kit_3": JSON.parse(JSON.stringify(ViewCount)),
    "kit_4": JSON.parse(JSON.stringify(ViewCount))

};

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
};
var Quantity = {};
var Builder = {
    viewOnly: false,
    frontOnly: false,
    id: null,	//design id
    guid: null,
    svgtopng: "",
    step: 0,
    kitStep: [],
    maxStep: 4,
    STEPS: ['fabric', 'color', 'content', 'sizing', 'review'],
    VIEWS: ['_Front', '_Back', '_Left', '_Right'],
    viewsToLoad: 0,
    viewsLoaded: 0,
    swatchMode: false,
    patternsDisplayed: false,
    priceTotal: 0,
    priceTotalforkit4: 0,
    cartObj: { 'w': [], 'm': [] },
    patternColorsTemp: [],
    chosenDealer: null,
    uploadFiles: null,
    userData: null,
    modSku: null,
    modSkuW: null,
    hgSku: "CE58",
    ckwrap: false,
    IssetUpfee: false,
    permalinkId: null,
    IsKit: false,
    KitNo: 0,
    KitID: [],
    KitCategory: [],
    kitCounter: 0,
    initKitUiCounter: 0,
    kitTotalCount: 0,
    doubleKit: 0,
    kitproductNew: [],
    kitproductNewfor_0: [],
    kitproductNewfor_1: [],
    kitproductNewfor_2: [],
    kitproductNewfor_3: [],
    kitproductNewfor_4: [],
    totalPriceToShow: 0,
    totalPriceToShowForKit_4: 0,
    KitNoForTotal: 0,
    total_price_new: 0,
    shareurl: null,
    cartObj0: { 'w': [], 'm': [] },
    cartObj_1Shirt: { 'w': [], 'm': [] },
    cartObj_1Shorts: { 'w': [], 'm': [] },
    cartObj_2Singlet: { 'w': [], 'm': [] },
    cartObj_2Shorts: { 'w': [], 'm': [] },
    cartObj_3Shirt: { 'w': [], 'm': [] },
    cartObj_3Shorts: { 'w': [], 'm': [] },
    //8/1/2019
    //start
    cartObj_1Shirt_Men: { 'm': [] },
    cartObj_1Shirt_Women: { 'w': [] },
    //end
    active_kit: 0,

    init: function () {

        if (sessionStorage.getItem('IsManagerRequestedDesign') === "Yes") {
            $("#ForDealerForViewOnly").css("display", "block");
            $('body').addClass("view-only");
            $('.option-set').css("display", "block");
        }

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
                //&& data.ID[0] != '-'

                if (data.ID != '0' && data.ID[0] != '-') {
                    //  if (data.ID != '0') {
                    // user logged in         
                    $(".modal.dealer .user-info .name").text(data.FirstName + " " + data.LastName);
                    $(".user-info-header > div.name span").text(data.FirstName);
                    $(".modal.dealer .user-info .email").text(data.email);
                    $(".user-info-header > div").show();
                } else {
                    Api.call(Api.endpoints.getAdmin, JSON.stringify({}), function (Data) {
                        if (Data != null) {
                            if (Data == "Admin") {
                                // Admin logged in
                                $(".user-info-header > div").show();
                            }
                            else {
                                // user not logged in
                                $(".user-info-header > a").show();
                            }
                        }
                    });
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
            Api.call(Api.endpoints.kitProducts, JSON.stringify({ guid: Builder.guid }), function (data) {
                console.log("Kit Product", data);
                if (data != null && data != 'undefined' && data.length > 0) {
                    IsKit = true;
                    $('.single').removeClass('active');
                    $('.single').html('');
                    IsViewOnly = $("body").hasClass("view-only");
                    $('.kit').addClass('active');
                    if (IsViewOnly) {
                        var lockerActiveKit = JSON.parse(data[0].Customization);
                        if (lockerActiveKit.kitID != null) {
                            Builder.active_kit = lockerActiveKit.kitID;
                            if (Builder.active_kit != null || Builder.active_kit != "") {
                                $('.kits.kit_' + Builder.active_kit).addClass('active');
                                $('.preview-nav.kits.kit_' + Builder.active_kit).addClass('active');
                            }
                            else {
                                $('.kits.kit_0').addClass('active');
                                $('.preview-nav.kits.kit_0').addClass('active');
                            }
                        }
                        else {
                            $('.kits.kit_0').addClass('active');
                            $('.preview-nav.kits.kit_0').addClass('active');
                        }

                    }
                    else {
                        $('.kits.kit_0').addClass('active');
                        $('.preview-nav.kits.kit_0').addClass('active');
                    }

                    Builder.PreviewClick();
                    Builder.kitTotalCount = data.length + 1;
                    Builder.loadKitDesign(Builder.guid, 0);
                    for (var i = 0; i < data.length; i++) {
                        Builder.loadKitDesign(data[i].Guid, i + 1);
                    }
                    // Add events
                    $('#upload-image, #upload-zip').on('change', Builder.prepareKitUpload);
                }
                else {
                    IsKit = false;
                    $('.kits').html('');
                    $('.single').addClass('active');
                    $('.kits.kit_0').removeClass('active');
                    $('.kit').removeClass('active');

                    Builder.loadDesign(Builder.guid);
                    // Add events                                      
                    $('#upload-image, #upload-zip').on('change', Builder.prepareUpload);
                    //$('#upload-image, #upload-zip').on('click', Builder.prepareUpload);
                }
            });

            window.onbeforeunload = function () {
                if ($('body').hasClass('changed') && !$('body').hasClass('view-only')) {
                    return Alerts[108];
                }
            };
        }
    },
    garmentPricingCodes: {},
    garmentPricingCodesW: {},
    getPricingFromAPI: function (pid) {
        //Importat--Comment this line because after click on "send to dealer" link,we are not getting  "Unite price" under "QUANTITY" section(this issue is generating on page load for fist load request)
        //if (Builder.viewOnly) return;

        if (Product.sku === "S742I43J") {
            $('.single.active .sub-title.knit').html('').text('Leg Cuffs Patterns');
        }


        var modSku = Product.sku.replace('_FULL', '').replace('_QUARTER', '');

        //for get pricing for this product
        if (modSku == "SW79CK43J") {
            modSku = "SW79CK43";
        }
        if (modSku == "S794343") {

            modSku = "S794343J";

        }
        var modSkuW = Product.wSku;
        if (modSkuW == null) modSkuW = 'ignore';

        if (Builder.ckwrap) modSku = 'CKWRAP';

        if (modSku != "CKWRAP") {
            if (Product.addUserSelectedColors) {
                var userColorList = "";
                $.each(Cust.colors, function (i) {
                    userColorList += Cust.colors[i];
                });
                modSku += "-" + userColorList;
                modSkuW += "-" + userColorList;
            }
        }
        if (Product.addFabric == false && typeof (Product.addColor) == 'string') {
            modSku = Product.addColor;
        }
        else if (Product.addFabric == false && Product.addColor == false) {

        }
        else if (Product.addFabric == true && Product.cut.length == 0) {
            if (Product.sku === "WJ200S") {
                modSku = "WJ200" + Cust.fabric + "S";
                modSkuW = "WJ200" + Cust.fabric + "S";
            }
            else {
                modSku += Cust.fabric;
                modSkuW += Cust.fabric;
            }
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
            if (Product.sku === "SFM") {
                if (Product.sizes.length >= 1) this_pricing_code += '-' + size;
            }
            else {
                if (Product.sizes.length > 1) this_pricing_code += '-' + size;
            }
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
                    //for remove N/a and add price
                    //$('.sizing-chart-options .row[data-size="' + size + '"] .inputidmen').prop("disabled", false);
                    $('.sizing-chart-options .row[data-size="' + size + '"] .per-piece').html("");
                    $('.sizing-chart-options .row[data-size="' + size + '"] .per-piece').html('$<span></span>');

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
                    //$('.sizing-chart-options-women .row[data-size="' + size + '"] .inputidwomen').prop("disabled", false);
                    $('.sizing-chart-options-women .row[data-size="' + size + '"] .per-piece').html("");
                    $('.sizing-chart-options-women .row[data-size="' + size + '"] .per-piece').html('$<span></span>');

                    $('.sizing-chart-options-women .row[data-size="' + size + '"] .per-piece span').html(data.TotalPrice.toFixed(2));
                    Builder.updatePricing(null, true);
                });
            }
        }
        if (Product.sku != null) {
            for (var i = 0; i < Product.sizes.length; i++) {
                addPricingCode(modSku, Product.sizes[i]);
            }
        }
        if (Product.wSku != null) {
            for (var i = 0; i < Product.wSizes.length; i++) {
                addPricingCodeW(modSkuW, Product.wSizes[i]);
            }
        }

        Builder.modSku = modSku;
        Builder.modSkuW = modSkuW;
        //Add Centre CSS for Singlets....
        if (Product.RemoveClass == "true") {
            $(".main .preview").removeClass("Kit0ForCenterBoundingBox");
        }
        else {
            $(".main .preview").addClass("Kit0ForCenterBoundingBox");
        }
    },
    getKitPricingFromAPI: function (pid, kitNo) {
        if (Builder.viewOnly) return;
        var modSku = ProductKit['kit_' + kitNo].PricingSku.replace('_FULL', '').replace('_QUARTER', '');
        var modSkuW = ProductKit['kit_' + kitNo].PricingWSku;
        if (modSkuW == null) modSkuW = 'ignore';

        if (Builder.ckwrap) modSku = 'CKWRAP';

        if (modSku != "CKWRAP") {
            if (ProductKit['kit_' + kitNo].addUserSelectedColors) {
                var userColorList = "";
                $.each(CustKit['kit_' + kitNo].colors, function (i) {
                    userColorList += CustKit['kit_' + kitNo].colors[i];
                });
                modSku += "-" + userColorList;
                modSkuW += "-" + userColorList;
            }
        }
        if (ProductKit['kit_' + kitNo].addFabric == false && typeof (ProductKit['kit_' + kitNo].addColor) == 'string') {
            modSku = ProductKit['kit_' + kitNo].addColor;
        }
        else if (ProductKit['kit_' + kitNo].addFabric == false && ProductKit['kit_' + kitNo].addColor == false) {

        }
        else if (ProductKit['kit_' + kitNo].addFabric == true && ProductKit['kit_' + kitNo].cut.length == 0) {
            modSku += Cust.fabric;
            modSkuW += Cust.fabric;
        }
        else if (ProductKit['kit_' + kitNo].addFabric == true && ProductKit['kit_' + kitNo].cut.length > 0) {
            modSku = modSku.substr(0, modSku.length - 1) + Cust.fabric + modSku.substr(-1, 1);
            modSkuW = modSkuW.substr(0, modSkuW.length - 1) + Cust.fabric + modSkuW.substr(-1, 1);
        }
        if (ProductKit['kit_' + kitNo].addColor == true) {
            modSku += "-" + (CustKit['kit_' + kitNo].swatch || $('[data-svg-id=swatch] [data-code]:eq(0)').data('code'));
            modSkuW += "-" + (CustKit['kit_' + kitNo].swatch || $('[data-svg-id=swatch] [data-code]:eq(0)').data('code'));
        }

        //Important--  These Four Method are used for Getting Price For OPTION 2 And OPTION4 for Men And Women

        function addPricingCodeForOption_2And_4_Shirt(modSkuW, size) {
            var this_pricing_code = modSkuW + '-' + size;
            if (typeof Builder.garmentPricingCodesW[this_pricing_code] != 'undefined' && Builder.garmentPricingCodesW[this_pricing_code] != 'loading') {

                //already fetched, populate html
                //$('.sizing-chart-options-women .row[data-size="' + size + '"] .per-piece span').html(Builder.garmentPricingCodesW[this_pricing_code].toFixed(2));
                //Builder.updateKitPricing(null, true, kitNo);

                //--------important----My Code  Showing Pricing for all 5 Kit product  for Women Section                      
                switch (kitNo) {
                    case 1:
                        $('.sizing-chart-optionsForkit_1 .row[data-size="' + size + '"] .per-piece span').html(Builder.garmentPricingCodes[this_pricing_code].toFixed(2));
                        Builder.updateKitPricing(null, true, 1);
                        break;
                    case 3:
                        $('.sizing-chart-optionsForkit_3 .row[data-size="' + size + '"] .per-piece span').html(Builder.garmentPricingCodes[this_pricing_code].toFixed(2));
                        Builder.updateKitPricing(null, true, 3);
                        break;
                }

            }
            //else if (Builder.garmentPricingCodesW[this_pricing_code] == 'loading') {

            //}
            else {
                //console.log(this_pricing_code + ' is undefined, returning string and queuing price load');
                Builder.garmentPricingCodesW[this_pricing_code] = 'loading';

                Api.call(Api.endpoints.getPricing, JSON.stringify({
                    productID: this_pricing_code
                }), function (data) {
                    //console.log(size, "w loaded: $" ,  data.TotalPrice, '.sizing-chart-options .row[data-size="'+size+'"] .per-piece span')
                    if (data) {
                        Builder.garmentPricingCodesW[this_pricing_code] = data.TotalPrice;
                    }
                    //$('.sizing-chart-options-women .row[data-size="' + size + '"] .per-piece span').html(data.TotalPrice.toFixed(2));
                    //Builder.updateKitPricing(null, true, kitNo);

                    //--------important----My Code  Showing Pricing for all 5 Kit product  for Women Section    
                    switch (kitNo) {
                        case 1:
                        case 3:
                            //$('.sizing-chart-optionsForkit_1 .row[data-size="' + size + '"] .inputidmen').prop("disabled", false);
                            $('.sizing-chart-optionsForkit_1 .row[data-size="' + size + '"] .per-piece').html("");
                            $('.sizing-chart-optionsForkit_1 .row[data-size="' + size + '"] .per-piece').html('$<span></span>');
                            $('.sizing-chart-optionsForkit_1 .row[data-size="' + size + '"] .per-piece span').html(data.TotalPrice.toFixed(2));
                            Builder.updateKitPricing(null, true, 1);

                            //$('.sizing-chart-optionsForkit_3 .row[data-size="' + size + '"] .inputidmen').prop("disabled", false);
                            $('.sizing-chart-optionsForkit_3 .row[data-size="' + size + '"] .per-piece').html("");
                            $('.sizing-chart-optionsForkit_3 .row[data-size="' + size + '"] .per-piece').html('$<span></span>');
                            $('.sizing-chart-optionsForkit_3 .row[data-size="' + size + '"] .per-piece span').html(data.TotalPrice.toFixed(2));
                            Builder.updateKitPricing(null, true, 3);
                            break;
                    }

                });
            }
        }
        function addPricingCodeFor_W_Option_2And_4_Shirt(modSkuW, size) {
            var this_pricing_code = modSkuW + '-' + size;
            if (typeof Builder.garmentPricingCodesW[this_pricing_code] != 'undefined' && Builder.garmentPricingCodesW[this_pricing_code] != 'loading') {

                //already fetched, populate html
                //$('.sizing-chart-options-women .row[data-size="' + size + '"] .per-piece span').html(Builder.garmentPricingCodesW[this_pricing_code].toFixed(2));
                //Builder.updateKitPricing(null, true, kitNo);

                //--------important----My Code  Showing Pricing for all 5 Kit product  for Women Section        

                switch (kitNo) {
                    case 1:
                        $('.sizing-chart-optionsForkit_1-women .row[data-size="' + size + '"] .per-piece span').html(builder.garmentpricingcodesw[this_pricing_code].tofixed(2));
                        builder.updatekitpricing(null, true, 1);
                        break;
                    case 3:
                        $('.sizing-chart-optionsForkit_3-women .row[data-size="' + size + '"] .per-piece span').html(builder.garmentpricingcodesw[this_pricing_code].tofixed(2));
                        builder.updatekitpricing(null, true, 3);
                        break;
                }

            }
            //else if (Builder.garmentPricingCodesW[this_pricing_code] == 'loading') {
            //    //let it load
            //}
            else {
                //console.log(this_pricing_code + ' is undefined, returning string and queuing price load');

                Builder.garmentPricingCodesW[this_pricing_code] = 'loading';

                Api.call(Api.endpoints.getPricing, JSON.stringify({
                    productID: this_pricing_code
                }), function (data) {
                    //console.log(size, "w loaded: $" ,  data.TotalPrice, '.sizing-chart-options .row[data-size="'+size+'"] .per-piece span')
                    if (data) {
                        Builder.garmentPricingCodesW[this_pricing_code] = data.TotalPrice;
                    }
                    //$('.sizing-chart-options-women .row[data-size="' + size + '"] .per-piece span').html(data.TotalPrice.toFixed(2));
                    //Builder.updateKitPricing(null, true, kitNo);



                    //--------important----My Code  Showing Pricing for all 5 Kit product  for Women Section    
                    switch (kitNo) {
                        case 1:
                        case 3:
                            //$('.sizing-chart-optionsForkit_1-women .row[data-size="' + size + '"] .inputidwomen').prop("disabled", false);
                            $('.sizing-chart-optionsForkit_1-women .row[data-size="' + size + '"] .per-piece').html("");
                            $('.sizing-chart-optionsForkit_1-women .row[data-size="' + size + '"] .per-piece').html('$<span></span>');
                            $('.sizing-chart-optionsForkit_1-women .row[data-size="' + size + '"] .per-piece span').html(data.TotalPrice.toFixed(2));
                            Builder.updateKitPricing(null, true, 1);
                            //$('.sizing-chart-optionsForkit_3-women .row[data-size="' + size + '"] .inputidwomen').prop("disabled", false);
                            $('.sizing-chart-optionsForkit_3-women .row[data-size="' + size + '"] .per-piece').html("");
                            $('.sizing-chart-optionsForkit_3-women .row[data-size="' + size + '"] .per-piece').html('$<span></span>');
                            $('.sizing-chart-optionsForkit_3-women .row[data-size="' + size + '"] .per-piece span').html(data.TotalPrice.toFixed(2));
                            Builder.updateKitPricing(null, true, 3);
                            break;
                    }

                });
            }
        }
        function addPricingCodeForOption_2And_4_Shorts(modSku, size) {
            var this_pricing_code = modSku + '-' + size;
            Builder.garmentPricingCodes[this_pricing_code] = 'loading';

            Api.call(Api.endpoints.getPricing, JSON.stringify({
                productID: this_pricing_code
            }), function (data) {
                //console.log(size, "loaded: $" ,  data.TotalPrice, $('.sizing-chart-options .row[data-size="'+size+'"] .per-piece span').length )               
                if (data) {
                    Builder.garmentPricingCodes[this_pricing_code] = data.TotalPrice;
                }
                //--------important----My Code  Showing Pricing for all 5 Kit product  for Men Section                 
                switch (kitNo) {
                    case 1:
                        //$('.sizing-chart-kit_OPTION2_Shorts_Men  .row[data-size="' + size + '"] .inputidmen').prop("disabled", false);
                        $('.sizing-chart-kit_OPTION2_Shorts_Men  .row[data-size="' + size + '"] .per-piece').html("");
                        $('.sizing-chart-kit_OPTION2_Shorts_Men  .row[data-size="' + size + '"] .per-piece').html('$<span></span>');
                        $('.sizing-chart-kit_OPTION2_Shorts_Men  .row[data-size="' + size + '"] .per-piece span').html(data.TotalPrice.toFixed(2));
                        Builder.updateKitPricing(null, true, 1);
                        break;
                    case 3:
                        //$('.sizing-chart-kit_OPTION4_Shorts_Men  .row[data-size="' + size + '"] .inputidmen').prop("disabled", false);
                        $('.sizing-chart-kit_OPTION4_Shorts_Men .row[data-size="' + size + '"] .per-piece').html("");
                        $('.sizing-chart-kit_OPTION4_Shorts_Men  .row[data-size="' + size + '"] .per-piece').html('$<span></span>');
                        $('.sizing-chart-kit_OPTION4_Shorts_Men  .row[data-size="' + size + '"] .per-piece span').html(data.TotalPrice.toFixed(2));
                        Builder.updateKitPricing(null, true, 3);
                        break;
                }
                //--------My Code

            });
            // }
        }
        function addPricingCodeFor_W_Option_2And_4_Shorts(modSkuW, size) {
            var this_pricing_code = modSkuW + '-' + size;
            if (typeof Builder.garmentPricingCodesW[this_pricing_code] != 'undefined' && Builder.garmentPricingCodesW[this_pricing_code] != 'loading') {
                //already fetched, populate html
                //$('.sizing-chart-options-women .row[data-size="' + size + '"] .per-piece span').html(Builder.garmentPricingCodesW[this_pricing_code].toFixed(2));
                //Builder.updateKitPricing(null, true, kitNo);

                //--------important----My Code  Showing Pricing for all 5 Kit product  for Women Section        

                switch (kitNo) {
                    case 1:
                        $('.sizing-chart-kit_OPTION2_Shorts_women .row[data-size="' + size + '"] .per-piece span').html(builder.garmentpricingcodesw[this_pricing_code].tofixed(2));
                        builder.updatekitpricing(null, true, 1);
                        break;
                    case 3:
                        $('.sizing-chart-kit_OPTION4_Shorts_women .row[data-size="' + size + '"] .per-piece span').html(builder.garmentpricingcodesw[this_pricing_code].tofixed(2));
                        builder.updatekitpricing(null, true, 3);
                        break;
                }

            }
            //else if (Builder.garmentPricingCodesW[this_pricing_code] == 'loading') {
            //    //let it load                
            //}
            else {
                //console.log(this_pricing_code + ' is undefined, returning string and queuing price load');
                Builder.garmentPricingCodesW[this_pricing_code] = 'loading';

                Api.call(Api.endpoints.getPricing, JSON.stringify({
                    productID: this_pricing_code
                }), function (data) {
                    //console.log(size, "w loaded: $" ,  data.TotalPrice, '.sizing-chart-options .row[data-size="'+size+'"] .per-piece span')
                    if (data) {
                        Builder.garmentPricingCodesW[this_pricing_code] = data.TotalPrice;
                    }
                    //$('.sizing-chart-options-women .row[data-size="' + size + '"] .per-piece span').html(data.TotalPrice.toFixed(2));
                    //Builder.updateKitPricing(null, true, kitNo);
                    //--------important----My Code  Showing Pricing for all 5 Kit product  for Women Section  

                    switch (kitNo) {
                        case 1:
                            //$('.sizing-chart-kit_OPTION2_Shorts_women .row[data-size="' + size + '"] .inputidwomen').prop("disabled", false);
                            $('.sizing-chart-kit_OPTION2_Shorts_women .row[data-size="' + size + '"] .per-piece').html("");
                            $('.sizing-chart-kit_OPTION2_Shorts_women .row[data-size="' + size + '"] .per-piece').html('$<span></span>');
                            $('.sizing-chart-kit_OPTION2_Shorts_women .row[data-size="' + size + '"] .per-piece span').html(data.TotalPrice.toFixed(2));
                            Builder.updateKitPricing(null, true, 1);
                            break;
                        case 3:
                            //$('.sizing-chart-kit_OPTION4_Shorts_women .row[data-size="' + size + '"] .inputidwomen').prop("disabled", false);
                            $('.sizing-chart-kit_OPTION4_Shorts_women .row[data-size="' + size + '"] .per-piece').html("");
                            $('.sizing-chart-kit_OPTION4_Shorts_women .row[data-size="' + size + '"] .per-piece').html('$<span></span>');
                            $('.sizing-chart-kit_OPTION4_Shorts_women .row[data-size="' + size + '"] .per-piece span').html(data.TotalPrice.toFixed(2));
                            Builder.updateKitPricing(null, true, 3);
                            break;
                    }
                });
            }
        }

        //Important--  Above Four Method are used for Getting Price For OPTION 2 And OPTION4 for Men And Women

        //get each for sizes like (for each Product.sizes
        //do womens skus too like && Product.wSku != null 

        function addPricingCode(modSku, size) {
            var this_pricing_code = modSku;
            if (Product.sizes.length > 1) this_pricing_code += '-' + size;
            if (typeof Builder.garmentPricingCodes[this_pricing_code] != 'undefined' && Builder.garmentPricingCodes[this_pricing_code] != 'loading') {
                //--------My Code            
                // important--- Showing Pricing for all 5 Kit product  for Men Section                  
                switch (kitNo) {
                    case 0:
                    case 2:
                        $('.sizing-chart-optionsForkit_0 .row[data-size="' + size + '"] .per-piece span').html(Builder.garmentPricingCodes[this_pricing_code].toFixed(2));
                        Builder.updateKitPricing(null, true, 0);

                        $('.sizing-chart-optionsForkit_2 .row[data-size="' + size + '"] .per-piece span').html(Builder.garmentPricingCodes[this_pricing_code].toFixed(2));
                        Builder.updateKitPricing(null, true, 2);
                        break;
                    case 4:
                        $('.sizing-chart-optionsForkit_4 .row[data-size="' + size + '"] .per-piece span').html(Builder.garmentPricingCodes[this_pricing_code].toFixed(2));
                        Builder.updateKitPricing(null, true, 2);
                        break;
                }
                //--------My Code
            }
            else {
                //console.log(this_pricing_code + ' is undefined, returning string and queuing price load');
                Builder.garmentPricingCodes[this_pricing_code] = 'loading';

                Api.call(Api.endpoints.getPricing, JSON.stringify({
                    productID: this_pricing_code
                }), function (data) {
                    //console.log(size, "loaded: $" ,  data.TotalPrice, $('.sizing-chart-options .row[data-size="'+size+'"] .per-piece span').length )
                    if (data) {
                        Builder.garmentPricingCodes[this_pricing_code] = data.TotalPrice;
                    }


                    //$('.sizing-chart-options .row[data-size="' + size + '"] .per-piece span').html(data.TotalPrice.toFixed(2));
                    //Builder.updateKitPricing(null, true, kitNo);                  

                    //--------important----My Code  Showing Pricing for all 5 Kit product  for Men Section                       
                    switch (kitNo) {
                        case 0:
                        case 2:
                            //$('.sizing-chart-optionsForkit_0  .row[data-size="' + size + '"] .inputidmen').prop("disabled", false);
                            $('.sizing-chart-optionsForkit_0  .row[data-size="' + size + '"] .per-piece').html("");
                            $('.sizing-chart-optionsForkit_0  .row[data-size="' + size + '"] .per-piece').html('$<span></span>');
                            $('.sizing-chart-optionsForkit_0  .row[data-size="' + size + '"] .per-piece span').html(data.TotalPrice.toFixed(2));
                            Builder.updateKitPricing(null, true, 0);
                            //$('.sizing-chart-optionsForkit_2  .row[data-size="' + size + '"] .inputidmen').prop("disabled", false);
                            $('.sizing-chart-optionsForkit_2  .row[data-size="' + size + '"] .per-piece').html("");
                            $('.sizing-chart-optionsForkit_2  .row[data-size="' + size + '"] .per-piece').html('$<span></span>');
                            $('.sizing-chart-optionsForkit_2  .row[data-size="' + size + '"] .per-piece span').html(data.TotalPrice.toFixed(2));
                            Builder.updateKitPricing(null, true, 2);
                            break;
                        case 4:
                            //$('.sizing-chart-optionsForkit_4  .row[data-size="' + size + '"] .inputidmen').prop("disabled", false);
                            $('.sizing-chart-optionsForkit_4  .row[data-size="' + size + '"] .per-piece').html("");
                            $('.sizing-chart-optionsForkit_4  .row[data-size="' + size + '"] .per-piece').html('$<span></span>');
                            $('.sizing-chart-optionsForkit_4  .row[data-size="' + size + '"] .per-piece span').html(data.TotalPrice.toFixed(2));
                            Builder.updateKitPricing(null, true, 4);
                            break;
                    }
                    //--------My Code

                });
            }
        }
        function addPricingCodeW(modSkuW, size) {
            var this_pricing_code = modSkuW + '-' + size;
            if (typeof Builder.garmentPricingCodesW[this_pricing_code] != 'undefined' && Builder.garmentPricingCodesW[this_pricing_code] != 'loading') {

                //already fetched, populate html
                //$('.sizing-chart-options-women .row[data-size="' + size + '"] .per-piece span').html(Builder.garmentPricingCodesW[this_pricing_code].toFixed(2));
                //Builder.updateKitPricing(null, true, kitNo);

                //--------important----My Code  Showing Pricing for all 5 Kit product  for Women Section        

                switch (kitNo) {
                    case 0:
                    case 2:
                        $('.sizing-chart-optionsForkit_0-women .row[data-size="' + size + '"] .per-piece span').html(builder.garmentpricingcodesw[this_pricing_code].tofixed(2));
                        builder.updatekitpricing(null, true, 0);

                        $('.sizing-chart-optionsForkit_2-women .row[data-size="' + size + '"] .per-piece span').html(builder.garmentpricingcodesw[this_pricing_code].tofixed(2));
                        builder.updatekitpricing(null, true, 2);
                        break;
                    case 4:
                        $('.sizing-chart-optionsForkit_3-women .row[data-size="' + size + '"] .per-piece span').html(builder.garmentpricingcodesw[this_pricing_code].tofixed(2));
                        builder.updatekitpricing(null, true, 4);
                        break;
                }

            }
            else {
                //console.log(this_pricing_code + ' is undefined, returning string and queuing price load');
                Builder.garmentPricingCodesW[this_pricing_code] = 'loading';

                Api.call(Api.endpoints.getPricing, JSON.stringify({
                    productID: this_pricing_code
                }), function (data) {
                    //console.log(size, "w loaded: $" ,  data.TotalPrice, '.sizing-chart-options .row[data-size="'+size+'"] .per-piece span')
                    if (data) {
                        Builder.garmentPricingCodesW[this_pricing_code] = data.TotalPrice;
                    }
                    //$('.sizing-chart-options-women .row[data-size="' + size + '"] .per-piece span').html(data.TotalPrice.toFixed(2));
                    //Builder.updateKitPricing(null, true, kitNo);



                    //--------important----My Code  Showing Pricing for all 5 Kit product  for Women Section    
                    switch (kitNo) {
                        case 0:
                        case 2:
                            //$('.sizing-chart-optionsForkit_0-women .row[data-size="' + size + '"] .inputidwomen').prop("disabled", false);
                            $('.sizing-chart-optionsForkit_0-women .row[data-size="' + size + '"] .per-piece').html("");
                            $('.sizing-chart-optionsForkit_0-women .row[data-size="' + size + '"] .per-piece').html('$<span></span>');

                            $('.sizing-chart-optionsForkit_0-women .row[data-size="' + size + '"] .per-piece span').html(data.TotalPrice.toFixed(2));
                            Builder.updateKitPricing(null, true, 0);

                            //$('.sizing-chart-optionsForkit_2-women .row[data-size="' + size + '"] .inputidwomen').prop("disabled", false);
                            $('.sizing-chart-optionsForkit_2-women .row[data-size="' + size + '"] .per-piece').html("");
                            $('.sizing-chart-optionsForkit_2-women .row[data-size="' + size + '"] .per-piece').html('$<span></span>');
                            $('.sizing-chart-optionsForkit_2-women .row[data-size="' + size + '"] .per-piece span').html(data.TotalPrice.toFixed(2));
                            Builder.updateKitPricing(null, true, 2);
                            break;
                        case 4:
                            //$('.sizing-chart-optionsForkit_4-women .row[data-size="' + size + '"] .inputidwomen').prop("disabled", false);
                            $('.sizing-chart-optionsForkit_4-women .row[data-size="' + size + '"] .per-piece').html("");
                            $('.sizing-chart-optionsForkit_4-women .row[data-size="' + size + '"] .per-piece').html('$<span></span>');
                            $('.sizing-chart-optionsForkit_4-women .row[data-size="' + size + '"] .per-piece span').html(data.TotalPrice.toFixed(2));
                            Builder.updateKitPricing(null, true, 4);
                            break;
                    }

                });
            }
        }

        var ProductName = Product.PricingSku;
        var ProductDetail = ProductName.split("_");
        var TopName = ProductDetail[0];
        var BottomName = ProductDetail[1];

        if (kitNo == 1) {

            // Important--  Sending Shirt Name And Its Size in OPTION 2 and OPTION 4

            // For Men   
            if (Product.sizesShirt) {
                for (var i = 0; i < Product.sizesShirt.length; i++) {
                    addPricingCodeForOption_2And_4_Shirt(TopName, Product.sizesShirt[i]);
                }
            }

            //Important--  For Women, Shirt product

            if (Product.wsizesShirt) {
                for (var i = 0; i < Product.wsizesShirt.length; i++) {
                    addPricingCodeFor_W_Option_2And_4_Shirt(Product.wpricesShirt, Product.wsizesShirt[i]);
                }

                Builder.modSku = TopName;
                Builder.modSkuW = Product.wpricesShirt;
            }

            //Important--  Sending shorts Name And Its Size  in OPTION 2            
            // For Men  
            if (Product.sizesShorts) {
                for (var i = 0; i < Product.sizesShorts.length; i++) {
                    addPricingCodeForOption_2And_4_Shorts(BottomName, Product.sizesShorts[i]);
                }
            }

            //Important--  For Women  ,Convert Men Size Into Women Size
            if (Product.wsizesShorts) {
                for (var i = 0; i < Product.wsizesShorts.length; i++) {
                    // For Shirt product 
                    addPricingCodeFor_W_Option_2And_4_Shorts(Product.wpriceShorts, Product.wsizesShorts[i]);
                }
                Builder.modSku = BottomName;
                Builder.modSkuW = Product.wpriceShorts;
            }

        }
        if (kitNo == 3) {
            //Important--  Sending shorts Name And Its Size  in OPTION 2  

            // For Women  
            if (Product.sizesShorts) {
                for (var i = 0; i < Product.sizesShorts.length; i++) {
                    addPricingCodeForOption_2And_4_Shorts(BottomName, Product.sizesShorts[i]);
                }
            }
            if (Product.wsizesShorts) {
                for (var i = 0; i < Product.wsizesShorts.length; i++) {
                    addPricingCodeFor_W_Option_2And_4_Shorts(Product.wpriceShorts, Product.wsizesShorts[i]);
                }
                Builder.modSku = BottomName;
                Builder.modSkuW = Product.wpriceShorts;
            }

        }
        if (kitNo == 0 || kitNo == 2 || kitNo == 4) {
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
        }

        if (Product.removecssForKitShort_OPTION3) {
            $("#boundingbox_holder_kit").css('left', '0px');
        }
        switch (kitNo) {
            case 0:
                if (Product.RemoveClass == "true") {
                    $(".main .preview").removeClass("Kit0ForCenterBoundingBox");
                }
                else {
                    $(".main .preview").addClass("Kit0ForCenterBoundingBox");
                }
                break;
            case 2:
                if (Product.RemoveClass == "true") {
                    $(".main .preview").removeClass("Kit0ForCenterBoundingBox");
                }
                else {
                    $(".main .preview").addClass("Kit0ForCenterBoundingBox");
                }
                break;
            default:
                break;

        }
        //Add Centre CSS for option 1 in kits..
        //$(".main .product-title").css("display", "block")
        console.log('sku ', modSku, modSkuW);
    },
    loadDesign: function () {
        Api.call(Api.endpoints.getDesign, JSON.stringify({
            guid: Builder.guid
        }), function (data) {
            console.log('loadDesign', data, typeof (data));
            if (data == null) {
                window.location = "/builder/404";
            }
            else {

                //Set Builder.ID here which is further used to update cart status
                Builder.ID = data.ID;

                var IsAdmin = false;

                Api.call(Api.endpoints.getAdmin, JSON.stringify({}), function (Data) {
                    if (Data != null) {
                        if (Data == "Admin") {
                            IsAdmin = true;
                        }
                    }
                    if (IsAdmin == false) {
                        if (typeof (data) == 'object' && data.hasOwnProperty('UserId') && Builder.hasOwnProperty('userData')) {
                            if (Builder.userData != null && data.UserId != Builder.userData.ID && data.DealerId != Builder.userData.ID) {
                                deeplink = true;
                                Builder.viewOnly = true;
                            }
                        }
                        else {
                            deeplink = true;
                            Builder.viewOnly = true;
                        }
                        if (deeplink || $.QueryString['deep']) {
                            $('body').addClass("view-only");
                            Builder.viewOnly = true;
                        }
                        //20-3-2019 
                        // Comment On (Implement on following)
                        if (data.Status == "in-cart") {
                            deeplink = true;
                            $('body').addClass("view-only");
                            Builder.viewOnly = true;
                        }
                        //20/3/2019
                        //start
                        console.log(document.URL);
                        if (Builder.userData != null) {
                            if (data.UserId != Builder.userData.ID) {
                                if (data.Status === "with-dealer" || data.Status === "in-cart") {
                                    Builder.viewOnly = true;
                                    $('body').addClass("view-only");
                                    $('#ForDealer').addClass("active");
                                    $('.option-set').css("display", "block");
                                    $('#ForDealerForViewOnly').css("display", "block");
                                }
                                //22/4/2019
                                //If user is Loged in then Remove the view-only class
                                //start
                                if (Builder.userData) {
                                    var IsNoPositive = false;
                                    var value = parseInt(Builder.userData.ID);
                                    if (value < 0) {
                                        IsNoPositive = false;
                                    }
                                    else {
                                        IsNoPositive = true;
                                    }
                                    if (data.Status === "NEW" && Builder.userData.ID > 0 || (Builder.userData.ID.length >= 1 && IsNoPositive === true)) {
                                        Builder.viewOnly = false;
                                        $('body').removeClass("view-only");
                                    }
                                }

                            }
                        }
                        //end
                    }
                    else {
                        deeplink = false;
                        Builder.viewOnly = false;
                        if (deeplink || $.QueryString['deep']) {
                            $('body').removeClass("view-only");
                            Builder.viewOnly = false;
                        }
                    }
                });
                //SetUpfeeLogic is here For CE58 and CF5
                if (data.Product == "CE58" || data.Product == "CF5" || data.Product == "SSK89" || data.Product == "YSSK89") {
                    Builder.IssetUpfee = true;
                }
                else if (data.Product == "L74CCJ" || data.Product == "L742IJ") {
                    $(".single .option-set.patterns .knit").empty();
                    $(".single .option-set.patterns .knit").append('Rib Knit Leg Cuffs');
                }
                Builder.loadProduct(data);

            }
        });
    },
    loadProduct: function (data) {
        console.log('datta ', data);
        Builder.id = data.ID;
        if (typeof data.Customization != 'undefined' && data.Customization != "" && data.Customization != null) Cust = JSON.parse(data.Customization);
        if (data.hasOwnProperty('Notes') && typeof (data.Notes) != 'undefined' && data.Notes != '' && data.Notes != null) $('.garment-notes').html(data.Notes);
        else { $('.garment-notes').remove(); }

        // set original order in textbox
        if (data.OriginalOrderNo == null || data.OriginalOrderNo == "0" || data.OriginalOrderNo == 0 || data.OriginalOrderNo == "Null") {
            $('#OriginalOrderNo').val('');
        }
        else {
            $('#OriginalOrderNo').val(data.OriginalOrderNo);
        }

        Quantity = JSON.parse(data.Quantities);

        Builder.updateZipLink();
        if (IsPrduct_WJ200S) {
            if (data.Product === "WJ200S") {
                data.Product = "WJ200";
            }
        }
        var urlPath = "/svg/" + data.Product + "/" + data.Product + ".js";
        $.ajax({
            url: urlPath,
            type: 'GET',
            dataType: 'json',
            success: function (response) {

                Product = response;
                console.log("product obj", Product);

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


                            // $(".option-set.ctas .buttons .to-cart").remove();
                            $(".option-set.ctas .buttons").prepend('<a class="to-cart button btnCrt"><span>ADD TO CART</span><img src="../images/button-ajax-spinner.gif" /></a>');
                            $(".button.to-cart").bind('click', function (e) {
                                e.preventDefault();

                                Builder.addToCart();
                            })
                        } else {
                            //console.log('is a dealer, show add to cart');
                            $(".option-set.ctas .buttons").prepend('<a class="to-cart button btnCrt"><span>ADD TO CART</span><img src="../images/button-ajax-spinner.gif" /></a>');
                            $(".button.to-cart").bind('click', function (e) {
                                e.preventDefault();

                                Builder.addToCart();
                            });
                        }
                    }
                } else {

                    ////send to dealer button added to all other categories than singlet and sublimation  also
                    $(".option-set.ctas .buttons").prepend('<a href="#" class="to-dealer button"><span>SEND TO DEALER</span></a>');
                    $(".button.to-dealer").bind('click', Builder.openDealerModal);

                    // add to cart
                    //console.log('not a singlet, show add to cart', Product.category);
                    $(".option-set.ctas .buttons").prepend('<a class="to-cart button btnCrt"><span>ADD TO CART</span><img src="../images/button-ajax-spinner.gif" /></a>');
                    $(".button.to-cart").bind('click', function (e) {
                        e.preventDefault();
                        Builder.addToCart();
                    })
                }

                //  Don't show  Add to cart & View cart buttons to admin
                Api.call(Api.endpoints.getAdmin, JSON.stringify({}), function (Data) {
                    if (Data != null) {
                        if (Data == "Admin") {
                            //for singlate
                            $(".option-set.ctas .buttons .to-cart").remove();
                            $('#btncart').hide();
                        }
                    }
                });

                //  Don't show  Add to cart button to Custom Warm Up Products..
                if (Product.category == "Custom Warm-ups") {
                    if (Product.ShowAddToCartButtion != true) {
                        $(".option-set.ctas .buttons .to-cart").remove();
                        if (data.hasOwnProperty('Notes') && typeof (data.Notes) != 'undefined' && data.Notes != '' && data.Notes != null) $('#customWarmUp').html(data.Notes);
                        else { $('#customWarmUp').remove(); }
                    }
                }
                else {
                    $('#customWarmUp').remove();
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
        });
    },
    initViewModel: function (data, product) {

    },
    productDataForSaving: function (status, AdminCheck) {

        //To allow admin to Save/Edit designs created by another users     
        if (status == null || status == undefined) status = 'NEW';
        Cust.text = Builder.getArtworkObject();
        //12 Dec 2018
        if (Cust.text["_Front"] !== undefined) {
            for (var i = 0; i <= Cust.text["_Front"].length - 1; i++) {
                if ($('.Image_Front' + i).attr('transform') !== undefined) {
                    Cust.text["_Front"][i].Transform = $('.Image_Front' + i).attr('transform');
                }
            }
        }
        if (Cust.text["_Back"] !== undefined) {
            for (var i = 0; i <= Cust.text["_Back"].length - 1; i++) {
                if ($('.Image_Back' + i).attr('transform') !== undefined) {
                    Cust.text["_Back"][i].Transform = $('.Image_Back' + i).attr('transform');
                }

            }
        }
        if (Cust.text["_Left"] !== undefined) {
            for (var i = 0; i <= Cust.text["_Left"].length - 1; i++) {
                if ($('.Image_Left' + i).attr('transform') !== undefined) {
                    Cust.text["_Left"][i].Transform = $('.Image_Left' + i).attr('transform');
                }

            }
        }
        if (Cust.text["_Right"] !== undefined) {
            for (var i = 0; i <= Cust.text["_Right"].length - 1; i++) {
                if ($('.Image_Right' + i).attr('transform') !== undefined) {
                    Cust.text["_Right"][i].Transform = $('.Image_Right' + i).attr('transform');
                }

            }
        }

        //End
        Cust.printingOption = null;

        var qObj = {
            "sizes": {}, "wSizes": {}, "UserId": null,
            "UserFirstName": null,
            "UserLastName": null,
            "UserEmail": null
        };
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
        console.log(JSON.stringify(Cust));
        //console.log("quantities", qObj);       
        Cust.notes = $("#notes").val();
        qObj.UserId = Builder.userData.ID;
        qObj.UserFirstName = Builder.userData.FirstName;
        qObj.UserLastName = Builder.userData.LastName;
        qObj.UserEmail = Builder.userData.email;

        //23/8/2019 Save selected printing type in db(WPSL for example for this product)
        var chkArray = [];
        $(".chk:checked").each(function () {
            chkArray.push($(this).val());
        });
        console.log("chkArray12345" + chkArray);
        Cust.PrintingTypeValue = chkArray;

        //20/9/2019 Important-- Save the Printing type based on color selection

        //For Product BRDS4
        var StatusFirst = $('#print_typeBasedOnColor input').hasClass('chkBasedOnColorFirst');
        var StatusSecond = $('#print_typeBasedOnColor input').hasClass('chkBasedOnColorSecond');
        if (StatusFirst) {
            var BasedOnColorFirst = [];
            $(".chkBasedOnColorFirst:checked").each(function () {
                BasedOnColorFirst.push($(this).val());
            });
            Cust.PrintingTypeValueBasedOnColorFirst = BasedOnColorFirst;
        }
        if (StatusSecond) {
            var BasedOnColorFirstSecond = [];
            $(".chkBasedOnColorSecond:checked").each(function () {
                BasedOnColorFirstSecond.push($(this).val());
            });
            Cust.PrintingTypeValueBasedOnColorSecond = BasedOnColorFirstSecond;
        }

        //Save origianl order no to DB

        var originalOrderNo = $('#OriginalOrderNo').val();
        if (originalOrderNo == "") {
            originalOrderNo = 0;
        }
        return {
            id: Builder.id,
            productId: Product.sku,
            category: Product.category,
            customization: JSON.stringify(Cust),
            quantities: JSON.stringify(qObj),
            Status: status,
            IsAdmin: AdminCheck,
            //Important--Update UserId anfter login store site(set UserId to logged In id)
            UserId: Builder.userData.ID,
            originalOrderNo: originalOrderNo,
            LoginEmail: Builder.userData.email,
            FirstName: Builder.userData.FirstName,
            LastName: Builder.userData.LastName
        };
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
                if (!Builder.validateStep(i)) {
                    Builder.gotoStep(i);
                    Builder.validateStep(i, true);
                    keepGoing = false;
                    break;
                }
            }

            if (keepGoing) // if moving forward, validate the step first

                Builder.gotoStep(newStep);
        });

        $('body').on('click', '[data-nav]', function () {
            $('body').addClass('working');
            Api.call(Api.endpoints.saveDesign,
                JSON.stringify(Builder.productDataForSaving("NEW", false)),
                Builder.acknowledgeSaveQuietly);
        });


        $('body').on('click', '[data-save]', function () {
            $('body').addClass('working');
            var IsAdmin = false;
            Api.call(Api.endpoints.getAdmin, JSON.stringify({}), function (Data) {
                if (Data != null) {
                    if (Data == "Admin") {
                        IsAdmin = true;
                    }
                }
                Api.call(Api.endpoints.saveDesign,
                    JSON.stringify(Builder.productDataForSaving("NEW", IsAdmin)),
                    Builder.acknowledgeSave);
            });
        });

        //21/2/2019
        //Important--Check user Loged in or not and also save customization(text image ,logo) etc  in for single product or singlate
        //Start
        $('#SaveShareButton').on('click', function () {
            // sessionStorage.removeItem("CurrentPathOfImage");// It throw an error
            var step = Builder.step;
            if (step <= Builder.maxStep && step >= 0 && !$.QueryString['f']) {
                if ((step == 2 || step == 3 || step == 4) && Builder.userData.ID < 0) {
                    var IsAdmin = false;
                    //Api.call(Api.endpoints.getAdmin, JSON.stringify({}), function (Data) {

                    //    if (Data != null) {

                    //        if (Data == "Admin") {
                    //            IsAdmin = true;
                    //            IsLogin = true;
                    //            //save customization 
                    //            Api.call(Api.endpoints.saveDesign,
                    //                JSON.stringify(Builder.productDataForSaving("NEW", IsAdmin)),
                    //                Builder.acknowledgeSaveArtworkOrCustomization);

                    //            Builder.SaveandSharebutton();
                    //        }
                    //        else {
                    //            IsLogin = false;
                    //            $('.share').hide();
                    //            var IsViewOnly = $('body').hasClass('view-only');
                    //            if (IsViewOnly !== true) {
                    //                CK.alert(300);
                    //            }
                    //        }
                    //    }
                    //});
                    Api.call(Api.endpoints.getAdmin, JSON.stringify({}), function (Data) {
                        if (Data != null) {
                            IsAdmin = true;
                            IsLogin = true;
                            //save customization 
                            Api.call(Api.endpoints.saveDesign,
                                JSON.stringify(Builder.productDataForSaving("NEW", IsAdmin)),
                                Builder.acknowledgeSaveArtworkOrCustomization);
                            Builder.SaveandSharebutton();
                        }
                    });
                }
                //25/2/2019
                else {

                    Api.call(Api.endpoints.getAdmin, JSON.stringify({}), function (Data) {
                        if (Data != null) {
                            IsAdmin = false;
                            //save customization 

                            Api.call(Api.endpoints.saveDesign,
                                JSON.stringify(Builder.productDataForSaving("NEW", IsAdmin)),
                                Builder.acknowledgeSaveArtworkOrCustomization);
                            if (step == 1) {
                                $('.share').hide();
                            }
                            else {
                                //Important--Remove Share Icone "Facebook" "Twitter","Email" in view-only mode for single product or singlete
                                if (step == 0) {
                                    //26/2/2019
                                    //Important--Remove "SAVE TO MY LOCKER", "SAVE AND SHARE" ,"NEXT AND PREV" in view-only mode for single product or singlete
                                    //Start

                                    //Important--Remove "Next and Prev" button In Case Of View Mode
                                    $('.prev-next-wrapper').hide();
                                    //Important--Remove "SAVE TO MY LOCKER" button In Case Of View Mode
                                    $('.save').hide();
                                    //Important--Remove "SAVE AND SHARE" button In Case Of View Mode
                                    $('.btn.save-share').hide();
                                    //Important--Remove "ICON SHARE" Like FACEBOOK,TWITTER,AND EMAIL button In Case Of View Mode
                                    $('.share').hide();
                                    //Important--Remove Two Line (-- ---) In Case Of View Mode
                                    $('.save-next-wrapper').hide();
                                    // Reomve Login Button Form Bottom Place
                                    $('#HideItFormViewOnlyMode').hide();

                                    //End
                                }
                                else {
                                    //28/2/2019
                                    //Important--Get Current Svg Image Path
                                    // Start
                                    Builder.SaveandSharebutton();
                                }
                            }
                        }
                    });
                }
            }

        });
        ///  End

        $('body').on('click', '.modal .close', function (e) {
            e.preventDefault();
            $(".modal, .modal-bknd").removeClass("active");
            //21/2/2019
            //$('.share').show(); //not working
        });
        var CurrentClickView = "";
        $("#zoomClick").click(function () {
            if (Product.sku == "CKCREW" || Product.sku == "CKSSHORT" || Product.sku == "S794353" || Product.sku == "S794354" || Product.sku == "S794352") {
                var current_data_view = $(".preview-nav a.active").attr('data-view');
                $(".preview div[data-view]").removeClass("active");
                // $(".preview div[data-view=" + current_data_view + "]").addClass("active");
            }

            //Important-- display only current selected view after closing the magnify modal
            //Start
            counterFormagnify = 0;
            if (CurrentClickView === "_Front") {
                $(".preview-nav a:eq(0)").trigger("click");
            }
            else if (CurrentClickView === "_Back") {
                $(".preview-nav a:eq(1)").trigger("click");
            }
            else if (CurrentClickView === "_Left") {
                $(".preview-nav a:eq(2)").trigger("click");
            }
            else {
                $(".preview-nav a:eq(3)").trigger("click");
            }
            //End
        });


        $(".option-set.sizing input").change(Builder.updatePricing);

        $(".button.print").bind('click', function (e) {
            // save original order no
            Api.call(Api.endpoints.saveDesign, JSON.stringify(Builder.productDataForSaving("NEW", false)),
                Builder.acknowledgeSaveQuietly);
            e.preventDefault();
            window.print();
        });

        $(".preview-nav a").bind('click', function (e) {
            e.preventDefault();
            var position = $(this).data('view');
            $(".preview div[data-view]").removeClass("active");
            $(".preview div[data-view=" + position + "]").addClass("active");
            $(".preview-nav a").removeClass("active");
            $(this).addClass("active");
        });

        $(".option-set.cuff .pattern").bind('click', function (e) {
            e.preventDefault();
            $(".option-set.cuff .pattern").removeClass("active");
            $(this).addClass("active");
        });

        $(".zoom").click(function (e) {

            $(".preview-nav.single a").each(function () {  //I Got idea to resolve the View issue
                if (!$(this).hasClass("hide")) {
                    $(".single .canvas-wrapper[data-view=" + $(this).data('view') + "]").addClass("review-active");
                }
            });
            e.preventDefault();

            //Important--Get Current Click view name after clock on zoom or magnify
            //Start
            if (counterFormagnify === 0) {
                CurrentClickView = $(".preview-nav a.active").attr('data-view');
                counterFormagnify++;
            }
            //End
            var html = '';
            if ($(".canvas-wrapper[data-view=_Back").hasClass("review-active")) {
                $(".preview-nav a:eq(1)").trigger("click");
            }
            if ($(".canvas-wrapper[data-view=_Left").hasClass("review-active")) {
                $(".preview-nav a:eq(2)").trigger("click");
            }
            if ($(".canvas-wrapper[data-view=_Right").hasClass("review-active")) {
                $(".preview-nav a:eq(3)").trigger("click");
            }

            //Important-- display only current selected view after closing the magnify modal
            //Start
            if (counterFormagnify === 1) {
                if (CurrentClickView === "_Front") {
                    $(".preview-nav a:eq(0)").trigger("click");
                }
                else if (CurrentClickView === "_Back") {
                    $(".preview-nav a:eq(1)").trigger("click");
                }
                else if (CurrentClickView === "_Left") {
                    $(".preview-nav a:eq(2)").trigger("click");
                }
                else {
                    $(".preview-nav a:eq(3)").trigger("click");
                }
            }
            //End
            $(".preview-nav.single a").each(function (index) {
                OtherView = $(this).attr('data-view');
                if (OtherView === CurrentClickView) {
                    $(this).addClass("active");
                }
                else {
                    $(this).removeClass("active");
                }
            });
            setTimeout(function () {
                if (Product.sku == "CKCREW" || Product.sku == "CKSSHORT" || Product.sku == "S794353" || Product.sku == "S794354" || Product.sku == "S794352") {
                    $(".preview div[data-view=_Front]").addClass("active");
                    $(".preview div[data-view=_Back]").addClass("active");
                    $(".preview div[data-view=_Left]").addClass("active");
                    $(".preview div[data-view=_Right]").addClass("active");
                }
                $(".single .canvas-wrapper").each(function (e) {
                    html += "<div class='view'>" + $(this).children(".svg").html() + "</div>";
                    $(".modal.expand .content").html(html);
                    $(".modal.expand, .modal-bknd").addClass('active');

                });
            }, 2000);
        });

        $(".option-set.review h3").click(function () {
            $(this).parent().toggleClass("active");
        });

        $(".button.custom-browse").bind('click', function (e) {
            e.preventDefault();
            $("#upload-image").click();
        });
        //Important-Browse Eps Image ,For Ipad
        //Start
        $(".browse_upload").on('change', function () {
            Builder.prepareUploadForSinglet();
        });
        //End

        $(".button.stock-logos").bind('click', function (e) {
            e.preventDefault();
            var GetSide = svgText.currentView;
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

        //Send Dealer Logic here    
        $(".modal.dealer .submit").bind('click', function (e) {
            e.preventDefault();
            if (Builder.viewsToLoad == 1) {
                // Builder.ConvertSVGintoPNGforDealerForSingleViews();
            }
            else if (Builder.viewsToLoad == 2) {
                //Builder.ConvertSVGintoPNGforDealerForTwoViews();
            }
            else if (Builder.viewsToLoad == 3) {
                //Builder.ConvertSVGintoPNGforDealerForThreeViews();
            }
            else {
                //Builder.ConvertSVGintoPNGforDealerForFourViews();
            }

            var originalOrderNo = $('#OriginalOrderNo').val();
            var CurrentPageUrl = window.location.href;


            $(".lds-wrapper").show();
            IsKItOrNot = $('.kit.active span.active').attr('data-count');
            if (IsKItOrNot === undefined) {
                let PrimaryKetOfDesign = Builder.id;
                if (PrimaryKetOfDesign > 0 || PrimaryKetOfDesign.length >= 1) {
                    $.post("/Builder/IsFileOrPathExist", { id: PrimaryKetOfDesign }, function (data) {
                        if (data.status) {
                            $.post("/Builder/GetAllFiles", { id: PrimaryKetOfDesign }, function (data) {
                                if (data.status) {
                                    CaptureImagePath = data.ImageList;
                                    SendToDealer();
                                }
                                else {
                                    SendToDealer();
                                }
                            });
                        }
                        else {
                            $(".lds-wrapper").hide();
                            SendToDealer();
                            // CK.alert(701);                          
                        }
                    });
                }
            }
            function SendToDealer() {
                if ($("#cliffkeen_checkbox").prop('checked') == true) {
                    cliffkeen_email = $(".modal.dealer #cliffkeen-email").val();
                    message = $(".modal.dealer textarea#EmailNotes").val();
                    $(".lds-wrapper").hide();
                    // Api.call(Api.endpoints.AssignDesignToDealerSubmit, JSON.stringify({ "id": Builder.id, "DealerEmail": cliffkeen_email, "message": message, "ImagePathFront": Front, "ImagePathBack": Back, "ImagePathLeft": Left, "ImagePathRight": Right, "CurrentPageUrl": CurrentPageUrl }), function () {
                    Api.call(Api.endpoints.AssignDesignToDealerSubmit, JSON.stringify({ "id": Builder.id, "DealerEmail": cliffkeen_email, "message": message, "CurrentPageUrl": CurrentPageUrl, "originalOrderNo": originalOrderNo, "CaptureImagePath": CaptureImagePath }), function () {
                        Api.call(Api.endpoints.saveDesign,
                            JSON.stringify(Builder.productDataForSaving("with-dealer", false)),
                            function () {
                                $(".modal.dealer .close").trigger('click');
                                location.href = "/locker";
                            });
                    });
                }
                else {
                    //Api.call(Api.endpoints.AssignDesignToDealerSubmit, JSON.stringify({ "id": Builder.id, "DealerID": Builder.chosenDealer.id, "DealerEmail": Builder.chosenDealer.email, "message": $(".modal.dealer textarea#EmailNotes").val(), "ImagePathFront": Front, "ImagePathBack": Back, "ImagePathLeft": Left, "ImagePathRight": Right, "CurrentPageUrl": CurrentPageUrl }), function (response) {
                    $(".lds-wrapper").hide();
                    Api.call(Api.endpoints.AssignDesignToDealerSubmit, JSON.stringify({ "id": Builder.id, "DealerID": Builder.chosenDealer.id, "DealerEmail": Builder.chosenDealer.email, "message": $(".modal.dealer textarea#EmailNotes").val(), "CurrentPageUrl": CurrentPageUrl, "originalOrderNo": originalOrderNo, "CaptureImagePath": CaptureImagePath }), function (response) {
                        Api.call(Api.endpoints.saveDesign,
                            JSON.stringify(Builder.productDataForSaving("with-dealer", false)),
                            function () {
                                var code = 301;
                                CK.alert(code);
                                $(".modal.dealer .close").trigger('click');
                                window.location = "/locker";
                            });
                    });
                }
            }


            //var dealer_email = "";
            //var cliffkeen_email = "";
            //var message = "";
            //dealer_email = $(".modal.dealer #dealer-email").val();
            //if ($("#cliffkeen_checkbox").prop('checked') == true) {
            //    cliffkeen_email = $(".modal.dealer #cliffkeen-email").val();
            //    message = $(".modal.dealer textarea#EmailNotes").val();
            //    Api.call(Api.endpoints.assignDesignToDealer, JSON.stringify({ "id": Builder.id, "DealerEmail": cliffkeen_email, "message": message }), function () {
            //        Api.call(Api.endpoints.saveDesign,
            //        JSON.stringify(Builder.productDataForSaving("with-dealer", false)),
            //        function () {
            //            $(".modal.dealer .close").trigger('click');
            //            location.href = "/locker";
            //        });
            //    });
            //}
            //else {

            //    Api.call(Api.endpoints.assignDesignToDealer, JSON.stringify({ "id": Builder.id, "DealerID": Builder.chosenDealer.id, "DealerEmail": Builder.chosenDealer.email, "message": $(".modal.dealer textarea#EmailNotes").val() }), function (response) {
            //        Api.call(Api.endpoints.saveDesign,
            //        JSON.stringify(Builder.productDataForSaving("with-dealer", false)),
            //        function () {
            //            var code = 301;
            //            CK.alert(code);
            //            $(".modal.dealer .close").trigger('click');
            //            window.location = "/locker";                                  
            //        });
            //    });

            //}
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
        // if no size options, hide size nav
        if (Product.hasOwnProperty('skipSize')) {
            $(".row.steps span[data-nav='3']").hide().next("em").hide();
            if (Cust.step == 3) {
                Cust.step = 4;
            }
        }
        if (Cust.step == null) Cust.step = 0;

        $("#print_type").each(function () {
            if (Product.printingOptions == "Screen Printing" && Product.hasOwnProperty('sublimationColors')) {
                $(this).find("input").change(function () {
                    var id = $(this).attr("id");
                    var type = $(this).val();
                    Cust.printingOption = type;

                    // console.log("change", Cust.printingOption);
                    svgText.pricing.getCustomPanels();
                });
            }
            // display Printing Type based on Radion Button 
            else if (Product.IsPrintingTypeBasedOnRadioButton) {
                var IsMorethanOtnePrinting = Product.DifferentPrintingOptions;
                if (IsMorethanOtnePrinting != undefined) {
                    $(this).find("input,label").css({ 'display': 'none' });
                    PrintingType = IsMorethanOtnePrinting.split("_");
                    var Printing = Cust.PrintingTypeValue;
                    if (Printing !== undefined) {
                        if (Printing !== null && Printing !== "" && Cust.PrintingTypeValue.length > 0) {
                            Printing = Printing;
                            for (var i = 0; i < IsMorethanOtnePrinting.split("_").length; i++) {
                                //if i=1 ,if it is second nd check box then inclue <br> tag after label tag
                                if (i == 1 || i == 3 || i == 5) {
                                    if (PrintingType[i + 1] === "Twill") {// remove Br tag
                                        $('#print_type').append("<input type='radio' id='PrintId_" + i + "' class='chk' name='PrintingTypeValue' value='" + PrintingType[i] + "'><label>" + PrintingType[i] + "</label>");
                                    }
                                    else { // add Br tag
                                        $('#print_type').append("<input type='radio' id='PrintId_" + i + "' class='chk' name='PrintingTypeValue' value='" + PrintingType[i] + "'><label>" + PrintingType[i] + "</label><br>");
                                    }
                                }
                                else {
                                    $('#print_type').append("<input type='radio' class='chk' id='PrintId_" + i + "' name='PrintingTypeValue' value='" + PrintingType[i] + "'><label>" + PrintingType[i] + "</label>");
                                }
                            }
                            //select this radio button which is saved in Db
                            var PrintTypecheckBoxLngth = $("#print_type").find('input:radio').length;
                            for (var t = 0; t < PrintTypecheckBoxLngth; t++) {
                                var printval = $('input[id="PrintId_' + t + '"]').val();
                                if (Printing.indexOf(printval) > -1) {
                                    $('input[id="PrintId_' + t + '"]').attr("checked", "checked");
                                }
                            }
                        }// this Will execute when producted loded first time
                        else {
                            for (var i = 0; i < IsMorethanOtnePrinting.split("_").length; i++) {
                                if (i == 0) {
                                    $('#print_type').append("<input  type='radio' checked class='chk' name='PrintingTypeValue' value='" + PrintingType[i] + "'><label>" + PrintingType[i] + "</label>");
                                }
                                else if (i == 1 || i == 3 || i == 5) {
                                    if (PrintingType[i + 1] === "Twill") {
                                        $('#print_type').append("<input type='radio' class='chk' name='PrintingTypeValue' value='" + PrintingType[i] + "'><label>" + PrintingType[i] + "</label>");
                                    }
                                    else {
                                        $('#print_type').append("<input type='radio' class='chk' name='PrintingTypeValue' value='" + PrintingType[i] + "'><label>" + PrintingType[i] + "</label><br>");
                                    }
                                }
                                else {
                                    $('#print_type').append("<input type='radio' class='chk' name='PrintingTypeValue' value='" + PrintingType[i] + "'><label>" + PrintingType[i] + "</label>");
                                }
                            }
                        }
                    }
                }
            }

            else if (Product.IsRadioButtonBasedOnDifferent_2_CategoryWise) {
                IsMorethanOtnePrinting = Product.DifferentPrintingOptions;

                IsMorethanOtnePrinting1 = Product.DifferentPrintingOptions1;
                IsMorethanOtnePrinting2 = Product.DifferentPrintingOptions2;


                if (IsMorethanOtnePrinting1 != undefined) {
                    $(this).find("input,label").css({ 'display': 'none' });
                    PrintingType = IsMorethanOtnePrinting1.split("_");
                    Printing = Cust.PrintingTypeValue;
                    if (Printing !== undefined) {
                        if (Printing !== null && Printing !== "" && Cust.PrintingTypeValue.length > 0) {
                            Printing = Printing;
                            for (var i = 0; i < IsMorethanOtnePrinting1.split("_").length; i++) {
                                //if i=1 ,if it is second nd check box then inclue <br> tag after label tag
                                if (i == 1 || i == 3 || i == 5) {
                                    if (PrintingType[i + 1] === "Twill") {// remove Br tag
                                        $('#print_type').append("<input type='radio' id='PrintId_TypeValue1" + i + "' class='chk' name='PrintingTypeValue1' value='" + PrintingType[i] + "'><label>" + PrintingType[i] + "</label>");
                                    }
                                    else { // add Br tag
                                        $('#print_type').append("<input type='radio' id='PrintId_TypeValue1" + i + "' class='chk' name='PrintingTypeValue1' value='" + PrintingType[i] + "'><label>" + PrintingType[i] + "</label><br>");
                                    }
                                }
                                else {
                                    $('#print_type').append("<input type='radio' class='chk' id='PrintId_TypeValue1" + i + "' name='PrintingTypeValue1' value='" + PrintingType[i] + "'><label>" + PrintingType[i] + "</label>");
                                }
                            }
                            //select this radio button which is saved in Db
                            PrintTypecheckBoxLngth = $("#print_type").find('input:radio').length;
                            for (t = 0; t < PrintTypecheckBoxLngth; t++) {
                                printval = $('input[id="PrintId_TypeValue1' + t + '"]').val();
                                if (Printing.indexOf(printval) > -1) {
                                    $('input[id="PrintId_TypeValue1' + t + '"]').attr("checked", "checked");
                                }
                            }
                        }// this Will execute when producted loded first time
                        else {
                            for (i = 0; i < IsMorethanOtnePrinting1.split("_").length; i++) {
                                if (i == 0) {
                                    $('#print_type').append("<input  type='radio' checked class='chk' name='PrintingTypeValue1' value='" + PrintingType[i] + "'><label>" + PrintingType[i] + "</label>");
                                }
                                else if (i == 1 || i == 3 || i == 5) {
                                    if (PrintingType[i + 1] === "Twill") {
                                        $('#print_type').append("<input type='radio' class='chk' name='PrintingTypeValue1' value='" + PrintingType[i] + "'><label>" + PrintingType[i] + "</label>");
                                    }
                                    else {
                                        $('#print_type').append("<input type='radio' class='chk' name='PrintingTypeValue1' value='" + PrintingType[i] + "'><label>" + PrintingType[i] + "</label><br>");
                                    }
                                }
                                else {
                                    $('#print_type').append("<input type='radio' class='chk' name='PrintingTypeValue1' value='" + PrintingType[i] + "'><label>" + PrintingType[i] + "</label>");
                                }
                            }
                        }
                    }
                }
                if (IsMorethanOtnePrinting2 != undefined) {
                    // $(this).find("input,label").css({ 'display': 'none' });
                    PrintingType = IsMorethanOtnePrinting2.split("_");
                    Printing = Cust.PrintingTypeValue;
                    if (Printing !== undefined) {
                        if (Printing !== null && Printing !== "" && Cust.PrintingTypeValue.length > 0) {
                            Printing = Printing;
                            for (var i = 0; i < IsMorethanOtnePrinting2.split("_").length; i++) {
                                //if i=1 ,if it is second nd check box then inclue <br> tag after label tag
                                if (i == 1 || i == 3 || i == 5) {
                                    if (PrintingType[i + 1] === "Twill") {// remove Br tag
                                        $('#print_type').append("<input type='radio' id='PrintId_TypeValue2" + i + "' class='chk' name='PrintingTypeValue2' value='" + PrintingType[i] + "'><label>" + PrintingType[i] + "</label>");
                                    }
                                    else { // add Br tag
                                        $('#print_type').append("<input type='radio' id='PrintId_TypeValue2" + i + "' class='chk' name='PrintingTypeValue2' value='" + PrintingType[i] + "'><label>" + PrintingType[i] + "</label><br>");
                                    }
                                }
                                else {
                                    $('#print_type').append("<input type='radio' class='chk' id='PrintId_TypeValue2" + i + "' name='PrintingTypeValue2' value='" + PrintingType[i] + "'><label>" + PrintingType[i] + "</label>");
                                }
                            }
                            //select this radio button which is saved in Db
                            PrintTypecheckBoxLngth = $("#print_type").find('input:radio').length;
                            for (t = 0; t < PrintTypecheckBoxLngth; t++) {
                                printval = $('input[id="PrintId_TypeValue2' + t + '"]').val();
                                if (Printing.indexOf(printval) > -1) {
                                    $('input[id="PrintId_TypeValue2' + t + '"]').attr("checked", "checked");
                                }
                            }
                        }// this Will execute when producted loded first time
                        else {
                            for (i = 0; i < IsMorethanOtnePrinting2.split("_").length; i++) {
                                if (i == 0) {
                                    $('#print_type').append("<input  type='radio' checked class='chk' name='PrintingTypeValue2' value='" + PrintingType[i] + "'><label>" + PrintingType[i] + "</label>");
                                }
                                else if (i == 1 || i == 3 || i == 5) {
                                    if (PrintingType[i + 1] === "Twill") {
                                        $('#print_type').append("<input type='radio' class='chk' name='PrintingTypeValue2' value='" + PrintingType[i] + "'><label>" + PrintingType[i] + "</label>");
                                    }
                                    else {
                                        $('#print_type').append("<input type='radio' class='chk' name='PrintingTypeValue2' value='" + PrintingType[i] + "'><label>" + PrintingType[i] + "</label><br>");
                                    }
                                }
                                else {
                                    $('#print_type').append("<input type='radio' class='chk' name='PrintingTypeValue2' value='" + PrintingType[i] + "'><label>" + PrintingType[i] + "</label>");
                                }
                            }
                        }
                    }
                }
            }
            else if (Product.IsRadioButtonBasedOnDifferent_3_CategoryWise) {
                IsMorethanOtnePrinting = Product.DifferentPrintingOptions;

                IsMorethanOtnePrinting1 = Product.DifferentPrintingOptions1;
                IsMorethanOtnePrinting2 = Product.DifferentPrintingOptions2;
                IsMorethanOtnePrinting3 = Product.DifferentPrintingOptions3;

                if (IsMorethanOtnePrinting1 != undefined) {
                    $(this).find("input,label").css({ 'display': 'none' });
                    PrintingType = IsMorethanOtnePrinting1.split("_");
                    Printing = Cust.PrintingTypeValue;
                    if (Printing !== undefined) {
                        if (Printing !== null && Printing !== "" && Cust.PrintingTypeValue.length > 0) {
                            Printing = Printing;
                            for (var i = 0; i < IsMorethanOtnePrinting1.split("_").length; i++) {
                                //if i=1 ,if it is second nd check box then inclue <br> tag after label tag
                                if (i == 1 || i == 3 || i == 5) {
                                    if (PrintingType[i + 1] === "Twill") {// remove Br tag
                                        $('#print_type').append("<input type='radio' id='PrintId_TypeValue1" + i + "' class='chk' name='PrintingTypeValue1' value='" + PrintingType[i] + "'><label>" + PrintingType[i] + "</label>");
                                    }
                                    else { // add Br tag
                                        $('#print_type').append("<input type='radio' onclick='ProductSkuChange(event)' id='PrintId_TypeValue1" + i + "' class='chk' name='PrintingTypeValue1' value='" + PrintingType[i] + "'><label>" + PrintingType[i] + "</label><br>");
                                    }
                                }
                                else {
                                    $('#print_type').append("<input type='radio' onclick='ProductSkuChange(event)' class='chk' id='PrintId_TypeValue1" + i + "' name='PrintingTypeValue1' value='" + PrintingType[i] + "'><label>" + PrintingType[i] + "</label>");
                                }
                            }
                            //select this radio button which is saved in Db
                            PrintTypecheckBoxLngth = $("#print_type").find('input:radio').length;
                            for (t = 0; t < PrintTypecheckBoxLngth; t++) {
                                printval = $('input[id="PrintId_TypeValue1' + t + '"]').val();
                                if (Printing.indexOf(printval) > -1) {
                                    $('input[id="PrintId_TypeValue1' + t + '"]').attr("checked", "checked");
                                    if (Printing[0] === "Standup Collar") {
                                        Product.sku = "WJ200S";
                                    }
                                    if (Printing[0] === "Hooded") {
                                        Product.sku = "WJ200";
                                    }
                                }
                            }
                        }// this Will execute when producted loded first time
                        else {
                            for (i = 0; i < IsMorethanOtnePrinting1.split("_").length; i++) {
                                if (i == 0) {
                                    $('#print_type').append("<input  type='radio' onclick='ProductSkuChange(event)' checked class='chk' name='PrintingTypeValue1' value='" + PrintingType[i] + "'><label>" + PrintingType[i] + "</label>");
                                }
                                else if (i == 1 || i == 3 || i == 5) {
                                    if (PrintingType[i + 1] === "Twill") {
                                        $('#print_type').append("<input type='radio' class='chk' name='PrintingTypeValue1' value='" + PrintingType[i] + "'><label>" + PrintingType[i] + "</label>");
                                    }
                                    else {
                                        $('#print_type').append("<input type='radio' onclick='ProductSkuChange(event)' class='chk' name='PrintingTypeValue1' value='" + PrintingType[i] + "'><label>" + PrintingType[i] + "</label><br>");
                                    }
                                }
                                else {
                                    $('#print_type').append("<input type='radio' class='chk' name='PrintingTypeValue1' value='" + PrintingType[i] + "'><label>" + PrintingType[i] + "</label>");
                                }
                            }
                        }
                    }
                }
                if (IsMorethanOtnePrinting2 != undefined) {
                    // $(this).find("input,label").css({ 'display': 'none' });
                    PrintingType = IsMorethanOtnePrinting2.split("_");
                    Printing = Cust.PrintingTypeValue;
                    if (Printing !== undefined) {
                        if (Printing !== null && Printing !== "" && Cust.PrintingTypeValue.length > 0) {
                            Printing = Printing;
                            for (var i = 0; i < IsMorethanOtnePrinting2.split("_").length; i++) {
                                //if i=1 ,if it is second nd check box then inclue <br> tag after label tag
                                if (i == 1 || i == 3 || i == 5) {
                                    if (PrintingType[i + 1] === "Twill") {// remove Br tag
                                        $('#print_type').append("<input type='radio' id='PrintId_TypeValue2" + i + "' class='chk' name='PrintingTypeValue2' value='" + PrintingType[i] + "'><label>" + PrintingType[i] + "</label>");
                                    }
                                    else { // add Br tag
                                        $('#print_type').append("<input type='radio' id='PrintId_TypeValue2" + i + "' class='chk' name='PrintingTypeValue2' value='" + PrintingType[i] + "'><label>" + PrintingType[i] + "</label><br>");
                                    }
                                }
                                else {
                                    $('#print_type').append("<input type='radio' class='chk' id='PrintId_TypeValue2" + i + "' name='PrintingTypeValue2' value='" + PrintingType[i] + "'><label>" + PrintingType[i] + "</label>");
                                }
                            }
                            //select this radio button which is saved in Db
                            PrintTypecheckBoxLngth = $("#print_type").find('input:radio').length;
                            for (t = 0; t < PrintTypecheckBoxLngth; t++) {
                                printval = $('input[id="PrintId_TypeValue2' + t + '"]').val();
                                if (Printing.indexOf(printval) > -1) {
                                    $('input[id="PrintId_TypeValue2' + t + '"]').attr("checked", "checked");
                                }
                            }
                        }// this Will execute when producted loded first time
                        else {
                            for (i = 0; i < IsMorethanOtnePrinting2.split("_").length; i++) {
                                if (i == 0) {
                                    $('#print_type').append("<input  type='radio' checked class='chk' name='PrintingTypeValue2' value='" + PrintingType[i] + "'><label>" + PrintingType[i] + "</label>");
                                }
                                else if (i == 1 || i == 3 || i == 5) {
                                    if (PrintingType[i + 1] === "Twill") {
                                        $('#print_type').append("<input type='radio' class='chk' name='PrintingTypeValue2' value='" + PrintingType[i] + "'><label>" + PrintingType[i] + "</label>");
                                    }
                                    else {
                                        $('#print_type').append("<input type='radio' class='chk' name='PrintingTypeValue2' value='" + PrintingType[i] + "'><label>" + PrintingType[i] + "</label><br>");
                                    }
                                }
                                else {
                                    $('#print_type').append("<input type='radio' class='chk' name='PrintingTypeValue2' value='" + PrintingType[i] + "'><label>" + PrintingType[i] + "</label>");
                                }
                            }
                        }
                    }
                }
                if (IsMorethanOtnePrinting3 != undefined) {
                    //$(this).find("input,label").css({ 'display': 'none' });
                    PrintingType = IsMorethanOtnePrinting3.split("_");
                    Printing = Cust.PrintingTypeValue;
                    if (Printing !== undefined) {
                        if (Printing !== null && Printing !== "" && Cust.PrintingTypeValue.length > 0) {
                            Printing = Printing;
                            for (var i = 0; i < IsMorethanOtnePrinting3.split("_").length; i++) {
                                //if i=1 ,if it is second nd check box then inclue <br> tag after label tag
                                if (i == 1 || i == 3 || i == 5) {
                                    if (PrintingType[i + 1] === "Twill") {// remove Br tag
                                        $('#print_type').append("<input type='radio' id='PrintId_TypeValue3" + i + "' class='chk' name='PrintingTypeValue3' value='" + PrintingType[i] + "'><label>" + PrintingType[i] + "</label>");
                                    }
                                    else { // add Br tag
                                        $('#print_type').append("<input type='radio' id='PrintId_TypeValue3" + i + "' class='chk' name='PrintingTypeValue3' value='" + PrintingType[i] + "'><label>" + PrintingType[i] + "</label><br>");
                                    }
                                }
                                else {
                                    $('#print_type').append("<input type='radio' class='chk' id='PrintId_TypeValue3" + i + "' name='PrintingTypeValue3' value='" + PrintingType[i] + "'><label>" + PrintingType[i] + "</label>");
                                }
                            }
                            //select this radio button which is saved in Db
                            PrintTypecheckBoxLngth = $("#print_type").find('input:radio').length;
                            for (t = 0; t < PrintTypecheckBoxLngth; t++) {
                                printval = $('input[id="PrintId_TypeValue3' + t + '"]').val();
                                if (Printing.indexOf(printval) > -1) {
                                    $('input[id="PrintId_TypeValue3' + t + '"]').attr("checked", "checked");
                                }
                            }
                        }// this Will execute when producted loded first time
                        else {
                            for (i = 0; i < IsMorethanOtnePrinting3.split("_").length; i++) {
                                if (i == 0) {
                                    $('#print_type').append("<input  type='radio' checked class='chk' name='PrintingTypeValue3' value='" + PrintingType[i] + "'><label>" + PrintingType[i] + "</label>");
                                }
                                else if (i == 1 || i == 3 || i == 5) {
                                    if (PrintingType[i + 1] === "Twill") {
                                        $('#print_type').append("<input type='radio' class='chk' name='PrintingTypeValue3' value='" + PrintingType[i] + "'><label>" + PrintingType[i] + "</label>");
                                    }
                                    else {
                                        $('#print_type').append("<input type='radio' class='chk' name='PrintingTypeValue3' value='" + PrintingType[i] + "'><label>" + PrintingType[i] + "</label><br>");
                                    }
                                }
                                else {
                                    $('#print_type').append("<input type='radio' class='chk' name='PrintingTypeValue3' value='" + PrintingType[i] + "'><label>" + PrintingType[i] + "</label>");
                                }
                            }
                        }
                    }
                }
            }
            // display Printing Type based on check box list
            else if (Product.IsPrintingTypeBasedOnCheckBoxList) {
                IsMorethanOtnePrinting = Product.DifferentPrintingOptions;
                if (IsMorethanOtnePrinting != undefined) {
                    $(this).find("input,label").css({ 'display': 'none' });
                    PrintingType = IsMorethanOtnePrinting.split("_");
                    Printing = Cust.PrintingTypeValue;
                    if (Printing !== undefined) {
                        if (Printing !== null && Printing !== "" && Cust.PrintingTypeValue.length > 0) {
                            Printing = Printing;
                            for (i = 0; i < IsMorethanOtnePrinting.split("_").length; i++) {
                                //if i=1 ,if it is second nd check box then inclue <br> tag after label tag
                                if (i == 1 || i == 3 || i == 5) {
                                    if (PrintingType[i + 1] === "Twill") {// remove Br tag
                                        $('#print_type').append("<input type='checkbox' class='chk' name='PrintingTypeValue_" + i + "' value='" + PrintingType[i] + "'><label>" + PrintingType[i] + "</label>");
                                    }
                                    else { // add Br tag
                                        $('#print_type').append("<input type='checkbox' class='chk' name='PrintingTypeValue_" + i + "' value='" + PrintingType[i] + "'><label>" + PrintingType[i] + "</label><br>");
                                    }
                                }
                                else {
                                    $('#print_type').append("<input type='checkbox' class='chk' name='PrintingTypeValue_" + i + "' value='" + PrintingType[i] + "'><label>" + PrintingType[i] + "</label>");
                                }
                            }
                            // check those checkboxes which are checked in DB
                            PrintTypecheckBoxLngth = $("#print_type").find('input:checkbox').length;
                            for (t = 0; t < PrintTypecheckBoxLngth; t++) {
                                printval = $('input[name="PrintingTypeValue_' + t + '"]').val();
                                if (Printing.indexOf(printval) > -1) {
                                    $('input[name="PrintingTypeValue_' + t + '"]').attr("checked", "checked");
                                }
                            }
                        }
                        // this Will execute when producted loded first time
                        else {
                            for (var i = 0; i < IsMorethanOtnePrinting.split("_").length; i++) {
                                if (i == 0) {
                                    $('#print_type').append("<input  type='checkbox' class='chk' name='PrintingTypeValue_" + i + "' value='" + PrintingType[i] + "' checked><label>" + PrintingType[i] + "</label>");
                                }
                                else if (i == 1 || i == 3 || i == 5) {
                                    if (PrintingType[i + 1] === "Twill") {
                                        $('#print_type').append("<input type='checkbox' class='chk' name='PrintingTypeValue_" + i + "' value='" + PrintingType[i] + "'><label>" + PrintingType[i] + "</label>");
                                    }
                                    else {
                                        $('#print_type').append("<input type='checkbox' class='chk' name='PrintingTypeValue_" + i + "' value='" + PrintingType[i] + "'><label>" + PrintingType[i] + "</label><br>");
                                    }
                                }
                                else {
                                    $('#print_type').append("<input type='checkbox' class='chk' name='PrintingTypeValue_" + i + "' value='" + PrintingType[i] + "'><label>" + PrintingType[i] + "</label>");
                                }
                            }
                        }
                    }
                }
            }
            else {
                if (Product.printingOptions == "Screen Printing" && Product.hasOwnProperty('sublimationColors')) {
                    $(this).find("input").change(function () {
                        var id = $(this).attr("id");
                        var type = $(this).val();
                        Cust.printingOption = type;

                        // console.log("change", Cust.printingOption);
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
                else if (Product.printingOptions == "Spot Sublimation") {//Spot Sublimation
                    $(this).find("input,label").css({ 'display': 'none' });
                    $(this).find("label[for='print_option_screen_printing']").css({ 'display': '' });
                    $(this).find("label[for='print_option_screen_printing']").text(Product.printingOptions);
                }
                else if (Product.printingOptions == "Vinyl Decal") {//Vinyl Decal
                    $(this).find("input,label").css({ 'display': 'none' });
                    $(this).find("label[for='print_option_screen_printing']").css({ 'display': '' });
                    $(this).find("label[for='print_option_screen_printing']").text(Product.printingOptions);
                }
                else {
                    //should never happen
                    $('#print_type').hide();
                }
            }
        });

        Builder.populateWithCustomization();
    },
    SaveCutomizedDataOnLoginClick: function (url) {
        var step = Builder.step;
        if (step <= Builder.maxStep && step >= 0 && !$.QueryString['f']) {
            if ((step == 0 || step == 1 || step == 2 || step == 3 || step == 4) && Builder.userData.ID < 0) {
                var IsAdmin = false;
                Api.call(Api.endpoints.getAdmin, JSON.stringify({}), function (Data) {
                    if (Data != null) {
                        if (Data == "Admin") {
                            IsAdmin = true;
                        }
                    }
                });
                // Save Customization
                Iskit = $('.kit.active span.active').attr('data-count');
                if (Iskit == undefined) {
                    Api.call(Api.endpoints.saveDesign,
                        JSON.stringify(Builder.productDataForSaving("NEW", IsAdmin)),
                        Builder.acknowledgeSaveArtworkOrCustomization);
                    // url = 'Builder/UserLogin';
                    //url = 'Builder/LoginHomePage';
                    // url = 'Builder/LoginHomePage?DesignedUrl=' + url;
                    window.location = url;
                    // window.location.replace(url);
                    console.log('url for Singlet=' + url);
                }
                else {
                    for (var i = 0; i < Builder.kitTotalCount; i++) {
                        Api.call(Api.endpoints.saveDesign,
                            JSON.stringify(Builder.productKitDataForSaving("NEW", IsAdmin, i)),
                            Builder.acknowledgeSaveArtworkOrCustomizationForKit(i));
                    }
                    //window.location.replace(url);
                    //url = 'Builder/UserLogin';
                    // url = 'Builder/LoginHomePage?DesignedUrl=' + url;
                    window.location = url;
                    console.log('url for Kit=' + url);
                }

            }
        }
    },
    //Important --Send images for send to dealer email attachment
    //Start
    //EmailAttachBrowsedImages: function () {
    //    $(".lds-wrapper").show();
    //    IsKItOrNot = $('.kit.active span.active').attr('data-count');
    //    if (IsKItOrNot === undefined) {
    //        let PrimaryKetOfDesign = Builder.id;
    //        if (PrimaryKetOfDesign > 0 || PrimaryKetOfDesign.length >= 1) {
    //            $.post("/Builder/IsFileOrPathExist", { id: PrimaryKetOfDesign }, function (data) {
    //                if (data.status) {
    //                    $(".lds-wrapper").hide();
    //                    $.post("/Builder/GetAllFiles", { id: PrimaryKetOfDesign }, function (data) {
    //                        if (data.status) {
    //                            CaptureImagePath = data.ImageList;
    //                        }
    //                    });
    //                }
    //                else {
    //                    $(".lds-wrapper").hide();
    //                    // CK.alert(701);
    //                }
    //            });
    //        }
    //    }
    //    else {
    //        let PrimaryKetOfDesign = kitBuilder.kit_0.id;
    //        if (PrimaryKetOfDesign > 0 || PrimaryKetOfDesign.length >= 1) {
    //            $.post("/Builder/IsFileOrPathExist", { id: PrimaryKetOfDesign }, function (data) {
    //                if (data.status) {
    //                    $(".lds-wrapper").hide();
    //                    $.post("/Builder/GetAllFiles", { id: PrimaryKetOfDesign }, function (data) {
    //                        if (data.status) {
    //                             CaptureImagePath = data.ImageList;
    //                        }
    //                    });
    //                }
    //                else {
    //                    $(".lds-wrapper").hide();
    //                    CK.alert(701);
    //                }
    //            });
    //        }
    //    }
    //},
    //Important-Zipped browsed images at artwork section
    //Start
    DownloadBrowsedImages: function () {
        $(".lds-wrapper").show();
        IsKItOrNot = $('.kit.active span.active').attr('data-count');
        if (IsKItOrNot === undefined) {
            let PrimaryKetOfDesign = Builder.id;
            if (PrimaryKetOfDesign > 0 || PrimaryKetOfDesign.length >= 1) {
                $.post("/Builder/IsFileOrPathExist", { id: PrimaryKetOfDesign }, function (data) {
                    if (data.status) {
                        var url = 'Builder/DownloadZipFile?id=' + PrimaryKetOfDesign;
                        $(".lds-wrapper").hide();
                        // window.open(url);
                        window.location = url;
                    }
                    else {
                        $(".lds-wrapper").hide();
                        CK.alert(701);
                    }
                });
            }
        }
        else {
            let PrimaryKetOfDesign = kitBuilder.kit_0.id;
            if (PrimaryKetOfDesign > 0 || PrimaryKetOfDesign.length >= 1) {
                $.post("/Builder/IsFileOrPathExist", { id: PrimaryKetOfDesign }, function (data) {
                    if (data.status) {
                        var url = 'Builder/DownloadZipFile?id=' + PrimaryKetOfDesign;
                        $(".lds-wrapper").hide();
                        // window.open(url);
                        window.location = url;
                    }
                    else {
                        $(".lds-wrapper").hide();
                        CK.alert(701);
                    }
                });
            }

        }
    },
    //End
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
                    });
                });
            });

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
                        if ($(this).hasClass("active")) {
                            fabricIsChosen = true;
                            Builder.getPricingFromAPI();
                        }
                    });

                    if (Product.fabricOptions[0].id < 0) {
                        fabricIsChosen = true;
                    }

                    if (!fabricIsChosen) !hideAlerts && CK.alert(103);
                    return fabricIsChosen;
                } else {
                    return true;
                }
            case 1:	//color
                if (!Product.hasOwnProperty('skipColor')) {
                    // make sure all colors are selected
                    var groupCount = $(".single .option-set.color .group").length;
                    groupCount += $(".single .option-set.patterns .group").length;
                    groupCount += $(".single .option-set.colorSecond .group").length;
                    groupCount += $(".single .option-set.patternsSecond .group").length;
                    var colorCount = 0;

                    var colorMatchError = false;

                    if (Product.sku.indexOf("SWJUSA") >= 0) {
                        // sleeves and certain panels cannot match
                        var sleeves = $("div[data-svg-id='SLEEVES']");
                        var sleeveColor = sleeves.find('.active').data("code");
                    }

                    $(".single .option-set.color .group").each(function () {
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
                    $(".single .option-set.patterns .group").each(function () {
                        if ($(this).children('ul').children("li.active").length > 0)
                            colorCount++;
                        else
                            $(this).addClass("error");
                    });

                    $(".single .option-set.colorSecond .group").each(function () {
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
                    $(".single .option-set.patternsSecond .group").each(function () {
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
            case 2:	//text
                // check bounding boxes
                return true;
            case 3:	//sizing

                //make sure quantity is >= min quanitity
                if (!Product.hasOwnProperty('skipSize')) {
                    var total_quantity = 0;
                    $(".option-set.sizing input").each(function () {
                        total_quantity += Number($(this).val() || 0);
                    });
                    if (total_quantity < Product.minQuantity) {
                        !hideAlerts && CK.alert(101);
                        return false;
                    }
                }
                return true;
            case 4:	//review
                // no validation

                return true;
            default:
                return false;
        }
    },
    validateKitStep: function (step, hideAlerts, kitNo) {
        // Important --In Case 3 for Pricing Chart
        console.log('kit validateStep', step);
        var groupCountForKit_4 = 0;
        var kit_No = $('.kit span.active').attr('data-count');
        kitNo = kit_No;
        switch (step) {
            case 0: //fabric
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
            case 1: //color
                if (!Product.hasOwnProperty('skipColor')) {
                    // make sure all colors are selected
                    //make sure all colors are selected for option 3 including singlet and shorts..
                    var groupCount = $(".kits.kit_" + kitNo + " .option-set.color .group").length;
                    groupCount += $(".kits.kit_" + kitNo + " .option-set.patterns .group").length;
                    if (kitNo == 2) {
                        //We pass kit no 4 there because kit 2 and 4 are always in pairs....
                        groupCountForKit_4 = $(".kits.kit_4 .option-set.color .group").length;
                        groupCountForKit_4 += $(".kits.kit_4 .option-set.patterns .group").length;
                        groupCount = Number(groupCount + groupCountForKit_4);
                        var colorCount = 0;
                        var colorCountForKit_4 = 0;
                        var colorMatchError = false;
                        var colorMatchErrorForkit4 = false;
                        if (Product.sku.indexOf("SWJUSA") >= 0) {
                            // sleeves and certain panels cannot match
                            var sleeves = $("div[data-svg-id='SLEEVES']");
                            var sleeveColor = sleeves.find('.active').data("code");
                        }
                        $(".kits.kit_" + kitNo + " .option-set.color .group").each(function () {
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
                        $(".kits.kit_" + kitNo + " .option-set.patterns .group").each(function () {
                            if ($(this).children('ul').children("li.active").length > 0)
                                colorCount++;
                            else
                                $(this).addClass("error");
                        });
                        //For kit_4
                        $(".kits.kit_4 .option-set.color .group").each(function () {
                            if ($(this).children('ul').children("li.active").length > 0)
                                colorCountForKit_4++;
                            else
                                $(this).addClass("error");
                            if (sleeveColor && $(this).data("svg-id").indexOf('BODY') >= 0 && $(this).data("svg-id") != 'SLEEVES') {
                                if ($(this).find('.active').data('code') == sleeveColor) {
                                    $(this).addClass("error");
                                    colorMatchErrorForkit4 = true;
                                }
                            }
                        });
                        $(".kits.kit_4 .option-set.patterns .group").each(function () {
                            if ($(this).children('ul').children("li.active").length > 0)
                                colorCountForKit_4++;
                            else
                                $(this).addClass("error");
                        });
                        colorCount = Number(colorCount + colorCountForKit_4);//Add colorcount of kit2 and kit4...
                        if (colorCount != groupCount) {
                            !hideAlerts && CK.alert(104);
                            return false;
                        }
                        if (colorMatchError && colorMatchErrorForkit4) {
                            !hideAlerts && CK.alert(110);
                            return false;
                        }
                    }
                    else {
                        //For other kits old logic is to be there....
                        var colorCount = 0;
                        var colorMatchError = false;
                        if (Product.sku.indexOf("SWJUSA") >= 0) {
                            // sleeves and certain panels cannot match
                            var sleeves = $("div[data-svg-id='SLEEVES']");
                            var sleeveColor = sleeves.find('.active').data("code");
                        }
                        $(".kits.kit_" + kitNo + " .option-set.color .group").each(function () {
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
                        $(".kits.kit_" + kitNo + " .option-set.patterns .group").each(function () {
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
                }
                return true;
            case 2: //text
                // check bounding boxes
                return true;
            case 3: //sizing
                // make sure quantity is >= min quanitity
                var total_quantity = 0;

                // Important- Pass Size to Specific Price Chart Based on Product for both Men and Women also Calculation                                
                if (kitNo == 0) {
                    //For Men
                    $(".sizing-chart-optionsForkit_0 input").each(function () {
                        total_quantity += Number($(this).val() || 0);
                    });
                    // For Women
                    $(".sizing-chart-optionsForkit_0-women input").each(function () {
                        total_quantity += Number($(this).val() || 0);
                    });
                    if (total_quantity < Product.minQuantityOPTION1) {
                        !hideAlerts && CK.alert(101);
                        return false;
                    }
                }

                else if (kitNo == 1) {
                    // For Sirt

                    total_quantityShirt = 0;
                    //For Men
                    $(".sizing-chart-optionsForkit_1 input").each(function () {
                        total_quantityShirt += Number($(this).val() || 0);
                    });
                    // For Women
                    $(".sizing-chart-optionsForkit_1-women input").each(function () {
                        total_quantityShirt += Number($(this).val() || 0);
                    });
                    if (total_quantityShirt < Product.minQuantityOPTION_2_Shirt) {
                        !hideAlerts && CK.alert(101);
                        return false;
                    }

                    //For Short

                    if (total_quantityShirt >= Product.minQuantityOPTION_2_Shirt) {
                        total_quantity = 0;
                        //For Men
                        $(".sizing-chart-kit_OPTION2_Shorts_Men input").each(function () {
                            total_quantity += Number($(this).val() || 0);
                        });
                        // For Women
                        $(".sizing-chart-kit_OPTION2_Shorts_women input").each(function () {
                            total_quantity += Number($(this).val() || 0);
                        });
                        if (total_quantity < Product.minQuantityOPTION_3_Shorts) {
                            !hideAlerts && CK.alert(111);
                            return false;
                        }
                    }

                }
                else if (kitNo == 2 || kitNo == 4) {

                    // For Singlet

                    var total_quantitySinglate = 0;
                    // For Men
                    $(".sizing-chart-optionsForkit_2 input").each(function () {
                        total_quantitySinglate += Number($(this).val() || 0);
                    });
                    // For Women
                    $(".sizing-chart-optionsForkit_2-women input").each(function () {
                        total_quantitySinglate += Number($(this).val() || 0);
                    });
                    if (total_quantitySinglate < Product.minQuantityOPTION_3_Singlet) {
                        !hideAlerts && CK.alert(101);
                        return false;
                    }
                    // For Shorts
                    if (total_quantitySinglate >= Product.minQuantityOPTION_3_Singlet) {
                        total_quantity = 0;
                        //For Men
                        $(".sizing-chart-optionsForkit_4 input").each(function () {
                            total_quantity += Number($(this).val() || 0);
                        });
                        // For Women
                        $(".sizing-chart-optionsForkit_4-women input").each(function () {
                            total_quantity += Number($(this).val() || 0);
                        });
                        if (total_quantity < Product.minQuantityOPTION_3_Shorts) {
                            !hideAlerts && CK.alert(111);
                            return false;
                        }
                    }
                }
                else if (kitNo == 3) {
                    // For Sirt

                    var total_quantity1 = 0;
                    //For Men
                    $(".sizing-chart-optionsForkit_3 input").each(function () {
                        total_quantity1 += Number($(this).val() || 0);
                    });
                    $(".sizing-chart-optionsForkit_3-women input").each(function () {
                        total_quantity1 += Number($(this).val() || 0);
                    });
                    if (total_quantity1 < Product.minQuantityOPTION_4_Shirt) {
                        !hideAlerts && CK.alert(101);
                        return false;
                    }

                    //For Short

                    if (total_quantity1 >= Product.minQuantityOPTION_4_Shirt) {
                        total_quantity = 0;
                        //For Men
                        $(".sizing-chart-kit_OPTION4_Shorts_Men input").each(function () {
                            total_quantity += Number($(this).val() || 0);
                        });
                        $(".sizing-chart-kit_OPTION4_Shorts_women input").each(function () {
                            total_quantity += Number($(this).val() || 0);
                        });
                        if (total_quantity < Product.minQuantityOPTION_4_Shorts) {
                            !hideAlerts && CK.alert(111);
                            return false;
                        }
                    }
                }
                return true;
            case 4: //review
                // no validation
                return true;
            default:
                return false;
        }
    },
    validateKitStepNew: function (step, hideAlerts, kitNo) {
        console.log('kit validateStep', step);
        var kit_No = $('.kit span.active').attr('data-count');
        kitNo = kit_No;
        switch (step) {
            case 0: //fabric
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
            case 1: //color
                if (!Product.hasOwnProperty('skipColor')) {
                    // make sure all colors are selected
                    var groupCount = $(".kits.kit_" + kitNo + " .option-set.color .group").length;
                    groupCount += $(".kits.kit_" + kitNo + " .option-set.patterns .group").length;
                    var colorCount = 0;
                    var colorMatchError = false;
                    if (Product.sku.indexOf("SWJUSA") >= 0) {
                        // sleeves and certain panels cannot match
                        var sleeves = $("div[data-svg-id='SLEEVES']");
                        var sleeveColor = sleeves.find('.active').data("code");
                    }
                    $(".kits.kit_" + kitNo + " .option-set.color .group").each(function () {
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
                    $(".kits.kit_" + kitNo + " .option-set.patterns .group").each(function () {
                        if ($(this).children('ul').children("li.active").length > 0)
                            colorCount++;
                        else
                            $(this).addClass("error");
                    });
                    if (colorCount != groupCount) {
                        !hideAlerts;
                        return false;
                    }
                    if (colorMatchError) {
                        !hideAlerts && CK.alert(110);
                        return false;
                    }
                }
                return true;
            case 2: //text
                // check bounding boxes
                return true;
            case 3: //sizing
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
            case 4: //review
                // no validation
                return true;
            default:
                return false;
        }
    },

    gotoStep: function (step) {
        //23-11-2020
        //add full path of image during share image on gmail
        //Start
        var Imglength = document.getElementsByTagName('image').length;
        for (var a = 0; a < Imglength; a++) {
            var newResult = document.getElementsByTagName('image')[a].getAttribute('xlink:href');
            var result1 = newResult.startsWith('svg');
            var result2 = newResult.startsWith('/svg');
            if (result1 === true || result2 === true) {
                var Url = window.location.origin;
                var fullPath = Url + "/" + newResult;
                document.getElementsByTagName('image')[a].setAttribute('xlink:href', fullPath);
            }
        }
        //end
        var stepNo = $('.row.steps span.active').attr('data-nav');
        if (stepNo != "2") {
            $('#NotesForSecificProduSepicificLocation').hide();
            $('#AppendNotes').hide();
            $('#NotificationSection').hide();
        }
        console.log('gotoStep', step);
        if (step <= Builder.maxStep && step >= 0 && !$.QueryString['f']) {
            Api.call(Api.endpoints.getUser, 'chkUserLogin', function (data) {
                //if ((step == 3 || step == 4)) {
                //Important-Displaying Pricing before login(Step 3 is pricing step)
                if (step == 4) {
                    if (data.ID != '0' && data.ID[0] != '-') {
                        //  if (data.ID != '0') {
                        // user logged in
                        $(".user-info-header > a").hide();
                        $(".modal.dealer .user-info .name").text(data.FirstName + " " + data.LastName);
                        $(".user-info-header > div.name span").text(data.FirstName);
                        $(".modal.dealer .user-info .email").text(data.email);
                        $(".user-info-header > div").show();
                    } else {
                        Api.call(Api.endpoints.getAdmin, JSON.stringify({}), function (Data) {
                            if (Data != null) {
                                if (Data == "Admin") {
                                    // Admin logged in
                                    $(".user-info-header > a").hide();
                                    $(".user-info-header > div").show()
                                }
                                else {
                                    // user not logged in
                                    $(".user-info-header > div").hide()
                                    $(".user-info-header > a").show();
                                }
                            }
                        });
                    }
                }
                Builder.userData = data;
            });
            //Important-- Hide "Save and Share" Button from "Color" Section                    
            //if ((step == 3 || step == 4) && Builder.userData.ID < 0) {
            //Important-Displaying Pricing before login(Step 3 is pricing step)
            if (step == 4 && Builder.userData.ID < 0) {
                var IsAdmin = false;
                Api.call(Api.endpoints.getAdmin, JSON.stringify({}), function (Data) {
                    if (step == 1 || step == 0) { //step==0 (Fabric)
                        $('.share').hide();
                        $('.save-share').hide();
                    }
                    else {
                        $('.save-share').show();
                    }
                    if (Data != null) {
                        if (Data == "Admin") {
                            IsAdmin = true;
                        }
                        else {
                            //  CK.alert(300);
                            $('.share').hide();
                        }
                    }
                });
            }
            else {
                if (step == 1 || step == 0) { //step==0 (Fabric)
                    $('.share').hide();
                    $('.save-share').hide();
                }
                else {
                    $('.save-share').show();
                    // $('.share').show();
                }
            }
            // Add dynamic notes for Some Product Loke MBP13    

            if (step == 2) {
                if (Product.Note != undefined) {
                    var ProductNotes = Product.Note;
                    ProductNotes = ProductNotes.replace(/'/g, '"');
                    if (Product.IsSpecificLocation) {
                        $('#NotesForSecificProduSepicificLocation').html('<h4><strong>Note: </strong>' + ProductNotes + '</h4>');
                        $('#NotesForSecificProduSepicificLocation').show();
                    }
                    else {
                        $('#AppendNotes').html('<h4><strong>Note: </strong>' + ProductNotes + '</h4>');
                        $('#AppendNotes').show();
                    }
                }
                else {
                    $('#NotesForSecificProduSepicificLocation').hide();
                    $('#AppendNotes').hide();
                }
                if (Product.NotificationSection !== undefined) {
                    if (Product.NotificationSection !== "") {
                        var ShowNotificationToUser = Product.NotificationSection;
                        $('#NotificationSection').html('<h4><strong></strong>' + ShowNotificationToUser + '</h4>');
                        $('#NotificationSection').show();
                    }
                    else {
                        $('#NotificationSection').show();
                    }
                }
                else {
                    $('#NotificationSection').hide();
                }
            }

            //if ((step == 3 || step == 4) && Builder.userData.ID < 0) {
            //Important-Displaying Pricing before login(Step 3 is pricing step)
            if (step == 4 && Builder.userData.ID < 0) {
                //if ((step == 4) && Builder.userData.ID < 0) {
                //Important---Show Boundary Box, In Step 2 While Use Click on Artwork Otherwise Hide Boundary Box
                $("#boundingbox").css("display", "none");
                var IsAdmin = false;
                Api.call(Api.endpoints.getAdmin, 'chkUserLogin', function (Data) {

                    if (Data != null) {
                        if (Data == "Admin") {
                            if (step != 2) {
                                $('#NotesForSecificProduSepicificLocation').hide();
                                $('#AppendNotes').hide();
                                $('#NotificationSection').hide();
                            }

                            IsAdmin = true;
                            if (step == 0)
                                $("[data-nav=prev]").addClass("disabled");
                            else if (step == Builder.maxStep)
                                $("[data-nav=prev]").removeClass("disabled");
                            else
                                $("[data-nav]").removeClass("disabled");
                            $(".option-set.active, [data-nav]").removeClass("active");
                            $("a").removeClass("processing");
                            $(".option-set[data-step=" + step + "]").addClass("active");
                            $("[data-nav=" + step + "]").addClass("active");


                            if ($('.row.steps span.active').attr('data-nav') === "3") {
                                $('.Teamprice').show();
                            }
                            else {
                                $('.Teamprice').hide();
                            }

                            //Important--add class ProgressBar
                            //Start

                            var MinNumber;
                            var MaxNumber;
                            var count = 0;
                            $(".row.steps [data-nav]").each(function () {
                                var Number = $(this).data('nav');
                                if (count === 0) {
                                    MinNumber = Number;
                                    MaxNumber = Number;
                                }
                                if (MinNumber < Number) {
                                    MaxNumber = Number;
                                }
                                else {
                                    MinNumber = Number;
                                }
                                count++;
                            });
                            for (MinNumber = MinNumber; MinNumber <= step; MinNumber++) {
                                $("[data-nav=" + MinNumber + "]").addClass("ProgressBar");
                            }
                            var StepNo = step;
                            for (StepNo = StepNo + 1; StepNo <= MaxNumber; StepNo++) {
                                $("[data-nav=" + StepNo + "]").removeClass('ProgressBar');
                            }
                            //end

                            Builder.step = step;
                            Cust.step = step;
                            Builder.initStepUi();
                            if (step == 3 || step == 4) {
                                $('#HideQuantitySizesInSinglet').hide();
                                $(".option-set.ctas .buttons .to-cart").remove();
                                $('#btncart').hide();
                            }
                            else {
                                $('#HideQuantitySizesInSinglet').show();
                            }
                        }

                        //else (Builder.userData.ID < 0)
                        else if (Builder.userData.ID < 0) {
                            //$(".user-info-header > div").hide();
                            //$(".user-info-header > a").show();
                            //$('body').removeClass('loggedin');  
                            $(".error .copy").html("");
                            var IsViewOnly = $('body').hasClass('view-only');
                            if (IsViewOnly !== true) {
                                CK.alert(300);
                            }
                        }
                    }
                });
            }
            else {
                // 1/5/2019
                //  Start
                if (step != 2) {
                    $('#NotesForSecificProduSepicificLocation').hide();
                    $('#AppendNotes').hide();
                    $('#NotificationSection').hide();
                }
                if (step == 3 || step == 4) {

                    $('#HideQuantitySizesInSinglet').hide();
                }
                else {
                    $('#HideQuantitySizesInSinglet').show();
                }
                if (step == 0)
                    $("[data-nav=prev]").addClass("disabled");
                else if (step == Builder.maxStep)
                    $("[data-nav=prev]").removeClass("disabled");
                else
                    $("[data-nav]").removeClass("disabled");

                $(".option-set.active, [data-nav]").removeClass("active");
                $("a").removeClass("processing");
                $(".option-set[data-step=" + step + "]").addClass("active");
                $("[data-nav=" + step + "]").addClass("active");

                if ($('.row.steps span.active').attr('data-nav') === "3") {
                    $('.Teamprice').show();
                }
                else {
                    $('.Teamprice').hide();
                }

                //Important--add class ProgressBar
                //Start

                var MinNumber;
                var MaxNumber;
                var count = 0;
                $(".row.steps [data-nav]").each(function () {
                    var Number = $(this).data('nav');
                    if (count === 0) {
                        MinNumber = Number;
                        MaxNumber = Number;
                    }
                    if (MinNumber < Number) {
                        MaxNumber = Number;
                    }
                    else {
                        MinNumber = Number;
                    }
                    count++;
                });
                for (MinNumber = MinNumber; MinNumber <= step; MinNumber++) {
                    $("[data-nav=" + MinNumber + "]").addClass("ProgressBar");
                }
                var StepNo = step;
                for (StepNo = StepNo + 1; StepNo <= MaxNumber; StepNo++) {
                    $("[data-nav=" + StepNo + "]").removeClass('ProgressBar');
                }
                //end


                //15/1/2019
                //Important---Show Boundary Box, In Step 2 While Use Click on Artwork Otherwise Hide Boundary Box
                if (step != 2) {
                    $("#boundingbox").css("display", "none");
                }
                else {
                    $("#boundingbox").css("display", "block");
                }
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

                //26/2/2019
                //Important--Remove "SAVE TO MY LOCKER", "SAVE AND SHARE" ,"NEXT AND PREV" in view-only mode for single product or singlete
                //Start               
                IsViewOnly = $("body").hasClass("view-only");
                if (IsViewOnly) {
                    //Important--Remove "Next and Prev" button In Case Of View Mode
                    $('.prev-next-wrapper').hide();
                    //Important--Remove "SAVE TO MY LOCKER" button In Case Of View Mode
                    $('.save').hide();
                    //Important--Remove "SAVE AND SHARE" button In Case Of View Mode
                    $('.btn.save-share').hide();
                    //Important--Remove "ICON SHARE" Like FACEBOOK,TWITTER,AND EMAIL button In Case Of View Mode
                    $('.share').hide();
                    //Important--Remove Two Line (-- ---) In Case Of View Mode
                    $('.save-next-wrapper').hide();
                    // Reomve Login Button Form Bottom Place
                    $('#HideItFormViewOnlyMode').hide();
                }
                //End
                $('body').removeClass("changed").addClass('loaded');
                if (Builder.viewOnly) $("g[id^=BOX]").hide();
                Builder.initStepUi();
            }
        }
    },
    loadGarmentSvg: function (viewId) {
        console.log('loadGarmentSvg', viewId);
        var view = Builder.VIEWS[viewId];
        console.log('Builder.VIEWS', view);

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
                    });
                }
                parseChildren(originalSvgShapeForMask);

                cleansedMaskSvgHtml += '</clipPath></defs></svg>';
                $(".svg-masks").append($(cleansedMaskSvgHtml));

            });

            var custom_svg = $("g[id^='CUSTOM']", svg);
            if (IsKit == false) {
                $(".canvas-wrapper[data-view=" + view + "] .svg").html(svg);
            }
            else {
                $(".canvas-wrapper[data-view=" + view + "] .svg").html(svg);
            }


            //custom_svg.attr("width", 360).attr("height", 756).attr("clip-path", "url(#"+defaultMask+")");

            var viewName = Builder.VIEWS[viewId].substr(1).toUpperCase();
            if (typeof (Product.views[viewId]) == "string")
                viewName = Product.views[viewId].toUpperCase();
            if (Product.sku == 'CKWRAP' && viewName == 'BACK') {
                $(".preview-nav a[data-view=" + view + "]").html("<br>LEFT VIEW");
            }
            else if (Product.sku == 'CKWRAP' && viewName == 'FRONT') {
                $(".preview-nav a[data-view=" + view + "]").html("<br>RIGHT VIEW");
            }
            else {
                $(".preview-nav a[data-view=" + view + "]").html("<br>" + viewName + " VIEW");
            }
            Builder.viewsLoaded++;
            Builder.checkLoadProgress("view");
        });
    },
    loadStockLogoSvg: function (file_ref, group) {
        $.get("../svg/stock_logos/" + file_ref + ".svg", function (data) {
            var svg = $(data).children("svg");
            $("li[data-svg='" + file_ref + "']").addClass("loaded").children("div").html(svg);
            Builder.checkLoadProgress("logo");
        });
    },
    loadKitStockLogoSvg: function (file_ref, group) {
        $.get("../svg/stock_logos/" + file_ref + ".svg", function (data) {
            var svg = $(data).children("svg");
            $("li[data-svg='" + file_ref + "']").addClass("loaded").children("div").html(svg);

            Builder.checkKitLoadProgress("logo");
        });
    },
    setSvgColor: function (group, hex, code, image) {
        //Important
        if (hex != null) {
            console.log('setSvgColor');
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
                $("stop[data-grad-id^=" + group + "]").css("stop-color", "#" + hex);
            }
            //By sheela CF5
            if (Product.sku == "CF5") {
                if (group == "SHELL") {
                    if (code == "TR") {
                        $("g[id^=CF5_WHITE_LOGO]").hide();
                        $("g[id^=CF5_COLOR_LOGO]").show();
                        $("g[id^=CF5_COLOR_LOGO_2]").show();
                    }
                    else {
                        $("g[id^=CF5_WHITE_LOGO]").show();
                        $("g[id^=CF5_COLOR_LOGO]").hide();
                        $("g[id^=CF5_COLOR_LOGO_2]").hide();
                    }
                }
            }
            if (Product.productCategory == "HEADGEAR") {
                if (group == "PADS") {
                    if (code == "WH") {
                        $("g[id^=COLORFULL_CK_LOGO]").show();
                        $("g[id^=WHITE_CK_LOGO]").hide();
                    }
                    else {
                        $("g[id^=COLORFULL_CK_LOGO]").hide();
                        $("g[id^=WHITE_CK_LOGO]").show();
                    }
                }
            }
            var productName = Product.sku;
            switch (productName) {
                case "BRDS4":
                case "MLSS1":
                case "MLLS2":
                case "MXSHORT":
                case "TDRI3":
                case "TDRI3LS":
                    // PrintBasedOnColorFor_MoreProductCheckBox(group, code);
                    PrintBasedOnColorFor_MoreProductRadioButton(group, code);
                    break;
            }
        }
    },
    setKitSvgColor: function (group, hex, code, image, kitNo) {
        if (hex != null) {
            if ($(".kits.kit_" + kitNo + " g[id^=" + group + "]").length > 0) {
                console.log('setKitSvgColor');

                console.log(".kits.kit_" + kitNo + " g[id^=" + group + "] found");
                $(".kits.kit_" + kitNo + " g[id^=" + group + "PATTERN]").hide();
                $(".kits.kit_" + kitNo + " g[id^=" + group + "] path, g[id^=" + group + "] rect, g[id^=" + group + "] polygon, g[id^=" + group + "] ellipse").attr("fill", "#" + hex);

                if (image) {
                    $(".kits.kit_" + kitNo + " g[id^=" + group + "PATTERN]").hide();
                    $(".kits.kit_" + kitNo + " g[id^=" + group + "PATTERN_" + code + "]").show();
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
        $(".single .product-title .text").text(Product.sku);
        if ($('body').hasClass("view-only")) {
            $(".single .product-title .text").text("");
        }
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

                    //Important:-clear pricting html during change the value of checkbox in "Fabric" Step for ex L79CBJ product
                    $(Product.sizes).each(function () {
                        $('.sizing-chart-options .row[data-size="' + this + '"] .per-piece').html("");
                        $('.sizing-chart-options .row[data-size="' + this + '"] .per-piece').html('$<span></span>');
                        $('.sizing-chart-options .row[data-size="' + this + '"] .per-piece span').html("0.00");
                    });
                    if (Product.wSku != null) {
                        $(Product.wSizes).each(function () {
                            $('.sizing-chart-options-women .row[data-size="' + this + '"] .per-piece').html("");
                            $('.sizing-chart-options-women .row[data-size="' + this + '"] .per-piece').html('$<span></span>');
                            $('.sizing-chart-options-women .row[data-size="' + this + '"] .per-piece span').html("0.00");
                        });
                    }
                    Builder.getPricingFromAPI();

                    if (Builder.swatchMode) {
                        Cust.swatch = null;
                    }
                    else {
                        $.each(Cust.colors, function (key, value) {
                            Cust.colors[key] = null;
                        });
                    }
                });
            });
        } else {
            $('.option-set.fabric, .navigation .steps span[data-nav=0]').hide();
            $('.steps em').eq(0).hide();
            $('.navigation .steps span[data-nav=0]').trigger('click');

        }
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

            //Important--Add View name  for view-only  case
            //Start
            if (Builder.viewsToLoad === 4) {
                $('#ForSingleProduct_Front').before('<label class="viewOnlyLabel_view" style="display: none">Front</label>');
                $('#ForSingleProduct_Back').before('<label class="viewOnlyLabel_view" style="display: none">Back</label>');
                $('#ForSingleProduct_Left').before('<label class="viewOnlyLabel_view" style="display: none">Left</label>');
                $('#ForSingleProduct_Right').before('<label class="viewOnlyLabel_view" style="display: none">Right</label>');
            }
            else if (Builder.viewsToLoad === 3) {
                $('#ForSingleProduct_Front').before('<label class="viewOnlyLabel_view" style="display: none">Front</label>');
                $('#ForSingleProduct_Back').before('<label class="viewOnlyLabel_view" style="display: none">Back</label>');
                $('#ForSingleProduct_Left').before('<label class="viewOnlyLabel_view" style="display: none">Left</label>');
            }
            else if (Builder.viewsToLoad === 2) {
                $('#ForSingleProduct_Front').before('<label class="viewOnlyLabel_view" style="display: none">Front</label>');
                $('#ForSingleProduct_Back').before('<label class="viewOnlyLabel_view" style="display: none">Back</label>');
            }
            else if (Builder.viewsToLoad === 1) {
                $('#ForSingleProduct_Front').before('<label class="viewOnlyLabel_view" style="display: none">Front</label>');
            }
            //end
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
            //for n/a
            //html += '<div class="col men">:<input type="text" value="0" class="inputidmen" autocomplete="off" onkeypress="return isNumberKey(event)" disabled="true" name="' + this + '" /></div>';
            //Calling tab event

            html += '<div class="col men">:<input type="text" value="0" class="inputidmen" autocomplete="off" onkeydown="return tabeventForSinglet(this,event)" onkeypress="return isNumberKey(event)" name="' + this + '" /></div>';
            //html += '<div class="col per-piece">$<span></span></div>';
            //html += '<div class="col per-piece">N/A<span></span></div>';
            html += '<div class="col per-piece">$0.00<span></span></div>';
            html += '<div class="col piece-total">0.00</div>';
            html += '</div>';
            $('.sizing-chart-options').append($(html));
        });
        if (Product.wSku != null) {
            $(Product.wSizes).each(function () {
                var html = '<div class="row" data-size="' + this + '">';
                html += '<div class="col"><strong>' + this + '</strong></div>';
                html += '<div class="col women">:<input class="inputidwomen" type="text" value="0" autocomplete="off" onkeypress="return isNumberKey(event)" name="' + this + '" /></div>';
                //html += '<div class="col per-piece">$<span></span></div>';
                //html += '<div class="col per-piece">N/A<span></span></div>';
                html += '<div class="col per-piece">$0.00<span></span></div>';
                html += '<div class="col piece-total">0.00</div>';
                html += '</div>';
                $('.sizing-chart-options-women').append($(html));
            });
        }
        if (Product.hasOwnProperty('printEmbroideryOption')) {
            //Important--9/4/2019 remove Stock from All Custom Warm-ups
            if (Product.category === "Custom Warm-ups") {
                $(".embroideryNoteForCustomWarmUps").css("display", "block");
                $(".embroideryNoteForCustomWarmUps").addClass("active");
            }
            else {
                $(".embroideryNoteForCustomWarmUps").css("display", "none");
                $(".embroidery-note").addClass("active");
            }
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
                        if (Product.BOXCOLOR != "DEFAULT") {
                            $("g[id^=BOX] *").attr('stroke', '#000000');
                        }
                    }
                });
            });
        }
        else {
            //Important--Add Color 1 and Color 2 for this product SBRDS54
            if (Product.sku == "SBRDS54") {
                $.each(Product.panels, function (key, value) {
                    var panel = this;
                    var html = '<div class="group" data-part-name="customcolors1" data-svg-id="' + panel.name + '">';

                    var name = Product.panels[key].name;
                    if (name === "XYZ") {
                        html += '<strong>' + panel.display + ' Color 1</strong>';
                    }
                    else if (name === "Panel_Color") {
                        html += '<strong>' + panel.display + ' Color 2</strong>';
                    }
                    else {
                        html += '<strong>' + panel.display + ' Color</strong>';
                    }
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
            }
            else {
                $(Product.panels).each(function () {
                    var panel = this;
                    var html = '<div class="group" data-part-name="customcolors1" data-svg-id="' + panel.name + '">';
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
            }


            $(".option-set.color .group ul li").each(function () {

                $(this).css("background-color", "#" + $(this).data("hex"));
                $(this).click(function (e) {
                    // Important
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
                            if (Product.BOXCOLOR != "DEFAULT") {
                                $("g[id^=BOX] *").attr('stroke', '#000000');
                            }
                        }
                    }
                    // Important;                 
                    var thisGroup = $(this).parent().parent().data('svg-id');

                    //trigger clicks on other image tiles


                    //select  Mossy Oak pattern or Color pattern                 
                    if ($(this).data('image')) {
                        // Important;                   
                        // Comment Code (Select Only Current panel group)
                        //$('li[data-code=' + $(this).data('code') + ']').each(function () {
                        $(this).parent().parent().removeClass("error");
                        $(this).siblings("li.active").removeClass("active");
                        $(this).addClass("active");
                        var group = thisGroup
                        Builder.setSvgColor(group, $(this).data('hex'), $(this).data('code'), $(this).data('image'));
                        Cust.colors[group] = $(this).data('code');
                        //}); 

                        $("li.pattern").removeClass("active");
                        $('li[data-pattern=' + $(this).data('code') + ']').addClass('active');

                        // Comment Code (Mossy Oak pattern from leg bands)

                        // Builder.enablePattern($('li[data-pattern=' + $(this).data('code') + ']').data('pattern-data'));
                    }
                    else if ($(this).siblings('[data-code^=MO]').length > 0 && $('li[data-code^=MO].active').length > 0) {

                        // Comment Code   (Select Only Current panel group)

                        // $('li[data-code^=MO].active').siblings('[data-code=WH]').each(function () {
                        if ($(this).parent().parent().data('svg-id') != thisGroup) {
                            $(this).parent().parent().removeClass("error");
                            $(this).siblings("li.active").removeClass("active");
                            $(this).addClass("active");
                            var group = $(this).closest(".group").data("svg-id");
                            Builder.setSvgColor(group, $(this).data('hex'), $(this).data('code'), $(this).data('image'));
                            Cust.colors[group] = $(this).data('code');
                        }
                        // });

                        // $("li.pattern").removeClass("active");
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
        if (Quantity != null) {
            $(Product.sizes).each(function () {

                if (Quantity.sizes[this] == '0') {
                    $('.sizing-chart-options [name="' + this + '"]').val("");
                }
                else {
                    $('.sizing-chart-options [name="' + this + '"]').val(Quantity.sizes[this]);
                }
                Builder.cartObj['m'][this] = Quantity.sizes[this];

            });
            $(Product.wSizes).each(function () {

                if (Quantity.wSizes[this] == '0') {
                    $('.sizing-chart-options-women [name="' + this + '"]').val("");
                }
                else {
                    $('.sizing-chart-options-women [name="' + this + '"]').val(Quantity.wSizes[this]);
                }

                Builder.cartObj['w'][this] = Quantity.sizes[this];
            });
        }
        else {
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
                    if (Product.BOXCOLOR != "DEFAULT") {
                        $("g[id^=BOX] *").attr('stroke', '#000000');
                    }
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
                        if (Product.BOXCOLOR != "DEFAULT") {
                            $("g[id^=BOX] *").attr('stroke', '#000000');
                        }
                    }
                }
            });
        }
    },
    initPatterns: function (force) {
        //important
        if (!Builder.patternsDisplayed || force) {
            $(Product.patternOptions).each(function () {
                var id = this.id;
                var name = this.name;
                var areas = this.areas;
                var pattern = this;
                // Important
                var html = '<li class="pattern" id="btn-pattern-' + id + '" data-pattern="' + id + '">';

                // insert Images from project

                //if (id == 'MOO1' || id == 'MOO2' || id == 'MOO3')
                //{
                //    html += '<img src="/Content/images/pattern-' + id + '.png" />';
                //}
                // else {
                html += '<img src="../images/cuff-patterns/pattern-' + id + '.png" />';
                //}
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
                //$(".option-set.patterns").attr("data-part-name ", "patterns");
                if ($(".option-set.color").hasClass("active")) {
                    $(".option-set.patterns").addClass("active");
                }
            });

            //// Important
            // Use this function for Leg Band Patterns functionality of S74SBCB43J(Custom Sublimated Singlets)

            $(Product.patternOptionsSecond).each(function () {
                // Important
                var id = this.id;
                var name = this.name;
                var areas = this.areas;
                var pattern = this;

                var html = '<li class="pattern2" id="btn-pattern2-' + id + '" data-pattern="' + id + '">';

                // insert Images from project

                if (id == '11' || id == '22' || id == '44' || id == '55') {
                    html += '<img src="/Content/images/pattern-' + id + '.png" />';
                }
                else {
                    html += '<img src="../images/cuff-patterns/pattern-' + id + '.png" />';
                }
                html += '<div>' + name + '</div>';
                html += '</li>';
                var el = $(html);
                $(el).data('pattern-data1', pattern);

                $(".svg g[id^='PATTERN_LEG_BAND']").attr("class", "hide-pattern");

                $(".option-set.patternsSecond").children("ul").append(el);
                $("#btn-pattern2-" + id).bind('click', function () {
                    $("li.pattern2").removeClass("active");
                    $(this).addClass('active');
                    Builder.enablePatternSecond($(this).data('pattern-data1'));
                    //trigger texture panels if texture not colors
                    if (id != parseInt(id)) {
                        $('li[data-code=' + id + ']:eq(0)').click();
                    }
                });
                $(".option-set.patternsSecond").attr("data-step", 1);
                if ($(".option-set.color").hasClass("active")) {
                    var status = $("body").hasClass("S74SBCB43J");
                    if (status == true) {
                        $(".option-set.patternsSecond").addClass("active");
                    }
                }
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
        //Enable Leg Band Patterns of (pattern #1) at the time of page load
        var status = $("body").hasClass("S74SBCB43J");
        if (status) {
            Cust.pattern = 11;
            $("#btn-pattern2-" + Cust.pattern).trigger('click');

        }
    },
    enablePattern: function (pattern) {
        //side Bride
        //Important      
        if (typeof (pattern) == 'undefined') {
            console.log('b pattern');
            return false;
        }
        var status = $("body").hasClass("S74SBCB43J");
        console.log("enablePattern", pattern, pattern.areas.length);
        var id = pattern.id;
        $('.pattern-colors .c').empty();
        Cust.patternColors = {};
        Cust.pattern = id;
        if (pattern.areas[0].colors.length > 1) {
            $('.pattern-colors').show();
            $(pattern.areas).each(function (e) {
                var colors = this.colors;
                var areaId = this.areaId;

                if (status) {
                    var panel = "PATTERN_SIDE_BRAID_" + id + "_" + areaId;
                }
                else {
                    var panel = "PATTERN_" + id + "_" + areaId;
                }
                var html = '<div class="group" data-part-name="patterns" data-svg-id="' + panel + '">';
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
                        };
                        Cust.patternColors[areaId] = color_obj;
                    });
                });
            });
        }
        else {
            $('.pattern-colors').hide();
        }
        // Important      
        if (status == true) {
            $(".svg g[id^='PATTERN_SIDE_BRAID']").attr("class", "hide-pattern");
            $(".svg g[id^='PATTERN_SIDE_BRAID_" + id + "']").attr("class", "show-pattern");
        }
        else {
            //Remove patten color on svg image
            $(".svg g[id^='PATTERN']").attr("class", "hide-pattern");
            // pattern issue by aman
            //17/5/2019
            //start
            $(".svg g[id^='PATTERN']").attr("display", "none");
            //End
            // set patten color on svg image
            $(".svg g[id^='PATTERN_" + id + "']").attr("class", "show-pattern");
            // pattern issue by aman
            //17/5/2019
            //Start
            $(".svg g[id^='PATTERN_" + id + "']").attr("display", "block");
            //End
        }
    },
    enablePatternSecond: function (pattern) {
        //Important
        if (typeof (pattern) == 'undefined') {
            console.log('b pattern');
            return false;
        }
        console.log("enablePatternSecond", pattern, pattern.areas.length);
        var id = pattern.id;
        $('.pattern-colorSecond .c').empty();
        Cust.patternColors = {};
        Cust.pattern = id;
        if (pattern.areas[0].colors.length > 1) {
            $('.pattern-colorSecond').show();
            $(pattern.areas).each(function (e) {
                var colors = this.colors;
                var areaId = this.areaId;

                var panel = "PATTERN_LEG_BAND_" + id + "_" + areaId;
                var html = '<div class="group" data-part-name="patterns" data-svg-id="' + panel + '">';
                html += '<strong>Pattern Area ' + (e + 1) + ' Color</strong>';
                html += '<ul>';
                $(colors).each(function () {
                    html += '<li title="' + this.name + '" data-hex="' + this.hex + '" data-code="' + this.code + '"></li>';
                });
                html += '</ul>';
                html += '</div>';

                $('.pattern-colorSecond .c').append($(html));
                $(".pattern-colorSecond .c .group ul li").each(function () {
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
                        };
                        Cust.patternColors[areaId] = color_obj;
                    });
                });
            });
        }
        else {
            $('.colorSecond-colors').hide();
        }
        // Important
        $(".svg g[id^='PATTERN_LEG_BAND']").attr("class", "hide-pattern");

        // set patten color on svg image

        $(".svg g[id^='PATTERN_LEG_BAND_" + id + "']").attr("class", "show-pattern");

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
                if (per_piece != 0) {
                    var total_price_str = "$" + total_price.formatMoney(2, '.', ',');
                }
                else {
                    //var total_price_str = "N/A";
                    var total_price_str = "$0.00";
                }
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
        console.log('price total', Builder.priceTotal);

        //Make Printing fee '0' for all submilted products Or For CKWRAP it will be '0'..
        var S_Product = Product.sku;
        var FirstChar = S_Product.charAt(0); // alerts 'S'

        //Important
        //Add Printing Fee if condition is true 
        //15/5/2019        
        //if (Product.PrintingFeeDisplay == true) {
        //    Builder.priceForArt = totalQuantity * parseFloat(svgText.pricing.pricingTotal);
        //}
        //else {
        if (Product.sku == "CKWRAP" || FirstChar == "S") {
            Builder.priceForArt = 0;
            if (Product.printingOptions == "Spot Sublimation") {
                Builder.priceForArt = totalQuantity * parseFloat(svgText.pricing.pricingTotal);
            }
        }
        else {
            Builder.priceForArt = totalQuantity * parseFloat(svgText.pricing.pricingTotal);
        }
        //}

        //End         
        Builder.priceTotal += Builder.priceForArt;
        Builder.priceTotal = Builder.priceTotal.toFixed(2).toLocaleString();
        $('.preview .details .price span').text(Builder.priceTotal);

        //SetUpFee For CE58 and CF5
        var setUpFee = 0;
        if (Builder.IssetUpfee == true) {
            setUpFee = 0;
            $(".option-set.review .setup-fee span").text('$' + setUpFee);
        }
        else {
            setUpFee = $(".option-set.review .setup-fee span").text().replace("$", "");
        }

        // var setUpFee = $(".option-set.review .setup-fee span").text().replace("$", "");
        var parsedsetUpFee = 0;
        parsedsetUpFee = parseFloat(setUpFee);
        if (isNaN(parsedsetUpFee)) {
            parsedsetUpFee = 0;
        }
        var parsedpriceTotal = 0;
        parsedpriceTotal = parseFloat(Builder.priceTotal);
        if (isNaN(parsedpriceTotal)) {
            parsedpriceTotal = 0;
        }
        var parsedpriceForArt = 0;
        parsedpriceForArt = parseFloat(Builder.priceForArt);
        if (isNaN(parsedpriceForArt)) {
            parsedpriceForArt = 0;
        }
        var tot = parsedpriceTotal + parsedsetUpFee;
        $('#price_total span').text('$' + tot);
        Builder.hasChanged();
        Builder.compileReview();
    },
    updateKitPricing: function (e, dontValidate, kitNo) {
        console.log('Kit updatePricing', dontValidate);
        $('.kits.kit_' + kitNo + ' .did span').text(Builder.guid);
        //if ckwrap status changes, relookup pricing
        if (Builder.checkCkwrap()) {
            //console.log('ckwrap changed, relookup');         

            //Commented to make CKWRAP individual
            // Builder.getPricingFromAPI(Builder.hgSku);
        }
        Builder.priceTotal = 0;
        Builder.priceTotalforkit4 = 0;
        var totalQuantity = 0;
        if (kitNo == 0) {
            $(".sizing-chart-optionsForkit_0 input").each(function () {
                $(this).removeClass("error");
                var val = $(this).val() || 0;
                if (!isInt(val) || String(val).indexOf("0") == 0 && val != "" && val != "0" && !$(this).hasClass('error')) {
                    $(this).addClass('error');
                    if (!dontValidate) CK.alert(102);
                }
                else {
                    var per_piece = Number($(this).parent().siblings('.per-piece').children("span").text());
                    var total_price = parseFloat(per_piece * val);
                    Builder.priceTotal += total_price;
                    //console.log(svgText.pricing.pricingTotal)
                    var total_container = $(this).parent().siblings('.piece-total');
                    //  var total_price_str = "$" + total_price.formatMoney(2, '.', ',');                       
                    if (per_piece != 0) {
                        var total_price_str = "$" + total_price.formatMoney(2, '.', ',');
                    }
                    else {
                        var total_price_str = "$0.00";
                        // var total_price_str = "N/A";
                    }
                    total_container.text(total_price_str);

                    totalQuantity += Number(val);

                    if ($(this).parent().hasClass("men")) {
                        Builder.cartObj0['m'][$(this).attr("name")] = val;
                    } else if ($(this).parent().hasClass("women")) {
                        Builder.cartObj0['w'][$(this).attr("name")] = val;
                    }

                    //console.log('updatePricing', Builder.cartObj);
                }
            });
            $(".sizing-chart-optionsForkit_0-women input").each(function () {

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
                    // var total_price_str = "$" + total_price.formatMoney(2, '.', ',');
                    if (per_piece != 0) {
                        var total_price_str = "$" + total_price.formatMoney(2, '.', ',');
                    }
                    else {
                        var total_price_str = "$0.00";
                        //var total_price_str = "N/A";
                    }
                    total_container.text(total_price_str);

                    totalQuantity += Number(val);

                    if ($(this).parent().hasClass("men")) {
                        Builder.cartObj0['m'][$(this).attr("name")] = val;
                    } else if ($(this).parent().hasClass("women")) {
                        Builder.cartObj0['w'][$(this).attr("name")] = val;
                    }

                    //console.log('updatePricing', Builder.cartObj);
                }
            });
        }
        else if (kitNo == 1) {
            $(".sizing-chart-optionsForkit_1 input").each(function () {

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
                    // var total_price_str = "$" + total_price.formatMoney(2, '.', ',');
                    if (per_piece != 0) {
                        var total_price_str = "$" + total_price.formatMoney(2, '.', ',');
                    }
                    else {
                        //var total_price_str = "N/A";
                        var total_price_str = "$0.00";
                    }
                    total_container.text(total_price_str);
                    totalQuantity += Number(val);
                    if ($(this).parent().hasClass("men")) {
                        //Builder.cartObj_1Shirt['m'][$(this).attr("name")] = val;
                        Builder.cartObj_1Shirt_Men['m'][$(this).attr("name")] = val;
                    }
                    //else if ($(this).parent().hasClass("women")) {
                    //    Builder.cartObj_1Shirt['w'][$(this).attr("name")] = val;
                    //}

                }
            });
            $(".sizing-chart-optionsForkit_1-women input").each(function () {

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
                    //var total_price_str = "$" + total_price.formatMoney(2, '.', ',');
                    if (per_piece != 0) {
                        var total_price_str = "$" + total_price.formatMoney(2, '.', ',');
                    }
                    else {
                        //var total_price_str = "N/A";
                        var total_price_str = "$0.00";
                    }
                    total_container.text(total_price_str);

                    totalQuantity += Number(val);

                    //if ($(this).parent().hasClass("men")) {
                    //    Builder.cartObj_1Shirt['m'][$(this).attr("name")] = val;
                    //}
                    //else if ($(this).parent().hasClass("women")) {
                    //    Builder.cartObj_1Shirt['w'][$(this).attr("name")] = val;
                    //}                 
                    if ($(this).parent().hasClass("women")) {
                        // Builder.cartObj_1Shirt['w'][$(this).attr("name")] = val;
                        Builder.cartObj_1Shirt_Women['w'][$(this).attr("name")] = val;
                    }
                }
            });


            $(".sizing-chart-kit_OPTION2_Shorts_Men input").each(function () {

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
                    // var total_price_str = "$" + total_price.formatMoney(2, '.', ',');
                    if (per_piece != 0) {
                        var total_price_str = "$" + total_price.formatMoney(2, '.', ',');
                    }
                    else {
                        //var total_price_str = "N/A";
                        var total_price_str = "$0.00";
                    }
                    total_container.text(total_price_str);

                    totalQuantity += Number(val);

                    if ($(this).parent().hasClass("men")) {
                        Builder.cartObj_1Shorts['m'][$(this).attr("name")] = val;
                    }
                    //else if ($(this).parent().hasClass("women")) {
                    //    Builder.cartObj_1Shorts['w'][$(this).attr("name")] = val;
                    //}

                    //console.log('updatePricing', Builder.cartObj);
                }
            });
            $(".sizing-chart-kit_OPTION2_Shorts_women input").each(function () {

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
                    //var total_price_str = "$" + total_price.formatMoney(2, '.', ',');
                    if (per_piece != 0) {
                        var total_price_str = "$" + total_price.formatMoney(2, '.', ',');
                    }
                    else {
                        //var total_price_str = "N/A";
                        var total_price_str = "$0.00";
                    }
                    total_container.text(total_price_str);

                    totalQuantity += Number(val);

                    //if ($(this).parent().hasClass("men")) {
                    //    Builder.cartObj_1Shorts['m'][$(this).attr("name")] = val;
                    //}
                    //else if ($(this).parent().hasClass("women")) {
                    //    Builder.cartObj_1Shorts['w'][$(this).attr("name")] = val;
                    //}
                    if ($(this).parent().hasClass("women")) {
                        Builder.cartObj_1Shorts['w'][$(this).attr("name")] = val;
                    }
                }
            });
        }
        else if (kitNo == 2 || kitNo == 4) {
            $(".sizing-chart-optionsForkit_2 input").each(function () {

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
                    // var total_price_str = "$" + total_price.formatMoney(2, '.', ',');
                    if (per_piece != 0) {
                        var total_price_str = "$" + total_price.formatMoney(2, '.', ',');
                    }
                    else {
                        //var total_price_str = "N/A";
                        var total_price_str = "$0.00";
                    }
                    total_container.text(total_price_str);

                    totalQuantity += Number(val);

                    if ($(this).parent().hasClass("men")) {
                        Builder.cartObj_2Singlet['m'][$(this).attr("name")] = val;
                    } else if ($(this).parent().hasClass("women")) {
                        Builder.cartObj_2Singlet['w'][$(this).attr("name")] = val;
                    }

                    //console.log('updatePricing', Builder.cartObj);
                }
            });
            $(".sizing-chart-optionsForkit_2-women input").each(function () {

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
                    //var total_price_str = "$" + total_price.formatMoney(2, '.', ',');
                    if (per_piece != 0) {
                        var total_price_str = "$" + total_price.formatMoney(2, '.', ',');
                    }
                    else {
                        //var total_price_str = "N/A";
                        var total_price_str = "$0.00";
                    }
                    total_container.text(total_price_str);

                    totalQuantity += Number(val);

                    if ($(this).parent().hasClass("men")) {
                        Builder.cartObj_2Singlet['m'][$(this).attr("name")] = val;
                    } else if ($(this).parent().hasClass("women")) {
                        Builder.cartObj_2Singlet['w'][$(this).attr("name")] = val;
                    }

                    //console.log('updatePricing', Builder.cartObj);
                }
            });

            $(".sizing-chart-optionsForkit_4 input").each(function () {

                $(this).removeClass("error");
                var val = $(this).val() || 0;

                if (!isInt(val) || String(val).indexOf("0") == 0 && val != "" && val != "0" && !$(this).hasClass('error')) {
                    $(this).addClass('error');
                    if (!dontValidate) CK.alert(102);
                }
                else {
                    var per_piece = Number($(this).parent().siblings('.per-piece').children("span").text());

                    var total_price = per_piece * val;
                    Builder.priceTotalforkit4 += total_price;
                    //console.log(svgText.pricing.pricingTotal)                       
                    var total_container = $(this).parent().siblings('.piece-total');
                    if (per_piece != 0) {
                        var total_price_str = "$" + total_price.formatMoney(2, '.', ',');
                    }
                    else {
                        //var total_price_str = "N/A";                         
                        var total_price_str = "$0.00";
                    }
                    total_container.text(total_price_str);

                    totalQuantity += Number(val);

                    if ($(this).parent().hasClass("men")) {
                        Builder.cartObj_2Shorts['m'][$(this).attr("name")] = val;
                    } else if ($(this).parent().hasClass("women")) {
                        Builder.cartObj_2Shorts['w'][$(this).attr("name")] = val;
                    }

                    //console.log('updatePricing', Builder.cartObj);
                }
            });
            $(".sizing-chart-optionsForkit_4-women input").each(function () {

                $(this).removeClass("error");
                var val = $(this).val() || 0;

                if (!isInt(val) || String(val).indexOf("0") == 0 && val != "" && val != "0" && !$(this).hasClass('error')) {
                    $(this).addClass('error');
                    if (!dontValidate) CK.alert(102);
                }
                else {
                    var per_piece = Number($(this).parent().siblings('.per-piece').children("span").text());
                    var total_price = per_piece * val;
                    Builder.priceTotalforkit4 += total_price;
                    //console.log(svgText.pricing.pricingTotal)
                    var total_container = $(this).parent().siblings('.piece-total');
                    if (per_piece != 0) {
                        var total_price_str = "$" + total_price.formatMoney(2, '.', ',');
                    }
                    else {
                        //var total_price_str = "N/A";
                        var total_price_str = "$0.00";
                    }
                    total_container.text(total_price_str);

                    totalQuantity += Number(val);

                    if ($(this).parent().hasClass("men")) {
                        Builder.cartObj_2Shorts['m'][$(this).attr("name")] = val;
                    } else if ($(this).parent().hasClass("women")) {
                        Builder.cartObj_2Shorts['w'][$(this).attr("name")] = val;
                    }

                    //console.log('updatePricing', Builder.cartObj);
                }
            });

        }
        else if (kitNo == 3) {
            $(".sizing-chart-optionsForkit_3 input").each(function () {
                $(this).removeClass("error");
                var val = $(this).val() || 0;

                if (!isInt(val) || String(val).indexOf("0") == 0 && val != "" && val != "0" && !$(this).hasClass('error')) {
                    $(this).addClass('error');
                    if (!dontValidate) CK.alert(102);
                }
                else {
                    var per_piece = Number($(this).parent().siblings('.per-piece').children("span").text());
                    //if (per_piece==0)
                    //{     $(this).parent().siblings('.per-piece').html("");
                    //        $(this).parent().siblings('.per-piece').html('<span>N/A</span>');
                    // }
                    var total_price = per_piece * val;
                    Builder.priceTotal += total_price;
                    //console.log(svgText.pricing.pricingTotal)
                    var total_container = $(this).parent().siblings('.piece-total');
                    //var total_price_str = "$" + total_price.formatMoney(2, '.', ',');                      
                    if (per_piece != 0) {
                        var total_price_str = "$" + total_price.formatMoney(2, '.', ',');
                    }
                    else {
                        //var total_price_str = "N/A";
                        var total_price_str = "$0.00";
                        //if(per_piece==0)
                        //{
                        //    $(this).parent().siblings('.per-piece').html("");
                        //    $(this).parent().siblings('.per-piece').html('<span>N/A</span>');
                        //}                                                       
                    }

                    total_container.text(total_price_str);

                    totalQuantity += Number(val);

                    if ($(this).parent().hasClass("men")) {
                        Builder.cartObj_3Shirt['m'][$(this).attr("name")] = val;
                    }
                }
            });
            $(".sizing-chart-optionsForkit_3-women input").each(function () {

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
                    //var total_price_str = "$" + total_price.formatMoney(2, '.', ',');                        
                    if (per_piece != 0) {
                        var total_price_str = "$" + total_price.formatMoney(2, '.', ',');
                    }
                    else {
                        //var total_price_str = "N/A";
                        var total_price_str = "$0.00";
                    }
                    total_container.text(total_price_str);

                    totalQuantity += Number(val);

                    if ($(this).parent().hasClass("women")) {
                        Builder.cartObj_3Shirt['w'][$(this).attr("name")] = val;
                    }
                }
            });

            $(".sizing-chart-kit_OPTION4_Shorts_Men input").each(function () {
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
                    //var total_price_str = "$" + total_price.formatMoney(2, '.', ',');                      
                    if (per_piece != 0) {
                        var total_price_str = "$" + total_price.formatMoney(2, '.', ',');
                    }
                    else {
                        var total_price_str = "$0.00";
                    }

                    total_container.text(total_price_str);

                    totalQuantity += Number(val);

                    if ($(this).parent().hasClass("men")) {
                        Builder.cartObj_3Shorts['m'][$(this).attr("name")] = val;
                    }
                }
            });
            $(".sizing-chart-kit_OPTION4_Shorts_women input").each(function () {

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
                    //var total_price_str = "$" + total_price.formatMoney(2, '.', ',');                        
                    if (per_piece != 0) {
                        var total_price_str = "$" + total_price.formatMoney(2, '.', ',');
                    }
                    else {
                        //var total_price_str = "N/A";
                        var total_price_str = "$0.00";
                    }
                    total_container.text(total_price_str);

                    totalQuantity += Number(val);

                    if ($(this).parent().hasClass("women")) {
                        Builder.cartObj_3Shorts['w'][$(this).attr("name")] = val;
                    }
                }
            });

        }
        //Make Printing fee '0' for all submilted products Or For CKWRAP it will be '0'..
        var S_Product = Product.sku;
        var FirstChar = S_Product.charAt(0); // alerts 'S'
        if (Product.sku == "CKWRAP" || FirstChar == "S") {
            //if (Product.sku == "CKWRAP" ) {
            Builder.priceForArt = 0;
        }
        else {
            Builder.priceForArt = totalQuantity * parseFloat(svgText.pricing.pricingTotal);
        }
        //End 
        Builder.priceTotal += Builder.priceForArt;
        //Builder.priceTotal = Builder.priceTotal.toFixed(2).toLocaleString();
        $('.preview .details .price span').text(Builder.priceTotal);
        //SetUpFee For CE58 and CF5
        var setUpFee = 0;
        if (Builder.IssetUpfee == true) {
            setUpFee = 0;
            $(".option-set.review .setup-fee span").text('$' + setUpFee);
        }
        else {
            setUpFee = $(".option-set.review .setup-fee span").text().replace("$", "");
            //Add Setup Fee add
            //2/5/2019
            setUpFee = 70;
        }
        var parsedsetUpFee = 0;
        parsedsetUpFee = parseFloat(setUpFee);
        if (isNaN(parsedsetUpFee)) {
            parsedsetUpFee = 0;
        }
        var parsedpriceTotal = 0;
        parsedpriceTotal = parseFloat(Builder.priceTotal);
        if (isNaN(parsedpriceTotal)) {
            parsedpriceTotal = 0;
        }
        var parsedpriceForArt = 0;
        parsedpriceForArt = parseFloat(Builder.priceForArt);
        if (isNaN(parsedpriceForArt)) {
            parsedpriceForArt = 0;
        }
        //old 
        // var newtot = parseFloat(Builder.priceTotal + parsedsetUpFee);
        //2/5/2019
        //Add Setup Fee add
        var newtot = parseFloat(Builder.priceTotal + parsedsetUpFee);
        if (isNaN(newtot)) {
            newtot = 0;
        }
        $('#price_total span').text('$' + newtot);

        //Logic for total in option 3 without setup fee..
        var priceforoption3 = parseFloat(Builder.priceTotal);
        if (isNaN(priceforoption3)) {
            priceforoption3 = 0;
        }
        $(".option_3_review #price_total span").text('$' + priceforoption3);
        //End
        if (Builder.priceTotalforkit4 > 0) {
            var newtotForOption2 = parseFloat(Builder.priceTotalforkit4 + parsedsetUpFee);
            if (isNaN(newtotForOption2)) {
                newtotForOption2 = 0;
            }
            $('#price_total_For_Kit4 span').text('$' + newtotForOption2);
        }
        else {
            $('#price_total_For_Kit4 span').text('$' + 0);
        }

        //var tot = parsedpriceTotal + parsedsetUpFee;
        //$('#price_total span').text('$' + tot);
        Builder.hasChanged();
        Builder.KitcompileReview(kitNo);
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
        //Check Country name
        if (Product.sku === "SW74U43J" || Product.sku === "S74UW43J") {
            if (Builder.viewsLoaded === Builder.viewsToLoad) {
                var textCount = $('#text_palette_Back').children('.text_layer').length;
                if (textCount === 0) {
                    $('#CountryName').text("COUNTRY");
                }
                else {
                    var Location = $('#text_palette_Back .palette_active .mask-panel').find(':selected').text();
                    var Mask = svgText.layerObjects["_Back"][0].mask;
                    if (Location === "Country" || Mask ==="XYZ") {
                            $('#CountryName').text("");
                        }
                        else {
                            $('#CountryName').text("COUNTRY");
                        }
                }
            }
        }
        //26/2/2019
        //Important--Remove "SAVE TO MY LOCKER", "SAVE AND SHARE" ,"NEXT AND PREV" in view-only mode for single product or singlete
        //Start
        IsViewOnly = $("body").hasClass("view-only");
        if (IsViewOnly) {
            //Important--Remove "Next and Prev" button In Case Of View Mode
            $('.prev-next-wrapper').hide();
            //Important--Remove "SAVE TO MY LOCKER" button In Case Of View Mode
            $('.save').hide();
            //Important--Remove "SAVE AND SHARE" button In Case Of View Mode
            $('.btn.save-share').hide();
            //Important--Remove "ICON SHARE" Like FACEBOOK,TWITTER,AND EMAIL button In Case Of View Mode
            $('.share').hide();
            //Important--Remove Two Line (-- ---) In Case Of View Mode
            $('.save-next-wrapper').hide();
            // Reomve Login Button Form Bottom Place
            $('#HideItFormViewOnlyMode').hide();
        }

        console.log('compileReview');
        //fabric
        var container = $(".option-set.review .design");
        $(".category span", container).text(Product.category);
        $(".sku span", container).text(Product.sku);
        $(".fabric span", container).text(Cust.fabric);

        //10-9-2019
        //Start
        //Important--Displaying Printing Type in Review Order section or Send to delaer Link also

        var Printing = Cust.PrintingTypeValue;
        if (Printing) {
            if (Printing.length > 1) {
                Printing = Printing.toString();
            }
            if (Printing.length === 0) {
                //Important-Display html label control where display !==none
                var VisibleHtmlElementText = [];
                $.each($("#print_type>label"), function () {
                    if ($(this).css("display") !== "none") {
                        VisibleHtmlElementText.push($(this).text());
                    }
                });
                Printing = VisibleHtmlElementText[0];
            }

            //Important- this is working for like product WJ200,WJSL in case of checkboxList
            //Start
            //FilterPrintingTypes = [];
            //FilterProductTypes = [];
            //if (Product.DifferentProductType !== undefined) {
            //    var ProductType = Product.DifferentProductType;
            //    var SplitProductType = ProductType.split("_");
            //    ArraySingle = [];
            //    ArrayDouble = [];
            //    if (Printing.indexOf(",") > -1) {
            //        //Important-Get all checked printing or non printing types
            //        var SplitPrintType = Printing.split(",");
            //    }
            //    else {
            //        var checkType = jQuery.type(Printing);
            //        if (checkType === "string") {
            //            ArrayDouble.push(Printing);
            //            Printing = ArrayDouble;
            //        }
            //        ArraySingle.push(Printing);
            //        SplitPrintType = ArraySingle;
            //        var IsSingleCheckBoxChecked = true;
            //    }
            //    //Important-get all checked non printing type or product type
            //    for (var j = 0; j < SplitProductType.length; j++) {
            //        for (var i = 0; i < SplitPrintType.length; i++) {
            //            if (IsSingleCheckBoxChecked) {
            //                for (var p = i; p < SplitProductType.length; p++) {
            //                    if (SplitProductType[p] === SplitPrintType[j][0]) {
            //                        FilterProductTypes.push(SplitProductType[p]);
            //                        IsSingleCheckBoxChecked = false;
            //                    }
            //                    var count = p + 1;
            //                    var maxIndexCount = SplitProductType.length;
            //                    if (maxIndexCount === count && IsSingleCheckBoxChecked) {
            //                        IsSingleCheckBoxChecked = false;
            //                    }
            //                }
            //            }
            //            else {
            //                if (SplitProductType[i] === SplitPrintType[j]) {
            //                    FilterProductTypes.push(SplitProductType[i]);
            //                }
            //            }
            //        }
            //    }
            //    if (SplitPrintType.length === 1) {
            //        IsSingleCheckBoxChecked = true;
            //    }
            //    //Important-get all checked printing type 
            //    for (i = 0; i < SplitProductType.length; i++) {
            //        for (j = 0; j < SplitPrintType.length; j++) {
            //            if (IsSingleCheckBoxChecked) {
            //                if (SplitProductType[i] === SplitPrintType[j][0]) {
            //                    var index = SplitPrintType.indexOf(SplitPrintType[j]);
            //                    if (index > -1) {
            //                        SplitPrintType.splice(index, 1);
            //                        IsSingleCheckBoxChecked = false;
            //                    }
            //                }
            //            }
            //            else {
            //                if (SplitProductType[i] === SplitPrintType[j]) {
            //                    index = SplitPrintType.indexOf(SplitPrintType[j]);
            //                    if (index > -1) {
            //                        SplitPrintType.splice(index, 1);
            //                    }
            //                }
            //            }
            //        }
            //    }
            //    $(".Product_type").css("display", "flex");
            //    FilterPrintingTypes.push(SplitPrintType);
            //    console.log(FilterPrintingTypes);
            //    console.log(FilterProductTypes);
            //    Printing = FilterPrintingTypes;

            //    if (FilterPrintingTypes[0].length === 0) {
            //        FilterPrintingTypes[0] = "Null";
            //    }
            //    if (FilterProductTypes.length === 0) {
            //        FilterProductTypes[0] = "Null";
            //    }
            //    $(".Product_type span", container).text(FilterProductTypes);
            //}
            //End

            //Important- this is working for like product WJ200,WJSL in case of radioButtonList
            //Start
            FilterPrintingTypes = [];
            FilterProductTypes = [];
            if (Product.DifferentProductType !== undefined) {
                var ProductType = Product.DifferentProductType;
                var SplitProductType = ProductType.split("_");

                if (Printing.indexOf(",") > -1) {
                    //Important-Get all checked printing or non printing types
                    var SplitPrintType = Printing.split(",");
                }
                //Important-get all checked non printing type or product type
                for (var j = 0; j < SplitProductType.length; j++) {
                    for (var i = 0; i < SplitPrintType.length; i++) {
                        if (SplitProductType[j] === SplitPrintType[i]) {
                            FilterProductTypes.push(SplitProductType[j]);
                        }
                    }
                }
                //Important-get all checked printing type 
                for (i = 0; i < SplitProductType.length; i++) {
                    for (j = 0; j < SplitPrintType.length; j++) {
                        if (SplitProductType[i] === SplitPrintType[j]) {
                            index = SplitPrintType.indexOf(SplitPrintType[j]);
                            if (index > -1) {
                                SplitPrintType.splice(index, 1);
                            }
                        }
                    }
                }
                $(".Product_type").css("display", "flex");
                FilterPrintingTypes.push(SplitPrintType);
                console.log(FilterPrintingTypes);
                console.log(FilterProductTypes);
                Printing = FilterPrintingTypes;
                $(".Product_type span", container).text(FilterProductTypes);
            }
            //End



            //Important- Display Printing Type in "Review Order" for singlet current in Html It is hide by css for singlate
            $(".print_type span", container).text(Printing);
            $(".CustInfoViewOnlySendToDealerLink span", container).text(Printing);
        }
        //End

        //20-9-2019
        //Start
        //Important--Displaying Printing Type in Review Order section or Send to delaer Link also

        //var StatusFirst = $('#print_typeBasedOnColor input').hasClass('chkBasedOnColorFirst');
        //var StatusSecond = $('#print_typeBasedOnColor input').hasClass('chkBasedOnColorSecond');
        //if (StatusFirst) {         
        //    var PrintingFirst = Cust.PrintingTypeValueBasedOnColorFirst;
        //    if (PrintingFirst) {
        //        if (PrintingFirst.length > 1) {
        //            PrintingFirst = PrintingFirst.toString();
        //        }
        //        // Important- Display Printing Type in "Review Order" for singlet current in Html It is hide by css for singlate
        //        $(".print_typeBasedOnColor span", container).text(PrintingFirst);
        //        // $(".CustInfoViewOnlySendToDealerLinkFirst span", container).text(PrintingFirst);
        //        $(".CustInfoViewOnlySendToDealerLink span", container).text(PrintingFirst);
        //    }
        //}
        //if (StatusSecond) {          
        //    var PrintingSecond = Cust.PrintingTypeValueBasedOnColorSecond;
        //    if (PrintingSecond) {
        //        if (PrintingSecond.length > 1) {
        //            PrintingSecond = PrintingSecond.toString();
        //        }
        //        //Important- Display Printing Type in "Review Order" for singlet current in Html It is hide by css for singlate
        //        $(".print_typeBasedOnColor span", container).text(PrintingSecond);
        //        //$(".CustInfoViewOnlySendToDealerLinkSecond span", container).text(PrintingSecond);
        //        $(".CustInfoViewOnlySendToDealerLink span", container).text(PrintingSecond);
        //    }
        //}
        //End

        if (Cust.fabric < 0) $(".fabric", container).hide();
        //color
        $(".single .option-set.review .colors ul").empty();
        if (Product.hasOwnProperty('skipColor') == true) {

            var html = "<li><strong>" + 'Color Options' + "</strong>: <span>" + 'N/A' + "</span></li>";
            $(".single .option-set.review .colors ul").append(html);
        }
        else {
            $(".single .option-set.color .group").each(function () {
                var zone = $(this).children("strong").text();
                var color = $("li.active", $(this)).attr("title");

                var html = "<li><strong>" + zone + "</strong>: <span>" + color + "</span></li>";
                $(".single .option-set.review .colors ul").append(html);
            })
        }
        //patterns
        $(".single .option-set.patterns > ul li").each(function () {
            if ($(this).hasClass("active")) {
                var pattern = $("div", $(this)).text();
                var html = "<li><strong>Pattern</strong>: <span>" + pattern + "</span></li>";
                $(".single .pattern-colors .group").each(function () {
                    var zone = $(this).children("strong").text();
                    var color = $("li.active", $(this)).attr("title");

                    html += "<li><strong>" + zone + "</strong>: <span>" + color + "</span></li>";
                });
                $(".single .option-set.review .colors ul").append(html);
            }
        });

        //art        
        $(".option-set.review .lettering ul").empty();
        $("#text_palette .palette_view:not(:empty)").each(function () {

            var html = "";
            var id = $(this).attr("id");
            var id_ar = id.split("_");
            var side = id_ar[id_ar.length - 1];
            var TextObj = svgText.layerObjects["_" + side];
            console.log(TextObj);
            html += "<li><strong>View</strong>: <span>" + side + "</span></li>";
            var objCount = 0;
            $(">div", $(this)).each(function () {
                var type = $(this).children(".text").text();
                var content = $(this).children(".text").children("strong").text();
                if (type != undefined) {
                    var Text_Font = "";
                    var Text_Shape = "";
                    switch (TextObj[objCount].fontfamily) {
                        case "aachen":
                            Text_Font = "Aachen";
                            break;
                        case "americana_bt":
                            Text_Font = "Americana BT";
                            break;
                        case "athletic":
                            Text_Font = "ATHLETIC";
                            break;
                        case "yearbook_cg_solidregular":
                            Text_Font = "CG Yearbook";
                            break;
                        case "copperplate_gothic":
                            Text_Font = "Copperplate Gothic";
                            break;
                        case "eight_track":
                            Text_Font = "Eight Track";
                            break;
                        case "eurostilebold":
                            Text_Font = "Eurostile";
                            break;
                        case "freshmannormal":
                            Text_Font = "Freshman Normal";
                            break;
                        case "geo_slab":
                            Text_Font = "Geo Slab";
                            break;
                        case "impact":
                            Text_Font = "Impact";
                            break;
                        case "hobo_bt":
                            Text_Font = "Hobo BT";
                            break;
                        case "old_english":
                            Text_Font = "Old English";
                            break;
                        case "reservoirgrunge":
                            Text_Font = "Reservoir Grunge";
                            break;
                        case "square_slabserif":
                            Text_Font = "Square Slabserif";
                            break;
                        case "steelwolf":
                            Text_Font = "Steelwolf";
                            break;
                        case "superstar_m54":
                            Text_Font = "Superstar M54";
                            break;
                        case "times_new_roman":
                            Text_Font = "Times New Roman";
                    }
                    switch (TextObj[objCount].layout) {
                        case "straight":
                            Text_Shape = "STRAIGHT";
                            break;
                        case "staggered":
                            Text_Shape = "STAGGERED";
                            break;
                        case "bowtie":
                            Text_Shape = "BOWTIE";
                            break;
                        case "pennant":
                            Text_Shape = "PENNANT";
                            break;
                        case "vertical":
                            Text_Shape = "VERTICAL";
                            break;
                        case "bookends":
                            Text_Shape = "BOOK ENDS";
                            break;
                        case "stdarc":
                            Text_Shape = "STD. ARC";
                            break;
                        case "revarc":
                            Text_Shape = "REV. ARC";
                            break;
                        case "verticalarch":
                            Text_Shape = "VERTICAL ARCH";
                            break;
                        case "bridge":
                            Text_Shape = "BRIDGE";
                            break;
                        case "diagonal":
                            Text_Shape = "DIAGONAL";
                            break;
                        case "demotest":
                            Text_Shape = "CHEVRON";
                    }
                    if (TextObj[objCount].type == "textLayer" || TextObj[objCount].type == "canvaslayer") {
                        html += "<br/><li>&nbsp;&nbsp;&nbsp;&nbsp;<strong style=width:auto;>Text : </strong>" + TextObj[objCount].text + "</li>";
                        html += "<li class=reviewColorList>&nbsp;&nbsp;&nbsp;&nbsp;<strong style=width:auto;>Text Color : </strong>" + GetColorName(TextObj[objCount].fillcolor) + "<span class=displayReviewColor style=background-color:" + TextObj[objCount].fillcolor + ";width: 25px;height: 15px;border: 1px solid #ccc;margin: 0 3px 3px 0;></span></li>";
                        html += "<li class=reviewColorList>&nbsp;&nbsp;&nbsp;&nbsp;<strong style=width:auto;>Outline Color : </strong>" + GetColorName(TextObj[objCount].strokecolor) + "<span class=displayReviewColor style=background-color:" + TextObj[objCount].strokecolor + ";width: 25px;height: 15px;border: 1px solid #ccc;margin: 0 3px 3px 0;></span></li>";
                        html += "<br/><li>&nbsp;&nbsp;&nbsp;&nbsp;<strong style=width:auto;>Font : </strong>" + Text_Font + "</li>";
                        html += "<li>&nbsp;&nbsp;&nbsp;&nbsp;<strong style=width:auto;>Shapes : </strong>" + Text_Shape + "</li></br>";
                    }
                    else {
                        if (TextObj[objCount].type == "logoLayer") {
                            html += "<br/><li class=reviewColorList>&nbsp;&nbsp;&nbsp;&nbsp;<strong style=width:auto;>Logo : </strong>" + TextObj[objCount].logo_id + "</span></li>";
                            if (TextObj[objCount].area1code != null && TextObj[objCount].area2code == null) {
                                html += "<li class=reviewColorList>&nbsp;&nbsp;&nbsp;&nbsp;<strong style=width:auto;>Color Code 1 : </strong>" + GetColorName(TextObj[objCount].area1color) + "<span class=displayReviewColor style=background-color:" + TextObj[objCount].area1color + ";width: 25px;height: 15px;border: 1px solid #ccc;margin: 0 3px 3px 0;></span></li>";
                            }
                            if (TextObj[objCount].area2code != null && TextObj[objCount].area3code == null) {
                                html += "<li class=reviewColorList>&nbsp;&nbsp;&nbsp;&nbsp;<strong style=width:auto;>Color Code 1 : </strong>" + GetColorName(TextObj[objCount].area1color) + "<span class=displayReviewColor style=background-color:" + TextObj[objCount].area1color + ";width: 25px;height: 15px;border: 1px solid #ccc;margin: 0 3px 3px 0;></span></li>";
                                html += "<li class=reviewColorList>&nbsp;&nbsp;&nbsp;&nbsp;<strong style=width:auto;>Color Code 2 : </strong>" + GetColorName(TextObj[objCount].area2color) + "<span class=displayReviewColor style=background-color:" + TextObj[objCount].area2color + ";width: 25px;height: 15px;border: 1px solid #ccc;margin: 0 3px 3px 0;></span></li>";
                            }
                            if (TextObj[objCount].area3code != null) {
                                html += "<li class=reviewColorList>&nbsp;&nbsp;&nbsp;&nbsp;<strong style=width:auto;>Color Code 1 : </strong>" + GetColorName(TextObj[objCount].area1color) + "<span class=displayReviewColor style=background-color:" + TextObj[objCount].area1color + ";width: 25px;height: 15px;border: 1px solid #ccc;margin: 0 3px 3px 0;></span></li>";
                                html += "<li class=reviewColorList>&nbsp;&nbsp;&nbsp;&nbsp;<strong style=width:auto;>Color Code 2 : </strong>" + GetColorName(TextObj[objCount].area2color) + "<span class=displayReviewColor style=background-color:" + TextObj[objCount].area2color + ";width: 25px;height: 15px;border: 1px solid #ccc;margin: 0 3px 3px 0;></span></li>";
                                html += "<li class=reviewColorList>&nbsp;&nbsp;&nbsp;&nbsp;<strong style=width:auto;>Color Code 3 : </strong>" + GetColorName(TextObj[objCount].area3color) + "<span class=displayReviewColor style=background-color:" + TextObj[objCount].area3color + ";width: 25px;height: 15px;border: 1px solid #ccc;margin: 0 3px 3px 0;></span></li>";
                            }
                        }
                    }
                }
                objCount++;
            });

            $(".option-set.review .lettering ul").append(html);
        });
        if (Cust.hasOwnProperty('printingOption')) {
            if (Cust.printingOption != null) {
                var type = Cust.printingOption;
                $("li.print_type span").text(type.replace(/_/g, ' ')).parent().show();

            }
        }
        if ($(".option-set.review .lettering ul").children().length < 1) {
            var html = "";
            html += "<li><strong>None</strong></li>";
            $(".option-set.review .lettering ul").append(html);
        }
        var html = "";
        html += "<li class='PrintingFee'><strong>Printing Fee</strong>: <span>$" + Builder.priceForArt.toFixed(2).toLocaleString() + "</span></li>";
        $(".option-set.review .lettering ul").append(html);

        //sizing
        $(".option-set.review .quantity .table").empty();
        var total_quant = 0;
        var total_price = 0;
        if (Product.wSku != null) {
            var html = '<div class="row">';
            html += "<h2>Men's Sizing</h2>";
            html += '</div>';
            $(".option-set.review .quantity .table").append(html);
            $(".sizing-chart-options > .row").each(function () {
                var size = $(this).children('.col').eq(0).children("strong").text();
                var quant = $('input', $(this)).val();
                total_quant += Number(quant);
                if (quant != 0) {
                    var price_per = $('.per-piece', $(this)).children('span').text();
                    var total = $('.piece-total', $(this)).text();
                    var html = '<div class="row">';
                    html += '<span>' + size.toUpperCase() + '</span>';
                    html += '<span>' + quant + '</span>';
                    html += '<span>$' + price_per + '</span>';
                    html += '<span>' + total + '</span>';
                    html += '</div>';
                }
                if (total != "" && total != null) {
                    Builder.total_price_new = total.replace("$", '');
                    Builder.totalPriceToShow += Number(Builder.total_price_new);
                }
                $(".option-set.review .quantity .table").append(html);
            });

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
                if (quant != 0) {
                    var price_per = $('.per-piece', $(this)).children('span').text();
                    var total = $('.piece-total', $(this)).text();
                    var html = '<div class="row">';
                    html += '<span>' + size.toUpperCase() + '</span>';
                    html += '<span>' + quant + '</span>';
                    html += '<span>$' + price_per + '</span>';
                    html += '<span>' + total + '</span>';
                    html += '</div>';
                }
                if (total != "" && total != null) {
                    Builder.total_price_new = total.replace("$", '');
                    Builder.totalPriceToShow += Number(Builder.total_price_new);
                }
                $(".option-set.review .quantity .table").append(html);
            });
        }
        else {
            $(".sizing-chart-options > .row").each(function () {
                var size = $(this).children('.col').eq(0).children("strong").text();
                var quant = $('input', $(this)).val();
                total_quant += Number(quant);
                if (quant != 0) {
                    var price_per = $('.per-piece', $(this)).children('span').text();
                    var total = $('.piece-total', $(this)).text();

                    var html = '<div class="row">';
                    html += '<span>' + size.toUpperCase() + '</span>';
                    html += '<span>' + quant + '</span>';
                    html += '<span>$' + price_per + '</span>';
                    html += '<span>' + total + '</span>';
                    html += '</div>';
                }
                if (total != "" && total != null) {
                    Builder.total_price_new = total.replace("$", '');
                    Builder.totalPriceToShow += Number(Builder.total_price_new);
                }
                $(".option-set.review .quantity .table").append(html);
            });
        }
        $(".option-set.review .total-quantity").children('span').text(total_quant);

        $(".preview-nav.single a").each(function () {  //I Got idea to resolve the View issue
            if (!$(this).hasClass("hide")) {

                $(".single .canvas-wrapper[data-view=" + $(this).data('view') + "]").addClass("review-active");
                // $(".single .canvas-wrapper")  //Get 4 values                           
            }
        });
    },
    KitcompileReview: function (kitNo) {
        console.log('Kit compileReview');
        //26/2/2019
        //Important--Remove "SAVE TO MY LOCKER", "SAVE AND SHARE" ,"NEXT AND PREV" in view-only mode for single product or singlete
        //Start
        IsViewOnly = $("body").hasClass("view-only");
        if (IsViewOnly) {
            //Important--Remove "Next and Prev" button In Case Of View Mode
            $('.prev-next-wrapper').hide();
            //Important--Remove "SAVE TO MY LOCKER" button In Case Of View Mode
            $('.save').hide();
            //Important--Remove "SAVE AND SHARE" button In Case Of View Mode
            $('.btn.save-share').hide();
            //Important--Remove "ICON SHARE" Like FACEBOOK,TWITTER,AND EMAIL button In Case Of View Mode
            $('.share').hide();
            //Important--Remove Two Line (-- ---) In Case Of View Mode
            $('.save-next-wrapper').hide();
            // Reomve Login Button Form Bottom Place
            $('#HideItFormViewOnlyMode').hide();
        }
        //fabric
        var container = $(".kits.kit_" + kitNo + " .option-set.review .design");
        $(".category span", container).text(ProductKit['kit_' + kitNo].category);
        $(".sku span", container).text(ProductKit['kit_' + kitNo].sku);
        $(".fabric span", container).text(Cust.fabric);
        if (CustKit['kit_' + kitNo].fabric < 0) $(".fabric", container).hide();


        //DESIGN
        //11/8/2019
        //Important--Append printing type value in "Review Order" section under "DESIGN" section
        //Start
        var kit_No = $('.kit span.active').attr('data-count');
        var VisibleHtmlElementText = [];
        $.each($("#print_type_" + kit_No + ">label"), function () {
            if (kit_No === "2") {
                if ($(this).css("display") !== "none") {

                    // For kit no 2
                    VisibleHtmlElementText.push($(this).text());
                    $(".print_type span", ".kits.kit_" + kit_No + ">.option-set.review .design").text(VisibleHtmlElementText[0]);

                    //for Kit no 4
                    var VisibleHtmlElementTextFor_Kit_4 = [];
                    $.each($("#print_type_4>label"), function () {
                        if ($(this).css("display") !== "none") {
                            VisibleHtmlElementTextFor_Kit_4.push($(this).text());
                            $(".print_type span", ".kits.kit_4>.option-set.review .design").text(VisibleHtmlElementTextFor_Kit_4[0]);
                        }
                    });
                }
            }
            else {
                if ($(this).css("display") !== "none") {
                    VisibleHtmlElementText.push($(this).text());
                    $(".print_type span", ".kits.kit_" + kit_No + ">.option-set.review .design").text(VisibleHtmlElementText[0]);
                }
            }
        });
        //End


        //color
        $(".kits.kit_" + kitNo + " .option-set.review .colors ul").empty();
        $(".kits.kit_" + kitNo + " .option-set.color .group").each(function () {
            var zone = $(this).children("strong").text();
            var color = $("li.active", $(this)).attr("title");
            //alert(".kits.kit_" + kitNo + '-' + color);
            if (color == 'undefined') {
                color = 'No Color';
            }
            var html = "<li><strong>" + zone + "</strong>: <span>" + color + "</span></li>";
            $(".kits.kit_" + kitNo + " .option-set.review .colors ul").append(html);
        });

        //patterns
        $(".kits.kit_" + kitNo + " .option-set.patterns > ul li").each(function () {
            if ($(this).hasClass("active")) {
                var pattern = $("div", $(this)).text();
                var html = "<li><strong>Pattern</strong>: <span>" + pattern + "</span></li>";
                $(".pattern-colors .group").each(function () {
                    var zone = $(this).children("strong").text();
                    var color = $("li.active", $(this)).attr("title");
                    html += "<li><strong>" + zone + "</strong>: <span>" + color + "</span></li>";
                });
                $(".kits.kit_" + kitNo + " .option-set.review .colors ul").append(html);
            }
        });

        //art
        $(".kits.kit_" + kitNo + " .option-set.review .lettering ul").empty();
        $("#text_palette_" + kitNo + " .palette_view:not(:empty)").each(function () {
            var html = "";
            var id = $(this).attr("id");
            var id_ar = id.split("_");
            var side = id_ar[id_ar.length - 2];
            var TextObj = svgText.layerKitObjects["_" + side + "_" + kitNo];
            console.log(TextObj)
            html += "<li><strong>View</strong>: <span>" + side + "</span></li>";
            var objCount = 0;
            $(">div", $(this)).each(function () {
                var type = $(this).children(".text").text();
                var content = $(this).children(".text").children("strong").text();
                if (type != undefined) {
                    //Important--30/7/2019 
                    if (TextObj[objCount] != undefined) {
                        var Text_Font = "";
                        var Text_Shape = "";
                        switch (TextObj[objCount].fontfamily) {
                            case "aachen":
                                Text_Font = "Aachen";
                                break;
                            case "americana_bt":
                                Text_Font = "Americana BT";
                                break;
                            case "athletic":
                                Text_Font = "ATHLETIC";
                                break;
                            case "yearbook_cg_solidregular":
                                Text_Font = "CG Yearbook";
                                break;
                            case "copperplate_gothic":
                                Text_Font = "Copperplate Gothic";
                                break;
                            case "eight_track":
                                Text_Font = "Eight Track";
                                break;
                            case "eurostilebold":
                                Text_Font = "Eurostile";
                                break;
                            case "freshmannormal":
                                Text_Font = "Freshman Normal";
                                break;
                            case "geo_slab":
                                Text_Font = "Geo Slab";
                                break;
                            case "impact":
                                Text_Font = "Impact";
                                break;
                            case "hobo_bt":
                                Text_Font = "Hobo BT";
                                break;
                            case "old_english":
                                Text_Font = "Old English";
                                break;
                            case "reservoirgrunge":
                                Text_Font = "Reservoir Grunge";
                                break;
                            case "square_slabserif":
                                Text_Font = "Square Slabserif";
                                break;
                            case "steelwolf":
                                Text_Font = "Steelwolf";
                                break;
                            case "superstar_m54":
                                Text_Font = "Superstar M54";
                                break;
                            case "times_new_roman":
                                Text_Font = "Times New Roman";
                        }
                        switch (TextObj[objCount].layout) {
                            case "straight":
                                Text_Shape = "STRAIGHT";
                                break;
                            case "staggered":
                                Text_Shape = "STAGGERED";
                                break;
                            case "bowtie":
                                Text_Shape = "BOWTIE";
                                break;
                            case "pennant":
                                Text_Shape = "PENNANT";
                                break;
                            case "vertical":
                                Text_Shape = "VERTICAL";
                                break;
                            case "bookends":
                                Text_Shape = "BOOK ENDS";
                                break;
                            case "stdarc":
                                Text_Shape = "STD. ARC";
                                break;
                            case "revarc":
                                Text_Shape = "REV. ARC";
                                break;
                            case "verticalarch":
                                Text_Shape = "VERTICAL ARCH";
                                break;
                            case "bridge":
                                Text_Shape = "BRIDGE";
                                break;
                            case "diagonal":
                                Text_Shape = "DIAGONAL";
                                break;
                            case "demotest":
                                Text_Shape = "CHEVRON";
                        }
                        if (TextObj[objCount].type == "textLayer" || TextObj[objCount].type == "canvaslayer") {
                            html += "<br/><li>&nbsp;&nbsp;&nbsp;&nbsp;<strong style=width:auto;>Text : </strong>" + TextObj[objCount].text + "</li>";
                            html += "<li class=reviewColorList>&nbsp;&nbsp;&nbsp;&nbsp;<strong style=width:auto;>Text Color : </strong>" + GetColorName(TextObj[objCount].fillcolor) + "<span class=displayReviewColor style=background-color:" + TextObj[objCount].fillcolor + ";width: 25px;height: 15px;border: 1px solid #ccc;margin: 0 3px 3px 0;></span></li>";
                            html += "<li class=reviewColorList>&nbsp;&nbsp;&nbsp;&nbsp;<strong style=width:auto;>Outline Color : </strong>" + GetColorName(TextObj[objCount].strokecolor) + "<span class=displayReviewColor style=background-color:" + TextObj[objCount].strokecolor + ";width: 25px;height: 15px;border: 1px solid #ccc;margin: 0 3px 3px 0;></span></li>";
                            html += "<br/><li>&nbsp;&nbsp;&nbsp;&nbsp;<strong style=width:auto;>Font : </strong>" + Text_Font + "</li>";
                            html += "<li>&nbsp;&nbsp;&nbsp;&nbsp;<strong style=width:auto;>Shapes : </strong>" + Text_Shape + "</li></br>";
                        }
                        else {
                            if (TextObj[objCount].type == "logoLayer") {
                                html += "<br/><li class=reviewColorList>&nbsp;&nbsp;&nbsp;&nbsp;<strong style=width:auto;>Logo : </strong>" + TextObj[objCount].logo_id + "</span></li>";
                                if (TextObj[objCount].area1code != null && TextObj[objCount].area2code == null) {
                                    html += "<li class=reviewColorList>&nbsp;&nbsp;&nbsp;&nbsp;<strong style=width:auto;>Color Code 1 : </strong>" + GetColorName(TextObj[objCount].area1color) + "<span class=displayReviewColor style=background-color:" + TextObj[objCount].area1color + ";width: 25px;height: 15px;border: 1px solid #ccc;margin: 0 3px 3px 0;></span></li>";
                                }
                                if (TextObj[objCount].area2code != null && TextObj[objCount].area3code == null) {
                                    html += "<li class=reviewColorList>&nbsp;&nbsp;&nbsp;&nbsp;<strong style=width:auto;>Color Code 1 : </strong>" + GetColorName(TextObj[objCount].area1color) + "<span class=displayReviewColor style=background-color:" + TextObj[objCount].area1color + ";width: 25px;height: 15px;border: 1px solid #ccc;margin: 0 3px 3px 0;></span></li>";
                                    html += "<li class=reviewColorList>&nbsp;&nbsp;&nbsp;&nbsp;<strong style=width:auto;>Color Code 2 : </strong>" + GetColorName(TextObj[objCount].area2color) + "<span class=displayReviewColor style=background-color:" + TextObj[objCount].area2color + ";width: 25px;height: 15px;border: 1px solid #ccc;margin: 0 3px 3px 0;></span></li>";
                                }
                                if (TextObj[objCount].area3code != null) {
                                    html += "<li class=reviewColorList>&nbsp;&nbsp;&nbsp;&nbsp;<strong style=width:auto;>Color Code 1 : </strong>" + GetColorName(TextObj[objCount].area1color) + "<span class=displayReviewColor style=background-color:" + TextObj[objCount].area1color + ";width: 25px;height: 15px;border: 1px solid #ccc;margin: 0 3px 3px 0;></span></li>";
                                    html += "<li class=reviewColorList>&nbsp;&nbsp;&nbsp;&nbsp;<strong style=width:auto;>Color Code 2 : </strong>" + GetColorName(TextObj[objCount].area2color) + "<span class=displayReviewColor style=background-color:" + TextObj[objCount].area2color + ";width: 25px;height: 15px;border: 1px solid #ccc;margin: 0 3px 3px 0;></span></li>";
                                    html += "<li class=reviewColorList>&nbsp;&nbsp;&nbsp;&nbsp;<strong style=width:auto;>Color Code 3 : </strong>" + GetColorName(TextObj[objCount].area3color) + "<span class=displayReviewColor style=background-color:" + TextObj[objCount].area3color + ";width: 25px;height: 15px;border: 1px solid #ccc;margin: 0 3px 3px 0;></span></li>";
                                }
                            }
                        }
                    }

                }
                objCount++;
            })

            $(".kits.kit_" + kitNo + " .option-set.review .lettering ul").append(html);
        });
        if (CustKit['kit_' + kitNo].hasOwnProperty('printingOption')) {
            if (CustKit['kit_' + kitNo].printingOption != null) {
                var type = CustKit['kit_' + kitNo].printingOption;
                $(".kits.kit_" + kitNo + " li.print_type span").text(type.replace(/_/g, ' ')).parent().show();

            }
        }
        if ($(".kits.kit_" + kitNo + " .option-set.review .lettering ul").children().length < 1) {
            var html = "";
            html += "<li><strong>None</strong></li>";
            $(".kits.kit_" + kitNo + " .option-set.review .lettering ul").append(html);
        }
        var html = "";

        //  html += "<li><strong>Printing Fee</strong>: <span>$" + Builder.priceForArt.toFixed(2).toLocaleString() + "</span></li>";
        $(".kits.kit_" + kitNo + " .option-set.review .lettering ul").append(html);

        //Printing fee for kit
        //$(".kits.kit_" + kitNo + " .option-set.review .setup-fee ul li.tot_print_fee span").empty();
        //console.log('Builder.priceForArt ' + kitNo,$(".kits.kit_" + kitNo + " .option-set.review .setup-fee ul li.tot_print_fee span").html());        
        //$(".kits.kit_" + kitNo + " .option-set.review .setup-fee ul li.tot_print_fee span").html(Builder.priceForArt.toFixed(2).toLocaleString());


        $(".kits .option-set.review .setup-fee ul li.tot_print_fee span").empty();
        $(".kits .option-set.review .setup-fee ul li.tot_print_fee span").html(Builder.priceForArt.toFixed(2).toLocaleString());


        //sizing
        $(".kits.kit_" + kitNo + " .option-set.review .quantity .table").empty();
        var total_quant = 0;
        var total_price = 0;
        Builder.totalPriceToShow = 0;
        Builder.totalPriceToShowForKit_4 = 0;
        var html = '<div class="row">';
        html += "<h2>Men's Sizing</h2>";
        html += '</div>';




        //Important--this section is render in kit section Under "Review Order" of "Quantity" portion for men
        if (kitNo == 0) {
            $(".sizing-chart-optionsForkit_0 > .row").each(function () {

                var size = $(this).children('.col').eq(0).children("strong").text();
                var quant = $('input', $(this)).val();
                total_quant += Number(quant);
                if (quant != 0) {
                    var price_per = $('.per-piece', $(this)).children('span').text();
                    var total = $('.piece-total', $(this)).text();
                    var html = '<div class="row">';
                    html += '<span>' + size.toUpperCase() + '</span>';
                    html += '<span>' + quant + '</span>';
                    html += '<span>$' + price_per + '</span>';
                    html += '<span>' + total + '</span>';
                    html += '</div>';
                }
                if (total != "" && total != null) {
                    Builder.total_price_new = total.replace("$", '');
                    Builder.totalPriceToShow += Number(Builder.total_price_new);
                }
                $(".kits.kit_" + kitNo + " .option-set.review .quantity .table").append(html);
            });

            if (Product.wSku != null) {
                var html = '<div class="row">';
                html += "<h2>Women's Sizing</h2>";
                html += '</div>';
                $(".kits.kit_" + kitNo + " .option-set.review .quantity .table").append(html);
                $(".sizing-chart-optionsForkit_0-women > .row").each(function () {

                    var size = $(this).children('.col').eq(0).children("strong").text();
                    var quant = $('input', $(this)).val();
                    total_quant += Number(quant);
                    var price_per = $('.per-piece', $(this)).children('span').text();
                    var total = $('.piece-total', $(this)).text();
                    if (quant != 0) {
                        var html = '<div class="row">';
                        html += '<span>' + size.toUpperCase() + '</span>';
                        html += '<span>' + quant + '</span>';
                        html += '<span>$' + price_per + '</span>';
                        html += '<span>' + total + '</span>';
                        html += '</div>';
                    }
                    if (total != "" && total != null) {
                        Builder.total_price_new = total.replace("$", '');
                        Builder.totalPriceToShow += Number(Builder.total_price_new);
                    }
                    $(".kits.kit_" + kitNo + " .option-set.review .quantity .table").append(html);
                });
            }
        }
        else if (kitNo == 1) {
            var html = '<div class="row">';
            html += "<h2>Men's Sizing For Shirt</h2>";
            html += '</div>';
            $(".kits.kit_" + kitNo + " .option-set.review .quantity .table").append(html);
            $(".sizing-chart-optionsForkit_1 > .row").each(function () {
                var size = $(this).children('.col').eq(0).children("strong").text();
                var quant = $('input', $(this)).val();
                total_quant += Number(quant);
                if (quant != 0) {
                    var price_per = $('.per-piece', $(this)).children('span').text();
                    var total = $('.piece-total', $(this)).text();
                    if (quant != 0) {

                        var html = '<div class="row">';
                        html += '<span>' + size.toUpperCase() + '</span>';
                        html += '<span>' + quant + '</span>';
                        html += '<span>$' + price_per + '</span>';
                        html += '<span>' + total + '</span>';
                        html += '</div>';
                    }
                }
                if (total != "" && total != null) {
                    Builder.total_price_new = total.replace("$", '');
                    Builder.totalPriceToShow += Number(Builder.total_price_new);
                }
                $(".kits.kit_" + kitNo + " .option-set.review .quantity .table").append(html);
            });

            if (Product.wSku != null) {
                var html = '<div class="row">';
                html += "<h2>Women's Sizing For Shirt</h2>";
                html += '</div>';
                $(".kits.kit_" + kitNo + " .option-set.review .quantity .table").append(html);
                $(".sizing-chart-optionsForkit_1-women > .row").each(function () {

                    var size = $(this).children('.col').eq(0).children("strong").text();
                    var quant = $('input', $(this)).val();
                    total_quant += Number(quant);
                    if (quant != 0) {
                        var price_per = $('.per-piece', $(this)).children('span').text();
                        var total = $('.piece-total', $(this)).text();

                        var html = '<div class="row">';
                        html += '<span>' + size.toUpperCase() + '</span>';
                        html += '<span>' + quant + '</span>';
                        html += '<span>$' + price_per + '</span>';
                        html += '<span>' + total + '</span>';
                        html += '</div>';

                        if (total != "" && total != null) {
                            Builder.total_price_new = total.replace("$", '');
                            Builder.totalPriceToShow += Number(Builder.total_price_new);
                        }

                        $(".kits.kit_" + kitNo + " .option-set.review .quantity .table").append(html);
                    }
                });
            }

            var html = '<div class="row">';
            html += "<h2>Men's Sizing For Shorts</h2>";
            html += '</div>';
            $(".kits.kit_" + kitNo + " .option-set.review .quantity .table").append(html);
            $(".sizing-chart-kit_OPTION2_Shorts_Men > .row").each(function () {

                var size = $(this).children('.col').eq(0).children("strong").text();
                var quant = $('input', $(this)).val();
                total_quant += Number(quant);
                if (quant != 0) {
                    var price_per = $('.per-piece', $(this)).children('span').text();
                    var total = $('.piece-total', $(this)).text();
                    var html = '<div class="row">';
                    html += '<span>' + size.toUpperCase() + '</span>';
                    html += '<span>' + quant + '</span>';
                    html += '<span>$' + price_per + '</span>';
                    html += '<span>' + total + '</span>';
                    html += '</div>';
                }
                if (total != "" && total != null) {
                    Builder.total_price_new = total.replace("$", '');
                    Builder.totalPriceToShow += Number(Builder.total_price_new);
                }
                $(".kits.kit_" + kitNo + " .option-set.review .quantity .table").append(html);
            });


            if (Product.wSku != null) {
                var html = '<div class="row">';
                html += "<h2>Women's Sizing For Shorts</h2>";
                html += '</div>';
                $(".kits.kit_" + kitNo + " .option-set.review .quantity .table").append(html);
                $(".sizing-chart-kit_OPTION2_Shorts_women > .row").each(function () {

                    var size = $(this).children('.col').eq(0).children("strong").text();
                    var quant = $('input', $(this)).val();
                    total_quant += Number(quant);
                    var price_per = $('.per-piece', $(this)).children('span').text();
                    var total = $('.piece-total', $(this)).text();
                    if (quant != 0) {
                        var html = '<div class="row">';
                        html += '<span>' + size.toUpperCase() + '</span>';
                        html += '<span>' + quant + '</span>';
                        html += '<span>$' + price_per + '</span>';
                        html += '<span>' + total + '</span>';
                        html += '</div>';
                    }
                    if (total != "" && total != null) {
                        Builder.total_price_new = total.replace("$", '');
                        Builder.totalPriceToShow += Number(Builder.total_price_new);
                    }
                    $(".kits.kit_" + kitNo + " .option-set.review .quantity .table").append(html);
                });
            }
        }
        else if (kitNo == 2) {
            $(".sizing-chart-optionsForkit_2 > .row").each(function () {
                var size = $(this).children('.col').eq(0).children("strong").text();
                var quant = $('input', $(this)).val();
                total_quant += Number(quant);
                if (quant != 0) {
                    var price_per = $('.per-piece', $(this)).children('span').text();
                    var total = $('.piece-total', $(this)).text();


                    var html = '<div class="row">';
                    html += '<span>' + size.toUpperCase() + '</span>';
                    html += '<span>' + quant + '</span>';
                    html += '<span>$' + price_per + '</span>';
                    html += '<span>' + total + '</span>';
                    html += '</div>';
                }
                if (total != "" && total != null) {
                    Builder.total_price_new = total.replace("$", '');
                    Builder.totalPriceToShow += Number(Builder.total_price_new);
                }
                $(".kits.kit_" + kitNo + " .option-set.review .quantity .table").append(html);
            });

            if (Product.wSku != null) {
                var html = '<div class="row">';
                html += "<h2>Women's Sizing</h2>";
                html += '</div>';
                $(".kits.kit_" + kitNo + " .option-set.review .quantity .table").append(html);

                $(".sizing-chart-optionsForkit_2-women > .row").each(function () {

                    var size = $(this).children('.col').eq(0).children("strong").text();
                    var quant = $('input', $(this)).val();
                    total_quant += Number(quant);
                    if (quant != 0) {
                        var price_per = $('.per-piece', $(this)).children('span').text();
                        var total = $('.piece-total', $(this)).text();

                        var html = '<div class="row">';
                        html += '<span>' + size.toUpperCase() + '</span>';
                        html += '<span>' + quant + '</span>';
                        html += '<span>$' + price_per + '</span>';
                        html += '<span>' + total + '</span>';
                        html += '</div>';
                    }
                    if (total != "" && total != null) {
                        Builder.total_price_new = total.replace("$", '');
                        Builder.totalPriceToShow += Number(Builder.total_price_new);
                    }
                    $(".kits.kit_" + kitNo + " .option-set.review .quantity .table").append(html);
                });
            }
        }
        else if (kitNo == 3) {

            var html = '<div class="row">';
            html += "<h2>Men's Sizing For Shirt</h2>";
            html += '</div>';
            $(".kits.kit_" + kitNo + " .option-set.review .quantity .table").append(html);
            $(".sizing-chart-optionsForkit_3 > .row").each(function () {
                var size = $(this).children('.col').eq(0).children("strong").text();
                var quant = $('input', $(this)).val();
                total_quant += Number(quant);
                if (quant != 0) {
                    var price_per = $('.per-piece', $(this)).children('span').text();
                    var total = $('.piece-total', $(this)).text();


                    var html = '<div class="row">';
                    html += '<span>' + size.toUpperCase() + '</span>';
                    html += '<span>' + quant + '</span>';
                    html += '<span>$' + price_per + '</span>';
                    html += '<span>' + total + '</span>';
                    html += '</div>';
                }
                if (total != "" && total != null) {
                    Builder.total_price_new = total.replace("$", '');
                    Builder.totalPriceToShow += Number(Builder.total_price_new);
                }
                $(".kits.kit_" + kitNo + " .option-set.review .quantity .table").append(html);
            });

            if (Product.wSku != null) {
                var html = '<div class="row">';
                html += "<h2>Women's Sizing For Shirt</h2>";
                html += '</div>';
                $(".kits.kit_" + kitNo + " .option-set.review .quantity .table").append(html);
                $(".sizing-chart-optionsForkit_3-women > .row").each(function () {

                    var size = $(this).children('.col').eq(0).children("strong").text();
                    var quant = $('input', $(this)).val();
                    total_quant += Number(quant);
                    if (quant != 0) {
                        var price_per = $('.per-piece', $(this)).children('span').text();
                        var total = $('.piece-total', $(this)).text();

                        var html = '<div class="row">';
                        html += '<span>' + size.toUpperCase() + '</span>';
                        html += '<span>' + quant + '</span>';
                        html += '<span>$' + price_per + '</span>';
                        html += '<span>' + total + '</span>';
                        html += '</div>';
                    }
                    if (total != "" && total != null) {
                        Builder.total_price_new = total.replace("$", '');
                        Builder.totalPriceToShow += Number(Builder.total_price_new);
                    }
                    $(".kits.kit_" + kitNo + " .option-set.review .quantity .table").append(html);
                });
            }
            var html = '<div class="row">';
            html += "<h2>Men's Sizing For Shorts</h2>";
            html += '</div>';
            $(".kits.kit_" + kitNo + " .option-set.review .quantity .table").append(html);
            $(".sizing-chart-kit_OPTION4_Shorts_Men > .row").each(function () {

                var size = $(this).children('.col').eq(0).children("strong").text();
                var quant = $('input', $(this)).val();
                total_quant += Number(quant);
                if (quant != 0) {
                    var price_per = $('.per-piece', $(this)).children('span').text();
                    var total = $('.piece-total', $(this)).text();
                    var html = '<div class="row">';
                    html += '<span>' + size.toUpperCase() + '</span>';
                    html += '<span>' + quant + '</span>';
                    html += '<span>$' + price_per + '</span>';
                    html += '<span>' + total + '</span>';
                    html += '</div>';
                }
                if (total != "" && total != null) {
                    Builder.total_price_new = total.replace("$", '');
                    Builder.totalPriceToShow += Number(Builder.total_price_new);
                }
                $(".kits.kit_" + kitNo + " .option-set.review .quantity .table").append(html);
            });
            if (Product.wSku != null) {
                var html = '<div class="row">';
                html += "<h2>Women's Sizing For Shorts</h2>";
                html += '</div>';
                $(".kits.kit_" + kitNo + " .option-set.review .quantity .table").append(html);
                $(".sizing-chart-kit_OPTION4_Shorts_women > .row").each(function () {

                    var size = $(this).children('.col').eq(0).children("strong").text();
                    var quant = $('input', $(this)).val();
                    total_quant += Number(quant);
                    var price_per = $('.per-piece', $(this)).children('span').text();
                    var total = $('.piece-total', $(this)).text();
                    if (quant != 0) {
                        var html = '<div class="row">';
                        html += '<span>' + size.toUpperCase() + '</span>';
                        html += '<span>' + quant + '</span>';
                        html += '<span>$' + price_per + '</span>';
                        html += '<span>' + total + '</span>';
                        html += '</div>';
                    }
                    if (total != "" && total != null) {
                        Builder.total_price_new = total.replace("$", '');
                        Builder.totalPriceToShow += Number(Builder.total_price_new);
                    }
                    $(".kits.kit_" + kitNo + " .option-set.review .quantity .table").append(html);
                });
            }
        }
        else if (kitNo == 4) {
            $(".sizing-chart-optionsForkit_4 > .row").each(function () {
                var size = $(this).children('.col').eq(0).children("strong").text();
                var quant = $('input', $(this)).val();
                total_quant += Number(quant);
                if (quant != 0) {
                    var price_per = $('.per-piece', $(this)).children('span').text();
                    var total = $('.piece-total', $(this)).text();


                    var html = '<div class="row">';
                    html += '<span>' + size.toUpperCase() + '</span>';
                    html += '<span>' + quant + '</span>';
                    html += '<span>$' + price_per + '</span>';
                    html += '<span>' + total + '</span>';
                    html += '</div>';
                }
                if (total != "" && total != null) {
                    Builder.total_price_new = total.replace("$", '');
                    Builder.totalPriceToShowForKit_4 += Number(Builder.total_price_new);
                }
                $(".kits.kit_" + kitNo + " .option-set.review .quantity .table").append(html);
            });

            if (Product.wSku != null) {
                var html = '<div class="row">';
                html += "<h2>Women's Sizing</h2>";
                html += '</div>';
                $(".kits.kit_" + kitNo + " .option-set.review .quantity .table").append(html);

                $(".sizing-chart-optionsForkit_4-women > .row").each(function () {

                    var size = $(this).children('.col').eq(0).children("strong").text();
                    var quant = $('input', $(this)).val();
                    if (quant != 0) {
                        total_quant += Number(quant);
                        var price_per = $('.per-piece', $(this)).children('span').text();
                        var total = $('.piece-total', $(this)).text();

                        var html = '<div class="row">';
                        html += '<span>' + size.toUpperCase() + '</span>';
                        html += '<span>' + quant + '</span>';
                        html += '<span>$' + price_per + '</span>';
                        html += '<span>' + total + '</span>';
                        html += '</div>';
                    }
                    if (total != "" && total != null) {
                        Builder.total_price_new = total.replace("$", '');
                        Builder.totalPriceToShowForKit_4 += Number(Builder.total_price_new);
                    }
                    $(".kits.kit_" + kitNo + " .option-set.review .quantity .table").append(html);
                });
            }
        }
        //-------MyCode
        $(".kits.kit_" + kitNo + " .option-set.review .total-quantity").children('span').text(total_quant);

        $(".preview-nav.kits a").each(function () {
            if (!$(this).hasClass("hide")) {
                $(".canvas-wrapper[data-view=" + $(this).data('view') + "]").addClass("review-active");
            }
        });

        // set up CTAs for logged in vs temp

    },
    acknowledgeSave: function (guid) {
        console.log('saved, tell the user they dont have to click save');
        console.log(guid);
        CK.alert(107);
        $('body').removeClass('changed').removeClass('working');

    },

    //21/2/2019
    //Important--Display Design has successfully message
    acknowledgeSaveArtworkOrCustomization: function (guid) {
        console.log('saved, tell the user they dont have to click save');
        console.log(guid);
        // CK.alert(107)      
        $('body').removeClass('changed').removeClass('working');

        //Builder.shareurl = "";
        //$(".button.to-cart").addClass("processing");
        //var obj = {};
        //var CurrentView = $(".preview-nav a.active").attr('data-view');

        //if (CurrentView == "_Front") {
        //    var svgText = $('#ForSingleProduct_Front:first-child').html();
        //}
        //else if (CurrentView == "_Back") {
        //    var svgText = $('#ForSingleProduct_Back:first-child').html();
        //}
        //else if (CurrentView == "_Left") {
        //    var svgText = $('#ForSingleProduct_Left:first-child').html();
        //}
        //else if (CurrentView == "_Right") {
        //    var svgText = $('#ForSingleProduct_Right:first-child').html();
        //}

        //$.ajax({
        //    url: "/DesignViewModels/ConverSvgToPng",
        //    type: "POST",
        //    data: { SvgStr: svgText, guid: Builder.guid, View: CurrentView },
        //    beforeSend: function () {      // Important-Hide loader while uploading Browse image in Artwork            
        //        $(".lds-wrapper").show();
        //    },
        //    dataType: 'json',
        //    success: function (response) {
        //        if (response != "" || response != null) {
        //            Builder.svgtopng = deepSiteUrl + "/Content/customizedPngImg/" + response;
        //            var request = Builder.guid + "~" + Builder.svgtopng;
        //            Builder.shareurl = Builder.svgtopng;
        //            console.log(Builder.svgtopng);
        //            sessionStorage.setItem("CurrentPathOfImage", Builder.svgtopng);
        //            var imagePath_Email = "/Content/customizedPngImg/" + response;
        //            sessionStorage.setItem("CurrentImagePath_Email", imagePath_Email);
        //            IsImagePathGet = true;
        //            $('.share').show();
        //            $(".lds-wrapper").hide();
        //        }
        //    },
        //    error: function (response, status, e) {
        //        console.log(response);
        //        CK.alert(108);
        //    }
        //});
    },

    acknowledgeSaveKit: function (guid) {
        console.log('saved, tell the user they dont have to click save');
        console.log(guid);
        if (guid == 3 || guid == 'undefined') {

            CK.alert(107)
            $('body').removeClass('changed').removeClass('working');
        }
    },
    //25/2/2019
    //Important--Display Design has successfully message
    acknowledgeSaveArtworkOrCustomizationForKit: function (guid) {
        console.log('saved, tell the user they dont have to click save');
        console.log(guid);
        if (guid == 3 || guid == 'undefined') {
            //CK.alert(107)
            $('body').removeClass('changed').removeClass('working');
        }
        ////$(".button.to-cart").addClass("active");
        //$(".button.to-cart").addClass("processing");
        //// console.log(Builder.createKitProductList());
        //console.log(Builder.guid);
        //var obj = {};
        //$(".button.to-cart").addClass("processing");
        //console.log(Builder.guid);
        //var obj = {};
        ////  var svgText = $('.kit_0 .svg').html();

        //var CurrentView = $(".preview-nav.kits.active a.active").attr('data-view');
        //var stepNo = $('.row.steps span.active').attr('data-nav');
        //var ActiveKit = $('.kit.active span.active').attr('data-count');
        //if (ActiveKit == 0) {
        //    if (CurrentView == "_Front") {
        //        var svgText = $('#option1ForKit_0_Front:first-child').html();
        //    }
        //    else if (CurrentView == "_Back") {
        //        var svgText = $('#option1ForKit_0_Back:first-child').html();
        //    }
        //    else if (CurrentView == "_Left") {
        //        var svgText = $('#option1ForKit_0_Left:first-child').html();
        //    }
        //    else if (CurrentView == "_Right") {
        //        var svgText = $('#option1ForKit_0_Right:first-child').html();
        //    }
        //}
        //else if (ActiveKit == 1) {
        //    if (CurrentView == "_Front") {
        //        var svgText = $('#option2ForKit_1_Front:first-child').html();
        //    }
        //    else if (CurrentView == "_Back") {
        //        var svgText = $('#option2ForKit_1_Back:first-child').html();
        //    }
        //    else if (CurrentView == "_Left") {
        //        var svgText = $('#option2ForKit_1_Left:first-child').html();
        //    }
        //    else if (CurrentView == "_Right") {
        //        var svgText = $('#option2ForKit_1_Right:first-child').html();
        //    }
        //}
        //else if (ActiveKit == 2) {
        //    if (CurrentView == "_Front") {
        //        var svgText = $('#option3ForKit_2_Front:first-child').html();
        //    }
        //    else if (CurrentView == "_Back") {
        //        var svgText = $('#option3ForKit_2_Back:first-child').html();
        //    }
        //    else if (CurrentView == "_Left") {
        //        var svgText = $('#option3ForKit_2_Left:first-child').html();
        //    }
        //    else if (CurrentView == "_Right") {
        //        var svgText = $('#option3ForKit_2_Right:first-child').html();
        //    }
        //}
        //else if (ActiveKit == 3) {
        //    if (CurrentView == "_Front") {
        //        var svgText = $('#option4ForKit_3_Front:first-child').html();
        //    }
        //    else if (CurrentView == "_Back") {
        //        var svgText = $('#option4ForKit_3_Back:first-child').html();
        //    }
        //    else if (CurrentView == "_Left") {
        //        var svgText = $('#option4ForKit_3_Left:first-child').html();
        //    }
        //    else if (CurrentView == "_Right") {
        //        var svgText = $('#option4ForKit_3_Right:first-child').html();
        //    }
        //}
        //else if (ActiveKit == 4) {
        //    if (CurrentView == "_Front") {
        //        var svgText = $('#option3ForKit_4_Front:first-child').html();
        //    }
        //    else if (CurrentView == "_Back") {
        //        var svgText = $('#option3ForKit_4_Back:first-child').html();
        //    }
        //    else if (CurrentView == "_Left") {
        //        var svgText = $('#option3ForKit_4_Left:first-child').html();
        //    }
        //    else if (CurrentView == "_Right") {
        //        var svgText = $('#option3ForKit_4_Right:first-child').html();
        //    }
        //}
        //if (svgText == "") {
        //    CK.alert("There is some problem");
        //}
        //var myCanvas = document.getElementById("mySvgCanvas");
        //var ctxt = myCanvas.getContext("2d");

        //$.ajax({
        //    url: "/DesignViewModels/ConverSvgToPng",
        //    type: "POST",
        //    data: { SvgStr: svgText, guid: Builder.guid, View: CurrentView },
        //    beforeSend: function () {
        //        $(".lds-wrapper").show();     // Important-Hide loader while uploading Browse image in Artwork            
        //    },
        //    dataType: 'json',
        //    success: function (response) {
        //        if (response != "" || response != null) {
        //            Builder.svgtopng = deepSiteUrl + "/Content/customizedPngImg/" + response;
        //            var request = Builder.guid + "~" + Builder.svgtopng;
        //            Builder.shareurl = Builder.svgtopng;
        //            console.log(Builder.svgtopng);
        //            sessionStorage.setItem("CurrentPathOfImage", Builder.svgtopng);
        //            var imagePath_Email = "/Content/customizedPngImg/" + response;
        //            sessionStorage.setItem("CurrentImagePath_Email", imagePath_Email);
        //            IsImagePathGet = true;
        //            $('.share').show();
        //            $(".lds-wrapper").hide();
        //        }
        //    },
        //    error: function (response, status, e) {
        //        console.log(response);
        //        CK.alert(108);
        //    }
        //});
    },
    acknowledgeSaveQuietly: function (guid) {
        console.log('Open dealer modal popup');
        $('body').removeClass('changed').removeClass('working');
    },
    openDealerModal: function (e) {
        Api.call(Api.endpoints.getDesign, JSON.stringify({
            guid: Builder.guid
        }), function (data) {
            console.log('loadDesign', data, typeof (data));
            if (data == null) {
                window.location = "/builder/404";
            }
            console.log('Open dealer modal popup');
            var originalOrderNo = $('#OriginalOrderNo').val();
            if (originalOrderNo != "") {
                if (data.OriginalOrderNo != originalOrderNo) {
                    //  CK.alert(300);
                    // return false;
                    Api.call(Api.endpoints.saveDesign,
                        JSON.stringify(Builder.productDataForSaving("NEW", false)),
                        Builder.acknowledgeSaveQuietly);
                }
            }
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
        });
    },
    createProductList: function () {

        /*
        Product Code will be combination of Uniform Builder item code – size (say S794344-XXXS). If there are multiple sizes to be added to cart, then pass the combination as comma separated values (say obj.lstChildProduct = "S794344-XXXS ~2, S794344-XXL~2 , S794344-XS~2 ";). The combination needs to be maintained because this is how the SKU code is set up in ecommerce.
        */

        var cartimg = Builder.svgtopng;
        var pairs = new Array();
        //if (Product.sku == 'CE58') {
        //    pairs.push((Builder.ckwrap ? "CKWRAP" : Builder.hgSku) + "~" + $(".row[data-size='onesize'] input").val());
        //}
        //else {

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
        //}

        //17/4/2019
        //Standard Setup Free
        var SetUpFee = $('#SetupFeeForSinglate').text();
        //art

        var artSkus = svgText.pricing.getSkuCount();
        var total_quantity = 0;
        $(".option-set.sizing input").each(function () {
            total_quantity += Number($(this).val());
        });
        $.each(artSkus, function (key, val) {
            //console.log(key, val, total_quantity);
            pairs.push(key + '~' + val * total_quantity);
            //pairs.push(key + '~' + val * total_quantity +'~'+ SetUpFee);
        });

        var r = pairs.join();//S794344 "S794344-XS~2";//"S794341-XS~2,S794341-XS~2";//
        //console.log(r);
        //console.log("r", r);
        return r;
    },
    createKitProductList: function () {
        // Important--Add to Card (Send Current selected kit Name ,size and minimum quantity) 
        svgText.pricing.getKitSkuCount();
        var pairs = new Array();
        var pairsOpt0 = new Array();
        var cartimg = Builder.svgtopng;
        var kitNo = $('.kit span.active').attr('data-count');
        if (kitNo == 0) {
            total_quantity = 0;
            for (var size in Builder.cartObj0['m']) {
                var quantity = Builder.cartObj0['m'][size];
                total_quantity += Number(quantity || 0);
                if (quantity > 0)
                    pairs.push(ProductKit['kit_0'].PricingSku + "-" + size.toUpperCase() + "~" + String(quantity));
            }
            if (ProductKit['kit_0'].wSku != null) {
                for (var size in Builder.cartObj0['w']) {
                    var quantity = Builder.cartObj0['w'][size];// Product.sku
                    total_quantity += Number(quantity || 0);
                    if (quantity > 0) pairs.push(ProductKit['kit_0'].PricingWSku + "-" + size.toUpperCase() + "~" + String(quantity));
                }
            }

            var artSkus = svgText.pricing.get_Kit0_SkuArtCount();
            $.each(artSkus, function (key, val) {
                pairsOpt0.push(key + '~' + val * total_quantity);
            });
            var OPTION_1 = pairs.join() + "," + pairsOpt0.join();

            return OPTION_1;
        }
        if (kitNo == 1) {
            var pairsOption2_Shirt = new Array();
            var pairsOption2_Shorts = new Array();
            var pairsOption2 = new Array();
            var pairsOption2_ShortArt = new Array();
            total_quantity = 0;
            total_quantityShirt = 0;
            total_quantityShort = 0;
            var ProductName = ProductKit['kit_1'].PricingSku;
            var ProductDetail = ProductName.split("_");
            var OPTION2_ShirtName = ProductDetail[0];
            var OPTION2_ShortsName = ProductDetail[1];
            // For Shirt
            // men          
            for (var size in Builder.cartObj_1Shirt_Men['m']) {
                var quantity = Builder.cartObj_1Shirt_Men['m'][size];// Product.sku
                total_quantityShirt += Number(quantity || 0);
                if (quantity > 0) pairsOption2_Shirt.push(OPTION2_ShirtName + "-" + size.toUpperCase() + "~" + String(quantity));
            }
            // Women
            if (ProductKit['kit_1'].wSku != null) {
                for (var size in Builder.cartObj_1Shirt_Women['w']) {
                    var quantity = Builder.cartObj_1Shirt_Women['w'][size];// Product.sku
                    total_quantityShirt += Number(quantity || 0);
                    if (quantity > 0) pairsOption2_Shorts.push(ProductKit['kit_1'].wpricesShirt + "-" + size.toUpperCase() + "~" + String(quantity));
                }
            }
            var shirt = pairsOption2_Shirt.join();
            var artSkuKit = svgText.pricing.getKitSkuCount();
            var artSkuKit1 = svgText.pricing.get_Kit1_SkuArtCount(1);
            console.log(artSkuKit1);
            // For Short

            // men
            for (var size in Builder.cartObj_1Shorts['m']) {
                var quantity2 = Builder.cartObj_1Shorts['m'][size];// Product.sku
                total_quantity += Number(quantity2 || 0);
                if (quantity2 > 0) pairsOption2_Shorts.push(OPTION2_ShortsName + "-" + size.toUpperCase() + "~" + String(quantity2));
            }
            // Women
            if (ProductKit['kit_1'].wSku != null) {
                for (var size in Builder.cartObj_1Shorts['w']) {
                    var quantity2 = Builder.cartObj_1Shorts['w'][size];// Product.sku
                    total_quantity += Number(quantity2 || 0);
                    if (quantity2 > 0) pairsOption2_Shorts.push(ProductKit['kit_1'].wpriceShorts + "-" + size.toUpperCase() + "~" + String(quantity2));
                }
            }
            var shirtsForMen_And_Women = shirt + ",";
            var shortsForMen_And_Women = pairsOption2_Shorts.join();
            var ShirtAndShortsTemp = shirtsForMen_And_Women.concat(shortsForMen_And_Women);
            var mask_name = "";
            artShirt = 0;
            artShort = 0;
            keyLTR = "";
            keyVal = 0;
            $.each(artSkuKit1, function (key, val) {
                if (key == "SUBLTR") {
                    keyLTR = key;
                    keyVal = val;
                }
                else if (key == "shirtArtCount") {
                    artShirt = val;
                    pairsOption2.push(keyLTR + '~' + val * total_quantityShirt);
                }
                else if (key == "shortArtCount") {
                    artShort = val;
                    pairsOption2_ShortArt.push(keyLTR + '~' + val * total_quantity);
                }

            });
            if (artShirt > 0 && artShort == 0) {
                pairsOption2 = [];
                pairsOption2.push(keyLTR + '~' + artShirt * total_quantityShirt);
                ShirtAndShortsTemp = shirtsForMen_And_Women + pairsOption2.join() + "," + shortsForMen_And_Women;
            }
            else if (artShirt == 0 && artShort > 0) {
                pairsOption2_ShortArt = [];
                pairsOption2_ShortArt.push(keyLTR + '~' + artShort * total_quantity);
                ShirtAndShortsTemp = shirtsForMen_And_Women + shortsForMen_And_Women + "," + pairsOption2_ShortArt.join();
            }
            else if (artShort > 0 && artShirt > 0) {
                ShirtAndShortsTemp = shirtsForMen_And_Women + pairsOption2.join() + "," + shortsForMen_And_Women + "," + pairsOption2_ShortArt.join();
            }
            //ShirtAndShortsTemp = ShirtAndShortsTemp + "," + pairsOption2.join();
            console.log(ShirtAndShortsTemp);
            return ShirtAndShortsTemp;
        }
        if (kitNo == 2 || kitNo == 4) {
            var pairsOption3_Singlet = new Array();
            var pairsOption3_Shorts = new Array();
            var pairsOption3 = new Array();
            total_quantity = 0;
            total_quantity_shorts = 0;
            // For Singlet

            // men
            for (var size in Builder.cartObj_2Singlet['m']) {
                var quantity = Builder.cartObj_2Singlet['m'][size];// Product.sku
                total_quantity += Number(quantity || 0);
                if (quantity > 0) pairsOption3_Singlet.push(ProductKit['kit_2'].PricingSku + "-" + size.toUpperCase() + "~" + String(quantity));
            }
            // Women
            if (ProductKit['kit_2'].wSku != null) {
                for (var size in Builder.cartObj_2Singlet['w']) {
                    total_quantity += Number(quantity || 0);
                    var quantity = Builder.cartObj_2Singlet['w'][size];// Product.sku
                    if (quantity > 0) pairsOption3_Singlet.push(ProductKit['kit_2'].PricingWSku + "-" + size.toUpperCase() + "~" + String(quantity));
                }
            }

            var artSkuKit2 = svgText.pricing.get_Kit2_SkuArtCount();
            $.each(artSkuKit2, function (key, val) {
                pairsOption3_Singlet.push(key + '~' + val * total_quantity);
            });

            var Singlet = pairsOption3_Singlet.join();

            // For Short

            // men
            for (var size in Builder.cartObj_2Shorts['m']) {
                var quantity = Builder.cartObj_2Shorts['m'][size];// Product.sku
                total_quantity_shorts += Number(quantity || 0);
                if (quantity > 0) pairsOption3_Shorts.push(ProductKit['kit_4'].PricingSku + "-" + size.toUpperCase() + "~" + String(quantity));
            }
            // Women
            if (ProductKit['kit_4'].wSku != null) {
                for (var size in Builder.cartObj_2Shorts['w']) {
                    var quantity = Builder.cartObj_2Shorts['w'][size];// Product.sku
                    total_quantity_shorts += Number(quantity || 0);
                    if (quantity > 0) pairsOption3_Shorts.push(ProductKit['kit_4'].PricingWSku + "-" + size.toUpperCase() + "~" + String(quantity));
                }
            }
            var artSkuKit4 = svgText.pricing.get_Kit4_SkuArtCount();
            $.each(artSkuKit4, function (key, val) {
                pairsOption3_Shorts.push(key + '~' + val * total_quantity_shorts);
            });

            var Singlet_3_ForMen_And_Women = Singlet + ",";
            var shorts_3_ForMen_And_Women = pairsOption3_Shorts.join();
            var Singlet_3_AndShorts = Singlet_3_ForMen_And_Women.concat(shorts_3_ForMen_And_Women);

            var OPTION_3 = Singlet_3_AndShorts
            return Singlet_3_AndShorts;
        }
        if (kitNo == 3) {
            var pairsOption4_Shirt = new Array();
            var pairsOption4_Shorts = new Array();
            var pairsOption4 = new Array();
            var ProductName = ProductKit['kit_3'].PricingSku;
            var ProductDetail = ProductName.split("_");
            var OPTION4_ShirtName = ProductDetail[0];
            var OPTION4_ShortsName = ProductDetail[1];
            total_quantity = 0;
            total_quantityShirt = 0;
            total_quantityShort = 0;
            var pairsOption4_ShortArt = new Array();

            // For Shirt
            // men
            for (var size in Builder.cartObj_3Shirt['m']) {
                var quantity = Builder.cartObj_3Shirt['m'][size];// Product.sku
                total_quantityShirt += Number(quantity || 0);
                if (quantity > 0) pairsOption4_Shirt.push(OPTION4_ShirtName + "-" + size.toUpperCase() + "~" + String(quantity));
            }
            // Women
            if (ProductKit['kit_3'].wSku != null) {
                for (var size in Builder.cartObj_3Shirt['w']) {
                    var quantity = Builder.cartObj_3Shirt['w'][size];// Product.sku
                    total_quantityShirt += Number(quantity || 0);
                    if (quantity > 0) pairsOption4_Shirt.push(ProductKit['kit_3'].wpricesShirt + "-" + size.toUpperCase() + "~" + String(quantity));
                }
            }
            var shirt = pairsOption4_Shirt.join();
            var artSkuKit = svgText.pricing.getKitSkuCount();
            var artSkuKit3 = svgText.pricing.get_Kit3_SkuArtCount();
            console.log(artSkuKit3);
            // men
            for (var size in Builder.cartObj_3Shorts['m']) {
                var quantity2 = Builder.cartObj_3Shorts['m'][size];// Product.sku
                total_quantity += Number(quantity2 || 0);
                if (quantity2 > 0) pairsOption4_Shorts.push(OPTION4_ShortsName + "-" + size.toUpperCase() + "~" + String(quantity2));
            }
            // Women
            if (ProductKit['kit_3'].wSku != null) {
                for (var size in Builder.cartObj_3Shorts['w']) {
                    var quantity2 = Builder.cartObj_3Shorts['w'][size];// Product.sku
                    total_quantity += Number(quantity2 || 0);
                    if (quantity2 > 0) pairsOption4_Shorts.push(ProductKit['kit_3'].wpriceShorts + "-" + size.toUpperCase() + "~" + String(quantity2));
                }
            }
            var shirts_4_ForMen_And_Women = shirt + ",";
            var shorts_4_ForMen_And_Women = pairsOption4_Shorts.join();
            var ShirtAndShortsTemp = shirts_4_ForMen_And_Women.concat(shorts_4_ForMen_And_Women);
            var mask_name = "";
            artShirt = 0;
            artShort = 0;
            keyLTR = "";
            keyVal = 0;

            //$.each(artSkuKit3, function (key, val) {
            //    pairsOption4.push(key + '~' + val * total_quantity);
            //});

            $.each(artSkuKit3, function (key, val) {
                if (key == "SUBLTR") {
                    keyLTR = key;
                    keyVal = val;
                }
                else if (key == "shirtArtCount") {
                    artShirt = val;
                    pairsOption4.push(keyLTR + '~' + val * total_quantityShirt);
                }
                else if (key == "shortArtCount") {
                    artShort = val;
                    pairsOption4_ShortArt.push(keyLTR + '~' + val * total_quantity);
                }

            });
            if (artShirt > 0 && artShort == 0) {
                pairsOption4 = [];
                pairsOption4.push(keyLTR + '~' + artShirt * total_quantityShirt);
                ShirtAndShortsTemp = shirts_4_ForMen_And_Women + pairsOption4.join() + "," + shorts_4_ForMen_And_Women;
            }
            else if (artShirt == 0 && artShort > 0) {
                pairsOption4_ShortArt = [];
                pairsOption4_ShortArt.push(keyLTR + '~' + artShort * total_quantity);
                ShirtAndShortsTemp = shirts_4_ForMen_And_Women + shorts_4_ForMen_And_Women + "," + pairsOption4_ShortArt.join();
            }
            else if (artShort > 0 && artShirt > 0) {
                ShirtAndShortsTemp = shirts_4_ForMen_And_Women + pairsOption4.join() + "," + shorts_4_ForMen_And_Women + "," + pairsOption4_ShortArt.join();
            }

            // ShirtAndShortsTemp = ShirtAndShortsTemp + "," + pairsOption4.join();
            console.log(ShirtAndShortsTemp);
            return ShirtAndShortsTemp;
        }
    },
    //createKitProductList: function () {
    //    // Important--Add to Card (Send Current selected kit Name ,size and minimum quantity) 
    //    svgText.pricing.getKitSkuCount();
    //    var pairs = new Array();
    //    var pairsOpt0 = new Array();
    //    var cartimg = Builder.svgtopng;
    //    var kitNo = $('.kit span.active').attr('data-count');
    //    if (kitNo == 0) {
    //        total_quantity = 0;
    //        for (var size in Builder.cartObj0['m']) {
    //            var quantity = Builder.cartObj0['m'][size];
    //            total_quantity += Number(quantity || 0);
    //            if (quantity > 0)
    //                pairs.push(ProductKit['kit_0'].PricingSku + "-" + size.toUpperCase() + "~" + String(quantity));
    //        }
    //        if (ProductKit['kit_0'].wSku != null) {
    //            for (var size in Builder.cartObj0['w']) {
    //                var quantity = Builder.cartObj0['w'][size];// Product.sku
    //                total_quantity += Number(quantity || 0);
    //                if (quantity > 0) pairs.push(ProductKit['kit_0'].PricingWSku + "-" + size.toUpperCase() + "~" + String(quantity));
    //            }
    //        }

    //        var artSkus = svgText.pricing.get_Kit0_SkuArtCount();
    //        $.each(artSkus, function (key, val) {
    //            pairsOpt0.push(key + '~' + val * total_quantity);
    //        });
    //        var OPTION_1 = pairs.join() + "," + pairsOpt0.join();

    //        return OPTION_1;
    //    }
    //    if (kitNo == 1) {
    //        var pairsOption2_Shirt = new Array();
    //        var pairsOption2_Shorts = new Array();
    //        var pairsOption2 = new Array();
    //        total_quantity = 0;
    //        var ProductName = ProductKit['kit_1'].PricingSku;
    //        var ProductDetail = ProductName.split("_");
    //        var OPTION2_ShirtName = ProductDetail[0];
    //        var OPTION2_ShortsName = ProductDetail[1];
    //        // For Shirt
    //        // men          
    //        for (var size in Builder.cartObj_1Shirt_Men['m']) {
    //            var quantity = Builder.cartObj_1Shirt_Men['m'][size];// Product.sku
    //            total_quantity += Number(quantity || 0);
    //            if (quantity > 0) pairsOption2_Shirt.push(OPTION2_ShirtName + "-" + size.toUpperCase() + "~" + String(quantity));
    //        }
    //        // Women
    //        if (ProductKit['kit_1'].wSku != null) {
    //            for (var size in Builder.cartObj_1Shirt_Women['w']) {
    //                var quantity = Builder.cartObj_1Shirt_Women['w'][size];// Product.sku
    //                total_quantity += Number(quantity || 0);
    //                if (quantity > 0) pairsOption2_Shorts.push(ProductKit['kit_1'].wpricesShirt + "-" + size.toUpperCase() + "~" + String(quantity));
    //            }
    //        }
    //        var shirt = pairsOption2_Shirt.join();
    //        var artSkuKit = svgText.pricing.getKitSkuCount();
    //        var artSkuKit1 = svgText.pricing.get_Kit1_SkuArtCount(1);
    //        console.log(artSkuKit1);
    //        // For Short

    //        // men
    //        for (var size in Builder.cartObj_1Shorts['m']) {
    //            var quantity = Builder.cartObj_1Shorts['m'][size];// Product.sku
    //            total_quantity += Number(quantity || 0);
    //            if (quantity > 0) pairsOption2_Shorts.push(OPTION2_ShortsName + "-" + size.toUpperCase() + "~" + String(quantity));
    //        }
    //        // Women
    //        if (ProductKit['kit_1'].wSku != null) {
    //            for (var size in Builder.cartObj_1Shorts['w']) {
    //                var quantity = Builder.cartObj_1Shorts['w'][size];// Product.sku
    //                total_quantity += Number(quantity || 0);
    //                // if (quantity > 0) pairsOption2_Shorts.push(ProductKit['kit_' + kitNo].wpriceShorts + "-" + size.toUpperCase() + "~" + String(quantity));
    //                if (quantity > 0) pairsOption2_Shorts.push(ProductKit['kit_1'].wpriceShorts + "-" + size.toUpperCase() + "~" + String(quantity));
    //            }
    //        }
    //        var shirtsForMen_And_Women = shirt + ",";
    //        var shortsForMen_And_Women = pairsOption2_Shorts.join();
    //        var ShirtAndShortsTemp = shirtsForMen_And_Women.concat(shortsForMen_And_Women);

    //        $.each(artSkuKit1, function (key, val) {
    //            pairsOption2.push(key + '~' + val * total_quantity);
    //        });
    //        var r = pairsOption2.join();
    //        ShirtAndShortsTemp = ShirtAndShortsTemp + "," + pairsOption2.join();
    //        console.log(ShirtAndShortsTemp);
    //        return ShirtAndShortsTemp;
    //    }
    //    if (kitNo == 2 || kitNo == 4) {
    //        var pairsOption3_Singlet = new Array();
    //        var pairsOption3_Shorts = new Array();
    //        var pairsOption3 = new Array();
    //        total_quantity = 0;
    //        total_quantity_shorts = 0;
    //        // For Singlet

    //        // men
    //        for (var size in Builder.cartObj_2Singlet['m']) {
    //            var quantity = Builder.cartObj_2Singlet['m'][size];// Product.sku
    //            total_quantity += Number(quantity || 0);
    //            if (quantity > 0) pairsOption3_Singlet.push(ProductKit['kit_2'].PricingSku + "-" + size.toUpperCase() + "~" + String(quantity));
    //        }
    //        // Women
    //        if (ProductKit['kit_2'].wSku != null) {
    //            for (var size in Builder.cartObj_2Singlet['w']) {
    //                total_quantity += Number(quantity || 0);
    //                var quantity = Builder.cartObj_2Singlet['w'][size];// Product.sku
    //                if (quantity > 0) pairsOption3_Singlet.push(ProductKit['kit_2'].PricingWSku + "-" + size.toUpperCase() + "~" + String(quantity));
    //            }
    //        }

    //        var artSkuKit2 = svgText.pricing.get_Kit2_SkuArtCount();
    //        $.each(artSkuKit2, function (key, val) {
    //            pairsOption3_Singlet.push(key + '~' + val * total_quantity);
    //        });

    //        var Singlet = pairsOption3_Singlet.join();

    //        // For Short

    //        // men
    //        for (var size in Builder.cartObj_2Shorts['m']) {
    //            var quantity = Builder.cartObj_2Shorts['m'][size];// Product.sku
    //            total_quantity_shorts += Number(quantity || 0);
    //            if (quantity > 0) pairsOption3_Shorts.push(ProductKit['kit_4'].PricingSku + "-" + size.toUpperCase() + "~" + String(quantity));
    //        }
    //        // Women
    //        if (ProductKit['kit_4'].wSku != null) {
    //            for (var size in Builder.cartObj_2Shorts['w']) {
    //                var quantity = Builder.cartObj_2Shorts['w'][size];// Product.sku
    //                total_quantity_shorts += Number(quantity || 0);
    //                if (quantity > 0) pairsOption3_Shorts.push(ProductKit['kit_4'].PricingWSku + "-" + size.toUpperCase() + "~" + String(quantity));
    //            }
    //        }
    //        var artSkuKit4 = svgText.pricing.get_Kit4_SkuArtCount();
    //        $.each(artSkuKit4, function (key, val) {
    //            pairsOption3_Shorts.push(key + '~' + val * total_quantity_shorts);
    //        });

    //        var Singlet_3_ForMen_And_Women = Singlet + ",";
    //        var shorts_3_ForMen_And_Women = pairsOption3_Shorts.join();
    //        var Singlet_3_AndShorts = Singlet_3_ForMen_And_Women.concat(shorts_3_ForMen_And_Women);

    //        var OPTION_3 = Singlet_3_AndShorts
    //        return Singlet_3_AndShorts;
    //    }
    //    if (kitNo == 3) {
    //        var pairsOption4_Shirt = new Array();
    //        var pairsOption4_Shorts = new Array();
    //        var pairsOption4 = new Array();
    //        var ProductName = ProductKit['kit_3'].PricingSku;
    //        var ProductDetail = ProductName.split("_");
    //        var OPTION4_ShirtName = ProductDetail[0];
    //        var OPTION4_ShortsName = ProductDetail[1];
    //        total_quantity = 0;
    //        // For Shirt
    //        // men
    //        for (var size in Builder.cartObj_3Shirt['m']) {
    //            var quantity = Builder.cartObj_3Shirt['m'][size];// Product.sku
    //            total_quantity += Number(quantity || 0);
    //            if (quantity > 0) pairsOption4_Shirt.push(OPTION4_ShirtName + "-" + size.toUpperCase() + "~" + String(quantity));
    //        }
    //        // Women
    //        if (ProductKit['kit_3'].wSku != null) {
    //            for (var size in Builder.cartObj_3Shirt['w']) {
    //                var quantity = Builder.cartObj_3Shirt['w'][size];// Product.sku
    //                total_quantity += Number(quantity || 0);
    //                if (quantity > 0) pairsOption4_Shirt.push(ProductKit['kit_3'].wpricesShirt + "-" + size.toUpperCase() + "~" + String(quantity));
    //            }
    //        }
    //        var shirt = pairsOption4_Shirt.join();
    //        var artSkuKit = svgText.pricing.getKitSkuCount();
    //        var artSkuKit3 = svgText.pricing.get_Kit3_SkuArtCount();
    //        console.log(artSkuKit3);

    //        // men
    //        for (var size in Builder.cartObj_3Shorts['m']) {
    //            var quantity = Builder.cartObj_3Shorts['m'][size];// Product.sku
    //            total_quantity += Number(quantity || 0);
    //            if (quantity > 0) pairsOption4_Shorts.push(OPTION4_ShortsName + "-" + size.toUpperCase() + "~" + String(quantity));
    //        }
    //        // Women
    //        if (ProductKit['kit_3'].wSku != null) {
    //            for (var size in Builder.cartObj_3Shorts['w']) {
    //                var quantity = Builder.cartObj_3Shorts['w'][size];// Product.sku
    //                total_quantity += Number(quantity || 0);
    //                if (quantity > 0) pairsOption4_Shorts.push(ProductKit['kit_3'].wpriceShorts + "-" + size.toUpperCase() + "~" + String(quantity));
    //            }
    //        }
    //        var shirts_4_ForMen_And_Women = shirt + ",";
    //        var shorts_4_ForMen_And_Women = pairsOption4_Shorts.join();
    //        var ShirtAndShortsTemp = shirts_4_ForMen_And_Women.concat(shorts_4_ForMen_And_Women);

    //        $.each(artSkuKit3, function (key, val) {
    //            pairsOption4.push(key + '~' + val * total_quantity);
    //        });
    //        ShirtAndShortsTemp = ShirtAndShortsTemp + "," + pairsOption4.join();
    //        console.log(ShirtAndShortsTemp);
    //        return ShirtAndShortsTemp;
    //    }
    //},
    addToCart: function () {
        Api.call(Api.endpoints.getUser, 'chkUserLogin', function (data) {
            if (data.ID != '0' && data.ID[0] != '-') {
                //  if (data.ID != '0') {
                // user logged in
                $(".user-info-header > a").hide();
                $(".modal.dealer .user-info .name").text(data.FirstName + " " + data.LastName);
                $(".user-info-header > div.name span").text(data.FirstName);
                $(".modal.dealer .user-info .email").text(data.email);
                $(".user-info-header > div").show();

                //start
                {
                    var originalOrderNo = $('#OriginalOrderNo').val();
                    Api.call(Api.endpoints.getDesign, JSON.stringify({
                        guid: Builder.guid
                    }), function (data) {
                        console.log('loadDesign', data, typeof (data));
                        if (data == null) {
                            window.location = "/builder/404";
                        }
                        if (originalOrderNo != "") {
                            if (data.OriginalOrderNo != originalOrderNo) {
                                Api.call(Api.endpoints.saveDesign,
                                    JSON.stringify(Builder.productDataForSaving("NEW", false)),
                                    Builder.acknowledgeSaveQuietly);
                            }
                        }
                        var IsNoPositive = false;
                        var value = parseInt(Builder.userData.ID);
                        if (value < 0) {
                            IsNoPositive = false;
                        }
                        else {
                            IsNoPositive = true;
                        }
                        if (data.Status == "NEW" && Builder.userData.ID > 0 || (Builder.userData.ID.length >= 1 && IsNoPositive === true)) {
                            $(".button.to-cart").addClass("processing");

                            console.log(Builder.guid);
                            var obj = {};
                            //var svgText = $('.svg:first-child').html();
                            var svgText = $('.svg:first').html();
                            var myCanvas = document.getElementById("mySvgCanvas");
                            var ctxt = myCanvas.getContext("2d");

                            $.ajax({
                                // url: "/DesignViewModels/SaveCartImages",
                                url: "/DesignViewModels/SaveCartImagesByImageMaggic",
                                type: "POST",
                                data: { SvgStr: svgText, guid: Builder.guid },
                                dataType: 'json',
                                success: function (response) {
                                    if (response != "" || response != null) {
                                        //  Builder.svgtopng = deepSiteUrl + "/Content/CartImages/" + response;
                                        Builder.svgtopng = deepSiteUrl + "/Content/customizedPngImg/" + response;
                                        var request = Builder.guid + "~" + Builder.svgtopng;
                                        console.log(request);
                                        console.log(Builder.svgtopng);
                                        console.log(Builder.createProductList());
                                        var setupFee = $('#SetupFeeForSinglate').text();
                                        var fee = "";
                                        if (setupFee == "$70.00") {
                                            fee = "SPPC~1";
                                        }
                                        // var detailWithSetupFee = Builder.createProductList() + '~2C' + fee;  
                                        var detailWithSetupFee = Builder.createProductList() + ',' + fee;
                                        console.log(detailWithSetupFee);

                                        console.log({ lstChildProduct: detailWithSetupFee, designId: request, originalOrderNo: originalOrderNo });
                                        $.ajax({
                                            crossDomain: true,
                                            url: ckstoreURL + "/addtockcart.asmx/AddToCart",
                                            //data: { lstChildProduct: Builder.createProductList(), designId: request, },
                                            data: { lstChildProduct: detailWithSetupFee, designId: request, originalOrderNo: originalOrderNo },
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
                                    }
                                },
                                error: function (response, status, e) {
                                    console.log(response);
                                    CK.alert(108);
                                }
                            });
                        }
                    });
                }
                //end
            }
            else {
                Api.call(Api.endpoints.getAdmin, JSON.stringify({}), function (Data) {
                    if (Data != null) {
                        if (Data == "Admin") {
                            // Admin logged in
                            $(".user-info-header > a").hide();
                            $(".user-info-header > div").show();
                        }
                        else {
                            // user not logged in
                            $(".user-info-header > div").hide();
                            $(".user-info-header > a").show();

                            //star
                            $(".error .copy").html("");
                            var IsViewOnly = $('body').hasClass('view-only');
                            if (IsViewOnly !== true) {
                                CK.alert(300);
                            }                            //End
                        }
                    }
                });
            }
        });
    },
    //13-3-2019
    //Important-- "SEND TO DEALER" for Singlate with image attachment
    ConvertSVGintoPNGforDealerForSingleViews: function () {
        var CurrentView = $(".preview-nav a.active").attr('data-view');
        //For Front SVG Start
        var svgText = $('#ForSingleProduct_Front:first-child').html();
        CurrentView = $(".preview-nav a.active").attr('data-view');
        $.ajax({
            url: "/DesignViewModels/SvgToPngGetPhysicalPathForDealer",
            type: "POST",
            data: { SvgStr: svgText, guid: Builder.guid, View: "_Front" },
            beforeSend: function () {      // Important-Hide loader while uploading Browse image in Artwork
                $(".lds-wrapper").show();
            },
            dataType: 'json',
            success: function (response) {
                if (response != "" || response != null) {
                    var ImgPath = "";
                    var ImgPhysicalPathFront = response;
                    ImgPath = ImgPhysicalPathFront;
                    console.log(ImgPhysicalPathFront);
                    sessionStorage.setItem("Front_SVG", ImgPhysicalPathFront);
                    //For Dealer start functonility
                    var ImgPath = "";
                    var ImgPhysicalPathRight = response;
                    ImgPath = ImgPhysicalPathRight;
                    console.log(ImgPhysicalPathRight);

                    var Front = sessionStorage.getItem("Front_SVG");
                    var Back = "";
                    var Left = "";
                    var Right = "";

                    var dealer_email = "";
                    var cliffkeen_email = "";
                    var message = "";
                    dealer_email = $(".modal.dealer #dealer-email").val();
                    var CurrentPageUrl = window.location.href;
                    if ($("#cliffkeen_checkbox").prop('checked') == true) {
                        cliffkeen_email = $(".modal.dealer #cliffkeen-email").val();
                        message = $(".modal.dealer textarea#EmailNotes").val();
                        // Api.call(Api.endpoints.AssignDesignToDealerSubmit, JSON.stringify({ "id": Builder.id, "DealerEmail": cliffkeen_email, "message": message, "ImagePathFront": Front, "ImagePathBack": Back, "ImagePathLeft": Left, "ImagePathRight": Right, "CurrentPageUrl": CurrentPageUrl }), function () {
                        Api.call(Api.endpoints.AssignDesignToDealerSubmit, JSON.stringify({ "id": Builder.id, "DealerEmail": cliffkeen_email, "message": message, "CurrentPageUrl": CurrentPageUrl }), function () {
                            Api.call(Api.endpoints.saveDesign,
                                JSON.stringify(Builder.productDataForSaving("with-dealer", false)),
                                function () {
                                    $(".modal.dealer .close").trigger('click');
                                    location.href = "/locker";
                                });
                        });
                    }
                    else {
                        //Api.call(Api.endpoints.AssignDesignToDealerSubmit, JSON.stringify({ "id": Builder.id, "DealerID": Builder.chosenDealer.id, "DealerEmail": Builder.chosenDealer.email, "message": $(".modal.dealer textarea#EmailNotes").val(), "ImagePathFront": Front, "ImagePathBack": Back, "ImagePathLeft": Left, "ImagePathRight": Right, "CurrentPageUrl": CurrentPageUrl }), function (response) {
                        Api.call(Api.endpoints.AssignDesignToDealerSubmit, JSON.stringify({ "id": Builder.id, "DealerID": Builder.chosenDealer.id, "DealerEmail": Builder.chosenDealer.email, "message": $(".modal.dealer textarea#EmailNotes").val(), "CurrentPageUrl": CurrentPageUrl }), function (response) {
                            Api.call(Api.endpoints.saveDesign,
                                JSON.stringify(Builder.productDataForSaving("with-dealer", false)),
                                function () {
                                    var code = 301;
                                    CK.alert(code);
                                    $(".modal.dealer .close").trigger('click');
                                    window.location = "/locker";
                                });
                        });
                    }
                    //For Dealer End Functonility
                }
            },
            error: function (response, status, e) {
                console.log(response);
                CK.alert(108);
            }
        });
        //For Front SVG End
    },
    ConvertSVGintoPNGforDealerForTwoViews: function () {
        var CurrentView = $(".preview-nav a.active").attr('data-view');
        //For Front SVG Start
        var svgText = $('#ForSingleProduct_Front:first-child').html();
        CurrentView = $(".preview-nav a.active").attr('data-view')
        $.ajax({
            url: "/DesignViewModels/SvgToPngGetPhysicalPathForDealer",
            type: "POST",
            data: { SvgStr: svgText, guid: Builder.guid, View: "_Front" },
            beforeSend: function () {      // Important-Hide loader while uploading Browse image in Artwork
                $(".lds-wrapper").show();
            },
            dataType: 'json',
            success: function (response) {
                if (response != "" || response != null) {
                    var ImgPath = "";
                    var ImgPhysicalPathFront = response;
                    ImgPath = ImgPhysicalPathFront;
                    console.log(ImgPhysicalPathFront);
                    sessionStorage.setItem("Front_SVG", ImgPhysicalPathFront);
                    //For Front SVG End
                    //For Back SVG Start
                    var svgText = $('#ForSingleProduct_Back:first-child').html();
                    CurrentView = $(".preview-nav a.active").attr('data-view')
                    $.ajax({
                        url: "/DesignViewModels/SvgToPngGetPhysicalPathForDealer",
                        type: "POST",
                        data: { SvgStr: svgText, guid: Builder.guid, View: "_Back" },
                        beforeSend: function () {      // Important-Hide loader while uploading Browse image in Artwork
                            $(".lds-wrapper").show();
                        },
                        dataType: 'json',
                        success: function (response) {
                            if (response != "" || response != null) {
                                var ImgPath = "";
                                var ImgPhysicalPathBack = response;
                                ImgPath = ImgPhysicalPathBack;
                                console.log(ImgPhysicalPathBack);
                                sessionStorage.setItem("Back_SVG", ImgPhysicalPathBack);
                                //For Back SVG End

                                var Front = sessionStorage.getItem("Front_SVG");
                                var Back = sessionStorage.getItem("Back_SVG");
                                var Left = "";
                                var Right = "";

                                var dealer_email = "";
                                var cliffkeen_email = "";
                                var message = "";
                                var CurrentPageUrl = window.location.href;
                                dealer_email = $(".modal.dealer #dealer-email").val();
                                if ($("#cliffkeen_checkbox").prop('checked') == true) {
                                    cliffkeen_email = $(".modal.dealer #cliffkeen-email").val();
                                    message = $(".modal.dealer textarea#EmailNotes").val();
                                    // Api.call(Api.endpoints.AssignDesignToDealerSubmit, JSON.stringify({ "id": Builder.id, "DealerEmail": cliffkeen_email, "message": message, "ImagePathFront": Front, "ImagePathBack": Back, "ImagePathLeft": Left, "ImagePathRight": Right, "CurrentPageUrl": CurrentPageUrl }), function () {
                                    Api.call(Api.endpoints.AssignDesignToDealerSubmit, JSON.stringify({ "id": Builder.id, "DealerEmail": cliffkeen_email, "message": message, "CurrentPageUrl": CurrentPageUrl }), function () {
                                        Api.call(Api.endpoints.saveDesign,
                                            JSON.stringify(Builder.productDataForSaving("with-dealer", false)),
                                            function () {
                                                $(".modal.dealer .close").trigger('click');
                                                location.href = "/locker";
                                            });
                                    });
                                }
                                else {
                                    //Api.call(Api.endpoints.AssignDesignToDealerSubmit, JSON.stringify({ "id": Builder.id, "DealerID": Builder.chosenDealer.id, "DealerEmail": Builder.chosenDealer.email, "message": $(".modal.dealer textarea#EmailNotes").val(), "ImagePathFront": Front, "ImagePathBack": Back, "ImagePathLeft": Left, "ImagePathRight": Right, "CurrentPageUrl": CurrentPageUrl }), function (response) {
                                    Api.call(Api.endpoints.AssignDesignToDealerSubmit, JSON.stringify({ "id": Builder.id, "DealerID": Builder.chosenDealer.id, "DealerEmail": Builder.chosenDealer.email, "message": $(".modal.dealer textarea#EmailNotes").val(), "CurrentPageUrl": CurrentPageUrl }), function (response) {
                                        Api.call(Api.endpoints.saveDesign,
                                            JSON.stringify(Builder.productDataForSaving("with-dealer", false)),
                                            function () {
                                                var code = 301;
                                                CK.alert(code);
                                                $(".modal.dealer .close").trigger('click');
                                                window.location = "/locker";
                                            });
                                    });
                                }

                            }
                        },
                        error: function (response, status, e) {
                            console.log(response);
                            CK.alert(108);
                        }
                    });
                    //For Back SVG End
                }
            },
            error: function (response, status, e) {
                console.log(response);
                CK.alert(108);
            }
        });
        //For Front SVG End
    },
    ConvertSVGintoPNGforDealerForThreeViews: function () {
        var CurrentView = $(".preview-nav a.active").attr('data-view');
        //For Front SVG Start
        var svgText = $('#ForSingleProduct_Front:first-child').html();
        CurrentView = $(".preview-nav a.active").attr('data-view')
        var myCanvas = document.getElementById("mySvgCanvasforsaveshare");
        var ctxt = myCanvas.getContext("2d");
        ctxt.clearRect(0, 0, 300, 600); // Clear the Canvas (If we click on front View other views will be automatically deleted)
        function drawInlineSVG(ctxt, rawSVG, callback) {
            var svg = new Blob([rawSVG], { type: "image/svg+xml;charset=utf-8" }),
                domURL = self.URL || self.webkitURL || self,
                url = domURL.createObjectURL(svg),
                img = new Image;
            img.crossOrigin = "Anonymous";

            img.onload = function () {
                ctxt.drawImage(this, 0, 0);
                domURL.revokeObjectURL(url);
                callback(this);
            };
            img.src = url;
        }
        drawInlineSVG(ctxt, svgText, function () {
            //  console.log(myCanvas.toDataURL("image/png"));  // -> PNG data-uri
            Builder.svgtopng = myCanvas.toDataURL("image/png");
            console.log(Builder.svgtopng);
            var svgbase64 = Builder.svgtopng.split(';base64,').pop();
            var obj = { SvgStr: svgbase64, guid: Builder.guid, View: "_Front" };
            $.ajax({
                url: "/DesignViewModels/SaveSharingImageWithMail",
                type: "POST",
                data: obj,
                beforeSend: function () {      // Important-Hide loader while uploading Browse image in Artwork
                    $(".lds-wrapper").show();
                },
                dataType: 'json',
                success: function (response) {
                    if (response != "" || response != null) {
                        var ImgPath = "";
                        var ImgPhysicalPathFront = response;
                        ImgPath = ImgPhysicalPathFront;
                        console.log(ImgPhysicalPathFront);
                        sessionStorage.setItem("Front_SVG", ImgPhysicalPathFront);
                        //For Front SVG End
                        //For Back SVG Start
                        var svgText = $('#ForSingleProduct_Back:first-child').html();
                        CurrentView = $(".preview-nav a.active").attr('data-view')
                        var myCanvas = document.getElementById("mySvgCanvasforsaveshare");
                        var ctxt = myCanvas.getContext("2d");
                        ctxt.clearRect(0, 0, 300, 600); // Clear the Canvas (If we click on front View other views will be automatically deleted)
                        function drawInlineSVG(ctxt, rawSVG, callback) {
                            var svg = new Blob([rawSVG], { type: "image/svg+xml;charset=utf-8" }),
                                domURL = self.URL || self.webkitURL || self,
                                url = domURL.createObjectURL(svg),
                                img = new Image;
                            img.crossOrigin = "Anonymous";

                            img.onload = function () {
                                ctxt.drawImage(this, 0, 0);
                                domURL.revokeObjectURL(url);
                                callback(this);
                            };
                            img.src = url;
                        }
                        drawInlineSVG(ctxt, svgText, function () {
                            Builder.svgtopng = myCanvas.toDataURL("image/png");
                            console.log(Builder.svgtopng);
                            var svgbase64 = Builder.svgtopng.split(';base64,').pop();
                            var obj = { SvgStr: svgbase64, guid: Builder.guid, View: "_Back" };
                            $.ajax({
                                url: "/DesignViewModels/SaveSharingImageWithMail",
                                type: "POST",
                                data: obj,
                                beforeSend: function () {      // Important-Hide loader while uploading Browse image in Artwork
                                    $(".lds-wrapper").show();
                                },
                                dataType: 'json',
                                success: function (response) {
                                    if (response != "" || response != null) {
                                        var ImgPath = "";
                                        var ImgPhysicalPathBack = response;
                                        ImgPath = ImgPhysicalPathBack;
                                        console.log(ImgPhysicalPathBack);
                                        sessionStorage.setItem("Back_SVG", ImgPhysicalPathBack);
                                        //For Back SVG End

                                        //For Left Svg Start
                                        var svgText = $('#ForSingleProduct_Left:first-child').html();
                                        if (svgText != "") {
                                            CurrentView = $(".preview-nav a.active").attr('data-view')
                                            var myCanvas = document.getElementById("mySvgCanvasforsaveshare");
                                            var ctxt = myCanvas.getContext("2d");
                                            ctxt.clearRect(0, 0, 300, 600); // Clear the Canvas (If we click on front View other views will be automatically deleted)
                                            function drawInlineSVG(ctxt, rawSVG, callback) {
                                                var svg = new Blob([rawSVG], { type: "image/svg+xml;charset=utf-8" }),
                                                    domURL = self.URL || self.webkitURL || self,
                                                    url = domURL.createObjectURL(svg),
                                                    img = new Image;
                                                img.crossOrigin = "Anonymous";

                                                img.onload = function () {
                                                    ctxt.drawImage(this, 0, 0);
                                                    domURL.revokeObjectURL(url);
                                                    callback(this);
                                                };
                                                img.src = url;
                                            }
                                        }
                                        drawInlineSVG(ctxt, svgText, function () {
                                            //  console.log(myCanvas.toDataURL("image/png"));  // -> PNG data-uri
                                            Builder.svgtopng = myCanvas.toDataURL("image/png");
                                            console.log(Builder.svgtopng);
                                            var svgbase64 = Builder.svgtopng.split(';base64,').pop();
                                            var obj = { SvgStr: svgbase64, guid: Builder.guid, View: "_Left" };
                                            $.ajax({
                                                url: "/DesignViewModels/SaveSharingImageWithMail",
                                                type: "POST",
                                                data: obj,
                                                beforeSend: function () {      // Important-Hide loader while uploading Browse image in Artwork
                                                    $(".lds-wrapper").show();
                                                },
                                                dataType: 'json',
                                                success: function (response) {
                                                    if (response != "" || response != null) {
                                                        var ImgPath = "";
                                                        var ImgPhysicalPathLeft = response;
                                                        ImgPath = ImgPhysicalPathLeft;
                                                        console.log(ImgPhysicalPathLeft);
                                                        sessionStorage.setItem("Left_SVG", ImgPhysicalPathLeft);
                                                        // For Left Svg End

                                                        //For Dealer start functonility
                                                        var ImgPath = "";
                                                        var ImgPhysicalPathRight = response;
                                                        ImgPath = ImgPhysicalPathRight;
                                                        console.log(ImgPhysicalPathRight);

                                                        var Front = sessionStorage.getItem("Front_SVG");
                                                        var Back = sessionStorage.getItem("Back_SVG");
                                                        var Left = sessionStorage.getItem("Left_SVG");
                                                        var Right = "";

                                                        var dealer_email = "";
                                                        var cliffkeen_email = "";
                                                        var message = "";
                                                        dealer_email = $(".modal.dealer #dealer-email").val();
                                                        if ($("#cliffkeen_checkbox").prop('checked') == true) {
                                                            cliffkeen_email = $(".modal.dealer #cliffkeen-email").val();
                                                            message = $(".modal.dealer textarea#EmailNotes").val();
                                                            Api.call(Api.endpoints.AssignDesignToDealerSubmit, JSON.stringify({ "id": Builder.id, "DealerEmail": cliffkeen_email, "message": message, "ImagePathFront": Front, "ImagePathBack": Back, "ImagePathLeft": Left, "ImagePathRight": Right }), function () {
                                                                Api.call(Api.endpoints.saveDesign,
                                                                    JSON.stringify(Builder.productDataForSaving("with-dealer", false)),
                                                                    function () {
                                                                        $(".modal.dealer .close").trigger('click');
                                                                        location.href = "/locker";
                                                                    });
                                                            });
                                                        }
                                                        else {
                                                            Api.call(Api.endpoints.AssignDesignToDealerSubmit, JSON.stringify({ "id": Builder.id, "DealerID": Builder.chosenDealer.id, "DealerEmail": Builder.chosenDealer.email, "message": $(".modal.dealer textarea#EmailNotes").val(), "ImagePathFront": Front, "ImagePathBack": Back, "ImagePathLeft": Left, "ImagePathRight": Right }), function (response) {
                                                                Api.call(Api.endpoints.saveDesign,
                                                                    JSON.stringify(Builder.productDataForSaving("with-dealer", false)),
                                                                    function () {
                                                                        var code = 301;
                                                                        CK.alert(code);
                                                                        $(".modal.dealer .close").trigger('click');
                                                                        window.location = "/locker";
                                                                    });
                                                            });
                                                        }
                                                        //For Dealer End Functonility
                                                    }
                                                },
                                                error: function (response, status, e) {
                                                    console.log(response);
                                                    CK.alert(108);
                                                }
                                            });
                                        });

                                        // For Left Svg End
                                    }
                                },
                                error: function (response, status, e) {
                                    console.log(response);
                                    CK.alert(108);
                                }
                            });
                        });

                        //For Back SVG End
                    }
                },
                error: function (response, status, e) {
                    console.log(response);
                    CK.alert(108);
                }
            });
        });
        //For Front SVG End
    },
    ConvertSVGintoPNGforDealerForFourViews: function () {
        var CurrentView = $(".preview-nav a.active").attr('data-view');
        //For Front SVG Start
        var svgText = $('#ForSingleProduct_Front:first-child').html();
        CurrentView = $(".preview-nav a.active").attr('data-view')
        var myCanvas = document.getElementById("mySvgCanvasforsaveshare");
        var ctxt = myCanvas.getContext("2d");
        ctxt.clearRect(0, 0, 300, 600); // Clear the Canvas (If we click on front View other views will be automatically deleted)
        // drawInlineSVG(ctxt, svgText, function () {
        //  console.log(myCanvas.toDataURL("image/png"));  // -> PNG data-uri

        //  var obj = { SvgStr: svgText, guid: Builder.guid, View: "_Front" };
        $.ajax({
            url: "/DesignViewModels/SvgToPngGetPhysicalPathForDealer",
            type: "POST",
            data: { SvgStr: svgText, guid: Builder.guid, View: "_Front" },
            beforeSend: function () {      // Important-Hide loader while uploading Browse image in Artwork
                $(".lds-wrapper").show();
            },
            dataType: 'json',
            success: function (response) {
                if (response != "" || response != null) {
                    var ImgPath = "";
                    var ImgPhysicalPathFront = response;
                    ImgPath = ImgPhysicalPathFront;
                    console.log(ImgPhysicalPathFront);
                    sessionStorage.setItem("Front_SVG", ImgPhysicalPathFront);
                    //For Front SVG End
                    //For Back SVG Start
                    var svgText = $('#ForSingleProduct_Back:first-child').html();
                    CurrentView = $(".preview-nav a.active").attr('data-view')
                    var myCanvas = document.getElementById("mySvgCanvasforsaveshare");
                    var ctxt = myCanvas.getContext("2d");
                    ctxt.clearRect(0, 0, 300, 600); // Clear the Canvas (If we click on front View other views will be automatically deleted)
                    // drawInlineSVG(ctxt, svgText, function () {                                                   
                    $.ajax({
                        url: "/DesignViewModels/SvgToPngGetPhysicalPathForDealer",
                        type: "POST",
                        data: { SvgStr: svgText, guid: Builder.guid, View: "_Back" },
                        beforeSend: function () {      // Important-Hide loader while uploading Browse image in Artwork
                            $(".lds-wrapper").show();
                        },
                        dataType: 'json',
                        success: function (response) {
                            if (response != "" || response != null) {
                                var ImgPath = "";
                                var ImgPhysicalPathBack = response;
                                ImgPath = ImgPhysicalPathBack;
                                console.log(ImgPhysicalPathBack);
                                sessionStorage.setItem("Back_SVG", ImgPhysicalPathBack);
                                //For Back SVG End

                                //For Left Svg Start
                                var svgText = $('#ForSingleProduct_Left:first-child').html();
                                // drawInlineSVG(ctxt, svgText, function () {
                                //  console.log(myCanvas.toDataURL("image/png"));  // -> PNG data-uri                                                                                     
                                $.ajax({
                                    url: "/DesignViewModels/SvgToPngGetPhysicalPathForDealer",
                                    type: "POST",
                                    data: { SvgStr: svgText, guid: Builder.guid, View: "_Left" },
                                    beforeSend: function () {      // Important-Hide loader while uploading Browse image in Artwork
                                        $(".lds-wrapper").show();
                                    },
                                    dataType: 'json',
                                    success: function (response) {
                                        if (response != "" || response != null) {
                                            var ImgPath = "";
                                            var ImgPhysicalPathLeft = response;
                                            ImgPath = ImgPhysicalPathLeft;
                                            console.log(ImgPhysicalPathLeft);
                                            sessionStorage.setItem("Left_SVG", ImgPhysicalPathLeft);
                                            // For Left Svg End
                                            // For Right Start
                                            var svgText = $('#ForSingleProduct_Right:first-child').html();
                                            //  drawInlineSVG(ctxt, svgText, function () {
                                            //  console.log(myCanvas.toDataURL("image/png"));  // -> PNG data-uri                                                                                                                     
                                            $.ajax({
                                                url: "/DesignViewModels/SvgToPngGetPhysicalPathForDealer",
                                                type: "POST",
                                                data: { SvgStr: svgText, guid: Builder.guid, View: "_Right" },
                                                beforeSend: function () {      // Important-Hide loader while uploading Browse image in Artwork
                                                    $(".lds-wrapper").show();
                                                },
                                                dataType: 'json',
                                                success: function (response) {
                                                    if (response != "" || response != null) {
                                                        var ImgPath = "";
                                                        var ImgPhysicalPathLeft = response;
                                                        ImgPath = ImgPhysicalPathLeft;
                                                        console.log(ImgPhysicalPathLeft);
                                                        sessionStorage.setItem("Right_SVG", ImgPhysicalPathLeft);
                                                        //For Right End

                                                        //For Dealer start functonility
                                                        var ImgPath = "";
                                                        var ImgPhysicalPathRight = response;
                                                        ImgPath = ImgPhysicalPathRight;
                                                        console.log(ImgPhysicalPathRight);
                                                        var Front = sessionStorage.getItem("Front_SVG");
                                                        var Back = sessionStorage.getItem("Back_SVG");
                                                        var Left = sessionStorage.getItem("Left_SVG");
                                                        var Right = sessionStorage.getItem("Right_SVG");

                                                        var dealer_email = "";
                                                        var cliffkeen_email = "";
                                                        var message = "";
                                                        dealer_email = $(".modal.dealer #dealer-email").val();

                                                        var CurrentPageUrl = window.location.href;
                                                        if ($("#cliffkeen_checkbox").prop('checked') == true) {
                                                            cliffkeen_email = $(".modal.dealer #cliffkeen-email").val();
                                                            message = $(".modal.dealer textarea#EmailNotes").val();

                                                            //  Api.call(Api.endpoints.AssignDesignToDealerSubmit, JSON.stringify({ "id": Builder.id, "DealerEmail": cliffkeen_email, "message": message, "ImagePathFront": Front, "ImagePathBack": Back, "ImagePathLeft": Left, "ImagePathRight": Right, "CurrentPageUrl": CurrentPageUrl }), function () {
                                                            Api.call(Api.endpoints.AssignDesignToDealerSubmit, JSON.stringify({ "id": Builder.id, "DealerEmail": cliffkeen_email, "message": message, "CurrentPageUrl": CurrentPageUrl }), function () {

                                                                Api.call(Api.endpoints.saveDesign,
                                                                    JSON.stringify(Builder.productDataForSaving("with-dealer", false)),
                                                                    function () {
                                                                        $(".modal.dealer .close").trigger('click');
                                                                        location.href = "/locker";
                                                                    });
                                                            });
                                                        }
                                                        else {
                                                            // Api.call(Api.endpoints.AssignDesignToDealerSubmit, JSON.stringify({ "id": Builder.id, "DealerID": Builder.chosenDealer.id, "DealerEmail": Builder.chosenDealer.email, "message": $(".modal.dealer textarea#EmailNotes").val(), "ImagePathFront": Front, "ImagePathBack": Back, "ImagePathLeft": Left,"ImagePathRight": Right, "CurrentPageUrl": CurrentPageUrl }), function (response) {
                                                            Api.call(Api.endpoints.AssignDesignToDealerSubmit, JSON.stringify({ "id": Builder.id, "DealerID": Builder.chosenDealer.id, "DealerEmail": Builder.chosenDealer.email, "message": $(".modal.dealer textarea#EmailNotes").val(), "CurrentPageUrl": CurrentPageUrl }), function (response) {
                                                                Api.call(Api.endpoints.saveDesign,
                                                                    JSON.stringify(Builder.productDataForSaving("with-dealer", false)),
                                                                    function () {
                                                                        var code = 301;
                                                                        CK.alert(code);
                                                                        $(".modal.dealer .close").trigger('click');
                                                                        window.location = "/locker";
                                                                    });
                                                            });
                                                        }
                                                        //For Dealer End Functonility
                                                    }
                                                },
                                                error: function (response, status, e) {
                                                    console.log(response);
                                                    CK.alert(108);
                                                }
                                            });
                                            // });
                                            //For Right End
                                        }
                                    },
                                    error: function (response, status, e) {
                                        console.log(response);
                                        CK.alert(108);
                                    }
                                });
                                //   });

                                // For Left Svg End
                            }
                        },
                        error: function (response, status, e) {
                            console.log(response);
                            CK.alert(108);
                        }
                    });
                    //   });

                    //For Back SVG End
                }
            },
            error: function (response, status, e) {
                console.log(response);
                CK.alert(108);
            }
        });
        // });
        //For Front SVG End
    },


    //13-3-2019
    //Important--   "SEND TO DEALER" for Kit ection with image attachment
    ConvertSVGintoPNGforDealerForSingleViewsForKit: function () {
        var ActiveKit = $('.kit.active span.active').attr('data-count');
        //For Front SVG Start
        switch (ActiveKit) {
            case "0":
                var svgText = $('#option1ForKit_0_Front:first-child').html();
                break;
            case "1":
                var svgText = $('#option2ForKit_1_Front:first-child').html();
                break;
            case "2":
                var svgText = $('#option3ForKit_2_Front:first-child').html();
                break;
            case "3":
                var svgText = $('#option4ForKit_3_Front:first-child').html();
                break;
            case "4":
                var svgText = $('#option3ForKit_4_Front:first-child').html();
                break;
        }
        $.ajax({
            url: "/DesignViewModels/SvgToPngGetPhysicalPathForDealer",
            type: "POST",
            data: { SvgStr: svgText, guid: Builder.guid, View: "_Front" },
            beforeSend: function () {      // Important-Hide loader while uploading Browse image in Artwork
                $(".lds-wrapper").show();
            },
            dataType: 'json',
            success: function (response) {
                if (response != "" || response != null) {
                    var ImgPath = "";
                    var ImgPhysicalPathFront = response;
                    ImgPath = ImgPhysicalPathFront;
                    console.log(ImgPhysicalPathFront);
                    sessionStorage.setItem("Front_SVG", ImgPhysicalPathFront);
                    //For Dealer start functonility
                    var ImgPath = "";
                    var ImgPhysicalPathRight = response;
                    ImgPath = ImgPhysicalPathRight;
                    console.log(ImgPhysicalPathRight);
                    var Front = sessionStorage.getItem("Front_SVG");
                    var Back = "";
                    var Left = "";
                    var Right = "";

                    var dealer_email = "";
                    var cliffkeen_email = "";
                    var message = "";

                    var CurrentPageUrl = window.location.href;

                    dealer_email = $(".modal.dealer #dealer-email").val();
                    if ($("#cliffkeen_checkbox").prop('checked') == true) {
                        cliffkeen_email = $(".modal.dealer #cliffkeen-email").val();
                        message = $(".modal.dealer textarea#EmailNotes").val();
                        // Api.call(Api.endpoints.AssignDesignToDealerSubmit, JSON.stringify({ "id": Builder.id, "DealerEmail": cliffkeen_email, "message": message, "ImagePathFront": Front, "ImagePathBack": Back, "ImagePathLeft": Left, "ImagePathRight": Right, "CurrentPageUrl": CurrentPageUrl }), function () {
                        Api.call(Api.endpoints.AssignDesignToDealerSubmit, JSON.stringify({ "id": Builder.id, "DealerEmail": cliffkeen_email, "message": message, "CurrentPageUrl": CurrentPageUrl }), function () {
                            Api.call(Api.endpoints.saveDesign,
                                JSON.stringify(Builder.productDataForSaving("with-dealer", false)),
                                function () {
                                    $(".modal.dealer .close").trigger('click');
                                    location.href = "/locker";
                                });
                        });
                    }
                    else {
                        // Api.call(Api.endpoints.AssignDesignToDealerSubmit, JSON.stringify({ "id": Builder.id, "DealerID": Builder.chosenDealer.id, "DealerEmail": Builder.chosenDealer.email, "message": $(".modal.dealer textarea#EmailNotes").val(), "ImagePathFront": Front, "ImagePathBack": Back, "ImagePathLeft": Left, "ImagePathRight": Right, "CurrentPageUrl": CurrentPageUrl }), function (response) {
                        Api.call(Api.endpoints.AssignDesignToDealerSubmit, JSON.stringify({ "id": Builder.id, "DealerID": Builder.chosenDealer.id, "DealerEmail": Builder.chosenDealer.email, "message": $(".modal.dealer textarea#EmailNotes").val(), "CurrentPageUrl": CurrentPageUrl }), function (response) {
                            Api.call(Api.endpoints.saveDesign,
                                JSON.stringify(Builder.productDataForSaving("with-dealer", false)),
                                function () {
                                    var code = 301;
                                    CK.alert(code);
                                    $(".modal.dealer .close").trigger('click');
                                    window.location = "/locker";
                                });
                        });
                    }
                    //For Dealer End Functonility
                }
            },
            error: function (response, status, e) {
                console.log(response);
                CK.alert(108);
            }
        });
        //  });
        //For Front SVG End
    },
    ConvertSVGintoPNGforDealerForTwoViewsForKit: function () {
        //For Front SVG Start  
        var ActiveKit = $('.kit.active span.active').attr('data-count');
        switch (ActiveKit) {
            case "0":
                var svgText = $('#option1ForKit_0_Front:first-child').html();
                break;
            case "1":
                var svgText = $('#option2ForKit_1_Front:first-child').html();
                break;
            case "2":
                var svgText = $('#option3ForKit_2_Front:first-child').html();
                break;
            case "3":
                var svgText = $('#option4ForKit_3_Front:first-child').html();
                break;
            case "4":
                var svgText = $('#option3ForKit_4_Front:first-child').html();
                break;
        }
        $.ajax({
            url: "/DesignViewModels/SvgToPngGetPhysicalPathForDealer",
            type: "POST",
            data: { SvgStr: svgText, guid: Builder.guid, View: "_Front" },
            beforeSend: function () {      // Important-Hide loader while uploading Browse image in Artwork
                $(".lds-wrapper").show();
            },
            dataType: 'json',
            success: function (response) {
                if (response != "" || response != null) {
                    var ImgPath = "";
                    var ImgPhysicalPathFront = response;
                    ImgPath = ImgPhysicalPathFront;
                    console.log(ImgPhysicalPathFront);
                    sessionStorage.setItem("Front_SVG", ImgPhysicalPathFront);
                    //For Front SVG End
                    //For Back SVG Start  
                    var ActiveKit = $('.kit.active span.active').attr('data-count');
                    switch (ActiveKit) {
                        case "0":
                            var svgText = $('#option1ForKit_0_Back:first-child').html();
                            break;
                        case "1":
                            var svgText = $('#option2ForKit_1_Back:first-child').html();
                            break;
                        case "2":
                            var svgText = $('#option3ForKit_2_Back:first-child').html();
                            break;
                        case "3":
                            var svgText = $('#option4ForKit_3_Back:first-child').html();
                            break;
                        case "4":
                            var svgText = $('#option3ForKit_4_Back:first-child').html();
                            break;
                    }
                    $.ajax({
                        url: "/DesignViewModels/SvgToPngGetPhysicalPathForDealer",
                        type: "POST",
                        data: { SvgStr: svgText, guid: Builder.guid, View: "_Back" },
                        beforeSend: function () {      // Important-Hide loader while uploading Browse image in Artwork
                            $(".lds-wrapper").show();
                        },
                        dataType: 'json',
                        success: function (response) {
                            if (response != "" || response != null) {
                                var ImgPath = "";
                                var ImgPhysicalPathBack = response;
                                ImgPath = ImgPhysicalPathBack;
                                console.log(ImgPhysicalPathBack);
                                sessionStorage.setItem("Back_SVG", ImgPhysicalPathBack);
                                //For Back SVG End

                                //For Dealer start functonility
                                var ImgPath = "";
                                var ImgPhysicalPathRight = response;
                                ImgPath = ImgPhysicalPathRight;
                                console.log(ImgPhysicalPathRight);

                                var Front = sessionStorage.getItem("Front_SVG");
                                var Back = sessionStorage.getItem("Back_SVG");
                                var Left = "";
                                var Right = "";

                                var dealer_email = "";
                                var cliffkeen_email = "";
                                var message = "";
                                var CurrentPageUrl = window.location.href;

                                dealer_email = $(".modal.dealer #dealer-email").val();
                                if ($("#cliffkeen_checkbox").prop('checked') == true) {
                                    cliffkeen_email = $(".modal.dealer #cliffkeen-email").val();
                                    message = $(".modal.dealer textarea#EmailNotes").val();
                                    // Api.call(Api.endpoints.AssignDesignToDealerSubmit, JSON.stringify({ "id": Builder.id, "DealerEmail": cliffkeen_email, "message": message, "ImagePathFront": Front, "ImagePathBack": Back, "ImagePathLeft": Left, "ImagePathRight": Right, "CurrentPageUrl": CurrentPageUrl }), function () {
                                    Api.call(Api.endpoints.AssignDesignToDealerSubmit, JSON.stringify({ "id": Builder.id, "DealerEmail": cliffkeen_email, "message": message, "CurrentPageUrl": CurrentPageUrl }), function () {
                                        Api.call(Api.endpoints.saveDesign,
                                            JSON.stringify(Builder.productDataForSaving("with-dealer", false)),
                                            function () {
                                                $(".modal.dealer .close").trigger('click');
                                                location.href = "/locker";
                                            });
                                    });
                                }
                                else {
                                    // Api.call(Api.endpoints.AssignDesignToDealerSubmit, JSON.stringify({ "id": Builder.id, "DealerID": Builder.chosenDealer.id, "DealerEmail": Builder.chosenDealer.email, "message": $(".modal.dealer textarea#EmailNotes").val(), "ImagePathFront": Front, "ImagePathBack": Back, "ImagePathLeft": Left, "ImagePathRight": Right, "CurrentPageUrl": CurrentPageUrl }), function (response) {
                                    Api.call(Api.endpoints.AssignDesignToDealerSubmit, JSON.stringify({ "id": Builder.id, "DealerID": Builder.chosenDealer.id, "DealerEmail": Builder.chosenDealer.email, "message": $(".modal.dealer textarea#EmailNotes").val(), "CurrentPageUrl": CurrentPageUrl }), function (response) {
                                        Api.call(Api.endpoints.saveDesign,
                                            JSON.stringify(Builder.productDataForSaving("with-dealer", false)),
                                            function () {
                                                var code = 301;
                                                CK.alert(code);
                                                $(".modal.dealer .close").trigger('click');
                                                window.location = "/locker";
                                            });
                                    });
                                }
                                //For Dealer End Functonility                                      
                            }
                        },
                        error: function (response, status, e) {
                            console.log(response);
                            CK.alert(108);
                        }
                    });
                    //For Back SVG End
                }
            },
            error: function (response, status, e) {
                console.log(response);
                CK.alert(108);
            }
        });
        //For Front SVG End
    },
    ConvertSVGintoPNGforDealerForThreeViewsForKit: function () {
        //For Front SVG Start
        var ActiveKit = $('.kit.active span.active').attr('data-count');
        switch (ActiveKit) {
            case "0":
                var svgText = $('#option1ForKit_0_Front:first-child').html();
                break;
            case "1":
                var svgText = $('#option2ForKit_1_Front:first-child').html();
                break;
            case "2":
                var svgText = $('#option3ForKit_2_Front:first-child').html();
                break;
            case "3":
                var svgText = $('#option4ForKit_3_Front:first-child').html();
                break;
            case "4":
                var svgText = $('#option3ForKit_4_Front:first-child').html();
                break;
        }
        //CurrentView = $(".preview-nav a.active").attr('data-view')
        //var myCanvas = document.getElementById("mySvgCanvasforsaveshare");
        //var ctxt = myCanvas.getContext("2d");
        //ctxt.clearRect(0, 0, 300, 600); // Clear the Canvas (If we click on front View other views will be automatically deleted)
        //function drawInlineSVG(ctxt, rawSVG, callback) {
        //    var svg = new Blob([rawSVG], { type: "image/svg+xml;charset=utf-8" }),
        //        domURL = self.URL || self.webkitURL || self,
        //        url = domURL.createObjectURL(svg),
        //        img = new Image;
        //    img.crossOrigin = "Anonymous";

        //    img.onload = function () {
        //        ctxt.drawImage(this, 0, 0);
        //        domURL.revokeObjectURL(url);
        //        callback(this);
        //    };
        //    img.src = url;
        //}
        var myCanvas = document.getElementById("mySvgCanvasForKit");
        var ctxt = myCanvas.getContext("2d");
        ctxt.clearRect(0, 0, 700, 800); // Clear the Canvas (If we click on front View other views will be automatically deleted)
        function drawInlineSVG(ctxt, rawSVG, callback) {

            var svg = new Blob([rawSVG], { type: "image/svg+xml;charset=utf-8" }),
                domURL = self.URL || self.webkitURL || self,
                url = domURL.createObjectURL(svg),
                img = new Image;
            img.crossOrigin = "Anonymous";

            img.onload = function () {
                ctxt.drawImage(this, 0, 0);
                domURL.revokeObjectURL(url);
                callback(this);
            };

            img.src = url;
        }
        drawInlineSVG(ctxt, svgText, function () {
            //  console.log(myCanvas.toDataURL("image/png"));  // -> PNG data-uri
            Builder.svgtopng = myCanvas.toDataURL("image/png");
            console.log(Builder.svgtopng);
            var svgbase64 = Builder.svgtopng.split(';base64,').pop();
            var obj = { SvgStr: svgbase64, guid: Builder.guid, View: "_Front" };
            $.ajax({
                url: "/DesignViewModels/SaveSharingImageWithMail",
                type: "POST",
                data: obj,
                beforeSend: function () {      // Important-Hide loader while uploading Browse image in Artwork
                    $(".lds-wrapper").show();
                },
                dataType: 'json',
                success: function (response) {
                    if (response != "" || response != null) {
                        var ImgPath = "";
                        var ImgPhysicalPathFront = response;
                        ImgPath = ImgPhysicalPathFront;
                        console.log(ImgPhysicalPathFront);
                        sessionStorage.setItem("Front_SVG", ImgPhysicalPathFront);
                        //For Front SVG End
                        //For Back SVG Start   
                        var ActiveKit = $('.kit.active span.active').attr('data-count');
                        switch (ActiveKit) {
                            case "0":
                                var svgText = $('#option1ForKit_0_Back:first-child').html();
                                break;
                            case "1":
                                var svgText = $('#option2ForKit_1_Back:first-child').html();
                                break;
                            case "2":
                                var svgText = $('#option3ForKit_2_Back:first-child').html();
                                break;
                            case "3":
                                var svgText = $('#option4ForKit_3_Back:first-child').html();
                                break;
                            case "4":
                                var svgText = $('#option3ForKit_4_Back:first-child').html();
                                break;
                        }
                        //CurrentView = $(".preview-nav a.active").attr('data-view')
                        //var myCanvas = document.getElementById("mySvgCanvasforsaveshare");
                        //var ctxt = myCanvas.getContext("2d");
                        //ctxt.clearRect(0, 0, 300, 600); // Clear the Canvas (If we click on front View other views will be automatically deleted)
                        //function drawInlineSVG(ctxt, rawSVG, callback) {
                        //    var svg = new Blob([rawSVG], { type: "image/svg+xml;charset=utf-8" }),
                        //        domURL = self.URL || self.webkitURL || self,
                        //        url = domURL.createObjectURL(svg),
                        //        img = new Image;
                        //    img.crossOrigin = "Anonymous";

                        //    img.onload = function () {
                        //        ctxt.drawImage(this, 0, 0);
                        //        domURL.revokeObjectURL(url);
                        //        callback(this);
                        //    };
                        //    img.src = url;
                        //}
                        var myCanvas = document.getElementById("mySvgCanvasForKit");
                        var ctxt = myCanvas.getContext("2d");
                        ctxt.clearRect(0, 0, 700, 800); // Clear the Canvas (If we click on front View other views will be automatically deleted)
                        function drawInlineSVG(ctxt, rawSVG, callback) {

                            var svg = new Blob([rawSVG], { type: "image/svg+xml;charset=utf-8" }),
                                domURL = self.URL || self.webkitURL || self,
                                url = domURL.createObjectURL(svg),
                                img = new Image;
                            img.crossOrigin = "Anonymous";

                            img.onload = function () {
                                ctxt.drawImage(this, 0, 0);
                                domURL.revokeObjectURL(url);
                                callback(this);
                            };

                            img.src = url;
                        }
                        drawInlineSVG(ctxt, svgText, function () {
                            Builder.svgtopng = myCanvas.toDataURL("image/png");
                            console.log(Builder.svgtopng);
                            var svgbase64 = Builder.svgtopng.split(';base64,').pop();
                            var obj = { SvgStr: svgbase64, guid: Builder.guid, View: "_Back" };
                            $.ajax({
                                url: "/DesignViewModels/SaveSharingImageWithMail",
                                type: "POST",
                                data: obj,
                                beforeSend: function () {      // Important-Hide loader while uploading Browse image in Artwork
                                    $(".lds-wrapper").show();
                                },
                                dataType: 'json',
                                success: function (response) {
                                    if (response != "" || response != null) {
                                        var ImgPath = "";
                                        var ImgPhysicalPathBack = response;
                                        ImgPath = ImgPhysicalPathBack;
                                        console.log(ImgPhysicalPathBack);
                                        sessionStorage.setItem("Back_SVG", ImgPhysicalPathBack);
                                        //For Back SVG End

                                        //For Left Svg Start
                                        var ActiveKit = $('.kit.active span.active').attr('data-count');
                                        switch (ActiveKit) {
                                            case "0":
                                                var svgText = $('#option1ForKit_0_Left:first-child').html();
                                                break;
                                            case "1":
                                                var svgText = $('#option2ForKit_1_Left:first-child').html();
                                                break;
                                            case "2":
                                                var svgText = $('#option3ForKit_2_Left:first-child').html();
                                                break;
                                            case "3":
                                                var svgText = $('#option4ForKit_3_Left:first-child').html();
                                                break;
                                            case "4":
                                                var svgText = $('#option3ForKit_4_Left:first-child').html();
                                                break;
                                        }
                                        //CurrentView = $(".preview-nav a.active").attr('data-view')
                                        //var myCanvas = document.getElementById("mySvgCanvasforsaveshare");
                                        //var ctxt = myCanvas.getContext("2d");
                                        //ctxt.clearRect(0, 0, 300, 600); // Clear the Canvas (If we click on front View other views will be automatically deleted)
                                        //function drawInlineSVG(ctxt, rawSVG, callback) {
                                        //    var svg = new Blob([rawSVG], { type: "image/svg+xml;charset=utf-8" }),
                                        //        domURL = self.URL || self.webkitURL || self,
                                        //        url = domURL.createObjectURL(svg),
                                        //        img = new Image;
                                        //    img.crossOrigin = "Anonymous";

                                        //    img.onload = function () {
                                        //        ctxt.drawImage(this, 0, 0);
                                        //        domURL.revokeObjectURL(url);
                                        //        callback(this);
                                        //    };
                                        //    img.src = url;
                                        //}


                                        var myCanvas = document.getElementById("mySvgCanvasForKit");
                                        var ctxt = myCanvas.getContext("2d");
                                        ctxt.clearRect(0, 0, 700, 800); // Clear the Canvas (If we click on front View other views will be automatically deleted)
                                        function drawInlineSVG(ctxt, rawSVG, callback) {

                                            var svg = new Blob([rawSVG], { type: "image/svg+xml;charset=utf-8" }),
                                                domURL = self.URL || self.webkitURL || self,
                                                url = domURL.createObjectURL(svg),
                                                img = new Image;
                                            img.crossOrigin = "Anonymous";

                                            img.onload = function () {
                                                ctxt.drawImage(this, 0, 0);
                                                domURL.revokeObjectURL(url);
                                                callback(this);
                                            };

                                            img.src = url;
                                        }
                                        drawInlineSVG(ctxt, svgText, function () {
                                            //  console.log(myCanvas.toDataURL("image/png"));  // -> PNG data-uri
                                            Builder.svgtopng = myCanvas.toDataURL("image/png");
                                            console.log(Builder.svgtopng);
                                            var svgbase64 = Builder.svgtopng.split(';base64,').pop();
                                            var obj = { SvgStr: svgbase64, guid: Builder.guid, View: "_Left" };
                                            $.ajax({
                                                url: "/DesignViewModels/SaveSharingImageWithMail",
                                                type: "POST",
                                                data: obj,
                                                beforeSend: function () {      // Important-Hide loader while uploading Browse image in Artwork
                                                    $(".lds-wrapper").show();
                                                },
                                                dataType: 'json',
                                                success: function (response) {
                                                    if (response != "" || response != null) {
                                                        var ImgPath = "";
                                                        var ImgPhysicalPathLeft = response;
                                                        ImgPath = ImgPhysicalPathLeft;
                                                        console.log(ImgPhysicalPathLeft);
                                                        sessionStorage.setItem("Left_SVG", ImgPhysicalPathLeft);
                                                        // For Left Svg End

                                                        //For Dealer start functonility
                                                        var ImgPath = "";
                                                        var ImgPhysicalPathRight = response;
                                                        ImgPath = ImgPhysicalPathRight;
                                                        console.log(ImgPhysicalPathRight);

                                                        var Front = sessionStorage.getItem("Front_SVG");
                                                        var Back = sessionStorage.getItem("Back_SVG");
                                                        var Left = sessionStorage.getItem("Left_SVG");
                                                        var Right = "";

                                                        var dealer_email = "";
                                                        var cliffkeen_email = "";
                                                        var message = "";
                                                        dealer_email = $(".modal.dealer #dealer-email").val();
                                                        if ($("#cliffkeen_checkbox").prop('checked') == true) {
                                                            cliffkeen_email = $(".modal.dealer #cliffkeen-email").val();
                                                            message = $(".modal.dealer textarea#EmailNotes").val();
                                                            Api.call(Api.endpoints.AssignDesignToDealerSubmit, JSON.stringify({ "id": Builder.id, "DealerEmail": cliffkeen_email, "message": message, "ImagePathFront": Front, "ImagePathBack": Back, "ImagePathLeft": Left, "ImagePathRight": Right }), function () {
                                                                Api.call(Api.endpoints.saveDesign,
                                                                    JSON.stringify(Builder.productDataForSaving("with-dealer", false)),
                                                                    function () {
                                                                        $(".modal.dealer .close").trigger('click');
                                                                        location.href = "/locker";
                                                                    });
                                                            });
                                                        }
                                                        else {
                                                            Api.call(Api.endpoints.AssignDesignToDealerSubmit, JSON.stringify({ "id": Builder.id, "DealerID": Builder.chosenDealer.id, "DealerEmail": Builder.chosenDealer.email, "message": $(".modal.dealer textarea#EmailNotes").val(), "ImagePathFront": Front, "ImagePathBack": Back, "ImagePathLeft": Left, "ImagePathRight": Right }), function (response) {
                                                                Api.call(Api.endpoints.saveDesign,
                                                                    JSON.stringify(Builder.productDataForSaving("with-dealer", false)),
                                                                    function () {
                                                                        var code = 301;
                                                                        CK.alert(code);
                                                                        $(".modal.dealer .close").trigger('click');
                                                                        window.location = "/locker";
                                                                    });
                                                            });
                                                        }
                                                        //For Dealer End Functonility
                                                    }
                                                },
                                                error: function (response, status, e) {
                                                    console.log(response);
                                                    CK.alert(108);
                                                }
                                            });
                                        });

                                        // For Left Svg End
                                    }
                                },
                                error: function (response, status, e) {
                                    console.log(response);
                                    CK.alert(108);
                                }
                            });
                        });
                        //For Back SVG End
                    }
                },
                error: function (response, status, e) {
                    console.log(response);
                    CK.alert(108);
                }
            });
        });
        //For Front SVG End
    },
    ConvertSVGintoPNGforDealerForFourViewsForKit: function () {
        var ActiveKit = $('.kit.active span.active').attr('data-count');
        //For Front SVG Start  
        switch (ActiveKit) {
            case "0":
                var svgText = $('#option1ForKit_0_Front:first-child').html();
                break;
            case "1":
                var svgText = $('#option2ForKit_1_Front:first-child').html();
                break;
            case "2":
                var svgText = $('#option3ForKit_2_Front:first-child').html();
                break;
            case "3":
                var svgText = $('#option4ForKit_3_Front:first-child').html();
                break;
            case "4":
                var svgText = $('#option3ForKit_4_Front:first-child').html();
                break;
        }
        // Clear the Canvas (If we click on front View other views will be automatically deleted)
        //  drawInlineSVG(ctxt, svgText, function () {
        //  console.log(myCanvas.toDataURL("image/png"));  // -> PNG data-uri                   
        $.ajax({
            url: "/DesignViewModels/SvgToPngGetPhysicalPathForDealer",
            type: "POST",
            data: { SvgStr: svgText, guid: Builder.guid, View: "_Front" },
            beforeSend: function () {      // Important-Hide loader while uploading Browse image in Artwork
                $(".lds-wrapper").show();
            },
            dataType: 'json',
            success: function (response) {
                if (response != "" || response != null) {
                    var ImgPath = "";
                    var ImgPhysicalPathFront = response;
                    ImgPath = ImgPhysicalPathFront;
                    console.log(ImgPhysicalPathFront);
                    sessionStorage.setItem("Front_SVG", ImgPhysicalPathFront);
                    //For Front SVG End
                    //For Back SVG Start                                  
                    var ActiveKit = $('.kit.active span.active').attr('data-count');
                    switch (ActiveKit) {
                        case "0":
                            var svgText = $('#option1ForKit_0_Back:first-child').html();
                            break;
                        case "1":
                            var svgText = $('#option2ForKit_1_Back:first-child').html();
                            break;
                        case "2":
                            var svgText = $('#option3ForKit_2_Back:first-child').html();
                            break;
                        case "3":
                            var svgText = $('#option4ForKit_3_Back:first-child').html();
                            break;
                        case "4":
                            var svgText = $('#option3ForKit_4_Back:first-child').html();
                            break;
                    }
                    //   drawInlineSVG(ctxt, svgText, function () {                                                     
                    $.ajax({
                        url: "/DesignViewModels/SvgToPngGetPhysicalPathForDealer",
                        type: "POST",
                        data: { SvgStr: svgText, guid: Builder.guid, View: "_Back" },
                        beforeSend: function () {      // Important-Hide loader while uploading Browse image in Artwork
                            $(".lds-wrapper").show();
                        },
                        dataType: 'json',
                        success: function (response) {
                            if (response != "" || response != null) {
                                var ImgPath = "";
                                var ImgPhysicalPathBack = response;
                                ImgPath = ImgPhysicalPathBack;
                                console.log(ImgPhysicalPathBack);
                                sessionStorage.setItem("Back_SVG", ImgPhysicalPathBack);
                                //For Back SVG End
                                //For Left Svg Start                             
                                var ActiveKit = $('.kit.active span.active').attr('data-count');
                                switch (ActiveKit) {
                                    case "0":
                                        var svgText = $('#option1ForKit_0_Left:first-child').html();
                                        break;
                                    case "1":
                                        var svgText = $('#option2ForKit_1_Left:first-child').html();
                                        break;
                                    case "2":
                                        var svgText = $('#option3ForKit_2_Left:first-child').html();
                                        break;
                                    case "3":
                                        var svgText = $('#option4ForKit_3_Left:first-child').html();
                                        break;
                                    case "4":
                                        var svgText = $('#option3ForKit_4_Left:first-child').html();
                                        break;
                                }

                                //  drawInlineSVG(ctxt, svgText, function () {
                                //  console.log(myCanvas.toDataURL("image/png"));  // -> PNG data-uri                                                                                   
                                $.ajax({
                                    url: "/DesignViewModels/SvgToPngGetPhysicalPathForDealer",
                                    type: "POST",
                                    data: { SvgStr: svgText, guid: Builder.guid, View: "_Left" },
                                    beforeSend: function () {      // Important-Hide loader while uploading Browse image in Artwork
                                        $(".lds-wrapper").show();
                                    },
                                    dataType: 'json',
                                    success: function (response) {
                                        if (response != "" || response != null) {
                                            var ImgPath = "";
                                            var ImgPhysicalPathLeft = response;
                                            ImgPath = ImgPhysicalPathLeft;
                                            console.log(ImgPhysicalPathLeft);
                                            sessionStorage.setItem("Left_SVG", ImgPhysicalPathLeft);
                                            // For Left Svg End

                                            // For Right Start                                                       
                                            var ActiveKit = $('.kit.active span.active').attr('data-count');
                                            switch (ActiveKit) {
                                                case "0":
                                                    var svgText = $('#option1ForKit_0_Right:first-child').html();
                                                    break;
                                                case "1":
                                                    var svgText = $('#option2ForKit_1_Right:first-child').html();
                                                    break;
                                                case "2":
                                                    var svgText = $('#option3ForKit_2_Right:first-child').html();
                                                    break;
                                                case "3":
                                                    var svgText = $('#option4ForKit_3_Right:first-child').html();
                                                    break;
                                                case "4":
                                                    var svgText = $('#option3ForKit_4_Right:first-child').html();
                                                    break;
                                            }
                                            //drawInlineSVG(ctxt, svgText, function () {
                                            //  console.log(myCanvas.toDataURL("image/png"));  // -> PNG data-uri                                                                                                               
                                            $.ajax({
                                                url: "/DesignViewModels/SvgToPngGetPhysicalPathForDealer",
                                                type: "POST",
                                                data: { SvgStr: svgText, guid: Builder.guid, View: "_Right" },
                                                beforeSend: function () {      // Important-Hide loader while uploading Browse image in Artwork
                                                    $(".lds-wrapper").show();
                                                },
                                                dataType: 'json',
                                                success: function (response) {
                                                    if (response != "" || response != null) {
                                                        var ImgPath = "";
                                                        var ImgPhysicalPathLeft = response;
                                                        ImgPath = ImgPhysicalPathLeft;
                                                        console.log(ImgPhysicalPathLeft);
                                                        sessionStorage.setItem("Right_SVG", ImgPhysicalPathLeft);
                                                        //For Right End

                                                        //For Dealer start functonility
                                                        var ImgPath = "";
                                                        var ImgPhysicalPathRight = response;
                                                        ImgPath = ImgPhysicalPathRight;
                                                        console.log(ImgPhysicalPathRight);

                                                        var Front = sessionStorage.getItem("Front_SVG");
                                                        var Back = sessionStorage.getItem("Back_SVG");
                                                        var Left = sessionStorage.getItem("Left_SVG");
                                                        var Right = sessionStorage.getItem("Right_SVG");

                                                        var dealer_email = "";
                                                        var cliffkeen_email = "";
                                                        var message = "";
                                                        var CurrentPageUrl = window.location.href;

                                                        dealer_email = $(".modal.dealer #dealer-email").val();
                                                        if ($("#cliffkeen_checkbox").prop('checked') == true) {
                                                            cliffkeen_email = $(".modal.dealer #cliffkeen-email").val();
                                                            message = $(".modal.dealer textarea#EmailNotes").val();
                                                            // Api.call(Api.endpoints.AssignDesignToDealerSubmit, JSON.stringify({ "id": Builder.id, "DealerEmail": cliffkeen_email, "message": message, "ImagePathFront": Front, "ImagePathBack": Back, "ImagePathLeft": Left, "ImagePathRight": Right, "CurrentPageUrl": CurrentPageUrl }), function () {
                                                            Api.call(Api.endpoints.AssignDesignToDealerSubmit, JSON.stringify({ "id": Builder.id, "DealerEmail": cliffkeen_email, "message": message, "CurrentPageUrl": CurrentPageUrl }), function () {

                                                                Api.call(Api.endpoints.saveDesign,
                                                                    JSON.stringify(Builder.productDataForSaving("with-dealer", false)),
                                                                    function () {
                                                                        $(".modal.dealer .close").trigger('click');
                                                                        location.href = "/locker";
                                                                    });
                                                            });
                                                        }
                                                        else {
                                                            // Api.call(Api.endpoints.AssignDesignToDealerSubmit, JSON.stringify({ "id": Builder.id, "DealerID": Builder.chosenDealer.id, "DealerEmail": Builder.chosenDealer.email, "message": $(".modal.dealer textarea#EmailNotes").val(), "ImagePathFront": Front, "ImagePathBack": Back, "ImagePathLeft": Left, "ImagePathRight": Right, "CurrentPageUrl": CurrentPageUrl }), function (response) {
                                                            Api.call(Api.endpoints.AssignDesignToDealerSubmit, JSON.stringify({ "id": Builder.id, "DealerID": Builder.chosenDealer.id, "DealerEmail": Builder.chosenDealer.email, "message": $(".modal.dealer textarea#EmailNotes").val(), "CurrentPageUrl": CurrentPageUrl }), function (response) {
                                                                Api.call(Api.endpoints.saveDesign,
                                                                    JSON.stringify(Builder.productDataForSaving("with-dealer", false)),
                                                                    function () {
                                                                        var code = 301;
                                                                        CK.alert(code);
                                                                        $(".modal.dealer .close").trigger('click');
                                                                        window.location = "/locker";
                                                                    });
                                                            });
                                                        }
                                                        //For Dealer End Functonility
                                                    }
                                                },
                                                error: function (response, status, e) {
                                                    console.log(response);
                                                    CK.alert(108);
                                                }
                                            });
                                            //  });
                                            //For Right End
                                        }
                                    },
                                    error: function (response, status, e) {
                                        console.log(response);
                                        CK.alert(108);
                                    }
                                });
                                //   });

                                // For Left Svg End
                            }
                        },
                        error: function (response, status, e) {
                            console.log(response);
                            CK.alert(108);
                        }
                    });
                    // });

                    //For Back SVG End
                }
            },
            error: function (response, status, e) {
                console.log(response);
                CK.alert(108);
            }
        });
        // });
        //For Front SVG End
    },
    //28/2/2019
    //Important--Get Current Svg Image Path
    // Start
    SaveandSharebutton: function () {
        Builder.shareurl = "";
        $(".button.to-cart").addClass("processing");
        var obj = {};
        var CurrentView = $(".preview-nav a.active").attr('data-view');
        if ($("#ForSingleProduct" + CurrentView + " style").html() === undefined) {
            $("#ForSingleProduct" + CurrentView + " svg").prepend("<style>@import url(http://ub.ckatesting.com/css/svg_text.css)</style><style>@import url(" + deepSiteUrl + "/css/fonts/stylesheet.css)</style>");
        }
        if (CurrentView == "_Front") {
            var svgText = $('#ForSingleProduct_Front:first').html();
        }
        else if (CurrentView == "_Back") {
            var svgText = $('#ForSingleProduct_Back:first').html();
        }
        else if (CurrentView == "_Left") {
            var svgText = $('#ForSingleProduct_Left:first').html();
        }
        else if (CurrentView == "_Right") {
            var svgText = $('#ForSingleProduct_Right:first').html();
        }
        $.ajax({
            url: "/DesignViewModels/ConverSvgToPngSaveandSharebutton",
            type: "POST",
            data: { SvgStr: svgText, guid: Builder.guid, View: CurrentView },
            beforeSend: function () {      // Important-Hide loader while uploading Browse image in Artwork            
                $(".lds-wrapper").show();
            },
            dataType: 'json',
            success: function (response) {
                if (response != "" || response != null) {
                    Builder.svgtopng = deepSiteUrl + "/Content/customizedPngImg/" + response.image;
                    var svg = deepSiteUrl + "/Content/customizedSvgPath/" + response.svg;
                    // var request = Builder.guid + "~" + Builder.svgtopng;
                    Builder.shareurl = Builder.svgtopng;
                    console.log(Builder.svgtopng);
                    $("#ShareImagePath").attr("content", Builder.svgtopng);
                    sessionStorage.setItem("CurrentPathOfImage", Builder.svgtopng);
                    //var imagePath_Email = "/Content/customizedPngImg/" + response.image;
                    //sessionStorage.setItem("CurrentImagePath_Email", imagePath_Email);
                    sessionStorage.setItem("CurrentSVGPath_Email", svg);
                    //22-3-2019
                    sessionStorage.setItem("GetCurrentLoggedInUser", Builder.userData.email);
                    console.log("Email", svg);
                    console.log("Facebook and Twitter", Builder.svgtopng);
                    // IsImagePathGet = true;
                    $('.share').show();
                    $('#PopUpModalForSharingIcone').show();
                    $(".modal-bknd").addClass("active");
                    $(".lds-wrapper").hide();
                }
            },
            error: function (response, status, e) {
                console.log(response);
                CK.alert(108);
            }
        });


        // ctxt.clearRect(0, 0, 300, 600); // Clear the Canvas (If we click on front View other views will be automatically deleted)

        //function drawInlineSVG(ctxt, rawSVG, callback) {
        //    var svg = new Blob([rawSVG], { type: "image/svg+xml;charset=utf-8" }),
        //        domURL = self.URL || self.webkitURL || self,
        //        url = domURL.createObjectURL(svg),
        //        img = new Image;
        //    img.crossOrigin = "Anonymous";

        //    img.onload = function () {
        //        ctxt.drawImage(this, 0, 0);
        //        domURL.revokeObjectURL(url);
        //        callback(this);
        //    };
        //    img.src = url;
        //}
        //drawInlineSVG(ctxt, svgText, function () {
        //    //  console.log(myCanvas.toDataURL("image/png"));  // -> PNG data-uri
        //    Builder.svgtopng = myCanvas.toDataURL("image/png");
        //    console.log(Builder.svgtopng);
        //    var svgbase64 = Builder.svgtopng.split(';base64,').pop();
        //    var obj = { SvgStr: svgbase64, guid: Builder.guid, View: CurrentView };
        //    $.ajax({
        //        url: "/DesignViewModels/SaveSharingImage",
        //        type: "POST",
        //        data: obj,
        //        beforeSend: function () {      // Important-Hide loader while uploading Browse image in Artwork
        //            $(".lds-wrapper").show();
        //        },
        //        dataType: 'json',
        //        success: function (response) {
        //            if (response != "" || response != null) {      
        //                Builder.svgtopng = deepSiteUrl + "/Content/CartImages/" + response;
        //                var request = Builder.guid + "~" + Builder.svgtopng;
        //                Builder.shareurl = Builder.svgtopng;
        //                console.log(Builder.svgtopng);
        //                //$(".st_facebook_large").attr("st_image", Builder.svgtopng);
        //                //$(".st_twitter_large").attr("st_image", Builder.svgtopng);
        //                //$("#ShareImagePath").attr("content", Builder.svgtopng);
        //                //$("#ShareImagePath1").attr("content", Builder.svgtopng);
        //                sessionStorage.setItem("CurrentPathOfImage", Builder.svgtopng);
        //                IsImagePathGet = true;
        //                $('.share').show();
        //                $(".lds-wrapper").hide();
        //            }
        //        },
        //        error: function (response, status, e) {
        //            console.log(response);
        //            CK.alert(108);
        //        }
        //    });
        //});


    },
    //End     
    onCartSuccess: function (response) {
        $(".button.to-cart").removeClass("processing");
        //alert code 107
        //Update Cart Status With 'In-cart'
        if (response == 1) {
            Api.call(Api.endpoints.setOrderStatus, JSON.stringify({
                'ID': Builder.ID,
                'Status': 'in-cart'
            }), function (data) {
                console.log(data);
                $('#okBtn').bind('click', { param: code }, add_event);
                function add_event(event) {
                    if (event.data.param == '201') {
                        $('body').addClass('view-only');
                        window.location = "/locker";
                    }
                }
            });
        }
        console.log(response);

        var code = 200 + Number(response);
        CK.alert(code);

        // 		0-Failed to add item to cart.
        // 		1-Item Successfully Added to cart
        //      2-Failed to as Custom Uniform already exists in cart
        //      3-Failed to as stock items exists already exists in cart

        // Add your own custom logic whether to redirect the customer to ecommerce shopping cart page or stay on same the same page.
    },
    addKitToCart: function () {
        Api.call(Api.endpoints.getUser, 'chkUserLogin', function (data) {
            if (data.ID != '0' && data.ID[0] != '-') {
                //  if (data.ID != '0') {
                // user logged in
                $(".user-info-header > a").hide();
                $(".modal.dealer .user-info .name").text(data.FirstName + " " + data.LastName);
                $(".user-info-header > div.name span").text(data.FirstName);
                $(".modal.dealer .user-info .email").text(data.email);
                $(".user-info-header > div").show();

                //start                    
                var originalOrderNo = $('#OriginalOrderNo').val();
                for (var i = 0; i < Builder.kitTotalCount; i++) {
                    Api.call(Api.endpoints.saveDesign,
                        JSON.stringify(Builder.productKitDataForSaving("NEW", false, i)),
                        Builder.acknowledgeSaveQuietly);
                }
                //$(".button.to-cart").addClass("active");
                $(".button.to-cart").addClass("processing");
                // console.log(Builder.createKitProductList());
                console.log(Builder.guid);
                var obj = {};
                $(".button.to-cart").addClass("processing");
                console.log(Builder.guid);
                var obj = {};
                //var svgText = $('.kit_0 .svg').html();
                var kitNo = $('.kit span.active').attr('data-count');
                var svgText = $('.kit_' + kitNo + ' .svg').html();
                if (svgText == "") {
                    CK.alert("There is some problem");
                }
                $.ajax({
                    // url: "/DesignViewModels/SaveCartImages",
                    url: "/DesignViewModels/SaveCartImagesByImageMaggic",
                    type: "POST",
                    data: { SvgStr: svgText, guid: Builder.guid },
                    dataType: 'json',
                    success: function (response) {
                        if (response != "" || response != null) {
                            // Builder.svgtopng = deepSiteUrl + "/Content/CartImages/" + response;
                            Builder.svgtopng = deepSiteUrl + "/Content/customizedPngImg/" + response;
                            var request = Builder.guid + "~" + Builder.svgtopng;
                            console.log(request);
                            console.log(Builder.svgtopng);
                            console.log(Builder.createKitProductList());

                            var setupFee = $('#SetupFeeForKit').text();
                            var fee = "";
                            if (setupFee == "$70.00") {
                                fee = "SPPC~1";
                            }
                            var detailWithSetupFee = Builder.createKitProductList() + ',' + fee;
                            console.log(detailWithSetupFee);
                            $.ajax({
                                crossDomain: true,
                                url: ckstoreURL + "/addtockcart.asmx/AddToCart",
                                //  data: { lstChildProduct: Builder.createKitProductList(), designId: request },
                                data: { lstChildProduct: detailWithSetupFee, designId: request, OriginalOrderNo: originalOrderNo },
                                contentType: "application/json; charset=utf-8",
                                dataType: "jsonp",
                                success: Builder.onKitCartSuccess,
                                failure: function (response) {
                                    // alert code 108
                                    console.log(response);
                                    CK.alert(108);
                                    //Add your custom error message based on the failure response to display the customer that the item is not added successfully to cart.
                                }
                            });
                        }
                    },
                    error: function (response, status, e) {
                        console.log(response);
                        CK.alert(108);
                    }
                });
                //End 
            }
            //End                
            else {
                Api.call(Api.endpoints.getAdmin, JSON.stringify({}), function (Data) {
                    if (Data != null) {
                        if (Data == "Admin") {
                            // Admin logged in
                            $(".user-info-header > a").hide();
                            $(".user-info-header > div").show();
                        }
                        else {
                            // user not logged in
                            $(".user-info-header > div").hide();
                            $(".user-info-header > a").show();

                            //start
                            $(".error .copy").html("");
                            var IsViewOnly = $('body').hasClass('view-only');
                            if (IsViewOnly !== true) {
                                CK.alert(300);
                            }                            //end
                        }
                    }
                });
            }
        });
    },
    //4/3/2019
    //Important--Get Current Svg Image Path
    // Start 
    SaveandSharebuttonForKit: function () {
        //$(".button.to-cart").addClass("active");
        $(".button.to-cart").addClass("processing");
        // console.log(Builder.createKitProductList());
        console.log(Builder.guid);
        var obj = {};
        $(".button.to-cart").addClass("processing");
        console.log(Builder.guid);
        var obj = {};
        //  var svgText = $('.kit_0 .svg').html();

        var CurrentView = $(".preview-nav.kits.active a.active").attr('data-view');
        var stepNo = $('.row.steps span.active').attr('data-nav');
        var ActiveKit = $('.kit.active span.active').attr('data-count');
        var OPTION = parseInt(ActiveKit) + 1;
        if ($("#option" + OPTION + "ForKit_" + ActiveKit + CurrentView + " style").html() === undefined) {
            $("#option" + OPTION + "ForKit_" + ActiveKit + CurrentView + " svg").prepend("<style>@import url(http://ub.ckatesting.com/css/svg_text.css)</style><style>@import url(" + deepSiteUrl + "/css/fonts/stylesheet.css)</style>");
        }
        if (ActiveKit == 0) {
            if (CurrentView == "_Front") {
                var svgText = $('#option1ForKit_0_Front:first').html();
            }
            else if (CurrentView == "_Back") {
                var svgText = $('#option1ForKit_0_Back:first').html();
            }
            else if (CurrentView == "_Left") {
                var svgText = $('#option1ForKit_0_Left:first').html();
            }
            else if (CurrentView == "_Right") {
                var svgText = $('#option1ForKit_0_Right:first').html();
            }
        }
        else if (ActiveKit == 1) {
            if (CurrentView == "_Front") {
                var svgText = $('#option2ForKit_1_Front:first').html();
            }
            else if (CurrentView == "_Back") {
                var svgText = $('#option2ForKit_1_Back:first').html();
            }
            else if (CurrentView == "_Left") {
                var svgText = $('#option2ForKit_1_Left:first').html();
            }
            else if (CurrentView == "_Right") {
                var svgText = $('#option2ForKit_1_Right:first').html();
            }
        }
        else if (ActiveKit == 2) {
            if (CurrentView == "_Front") {
                var svgText = $('#option3ForKit_2_Front:first').html();
            }
            else if (CurrentView == "_Back") {
                var svgText = $('#option3ForKit_2_Back:first').html();
            }
            else if (CurrentView == "_Left") {
                var svgText = $('#option3ForKit_2_Left:first').html();
            }
            else if (CurrentView == "_Right") {
                var svgText = $('#option3ForKit_2_Right:first').html();
            }
        }
        else if (ActiveKit == 3) {
            if (CurrentView == "_Front") {
                var svgText = $('#option4ForKit_3_Front:first').html();
            }
            else if (CurrentView == "_Back") {
                var svgText = $('#option4ForKit_3_Back:first').html();
            }
            else if (CurrentView == "_Left") {
                var svgText = $('#option4ForKit_3_Left:first').html();
            }
            else if (CurrentView == "_Right") {
                var svgText = $('#option4ForKit_3_Right:first').html();
            }
        }
        else if (ActiveKit == 4) {
            if (CurrentView == "_Front") {
                var svgText = $('#option3ForKit_4_Front:first').html();
            }
            else if (CurrentView == "_Back") {
                var svgText = $('#option3ForKit_4_Back:first').html();
            }
            else if (CurrentView == "_Left") {
                var svgText = $('#option3ForKit_4_Left:first').html();
            }
            else if (CurrentView == "_Right") {
                var svgText = $('#option3ForKit_4_Right:first').html();
            }
        }
        if (svgText == "") {
            CK.alert("There is some problem");
        }
        var myCanvas = document.getElementById("mySvgCanvas");
        var ctxt = myCanvas.getContext("2d");
        $.ajax({
            url: "/DesignViewModels/ConverSvgToPngSaveandSharebutton",
            type: "POST",
            data: { SvgStr: svgText, guid: Builder.guid, View: CurrentView },
            beforeSend: function () {
                $(".lds-wrapper").show();     // Important-Hide loader while uploading Browse image in Artwork            
            },
            dataType: 'json',
            success: function (response) {
                if (response != "" || response != null) {
                    Builder.svgtopng = deepSiteUrl + "/Content/customizedPngImg/" + response.image;
                    var svg = deepSiteUrl + "/Content/customizedSvgPath/" + response.svg;
                    //var request = Builder.guid + "~" + Builder.svgtopng;
                    Builder.shareurl = Builder.svgtopng;
                    sessionStorage.setItem("CurrentPathOfImage", Builder.svgtopng);
                    //var imagePath_Email = "/Content/customizedPngImg/" + response;
                    // sessionStorage.setItem("CurrentImagePath_Email", imagePath_Email);
                    //sessionStorage.setItem("CurrentImagePath_Email",Builder.svgtopng);
                    sessionStorage.setItem("CurrentSVGPath_Email", svg);
                    console.log("Email", svg);
                    console.log("Facebook and Twitter", Builder.svgtopng);
                    //22-3-2019
                    sessionStorage.setItem("GetCurrentLoggedInUser", Builder.userData.email);
                    // IsImagePathGet = true;
                    $('.share').show();
                    $('#PopUpModalForSharingIcone').show();
                    $(".modal-bknd").addClass("active");
                    $(".lds-wrapper").hide();
                }
            },
            error: function (response, status, e) {
                console.log(response);
                CK.alert(108);
            }
        });
    },
    onKitCartSuccess: function (response) {
        $(".button.to-cart").removeClass("processing");
        //alert code 107
        //Update Cart Status With 'In-cart'

        if (response == 1) {
            Api.call(Api.endpoints.setOrderStatus, JSON.stringify({
                'ID': kitBuilder['kit_0'].id,
                'Status': 'in-cart'
            }), function (data) {
                console.log(data);
                $('#okBtn').bind('click', { param: code }, add_event);
                function add_event(event) {
                    if (event.data.param == '201') {
                        $('body').addClass('view-only');
                        window.location = "/locker";
                    }
                }
            });
        }
        console.log(response);

        var code = 200 + Number(response)
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
    getKitZipUrl: function (kit) {
        return "/UploadFiles/zipFolder/" + kitBuilder['kit_' + kit].id + "/" + CustKit['kit_' + kit].uploads;
    },
    updateZipLink: function () {
        if (Cust.uploads != null) $(".zip-link").empty().append("Support Files: <a href='" + Builder.getZipUrl() + "'>" + Cust.uploads + "</a>");
    },
    updateKitZipLink: function () {

        if (CustKit['kit_0'].uploads != null) $(".zip-link").empty().append("Support Files: <a href='" + Builder.getKitZipUrl(0) + "'>" + CustKit['kit_0'].uploads + "</a>");
    },
    prepareUpload: function (event) {
        //Important When we browase image from "Review Order" then we will get kitNo to undefined and event.target.id=upload-zip
        //Start
        //We need type alwase to image then we apply this check
        if (event.target.id === "upload-zip") {
            event.target.id = "upload-image";
        }
        //End
        var type = (event.target.id == "upload-image") ? "image" : "zip";
        Builder.uploadFiles = event.target.files;
        Builder.sendFiles(type);
    },
    prepareUploadForSinglet: function () {
        var fileUpload = $(".browse_upload").get(0);
        Builder.uploadFiles = fileUpload.files;
        Builder.sendFiles_Singlet("image");
    },

    prepareKitUpload: function (event, kitNo) {
        //Important When we browase image from "Review Order" then we will get kitNo to undefined and event.target.id=upload-zip
        //Start
        if (kitNo === undefined) {
            sessionStorage.setItem("IsImageBrowsedFrom_Option4", true);
            kitNo = parseInt($('.kit.active span.active').attr('data-count'));
        }
        //We need type alwase to image then we apply this check
        if (event.target.id === "upload-zip") {
            event.target.id = "upload-image_" + kitNo;
        }
        if (event.target.id !== "upload-image_" + kitNo) {
            event.target.id = "upload-image_" + kitNo;
        }
        //End
        var type = (event.target.id == "upload-image_" + kitNo) ? "image" : "zip";
        Builder.uploadFiles = event.target.files;
        Builder.sendKitFiles(type, kitNo);
    },
    prepareKitUpload_TabImage: function (kitNo) {
        //Important When we browase image from "Review Order" then we will get kitNo to undefined and event.target.id=upload-zip
        //Start
        if (kitNo === undefined) {
            sessionStorage.setItem("IsImageBrowsedFrom_Option4", true);
            kitNo = parseInt($('.kit.active span.active').attr('data-count'));
        }
        var fileUpload = $(".kits.kit_" + kitNo + " .button.custom-browse").get(0);
        Builder.uploadFiles = fileUpload.files;

        Builder.sendKitFiles("image", kitNo);
    },

    sendKitFiles: function (type, kitNo) {
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
        data.append('id', String(kitBuilder['kit_0'].id));

        //console.log(data);

        $.ajax({
            url: api_url,
            type: Api.endpoints.uploadImage.method,
            data: data,
            beforeSend: function () {      // Important-Hide loader while uploading Browse image in Artwork
                $(".lds-wrapper").show();
if(kitNo===4)
{
$('.lds-wrapper').addClass('kit_4');
}
else
{
if($(".lds-wrapper").hasClass("kit_4"))
{
$('.lds-wrapper').removeClass('kit_4');
}
}
            },
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

                        CustKit['kit_0'].uploads = filename;
                        Builder.updateKitZipLink();
                        //Important--Hide Loader While upload .Zip File
                        $(".lds-wrapper").hide();
                        //save design to include uploaded zip in Cust
                        Api.call(Api.endpoints.saveDesign,
                            JSON.stringify(Builder.productKitDataForSaving("NEW", false)),
                            Builder.acknowledgeSaveQuietly);
                        $("#upload-zip").val('');
                        $(".lds-wrapper").hide();
                    } else {
                        svgText.makeNewKitImage("/UploadFiles/imgFolder/" + kitBuilder['kit_0'].id + "/" + filename, kitNo);
                        //Important-User Can upload Single image mutipal time in kit section 
                        //Start
                        var inputFile = $(".kits.kit_" + kitNo + " .button.custom-browse");
                        inputFile.val('');
                        //End
                        var ext = filename.split('.').pop();
                        if (ext == "ai" || ext == "eps") {
                            CK.alert(401);
                            // Important-Hide loader while uploading Browse image in Artwork
                            $(".lds-wrapper").hide();
                        }
                    }
                }
                else {
                    var inputFile = $(".kits.kit_" + kitNo + " .button.custom-browse");
                    inputFile.val('');
                    // Handle errors here   

                    //Important--File Size To Large
                    if (data.ErrorCode == 50) {
                        CK.alert(403);
                        $(".lds-wrapper").hide();
                    }
                    //Important--Invalid File Format.
                    if (data.ErrorCode == 55) {
                        CK.alert(402);
                        $(".lds-wrapper").hide();
                    }
                    //Important--Allowed Only Zip File
                    if (data.ErrorCode == 52) {
                        CK.alert(404);
                        $(".lds-wrapper").hide();
                    }
                    if (data.ErrorCode == 70) {
                        $(".lds-wrapper").hide();
                    }
                    console.log('ERRORS: ' + data.ErrorText);
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                // Handle errors here
                //console.log('ERRORS2: ', jqXHR);
                // STOP LOADING SPINNER
            }

        });

    },
    sendFiles: function (type, kitNo) {
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
            beforeSend: function () {      // Important-Hide loader while uploading Browse image in Artwork
                $(".lds-wrapper").show();
            },
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
                        //Important--Hide Loader While upload .Zip File
                        $(".lds-wrapper").hide();
                        //save design to include uploaded zip in Cust
                        Api.call(Api.endpoints.saveDesign,
                            JSON.stringify(Builder.productDataForSaving("NEW", false)),
                            Builder.acknowledgeSaveQuietly);
                        $("#upload-zip").val('');
                    } else {
                        svgText.makeNewImage("/UploadFiles/imgFolder/" + Builder.id + "/" + filename);

                        //25/3/2019
                        //Start
                        //Important--To empty the uploded file(we can uploed same image multipal times else never)

                        var inputFile = $("#upload-image");
                        inputFile.val('');

                        //End

                        //Important--If ai is crashed,while converting ai to png format in Design controller
                        var ext = filename.split('.').pop();
                        if (ext == "ai" || ext == "eps") {
                            CK.alert(401);
                            // Important-Hide loader while uploading Browse image in Artwork
                            $(".lds-wrapper").hide();
                        }
                    }
                }
                else {
                    //Important--File Size To Large
                    if (data.ErrorCode == 50) {
                        CK.alert(403);
                        $(".lds-wrapper").hide();
                    }
                    //Important--Invalid File Format.
                    if (data.ErrorCode == 55) {
                        CK.alert(402);
                        $(".lds-wrapper").hide();
                    }
                    //Important--Allowed Only Zip File
                    if (data.ErrorCode == 52) {
                        CK.alert(404);
                        $(".lds-wrapper").hide();
                    }
                    if (data.ErrorCode == 70) {
                        $(".lds-wrapper").hide();
                    }
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

    },
    sendFiles_Singlet: function (type, kitNo) {
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
            beforeSend: function () {      // Important-Hide loader while uploading Browse image in Artwork
                $(".lds-wrapper").show();
            },
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
                        //Important--Hide Loader While upload .Zip File
                        $(".lds-wrapper").hide();
                        //save design to include uploaded zip in Cust
                        Api.call(Api.endpoints.saveDesign,
                            JSON.stringify(Builder.productDataForSaving("NEW", false)),
                            Builder.acknowledgeSaveQuietly);
                        $("#upload-zip").val('');
                    } else {
                        svgText.makeNewImage("/UploadFiles/imgFolder/" + Builder.id + "/" + filename);

                        //25/3/2019
                        //Start
                        //Important--To empty the uploded file(we can uploed same image multipal times else never)
                        var inputFile = $(".browse_upload");
                        inputFile.val('');

                        //End

                        //Important--If ai is crashed,while converting ai to png format in Design controller
                        var ext = filename.split('.').pop();
                        if (ext == "ai" || ext == "eps") {
                            CK.alert(401);
                            // Important-Hide loader while uploading Browse image in Artwork
                            $(".lds-wrapper").hide();
                        }
                    }
                }
                else {
                    var inputFile = $(".browse_upload");
                    inputFile.val('');
                    //Important--File Size To Large
                    if (data.ErrorCode == 50) {
                        CK.alert(403);
                        $(".lds-wrapper").hide();
                    }
                    //Important--Invalid File Format.
                    if (data.ErrorCode == 55) {
                        CK.alert(402);
                        $(".lds-wrapper").hide();
                    }
                    //Important--Allowed Only Zip File
                    if (data.ErrorCode == 52) {
                        CK.alert(404);
                        $(".lds-wrapper").hide();
                    }
                    if (data.ErrorCode == 70) {
                        $(".lds-wrapper").hide();
                    }
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
    },
    kitClick: function (type) {

        //Important---Outer layer of image is not working propely for Kit 4 then we set
        //Start
        if (type == "2") {
            var ViewKit4 = $('.preview-nav.bottom-nav.kits.kit_4').find('a.active').attr('data-view');
            //$("#text_palette_" + "4" + ViewKit4 + '_' + "4").addClass("active").addClass("loaded");
              $("#text_palette_" + "4" + ViewKit4 + '_' + "4").addClass("active");
        }
        //End

        Builder.updateKitPricing(null, null, type);
        var arr = [];
        // important--- Fine active class Step no 
        var stepNo = $('.row.steps span.active').attr('data-nav');
        //---important Click on kit option means option 1,2,3,4
        $('.kits').removeClass('active');
        $('.kits.kit_' + type).addClass('active');
        $('.kits.kits_option_' + type).addClass('active');
        $('.kit span').removeClass('active');
        var spanKit = "kit_" + type;

        // Bold selected Text 
        //17/4/2019
        if (spanKit == 'kit_0') {
            $('.kit_0_active').css("font-weight", "bold");
            $('.kit_1_active').removeAttr('style');
            $('.kit_2_active').removeAttr('style');
            $('.kit_3_active').removeAttr('style');
        }
        else if (spanKit == 'kit_1') {
            $('.kit_1_active').css("font-weight", "bold");
            $('.kit_0_active').removeAttr('style');
            $('.kit_2_active').removeAttr('style');
            $('.kit_3_active').removeAttr('style');
        }
        else if (spanKit == 'kit_2') {
            $('.kit_2_active').css("font-weight", "bold");
            $('.kit_1_active').removeAttr('style');
            $('.kit_0_active').removeAttr('style');
            $('.kit_3_active').removeAttr('style');
        }
        else if (spanKit == 'kit_3') {
            $('.kit_3_active').css("font-weight", "bold");
            $('.kit_1_active').removeAttr('style');
            $('.kit_2_active').removeAttr('style');
            $('.kit_0_active').removeAttr('style');
        }
        //17/4/2019


        $("#text_palette_" + kitNo + "_Back" + '_' + kitNo).addClass("active").addClass("loaded");

        $('.kit span[data-kit=' + spanKit + ']').addClass('active');

        //Start
        //Important--show loder if kit product(svg) is not loading,loder will display when we click on OPTION 1,OPTION 2 and OPTION 3
        //This loader is hide in this function loadKitGarmentSvg:
        var length = -1;
        var kitno = parseInt(type);
        var IsSelectedOptionActive = $('.kit .option-menu span[data-kit=kit_' + kitno + ']').hasClass('active');
        length = $('.kits.kit_' + kitno + '.rev .canvas-wrapper.front .svg svg').length;
        var lengthOfKit4 = $('.kits.kit_4.rev .canvas-wrapper.front .svg svg').length;
        if ((kitno === 2 || kitno === 4) && IsSelectedOptionActive && (length < 1 || lengthOfKit4 < 1)) {
            $(".lds-wrapper").show();
        }
        if (length < 1 && IsSelectedOptionActive) {
            $(".lds-wrapper").show();
        }
        //End

        var index = $(".preview-nav.kit_" + type + " a.active").attr('data-view');

        if (type == 2) {
            $('body').attr('id', 'option3test');
        }
        else {
            $('body').removeAttr('option3test');
        }

        //25/3/2019
        //start      
        var kitNo = $('.kit.active span.active').attr('data-count');
        loadView = kitView['kit_' + kitNo].viewsToLoadKit;
        //if (kitNo == "0")
        //    kitNo = 0;
        //else if (kitNo == "1")
        //    kitNo = 1;
        //else if (kitNo == "2")
        //    kitNo = 2;
        //else if (kitNo == "3")
        //    kitNo = 3;
        //else if (kitNo == "4")
        //    kitNo = 4;      

        ////
        //switch (loadView) {
        //    case 0:
        //        $(".preview-nav.kit_" + kitNo + "a:eq(0)").trigger("click");
        //        break;
        //    case 2:
        //        $(".preview-nav.kit_" + kitNo + "a:eq(1)").trigger("click");
        //        $(".preview-nav.kit_" + kitNo + "a:eq(0)").trigger("click");
        //        break;
        //    case 4:
        //        $(".preview-nav.kit_" + kitNo + "a:eq(3)").trigger("click");
        //        $(".preview-nav.kit_" + kitNo + "a:eq(2)").trigger("click");
        //        $(".preview-nav.kit_" + kitNo + "a:eq(1)").trigger("click");
        //        $(".preview-nav.kit_" + kitNo + "a:eq(0)").trigger("click");
        //        break;
        //    default:             
        //}

        //
        if ($('body').hasClass('view-only')) {
            switch (kitNo) {
                case "0":
                    if (loadView == 1) {
                        $(".preview-nav.kit_0 a:eq(0)").trigger("click");
                        break;
                    }
                    else if (loadView == 2) {
                        $(".preview-nav.kit_0 a:eq(1)").trigger("click");
                        $(".preview-nav.kit_0 a:eq(0)").trigger("click");
                        break;
                    }
                    else {
                        $(".preview-nav.kit_0 a:eq(3)").trigger("click");
                        $(".preview-nav.kit_0 a:eq(2)").trigger("click");
                        $(".preview-nav.kit_0 a:eq(1)").trigger("click");
                        $(".preview-nav.kit_0 a:eq(0)").trigger("click");
                        break;
                    }

                case "1":
                    if (loadView == 1) {
                        $(".preview-nav.kit_1 a:eq(0)").trigger("click");
                        break;
                    }
                    else if (loadView == 2) {
                        $(".preview-nav.kit_1 a:eq(1)").trigger("click");
                        $(".preview-nav.kit_1 a:eq(0)").trigger("click");
                        break;
                    }
                    else {
                        $(".preview-nav.kit_1 a:eq(3)").trigger("click");
                        $(".preview-nav.kit_1 a:eq(2)").trigger("click");
                        $(".preview-nav.kit_1 a:eq(1)").trigger("click");
                        $(".preview-nav.kit_1 a:eq(0)").trigger("click");
                        break;
                    }
                case "2":
                    if (loadView == 1) {
                        $(".preview-nav.kit_2 a:eq(0)").trigger("click");
                        break;
                    }
                    else if (loadView == 2) {
                        $(".preview-nav.kit_2 a:eq(1)").trigger("click");
                        $(".preview-nav.kit_2 a:eq(0)").trigger("click");
                        break;
                    }
                    else {
                        $(".preview-nav.kit_2 a:eq(3)").trigger("click");
                        $(".preview-nav.kit_2 a:eq(2)").trigger("click");
                        $(".preview-nav.kit_2 a:eq(1)").trigger("click");
                        $(".preview-nav.kit_2 a:eq(0)").trigger("click");
                        break;
                    }

                case "3":
                    if (loadView == 1) {
                        $(".preview-nav.kit_3 a:eq(0)").trigger("click");
                        break;
                    }
                    else if (loadView == 2) {
                        $(".preview-nav.kit_3 a:eq(1)").trigger("click");
                        $(".preview-nav.kit_3 a:eq(0)").trigger("click");
                        break;
                    }
                    else {
                        $(".preview-nav.kit_3 a:eq(3)").trigger("click");
                        $(".preview-nav.kit_3 a:eq(2)").trigger("click");
                        $(".preview-nav.kit_3 a:eq(1)").trigger("click");
                        $(".preview-nav.kit_3 a:eq(0)").trigger("click");
                        break;
                    }

                case "4":
                    if (loadView == 1) {
                        $(".preview-nav.kit_4 a:eq(0)").trigger("click");
                        break;
                    }
                    else if (loadView == 2) {
                        $(".preview-nav.kit_4 a:eq(1)").trigger("click");
                        $(".preview-nav.kit_4 a:eq(0)").trigger("click");
                        break;
                    }
                    else {
                        $(".preview-nav.kit_4 a:eq(3)").trigger("click");
                        $(".preview-nav.kit_4 a:eq(2)").trigger("click");
                        $(".preview-nav.kit_4 a:eq(1)").trigger("click");
                        $(".preview-nav.kit_4 a:eq(0)").trigger("click");
                        break;
                    }
                default:
            }
            //end
            // 25/3/2019
        }

        /// DOUBLE KIT    
        //Important --Click On "OPTION1"---to "OPTION4",Default selection of pricing Chart is Men will active and Men button will active and Women Button will be deactive

        var style = 'Men';
        $('.button.mens').addClass('active');
        $(".option-set.sizing .sub-title .style").text(style);
        $(".option-set.sizing .charts").removeClass('Women').removeClass('Men');
        $(".option-set.sizing .charts").addClass(style);
        $('.button.womens').removeClass('active')
        // important--Hiding FRONT,BACK,LEFT,RIGHT Panel From "Quantity & Size" in Kit Section.
        //18/1/2019 
        switch (type) {
            case "0":
                if (stepNo == 3) {
                    $('#HideQuantityAndSizesForKit0').hide();
                }
                else {
                    $('#HideQuantityAndSizesForKit0').show();
                    $('#HideQuantityAndSizesForKit0').css('display', 'flex');
                    $('#HideQuantityAndSizesForKit1').hide();
                    $('#HideQuantityAndSizesForKit2').hide();
                    $('#HideQuantityAndSizesForKit3').hide();
                }
                break;
            case "1":
                if (stepNo == 3) {
                    $('#HideQuantityAndSizesForKit1').hide();
                }
                else {
                    $('#HideQuantityAndSizesForKit1').show();
                    $('#HideQuantityAndSizesForKit1').css('display', 'flex');
                    $('#HideQuantityAndSizesForKit0').hide();
                    $('#HideQuantityAndSizesForKit2').hide();
                    $('#HideQuantityAndSizesForKit3').hide();
                }
                break;
            case "2":
                if (stepNo == 3) {
                    $('#HideQuantityAndSizesForKit2').hide();
                }
                else {
                    $('#HideQuantityAndSizesForKit2').show();
                    $('#HideQuantityAndSizesForKit2').css('display', 'flex');
                    $('#HideQuantityAndSizesForKit0').hide();
                    $('#HideQuantityAndSizesForKit1').hide();
                    $('#HideQuantityAndSizesForKit3').hide();
                }
                break;
            case "3":
                if (stepNo == 3) {
                    $('#HideQuantityAndSizesForKit3').hide();
                }
                else {
                    $('#HideQuantityAndSizesForKit3').show();
                    $('#HideQuantityAndSizesForKit3').css('display', 'flex');
                    $('#HideQuantityAndSizesForKit0').hide();
                    $('#HideQuantityAndSizesForKit1').hide();
                    $('#HideQuantityAndSizesForKit2').hide();

                }
        }

        //Add and Remove class dynamically 10_01_2019...
        // Add Dynamic Class for OPTION 1 For Center Svg And Center Boundary Box of Uploaded Image or Logo



        //$(".main .product-title").css("display", "block")
        //End

        // Important-- Hide Shorts Name from Following "OPTIONS" &  "STEPS" in kit Section
        //Important-- Condition For OPTIONS
        if (type == 0 || type == 1 || type == 3) {
            $(".optionallInKit").hide();
        }
        //if (stepNo == 4) {
        //    $('.share').show();  //25/2/2019
        //}
        //Important-- Condition For STEPS
        if (type == 2 && stepNo == 4) {
            $(".optionallInKit").hide();
        }
        //-Important-- Add Class for Scroll In Pricing OPTION Option 2 and OPTION 4
        if (stepNo == 3 && type == 1) {
            var classexits = $(".main .options").hasClass("option2_4_scroll");
            if (classexits) {
                $(".main .options").removeClass("option2_4_scroll");
            }
            $(".main .options").addClass("option2_4_scroll");
        }
        if (stepNo == 3 && type == 1) {
            var classexits = $(".main .options").hasClass("option2_4_scroll");
            if (classexits) {
                $(".main .options").removeClass("option2_4_scroll");
            }
            $(".main .options").addClass("option2_4_scroll");
        }
        else if (stepNo == 3 && type == 3) {
            var classexits = $(".main .options").hasClass("option2_4_scroll");
            if (classexits) {
                $(".main .options").removeClass("option2_4_scroll");
            }
            $(".main .options").addClass("option2_4_scroll");
        }
        else {
            $(".main .options").removeClass("option2_4_scroll");
        }
        //Important-- show and Hide Shorts Name for Following classes Which Is for "Review order" section

        if (type == 2 && stepNo == 4) {
            $(".ReviwOrderOption3").show();
        }
        else {
            $(".ReviwOrderOption3").hide();
        }
        //Important-- show and Hide Pricing Chart for OPTION2 in Kit Section
        if (type == 1 && stepNo == 3) {
            $(".kits.kit_OPTION2_SHORTS").addClass('active');

        }
        else {
            $(".kits.kit_OPTION2_SHORTS").removeClass('active');
        }
        //Important-- show and Hide Pricing Chart for OPTION4 in Kit Section

        if (type == 3 && stepNo == 3) {
            // $(".kits.kit_OPTION4_SHORTS").show();
            $(".kits.kit_OPTION4_SHORTS").addClass('active');
        }
        else {
            $(".kits.kit_OPTION4_SHORTS").removeClass('active');
        }

        //var StepNo = Cust.step;
        if (type == "2") {

            $('.kits.kit_4').addClass('active');
            ///-----

            //Important-- show and Hide Shorts Name for Following classes Which Is for "Color" section
            if (type == 2 && stepNo == 1) {
                $('#DSFSSYYSF').show();
            }
            else {
                $('#DSFSSYYSF').hide();
            }

            //Important-- show and Hide Shorts Name for Following classes Which Is for "Artwork" section
            if (type == 2 && stepNo == 2) {
                $('#DSFSSYYSF').show();
            }
            //Important---  Show Shorts Name from Following "OPTIONS" and "STEPS"  in kit Section

            if (type == "2" && stepNo == 3) {
                $(".optionallInKit").show();
            }
            // Important --- remove multipal shorts name from differnt steps in  "Colors" ,"Artwork" &"Quantity & Sizes", except "OPTION 3" with "Quantity & Sizes"

            if (stepNo != 3) {
                $(".kits.kit_4.optionallInKit[data-step=" + type + "]").removeClass("active");
            }

            var spanKit = "kit_4";
            $('.kit span[data-kit=' + spanKit + ']').addClass('active');
            if (!$("#text_palette_Front_4").hasClass("loaded")) {
                $(".preview-nav.kit_4 a:eq(0)").trigger("click");
                console.log('kit 4 0th triggered ');
                Builder.populateKitColorsWithCustomization(ProductKit['kit_4'], 4);

            }

            var step = $('.row.steps span.active').attr('data-nav');
            //if (step == '2' || step == '4' || step == '1') {
            //    $('.optionall').hide();
            //    $('.option3').show();
            //}
            //else {
            //    $('.optionall').show();
            //    $('.option3').hide();
            //}

            if (!$("#text_palette_4" + svgText.currentView + '_4').hasClass("loaded")) {
                $(".preview-nav.kit_4 a:eq(0)").trigger("click");
                Builder.populateKitColorsWithCustomization(ProductKit['kit_4'], 4);
            }

        } else {
            $('.optionall').hide();
            $('.option3').hide();
        }

        ///
        svgText.currentView = index + '_' + type;
        console.log('current view changed :', svgText.currentView);



        var kitNo = $('.kit span.active').attr('data-count');
        if (!$("#text_palette_" + kitNo + svgText.currentView + '_' + kitNo).hasClass("loaded")) {
            $(".preview-nav.kit_" + kitNo + " a:eq(0)").trigger("click");
            Builder.populateKitColorsWithCustomization(ProductKit['kit_' + kitNo], kitNo);
        }

        if (Builder.step == 4) {
            if (!$(".preview-nav.kit_" + kitNo + " a:eq(1)").hasClass('hide')) {
                $(".preview-nav.kit_" + kitNo + " a:eq(1)").trigger("click");
            }
            if (!$(".preview-nav.kit_" + kitNo + " a:eq(2)").hasClass('hide')) {
                $(".preview-nav.kit_" + kitNo + " a:eq(2)").trigger("click");
            }
            if (!$(".preview-nav.kit_" + kitNo + " a:eq(3)").hasClass('hide')) {
                $(".preview-nav.kit_" + kitNo + " a:eq(3)").trigger("click");
            }
            /// trigger all of the 4th kit here when current kitno is 2
            if (type == "2") {
                if (!$(".preview-nav.kit_4 a:eq(1)").hasClass('hide')) {
                    $(".preview-nav.kit_4 a:eq(1)").trigger("click");
                }
                if (!$(".preview-nav.kit_4 a:eq(2)").hasClass('hide')) {
                    $(".preview-nav.kit_4 a:eq(2)").trigger("click");
                }
                if (!$(".preview-nav.kit_4 a:eq(3)").hasClass('hide')) {
                    $(".preview-nav.kit_4 a:eq(3)").trigger("click");
                }
            }
        }
        if (!Builder.validateKitStepNew(1, null, kitNo)) {
            if (kitNo == 0) {
                Builder.gotoKitStep(1, kitNo, Builder.kitproductNewfor_0);
                if (Builder.kitproductNewfor_0.RemoveClass != "true") {
                    $(".main .preview").addClass("Kit0ForCenterBoundingBox");
                }
                else if (Builder.kitproductNewfor_0.RemoveClass === undefined) {
                    $(".main .preview").removeClass("Kit0ForCenterBoundingBox");
                }
                else {
                    $(".main .preview").removeClass("Kit0ForCenterBoundingBox");
                }

            }
            else if (kitNo == 1) {

                //Show Product Name here....
                arr = Builder.kitproductNewfor_1.sku.split('-');
                var shirt = arr[0];
                var shorts = arr[1];
                $(".kits.kit_" + kitNo + " .product-title .text").text(shirt + ' ' + 'SHIRT' + ' ' + '-' + ' ' + shorts + ' ' + 'SHORTS');
                Builder.gotoKitStep(1, kitNo, Builder.kitproductNewfor_1);
                if (Builder.kitproductNewfor_1.RemoveClass != "true") {
                    $(".main .preview").addClass("Kit0ForCenterBoundingBox");
                }
                else if (Builder.kitproductNewfor_1.RemoveClass === undefined) {
                    $(".main .preview").removeClass("Kit0ForCenterBoundingBox");
                }
                else {
                    $(".main .preview").removeClass("Kit0ForCenterBoundingBox");
                }

            }
            else if (kitNo == 2) {

                //Show Product Name here.....
                $(".kits_option_" + kitNo + " .product-title .text").text('');
                $(".kits_option_" + kitNo + " .product-title .text").text(Builder.kitproductNewfor_2.SkuName);
                //Logic for kit_4 is fixed thats why passing kit Number is Fixed
                $(".kits.kit_4 .product-title .text").text('');
                $(".kits.kit_4 .product-title .text").text(Builder.kitproductNewfor_4.SkuName);
                if (Builder.kitproductNewfor_2.RemoveClass != "true") {
                    $(".main .preview").addClass("Kit0ForCenterBoundingBox");
                }
                else if (Builder.kitproductNewfor_2.RemoveClass === undefined) {
                    $(".main .preview").removeClass("Kit0ForCenterBoundingBox");
                }
                else {
                    $(".main .preview").removeClass("Kit0ForCenterBoundingBox");
                }


                Builder.gotoKitStep(1, kitNo, Builder.kitproductNewfor_2);
            }
            else if (kitNo == 3) {
                arr = Builder.kitproductNewfor_3.sku.split('-');
                var shirt = arr[0];
                var shorts = arr[1];
                $(".kits.kit_" + kitNo + " .product-title .text").text(shirt + ' ' + 'SHIRT' + ' ' + '-' + ' ' + shorts + ' ' + 'SHORTS');
                Builder.gotoKitStep(1, kitNo, Builder.kitproductNewfor_3);
                if (Builder.kitproductNewfor_3.RemoveClass != "true") {
                    $(".main .preview").addClass("Kit0ForCenterBoundingBox");
                }
                else if (Builder.kitproductNewfor_3.RemoveClass === undefined) {
                    $(".main .preview").removeClass("Kit0ForCenterBoundingBox");
                }
                else {
                    $(".main .preview").removeClass("Kit0ForCenterBoundingBox");
                }

            }
            else if (kitNo == 4) {
                Builder.gotoKitStep(1, kitNo, Builder.kitproductNewfor_4);
                if (Builder.kitproductNewfor_4.RemoveClass != "true") {
                    $(".main .preview").addClass("Kit0ForCenterBoundingBox");
                }
                else if (Builder.kitproductNewfor_4.RemoveClass === undefined) {
                    $(".main .preview").removeClass("Kit0ForCenterBoundingBox");
                }
                else {
                    $(".main .preview").removeClass("Kit0ForCenterBoundingBox");
                }

            }
        }
        else {
            if (kitNo == 0) {
                //Show Product Name here....
                arr = Builder.kitproductNewfor_0.sku.split('-');
                var shirt = arr[0];
                var shorts = arr[1];
                // $(".kits.kit_" + kitNo + " .product-title .text").text(shirt + ' ' + 'SHIRT' + ' ' + '-' + ' ' + shorts + ' ' + 'SHORTS');
                $(".kits.kit_" + kitNo + " .product-title .text").text(ProductKit.kit_0.PricingSku + ' SINGLET' + '(' + ProductKit.kit_0.sku + ')');

                if (Builder.kitproductNewfor_0.RemoveClass != "true") {
                    $(".main .preview").addClass("Kit0ForCenterBoundingBox");
                }
                else if (Builder.kitproductNewfor_0.RemoveClass === undefined) {
                    $(".main .preview").removeClass("Kit0ForCenterBoundingBox");
                }
                else {
                    $(".main .preview").removeClass("Kit0ForCenterBoundingBox");
                }

            }
            else if (kitNo == 1) {
                //Show Product Name here....
                arr = Builder.kitproductNewfor_1.sku.split('-');
                var shirt = arr[0];
                var shorts = arr[1];
                $(".kits.kit_" + kitNo + " .product-title .text").text(shirt + ' ' + 'SHIRT' + ' ' + '-' + ' ' + shorts + ' ' + 'SHORTS');
                if (Builder.kitproductNewfor_1.RemoveClass != "true") {
                    $(".main .preview").addClass("Kit0ForCenterBoundingBox");
                }
                else if (Builder.kitproductNewfor_1.RemoveClass === undefined) {
                    $(".main .preview").removeClass("Kit0ForCenterBoundingBox");
                }
                else {
                    $(".main .preview").removeClass("Kit0ForCenterBoundingBox");
                }

            }
            else if (kitNo == 2) {
                //Show Product Name here.....
                $(".kits.kits_option_" + kitNo + " .product-title .text").text('');
                $(".kits.kits_option_" + kitNo + " .product-title .text").text(Builder.kitproductNewfor_2.SkuName);
                //Logic for kit_4 is fixed thats why passing kit Number is Fixed
                $(".kits.kit_4 .product-title .text").text('');
                $(".kits.kit_4 .product-title .text").text(Builder.kitproductNewfor_4.SkuName);
                if (Builder.kitproductNewfor_2.RemoveClass != "true") {
                    $(".main .preview").addClass("Kit0ForCenterBoundingBox");
                }
                else if (Builder.kitproductNewfor_2.RemoveClass === undefined) {
                    $(".main .preview").removeClass("Kit0ForCenterBoundingBox");
                }
                else {
                    $(".main .preview").removeClass("Kit0ForCenterBoundingBox");
                }


            }
            else if (kitNo == 3) {
                arr = Builder.kitproductNewfor_3.sku.split('-');
                var shirt = arr[0];
                var shorts = arr[1];
                $(".kits.kit_" + kitNo + " .product-title .text").text(shirt + ' ' + 'SHIRT' + ' ' + '-' + ' ' + shorts + ' ' + 'SHORTS');
                if (Builder.kitproductNewfor_3.RemoveClass != "true") {
                    $(".main .preview").addClass("Kit0ForCenterBoundingBox");
                }
                else if (Builder.kitproductNewfor_3.RemoveClass === undefined) {
                    $(".main .preview").removeClass("Kit0ForCenterBoundingBox");
                }
                else {
                    $(".main .preview").removeClass("Kit0ForCenterBoundingBox");
                }
            }
        }
    },


    PreviewClick: function () {
        $(".preview-nav.kits a").bind('click', function (e) {
            e.preventDefault();
            var position = $(this).data('view');
            var classes = $(this).closest('div').attr('class').split(' ');
            var NewCls = "";
            var currentKit = "";
            for (var i = 0; i < classes.length; i++) {
                var cls = classes[i];
                if (cls == "kit_0" || cls == "kit_1" || cls == "kit_2" || cls == "kit_3" || cls == "kit_4") {
                    currentKit = cls;
                }
                NewCls += "." + classes[i];
            }
            $(NewCls + " div[data-view]").removeClass("active");
            $(NewCls + " div[data-view=" + position + "]").addClass("active");
            $(NewCls + " a").removeClass("active");
            $(this).addClass("active");

            $(".kits." + currentKit + " .canvas-wrapper").removeClass("active");
            $(".kits." + currentKit + " .canvas-wrapper[data-view=" + $(this).data('view') + "]").addClass("review-active");
            $(".kits." + currentKit + " .canvas-wrapper[data-view=" + $(this).data('view') + "]").addClass("active");

            ///VERTICAL SIDEWAYS and STANDARD VERTICAL after Page refresh
            //Start
            if (ProductKit.kit_0.sku === "STYLE 59") {
                if ((classes[2] === "kit_0" || classes[2] === "kit_2" || classes[2] === "kit_1" || classes[2] === "kit_3" || classes[2] === "kit_4") && (position === "_Left" || position === "_Right")) {
                    var clickedView = classes[2].split("_")[1];
                    var Contant = $("#text_palette_" + clickedView + position + "_" + clickedView + " .text_layer");
                    if (Contant.length > 0) {
                        for (var i = 0; i < Contant.length; i++) {
                            var GetId = Contant[i].getAttribute('id');
                            var Shapes = $("#" + GetId + " .panel div:nth-child(9) .layout-change");

                            $.each(Shapes[0], function (key, value) {
                                //var ShapeName = $(this).attr('value');
                                //if (ShapeName === "vertical" || ShapeName === "straight") {
                                //   // $(this).css("display", "block");
                                //   $(this).attr("style", "display:block");
                                //    if (ShapeName === "straight") {
                                //        $(this).text('VERTICAL SIDEWAYS');
                                //    }
                                //    else {
                                //        $(this).text('STANDARD VERTICAL');
                                //    }
                                //}
                                //else {
                                //$(this).attr("style", "display:none");
                                //    //$(this).css("display", "none");
                                //}
                                Shapes[0].innerHTML = " ";
                                $(Shapes[0]).append("<option value='straight' checked=''>VERTICAL SIDEWAYS</option><option value='vertical'>STANDARD VERTICAL</option>");
                            });
                        }
                    }
                }
            }
            //End
        });
        $('body').on('click', '[data-save]', function () {
            $('body').addClass('working');
            var IsAdmin = false;
            Api.call(Api.endpoints.getAdmin, JSON.stringify({}), function (Data) {
                if (Data != null) {
                    if (Data == "Admin") {
                        IsAdmin = true;
                    }
                }

                for (var i = 0; i < Builder.kitTotalCount; i++) {
                    Api.call(Api.endpoints.saveDesign,
                        JSON.stringify(Builder.productKitDataForSaving("NEW", IsAdmin, i)),
                        Builder.acknowledgeSaveKit(i));
                }
            });

        });

        //21/2/2019
        //Important--Check user Loged in or not and also save customization(text image ,logo) etc  in for Multipal Product or Kit Section
        //Start 
        $('#SaveShareButton').on('click', function () {
            var step = Builder.step;
            if (step <= Builder.maxStep && step >= 0 && !$.QueryString['f']) {
                if ((step == 2 || step == 3 || step == 4) && Builder.userData.ID < 0) {
                    var IsAdmin = false;
                    //Api.call(Api.endpoints.getAdmin, JSON.stringify({}), function (Data) {
                    //    if (Data != null) {
                    //        if (Data == "Admin") {
                    //            IsAdmin = true;
                    //            //IsLogin = true;                                                             
                    //            //save Design
                    //            for (var i = 0; i < Builder.kitTotalCount; i++) {
                    //                Api.call(Api.endpoints.saveDesign,
                    //                    JSON.stringify(Builder.productKitDataForSaving("NEW", IsAdmin, i)),
                    //                    Builder.acknowledgeSaveArtworkOrCustomizationForKit(i));
                    //            }
                    //            //4/3/2019
                    //            //Important--Get Current Svg Image Path
                    //            // Start                               
                    //            Builder.SaveandSharebuttonForKit();
                    //            // End                              
                    //        }
                    //        else {
                    //            // IsLogin = false;
                    //            $('.share').hide();
                    //            var IsViewOnly = $('body').hasClass('view-only');
                    //            if (IsViewOnly !== true) {
                    //                CK.alert(300);
                    //            }                            }
                    //    }
                    //});
                    for (var i = 0; i < Builder.kitTotalCount; i++) {
                        Api.call(Api.endpoints.saveDesign,
                            JSON.stringify(Builder.productKitDataForSaving("NEW", IsAdmin, i)),
                            Builder.acknowledgeSaveArtworkOrCustomizationForKit(i));
                    }
                    Builder.SaveandSharebuttonForKit();
                }
                //25/2/2019
                else {
                    Api.call(Api.endpoints.getAdmin, JSON.stringify({}), function (Data) {
                        if (Data != null) {
                            IsAdmin = false;
                            //IsLogin = true;                             

                            //save customization 
                            if (step != 1) {
                                //save Design
                                for (var i = 0; i < Builder.kitTotalCount; i++) {
                                    Api.call(Api.endpoints.saveDesign,
                                        JSON.stringify(Builder.productKitDataForSaving("NEW", IsAdmin, i)),
                                        Builder.acknowledgeSaveArtworkOrCustomizationForKit(i));
                                }
                            }
                            if (step == 1) {
                                $('.share').hide();
                            }
                            else {
                                //4/3/2019
                                //Important--Get Current Svg Image Path
                                // Start
                                Builder.SaveandSharebuttonForKit();
                                // End                                
                            }
                        }
                    });
                }
            }
        });

        /// End       

        $('body').on('click', '[data-nav]', function () {
            console.log('next');
            $('body').addClass('working');
            var kit = $('.kit span.active').attr('data-count');
            var step = $('.row.steps span.active').attr('data-nav');
            if (kit == 2 && (step == '2' || step == '1')) {
                $('.optionall').hide();
                $('.option3').show();
            } else if (kit == 2 && step != '2') {
                $('.optionall').show();
                $('.option3').hide();
            }

            //console.log('save data', JSON.stringify(Builder.productDataForSaving()));
            for (var i = 0; i < Builder.kitTotalCount; i++) {
                Api.call(Api.endpoints.saveDesign,
                    JSON.stringify(Builder.productKitDataForSaving("NEW", false, i)),
                    Builder.acknowledgeSaveQuietly);
            }
        });
        $(".logos ul li").click(function (e) {
            e.preventDefault();
            var svg = $(this).children("div").html();//.children("svg")
            $(".modal.stock-logos .close").trigger('click');
            svgText.addKitSVGLogo(svg, $(this).attr("data-svg"));
        });
    },
    displayKitProduct: function (kitNo, KitProduct) {
        console.log('displayKitProduct');

        if ($('body').hasClass("front-only") && kitNo == 0) {
            $("body").addClass("loaded");
            $("body").addClass(Product.sku);
            if (Product.hasOwnProperty('blackOnly'))
                $("body").addClass('blackOnly');
            console.log('Product sku', Product.sku);
            //change Kit Name
            var condtion = null;
            //Load kit Name for First Time Rest logic is implemented on Kit Click Function...
            switch (Product.sku) {
                case '100-UNIQUE':
                    $(".kits.kit_" + kitNo + " .product-title .text").text(Product.ProductName + '(' + '100%-UNIQUE' + ')');
                    break;
                case 'CK STYLE':
                    $(".kits.kit_" + kitNo + " .product-title .text").text(Product.ProductName + '(' + 'CK STYLE' + ')');
                    break;
                case 'DT STYLE':
                    $(".kits.kit_" + kitNo + " .product-title .text").text(Product.ProductName + '(' + 'DT STYLE' + ')');
                    break;
                case 'MESH BACK STYLE':
                    $(".kits.kit_" + kitNo + " .product-title .text").text(Product.ProductName + '(' + 'MESH BACK STYLE' + ')');
                    $(".main .product-title").css("font-size", "23px");
                    break;
                case 'SCAC STYLE':
                    $(".kits.kit_" + kitNo + " .product-title .text").text(Product.ProductName + '(' + 'SCAC STYLE' + ')');
                    break;
                case 'STYLE 21':
                    $(".kits.kit_" + kitNo + " .product-title .text").text(Product.ProductName + '(' + 'STYLE 21' + ')');
                    break;
                case 'STYLE 24':
                    $(".kits.kit_" + kitNo + " .product-title .text").text(Product.ProductName + '(' + 'STYLE 24' + ')');
                    break;
                case 'STYLE 43':
                    $(".kits.kit_" + kitNo + " .product-title .text").text(Product.ProductName + '(' + 'STYLE 43' + ')');
                    break;
                case 'STYLE 52':
                    $(".kits.kit_" + kitNo + " .product-title .text").text(Product.ProductName + '(' + 'STYLE 52' + ')');
                    break;
                case 'STYLE 53':
                    $(".kits.kit_" + kitNo + " .product-title .text").text(Product.ProductName + '(' + 'STYLE 53' + ')');
                    break;
                case 'STYLE 54':
                    $(".kits.kit_" + kitNo + " .product-title .text").text(Product.ProductName + '(' + 'STYLE 54' + ')');
                    break;
                case 'STYLE 55':
                    $(".kits.kit_" + kitNo + " .product-title .text").text(Product.ProductName + '(' + 'STYLE 55' + ')');
                    break;
                case 'STYLE 56':
                    $(".kits.kit_" + kitNo + " .product-title .text").text(Product.ProductName + '(' + 'STYLE 56' + ')');
                    break;
                case 'STYLE 57':
                    $(".kits.kit_" + kitNo + " .product-title .text").text(Product.ProductName + '(' + 'STYLE 57' + ')');
                    break;
                case 'STYLE 58':
                    $(".kits.kit_" + kitNo + " .product-title .text").text(Product.ProductName + '(' + 'STYLE 58' + ')');
                    break;
                case 'STYLE 59':
                    $(".kits.kit_" + kitNo + " .product-title .text").text(Product.ProductName + '(' + 'STYLE 59' + ')');
                    break;
                case 'STYLE 60':
                    $(".kits.kit_" + kitNo + " .product-title .text").text(Product.ProductName + '(' + 'STYLE 60' + ')');
                    break;
                case 'STYLE 61':
                    $(".kits.kit_" + kitNo + " .product-title .text").text(Product.ProductName + '(' + 'STYLE 61' + ')');
                    break;
                default:
                    break;

            }

            // for hide product name on locker
            if ($('body').hasClass("view-only")) {
                $(".kits.kit_" + kitNo + " .product-title .text").text("");
            }
            //important

            // set Height between 2 color panels in  TPTION 3(kit) for (100%-UNIQUE) and also style 24 option 3  and also se max height of lower panel in option 3
            var status1 = $("body").hasClass("S7943J-SINGLET");
            var status2 = $("body").hasClass("S794324-SINGLET");
            var status3 = $("body").hasClass("SBDUSMB-SBRDSMB");
            var status4 = $("body").hasClass("SBRDSAC-SHORTS");
            var status5 = $("body").hasClass("SBRDS21-SHORTS");
            var status6 = $("body").hasClass("SBRDS54-SHORTS");

            if (status1) {
                if (kitNo == '2') {
                    $('#option3top').css({ "min-height": "418px", "overflow": "auto" });
                    $('#MaxHeightOption3').css("max-height", "716px");
                }
            }
            if (status2) {
                if (kitNo == '2') {
                    $('#option3top').css({ "min-height": "418px", "overflow": "auto" });
                    $('#MaxHeightOption3').css("max-height", "721px");
                }
            }
            if (status3) {
                if (kitNo == '2') {
                    $('#MaxHeightOption3').css("max-height", "697px");
                }
            }
            if (status4) {
                if (kitNo == '2') {
                    $('#MaxHeightOption3').css("max-height", "768px");
                }
            }
            if (status5) {
                if (kitNo == '2') {
                    $('#MaxHeightOption3').css("max-height", "635px");
                }
            }
            if (status6) {
                if (kitNo == '2') {
                    $('#MaxHeightOption3').css("max-height", "634px");
                }
            }
            // fabrics
            $('.kits.kit_' + kitNo + ' .option-set.fabric').empty();

            if (Product.fabricOptions[0].id >= 0) {
                $(Product.fabricOptions).each(function () {
                    var html = '<div class="fabric-opt" data-fabric-id="' + this.id + '">';
                    html += "<strong>" + this.name + "</strong>";
                    html += "<p>" + this.description + "</p>";
                    html += '</div>';

                    $('.kits.kit_' + kitNo + ' .option-set.fabric').append($(html));
                });
                $('.kits.kit_' + kitNo + ' .option-set.fabric').on('click', '[data-fabric-id]:not(.active)', function () {
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
                            });
                        }
                    });
                });
            } else {
                $('.kits.kit_' + kitNo + ' .option-set.fabric, .navigation .steps span[data-nav=0]').hide();

                //pending
                $('.steps em').eq(0).hide();
                $('.navigation .steps span[data-nav=0]').trigger('click');

            }

            // views
            $('.preview-nav.kit_' + kitNo + ' [data-view]').addClass('hide');
            if (Builder.frontOnly) {
                Builder.viewsToLoad = 1;
                kitView['kit_' + kitNo].viewsToLoadKit = 1;
                $('.preview-nav.kit_' + kitNo + ' [data-view]').eq(0).removeClass('hide');
                Builder.loadKitGarmentSvg(0, kitNo, KitProduct);
            }
            else {

                Builder.viewsToLoad = 0;
                Builder.viewsLoaded = 0;
                kitView['kit_' + kitNo].viewsToLoadKit = 0;
                kitView['kit_' + kitNo].viewsLoadedKit = 0;
                $(ProductKit['kit_' + kitNo].views).each(function () {
                    if (this != false)
                        kitView['kit_' + kitNo].viewsToLoadKit++;
                });
                $(ProductKit['kit_' + kitNo].views).each(function (e, i) {
                    if (this != false) {
                        $('.preview-nav.kit_' + kitNo + ' [data-view]').eq(e).removeClass('hide');
                        Builder.loadKitGarmentSvg(e, kitNo, KitProduct);
                    }
                });
            }


            $(".preview").attr("data-views", kitView['kit_' + kitNo].viewsToLoadKit);
            //sizing
            $('[data-min]').text(Product.minQuantity);

            //$('.sizing-chart-options-women').empty();
            //$('.sizing-chart-options').empty();

            //important
            $('.sizing-chart-optionsForkit-women').empty();
            $('.sizing-chart-optionsForkit').empty();
            //important----- Displaying all kit paoduct sizes based on based on specific kit product        


            //  if (kitNo = 1 || kitNo = 3){
            //if (kitNo = 1) {

            //Appent(Bind) sizes chart for OPTION2 and OPTION4

            //Calling tabevent function on onkeydwon function 23 aug 2019
            $(Product.sizesShirt).each(function () {
                var html = '<div class="row" data-size="' + this + '">';
                html += '<div class="col"><strong>' + this + '</strong></div>';
                html += '<div class="col men">:<input class="inputidmen" type="text" value="" autocomplete="off" onkeydown="return tabevent(this,' + kitNo + ',event)" onkeypress="return isNumberKey(event)" onchange="return totalPrice(' + kitNo + ')"  name="' + this + '" /></div>';
                //html += '<div class="col per-piece">N/A<span></span></div>';
                html += '<div class="col per-piece">$0.00<span></span></div>';
                html += '<div class="col piece-total">0.00</div>';
                html += '</div>';

                if (kitNo == 1) {
                    $('.sizing-chart-optionsForkit_1').append($(html));
                }

                else if (kitNo == 3) {
                    $('.sizing-chart-optionsForkit_3').append($(html));
                }
            });
            $(Product.wsizesShirt).each(function () {
                var html = '<div class="row" data-size="' + this + '">';
                html += '<div class="col"><strong>' + this + '</strong></div>';
                html += '<div class="col women">:<input class="inputidwomen" type="text" value="" autocomplete="off" onkeydown="return tabevent(this,' + kitNo + ',event)" onkeypress="return isNumberKey(event)" onchange="return totalPrice(' + kitNo + ')"  name="' + this + '" /></div>';
                //html += '<div class="col per-piece">N/A<span></span></div>';
                html += '<div class="col per-piece">$0.00<span></span></div>';
                html += '<div class="col piece-total">0.00</div>';
                html += '</div>';

                if (kitNo == 1) {
                    $('.sizing-chart-optionsForkit_1-women').append($(html));
                }
                else if (kitNo == 3) {
                    $('.sizing-chart-optionsForkit_3-women').append($(html));
                }
            });
            $(Product.sizesShorts).each(function () {

                var html = '<div class="row" data-size="' + this + '">';
                html += '<div class="col"><strong>' + this + '</strong></div>';
                html += '<div class="col men">:<input class="inputidmen" type="text" value="" onkeydown="return tabevent(this,' + kitNo + ',event)" autocomplete="off" onkeypress="return isNumberKey(event)" onchange="return totalPrice(' + kitNo + ')"  name="' + this + '" /></div>';
                //html += '<div class="col per-piece">N/A<span></span></div>';
                html += '<div class="col per-piece">$0.00<span></span></div>';
                html += '<div class="col piece-total">0.00</div>';
                html += '</div>';

                if (kitNo == 1) {
                    $('.sizing-chart-kit_OPTION2_Shorts_Men').append($(html));
                }

                else if (kitNo == 3) {
                    $('.sizing-chart-kit_OPTION4_Shorts_Men').append($(html));

                }
            });
            $(Product.wsizesShorts).each(function () {

                var html = '<div class="row" data-size="' + this + '">';
                html += '<div class="col"><strong>' + this + '</strong></div>';
                html += '<div class="col women">:<input class="inputidwomen" type="text" value="" onkeydown="return tabevent(this,' + kitNo + ',event)" autocomplete="off" onkeypress="return isNumberKey(event)" onchange="return totalPrice(' + kitNo + ')"  name="' + this + '" /></div>';
                //html += '<div class="col per-piece">N/A<span></span></div>';
                html += '<div class="col per-piece">$0.00<span></span></div>';
                html += '<div class="col piece-total">0.00</div>';
                html += '</div>';

                if (kitNo == 1) {
                    $('.sizing-chart-kit_OPTION2_Shorts_women').append($(html));
                }

                else if (kitNo == 3) {
                    $('.sizing-chart-kit_OPTION4_Shorts_women').append($(html));

                }
            });

            $(Product.sizes).each(function () {

                var html = '<div class="row" data-size="' + this + '">';
                html += '<div class="col"><strong>' + this + '</strong></div>';
                html += '<div class="col men">:<input class="inputidmen" type="text" value="" onkeydown="return tabevent(this,' + kitNo + ',event)" autocomplete="off" onkeypress="return isNumberKey(event)" onchange="return totalPrice(' + kitNo + ')"  name="' + this + '" /></div>';
                //html += '<div class="col per-piece">N/A<span></span></div>';
                html += '<div class="col per-piece">$0.00<span></span></div>';
                html += '<div class="col piece-total">0.00</div>';
                html += '</div>';


                if (kitNo == 0) {
                    $('.sizing-chart-optionsForkit_0').append($(html));
                }
                //else if (kitNo == 1) {
                //    $('.sizing-chart-optionsForkit_1').append($(html));
                //}
                else if (kitNo == 2) {
                    $('.sizing-chart-optionsForkit_2').append($(html));
                }
                //else if (kitNo == 3) {
                //    $('.sizing-chart-optionsForkit_3').append($(html));
                //}
                else if (kitNo == 4) {
                    $('.sizing-chart-optionsForkit_4').append($(html));
                }
            });
            // $(".kits .kit_4 .option3").removeClass("active");
            // $(".option-set.sizing>.sub-title .womens").css({ 'display': 'none' });
            if (Product.wSku != null) {
                $(Product.wSizes).each(function () {
                    var html = '<div class="row" data-size="' + this + '">';
                    html += '<div class="col"><strong>' + this + '</strong></div>';
                    html += '<div class="col women">:<input class="inputidwomen" type="text" value="" onkeydown="return tabevent(this,' + kitNo + ',event)" autocomplete="off" onkeypress="return isNumberKey(event)" onchange="return totalPriceWomen(' + kitNo + ')" name="' + this + '" /></div>';
                    //html += '<div class="col per-piece">N/A<span></span></div>';
                    html += '<div class="col per-piece">$0.00<span></span></div>';
                    html += '<div class="col piece-total">0.00</div>';
                    html += '</div>';
                    //$('.sizing-chart-options-women').append($(html));

                    //important-----Appent sizes chart For Specific Product Of Kit in Women Section
                    if (kitNo == 0) {
                        $('.sizing-chart-optionsForkit_0-women').append($(html));
                    }
                    //else if (kitNo == 1) {
                    //    $('.sizing-chart-optionsForkit_1-women').append($(html));
                    //}
                    else if (kitNo == 2) {
                        $('.sizing-chart-optionsForkit_2-women').append($(html));
                    }
                    //else if (kitNo == 3) {
                    //    $('.sizing-chart-optionsForkit_3-women').append($(html));
                    //}
                    else if (kitNo == 4) {
                        $('.sizing-chart-optionsForkit_4-women').append($(html));
                    }
                });
            }
            //End tabevent function







            if (Product.hasOwnProperty('printEmbroideryOption')) {
                //Important--9/4/2019 remove Stock from All Custom Warm-ups
                if (Product.category === "Custom Warm-ups") {
                    $(".embroideryNoteForCustomWarmUps").css("display", "block");
                    $(".embroideryNoteForCustomWarmUps").addClass("active");
                }
                else {
                    $(".embroideryNoteForCustomWarmUps").css("display", "none");
                    $(".embroidery-note").addClass("active");
                }
            }
            Builder.initKitUi(kitNo, KitProduct);
        }
        else {
            $("body").addClass(Product.sku);
            if (Product.hasOwnProperty('blackOnly'))
                $("body").addClass('blackOnly');
            console.log('Product sku', Product.sku);
            //change Kit Name
            var condtion = null;
            //Load kit Name for First Time Rest logic is implemented on Kit Click Function...
            switch (Product.sku) {
                case '100-UNIQUE':
                    $(".kits.kit_" + kitNo + " .product-title .text").text(Product.ProductName + '(' + '100%-UNIQUE' + ')');
                    break;
                case 'CK STYLE':
                    $(".kits.kit_" + kitNo + " .product-title .text").text(Product.ProductName + '(' + 'CK STYLE' + ')');
                    break;
                case 'DT STYLE':
                    $(".kits.kit_" + kitNo + " .product-title .text").text(Product.ProductName + '(' + 'DT STYLE' + ')');
                    break;
                case 'MESH BACK STYLE':
                    $(".kits.kit_" + kitNo + " .product-title .text").text(Product.ProductName + '(' + 'MESH BACK STYLE' + ')');
                    $(".main .product-title").css("font-size", "23px");
                    break;
                case 'SCAC STYLE':
                    $(".kits.kit_" + kitNo + " .product-title .text").text(Product.ProductName + '(' + 'SCAC STYLE' + ')');
                    break;
                case 'STYLE 21':
                    $(".kits.kit_" + kitNo + " .product-title .text").text(Product.ProductName + '(' + 'STYLE 21' + ')');
                    break;
                case 'STYLE 24':
                    $(".kits.kit_" + kitNo + " .product-title .text").text(Product.ProductName + '(' + 'STYLE 24' + ')');
                    break;
                case 'STYLE 43':
                    $(".kits.kit_" + kitNo + " .product-title .text").text(Product.ProductName + '(' + 'STYLE 43' + ')');
                    break;
                case 'STYLE 52':
                    $(".kits.kit_" + kitNo + " .product-title .text").text(Product.ProductName + '(' + 'STYLE 52' + ')');
                    break;
                case 'STYLE 53':
                    $(".kits.kit_" + kitNo + " .product-title .text").text(Product.ProductName + '(' + 'STYLE 53' + ')');
                    break;
                case 'STYLE 54':
                    $(".kits.kit_" + kitNo + " .product-title .text").text(Product.ProductName + '(' + 'STYLE 54' + ')');
                    break;
                case 'STYLE 55':
                    $(".kits.kit_" + kitNo + " .product-title .text").text(Product.ProductName + '(' + 'STYLE 55' + ')');
                    break;
                case 'STYLE 56':
                    $(".kits.kit_" + kitNo + " .product-title .text").text(Product.ProductName + '(' + 'STYLE 56' + ')');
                    break;
                case 'STYLE 57':
                    $(".kits.kit_" + kitNo + " .product-title .text").text(Product.ProductName + '(' + 'STYLE 57' + ')');
                    break;
                case 'STYLE 58':
                    $(".kits.kit_" + kitNo + " .product-title .text").text(Product.ProductName + '(' + 'STYLE 58' + ')');
                    break;
                case 'STYLE 59':
                    $(".kits.kit_" + kitNo + " .product-title .text").text(Product.ProductName + '(' + 'STYLE 59' + ')');
                    break;
                case 'STYLE 60':
                    $(".kits.kit_" + kitNo + " .product-title .text").text(Product.ProductName + '(' + 'STYLE 60' + ')');
                    break;
                case 'STYLE 61':
                    $(".kits.kit_" + kitNo + " .product-title .text").text(Product.ProductName + '(' + 'STYLE 61' + ')');
                    break;
                default:
                    break;

            }

            // for hide product name on locker
            if ($('body').hasClass("view-only")) {
                $(".kits.kit_" + kitNo + " .product-title .text").text("");
            }
            //important

            // set Height between 2 color panels in  TPTION 3(kit) for (100%-UNIQUE) and also style 24 option 3  and also se max height of lower panel in option 3
            var status1 = $("body").hasClass("S7943J-SINGLET");
            var status2 = $("body").hasClass("S794324-SINGLET");
            var status3 = $("body").hasClass("SBDUSMB-SBRDSMB");
            var status4 = $("body").hasClass("SBRDSAC-SHORTS");
            var status5 = $("body").hasClass("SBRDS21-SHORTS");
            var status6 = $("body").hasClass("SBRDS54-SHORTS");

            if (status1) {
                if (kitNo == '2') {
                    $('#option3top').css({ "min-height": "418px", "overflow": "auto" });
                    $('#MaxHeightOption3').css("max-height", "716px");
                }
            }
            if (status2) {
                if (kitNo == '2') {
                    $('#option3top').css({ "min-height": "418px", "overflow": "auto" });
                    $('#MaxHeightOption3').css("max-height", "721px");
                }
            }
            if (status3) {
                if (kitNo == '2') {
                    $('#MaxHeightOption3').css("max-height", "697px");
                }
            }
            if (status4) {
                if (kitNo == '2') {
                    $('#MaxHeightOption3').css("max-height", "768px");
                }
            }
            if (status5) {
                if (kitNo == '2') {
                    $('#MaxHeightOption3').css("max-height", "635px");
                }
            }
            if (status6) {
                if (kitNo == '2') {
                    $('#MaxHeightOption3').css("max-height", "634px");
                }
            }
            // fabrics
            $('.kits.kit_' + kitNo + ' .option-set.fabric').empty();

            if (Product.fabricOptions[0].id >= 0) {
                $(Product.fabricOptions).each(function () {
                    var html = '<div class="fabric-opt" data-fabric-id="' + this.id + '">';
                    html += "<strong>" + this.name + "</strong>";
                    html += "<p>" + this.description + "</p>";
                    html += '</div>';

                    $('.kits.kit_' + kitNo + ' .option-set.fabric').append($(html));
                });
                $('.kits.kit_' + kitNo + ' .option-set.fabric').on('click', '[data-fabric-id]:not(.active)', function () {
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
                $('.kits.kit_' + kitNo + ' .option-set.fabric, .navigation .steps span[data-nav=0]').hide();

                //pending
                $('.steps em').eq(0).hide();
                $('.navigation .steps span[data-nav=0]').trigger('click');

            }

            // views
            $('.preview-nav.kit_' + kitNo + ' [data-view]').addClass('hide');
            if (Builder.frontOnly) {
                Builder.viewsToLoad = 1;
                kitView['kit_' + kitNo].viewsToLoadKit = 1;
                $('.preview-nav.kit_' + kitNo + ' [data-view]').eq(0).removeClass('hide');
                Builder.loadKitGarmentSvg(0, kitNo, KitProduct);
            }
            else {

                Builder.viewsToLoad = 0;
                Builder.viewsLoaded = 0;
                kitView['kit_' + kitNo].viewsToLoadKit = 0;
                kitView['kit_' + kitNo].viewsLoadedKit = 0;
                $(ProductKit['kit_' + kitNo].views).each(function () {
                    if (this != false)
                        kitView['kit_' + kitNo].viewsToLoadKit++;
                });
                $(ProductKit['kit_' + kitNo].views).each(function (e, i) {
                    if (this != false) {
                        $('.preview-nav.kit_' + kitNo + ' [data-view]').eq(e).removeClass('hide');
                        Builder.loadKitGarmentSvg(e, kitNo, KitProduct);
                    }
                });
            }
            //Important--Add View name  for view-only  case
            //Start
            var option = kitNo + 1;
            if (kitView['kit_' + kitNo].viewsToLoadKit === 4) {
                $('#option' + option + 'ForKit_' + kitNo + '_Front').before('<label class="viewOnlyLabel_view" style="display: none">Front</label>');
                $('#option' + option + 'ForKit_' + kitNo + '_Back').before('<label class="viewOnlyLabel_view" style="display: none">Back</label>');
                $('#option' + option + 'ForKit_' + kitNo + '_Left').before('<label class="viewOnlyLabel_view" style="display: none">Left</label>');
                $('#option' + option + 'ForKit_' + kitNo + '_Right').before('<label class="viewOnlyLabel_view" style="display: none">Right</label>');
            }
            else if (kitView['kit_' + kitNo].viewsToLoadKit === 3) {
                $('#option' + option + 'ForKit_' + kitNo + '_Front').before('<label  class="viewOnlyLabel_view" style="display: none">Front</label>');
                $('#option' + option + 'ForKit_' + kitNo + '_Back').before('<label  class="viewOnlyLabel_view" style="display: none">Back</label>');
                $('#option' + option + 'ForKit_' + kitNo + '_Left').before('<label  class="viewOnlyLabel_view" style="display: none">Left</label>');
            }
            else if (kitView['kit_' + kitNo].viewsToLoadKit === 2) {
                $('#option' + option + 'ForKit_' + kitNo + '_Front').before('<label class="viewOnlyLabel_view" style="display: none">Front</label>');
                $('#option' + option + 'ForKit_' + kitNo + '_Back').before('<label  class="viewOnlyLabel_view" style="display: none">Back</label>');
            }
            else if (kitView['kit_' + kitNo].viewsToLoadKit === 1) {
                $('#option' + option + 'ForKit_' + kitNo + '_Front').before('<label  class="viewOnlyLabel_view" style="display: none">Front</label>');
            }
            //end

            $(".preview").attr("data-views", kitView['kit_' + kitNo].viewsToLoadKit);
            //sizing
            $('[data-min]').text(Product.minQuantity);

            //$('.sizing-chart-options-women').empty();
            //$('.sizing-chart-options').empty();

            //important
            $('.sizing-chart-optionsForkit-women').empty();
            $('.sizing-chart-optionsForkit').empty();
            //important----- Displaying all kit paoduct sizes based on based on specific kit product        


            //  if (kitNo = 1 || kitNo = 3){
            //if (kitNo = 1) {

            //Appent(Bind) sizes chart for OPTION2 and OPTION4
            //Calling tabevent function on onkeydwon function 23 aug 2019
            $(Product.sizesShirt).each(function () {

                var html = '<div class="row" data-size="' + this + '">';
                html += '<div class="col"><strong>' + this + '</strong></div>';
                html += '<div class="col men">:<input class="inputidmen" type="text" value="" onkeydown="return tabevent(this,' + kitNo + ',event)" autocomplete="off" onkeypress="return isNumberKey(event)" onchange="return totalPrice(' + kitNo + ')"  name="' + this + '" /></div>';
                //html += '<div class="col per-piece">N/A<span></span></div>';
                html += '<div class="col per-piece">$0.00<span></span></div>';
                html += '<div class="col piece-total">0.00</div>';
                html += '</div>';

                if (kitNo == 1) {
                    $('.sizing-chart-optionsForkit_1').append($(html));
                }

                else if (kitNo == 3) {
                    $('.sizing-chart-optionsForkit_3').append($(html));
                }
            });
            $(Product.wsizesShirt).each(function () {

                var html = '<div class="row" data-size="' + this + '">';
                html += '<div class="col"><strong>' + this + '</strong></div>';
                html += '<div class="col women">:<input class="inputidwomen" type="text" value="" onkeydown="return tabevent(this,' + kitNo + ',event)" autocomplete="off" onkeypress="return isNumberKey(event)" onchange="return totalPrice(' + kitNo + ')"  name="' + this + '" /></div>';
                //html += '<div class="col per-piece">N/A<span></span></div>';
                html += '<div class="col per-piece">$0.00<span></span></div>';
                html += '<div class="col piece-total">0.00</div>';
                html += '</div>';

                if (kitNo == 1) {
                    $('.sizing-chart-optionsForkit_1-women').append($(html));
                }
                else if (kitNo == 3) {
                    $('.sizing-chart-optionsForkit_3-women').append($(html));
                }
            });
            $(Product.sizesShorts).each(function () {

                var html = '<div class="row" data-size="' + this + '">';
                html += '<div class="col"><strong>' + this + '</strong></div>';
                html += '<div class="col men">:<input class="inputidmen" type="text" onkeydown="return tabevent(this,' + kitNo + ',event)" value="" autocomplete="off" onkeypress="return isNumberKey(event)" onchange="return totalPrice(' + kitNo + ')"  name="' + this + '" /></div>';
                //html += '<div class="col per-piece">N/A<span></span></div>';
                html += '<div class="col per-piece">$0.00<span></span></div>';
                html += '<div class="col piece-total">0.00</div>';
                html += '</div>';

                if (kitNo == 1) {
                    $('.sizing-chart-kit_OPTION2_Shorts_Men').append($(html));
                }

                else if (kitNo == 3) {
                    $('.sizing-chart-kit_OPTION4_Shorts_Men').append($(html));

                }
            });
            $(Product.wsizesShorts).each(function () {

                var html = '<div class="row" data-size="' + this + '">';
                html += '<div class="col"><strong>' + this + '</strong></div>';
                html += '<div class="col women">:<input class="inputidwomen" type="text" onkeydown="return tabevent(this,' + kitNo + ',event)" value="" autocomplete="off" onkeypress="return isNumberKey(event)" onchange="return totalPrice(' + kitNo + ')"  name="' + this + '" /></div>';
                //html += '<div class="col per-piece">N/A<span></span></div>';
                html += '<div class="col per-piece">$0.00<span></span></div>';
                html += '<div class="col piece-total">0.00</div>';
                html += '</div>';

                if (kitNo == 1) {
                    $('.sizing-chart-kit_OPTION2_Shorts_women').append($(html));
                }

                else if (kitNo == 3) {
                    $('.sizing-chart-kit_OPTION4_Shorts_women').append($(html));

                }
            });
            $(Product.sizes).each(function () {

                var html = '<div class="row" data-size="' + this + '">';
                html += '<div class="col"><strong>' + this + '</strong></div>';
                html += '<div class="col men">:<input class="inputidmen" type="text" value="" onkeydown="return tabevent(this,' + kitNo + ',event)" autocomplete="off" onkeypress="return isNumberKey(event)" onchange="return totalPrice(' + kitNo + ')"  name="' + this + '" /></div>';
                //html += '<div class="col per-piece">N/A<span></span></div>';
                html += '<div class="col per-piece">$0.00<span></span></div>';
                html += '<div class="col piece-total">0.00</div>';
                html += '</div>';


                if (kitNo == 0) {
                    $('.sizing-chart-optionsForkit_0').append($(html));
                }
                //else if (kitNo == 1) {
                //    $('.sizing-chart-optionsForkit_1').append($(html));
                //}
                else if (kitNo == 2) {
                    $('.sizing-chart-optionsForkit_2').append($(html));
                }
                //else if (kitNo == 3) {
                //    $('.sizing-chart-optionsForkit_3').append($(html));
                //}
                else if (kitNo == 4) {
                    $('.sizing-chart-optionsForkit_4').append($(html));
                }
            });
            // $(".kits .kit_4 .option3").removeClass("active");
            // $(".option-set.sizing>.sub-title .womens").css({ 'display': 'none' });
            if (Product.wSku != null) {
                $(Product.wSizes).each(function () {
                    var html = '<div class="row" data-size="' + this + '">';
                    html += '<div class="col"><strong>' + this + '</strong></div>';
                    html += '<div class="col women">:<input class="inputidwomen" type="text" value="" onkeydown="return tabevent(this,' + kitNo + ',event)"autocomplete="off" onkeypress="return isNumberKey(event)" onchange="return totalPriceWomen(' + kitNo + ')" name="' + this + '" /></div>';
                    //html += '<div class="col per-piece">N/A<span></span></div>';
                    html += '<div class="col per-piece">$0.00<span></span></div>';
                    html += '<div class="col piece-total">0.00</div>';
                    html += '</div>';
                    //$('.sizing-chart-options-women').append($(html));

                    //important-----Appent sizes chart For Specific Product Of Kit in Women Section
                    if (kitNo == 0) {
                        $('.sizing-chart-optionsForkit_0-women').append($(html));
                    }
                    //else if (kitNo == 1) {
                    //    $('.sizing-chart-optionsForkit_1-women').append($(html));
                    //}
                    else if (kitNo == 2) {
                        $('.sizing-chart-optionsForkit_2-women').append($(html));
                    }
                    //else if (kitNo == 3) {
                    //    $('.sizing-chart-optionsForkit_3-women').append($(html));
                    //}
                    else if (kitNo == 4) {
                        $('.sizing-chart-optionsForkit_4-women').append($(html));
                    }
                });
            }



            //End

            if (Product.hasOwnProperty('printEmbroideryOption')) {
                //Important--9/4/2019 remove Stock from All Custom Warm-ups
                if (Product.category === "Custom Warm-ups") {
                    $(".embroideryNoteForCustomWarmUps").css("display", "block");
                    $(".embroideryNoteForCustomWarmUps").addClass("active");
                }
                else {
                    $(".embroideryNoteForCustomWarmUps").css("display", "none");
                    $(".embroidery-note").addClass("active");
                }
            }
            Builder.initKitUi(kitNo, KitProduct);
        }

    },
    loadKitGarmentSvg: function (viewId, kitNo, KitProduct) {

        console.log('loadKitGarmentSvg', viewId);
        var view = Builder.VIEWS[viewId];
        $.get("../svg/" + Product.sku + "/" + Product.sku + view + ".svg", function (data) {
            var svg = $(data).children("svg");
            $("g[id]", svg).each(function () {
                $(this).attr("id", ($(this).attr("id") + view + "_" + kitNo));

                $("path", $(this)).each(function () {
                    $(this).attr("data-orig-fill", $(this).attr("fill"));
                });
            });

            $(ProductKit['kit_' + kitNo].masks[view.substr(1)]).each(function () {

                var originalSvgShapeForMask = $("g[id^='" + this.name + "']:not([id*='PATTERN'])", svg);
                var cleansedMaskSvgHtml = '<svg height="0" width="0"><defs><clipPath id="mask-' + this.name + view + '_' + kitNo + '">';
                var allowed = { 'circle': 1, 'ellipse': 1, 'line': 1, 'path': 1, 'polygon': 1, 'polyline': 1, 'rect': 1, 'text': 1 };
                function parseChildren(node) {
                    $.each($(node).children(), function () {
                        if ($(this).children().length > 0)
                            parseChildren(this);

                        else {
                            if (allowed.hasOwnProperty(this.nodeName.toLowerCase()))
                                cleansedMaskSvgHtml += $('<div>').append($(this).clone()).html();
                        }
                    });
                }
                parseChildren(originalSvgShapeForMask);
                cleansedMaskSvgHtml += '</clipPath></defs></svg>';
                $(".svg-masks").append($(cleansedMaskSvgHtml));
                //Important
                //Start
                //Hide loader for OPTION 1 becase we have loaded all product of OPTION 1 and the we remove the loading
                var IsOption1Active = $('.kit .option-menu span[data-kit=kit_0]').hasClass('active');
                if ($("body").hasClass("loaded")) {
                    if (IsOption1Active === true) {
                        $(".lds-wrapper").hide();
                    }
                }
                switch (kitNo) {
                    //Important--All views of OPTION 1(Kit 0)     
                    case 0:
                        TotalKit0Count++;
                        break;
                    default:
                        console.log('there is something went wrong kindly check');
                }

                //End
            });
            var custom_svg = $("g[id^='CUSTOM']", svg);
            //  alert(".kits.kit_" + kitNo + " .canvas-wrapper[data-view=" + view + "] .svg");
            $(".kits.kit_" + kitNo + " .canvas-wrapper[data-view=" + view + "] .svg").html(svg);

            //custom_svg.attr("width", 360).attr("height", 756).attr("clip-path", "url(#"+defaultMask+")");
            var viewName = Builder.VIEWS[viewId].substr(1).toUpperCase();
            if (typeof (Product.views[viewId]) == "string")
                viewName = Product.views[viewId].toUpperCase();
            if (kitNo == 4) {
                $(".preview-nav.kit_" + kitNo + " a[data-view=" + view + "]").html("<br>" + viewName + " VIEW");
            } else {
                $(".preview-nav.kit_" + kitNo + " a[data-view=" + view + "]").html("<br>" + viewName + " VIEW");

            }
            Builder.viewsLoaded++;
            kitView['kit_' + kitNo].viewsLoadedKit++;
            Builder.checkKitLoadProgress("view", kitNo, KitProduct);
            console.log('kit read svg end ' + kitNo);

            //Important--This variable check how many svg has loded(use only for console.log purpose)
            var aaa = TotalCountForLoading++;
            //Important--All views of OPTION 1(Kit 0)
            //Important--loader will be diappear when all kit of OPTION 1 is loded and all front svg's of other OPTIONs(2,3,4)will be loaded
            //Start
            var totalViews_ForKit0 = $('.preview-nav.kits.kit_0 a').length;
            var totalHiddenViews_ForKit0 = $('.preview-nav.kits.kit_0 a.hide').length;
            totalViews_ForKit0 = totalViews_ForKit0 - totalHiddenViews_ForKit0;


            //Check OPTION 1.OPTION 2,OPTION 3 and Kit 4 all front svg are loded or not 
            Kit1 = $('.kits.kit_1.rev .canvas-wrapper.front .svg svg').length;
            Kit2 = $('.kits.kit_2.rev .canvas-wrapper.front .svg svg').length;
            Kit4 = $('.kits.kit_4.rev .canvas-wrapper.front .svg svg').length;
            Kit3 = $('.kits.kit_3.rev .canvas-wrapper.front .svg svg').length;
            OPTION3 = Kit2 + Kit4;
            var ActiveKitNo = $('.kit.active span.active').attr('data-count');
            if (Kit1 === 1 && ActiveKitNo === "1") {
                $(".lds-wrapper").hide();
            }
            if (Kit3 === 1 && ActiveKitNo === "3") {
                $(".lds-wrapper").hide();
            }
            if (OPTION3 === 2 && ActiveKitNo === "2") {
                $(".lds-wrapper").hide();
            }
            if (TotalKit0Count >= totalViews_ForKit0) {
                $('body').removeClass("changed").addClass('loaded');
                $('.kit.option-menu-head').attr("style", "display: block");
            }
            //End
        });
    },
    checkKitLoadProgress: function (type, kitNo, KitProduct) {
        console.log('checkKitLoadProgress', Builder.viewsLoaded, Builder.viewsToLoad);
        if (type == "view") {
            if (kitView['kit_' + kitNo].viewsLoadedKit >= kitView['kit_' + kitNo].viewsToLoadKit) {
                console.log('load kitno ', kitNo);
                Builder.displayKitProductColors(kitNo, KitProduct);
                Builder.populateKitColorsWithCustomization(KitProduct, kitNo);
                Builder.initKitPatterns(null, kitNo);
                console.log('svgText.initKit ' + kitNo);
                svgText.initKit(kitNo);
                //22/1/2019
                //Important --Commented code,Use this Loader into, initKitStepUi: Case1
                // $('body').removeClass("changed").addClass('loaded'); 

                //4/2/2019
                //localStorage.setItem('key', parseInt(TotalCountForKit) + 1);
                //total = localStorage.getItem('key');
                //TotalCountForKit = total;
                //localStorage.setItem('key', TotalCountForKit);
                //if (localStorage.getItem('key') >= "5") {
                //    $('body').removeClass("changed").addClass('loaded');
                //    localStorage.removeItem("key");
                //}


                //26/2/2019
                //Important--Remove "SAVE TO MY LOCKER", "SAVE AND SHARE" ,"NEXT AND PREV" in view-only mode for Kit Section
                //Start
                IsViewOnly = $("body").hasClass("view-only");
                if (IsViewOnly) {
                    //Important--Remove "Next and Prev" button In Case Of View Mode
                    $('.prev-next-wrapper').hide();
                    //Important--Remove "SAVE TO MY LOCKER" button In Case Of View Mode
                    $('.save').hide();
                    //Important--Remove "SAVE AND SHARE" button In Case Of View Mode
                    $('.btn.save-share').hide();
                    //Important--Remove "ICON SHARE" Like FACEBOOK,TWITTER,AND EMAIL button In Case Of View Mode
                    $('.share').hide();
                    //Important--Remove Two Line (-- ---) In Case Of View Mode
                    $('.save-next-wrapper').hide();
                    // Reomve Login Button Form Bottom Place
                    $('#HideItFormViewOnlyMode').hide();
                }
                //End

                if (Builder.viewOnly) $("g[id^=BOX]").hide();
                Builder.initKitStepUi(kitNo, KitProduct);
                console.log('checkKitLoadProgress end ' + kitNo);
                Builder.viewsLoaded = 0;

            }
        }
        else if (type == "logo") {

        }
    },
    initKitPatterns: function (force, kitNo) {
        if (!Builder.patternsDisplayed || force) {
            $(ProductKit['kit_' + kitNo].patternOptions).each(function () {
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

                $(".kits.kit_" + kitNo + " .svg g[id^='PATTERN']").attr("class", "hide-pattern");

                $(".kits.kit_" + kitNo + " .option-set.patterns").children("ul").append(el);//.addClass("active")

                $("#btn-pattern-" + id).bind('click', function () {
                    $("li.pattern").removeClass("active");
                    $(this).addClass('active');
                    Builder.enablePattern($(this).data('pattern-data'));

                    //trigger texture panels if texture not colors
                    if (id != parseInt(id)) {
                        $('li[data-code=' + id + ']:eq(0)').click();
                    }
                });
                $(".kits.kit_" + kitNo + " .option-set.patterns").attr("data-step", 1);
                if ($(".kits.kit_" + kitNo + " .option-set.color").hasClass("active")) $(".kits.kit_" + kitNo + " .option-set.patterns").addClass("active");
            });
            Builder.patternsDisplayed = true;
            if (ProductKit['kit_' + kitNo].hasOwnProperty('patternName'))
                $('div.patterns>.sub-title').text(ProductKit['kit_' + kitNo].patternName + " Patterns");
        }

        if (Builder.patternsDisplayed && (!CustKit['kit_' + kitNo].pattern)) CustKit['kit_' + kitNo].pattern = 1;

        if (CustKit['kit_' + kitNo].pattern && (CustKit['kit_' + kitNo].pattern > 0 || CustKit['kit_' + kitNo].pattern.length > 0)) {
            Builder.patternColorsTemp = CustKit['kit_' + kitNo].patternColors;
            $("#btn-pattern-" + CustKit['kit_' + kitNo].pattern).trigger('click');
            //console.log('Cust.patternColors', Cust.patternColors);
            for (var areaId in Builder.patternColorsTemp) {
                //console.log('patternColorsTemp obj', Builder.patternColorsTemp);
                var obj = Builder.patternColorsTemp[areaId];
                var panel = "PATTERN_" + CustKit['kit_' + kitNo].pattern + "_" + areaId;
                $(".kits.kit_" + kitNo + " .group[data-svg-id=" + panel + "] li[data-code=" + obj.color.code + "]").trigger('click');
            }
        }

    },
    initKitUi: function (kitNo, KitProduct) {

        console.log('initKitUi');
        $("[data-nav]").off('click');
        $("[data-nav]").on('click', function (e) {
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
                if (!Builder.validateKitStep(i, null, kitNo)) {

                    Builder.gotoKitStep(i, kitNo, KitProduct);
                    Builder.validateKitStep(i, true, kitNo)
                    keepGoing = false;
                    break;
                }
                //}
            }
            //if (Builder.step - oldStep > 1) {
            //    keepGoing = false;
            //}
            if (keepGoing) // if moving forward, validate the step first

                Builder.gotoKitStep(newStep, kitNo, KitProduct);


        })





        $('body').on('click', '.modal .close', function (e) {
            e.preventDefault();
            $(".modal, .modal-bknd").removeClass("active");

        });

        kit_No = $('.kit span.active').attr('data-count');

        $("#zoomClick").click(function () {
            var kit_No = $('.kit span.active').attr('data-count');
            $(".kits.kit_" + kit_No + " .preview-nav a:eq(0)").trigger("click");

            //Important-- display only current selected view after closing the magnify modal
            //Start
            counterFormagnify = 0;
            if (CurrentClickKitView === "_Front") {
                $(".preview-nav.kit_" + kit_No + " a:eq(0)").trigger("click");
            }
            else if (CurrentClickKitView === "_Back") {
                $(".preview-nav.kit_" + kit_No + " a:eq(1)").trigger("click");
            }
            else if (CurrentClickKitView === "_Left") {
                $(".preview-nav.kit_" + kit_No + " a:eq(2)").trigger("click");
            }
            else {
                $(".preview-nav.kit_" + kit_No + " a:eq(3)").trigger("click");
            }
            //End

        });
        //$(".option-set.sizing input").change(Builder.updateKitPricing(null, null, kitNo));       
        // FOR MEN
        $(".sizing-chart-optionsForkit_" + kitNo + " input").change(Builder.updateKitPricing(null, null, kitNo));


        //FOR WOMEN
        $(".sizing-chart-optionsForkit_" + kitNo + "-women input").change(Builder.updateKitPricing(null, null, kitNo));


        $(".button.print").off('click');
        $(".button.print").bind('click', function (e) {
            for (var i = 0; i < Builder.kitTotalCount; i++) {
                Api.call(Api.endpoints.saveDesign,
                    JSON.stringify(Builder.productKitDataForSaving("NEW", false, i)),
                    Builder.acknowledgeSaveQuietly);
            }
            e.preventDefault();
            var kitNo = $('.kit span.active').attr('data-count');
            $('.kits.kit_0.rev').addClass('active');
            $('.kits.kit_1.rev').addClass('active');
            $('.kits.kit_2.rev').addClass('active');
            $('.kits.kit_3.rev').addClass('active');
            window.print();
            $('.kits.kit_0.rev').removeClass('active');
            $('.kits.kit_1.rev').removeClass('active');
            $('.kits.kit_2.rev').removeClass('active');
            $('.kits.kit_3.rev').removeClass('active');
            $('.kits.kit_' + kitNo + '.rev').addClass('active');
        })


        /*$(".add-image").click(function(){
            Builder.addImage();
        });*/

        $(".kits.kit_" + kitNo + " .option-set.cuff .pattern").bind('click', function (e) {
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
            var kit_No = $('.kit span.active').attr('data-count');

            //Important--Get Current Click view name after clock on zoom or magnify
            //Start
            if (counterFormagnify === 0) {
                if (kit_No === "0") {
                    CurrentClickKitView = $(".preview-nav.kits.kit_0 a.active").attr('data-view');
                }
                else if (kit_No === "1") {
                    CurrentClickKitView = $(".preview-nav.kits.kit_1 a.active").attr('data-view');
                }
                else if (kit_No === "2" || kit_No === "4") {
                    CurrentClickKitView = $(".preview-nav.kits.kit_2 a.active").attr('data-view');
                }
                else {
                    CurrentClickKitView = $(".preview-nav.kits.kit_3 a.active").attr('data-view');
                }
                counterFormagnify++;
            }
            //End

            if ($(".kits.kit_" + kit_No + " .canvas-wrapper[data-view=_Back").hasClass("review-active")) {
                $(".preview-nav.kit_" + kit_No + " a:eq(1)").trigger("click");
            }
            if ($(".kits.kit_" + kit_No + " .canvas-wrapper[data-view=_Left").hasClass("review-active")) {
                $(".preview-nav.kit_" + kit_No + " a:eq(2)").trigger("click");
            }
            if ($(".kits.kit_" + kit_No + " .canvas-wrapper[data-view=_Right").hasClass("review-active")) {
                $(".preview-nav.kit_" + kit_No + " a:eq(3)").trigger("click");
            }

            //Important-- display only current selected view after closing the magnify modal
            //Start
            if (counterFormagnify === 1) {
                if (CurrentClickKitView === "_Front") {
                    $(".preview-nav.kit_" + kit_No + " a:eq(0)").trigger("click");
                }
                else if (CurrentClickKitView === "_Back") {
                    $(".preview-nav.kit_" + kit_No + " a:eq(1)").trigger("click");
                }
                else if (CurrentClickKitView === "_Left") {
                    $(".preview-nav.kit_" + kit_No + " a:eq(2)").trigger("click");
                }
                else {
                    $(".preview-nav.kit_" + kit_No + " a:eq(3)").trigger("click");
                }
            }
            //End
            setTimeout(function () {
                $(".kits.kit_" + kit_No + " .canvas-wrapper").each(function (e) {
                    html += "<div class='view'>" + $(this).children(".svg").html() + "</div>";
                    $(".modal.expand .content").html(html);
                    $(".modal.expand, .modal-bknd").addClass('active');

                });
            }, 2000);
        });

        $(".kits.kit_" + kitNo + " .option-set.review h3").click(function () {
            $(this).parent().toggleClass("active");
        });

        //$(".kits.kit_" + kitNo + " .button.custom-browse").bind('click', function (e) {
        //    e.preventDefault();
        //    //Important--When we click directly click on OPTION 1 ,OPTION 2 ,OPTION 3 directly The boundray box is not center position of Image
        //    // the following condition resolve the above situation
        //    //2/2/2019          
        //    // var view = $('.preview-nav.kit_' + kitNo + ' a.active').attr('data-view');
        //    // if (view = "_Front")
        //    // {
        //    //     var ActiveKit = $('.kit.active span.active').attr('data-count');
        //    //     svgText.setKitView(view, ActiveKit);
        //    // }

        //    //$("input.add-image").click();
        //    $("#upload-image_" + kitNo).click();
        //});
        $(".kits.kit_" + kitNo + " .button.custom-browse").on('change', function (e) {
            e.preventDefault();
            Builder.doubleKit = kitNo;
            if (kitNo == 2 || kitNo == 4) {
                var view = svgText.currentView;
                var currentView = view.split('_');
                svgText.currentView = '_' + currentView[1] + '_' + kitNo;
            }

            //$("#upload-image_" + kitNo).click();
            Builder.prepareKitUpload_TabImage(kitNo);
        });
        $(".kits.kit_" + kitNo + " .button.stock-logos").bind('click', function (e) {
            e.preventDefault();
            //if ($("a.stock-logos").parents().hasClass('kit_4')) {     

            Builder.doubleKit = kitNo;
            if (kitNo == 2 || kitNo == 4) {
                var view = svgText.currentView;
                var currentView = view.split('_');
                svgText.currentView = '_' + currentView[1] + '_' + kitNo;
            }

            //}
            if (!$(".modal.stock-logos").hasClass("loaded")) {
                $(".modal.stock-logos .logos ul li").each(function () {
                    var file = $(this).data('svg');
                    Builder.loadKitStockLogoSvg(file, $(this).attr("id"));
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

        if (Product.wSku != null) {
            $(".option-set.sizing .sub-title .button").bind('click', function (e) {

                e.preventDefault();
                $(".option-set.sizing .sub-title .button").removeClass("active");
                $(this).addClass("active");


                //Important --Add Active and Deactive class in Men And Women button

                if ($('.charts.Men')[0]) {
                    $('.button.mens').addClass('active');
                    $('.button.womens').removeClass('active')

                }

                else {
                    $('.button.womens').addClass('active');
                    $('.button.mens').removeClass('active')
                }

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


        //Send Dealer Logic here
        //$(".modal.dealer .submit").bind('click', function (e) {
        $("#SubmitEmail").on('click', function (e) {
            var activeKitNo = $('.kit span.active').attr('data-count');
            if (activeKitNo === "0") {
                Builder.id = kitBuilder.kit_0.id;
            }
            else if (activeKitNo === "1") {
                Builder.id = kitBuilder.kit_1.id;
            }
            else if (activeKitNo === "2" || activeKitNo === "4") {
                Builder.id = kitBuilder.kit_2.id;
                // KitProductId = kitBuilder.kit_4.id;
            }
            else {
                Builder.id = kitBuilder.kit_3.id;
            }
            e.preventDefault();
            //counter = 1;     
            var originalOrderNo = $('#OriginalOrderNo').val();
            var CurrentPageUrl = window.location.href;

            let PrimaryKetOfDesign = kitBuilder.kit_0.id;
            if (PrimaryKetOfDesign > 0 || PrimaryKetOfDesign.length >= 1) {
                $.post("/Builder/IsFileOrPathExist", { id: PrimaryKetOfDesign }, function (data) {
                    if (data.status) {
                        $(".lds-wrapper").hide();
                        $.post("/Builder/GetAllFiles", { id: PrimaryKetOfDesign }, function (data) {
                            if (data.status) {
                                CaptureImagePath = data.ImageList;
                                SendToDealerForKit();
                                return;
                            }
                            else {
                                SendToDealerForKit();
                                return;
                            }
                        });
                    }
                    else {
                        SendToDealerForKit();
                    }
                });
            }

            function SendToDealerForKit() {
                if (counter === 0) {
                    counter = 1;
                    if ($("#cliffkeen_checkbox").prop('checked') == true) {
                        cliffkeen_email = $(".modal.dealer #cliffkeen-email").val();
                        message = $(".modal.dealer textarea#EmailNotes").val();
                        // Api.call(Api.endpoints.AssignDesignToDealerSubmit, JSON.stringify({ "id": Builder.id, "DealerEmail": cliffkeen_email, "message": message, "ImagePathFront": Front, "ImagePathBack": Back, "ImagePathLeft": Left, "ImagePathRight": Right, "CurrentPageUrl": CurrentPageUrl }), function () {
                        if (kitBuilder.kit_0.id !== Builder.id) {
                            Api.call(Api.endpoints.AssignDesignToDealerSubmit, JSON.stringify({ "id": kitBuilder.kit_0.id, "DealerID": "NO_DEALER", "DealerEmail": cliffkeen_email, "message": message, "CurrentPageUrl": CurrentPageUrl, "originalOrderNo": originalOrderNo, "CaptureImagePath": CaptureImagePath }), function () {
                                var i = parseInt($('.kit span.active').attr('data-count'));
                                Api.call(Api.endpoints.saveDesign,
                                    JSON.stringify(Builder.productKitDataForSaving("with-dealer", false, i)),
                                    function () {
                                        var code = 301;
                                        CK.alert(code);
                                        $(".modal.dealer .close").trigger('click');
                                        window.location = "/locker";
                                    });
                            });
                        }

                        Api.call(Api.endpoints.AssignDesignToDealerSubmit, JSON.stringify({ "id": Builder.id, "DealerID": "DUMMY_ID", "DealerEmail": cliffkeen_email, "message": message, "CurrentPageUrl": CurrentPageUrl, "originalOrderNo": originalOrderNo, "CaptureImagePath": CaptureImagePath }), function () {
                            var i = parseInt($('.kit span.active').attr('data-count'));
                            Api.call(Api.endpoints.saveDesign,
                                JSON.stringify(Builder.productKitDataForSaving("with-dealer", false, i)),
                                function () {
                                    var code = 301;
                                    CK.alert(code);
                                    $(".modal.dealer .close").trigger('click');
                                    window.location = "/locker";
                                });
                        });
                    }
                    else {
                        if (kitBuilder.kit_0.id !== Builder.id) {
                            Api.call(Api.endpoints.AssignDesignToDealerSubmit, JSON.stringify({ "id": kitBuilder.kit_0.id, "DealerID": "NO_DEALER", "DealerEmail": Builder.chosenDealer.email, "message": $(".modal.dealer textarea#EmailNotes").val(), "CurrentPageUrl": CurrentPageUrl, "originalOrderNo": originalOrderNo, "CaptureImagePath": CaptureImagePath }), function (response) {
                                //Api.call(Api.endpoints.AssignDesignToDealerSubmit, JSON.stringify({ "id": Builder.id, "DealerID": Builder.chosenDealer.id, "DealerEmail": Builder.chosenDealer.email, "message": $(".modal.dealer textarea#EmailNotes").val(), "CurrentPageUrl": CurrentPageUrl, "originalOrderNo": originalOrderNo, "CaptureImagePath": CaptureImagePath }), function (response) {
                                //Api.call(Api.endpoints.saveDesign,
                                //    JSON.stringify(Builder.productDataForSaving("with-dealer", false)),
                                var i = parseInt($('.kit span.active').attr('data-count'));
                                Api.call(Api.endpoints.saveDesign,
                                    JSON.stringify(Builder.productKitDataForSaving("with-dealer", false, i)),
                                    function () {
                                        var code = 301;
                                        CK.alert(code);
                                        $(".modal.dealer .close").trigger('click');
                                        window.location = "/locker";
                                    });
                            });
                        }

                        Api.call(Api.endpoints.AssignDesignToDealerSubmit, JSON.stringify({ "id": Builder.id, "DealerID": Builder.chosenDealer.id, "DealerEmail": Builder.chosenDealer.email, "message": $(".modal.dealer textarea#EmailNotes").val(), "CurrentPageUrl": CurrentPageUrl, "originalOrderNo": originalOrderNo, "CaptureImagePath": CaptureImagePath }), function (response) {
                            //Api.call(Api.endpoints.AssignDesignToDealerSubmit, JSON.stringify({ "id": Builder.id, "DealerID": Builder.chosenDealer.id, "DealerEmail": Builder.chosenDealer.email, "message": $(".modal.dealer textarea#EmailNotes").val(), "CurrentPageUrl": CurrentPageUrl, "originalOrderNo": originalOrderNo, "CaptureImagePath": CaptureImagePath }), function (response) {
                            //Api.call(Api.endpoints.saveDesign,
                            //    JSON.stringify(Builder.productDataForSaving("with-dealer", false)),
                            var i = parseInt($('.kit span.active').attr('data-count'));
                            Api.call(Api.endpoints.saveDesign,
                                JSON.stringify(Builder.productKitDataForSaving("with-dealer", false, i)),
                                function () {
                                    var code = 301;
                                    CK.alert(code);
                                    $(".modal.dealer .close").trigger('click');
                                    window.location = "/locker";
                                });
                        });
                    }
                }
            }
            //var dealer_email = "";
            //var cliffkeen_email = "";
            //var message = "";
            //dealer_email = $(".modal.dealer #dealer-email").val();
            //if ($("#cliffkeen_checkbox").prop('checked') == true) {
            //    cliffkeen_email = $(".modal.dealer #cliffkeen-email").val();
            //    message = $(".modal.dealer textarea#EmailNotes").val();
            //    Api.call(Api.endpoints.assignDesignToDealer, JSON.stringify({ "id": Builder.id, "DealerEmail": cliffkeen_email, "message": message }), function () {
            //        Api.call(Api.endpoints.saveDesign,
            //        JSON.stringify(Builder.productDataForSaving("with-dealer", false)),
            //        function () {
            //            $(".modal.dealer .close").trigger('click');
            //            location.href = "/locker";
            //        });
            //    });
            //}
            //else {

            //    Api.call(Api.endpoints.assignDesignToDealer, JSON.stringify({ "id": Builder.id, "DealerID": Builder.chosenDealer.id, "DealerEmail": Builder.chosenDealer.email, "message": $(".modal.dealer textarea#EmailNotes").val() }), function (response) {
            //        Api.call(Api.endpoints.saveDesign,
            //        JSON.stringify(Builder.productDataForSaving("with-dealer", false)),
            //        function () {
            //            var code = 301;
            //            CK.alert(code);
            //            $(".modal.dealer .close").trigger('click');
            //            window.location = "/locker";                                   
            //        });
            //    });

            //}
        });
        //End



        // if one or fewer fabric options, hide fabric nav
        if (Product.fabricOptions.length <= 1) {
            $(".row.steps span[data-nav='0']").hide().next("em").hide();
            //if (Cust.step == 0 || Cust.step == null || Cust.step == undefined) {
            //    Cust.step = 1;

            //}
            if (CustKit['kit_' + kitNo].step == 0 || CustKit['kit_' + kitNo].step == null || CustKit['kit_' + kitNo].step == undefined) {
                CustKit['kit_' + kitNo].step = 1;
            }

        }

        // if no color options, hide color nav
        if (Product.hasOwnProperty('skipColor')) {
            $(".row.steps span[data-nav='1']").hide().next("em").hide();
            if (CustKit['kit_' + kitNo].step == 1 || CustKit['kit_' + kitNo].step == null || CustKit['kit_' + kitNo].step == undefined) {
                CustKit['kit_' + kitNo].step = 2;
            }
        }

        // if no art options, hide art nav
        if (Product.hasOwnProperty('skipPrinting')) {
            $(".row.steps span[data-nav='2']").hide().next("em").hide();
            if (CustKit['kit_' + kitNo].step == 2) {
                CustKit['kit_' + kitNo].step = 3;
            }
        }

        if (CustKit['kit_' + kitNo].step == null) CustKit['kit_' + kitNo].step = 0;

        $("#print_type_" + kitNo).each(function () {

            if (Product.printingOptions == "Screen Printing" && Product.hasOwnProperty('sublimationColors')) {
                $(this).find("input").change(function () {
                    var id = $(this).attr("id");
                    var type = $(this).val();

                    // Cust.printingOption = type;
                    CustKit['kit_' + kitNo].printingOption = type;
                    // console.log("change", Cust.printingOption);
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
                $('#print_type_' + kitNo).hide();
            }

        });
        Builder.populateKitWithCustomization(kitNo, KitProduct);


    },
    loadKitDesign: function (kitGuid, kitNo) {
        Api.call(Api.endpoints.getDesign, JSON.stringify({
            guid: kitGuid
        }), function (data) {
            console.log('loadKitDesign', data, typeof (data));
            if (data == null) {
                window.location = "/builder/404";
            }
            else {

                //Set Builder.ID here which is further used to update cart status
                Builder.ID = data.ID;
                kitBuilder['kit_' + kitNo].id = data.ID;
                var IsAdmin = false;

                Api.call(Api.endpoints.getAdmin, JSON.stringify({}), function (Data) {
                    if (Data != null) {
                        if (Data == "Admin") {
                            IsAdmin = true;
                        }
                    }
                    if (IsAdmin == false) {

                        if (typeof (data) == 'object' && data.hasOwnProperty('UserId') && Builder.hasOwnProperty('userData')) {
                            if (Builder.userData != null && data.UserId != Builder.userData.ID && data.DealerId != Builder.userData.ID) {
                                deeplink = true;
                                console.log('viewnoly 1');
                                Builder.viewOnly = true;
                            }
                        }
                        else {
                            deeplink = true;
                            console.log('viewnoly 2');
                            Builder.viewOnly = true;
                        }
                        if (deeplink || $.QueryString['deep']) {
                            $('body').addClass("view-only");
                            console.log('viewnoly 3');
                            Builder.viewOnly = true;
                        }
                        if (data.Status == "in-cart" || data.Status == "with-dealer") {
                            deeplink = true;
                            $('body').addClass("view-only");
                            console.log('viewnoly 4');
                            Builder.viewOnly = true;
                        }

                        //19/11/2019
                        //If user is Loged in then Remove the view-only class
                        //start
                        if (Builder.userData != null) {
                            if (data.UserId != Builder.userData.ID) {
                                var IsNoPositive = false;
                                var value = parseInt(Builder.userData.ID);
                                if (value < 0) {
                                    IsNoPositive = false;
                                }
                                else {
                                    IsNoPositive = true;
                                }
                                if (data.Status == "NEW" && Builder.userData.ID > 0 || (Builder.userData.ID.length >= 1 && IsNoPositive === true)) {
                                    Builder.viewOnly = false;
                                    $('body').removeClass("view-only");
                                }
                            }
                        }
                    }
                    else {
                        deeplink = false;
                        Builder.viewOnly = false;
                        if (deeplink || $.QueryString['deep']) {
                            $('body').removeClass("view-only");
                            Builder.viewOnly = false;
                        }
                    }

                });
                //SetUpfeeLogic is here For CE58 and CF5
                if (data.Product == "CE58" || data.Product == "CF5") {
                    Builder.IssetUpfee = true;
                }
                Builder.loadKitProduct(data, kitNo);
                //if (kitNo == 4) {
                //    Builder.doubleKit = 4;
                //}               
                $('#upload-image_' + kitNo).on('change', function (event) {
                    Builder.prepareKitUpload(event, kitNo);
                });


            }
        });
    },

    loadKitProduct: function (data, kitNo) {

        Builder.id = data.ID;
        if (typeof data.Customization != 'undefined' && data.Customization != "" && data.Customization != null) CustKit['kit_' + kitNo] = JSON.parse(data.Customization);

        if (data.hasOwnProperty('Notes') && typeof (data.Notes) != 'undefined' && data.Notes != '' && data.Notes != null) $('.garment-notes').html(data.Notes);
        else { $('.garment-notes').remove(); }
        //above pending      
        Quantity = JSON.parse(data.Quantities);

        // set original order in textbox
        if (data.OriginalOrderNo == null || data.OriginalOrderNo == "0" || data.OriginalOrderNo == 0 || data.OriginalOrderNo == "Null") {
            $('#OriginalOrderNo').val('');
        }
        else {
            $('#OriginalOrderNo').val(data.OriginalOrderNo);
        }


        Builder.updateKitZipLink();
        var urlPath = "/svg/" + data.Product + "/" + data.Product + ".js";
        $.ajax({
            url: urlPath,
            type: 'GET',
            dataType: 'json',
            success: function (response) {
                Product = response;
                //Kit Masks
                ProductKit['kit_' + kitNo] = response;

                var KitProduct = Product;
                var id_kit = "kit_" + kitNo;
                Builder.KitID.push({ KitID: id_kit, ProductId: data.ID, ProductSku: Product.sku });


                if (Product.colorSwatches) Builder.swatchMode = true;
                // $(".option-set.ctas .buttons").prepend('<a href="#" class="to-dealer button">SEND TO DEALER</a>');
                // 	$(".button.to-dealer").bind('click', Builder.openDealerModal);
                if (Product.category.indexOf('singlet') > 0 || Product.category.indexOf('Sublimation') > 0) {
                    if (Builder.kitCounter == 0) {
                        if (Builder.userData) {
                            if (!Builder.userData.IsDealer) {

                                //console.log('not a dealer, show send to dealer button');
                                $(".option-set.ctas .buttons").prepend('<a href="#" class="to-dealer button">SEND TO DEALER</a>');
                                $(".button.to-dealer").bind('click', Builder.openDealerModal);


                                // $(".option-set.ctas .buttons .to-cart").remove();
                                $(".option-set.ctas .buttons").prepend('<a class="to-cart button btnCrt"><span>ADD TO CART</span><img src="../images/button-ajax-spinner.gif" /></a>');
                                $(".button.to-cart").bind('click', function (e) {
                                    e.preventDefault();

                                    Builder.addKitToCart();
                                });
                            } else {
                                //console.log('is a dealer, show add to cart');
                                $(".option-set.ctas .buttons").prepend('<a class="to-cart button btnCrt"><span>ADD TO CART</span><img src="../images/button-ajax-spinner.gif" /></a>');
                                $(".button.to-cart").bind('click', function (e) {
                                    e.preventDefault();

                                    Builder.addKitToCart();
                                });
                            }
                        }
                    }
                } else {
                    if (Builder.kitCounter == 0) {

                        ////send to dealer button added to all other categories than singlet and sublimation  also
                        $(".option-set.ctas .buttons").prepend('<a href="#" class="to-dealer button"><span>SEND TO DEALER</span></a>');
                        $(".button.to-dealer").bind('click', Builder.openDealerModal);

                        // add to cart
                        //console.log('not a singlet, show add to cart', Product.category);
                        $(".option-set.ctas .buttons").prepend('<a class="to-cart button btnCrt"><span>ADD TO CART</span><img src="../images/button-ajax-spinner.gif" /></a>');
                        $(".button.to-cart").bind('click', function (e) {
                            e.preventDefault();
                            Builder.addKitToCart();
                        });
                    }
                }
                if (Builder.kitCounter == 0) {
                    //  Don't show  Add to cart & View cart buttons to admin
                    Api.call(Api.endpoints.getAdmin, JSON.stringify({}), function (Data) {
                        if (Data != null) {
                            if (Data == "Admin") {
                                //for kit
                                $(".option-set.ctas .buttons .to-cart").remove();
                                $('#btncart').hide();
                            }
                        }
                    });


                    //  Don't show  Add to cart button to Custom Warm Up Products..
                    if (Product.category == "Custom Warm-ups") {
                        $(".option-set.ctas .buttons .to-cart").remove();
                        if (data.hasOwnProperty('Notes') && typeof (data.Notes) != 'undefined' && data.Notes != '' && data.Notes != null) $('#customWarmUp').html(data.Notes);
                        else { $('#customWarmUp').remove(); }
                    }
                    else {
                        $('#customWarmUp').remove();
                    }
                }
                Builder.kitCounter++;

                $(".kits.kit_" + kitNo + " .design-details span.sku").text(Product.sku);
                $(".kits.kit_" + kitNo + " .design-details span.category").text(Product.category);

                //set some defaults
                //console.log("load products", Cust)
                if (typeof Cust.fabric == 'undefined' || Cust.fabric == null) Cust.fabric = Product.fabricOptions[0].id;

                Builder.getKitArtworkObject(kitNo);
                Builder.displayKitProduct(kitNo, KitProduct);
                Builder.getKitPricingFromAPI(Product.PricingSku, kitNo);
            },
            error: function (data, status, e) {
                console.log(data, status, e);
                //Api.error(9);
            }
        })


    },
    displayKitProductColors: function (kit_No, KitProduct) {

        console.log('displayKitProductColors');
        console.log('KitProduct ', KitProduct);
        $('.kits.kit_' + kit_No + ' .option-set.color').empty();
        if (Builder.swatchMode) { //stock garment
            var html = '<div class="group" data-svg-id="swatch">';
            html += '<strong>Color Options</strong>';
            html += '<ul>';
            html += '</ul>';
            html += '</div>';
            $('.kits.kit_' + kit_No + ' .option-set.color').append($(html));

            $(Product.colorSwatches[Cust.fabric]).each(function () {
                var $li = $('<li title="' + this.name + '" data-hex="' + this.hex + '" data-code="' + this.code + '"></li>').data('colors', this.colors);
                $('.kits.kit_' + kit_No + ' .option-set.color .group ul').append($li);
            });
            $(".kits.kit_" + kit_No + " .option-set.color .group ul li").each(function () {
                $(this).css("background-color", "#" + $(this).data("hex"));
                $(this).click(function (e) {

                    var colors = $(this).data('colors');
                    $(this).parent().parent().removeClass("error");
                    $(this).siblings("li.active").removeClass("active");
                    $(this).addClass("active");
                    $(Product.panels).each(function () {

                        Builder.setKitSvgColor(this.name, colors[this.name]['hex'], kit_No);
                    })
                    //Cust.swatch = $(this).data('code');
                    CustKit['kit_' + kit_No].swatch = $(this).data('code');

                    if ($(this).data('code') == "NY" || $(this).data('code') == "BK" || $(this).data('code') == "PR" || $(this).data('code') == "NYSG" || $(this).data('code') == "BKOR" || $(this).data('code') == "NYCB" || $(this).data('code') == "BKSG" || $(this).data('code') == "BKSC" || $(this).data('code') == "NYVG") {
                        $("g[id^=BOX] *").attr('stroke', '#00FF99');
                    }
                    else {
                        if (Product.BOXCOLOR != "DEFAULT") {
                            $("g[id^=BOX] *").attr('stroke', '#000000');
                        }
                    }
                });
            });
        }
        else { //fully custom colors
            $(KitProduct.panels).each(function () {
                var panel = this;
                var html = '<div class="group" data-part-name="customcolors11" data-svg-id="' + panel.name + '">';
                html += '<strong>' + panel.display + ' Color</strong>';
                html += '<ul>';

                $(KitProduct.colorOptions[Cust.fabric][panel.name]).each(function () {
                    html += '<li title="' + this.name + '" data-hex="' + this.hex + '" data-code="' + this.code + '" data-image="' + (typeof (this.image) != 'undefined') + '">';

                    if (typeof (this.thumb) != 'undefined') {
                        html += '<img src="' + this.thumb + '" />';
                    }
                    html += '</li>';
                    //check for image
                });
                html += '</ul>';
                html += '</div>';

                $('.kits.kit_' + kit_No + ' .option-set.color').append($(html));

            });

            $(".kits.kit_" + kit_No + " .option-set.color .group ul li").each(function () {
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
                            if (Product.BOXCOLOR != "DEFAULT") {
                                $("g[id^=BOX] *").attr('stroke', '#000000');
                            }
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
                            Builder.setKitSvgColor(group, $(this).data('hex'), $(this).data('code'), $(this).data('image'), kit_No);
                            //  Cust.colors[group] = $(this).data('code');
                            CustKit['kit_' + kit_No].colors[group] = $(this).data('code');

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
                                Builder.setKitSvgColor(group, $(this).data('hex'), $(this).data('code'), $(this).data('image'), kit_No);
                                //    Cust.colors[group] = $(this).data('code');
                                CustKit['kit_' + kit_No].colors[group] = $(this).data('code');
                            }
                        });

                        $("li.pattern").removeClass("active");
                        $('#btn-pattern-1').addClass('active');
                        Builder.enablePattern($('#btn-pattern-1').data('pattern-data'));
                    }
                    console.log('in setKitSvgColor kit ' + kit_No);
                    Builder.setKitSvgColor(group, $(this).data('hex'), $(this).data('code'), $(this).data('image'), kit_No);

                    //  Cust.colors[group] = $(this).data('code');
                    CustKit['kit_' + kit_No].colors[group] = $(this).data('code');


                    //if addUserSelectedColors, relookup pricing
                    if (Product.addUserSelectedColors == true) {
                        Builder.getKitPricingFromAPI(null, kit_No);
                    }
                });
            });
        }
    },
    populateKitWithCustomization: function (kitNo, kitProduct) {
        console.log('populateKitWithCustomization');

        //fabrics
        $('[data-fabric-id=' + Cust.fabric + ']').addClass('active');

        ///New code


        //if (Quantity != null) {
        //    console.log('set quants in table');
        //    $(Product.sizes).each(function () {
        //        $('.sizing-chart-options [name="' + this + '"]').val("");
        //        Builder.cartObj['m'][this] = Quantity.sizes[this];
        //        //console.log('size', Builder.cartObj[this]);
        //    });
        //    $(Product.wSizes).each(function () {
        //        $('.sizing-chart-options-women [name="' + this + '"]').val("");
        //        Builder.cartObj['w'][this] = Quantity.sizes[this];
        //    });
        //} else {
        //    console.log('no quants to show');
        //    $('.sizing-chart-options input, .sizing-chart-options-women input').val("");
        //}

        ///----------my Code
        ///  remove Zero(0) from text Box
        var Size = "";
        var wSize = "";


        //Kit 0
        if (kitNo == 0) {
            if (Quantity != null) {
                $(Product.sizes).each(function () {
                    if (Quantity.sizes[this] == '0') {
                        $('.sizing-chart-optionsForkit_0 [name="' + this + '"]').val("");
                    }
                    else {
                        $('.sizing-chart-optionsForkit_0 [name="' + this + '"]').val(Quantity.sizes[this]);
                    }

                    Builder.cartObj0['m'][this] = Quantity.sizes[this];
                    //console.log('size', Builder.cartObj[this]);
                });
                $(Product.wSizes).each(function () {
                    if (Quantity.wSizes[this] == '0') {
                        $('.sizing-chart-optionsForkit_0-women [name="' + this + '"]').val("");
                    }
                    else {
                        $('.sizing-chart-optionsForkit_0-women [name="' + this + '"]').val(Quantity.wSizes[this]);
                    }
                    Builder.cartObj0['w'][this] = Quantity.wSizes[this];
                });
            }

        }
        //Kit 0

        //Kit 1
        if (kitNo == 1) {
            console.log('set quants in table');
            if (Quantity.OPTION2Shirt_Size !== undefined) {
                $(".sizing-chart-optionsForkit_1 [data-size]").each(function () {
                    Size = $(this).attr('data-size');
                    if (Quantity.OPTION2Shirt_Size[Size] == '0') {
                        $('.sizing-chart-optionsForkit_1 [name="' + Size + '"]').val("");
                    }
                    else {
                        $('.sizing-chart-optionsForkit_1 [name="' + Size + '"]').val(Quantity.OPTION2Shirt_Size[Size]);
                    }

                    Builder.cartObj_1Shirt_Men['m'][Size] = Quantity.OPTION2Shirt_Size[Size];
                    //console.log('size', Builder.cartObj[this]);
                });
            }
            if (Quantity.OPTION2Shirt_wSize !== undefined) {
                $(".sizing-chart-optionsForkit_1-women [data-size]").each(function () {
                    wSize = $(this).attr('data-size');
                    if (Quantity.OPTION2Shirt_wSize[wSize] == '0') {
                        $('.sizing-chart-optionsForkit_1-women [name="' + wSize + '"]').val("");
                    }
                    else {
                        $('.sizing-chart-optionsForkit_1-women [name="' + wSize + '"]').val(Quantity.OPTION2Shirt_wSize[wSize]);
                    }

                    Builder.cartObj_1Shirt_Women['w'][wSize] = Quantity.OPTION2Shirt_wSize[wSize];
                });

            }

            if (Quantity.OPTION2Short_Size !== undefined) {
                $(".sizing-chart-kit_OPTION2_Shorts_Men [data-size]").each(function () {
                    Size = $(this).attr('data-size');
                    if (Quantity.OPTION2Short_Size[Size] == '0') {
                        $('.sizing-chart-kit_OPTION2_Shorts_Men [name="' + Size + '"]').val("");
                    }
                    else {
                        $('.sizing-chart-kit_OPTION2_Shorts_Men [name="' + Size + '"]').val(Quantity.OPTION2Short_Size[Size]);
                    }

                    Builder.cartObj_1Shorts['m'][Size] = Quantity.OPTION2Short_Size[Size];
                    //console.log('size', Builder.cartObj[this]);
                });

            }

            if (Quantity.OPTION2Short_wSize !== undefined) {
                $(".sizing-chart-kit_OPTION2_Shorts_women [data-size]").each(function () {
                    wSize = $(this).attr('data-size');
                    if (Quantity.OPTION2Short_wSize[wSize] == '0') {
                        $('.sizing-chart-kit_OPTION2_Shorts_women [name="' + wSize + '"]').val("");
                    }
                    else {
                        $('.sizing-chart-kit_OPTION2_Shorts_women [name="' + wSize + '"]').val(Quantity.OPTION2Short_wSize[wSize]);
                    }

                    Builder.cartObj_1Shorts['w'][wSize] = Quantity.OPTION2Short_wSize[wSize];
                });
            }
        }

        //Kit 1

        // Kit 2 and Kit 4
        if (kitNo == 2 || kitNo == 4) {

            console.log('set quants in table');
            if (Quantity.OPTION3Shirt_Size !== undefined) {
                $(".sizing-chart-optionsForkit_2 [data-size]").each(function () {
                    Size = $(this).attr('data-size');
                    if (Quantity.OPTION3Shirt_Size[Size] == '0') {
                        $('.sizing-chart-optionsForkit_2 [name="' + Size + '"]').val("");
                    }
                    else {
                        $('.sizing-chart-optionsForkit_2 [name="' + Size + '"]').val(Quantity.OPTION3Shirt_Size[Size]);
                    }
                    Builder.cartObj_2Singlet['m'][Size] = Quantity.OPTION3Shirt_Size[Size];
                    //console.log('size', Builder.cartObj[this]);
                });
            }
            if (Quantity.OPTION3Shirt_wSize !== undefined) {
                $(".sizing-chart-optionsForkit_2-women [data-size]").each(function () {
                    wSize = $(this).attr('data-size');
                    if (Quantity.OPTION3Shirt_wSize[wSize] == '0') {
                        $('.sizing-chart-optionsForkit_2-women [name="' + wSize + '"]').val("");
                    }
                    else {
                        $('.sizing-chart-optionsForkit_2-women [name="' + wSize + '"]').val(Quantity.OPTION3Shirt_wSize[wSize]);
                    }

                    Builder.cartObj_2Singlet['w'][wSize] = Quantity.OPTION3Shirt_wSize[wSize];
                });

            }

            if (Quantity.OPTION3Shorts_Size !== undefined) {
                $(".sizing-chart-optionsForkit_4 [data-size]").each(function () {
                    Size = $(this).attr('data-size');
                    if (Quantity.OPTION3Shorts_Size[Size] == '0') {
                        $('.sizing-chart-optionsForkit_4 [name="' + Size + '"]').val("");
                    }
                    else {
                        $('.sizing-chart-optionsForkit_4 [name="' + Size + '"]').val(Quantity.OPTION3Shorts_Size[Size]);
                    }

                    Builder.cartObj_2Shorts['m'][Size] = Quantity.OPTION3Shorts_Size[Size];
                    //console.log('size', Builder.cartObj[this]);
                });

            }

            if (Quantity.OPTION3Shorts_wSize !== undefined) {
                $(".sizing-chart-optionsForkit_4-women [data-size]").each(function () {
                    wSize = $(this).attr('data-size');
                    if (Quantity.OPTION3Shorts_wSize[wSize] == '0') {
                        $('.sizing-chart-optionsForkit_4-women [name="' + wSize + '"]').val("");
                    }
                    else {
                        $('.sizing-chart-optionsForkit_4-women [name="' + wSize + '"]').val(Quantity.OPTION3Shorts_wSize[wSize]);
                    }
                    Builder.cartObj_2Shorts['w'][wSize] = Quantity.OPTION3Shorts_wSize[wSize];
                });
            }
        }
        // Kit 2 and Kit 4

        //Kit 3
        if (kitNo == 3) {
            console.log('set quants in table');
            if (Quantity.OPTION4Shirt_Size !== undefined) {
                $(".sizing-chart-optionsForkit_3 [data-size]").each(function () {
                    Size = $(this).attr('data-size');
                    if (Quantity.OPTION4Shirt_Size[Size] == '0') {
                        $('.sizing-chart-optionsForkit_3 [name="' + Size + '"]').val("");
                    }
                    else {
                        $('.sizing-chart-optionsForkit_3 [name="' + Size + '"]').val(Quantity.OPTION4Shirt_Size[Size]);
                    }

                    Builder.cartObj_3Shirt['m'][Size] = Quantity.OPTION4Shirt_Size[Size];
                    //console.log('size', Builder.cartObj[this]);
                });
            }
            if (Quantity.OPTION4Shirt_wSize !== undefined) {
                $(".sizing-chart-optionsForkit_3-women [data-size]").each(function () {
                    wSize = $(this).attr('data-size');
                    if (Quantity.OPTION4Shirt_wSize[wSize] == '0') {
                        $('.sizing-chart-optionsForkit_3-women [name="' + wSize + '"]').val("");
                    }
                    else {
                        $('.sizing-chart-optionsForkit_3-women [name="' + wSize + '"]').val(Quantity.OPTION4Shirt_wSize[wSize]);
                    }

                    Builder.cartObj_3Shirt['w'][wSize] = Quantity.OPTION4Shirt_wSize[wSize];
                });
            }
            if (Quantity.OPTION4Shorts_Size !== undefined) {
                $(".sizing-chart-kit_OPTION4_Shorts_Men [data-size]").each(function () {
                    Size = $(this).attr('data-size');
                    if (Quantity.OPTION4Shorts_Size[Size] == '0') {
                        $('.sizing-chart-kit_OPTION4_Shorts_Men [name="' + Size + '"]').val("");
                    }
                    else {
                        $('.sizing-chart-kit_OPTION4_Shorts_Men [name="' + Size + '"]').val(Quantity.OPTION4Shorts_Size[Size]);
                    }

                    Builder.cartObj_3Shorts['m'][Size] = Quantity.OPTION4Shorts_Size[Size];
                    //console.log('size', Builder.cartObj[this]);
                });

            }
            if (Quantity.OPTION4Shorts_wSize !== undefined) {
                $(".sizing-chart-kit_OPTION4_Shorts_women [data-size]").each(function () {
                    wSize = $(this).attr('data-size');
                    if (Quantity.OPTION4Shorts_wSize[wSize] == '0') {
                        $('.sizing-chart-kit_OPTION4_Shorts_women [name="' + wSize + '"]').val("");
                    }
                    else {
                        $('.sizing-chart-kit_OPTION4_Shorts_women [name="' + wSize + '"]').val(Quantity.OPTION4Shorts_wSize[wSize]);
                    }

                    Builder.cartObj_3Shorts['w'][wSize] = Quantity.OPTION4Shorts_wSize[wSize];
                });

            }
        }
        //Kit 3


        //var activeKit = $('.kit span.active').attr('data-count');
        //if (activeKit === "0") {
        //    if (Quantity != null) {
        //        console.log('set quants in table');
        //        $(Product.sizes).each(function () {
        //            if (Quantity.sizes[this] == '0') {
        //                $('.sizing-chart-optionsForkit_0 [name="' + this + '"]').val("");
        //            }
        //            else {
        //                $('.sizing-chart-optionsForkit_0 [name="' + this + '"]').val(Quantity.sizes[this]);
        //            }

        //            Builder.cartObj0['m'][this] = Quantity.sizes[this];
        //            //console.log('size', Builder.cartObj[this]);
        //        });
        //        $(Product.wSizes).each(function () {
        //            if (Quantity.wSizes[this] == '0') {
        //                $('.sizing-chart-optionsForkit_0-women [name="' + this + '"]').val("");
        //            }
        //            else {
        //                $('.sizing-chart-optionsForkit_0-women [name="' + this + '"]').val(Quantity.wSizes[this]);
        //            }
        //            Builder.cartObj0['w'][this] = Quantity.wSizes[this];
        //        });
        //    }
        //    else {
        //        console.log('no quants to show');
        //        $('.sizing-chart-optionsForkit_0 input, .sizing-chart-optionsForkit_0-women input').val(0);
        //    }
        //}
        //else if (activeKit === "1") {
        //    if (Quantity != null) {
        //        console.log('set quants in table');

        //        $(".sizing-chart-optionsForkit_1 [data-size]").each(function () {
        //             Size=$(this).attr('data-size');
        //            if (Quantity.OPTION2Shirt_Size[Size] == '0') {
        //                $('.sizing-chart-optionsForkit_1 [name="' + Size + '"]').val("");
        //            }
        //            else {
        //                $('.sizing-chart-optionsForkit_1 [name="' + Size + '"]').val(Quantity.OPTION2Shirt_Size[Size]);
        //            }

        //            Builder.cartObj_1Shirt_Men['m'][Size] = Quantity.OPTION2Shirt_Size[Size];
        //            //console.log('size', Builder.cartObj[this]);
        //        });
        //        $(".sizing-chart-optionsForkit_1-women [data-size]").each(function () {
        //            wSize = $(this).attr('data-size');
        //            if (Quantity.OPTION2Shirt_wSize[wSize] == '0') {
        //                $('.sizing-chart-optionsForkit_1-women [name="' + wSize + '"]').val("");
        //            }
        //            else {
        //                $('.sizing-chart-optionsForkit_1-women [name="' + wSize + '"]').val(Quantity.OPTION2Shirt_wSize[wSize]);
        //            }

        //            Builder.cartObj_1Shirt_Women['w'][wSize] = Quantity.OPTION2Shirt_wSize[wSize];
        //        });

        //        $(".sizing-chart-kit_OPTION2_Shorts_Men [data-size]").each(function () {
        //            Size = $(this).attr('data-size');
        //            if (Quantity.OPTION2Short_Size[Size] == '0') {
        //                $('.sizing-chart-optionsForkit_1 [name="' + Size + '"]').val("");
        //            }
        //            else {
        //                $('.sizing-chart-optionsForkit_1 [name="' + Size + '"]').val(Quantity.OPTION2Short_Size[Size]);
        //            }

        //            Builder.cartObj_1Shorts['m'][Size] = Quantity.OPTION2Short_Size[Size];
        //            //console.log('size', Builder.cartObj[this]);
        //        });
        //        $(".sizing-chart-kit_OPTION2_Shorts_women [data-size]").each(function () {
        //            wSize = $(this).attr('data-size');
        //            if (Quantity.OPTION2Short_wSize[wSize] == '0') {
        //                $('.sizing-chart-optionsForkit_1-women [name="' + wSize + '"]').val("");
        //            }
        //            else {
        //                $('.sizing-chart-optionsForkit_1-women [name="' + wSize + '"]').val(Quantity.OPTION2Short_wSize[wSize]);
        //            }

        //            Builder.cartObj_1Shorts['w'][wSize] = Quantity.OPTION2Short_wSize[wSize];
        //        });
        //    }
        //    else {
        //        console.log('no quants to show');
        //        $('.sizing-chart-optionsForkit_1 input, .sizing-chart-optionsForkit_1-women input').val(0);
        //    }
        //}
        //else if (activeKit === "3") {
        //    if (Quantity != null) {
        //        console.log('set quants in table');

        //        $(".sizing-chart-optionsForkit_3 [data-size]").each(function () {
        //            Size = $(this).attr('data-size');
        //            if (Quantity.OPTION4Shirt_Size[Size] == '0') {
        //                $('.sizing-chart-optionsForkit_1 [name="' + Size + '"]').val("");
        //            }
        //            else {
        //                $('.sizing-chart-optionsForkit_1 [name="' + Size + '"]').val(Quantity.OPTION4Shirt_Size[Size]);
        //            }

        //            Builder.cartObj_1Shirt['m'][Size] = Quantity.OPTION4Shirt_Size[Size];
        //            //console.log('size', Builder.cartObj[this]);
        //        });
        //        $(".sizing-chart-optionsForkit_3-women [data-size]").each(function () {
        //            wSize = $(this).attr('data-size');
        //            if (Quantity.OPTION4Shirt_wSize[wSize] == '0') {
        //                $('.sizing-chart-optionsForkit_1-women [name="' + wSize + '"]').val("");
        //            }
        //            else {
        //                $('.sizing-chart-optionsForkit_1-women [name="' + wSize + '"]').val(Quantity.OPTION4Shirt_wSize[wSize]);
        //            }

        //            Builder.cartObj_1Shirt['w'][wSize] = Quantity.OPTION4Shirt_wSize[wSize];
        //        });

        //        $(".sizing-chart-kit_OPTION4_Shorts_Men [data-size]").each(function () {
        //            Size = $(this).attr('data-size');
        //            if (Quantity.OPTION4Shorts_Size[Size] == '0') {
        //                $('.sizing-chart-optionsForkit_1 [name="' + Size + '"]').val("");
        //            }
        //            else {
        //                $('.sizing-chart-optionsForkit_1 [name="' + Size + '"]').val(Quantity.OPTION4Shorts_Size[Size]);
        //            }

        //            Builder.cartObj_1Shirt['m'][Size] = Quantity.OPTION4Shorts_Size[Size];
        //            //console.log('size', Builder.cartObj[this]);
        //        });
        //        $(".sizing-chart-kit_OPTION4_Shorts_women [data-size]").each(function () {
        //            wSize = $(this).attr('data-size');
        //            if (Quantity.OPTION4Shorts_wSize[wSize] == '0') {
        //                $('.sizing-chart-optionsForkit_1-women [name="' + wSize + '"]').val("");
        //            }
        //            else {
        //                $('.sizing-chart-optionsForkit_1-women [name="' + wSize + '"]').val(Quantity.OPTION4Shorts_wSize[wSize]);
        //            }

        //            Builder.cartObj_1Shirt['w'][wSize] = Quantity.OPTION4Shorts_wSize[wSize];
        //        });
        //    }
        //    else {
        //        console.log('no quants to show');
        //        $('.sizing-chart-optionsForkit_1 input, .sizing-chart-optionsForkit_1-women input').val(0);
        //    }
        //}
        //else if (activeKit === "2" || activeKit === "4") {
        //    if (Quantity != null) {
        //        console.log('set quants in table');

        //        $(".sizing-chart-optionsForkit_2 [data-size]").each(function () {
        //            Size = $(this).attr('data-size');
        //            if (Quantity.OPTION3Shirt_Size[Size] == '0') {
        //                $('.sizing-chart-optionsForkit_2 [name="' + Size + '"]').val("");
        //            }
        //            else {
        //                $('.sizing-chart-optionsForkit_2 [name="' + Size + '"]').val(Quantity.OPTION3Shirt_Size[Size]);
        //            }
        //            Builder.cartObj_1Shirt['m'][Size] = Quantity.OPTION3Shirt_Size[Size];
        //            //console.log('size', Builder.cartObj[this]);
        //        });
        //        $(".sizing-chart-optionsForkit_2-women [data-size]").each(function () {
        //            wSize = $(this).attr('data-size');
        //            if (Quantity.OPTION3Shirt_wSize[wSize] == '0') {
        //                $('.sizing-chart-optionsForkit_2-women [name="' + wSize + '"]').val("");
        //            }
        //            else {
        //                $('.sizing-chart-optionsForkit_2-women [name="' + wSize + '"]').val(Quantity.OPTION3Shirt_wSize[wSize]);
        //            }

        //            Builder.cartObj_1Shirt['w'][wSize] = Quantity.OPTION3Shirt_wSize[wSize];
        //        });

        //        $(".sizing-chart-optionsForkit_4 [data-size]").each(function () {
        //            Size = $(this).attr('data-size');
        //            if (Quantity.OPTION3Shorts_Size[Size] == '0') {
        //                $('.sizing-chart-optionsForkit_4 [name="' + Size + '"]').val("");
        //            }
        //            else {
        //                $('.sizing-chart-optionsForkit_4 [name="' + Size + '"]').val(Quantity.OPTION3Shorts_Size[Size]);
        //            }

        //            Builder.cartObj_1Shirt['m'][Size] = Quantity.OPTION3Shorts_Size[Size];
        //            //console.log('size', Builder.cartObj[this]);
        //        });
        //        $(".sizing-chart-optionsForkit_4-women [data-size]").each(function () {
        //            wSize = $(this).attr('data-size');
        //            if (Quantity.OPTION3Shorts_wSize[wSize] == '0') {
        //                $('.sizing-chart-optionsForkit_4-women [name="' + wSize + '"]').val("");
        //            }
        //            else {
        //                $('.sizing-chart-optionsForkit_4-women [name="' + wSize + '"]').val(Quantity.OPTION3Shorts_wSize[wSize]);
        //            }
        //            Builder.cartObj_1Shirt['w'][wSize] = Quantity.OPTION3Shorts_wSize[wSize];
        //        });
        //    }
        //    else {
        //        console.log('no quants to show');
        //        $('.sizing-chart-optionsForkit_1 input, .sizing-chart-optionsForkit_1-women input').val(0);
        //    }
        //}

        //if (kitNo == 0) {
        //    if (Quantity != null) {
        //        console.log('set quants in table');
        //        $(Product.sizes).each(function () {
        //            if (Quantity.sizes[this] == '0') {
        //                $('.sizing-chart-optionsForkit_0 [name="' + this + '"]').val("");
        //            }
        //            else {
        //                $('.sizing-chart-optionsForkit_0 [name="' + this + '"]').val(Quantity.sizes[this]);
        //            }

        //            Builder.cartObj0['m'][this] = Quantity.sizes[this];
        //            //console.log('size', Builder.cartObj[this]);
        //        });
        //        $(Product.wSizes).each(function () {
        //            if (Quantity.wSizes[this] == '0') {
        //                $('.sizing-chart-optionsForkit_0-women [name="' + this + '"]').val("");
        //            }
        //            else {
        //                $('.sizing-chart-optionsForkit_0-women [name="' + this + '"]').val(Quantity.wSizes[this]);
        //            }
        //            Builder.cartObj0['w'][this] = Quantity.wSizes[this];
        //        });
        //    } else {
        //        console.log('no quants to show');
        //        $('.sizing-chart-optionsForkit_0 input, .sizing-chart-optionsForkit_0-women input').val(0);
        //    }
        //}
        //else if (kitNo == 1) {
        //    if (Quantity != null) {
        //        console.log('set quants in table');
        //        $(Product.sizesShirt).each(function () {
        //            if (Quantity.sizes[this] == '0') {
        //                $('.sizing-chart-optionsForkit_1 [name="' + this + '"]').val("");
        //            }
        //            else {
        //                $('.sizing-chart-optionsForkit_1 [name="' + this + '"]').val(Quantity.sizes[this]);
        //            }

        //            Builder.cartObj_1Shirt['m'][this] = Quantity.sizes[this];
        //            //console.log('size', Builder.cartObj[this]);
        //        });
        //        $(Product.wsizesShirt).each(function () {
        //            if (Quantity.sizes[this] == '0') {
        //                $('.sizing-chart-optionsForkit_1-women [name="' + this + '"]').val("");
        //            }
        //            else {
        //                $('.sizing-chart-optionsForkit_1-women [name="' + this + '"]').val(Quantity.sizes[this]);
        //            }

        //            Builder.cartObj_1Shirt['w'][this] = Quantity.sizes[this];
        //        });
        //    } else {
        //        console.log('no quants to show');
        //        $('.sizing-chart-optionsForkit_1 input, .sizing-chart-optionsForkit_1-women input').val(0);
        //    }
        //    if (Quantity != null) {
        //        console.log('set quants in table');
        //        $(Product.sizesShorts).each(function () {
        //            if (Quantity.sizes[this] == '0') {
        //                $('.sizing-chart-kit_OPTION2_Shorts_Men [name="' + this + '"]').val("");
        //            }
        //            else {
        //                $('.sizing-chart-kit_OPTION2_Shorts_Men [name="' + this + '"]').val(Quantity.sizes[this]);
        //            }

        //            Builder.cartObj_1Shorts['m'][this] = Quantity.sizes[this];
        //            //console.log('size', Builder.cartObj[this]);
        //        });
        //        $(Product.wsizesShorts).each(function () {
        //            if (Quantity.sizes[this] == '0') {
        //                $('.sizing-chart-kit_OPTION2_Shorts_women [name="' + this + '"]').val("");
        //            }
        //            else {
        //                $('.sizing-chart-kit_OPTION2_Shorts_women [name="' + this + '"]').val(Quantity.sizes[this]);
        //            }

        //            Builder.cartObj_1Shorts['w'][this] = Quantity.sizes[this];
        //        });
        //    } else {
        //        console.log('no quants to show');
        //        $('.sizing-chart-optionsForkit_1 input, .sizing-chart-optionsForkit_1-women input').val(0);
        //    }
        //}
        //else if (kitNo == 2) {
        //    if (Quantity != null) {
        //        console.log('set quants in table');
        //        $(Product.sizes).each(function () {
        //            if (Quantity.sizes[this] == '0') {
        //                $('.sizing-chart-optionsForkit_2 [name="' + this + '"]').val("");
        //            }
        //            else {
        //                $('.sizing-chart-optionsForkit_2 [name="' + this + '"]').val(Quantity.sizes[this]);
        //            }

        //            Builder.cartObj_2Singlet['m'][this] = Quantity.sizes[this];
        //            //console.log('size', Builder.cartObj[this]);
        //        });
        //        $(Product.wSizes).each(function () {
        //            if (Quantity.sizes[this] == '0') {
        //                $('.sizing-chart-optionsForkit_2-women [name="' + this + '"]').val("");
        //            }
        //            else {
        //                $('.sizing-chart-optionsForkit_2-women [name="' + this + '"]').val(Quantity.sizes[this]);
        //            }
        //            Builder.cartObj_2Singlet['w'][this] = Quantity.sizes[this];
        //        });
        //    } else {
        //        console.log('no quants to show');
        //        $('.sizing-chart-optionsForkit_2 input, .sizing-chart-optionsForkit_2-women input').val(0);
        //    }
        //}
        //else if (kitNo == 3) {
        //    if (Quantity != null) {
        //        console.log('set quants in table');
        //        $(Product.sizesShirt).each(function () {
        //            if (Quantity.sizes[this] == '0') {
        //                $('.sizing-chart-optionsForkit_3 [name="' + this + '"]').val("");
        //            }
        //            else {
        //                $('.sizing-chart-optionsForkit_3 [name="' + this + '"]').val(Quantity.sizes[this]);
        //            }
        //            Builder.cartObj_3Shirt['m'][this] = Quantity.sizes[this];
        //            //console.log('size', Builder.cartObj[this]);
        //        });
        //        $(Product.wsizesShirt).each(function () {
        //            if (Quantity.sizes[this] == '0') {
        //                $('.sizing-chart-optionsForkit_3-women [name="' + this + '"]').val("");
        //            }
        //            else {
        //                $('.sizing-chart-optionsForkit_3-women [name="' + this + '"]').val(Quantity.sizes[this]);
        //            }
        //            Builder.cartObj_3Shirt['w'][this] = Quantity.sizes[this];
        //        });
        //    } else {
        //        console.log('no quants to show');
        //        $('.sizing-chart-optionsForkit_3 input, .sizing-chart-optionsForkit_3-women input').val(0);
        //    }
        //    if (Quantity != null) {
        //        console.log('set quants in table');
        //        $(Product.sizesShorts).each(function () {
        //            if (Quantity.sizes[this] == '0') {
        //                $('.sizing-chart-kit_OPTION4_Shorts_Men [name="' + this + '"]').val("");
        //            }
        //            else {
        //                $('.sizing-chart-kit_OPTION4_Shorts_Men [name="' + this + '"]').val(Quantity.sizes[this]);
        //            }
        //            Builder.cartObj_3Shorts['m'][this] = Quantity.sizes[this];
        //            //console.log('size', Builder.cartObj[this]);
        //        });
        //        $(Product.wsizesShorts).each(function () {
        //            if (Quantity.sizes[this] == '0') {
        //                $('.sizing-chart-kit_OPTION4_Shorts_women [name="' + this + '"]').val("");
        //            }
        //            else {
        //                $('.sizing-chart-kit_OPTION4_Shorts_women [name="' + this + '"]').val(Quantity.sizes[this]);
        //            }
        //            Builder.cartObj_3Shorts['w'][this] = Quantity.sizes[this];
        //        });
        //    } else {
        //        console.log('no quants to show');
        //        $('.sizing-chart-optionsForkit_3 input, .sizing-chart-optionsForkit_3-women input').val(0);
        //    }
        //}
        //else if (kitNo == 4) {
        //    if (Quantity != null) {
        //        console.log('set quants in table');
        //        $(Product.sizes).each(function () {
        //            if (Quantity.sizes[this] == '0') {
        //                $('.sizing-chart-optionsForkit_4 [name="' + this + '"]').val("");
        //            }
        //            else {
        //                $('.sizing-chart-optionsForkit_4 [name="' + this + '"]').val(Quantity.sizes[this]);
        //            }
        //            Builder.cartObj_2Shorts['m'][this] = Quantity.sizes[this];
        //            //console.log('size', Builder.cartObj[this]);
        //        });
        //        $(Product.wSizes).each(function () {
        //            if (Quantity.sizes[this] == '0') {
        //                $('.sizing-chart-optionsForkit_4-women [name="' + this + '"]').val("");
        //            }
        //            else {
        //                $('.sizing-chart-optionsForkit_4-women [name="' + this + '"]').val(Quantity.sizes[this]);
        //            }
        //            Builder.cartObj_2Shorts['w'][this] = Quantity.sizes[this];
        //        });
        //    } else {
        //        console.log('no quants to show');
        //        $('.sizing-chart-optionsForkit_4 input, .sizing-chart-optionsForkit_4-women input').val(0);
        //    }
        //}
        ///----------my Code




        //End
        Builder.updateKitPricing(null, true, kitNo);

        if (CustKit['kit_' + kitNo].notes != null) $("#notes").text(CustKit['kit_' + kitNo].notes);

        //var toStep = (Builder.viewOnly) ? 1 : Cust.step;
        var toStep = (Builder.viewOnly) ? 1 : CustKit['kit_' + kitNo].step;
        Builder.gotoKitStep(toStep, kitNo, kitProduct);
    },
    initKitStepUi: function (kit_No, KitProduct) {
        console.log('initKitStepUi', Builder.step);
        $.each(Builder.STEPS, function (index, value) {
            $('body').removeClass(value);
        });
        $('body').addClass(Builder.STEPS[Builder.step]);
        $('#boundingbox_holder_kit').css("display", "none");//hide box here 22 Aug 2019
        if (kit_No == 0) {
            Builder.kitproductNewfor_0 = KitProduct;
        }
        else if (kit_No == 1) {
            Builder.kitproductNewfor_1 = KitProduct;
        }
        else if (kit_No == 2) {
            Builder.kitproductNewfor_2 = KitProduct;
        }
        else if (kit_No == 3) {
            Builder.kitproductNewfor_3 = KitProduct;
        }
        else if (kit_No == 4) {
            Builder.kitproductNewfor_4 = KitProduct;
        }
        Builder.kitproductNew = KitProduct;

        //12/8/2019
        //Start
        // Display all views of Product in "Review Order" Section.
        //$(".kits.kit_" + kit_No + " .canvas-wrapper").removeClass("review-active");
        //End
        switch (Builder.step) {
            case 0:	//fabric
                $("g[id^=BOX]").hide();
                break;
            case 1:	//color                

                //var is_firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
                //if (is_firefox) {                  
                //    localStorage.setItem('key', parseInt(TotalCountForLoading) + 1);
                //    total = localStorage.getItem('key');
                //    TotalCountForLoading = total;
                //    localStorage.setItem('key', TotalCountForLoading);
                //    if (localStorage.getItem('key') >= "4") {
                //        $('body').removeClass("changed").addClass('loaded');
                //        localStorage.removeItem("key");
                //        TotalCountForLoading = 0;                                       
                //        $('.kit.option-menu-head').attr("style", "display: block");
                //    }                  
                //}
                //else {                  
                //    localStorage.setItem('key', parseInt(TotalCountForLoading) + 1);
                //    total = localStorage.getItem('key');
                //    TotalCountForLoading = total;
                //    localStorage.setItem('key', TotalCountForLoading);
                //    if (localStorage.getItem('key') >= "9") {
                //        $('body').removeClass("changed").addClass('loaded');
                //        localStorage.removeItem("key");
                //        TotalCountForLoading = 0;                                        
                //        $('.kit.option-menu-head').attr("style", "display: block");
                //    } 
                //}
                $("g[id^=BOX]").hide();
                Builder.displayKitProductColors(kit_No, KitProduct);
                Builder.populateKitColorsWithCustomization(KitProduct, kit_No);
                if (Product.patternOptions && Product.patternOptions.length == 0)
                    $(".kits.kit_" + kit_No + " .option-set.patterns").hide();
                break;
            case 2:	//content
                $("g[id^=BOX]").show();
                Builder.recheckPrintingOptions();
                break;
            case 3:	//sizing
                $("g[id^=BOX]").hide();
                Builder.updateKitPricing(null, null, kit_No);
                break;
            case 4:	//review
                $("g[id^=BOX]").hide();
                //Builder.updateKitPricing(null, null, kit_No);
                //svgText.showAllArt();                          

                break;
            default:
                break;
        }
    },
    populateKitColorsWithCustomization: function (KitProduct, kitNo) {
        console.log('populateKitColorsWithCustomization');
        $("g[id*=PATTERN_MO]:not([id*=_A_])").hide();

        if (Builder.swatchMode) {
            if (Cust.swatch && Cust.fabric) {
                var swatch;
                $(KitProduct.colorSwatches[Cust.fabric]).each(function () {
                    if (this.code == Cust.swatch)
                        swatch = this;
                });
                if (!swatch) {
                    CK.alert(Errors.GENERIC);
                    return;
                }

                $('.kits.kit_' + kitNo + ' [data-code=' + Cust.swatch + ']').addClass('active');
                $(KitProduct.panels).each(function () {
                    Builder.setKitSvgColor(this.name, swatch.colors[this.name].hex, kitNo);
                });


                if (Cust.swatch == "NY" || Cust.swatch == "BK" || Cust.swatch == "PR" || Cust.swatch == "NYSG" || Cust.swatch == "BKOR" || Cust.swatch == "NYCB" || Cust.swatch == "BKSG" || Cust.swatch == "BKSC" || Cust.swatch == "NYVG") {
                    $("g[id^=BOX] *").attr('stroke', '#00FF99');
                }
                else {
                    if (Product.BOXCOLOR != "DEFAULT") {
                        $("g[id^=BOX] *").attr('stroke', '#000000');
                    }
                }
            }
        }
        else {
            $(KitProduct.panels).each(function () {
                var group = this.name, hex, image;
                //var code = Cust.colors[group];

                var code = CustKit['kit_' + kitNo].colors[group];
                if (code) {
                    var el = $('.kits.kit_' + kitNo + ' [data-svg-id="' + group + '"] [data-code="' + code + '"]').addClass('active');
                    hex = el.data('hex');
                    image = el.data('image');
                }
                else
                    hex = null;

                Builder.setKitSvgColor(group, hex, code, image, kitNo);

                if (group == "BODY") {
                    if (code == "BK" || code == "BN" || code == "NY" || code == "PR") {
                        $("g[id^=BOX] *").attr('stroke', '#00FF99');
                    }
                    else {
                        if (Product.BOXCOLOR != "DEFAULT") {
                            $("g[id^=BOX] *").attr('stroke', '#000000');
                        }
                    }
                }
            });
        }
    },
    gotoKitStep: function (step, kitNo, KitProduct) {
        //23-11-2020
        //add full path of image during share image on gmail
        //Start
        var Imglength = document.getElementsByTagName('image').length;
        for (var a = 0; a < Imglength; a++) {
            var newResult = document.getElementsByTagName('image')[a].getAttribute('xlink:href');
            var result1 = newResult.startsWith('svg');
            var result2 = newResult.startsWith('/svg');
            if (result1 === true || result2 === true) {
                var Url = window.location.origin;
                var fullPath = Url + "/" + newResult;
                document.getElementsByTagName('image')[a].setAttribute('xlink:href', fullPath);
            }
        }
        //end
        if (Product.sku === "STYLE 59") {
            //Remove OPTION 2 women sizes(shirt and short)
            $(".kit_1 .option-set.sizing .sub-title").html("Sizing Chart For Shirt");
            $(".kit_OPTION2_SHORTS .option-set.sizing>.sub-title").html("Sizing Chart For Shorts");
            //Remove OPTION 4 women sizes(shirt and short)
            $(".kit_3 .option-set.sizing .sub-title").html("Sizing Chart For Shirt");
            $(".kit_OPTION4_SHORTS .option-set.sizing>.sub-title").html("Sizing Chart For Shorts");
        }
        if (Product.sku === "STYLE 57" || Product.sku === "STYLE 56" || Product.sku === "STYLE 58") {
            $('.main').addClass('dynamicClassForShortsOption3');
        }
        // Important -- Find Current Active Kit No oR Active "Option" 
        var ActiveKit = $('.kit.active span.active').attr('data-count');
        console.log('gotoKitStep', step);
        var stepNo = $('.row.steps span.active').attr('data-nav');
        if (step <= Builder.maxStep && step >= 0 && !$.QueryString['f']) {
            Api.call(Api.endpoints.getUser, 'chkUserLogin', function (data) {
                //if ((step == 3 || step == 4)) {
                //Important-Displaying Pricing before login(Step 3 is pricing step)
                if (step == 4) {
                    if (data.ID != '0' && data.ID[0] != '-') {
                        //  if (data.ID != '0') {
                        // user logged in
                        $(".user-info-header > a").hide();
                        $(".modal.dealer .user-info .name").text(data.FirstName + " " + data.LastName);
                        $(".user-info-header > div.name span").text(data.FirstName);
                        $(".modal.dealer .user-info .email").text(data.email);
                        $(".user-info-header > div").show();
                    } else {
                        Api.call(Api.endpoints.getAdmin, JSON.stringify({}), function (Data) {
                            if (Data != null) {
                                if (Data == "Admin") {
                                    // Admin logged in
                                    $(".user-info-header > a").hide();
                                    $(".user-info-header > div").show()
                                }
                                else {
                                    // user not logged in
                                    $(".user-info-header > div").hide()
                                    $(".user-info-header > a").show();
                                }
                            }
                        });
                    }
                }
                Builder.userData = data;
            });
            //21/2/2019
            //Important-- Hide "Save and Share" Button from "Color" Section 
            //Start           
            //if ((step == 3 || step == 4) && Builder.userData.ID < 0) {
            //Important-Displaying Pricing before login(Step 3 is pricing step)
            if (step == 4 && Builder.userData.ID < 0) {
                var IsAdmin = false;
                Api.call(Api.endpoints.getAdmin, JSON.stringify({}), function (Data) {
                    if (step == 1) {
                        $('.share').hide();
                        $('.save-share').hide();
                    }
                    else {
                        $('.save-share').show();
                    }
                    if (Data != null) {
                        if (Data == "Admin") {
                            IsAdmin = true;
                        }
                        else {
                            //  CK.alert(300);
                            $('.share').hide();
                        }
                    }
                });
            }//25/2/2019
            else {
                if (step == 1) {
                    $('.share').hide();
                    $('.save-share').hide();
                }
                else {
                    $('.save-share').show();
                    //$('.share').show();
                }
            }
            //End


            //if ((step == 3 || step == 4) && Builder.userData.ID < 0) {
            //Important-Displaying Pricing before login(Step 3 is pricing step)
            if (step == 4 && Builder.userData.ID < 0) {
                var IsAdmin = false;
                Api.call(Api.endpoints.getAdmin, JSON.stringify({}), function (Data) {
                    if (step == 1) {
                        $('.share').hide();
                        $('.save-share').hide();
                    }
                    else {
                        $('.save-share').show();
                    }
                    if (Data != null) {
                        if (Data == "Admin") {
                            IsAdmin = true;
                        }
                        else {
                            //  CK.alert(300);
                            $('.share').hide();
                        }
                    }
                });
            }//25/2/2019
            else {
                if (step == 1) {
                    $('.share').hide();
                    $('.save-share').hide();
                }
                else {
                    $('.save-share').show();
                    // $('.share').show();
                }
            }
            //End
            //if ((step == 3 || step == 4) && Builder.userData.ID < 0) {
            //Important-Displaying Pricing before login(Step 3 is pricing step)
            if (step == 4 && Builder.userData.ID < 0) {
                //1/1/2019
                //Important---Show Boundary Box, In Step 2 While Use Click on Artwork Otherwise Hide Boundary Box
                $("#boundingbox").css("display", "none");
                var IsAdmin = false;
                Api.call(Api.endpoints.getAdmin, JSON.stringify({}), function (Data) {
                    if (Data != null) {

                        //22/4/2019  
                        //If user is Loged in then Remove the view-only class
                        //$('body').removeClass("view-only");                        

                        // Important-- Login Section For Kits 
                        //  $("#DotUseForKit").removeClass('active')
                        if (Data == "Admin") {
                            //17/4/2019
                            if (ActiveKit == 0) {
                                $('.kit_0_active').css("font-weight", "bold");
                            }
                            IsAdmin = true;
                            if (step == 0)
                                $("[data-nav=prev]").addClass("disabled");
                            else if (step == Builder.maxStep)
                                $("[data-nav=prev]").removeClass("disabled");
                            else
                                $("[data-nav]").removeClass("disabled");
                            // important--Hiding FRONT,BACK,LEFT,RIGHT Panel From "Quantity & Size" in Kit Section.
                            //18/1/2019 

                            if ((ActiveKit) == 2) {
                                $('body').attr('id', 'option3test');
                            }
                            else {
                                $('body').removeAttr('option3test');
                            }
                            switch (ActiveKit) {
                                case "0":
                                    if (step == 3) {
                                        $('#HideQuantityAndSizesForKit0').hide();
                                    }
                                    else {
                                        $('#HideQuantityAndSizesForKit0').show();
                                        $('#HideQuantityAndSizesForKit0').css('display', 'flex');
                                        $('#HideQuantityAndSizesForKit1').hide();
                                        $('#HideQuantityAndSizesForKit2').hide();
                                        $('#HideQuantityAndSizesForKit3').hide();
                                    }
                                    break;
                                case "1":
                                    if (step == 3) {
                                        $('#HideQuantityAndSizesForKit1').hide();
                                    }
                                    else {
                                        $('#HideQuantityAndSizesForKit1').show();
                                        $('#HideQuantityAndSizesForKit1').css('display', 'flex');
                                        $('#HideQuantityAndSizesForKit0').hide();
                                        $('#HideQuantityAndSizesForKit2').hide();
                                        $('#HideQuantityAndSizesForKit3').hide();
                                    }
                                    break;
                                case "2":
                                    if (step == 3) {
                                        $('#HideQuantityAndSizesForKit2').hide();
                                    }
                                    else {
                                        $('#HideQuantityAndSizesForKit2').show();
                                        $('#HideQuantityAndSizesForKit2').css('display', 'flex');
                                        $('#HideQuantityAndSizesForKit0').hide();
                                        $('#HideQuantityAndSizesForKit1').hide();
                                        $('#HideQuantityAndSizesForKit3').hide();
                                    }
                                    break;
                                case "3":
                                    if (step == 3) {
                                        $('#HideQuantityAndSizesForKit3').hide();
                                    }
                                    else {
                                        $('#HideQuantityAndSizesForKit3').show();
                                        $('#HideQuantityAndSizesForKit3').css('display', 'flex');
                                        $('#HideQuantityAndSizesForKit0').hide();
                                        $('#HideQuantityAndSizesForKit1').hide();
                                        $('#HideQuantityAndSizesForKit2').hide();

                                    }
                            }
                            $(".option-set.active, [data-nav]").removeClass("active");

                            // Important --- remove shorts name, in font of singlate Pricing chart in "ORTION 3" of "Quantity & Sizes" 


                            //Important-- show and Hide Shorts Name for Following classes Which Is for "Color" section
                            if (ActiveKit == 2 && step == 1) {
                                $('#DSFSSYYSF').show();
                            }
                            else {
                                $('#DSFSSYYSF').hide();
                            }

                            //Important-- show and Hide Shorts Name for Following classes Which Is for "Quantity & Sizes" section
                            if (ActiveKit == 2 && step == 3) {
                                $(".optionallInKit").show();
                            }
                            else {
                                $(".optionallInKit").hide();
                            }
                            if (step == 4) {
                                //date 26-6
                                $(".option-set.ctas .buttons .to-cart").remove();
                                $('#btncart').hide();
                                $(".optionallInKit").hide();
                            }
                            $("a").removeClass("processing");
                            $(".option-set[data-step=" + step + "]").addClass("active");

                            //25/2/2019
                            //if (step == 4) {
                            //    $('.share').show();
                            //}

                            //Important-- show and Hide Shorts Name for Following classes Which Is for "Review order" section

                            if (ActiveKit == 2 && step == 4) {
                                $(".ReviwOrderOption3").show();
                            }
                            else {
                                $(".ReviwOrderOption3").hide();
                            }

                            $("[data-nav=" + step + "]").addClass("active");


                            Builder.updateKitPricing("", "", ActiveKit);

                            if ($('.row.steps span.active').attr('data-nav') === "3") {
                                $('.Teamprice').show();
                            }
                            else {
                                $('.Teamprice').hide();
                            }
                            //Important--add class ProgressBar
                            //Start

                            var MinNumber;
                            var MaxNumber;
                            var count = 0;
                            $(".row.steps [data-nav]").each(function () {
                                var Number = $(this).data('nav');
                                if (count === 0) {
                                    MinNumber = Number;
                                    MaxNumber = Number;
                                }
                                if (MinNumber < Number) {
                                    MaxNumber = Number;
                                }
                                else {
                                    MinNumber = Number;
                                }
                                count++;
                            });
                            for (MinNumber = MinNumber; MinNumber <= step; MinNumber++) {
                                $("[data-nav=" + MinNumber + "]").addClass("ProgressBar");
                            }
                            var StepNo = step;
                            for (StepNo = StepNo + 1; StepNo <= MaxNumber; StepNo++) {
                                $("[data-nav=" + StepNo + "]").removeClass("ProgressBar");
                            }
                            //end

                            //Important    Hide  the Singlate Pricing Chart List from the Kits In Quantity & Review Section

                            $("#DotUseForKit").removeClass('active');

                            //Important-- show and Hide Pricing Chart for OPTION2 in Kit Section
                            if (ActiveKit == 1 && step == 3) {
                                $(".kits.kit_OPTION2_SHORTS").addClass('active');
                            }
                            else {
                                $(".kits.kit_OPTION2_SHORTS").removeClass('active');
                            }
                            //Important-- show and Hide Pricing Chart for OPTION4 in Kit Section

                            //-Important-- Add Class for Scroll In Pricing OPTION Option 2 and OPTION 4

                            if (ActiveKit == 3 && step == 3) {
                                $(".kits.kit_OPTION4_SHORTS").addClass('active');
                            }
                            else {
                                $(".kits.kit_OPTION4_SHORTS").removeClass('active');
                            }

                            if (step == 3 && ActiveKit == 1) {
                                var classexits = $(".main .options").hasClass("option2_4_scroll");
                                if (classexits) {
                                    $(".main .options").removeClass("option2_4_scroll");
                                }
                                $(".main .options").addClass("option2_4_scroll");
                            }
                            else if (step == 3 && ActiveKit == 3) {
                                var classexits = $(".main .options").hasClass("option2_4_scroll");
                                if (classexits) {
                                    $(".main .options").removeClass("option2_4_scroll");
                                }
                                $(".main .options").addClass("option2_4_scroll");
                            }
                            else {
                                $(".main .options").removeClass("option2_4_scroll");
                            }
                            //1/1/2019
                            //Important---Show Boundary Box, In Step 2 While Use Click on Artwork Otherwise Hide Boundary Box
                            if (step != 2) {
                                $("#boundingbox").css("display", "none");
                            }
                            else {
                                $("#boundingbox").css("display", "block");
                            }

                            Builder.step = step;
                            //   Cust.step = step;

                            //  Builder.kitStep.push({ KitID: 'kit_' + kitNo, kit_step: step });
                            CustKit['kit_' + kitNo].step = step;
                            Builder.initKitStepUi(kitNo, KitProduct);
                        }
                        //else {
                        //CK.alert(300);
                        else if (Builder.userData.ID < 0) {
                            // $(".user-info-header > div").hide();
                            // $(".user-info-header > a").css("display","Block");
                            // $('body').removeClass('loggedin');
                            //$('body').addClass('guest');
                            //$('.model.error.ok').removeClass('active');
                            $(".error .copy").html("");
                            var IsViewOnly = $('body').hasClass('view-only');
                            if (IsViewOnly !== true) {
                                CK.alert(300);
                            }
                        }
                        //}
                    }
                });
            } else {
                //22/4/2019
                //If user is Loged in then Remove the view-only class
                //(Builder.userData.ID > 0)
                //{
                //    $('body').removeClass("view-only");
                //}

                //17/4/2019
                if (ActiveKit == 0) {
                    $('.kit_0_active').css("font-weight", "bold");
                }

                if ((ActiveKit) == 2) {
                    $('body').attr('id', 'option3test');
                }
                else {
                    $('body').removeAttr('option3test');
                }
                // important--Hiding FRONT,BACK,LEFT,RIGHT Panel From "Quantity & Size" in Kit Section.
                //18/1/2019 
                switch (ActiveKit) {
                    case "0":
                        if (step == 3) {
                            $('#HideQuantityAndSizesForKit0').hide();
                        }
                        else {
                            $('#HideQuantityAndSizesForKit0').show();
                            $('#HideQuantityAndSizesForKit0').css('display', 'flex');
                            $('#HideQuantityAndSizesForKit1').hide();
                            $('#HideQuantityAndSizesForKit2').hide();
                            $('#HideQuantityAndSizesForKit3').hide();
                        }
                        break;
                    case "1":
                        if (step == 3) {
                            $('#HideQuantityAndSizesForKit1').hide();
                        }
                        else {
                            $('#HideQuantityAndSizesForKit1').show();
                            $('#HideQuantityAndSizesForKit1').css('display', 'flex');
                            $('#HideQuantityAndSizesForKit0').hide();
                            $('#HideQuantityAndSizesForKit2').hide();
                            $('#HideQuantityAndSizesForKit3').hide();
                        }
                        break;
                    case "2":
                        if (step == 3) {
                            $('#HideQuantityAndSizesForKit2').hide();
                        }
                        else {
                            $('#HideQuantityAndSizesForKit2').show();
                            $('#HideQuantityAndSizesForKit2').css('display', 'flex');
                            $('#HideQuantityAndSizesForKit0').hide();
                            $('#HideQuantityAndSizesForKit1').hide();
                            $('#HideQuantityAndSizesForKit3').hide();
                        }
                        break;
                    case "3":
                        if (step == 3) {
                            $('#HideQuantityAndSizesForKit3').hide();
                        }
                        else {
                            $('#HideQuantityAndSizesForKit3').show();
                            $('#HideQuantityAndSizesForKit3').css('display', 'flex');
                            $('#HideQuantityAndSizesForKit0').hide();
                            $('#HideQuantityAndSizesForKit1').hide();
                            $('#HideQuantityAndSizesForKit2').hide();

                        }
                }
                if (step == 0)
                    $("[data-nav=prev]").addClass("disabled");
                else if (step == Builder.maxStep)
                    $("[data-nav=prev]").removeClass("disabled");
                else
                    $("[data-nav]").removeClass("disabled");

                //my code
                // var data= Builder.PreviewClick();             
                $(".option-set.active, [data-nav]").removeClass("active");
                // var data = Builder.PreviewClick();

                // Important --- remove multipal shorts name in "ORTION 3" of "Artwork"
                $(".kits.kit_4.optionallInKit[data-step=" + step + "]").removeClass("active");
                $("a").removeClass("processing");
                $(".option-set[data-step=" + step + "]").addClass("active");

                //Important--add class ProgressBar
                //Start


                Builder.updateKitPricing("", "", ActiveKit);
                var MinNumber;
                var MaxNumber;
                var count = 0;
                $(".row.steps [data-nav]").each(function () {
                    var Number = $(this).data('nav');
                    if (count === 0) {
                        MinNumber = Number;
                        MaxNumber = Number;
                    }
                    if (MinNumber < Number) {
                        MaxNumber = Number;
                    }
                    else {
                        MinNumber = Number;
                    }
                    count++;
                });
                for (MinNumber = MinNumber; MinNumber <= step; MinNumber++) {
                    $("[data-nav=" + MinNumber + "]").addClass("ProgressBar");
                }
                var StepNo = step;
                for (StepNo = StepNo + 1; StepNo <= MaxNumber; StepNo++) {
                    $("[data-nav=" + StepNo + "]").removeClass("ProgressBar");
                }
                //end


                //Important-- show and Hide Shorts Name for Following classes Which Is for "Quantity & Sizes" section

                if (ActiveKit == 2 && step == 3) {
                    $(".optionallInKit").show();
                }
                else {
                    $(".optionallInKit").hide();
                }
                //1/1/2019
                //Important---Show Boundary Box, In Step 2 While Use Click on Artwork Otherwise Hide Boundary Box
                if (step != 2) {
                    $("#boundingbox").css("display", "none");
                }
                else {
                    $("#boundingbox").css("display", "block");
                }

                //25/2/2019
                //if (step == 4) {
                //    $('.share').show();
                //}
                //Important-- show and Hide Shorts Name for Following classes Which Is for "Review order" section
                if (ActiveKit == 2 && step == 4) {

                    $(".ReviwOrderOption3").show();
                }
                else {
                    $(".ReviwOrderOption3").hide();
                }

                //Important    Hide  the Singlate Pricing Chart List from the Kits In Quantity & Review Section

                $("#DotUseForKit").removeClass('active');
                // var data = Builder.PreviewClick();             
                $("[data-nav=" + step + "]").addClass("active");
                // var data = Builder.PreviewClick();
                if ($('.row.steps span.active').attr('data-nav') === "3") {
                    $('.Teamprice').show();
                }
                else {
                    $('.Teamprice').hide();
                }
                // Important --- remove shorts name, in font of singlate Pricing chart in "ORTION 3" of "Quantity & Sizes" 
                // $('#DSFSSYYSF').hide();

                //Important-- show and Hide Shorts Name for Following classes Which Is for "Color" section
                if (ActiveKit == 2 && step == 1) {
                    $('#DSFSSYYSF').show();
                }
                else {
                    $('#DSFSSYYSF').hide();
                }

                //Important-- show and Hide Pricing Chart for OPTION2 in Kit Section

                if (ActiveKit == 1 && step == 3) {
                    $(".kits.kit_OPTION2_SHORTS").addClass('active');
                }
                else {
                    $(".kits.kit_OPTION2_SHORTS").removeClass('active');
                }

                //Important-- show and Hide Pricing Chart for OPTION4 in Kit Section

                if (ActiveKit == 3 && step == 3) {
                    $(".kits.kit_OPTION4_SHORTS").addClass('active');
                }
                else {
                    $(".kits.kit_OPTION4_SHORTS").removeClass('active');
                }

                //-Important-- Add Class for Scroll In Pricing OPTION Option 2 and OPTION 4

                if (step == 3 && ActiveKit == 1) {
                    var classexits = $(".main .options").hasClass("option2_4_scroll");
                    if (classexits) {
                        $(".main .options").removeClass("option2_4_scroll");
                    }
                    $(".main .options").addClass("option2_4_scroll");
                }
                else if (step == 3 && ActiveKit == 3) {
                    var classexits = $(".main .options").hasClass("option2_4_scroll");
                    if (classexits) {
                        $(".main .options").removeClass("option2_4_scroll");
                    }
                    $(".main .options").addClass("option2_4_scroll");
                }
                else {
                    $(".main .options").removeClass("option2_4_scroll");
                }

                Builder.step = step;
                //Cust.step = step;

                //Builder.kitStep.push({ KitID: 'kit_' + kitNo, kit_step: step });
                CustKit['kit_' + kitNo].step = step;
                Builder.initKitStepUi(kitNo, KitProduct);
            }
        }
    },
    getKitArtworkObject: function (kitNo) {
        // possible saved objects
        //CustKit['kit_' + KitNo].text 
        var custFront = CustKit['kit_' + kitNo].text["_Front"]; //Cust.text["_Front_" + kitNo];
        var custBack = CustKit['kit_' + kitNo].text["_Back"]; //Cust.text["_Back_" + kitNo];
        var custLeft = CustKit['kit_' + kitNo].text["_Left"]; //Cust.text["_Left_" + kitNo];
        var custRight = CustKit['kit_' + kitNo].text["_Right"];// Cust.text["_Right_" + kitNo];

        // possible new objects
        var artFront = svgText.layerKitObjects["_Front_" + kitNo];
        var artBack = svgText.layerKitObjects["_Back_" + kitNo];
        var artLeft = svgText.layerKitObjects["_Left_" + kitNo];
        var artRight = svgText.layerKitObjects["_Right_" + kitNo];
        // 


        // if there's no new stuff use the old stuff, bro
        if (artFront.length > 0) custFront = svgText.layerKitObjects["_Front_" + kitNo];
        if (artBack.length > 0) custBack = svgText.layerKitObjects["_Back_" + kitNo];
        if (artLeft.length > 0) custLeft = svgText.layerKitObjects["_Left_" + kitNo];
        if (artRight.length > 0) custRight = svgText.layerKitObjects["_Right_" + kitNo];


        return {
            "_Front": custFront,
            "_Back": custBack,
            "_Left": custLeft,
            "_Right": custRight


        };
    },
    hasKitChanged: function (reason, kitNo) {
        //console.log("builder has changed but why?", "because: "+reason);
        $("body").addClass("changed");
        Builder.recheckPrintingOptions();
        Cust.text = Builder.getKitArtworkObject(kitNo);
    },
    productKitDataForSaving: function (status, AdminCheck, KitNo) {
        //To allow admin to Save/Edit designs created by another users    

        if (status == null || status == undefined) status = 'NEW';

        // Cust.text = Builder.getKitArtworkObject(KitNo);
        CustKit['kit_' + KitNo].text = Builder.getKitArtworkObject(KitNo);
        switch (KitNo) {
            case 0:
                if (CustKit['kit_' + KitNo].text["_Front"] !== undefined) {
                    for (var i = 0; i <= CustKit['kit_' + KitNo].text["_Front"].length - 1; i++) {
                        if ($('.Image_Front_0' + i).attr('transform') !== undefined) {
                            CustKit['kit_' + KitNo].text["_Front"][i].Transform = $('.Image_Front_0' + i).attr('transform');
                        }
                    }
                }
                if (CustKit['kit_' + KitNo].text["_Back"] !== undefined) {
                    for (var i = 0; i <= CustKit['kit_' + KitNo].text["_Back"].length - 1; i++) {
                        if ($('.Image_Back_0' + i).attr('transform') !== undefined) {
                            CustKit['kit_' + KitNo].text["_Back"][i].Transform = $('.Image_Back_0' + i).attr('transform');
                        }

                    }
                }
                if (CustKit['kit_' + KitNo].text["_Left"] !== undefined) {
                    for (var i = 0; i <= CustKit['kit_' + KitNo].text["_Left"].length - 1; i++) {
                        if ($('.Image_Left_0' + i).attr('transform') !== undefined) {
                            CustKit['kit_' + KitNo].text["_Left"][i].Transform = $('.Image_Left_0' + i).attr('transform');
                        }

                    }
                }
                if (CustKit['kit_' + KitNo].text["_Right"] !== undefined) {
                    for (var i = 0; i <= CustKit['kit_' + KitNo].text["_Right"].length - 1; i++) {
                        if ($('.Image_Right_0' + i).attr('transform') !== undefined) {
                            CustKit['kit_' + KitNo].text["_Right"][i].Transform = $('.Image_Right_0' + i).attr('transform');
                        }

                    }
                }
                break;
            case 1:
                if (CustKit['kit_' + KitNo].text["_Front"] !== undefined) {
                    for (var i = 0; i <= CustKit['kit_' + KitNo].text["_Front"].length - 1; i++) {
                        if ($('.Image_Front_1' + i).attr('transform') !== undefined) {
                            CustKit['kit_' + KitNo].text["_Front"][i].Transform = $('.Image_Front1' + i).attr('transform');
                        }
                    }
                }
                if (CustKit['kit_' + KitNo].text["_Back"] !== undefined) {
                    for (var i = 0; i <= CustKit['kit_' + KitNo].text["_Back"].length - 1; i++) {
                        if ($('.Image_Back_1' + i).attr('transform') !== undefined) {
                            CustKit['kit_' + KitNo].text["_Back"][i].Transform = $('.Image_Back_1' + i).attr('transform');
                        }

                    }
                }
                if (CustKit['kit_' + KitNo].text["_Left"] !== undefined) {
                    for (var i = 0; i <= CustKit['kit_' + KitNo].text["_Left"].length - 1; i++) {
                        if ($('.Image_Left_1' + i).attr('transform') !== undefined) {
                            CustKit['kit_' + KitNo].text["_Left"][i].Transform = $('.Image_Left_1' + i).attr('transform');
                        }

                    }
                }
                if (CustKit['kit_' + KitNo].text["_Right"] !== undefined) {
                    for (var i = 0; i <= CustKit['kit_' + KitNo].text["_Right"].length - 1; i++) {
                        if ($('.Image_Right_1' + i).attr('transform') !== undefined) {
                            CustKit['kit_' + KitNo].text["_Right"][i].Transform = $('.Image_Right_1' + i).attr('transform');
                        }

                    }
                }
                break;
            case 2:
                if (CustKit['kit_' + KitNo].text["_Front"] !== undefined) {
                    for (var i = 0; i <= CustKit['kit_' + KitNo].text["_Front"].length - 1; i++) {
                        if ($('.Image_Front_2' + i).attr('transform') !== undefined) {
                            CustKit['kit_' + KitNo].text["_Front"][i].Transform = $('.Image_Front_2' + i).attr('transform');
                        }
                    }
                }
                if (CustKit['kit_' + KitNo].text["_Back"] !== undefined) {
                    for (var i = 0; i <= CustKit['kit_' + KitNo].text["_Back"].length - 1; i++) {
                        if ($('.Image_Back_2' + i).attr('transform') !== undefined) {
                            CustKit['kit_' + KitNo].text["_Back"][i].Transform = $('.Image_Back_2' + i).attr('transform');
                        }

                    }
                }
                if (CustKit['kit_' + KitNo].text["_Left"] !== undefined) {
                    for (var i = 0; i <= CustKit['kit_' + KitNo].text["_Left"].length - 1; i++) {
                        if ($('.Image_Left_2' + i).attr('transform') !== undefined) {
                            CustKit['kit_' + KitNo].text["_Left"][i].Transform = $('.Image_Left_2' + i).attr('transform');
                        }

                    }
                }
                if (CustKit['kit_' + KitNo].text["_Right"] !== undefined) {
                    for (var i = 0; i <= CustKit['kit_' + KitNo].text["_Right"].length - 1; i++) {
                        if ($('.Image_Right_2' + i).attr('transform') !== undefined) {
                            CustKit['kit_' + KitNo].text["_Right"][i].Transform = $('.Image_Right_2' + i).attr('transform');
                        }

                    }
                }
                break;
            case 3:
                if (CustKit['kit_' + KitNo].text["_Front"] !== undefined) {
                    for (var i = 0; i <= CustKit['kit_' + KitNo].text["_Front"].length - 1; i++) {
                        if ($('.Image_Front_3' + i).attr('transform') !== undefined) {
                            CustKit['kit_' + KitNo].text["_Front"][i].Transform = $('.Image_Front_3' + i).attr('transform');
                        }
                    }
                }
                if (CustKit['kit_' + KitNo].text["_Back"] !== undefined) {
                    for (var i = 0; i <= CustKit['kit_' + KitNo].text["_Back"].length - 1; i++) {
                        if ($('.Image_Back_3' + i).attr('transform') !== undefined) {
                            CustKit['kit_' + KitNo].text["_Back"][i].Transform = $('.Image_Back_3' + i).attr('transform');
                        }

                    }
                }
                if (CustKit['kit_' + KitNo].text["_Left"] !== undefined) {
                    for (var i = 0; i <= CustKit['kit_' + KitNo].text["_Left"].length - 1; i++) {
                        if ($('.Image_Left_3' + i).attr('transform') !== undefined) {
                            CustKit['kit_' + KitNo].text["_Left"][i].Transform = $('.Image_Left_3' + i).attr('transform');
                        }
                    }
                }
                if (CustKit['kit_' + KitNo].text["_Right"] !== undefined) {
                    for (var i = 0; i <= CustKit['kit_' + KitNo].text["_Right"].length - 1; i++) {
                        if ($('.Image_Right_4' + i).attr('transform') !== undefined) {
                            CustKit['kit_' + KitNo].text["_Right"][i].Transform = $('.Image_Right_4' + i).attr('transform');
                        }
                    }
                }
                break;
            case 4:
                if (CustKit['kit_' + KitNo].text["_Front"] !== undefined) {
                    for (var i = 0; i <= CustKit['kit_' + KitNo].text["_Front"].length - 1; i++) {
                        if ($('.Image_Front_4' + i).attr('transform') !== undefined) {
                            CustKit['kit_' + KitNo].text["_Front"][i].Transform = $('.Image_Front_4' + i).attr('transform');
                        }
                    }
                }
                if (CustKit['kit_' + KitNo].text["_Back"] !== undefined) {
                    for (var i = 0; i <= CustKit['kit_' + KitNo].text["_Back"].length - 1; i++) {
                        if ($('.Image_Back_4' + i).attr('transform') !== undefined) {
                            CustKit['kit_' + KitNo].text["_Back"][i].Transform = $('.Image_Back_4' + i).attr('transform');
                        }

                    }
                }
                if (CustKit['kit_' + KitNo].text["_Left"] !== undefined) {
                    for (var i = 0; i <= CustKit['kit_' + KitNo].text["_Left"].length - 1; i++) {
                        if ($('.Image_Left_4' + i).attr('transform') !== undefined) {
                            CustKit['kit_' + KitNo].text["_Left"][i].Transform = $('.Image_Left_4' + i).attr('transform');
                        }

                    }
                }
                if (CustKit['kit_' + KitNo].text["_Right"] !== undefined) {
                    for (var i = 0; i <= CustKit['kit_' + KitNo].text["_Right"].length - 1; i++) {
                        if ($('.Image_Right_4' + i).attr('transform') !== undefined) {
                            CustKit['kit_' + KitNo].text["_Right"][i].Transform = $('.Image_Right_4' + i).attr('transform');
                        }

                    }
                }
                break;

        }
        //console.log('Cust.text ', CustKit['kit_' + KitNo].text);
        //console.log('kitNo', KitNo);
        //Cust.printingOption = null;
        //console.log(Cust);
        //  console.log("CustKit.kit "+KitNo, CustKit['kit_' + KitNo].text);

        ///Today comment 15-6-2019
        //var qObj = {
        //    "sizes": {}, "wSizes": {}, "UserId": null,
        //    "UserFirstName": null,
        //    "UserLastName": null,
        //    "UserEmail": null
        //};
        //$(".sizing-chart-options input").each(function () {
        //    var name = $(this).attr("name");
        //    var quant = $(this).val() || 0;

        //    qObj.sizes[name] = quant;
        //});
        //$(".sizing-chart-options-women input").each(function () {
        //    var name = $(this).attr("name");
        //    var quant = $(this).val() || 0;

        //    qObj.wSizes[name] = quant;
        //});

        if (KitNo === 0) {
            qObj = { "sizes": {}, "wSizes": {}, "price": {}, "wPrice": {} };
            $(".sizing-chart-optionsForkit_0 input").each(function () {
                var name = $(this).attr("name");
                var quant = $(this).val() || 0;
                qObj.sizes[name] = quant;

                var prices = $(".sizing-chart-optionsForkit_0 span").html();
                if (quant !== 0) {
                    qObj.price[name] = prices;
                }
                else { qObj.price[name] = 0; }

            });
            $(".sizing-chart-optionsForkit_0-women input").each(function () {
                var name = $(this).attr("name");
                var quant = $(this).val() || 0;

                qObj.wSizes[name] = quant;


                var prices = $(".sizing-chart-optionsForkit_0-women span").html();
                if (quant !== 0) {
                    qObj.wPrice[name] = prices;
                }
                else { qObj.wPrice[name] = 0; }
            });
            Kit0.sizes = qObj.sizes;
            Kit0.wSizes = qObj.wSizes;
            // Kit0.price = qObj.price;
            // Kit0.wPrice = qObj.wPrice;
        }
        else if (KitNo === 1) {
            qObj = { "sizes": {}, "wSizes": {}, "OPTION2Shirt_Size": {}, "OPTION2Shirt_wSize": {}, "OPTION2Short_Size": {}, "OPTION2Short_wSize": {}, "price": {}, "wPrice": {}, "OPTION2Shirt_Price": {}, "OPTION2Shirt_wPrice": {}, "OPTION2Short_Price": {}, "OPTION2Short_wPrice": {} };
            $(".sizing-chart-optionsForkit_1 input").each(function () {
                var name = $(this).attr("name");
                var quant = $(this).val() || 0;

                // qObj.sizes[name] = quant;
                qObj.OPTION2Shirt_Size[name] = quant;


                var prices = $(".sizing-chart-optionsForkit_1 span").html();
                if (quant !== 0) {
                    qObj.price[name] = prices;
                    //qObj.OPTION2Shirt_Price[name] = prices;
                }
                else { qObj.price[name] = 0; }
            });
            $(".sizing-chart-optionsForkit_1-women input").each(function () {
                var name = $(this).attr("name");
                var quant = $(this).val() || 0;

                //qObj.wSizes[name] = quant;
                qObj.OPTION2Shirt_wSize[name] = quant;

                var prices = $(".sizing-chart-optionsForkit_1-women span").html();
                if (quant !== 0) {
                    qObj.wPrice[name] = prices;
                    //qObj.OPTION2Shirt_wPrice[name] = prices;
                }
                else { qObj.wPrice[name] = 0; }
            });
            $(".sizing-chart-kit_OPTION2_Shorts_Men input").each(function () {
                var name = $(this).attr("name");
                var quant = $(this).val() || 0;

                qObj.OPTION2Short_Size[name] = quant;


                var prices = $(".sizing-chart-kit_OPTION2_Shorts_Men span").html();
                if (quant !== 0) {
                    qObj.price[name] = prices;
                }
                else { qObj.price[name] = 0; }
            });

            $(".sizing-chart-kit_OPTION2_Shorts_women input").each(function () {
                var name = $(this).attr("name");
                var quant = $(this).val() || 0;

                qObj.OPTION2Short_wSize[name] = quant;

                var prices = $(".sizing-chart-kit_OPTION2_Shorts_women span").html();
                if (quant !== 0) {
                    qObj.wPrice[name] = prices;
                }
                else { qObj.wPrice[name] = 0; }
            });

            //Kit1_Shirt.sizes = qObj.sizes;
            //Kit1_Shirt.wSizes = qObj.wSizes;
            Kit1_Shirt.sizes = qObj.OPTION2Shirt_Size;
            Kit1_Shirt.wSizes = qObj.OPTION2Shirt_wSize;
            Kit1_Shorts.sizes = qObj.OPTION2Short_Size;
            Kit1_Shorts.wSizes = qObj.OPTION2Short_wSize;

            //Kit1_Shirt.price = qObj.OPTION2Shirt_Price;
            //Kit1_Shirt.wPrice = qObj.OPTION2Shirt_wPrice;
            //Kit1_Shorts.price = qObj.OPTION2Short_Price;
            //Kit1_Shorts.wPrice = qObj.OPTION2Short_wPrice;

        }
        else if (KitNo === 2 || KitNo === 4) {
            qObj = { "sizes": {}, "wSizes": {}, "OPTION3Shirt_Size": {}, "OPTION3Shirt_wSize": {}, "OPTION3Shorts_Size": {}, "OPTION3Shorts_wSize": {}, "price": {}, "wPrice": {}, "OPTION3Shorts_Price": {}, "OPTION3Shorts_wPrice": {} };
            $(".sizing-chart-optionsForkit_2 input").each(function () {
                var name = $(this).attr("name");
                var quant = $(this).val() || 0;

                // qObj.sizes[name] = quant;
                qObj.OPTION3Shirt_Size[name] = quant;

                var prices = $(".sizing-chart-optionsForkit_2 span").html();
                if (quant !== 0) {
                    qObj.price[name] = prices;
                }
                else { qObj.price[name] = 0; }
            });
            $(".sizing-chart-optionsForkit_2-women input").each(function () {
                var name = $(this).attr("name");
                var quant = $(this).val() || 0;

                // qObj.wSizes[name] = quant;
                qObj.OPTION3Shirt_wSize[name] = quant;

                var prices = $(".sizing-chart-optionsForkit_2-women span").html();
                if (quant !== 0) {
                    qObj.wPrice[name] = prices;
                }
                else { qObj.wPrice[name] = 0; }
            });

            $(".sizing-chart-optionsForkit_4 input").each(function () {
                var name = $(this).attr("name");
                var quant = $(this).val() || 0;

                qObj.OPTION3Shorts_Size[name] = quant;

                var prices = $(".sizing-chart-optionsForkit_4 span").html();
                if (quant !== 0) {
                    qObj.OPTION3Shorts_Price[name] = prices;
                }
                else { qObj.OPTION3Shorts_Price[name] = 0; }
            });
            $(".sizing-chart-optionsForkit_4-women input").each(function () {
                var name = $(this).attr("name");
                var quant = $(this).val() || 0;

                qObj.OPTION3Shorts_wSize[name] = quant;

                var prices = $(".sizing-chart-optionsForkit_4-women span").html();
                if (quant !== 0) {
                    qObj.OPTION3Shorts_wPrice[name] = prices;
                }
                else { qObj.OPTION3Shorts_wPrice[name] = 0; }
            });
            //Kit2_Shirt.sizes = qObj.sizes;
            //Kit2_Shirt.wSizes = qObj.wSizes;
            Kit2_Shirt.sizes = qObj.OPTION3Shirt_Size;
            Kit2_Shirt.wSizes = qObj.OPTION3Shirt_wSize;
            Kit2_Shorts.sizes = qObj.OPTION3Shorts_Size;
            Kit2_Shorts.wSizes = qObj.OPTION3Shorts_wSize;

            //Kit2_Shirt.price = qObj.price;
            //Kit2_Shirt.wPrice = qObj.wPrice;
            //Kit2_Shorts.price = qObj.OPTION3Shorts_Price;
            //Kit2_Shorts.wPrice = qObj.OPTION3Shorts_wPrice;

        }
        else if (KitNo === 3) {
            qObj = { "sizes": {}, "wSizes": {}, "OPTION4Shirt_Size": {}, "OPTION4Shirt_wSize": {}, "OPTION4Shorts_Size": {}, "OPTION4Shorts_wSize": {}, "price": {}, "wPrice": {}, "OPTION4Shorts_Price": {}, "OPTION4Shorts_wPrice": {} };

            $(".sizing-chart-optionsForkit_3 input").each(function () {
                var name = $(this).attr("name");
                var quant = $(this).val() || 0;

                //qObj.sizes[name] = quant;
                qObj.OPTION4Shirt_Size[name] = quant;

                var prices = $(".sizing-chart-optionsForkit_3 span").html();
                if (quant !== 0) {
                    qObj.price[name] = prices;
                }
                else { qObj.price[name] = 0; }
            });
            $(".sizing-chart-optionsForkit_3-women input").each(function () {
                var name = $(this).attr("name");
                var quant = $(this).val() || 0;

                //qObj.wSizes[name] = quant;
                qObj.OPTION4Shirt_wSize[name] = quant;

                var prices = $(".sizing-chart-optionsForkit_3-women span").html();
                if (quant !== 0) {
                    qObj.wPrice[name] = prices;
                }
                else { qObj.wPrice[name] = 0; }
            });

            $(".sizing-chart-kit_OPTION4_Shorts_Men input").each(function () {
                var name = $(this).attr("name");
                var quant = $(this).val() || 0;

                qObj.OPTION4Shorts_Size[name] = quant;

                var prices = $(".sizing-chart-kit_OPTION4_Shorts_Men span").html();
                if (quant !== 0) {
                    qObj.price[name] = prices;
                }
                else { qObj.price[name] = 0; }
            });
            $(".sizing-chart-kit_OPTION4_Shorts_women input").each(function () {
                var name = $(this).attr("name");
                var quant = $(this).val() || 0;

                qObj.OPTION4Shorts_wSize[name] = quant;

                var prices = $(".sizing-chart-kit_OPTION4_Shorts_women span").html();
                if (quant !== 0) {
                    qObj.wPrice[name] = prices;
                }
                else { qObj.wPrice[name] = 0; }
            });

            // Kit3_Shirt.sizes = qObj.sizes;
            //Kit3_Shirt.wSizes = qObj.wSizes;
            Kit3_Shirt.sizes = qObj.OPTION4Shirt_Size;
            Kit3_Shirt.wSizes = qObj.OPTION4Shirt_wSize;
            Kit3_Shorts.sizes = qObj.OPTION4Shorts_Size;
            Kit3_Shorts.wSizes = qObj.OPTION4Shorts_wSize;

            //Kit3_Shirt.price = qObj.price;
            //Kit3_Shirt.wPrice = qObj.wPrice;
            //Kit3_Shorts.price = qObj.OPTION4Shorts_Price;
            //Kit3_Shorts.wPrice = qObj.OPTION4Shorts_wPrice;

        }
        var activeKit = $('.kit span.active').attr('data-count');
        //if (activeKit === "0") {
        qObj.sizes = Kit0.sizes;
        qObj.wSizes = Kit0.wSizes;

        //qObj.price = Kit0.price;
        //qObj.wPrice = Kit0.wPrice;
        //qObj.totalPriceExcluding_setupFee = totalPriceExcluding_setupFee;
        //qObj.OPTION_1_ProductName = $('#QuantityAndSizeForOption1 .product-title span').text();
        // }
        // else if (activeKit === "1") {
        //qObj.sizes = Kit1_Shirt.sizes;
        //qObj.wSizes = Kit1_Shirt.wSizes;
        qObj.OPTION2Shirt_Size = Kit1_Shirt.sizes;
        qObj.OPTION2Shirt_wSize = Kit1_Shirt.wSizes;
        qObj.OPTION2Short_Size = Kit1_Shorts.sizes;
        qObj.OPTION2Short_wSize = Kit1_Shorts.wSizes;

        //qObj.price = Kit1_Shirt.price;
        //qObj.wPrice = Kit1_Shirt.wPrice;
        //qObj.OPTION2Short_Price = Kit1_Shorts.price;
        //qObj.OPTION2Short_wPrice = Kit1_Shorts.wPrice;
        //qObj.totalPriceExcluding_setupFee = totalPriceExcluding_setupFee;

        //qObj.OPTION_2_ProductName = $('#QuantityAndSizeForOption2 .product-title span').text();
        // }
        // else if (activeKit === "2" || activeKit === "4") {

        //qObj.sizes = Kit2_Shirt.sizes;
        //qObj.wSizes = Kit2_Shirt.wSizes;
        qObj.OPTION3Shirt_Size = Kit2_Shirt.sizes;
        qObj.OPTION3Shirt_wSize = Kit2_Shirt.wSizes;
        qObj.OPTION3Shorts_Size = Kit2_Shorts.sizes;
        qObj.OPTION3Shorts_wSize = Kit2_Shorts.wSizes;

        //qObj.price = Kit2_Shirt.price;
        //qObj.wPrice = Kit2_Shirt.wPrice;
        //qObj.OPTION3Shorts_Price = Kit2_Shorts.price;
        //qObj.OPTION3Shorts_wPrice = Kit2_Shorts.wPrice;

        //qObj.totalPriceKit2_Excluding_SetuFee = totalPriceKit2;
        //qObj.totalPriceKit4_Excluding_SetuFee = totalPriceKit4;
        //qObj.SetupFee = Kit2_Shorts.Kit4SetUpFee;
        //qObj.OPTION2_ShortsImagePath = Kit2_Shorts.OPTION2_ShortsImagePath;

        //qObj.OPTION_3_ShirtName = $('.kits.kits_option_2 .product-title span').text();
        //qObj.OPTION_3_ShortsName = $('.kits.kit_4.rev .product-title span').text();
        // }
        // else {
        qObj.OPTION4Shirt_Size = Kit3_Shirt.sizes;
        qObj.OPTION4Shirt_wSize = Kit3_Shirt.wSizes;
        qObj.OPTION4Shorts_Size = Kit3_Shorts.sizes;
        qObj.OPTION4Shorts_wSize = Kit3_Shorts.wSizes;

        //qObj.price = Kit3_Shirt.price;
        //qObj.wPrice = Kit3_Shirt.wPrice;
        //qObj.OPTION4Shorts_Price = Kit3_Shorts.price;
        //qObj.OPTION4Shorts_wPrice = Kit3_Shorts.wPrice;
        //qObj.totalPriceExcluding_setupFee = totalPriceExcluding_setupFee;
        //qObj.OPTION_4_ProductName = $('#QuantityAndSizeForOption4 .product-title span').text();
        // }

        //console.log("quantities", qObj);
        CustKit['kit_' + KitNo].notes = $("#notes").val();
        // var activeKit = $('.kit span.active').attr('data-count');
        CustKit['kit_' + KitNo].kitID = activeKit;
        CustKit['kit_' + KitNo].activeKitName = ProductKit['kit_' + activeKit].sku;
        qObj.UserId = Builder.userData.ID;
        qObj.UserFirstName = Builder.userData.FirstName;
        qObj.UserLastName = Builder.userData.LastName;
        qObj.UserEmail = Builder.userData.email;

        var Returnid = 0;
        var ReturnSku = "";

        var searchKitID = "kit_" + KitNo;
        $.each(Builder.KitID, function (index, value) {
            if (value.KitID == searchKitID) {
                Returnid = value.ProductId;
                ReturnSku = value.ProductSku;

            }
        });

        var originalOrderNo = $('#OriginalOrderNo').val();
        if (originalOrderNo == "") {
            originalOrderNo = 0;
        }
        return {
            // id: Builder.id,
            //productId: Product.sku,
            id: Returnid,
            productId: ReturnSku,
            category: Product.category,
            customization: JSON.stringify(CustKit['kit_' + KitNo]),
            quantities: JSON.stringify(qObj),
            Status: status,
            IsAdmin: AdminCheck,
            //Important--Update UserId anfter login store site(set UserId to logged In id)
            UserId: Builder.userData.ID,
            originalOrderNo: originalOrderNo,
            LoginEmail: Builder.userData.email,
            FirstName: Builder.userData.FirstName,
            LastName: Builder.userData.LastName
        };
    }
};
function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}
function totalPrice(kitNo) {

    // Important ---For men
    $(".sizing-chart-optionsForkit_" + kitNo + " input").change(Builder.updateKitPricing(null, null, kitNo));
}
function totalPriceWomen(kitNo) {
    // Important --- For Women
    $(".sizing-chart-optionsForkit_" + kitNo + "-women input").change(Builder.updateKitPricing(null, null, kitNo));
}

function shareOverrideOGMeta(CurrentUrl, overrideTitle, overrideDescription) {
    var OriginalUrl = CurrentUrl.split("&");
    console.log('Original Url=', OriginalUrl)
    OriginalUrl = OriginalUrl[0];
    var CurrentLoggedInUser = sessionStorage.getItem("GetCurrentLoggedInUser");
    overrideDescription = "Created on the CliffKeen Athletic Uniform Builder by \"" + CurrentLoggedInUser + "\"";
    console.log("value=" + sessionStorage.getItem("CurrentPathOfImage"))
    var path = sessionStorage.getItem("CurrentPathOfImage")
    //    FB.ui({
    //        method: 'share_open_graph',
    //        action_type: 'og.likes',
    //        action_properties: JSON.stringify({
    //            object: {
    //                'og:url': OriginalUrl,
    //                'og:title': overrideTitle,
    //                'og:description': overrideDescription,
    //                'og:image': path
    //            }
    //        })
    //    },
    //        function (response) {

    //        });
    FB.ui({
        method: 'share',
        quote: overrideDescription,
        href: path
    }, function (response) { });
}


function TwitterShare1(CurrentUrl) {
    var id = sessionStorage.getItem("CurrentPathOfImage");
    var CurrentLoggedInUser = sessionStorage.getItem("GetCurrentLoggedInUser");
    var url = 'OAuth/index?id=' + id + '&returnUrl=' + CurrentUrl + '&CurrentUser=' + CurrentLoggedInUser;
    window.open(url, '_blank', 'location=yes,height=570,width=820,scrollbars=yes,status=yes');
}

function GmailShare(CurrentUrl) {
    var id = sessionStorage.getItem("CurrentSVGPath_Email");
    var CurrentLoggedInUser = sessionStorage.getItem("GetCurrentLoggedInUser");
    //if (id != null) {
    //    var url = 'Builder/_GmailSendEmail?attachment=' + id + '&returnUrl=' + CurrentUrl;
    //}
    //else {
    //    var url = 'Builder/_GmailSendEmail?&returnUrl=' + CurrentUrl;
    //}
    //window.open(url, '_blank', 'location=yes,height=570,width=820,scrollbars=yes,status=yes');
    if (CurrentLoggedInUser === "null") {
        Api.call(Api.endpoints.getAdmin, JSON.stringify({}), function (Data) {
            if (Data != null) {
                if (Data == "Admin") {
                    CurrentLoggedInUser = Data;
                }
            }
            if (id != null) {
                var url = 'Builder/_GmailSendEmail?attachment=' + id + '&returnUrl=' + CurrentUrl + '&CurrentUser=' + CurrentLoggedInUser;
            }
            else {
                var url = 'Builder/_GmailSendEmail?&returnUrl=' + CurrentUrl + '&CurrentUser=' + CurrentLoggedInUser;
            }
            window.open(url, '_blank', 'location=yes,height=570,width=820,scrollbars=yes,status=yes');
        });
    }
    else {
        if (id != null) {
            var url = 'Builder/_GmailSendEmail?attachment=' + id + '&returnUrl=' + CurrentUrl + '&CurrentUser=' + CurrentLoggedInUser;
        }
        else {
            var url = 'Builder/_GmailSendEmail?&returnUrl=' + CurrentUrl + '&CurrentUser=' + CurrentLoggedInUser;
        }
        window.open(url, '_blank', 'location=yes,height=570,width=820,scrollbars=yes,status=yes');
    }
}
//function GetColorName(hexCode) {
//    var Color = ntc.name(hexCode);
//    var colorName = Color[1];
//    return colorName;
//}

function GetColorName(hexCode) {
    if (hexCode != undefined) {
        var Color = ntc.name(hexCode);
        var colorName = Color[1];
        return colorName;
    }
    else {
        return "N/A";
    }
}

//19/8/2019
function CheckIdleTime() {
    _idleSecondsCounter++;
    if (_idleSecondsCounter == ShowNotifyPopup) {
        //CheckTimeOut.NotifyUser();
        CheckTimeOut.logout();
    }
    //if (_idleSecondsCounter >= IDLE_TIMEOUT)
    //{
    //    CheckTimeOut.logout();
    //    window.clearInterval(myInterval);
    //}
}
var CheckTimeOut =
{
    logout: function () {
        //Remove default chrome browser alert message box i.e Leave site? "Changes you made may not be saved."
        //It remove default Browse PopUp like ,Google chrome ,Mozill firefox etc
        window.onbeforeunload = null;
        $("#frmLogout").submit();
    },
    // To notify user about session ending
    NotifyUser: function () {
        Box = bootbox.confirm({
            message: "Your session has been inactive and will end soon!",
            buttons: {
                confirm:
                {
                    label: 'Keep Active'
                },
                cancel:
                {
                    label: 'Log Off'
                }
            },
            callback: function (result) {
                // result  [ true = Keep Active] [false = Log Off]
                if (result) {
                    _idleSecondsCounter = 0;
                    window.clearInterval(NotifyInterval);
                }
                else {
                    CheckTimeOut.logout();
                    window.clearInterval(myInterval);
                }
            }
        });
        var NotifyInterval = window.setInterval(CheckNotificationTime, 1000);
    }
};
//disable tabbing on quantity and sizes page on every last textbox .....23 aug 2019
function tabevent(event, kitno, e) {
    var keyCode = e.keyCode || e.which;
    switch (kitno) {
        case 0:
            var totallength = $('.sizing-chart-optionsForkit_0 input').length;
            var currentrowindex = $('.sizing-chart-optionsForkit_0 input').index(event);
            if (currentrowindex === totallength - 1) {
                if (keyCode === 9) {
                    $(this).focus();
                    return false;
                }
                else {
                    return true;
                }
            }
            break;
        case 1:
            var totallength1 = $('.sizing-chart-optionsForkit_1 input').length;
            var currentrowindex1 = $('.sizing-chart-optionsForkit_1 input').index(event);
            if (currentrowindex1 === totallength1 - 1) {
                if (keyCode === 9) {
                    $(this).focus();
                    return false;
                }
                else {
                    return true;
                }
            }
            var totallength5 = $('.sizing-chart-kit_OPTION2_Shorts_Men input').length;
            var currentrowindex5 = $('.sizing-chart-kit_OPTION2_Shorts_Men input').index(event);
            if (currentrowindex5 === totallength5 - 1) {
                if (keyCode === 9) {
                    $(this).focus();
                    return false;
                }
                else {
                    return true;
                }
            }
            break;
        case 2:
            var totallength2 = $('.sizing-chart-optionsForkit_2 input').length;
            var currentrowindex2 = $('.sizing-chart-optionsForkit_2 input').index(event);
            if (currentrowindex2 === totallength2 - 1) {
                if (keyCode === 9) {
                    $(this).focus();
                    return false;
                }
                else {
                    return true;
                }
            }
            break;
        case 3:
            var totallength3 = $('.sizing-chart-optionsForkit_3 input').length;
            var currentrowindex3 = $('.sizing-chart-optionsForkit_3 input').index(event);
            if (currentrowindex3 === totallength3 - 1) {
                if (keyCode === 9) {
                    $(this).focus();
                    return false;
                }
                else {
                    return true;
                }
            }
            var totallength8 = $('.sizing-chart-kit_OPTION4_Shorts_Men input').length;
            var currentrowindex8 = $('.sizing-chart-kit_OPTION4_Shorts_Men input').index(event);
            if (currentrowindex8 === totallength8 - 1) {
                if (keyCode === 9) {
                    $(this).focus();
                    return false;
                }
                else {
                    return true;
                }
            }
            break;
        case 4:
            var totallength4 = $('.sizing-chart-optionsForkit_4 input').length;
            var currentrowindex4 = $('.sizing-chart-optionsForkit_4 input').index(event);
            if (currentrowindex4 === totallength4 - 1) {
                if (keyCode === 9) {
                    $(this).focus();
                    return false;
                }
                else {
                    return true;
                }
            }
            var totallength6 = $('.sizing-chart-kit_OPTION4_Shorts_Men input').length;
            var currentrowindex6 = $('.sizing-chart-kit_OPTION4_Shorts_Men input').index(event);
            if (currentrowindex6 === totallength6 - 1) {
                if (keyCode === 9) {
                    $(this).focus();
                    return false;
                }
                else {
                    return true;
                }
            }
            break;
    }
}
function tabeventForSinglet(event, e) {
    var keyCode = e.keyCode || e.which;
    var totallength = $('.sizing-chart-options input').length;
    var currentrowindex = $('.sizing-chart-options input').index(event);
    if (currentrowindex === totallength - 1) {
        if (keyCode === 9) {
            $(this).focus();
            return false;
        }
        else {
            return true;
        }
    }
}


function PrintBasedOnColorFor_MoreProductRadioButton(group, code) {
    var container = $(".option-set.review .design");
    var IsViewOnly = $('body').hasClass('view-only');
    if (IsViewOnly) {
        $('.CustInfoViewOnlySendToDealerLinkBasedOnColor').css("display", "block");
        $('#ForDealerForViewOnly').css("display", "block");
        $('#HidePringTypeOfWithOutColor').css("display", "none");
        $('.option-set').css("display", "block");
    }
    if (group === "BODY")
        if (code === "WH" || code === "GY" || code === "SG") {

            $('#NotificationSection').html('<h4><strong></strong>Select from the following options:</h4>');
            $('#NotificationSection').show();
            //Important-- inpiut type name should be saved in this format for working with array "PrintingTypeValueForColor_0","PrintingTypeValueForColor_1" etc.
            //If Printing Type is save empty array,then first printing type should be checked
            var PrintingType = Cust.PrintingTypeValueBasedOnColorFirst;
            if (PrintingType || PrintingType !== null) {
                if (PrintingType.length === 0) {
                    $('#print_typeBasedOnColor').html('');
                    $('#print_typeBasedOnColor').append("<input type='radio' checked class='chkBasedOnColorFirst' name='PrintingTypeValueForColor' value='Screen Printing' onclick='ChangeTextColor()'><label>Screen Printing</label>");
                    $('#print_typeBasedOnColor').append("<input type='radio' class='chkBasedOnColorFirst' name='PrintingTypeValueForColor' value='Spot Sublimation' onclick='ChangeTextColor()'><label>Spot Sublimation</label>");
                }
                else {
                    //select this radio button which is saved in Db
                    $('#print_typeBasedOnColor').html('');
                    $('#print_typeBasedOnColor').append("<input type='radio' class='chkBasedOnColorFirst' id='FirstPrintId_0' name='PrintingTypeValueForColor' value='Screen Printing' onclick='ChangeTextColor()'><label>Screen Printing</label>");
                    $('#print_typeBasedOnColor').append("<input type='radio' class='chkBasedOnColorFirst' id='FirstPrintId_1' name='PrintingTypeValueForColor' value='Spot Sublimation' onclick='ChangeTextColor()'><label>Spot Sublimation</label>");
                    var PrintTypecheckBoxLngth = $("#print_typeBasedOnColor").find('input:radio').length;
                    for (var t = 0; t < PrintTypecheckBoxLngth; t++) {
                        var printval = $('input[id="FirstPrintId_' + t + '"]').val();
                        if (PrintingType.indexOf(printval) > -1) {
                            $('input[id="FirstPrintId_' + t + '"]').attr("checked", "checked");
                        }
                    }
                    //20-9-2019
                    //Start
                    //Important--Displaying Printing Type in Review Order section or Send to delaer Link also                   
                    if (IsViewOnly) {
                        var StatusFirst = $('#print_typeBasedOnColor input').hasClass('chkBasedOnColorFirst');
                        var StatusSecond = $('#print_typeBasedOnColor input').hasClass('chkBasedOnColorSecond');
                        if (StatusFirst) {
                            var PrintingFirst = Cust.PrintingTypeValueBasedOnColorFirst;
                            if (PrintingFirst) {
                                if (PrintingFirst.length > 1) {
                                    PrintingFirst = PrintingFirst.toString();
                                }
                                $(".print_typeBasedOnColor span", container).text(PrintingFirst);
                                $(".CustInfoViewOnlySendToDealerLinkBasedOnColor span", container).text(PrintingFirst);
                            }
                        }
                        if (StatusSecond) {
                            var PrintingSecond = Cust.PrintingTypeValueBasedOnColorSecond;
                            if (PrintingSecond) {
                                if (PrintingSecond.length > 1) {
                                    PrintingSecond = PrintingSecond.toString();
                                }
                                $(".print_typeBasedOnColor span", container).text(PrintingSecond);
                                $(".CustInfoViewOnlySendToDealerLinkBasedOnColor span", container).text(PrintingSecond);
                            }
                        }
                    }
                    //End


                    if (Cust.fabric < 0) $(".fabric", container).hide();
                    //color
                    $(".single .option-set.review .colors ul").empty();
                    if (Product.hasOwnProperty('skipColor') == true) {

                        var html = "<li><strong>" + 'Color Options' + "</strong>: <span>" + 'N/A' + "</span></li>";
                        $(".single .option-set.review .colors ul").append(html);
                    }
                    else {
                        $(".single .option-set.color .group").each(function () {
                            var zone = $(this).children("strong").text();
                            var color = $("li.active", $(this)).attr("title");

                            var html = "<li><strong>" + zone + "</strong>: <span>" + color + "</span></li>";
                            $(".single .option-set.review .colors ul").append(html);
                        });
                    }
                    //patterns
                    $(".single .option-set.patterns > ul li").each(function () {
                        if ($(this).hasClass("active")) {
                            var pattern = $("div", $(this)).text();
                            var html = "<li><strong>Pattern</strong>: <span>" + pattern + "</span></li>";
                            $(".single .pattern-colors .group").each(function () {
                                var zone = $(this).children("strong").text();
                                var color = $("li.active", $(this)).attr("title");

                                html += "<li><strong>" + zone + "</strong>: <span>" + color + "</span></li>";
                            });
                            $(".single .option-set.review .colors ul").append(html);
                        }
                    });

                    //art        
                    $(".option-set.review .lettering ul").empty();
                    $("#text_palette .palette_view:not(:empty)").each(function () {

                        var html = "";
                        var id = $(this).attr("id");
                        var id_ar = id.split("_");
                        var side = id_ar[id_ar.length - 1];
                        var TextObj = svgText.layerObjects["_" + side]
                        console.log(TextObj)
                        html += "<li><strong>View</strong>: <span>" + side + "</span></li>";
                        var objCount = 0;
                        $(">div", $(this)).each(function () {
                            var type = $(this).children(".text").text();
                            var content = $(this).children(".text").children("strong").text();
                            if (type != undefined) {
                                var Text_Font = "";
                                var Text_Shape = "";
                                switch (TextObj[objCount].fontfamily) {
                                    case "aachen":
                                        Text_Font = "Aachen";
                                        break;
                                    case "americana_bt":
                                        Text_Font = "Americana BT";
                                        break;
                                    case "athletic":
                                        Text_Font = "ATHLETIC";
                                        break;
                                    case "yearbook_cg_solidregular":
                                        Text_Font = "CG Yearbook";
                                        break;
                                    case "copperplate_gothic":
                                        Text_Font = "Copperplate Gothic";
                                        break;
                                    case "eight_track":
                                        Text_Font = "Eight Track";
                                        break;
                                    case "eurostilebold":
                                        Text_Font = "Eurostile";
                                        break;
                                    case "freshmannormal":
                                        Text_Font = "Freshman Normal";
                                        break;
                                    case "geo_slab":
                                        Text_Font = "Geo Slab";
                                        break;
                                    case "impact":
                                        Text_Font = "Impact";
                                        break;
                                    case "hobo_bt":
                                        Text_Font = "Hobo BT";
                                        break;
                                    case "old_english":
                                        Text_Font = "Old English";
                                        break;
                                    case "reservoirgrunge":
                                        Text_Font = "Reservoir Grunge";
                                        break;
                                    case "square_slabserif":
                                        Text_Font = "Square Slabserif";
                                        break;
                                    case "steelwolf":
                                        Text_Font = "Steelwolf";
                                        break;
                                    case "superstar_m54":
                                        Text_Font = "Superstar M54";
                                        break;
                                    case "times_new_roman":
                                        Text_Font = "Times New Roman";
                                }
                                switch (TextObj[objCount].layout) {
                                    case "straight":
                                        Text_Shape = "STRAIGHT";
                                        break;
                                    case "staggered":
                                        Text_Shape = "STAGGERED";
                                        break;
                                    case "bowtie":
                                        Text_Shape = "BOWTIE";
                                        break;
                                    case "pennant":
                                        Text_Shape = "PENNANT";
                                        break;
                                    case "vertical":
                                        Text_Shape = "VERTICAL";
                                        break;
                                    case "bookends":
                                        Text_Shape = "BOOK ENDS";
                                        break;
                                    case "stdarc":
                                        Text_Shape = "STD. ARC";
                                        break;
                                    case "revarc":
                                        Text_Shape = "REV. ARC";
                                        break;
                                    case "verticalarch":
                                        Text_Shape = "VERTICAL ARCH";
                                        break;
                                    case "bridge":
                                        Text_Shape = "BRIDGE";
                                        break;
                                    case "diagonal":
                                        Text_Shape = "DIAGONAL";
                                        break;
                                    case "demotest":
                                        Text_Shape = "CHEVRON";
                                }
                                if (TextObj[objCount].type == "textLayer" || TextObj[objCount].type == "canvaslayer") {
                                    html += "<br/><li>&nbsp;&nbsp;&nbsp;&nbsp;<strong style=width:auto;>Text : </strong>" + TextObj[objCount].text + "</li>";
                                    html += "<li class=reviewColorList>&nbsp;&nbsp;&nbsp;&nbsp;<strong style=width:auto;>Text Color : </strong>" + GetColorName(TextObj[objCount].fillcolor) + "<span class=displayReviewColor style=background-color:" + TextObj[objCount].fillcolor + ";width: 25px;height: 15px;border: 1px solid #ccc;margin: 0 3px 3px 0;></span></li>";
                                    html += "<li class=reviewColorList>&nbsp;&nbsp;&nbsp;&nbsp;<strong style=width:auto;>Outline Color : </strong>" + GetColorName(TextObj[objCount].strokecolor) + "<span class=displayReviewColor style=background-color:" + TextObj[objCount].strokecolor + ";width: 25px;height: 15px;border: 1px solid #ccc;margin: 0 3px 3px 0;></span></li>";
                                    html += "<br/><li>&nbsp;&nbsp;&nbsp;&nbsp;<strong style=width:auto;>Font : </strong>" + Text_Font + "</li>";
                                    html += "<li>&nbsp;&nbsp;&nbsp;&nbsp;<strong style=width:auto;>Shapes : </strong>" + Text_Shape + "</li></br>";
                                }
                                else {
                                    if (TextObj[objCount].type == "logoLayer") {
                                        html += "<br/><li class=reviewColorList>&nbsp;&nbsp;&nbsp;&nbsp;<strong style=width:auto;>Logo : </strong>" + TextObj[objCount].logo_id + "</span></li>";
                                        if (TextObj[objCount].area1code != null && TextObj[objCount].area2code == null) {
                                            html += "<li class=reviewColorList>&nbsp;&nbsp;&nbsp;&nbsp;<strong style=width:auto;>Color Code 1 : </strong>" + GetColorName(TextObj[objCount].area1color) + "<span class=displayReviewColor style=background-color:" + TextObj[objCount].area1color + ";width: 25px;height: 15px;border: 1px solid #ccc;margin: 0 3px 3px 0;></span></li>";
                                        }
                                        if (TextObj[objCount].area2code != null && TextObj[objCount].area3code == null) {
                                            html += "<li class=reviewColorList>&nbsp;&nbsp;&nbsp;&nbsp;<strong style=width:auto;>Color Code 1 : </strong>" + GetColorName(TextObj[objCount].area1color) + "<span class=displayReviewColor style=background-color:" + TextObj[objCount].area1color + ";width: 25px;height: 15px;border: 1px solid #ccc;margin: 0 3px 3px 0;></span></li>";
                                            html += "<li class=reviewColorList>&nbsp;&nbsp;&nbsp;&nbsp;<strong style=width:auto;>Color Code 2 : </strong>" + GetColorName(TextObj[objCount].area2color) + "<span class=displayReviewColor style=background-color:" + TextObj[objCount].area2color + ";width: 25px;height: 15px;border: 1px solid #ccc;margin: 0 3px 3px 0;></span></li>";
                                        }
                                        if (TextObj[objCount].area3code != null) {
                                            html += "<li class=reviewColorList>&nbsp;&nbsp;&nbsp;&nbsp;<strong style=width:auto;>Color Code 1 : </strong>" + GetColorName(TextObj[objCount].area1color) + "<span class=displayReviewColor style=background-color:" + TextObj[objCount].area1color + ";width: 25px;height: 15px;border: 1px solid #ccc;margin: 0 3px 3px 0;></span></li>";
                                            html += "<li class=reviewColorList>&nbsp;&nbsp;&nbsp;&nbsp;<strong style=width:auto;>Color Code 2 : </strong>" + GetColorName(TextObj[objCount].area2color) + "<span class=displayReviewColor style=background-color:" + TextObj[objCount].area2color + ";width: 25px;height: 15px;border: 1px solid #ccc;margin: 0 3px 3px 0;></span></li>";
                                            html += "<li class=reviewColorList>&nbsp;&nbsp;&nbsp;&nbsp;<strong style=width:auto;>Color Code 3 : </strong>" + GetColorName(TextObj[objCount].area3color) + "<span class=displayReviewColor style=background-color:" + TextObj[objCount].area3color + ";width: 25px;height: 15px;border: 1px solid #ccc;margin: 0 3px 3px 0;></span></li>";
                                        }
                                    }
                                }
                            }
                            objCount++;
                        });

                        $(".option-set.review .lettering ul").append(html);
                    });
                    if (Cust.hasOwnProperty('printingOption')) {
                        if (Cust.printingOption != null) {
                            var type = Cust.printingOption;
                            $("li.print_type span").text(type.replace(/_/g, ' ')).parent().show();

                        }
                    }
                    if ($(".option-set.review .lettering ul").children().length < 1) {
                        var html = "";
                        html += "<li><strong>None</strong></li>";
                        $(".option-set.review .lettering ul").append(html);
                    }

                    html = "";
                    //18/4/2019
                    //Start 
                    // Remove Printing fee 
                    //if (Product.printingFee==false )
                    //{
                    //    //Can cont add Print fee It HHML and pass (printingFee=false in Product .Js file)
                    //}
                    //Add printing free
                    //End
                    //else {       
                    html += "<li><strong>Printing Fee</strong>: <span>$" + Builder.priceForArt.toFixed(2).toLocaleString() + "</span></li>";
                    //}
                    $(".option-set.review .lettering ul").append(html);

                    //sizing
                    $(".option-set.review .quantity .table").empty();
                    var total_quant = 0;
                    var total_price = 0;
                    if (Product.wSku != null) {
                        html = '<div class="row">';
                        html += "<h2>Men's Sizing</h2>";
                        html += '</div>';
                        $(".option-set.review .quantity .table").append(html);
                        $(".sizing-chart-options > .row").each(function () {
                            var size = $(this).children('.col').eq(0).children("strong").text();
                            var quant = $('input', $(this)).val();
                            total_quant += Number(quant);
                            if (quant != 0) {
                                var price_per = $('.per-piece', $(this)).children('span').text();
                                var total = $('.piece-total', $(this)).text();
                                var html = '<div class="row">';
                                html += '<span>' + size.toUpperCase() + '</span>';
                                html += '<span>' + quant + '</span>';
                                html += '<span>$' + price_per + '</span>';
                                html += '<span>' + total + '</span>';
                                html += '</div>';
                            }
                            if (total != "" && total != null) {
                                Builder.total_price_new = total.replace("$", '');
                                Builder.totalPriceToShow += Number(Builder.total_price_new);
                            }
                            $(".option-set.review .quantity .table").append(html);
                        });

                        html = '<div class="row">';
                        html += "<h2>Women's Sizing</h2>";
                        html += '</div>';
                        $(".option-set.review .quantity .table").append(html);
                        $(".sizing-chart-options-women > .row").each(function () {
                            var size = $(this).children('.col').eq(0).children("strong").text();
                            var quant = $('input', $(this)).val();
                            total_quant += Number(quant);
                            var price_per = $('.per-piece', $(this)).children('span').text();
                            var total = $('.piece-total', $(this)).text();
                            if (quant != 0) {
                                var price_per = $('.per-piece', $(this)).children('span').text();
                                var total = $('.piece-total', $(this)).text();
                                var html = '<div class="row">';
                                html += '<span>' + size.toUpperCase() + '</span>';
                                html += '<span>' + quant + '</span>';
                                html += '<span>$' + price_per + '</span>';
                                html += '<span>' + total + '</span>';
                                html += '</div>';
                            }
                            if (total != "" && total != null) {
                                Builder.total_price_new = total.replace("$", '');
                                Builder.totalPriceToShow += Number(Builder.total_price_new);
                            }
                            $(".option-set.review .quantity .table").append(html);
                        });
                    }
                    else {
                        $(".sizing-chart-options > .row").each(function () {
                            var size = $(this).children('.col').eq(0).children("strong").text();
                            var quant = $('input', $(this)).val();
                            total_quant += Number(quant);
                            if (quant != 0) {
                                var price_per = $('.per-piece', $(this)).children('span').text();
                                var total = $('.piece-total', $(this)).text();

                                var html = '<div class="row">';
                                html += '<span>' + size.toUpperCase() + '</span>';
                                html += '<span>' + quant + '</span>';
                                html += '<span>$' + price_per + '</span>';
                                html += '<span>' + total + '</span>';
                                html += '</div>';
                            }
                            if (total != "" && total != null) {
                                Builder.total_price_new = total.replace("$", '');
                                Builder.totalPriceToShow += Number(Builder.total_price_new);
                            }
                            $(".option-set.review .quantity .table").append(html);
                        });
                    }
                    $(".option-set.review .total-quantity").children('span').text(total_quant);
                }
            }
            else {
                //These are woring on default page load and by default first printing type will be checked
                $('#print_typeBasedOnColor').html('');
                $('#print_typeBasedOnColor').append("<input type='radio'checked class='chkBasedOnColorFirst' name='PrintingTypeValueForColor' value='Screen Printing' onclick='ChangeTextColor()'><label>Screen Printing</label>");
                $('#print_typeBasedOnColor').append("<input type='radio' class='chkBasedOnColorFirst' name='PrintingTypeValueForColor' value='Spot Sublimation' onclick='ChangeTextColor()'><label>Spot Sublimation</label>");
            }
        }
    if (code === "BK" || code === "NY" || code == "SC") {
        $('#NotificationSection').html('<h4><strong></strong></h4>');
        PrintingType = Cust.PrintingTypeValueBasedOnColorSecond;
        if (PrintingType && PrintingType !== null) {
            //Important-- inpiut type name should be saved in this format for working with array "PrintingTypeValueForColor_0","PrintingTypeValueForColor_1" etc.
            //If Printing Type is save empty array,then first printing type should be checked
            if (PrintingType.length === 0) {
                $('#print_typeBasedOnColor').html('');
                $('#print_typeBasedOnColor').html("<h4>Print Type:</h4>");
                $('#print_typeBasedOnColor').append("<input type='radio' checked class='chkBasedOnColorSecond' name='PrintingTypeValueForColor_0' value='Screen Printing'><label>Screen Printing</label>");
            }
            else {
                //select this radio button which is saved in Db
                $('#print_typeBasedOnColor').html('');
                $('#print_typeBasedOnColor').html("<h4>Print Type:</h4>");
                $('#print_typeBasedOnColor').append("<input type='radio' class='chkBasedOnColorSecond' name='PrintingTypeValueForColor' value='Screen Printing'><label>Screen Printing</label>");
                $('input[name="PrintingTypeValueForColor"]').attr("checked", "checked");
            }
            //20-9-2019
            //Start
            //Important--Displaying Printing Type in Review Order section or Send to delaer Link also

            if (IsViewOnly) {
                StatusFirst = $('#print_typeBasedOnColor input').hasClass('chkBasedOnColorFirst');
                StatusSecond = $('#print_typeBasedOnColor input').hasClass('chkBasedOnColorSecond');
                if (StatusFirst) {
                    PrintingFirst = Cust.PrintingTypeValueBasedOnColorFirst;
                    if (PrintingFirst) {
                        if (PrintingFirst.length > 1) {
                            PrintingFirst = PrintingFirst.toString();
                        }
                        $(".print_typeBasedOnColor span", container).text(PrintingFirst);
                        $(".CustInfoViewOnlySendToDealerLinkBasedOnColor span", container).text(PrintingFirst);
                    }
                }
                if (StatusSecond) {
                    PrintingSecond = Cust.PrintingTypeValueBasedOnColorSecond;
                    if (PrintingSecond) {
                        if (PrintingSecond.length > 1) {
                            PrintingSecond = PrintingSecond.toString();
                        }
                        $(".print_typeBasedOnColor span", container).text(PrintingSecond);
                        $(".CustInfoViewOnlySendToDealerLinkBasedOnColor span", container).text(PrintingSecond);
                    }
                }
            }
            //End
            if (Cust.fabric < 0) $(".fabric", container).hide();
            //color
            $(".single .option-set.review .colors ul").empty();
            if (Product.hasOwnProperty('skipColor') == true) {

                var html = "<li><strong>" + 'Color Options' + "</strong>: <span>" + 'N/A' + "</span></li>";
                $(".single .option-set.review .colors ul").append(html);
            }
            else {
                $(".single .option-set.color .group").each(function () {
                    var zone = $(this).children("strong").text();
                    var color = $("li.active", $(this)).attr("title");

                    var html = "<li><strong>" + zone + "</strong>: <span>" + color + "</span></li>";
                    $(".single .option-set.review .colors ul").append(html);
                })
            }
            //patterns
            $(".single .option-set.patterns > ul li").each(function () {
                if ($(this).hasClass("active")) {
                    var pattern = $("div", $(this)).text();
                    var html = "<li><strong>Pattern</strong>: <span>" + pattern + "</span></li>";
                    $(".single .pattern-colors .group").each(function () {
                        var zone = $(this).children("strong").text();
                        var color = $("li.active", $(this)).attr("title");

                        html += "<li><strong>" + zone + "</strong>: <span>" + color + "</span></li>";
                    });
                    $(".single .option-set.review .colors ul").append(html);
                }
            });

            //art        
            $(".option-set.review .lettering ul").empty();
            $("#text_palette .palette_view:not(:empty)").each(function () {

                var html = "";
                var id = $(this).attr("id");
                var id_ar = id.split("_");
                var side = id_ar[id_ar.length - 1];
                var TextObj = svgText.layerObjects["_" + side]
                console.log(TextObj)
                html += "<li><strong>View</strong>: <span>" + side + "</span></li>";
                var objCount = 0;
                $(">div", $(this)).each(function () {
                    var type = $(this).children(".text").text();
                    var content = $(this).children(".text").children("strong").text();
                    if (type != undefined) {
                        var Text_Font = "";
                        var Text_Shape = "";
                        switch (TextObj[objCount].fontfamily) {
                            case "aachen":
                                Text_Font = "Aachen";
                                break;
                            case "americana_bt":
                                Text_Font = "Americana BT";
                                break;
                            case "athletic":
                                Text_Font = "ATHLETIC";
                                break;
                            case "yearbook_cg_solidregular":
                                Text_Font = "CG Yearbook";
                                break;
                            case "copperplate_gothic":
                                Text_Font = "Copperplate Gothic";
                                break;
                            case "eight_track":
                                Text_Font = "Eight Track";
                                break;
                            case "eurostilebold":
                                Text_Font = "Eurostile";
                                break;
                            case "freshmannormal":
                                Text_Font = "Freshman Normal";
                                break;
                            case "geo_slab":
                                Text_Font = "Geo Slab";
                                break;
                            case "impact":
                                Text_Font = "Impact";
                                break;
                            case "hobo_bt":
                                Text_Font = "Hobo BT";
                                break;
                            case "old_english":
                                Text_Font = "Old English";
                                break;
                            case "reservoirgrunge":
                                Text_Font = "Reservoir Grunge";
                                break;
                            case "square_slabserif":
                                Text_Font = "Square Slabserif";
                                break;
                            case "steelwolf":
                                Text_Font = "Steelwolf";
                                break;
                            case "superstar_m54":
                                Text_Font = "Superstar M54";
                                break;
                            case "times_new_roman":
                                Text_Font = "Times New Roman";
                        }
                        switch (TextObj[objCount].layout) {
                            case "straight":
                                Text_Shape = "STRAIGHT";
                                break;
                            case "staggered":
                                Text_Shape = "STAGGERED";
                                break;
                            case "bowtie":
                                Text_Shape = "BOWTIE";
                                break;
                            case "pennant":
                                Text_Shape = "PENNANT";
                                break;
                            case "vertical":
                                Text_Shape = "VERTICAL";
                                break;
                            case "bookends":
                                Text_Shape = "BOOK ENDS";
                                break;
                            case "stdarc":
                                Text_Shape = "STD. ARC";
                                break;
                            case "revarc":
                                Text_Shape = "REV. ARC";
                                break;
                            case "verticalarch":
                                Text_Shape = "VERTICAL ARCH";
                                break;
                            case "bridge":
                                Text_Shape = "BRIDGE";
                                break;
                            case "diagonal":
                                Text_Shape = "DIAGONAL";
                                break;
                            case "demotest":
                                Text_Shape = "CHEVRON";
                        }
                        if (TextObj[objCount].type == "textLayer" || TextObj[objCount].type == "canvaslayer") {
                            html += "<br/><li>&nbsp;&nbsp;&nbsp;&nbsp;<strong style=width:auto;>Text : </strong>" + TextObj[objCount].text + "</li>";
                            html += "<li class=reviewColorList>&nbsp;&nbsp;&nbsp;&nbsp;<strong style=width:auto;>Text Color : </strong>" + GetColorName(TextObj[objCount].fillcolor) + "<span class=displayReviewColor style=background-color:" + TextObj[objCount].fillcolor + ";width: 25px;height: 15px;border: 1px solid #ccc;margin: 0 3px 3px 0;></span></li>";
                            html += "<li class=reviewColorList>&nbsp;&nbsp;&nbsp;&nbsp;<strong style=width:auto;>Outline Color : </strong>" + GetColorName(TextObj[objCount].strokecolor) + "<span class=displayReviewColor style=background-color:" + TextObj[objCount].strokecolor + ";width: 25px;height: 15px;border: 1px solid #ccc;margin: 0 3px 3px 0;></span></li>";
                            html += "<br/><li>&nbsp;&nbsp;&nbsp;&nbsp;<strong style=width:auto;>Font : </strong>" + Text_Font + "</li>";
                            html += "<li>&nbsp;&nbsp;&nbsp;&nbsp;<strong style=width:auto;>Shapes : </strong>" + Text_Shape + "</li></br>";
                        }
                        else {
                            if (TextObj[objCount].type == "logoLayer") {
                                html += "<br/><li class=reviewColorList>&nbsp;&nbsp;&nbsp;&nbsp;<strong style=width:auto;>Logo : </strong>" + TextObj[objCount].logo_id + "</span></li>";
                                if (TextObj[objCount].area1code != null && TextObj[objCount].area2code == null) {
                                    html += "<li class=reviewColorList>&nbsp;&nbsp;&nbsp;&nbsp;<strong style=width:auto;>Color Code 1 : </strong>" + GetColorName(TextObj[objCount].area1color) + "<span class=displayReviewColor style=background-color:" + TextObj[objCount].area1color + ";width: 25px;height: 15px;border: 1px solid #ccc;margin: 0 3px 3px 0;></span></li>";
                                }
                                if (TextObj[objCount].area2code != null && TextObj[objCount].area3code == null) {
                                    html += "<li class=reviewColorList>&nbsp;&nbsp;&nbsp;&nbsp;<strong style=width:auto;>Color Code 1 : </strong>" + GetColorName(TextObj[objCount].area1color) + "<span class=displayReviewColor style=background-color:" + TextObj[objCount].area1color + ";width: 25px;height: 15px;border: 1px solid #ccc;margin: 0 3px 3px 0;></span></li>";
                                    html += "<li class=reviewColorList>&nbsp;&nbsp;&nbsp;&nbsp;<strong style=width:auto;>Color Code 2 : </strong>" + GetColorName(TextObj[objCount].area2color) + "<span class=displayReviewColor style=background-color:" + TextObj[objCount].area2color + ";width: 25px;height: 15px;border: 1px solid #ccc;margin: 0 3px 3px 0;></span></li>";
                                }
                                if (TextObj[objCount].area3code != null) {
                                    html += "<li class=reviewColorList>&nbsp;&nbsp;&nbsp;&nbsp;<strong style=width:auto;>Color Code 1 : </strong>" + GetColorName(TextObj[objCount].area1color) + "<span class=displayReviewColor style=background-color:" + TextObj[objCount].area1color + ";width: 25px;height: 15px;border: 1px solid #ccc;margin: 0 3px 3px 0;></span></li>";
                                    html += "<li class=reviewColorList>&nbsp;&nbsp;&nbsp;&nbsp;<strong style=width:auto;>Color Code 2 : </strong>" + GetColorName(TextObj[objCount].area2color) + "<span class=displayReviewColor style=background-color:" + TextObj[objCount].area2color + ";width: 25px;height: 15px;border: 1px solid #ccc;margin: 0 3px 3px 0;></span></li>";
                                    html += "<li class=reviewColorList>&nbsp;&nbsp;&nbsp;&nbsp;<strong style=width:auto;>Color Code 3 : </strong>" + GetColorName(TextObj[objCount].area3color) + "<span class=displayReviewColor style=background-color:" + TextObj[objCount].area3color + ";width: 25px;height: 15px;border: 1px solid #ccc;margin: 0 3px 3px 0;></span></li>";
                                }
                            }
                        }
                    }
                    objCount++;
                });

                $(".option-set.review .lettering ul").append(html);
            });
            if (Cust.hasOwnProperty('printingOption')) {
                if (Cust.printingOption != null) {
                    var type = Cust.printingOption;
                    $("li.print_type span").text(type.replace(/_/g, ' ')).parent().show();

                }
            }
            if ($(".option-set.review .lettering ul").children().length < 1) {
                var html = "";
                html += "<li><strong>None</strong></li>";
                $(".option-set.review .lettering ul").append(html);
            }

            var html = "";
            //18/4/2019
            //Start 
            // Remove Printing fee 
            //if (Product.printingFee==false )
            //{
            //    //Can cont add Print fee It HHML and pass (printingFee=false in Product .Js file)
            //}
            //Add printing free
            //End
            //else {       
            html += "<li><strong>Printing Fee</strong>: <span>$" + Builder.priceForArt.toFixed(2).toLocaleString() + "</span></li>";
            //}
            $(".option-set.review .lettering ul").append(html);

            //sizing
            $(".option-set.review .quantity .table").empty();
            var total_quant = 0;
            var total_price = 0;
            if (Product.wSku != null) {
                var html = '<div class="row">';
                html += "<h2>Men's Sizing</h2>";
                html += '</div>';
                $(".option-set.review .quantity .table").append(html);
                $(".sizing-chart-options > .row").each(function () {
                    var size = $(this).children('.col').eq(0).children("strong").text();
                    var quant = $('input', $(this)).val();
                    total_quant += Number(quant);
                    if (quant != 0) {
                        var price_per = $('.per-piece', $(this)).children('span').text();
                        var total = $('.piece-total', $(this)).text();
                        var html = '<div class="row">';
                        html += '<span>' + size.toUpperCase() + '</span>';
                        html += '<span>' + quant + '</span>';
                        html += '<span>$' + price_per + '</span>';
                        html += '<span>' + total + '</span>';
                        html += '</div>';
                    }
                    if (total != "" && total != null) {
                        Builder.total_price_new = total.replace("$", '');
                        Builder.totalPriceToShow += Number(Builder.total_price_new);
                    }
                    $(".option-set.review .quantity .table").append(html);
                });

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
                    if (quant != 0) {
                        var price_per = $('.per-piece', $(this)).children('span').text();
                        var total = $('.piece-total', $(this)).text();
                        var html = '<div class="row">';
                        html += '<span>' + size.toUpperCase() + '</span>';
                        html += '<span>' + quant + '</span>';
                        html += '<span>$' + price_per + '</span>';
                        html += '<span>' + total + '</span>';
                        html += '</div>';
                    }
                    if (total != "" && total != null) {
                        Builder.total_price_new = total.replace("$", '');
                        Builder.totalPriceToShow += Number(Builder.total_price_new);
                    }
                    $(".option-set.review .quantity .table").append(html);
                });
            }
            else {
                $(".sizing-chart-options > .row").each(function () {
                    var size = $(this).children('.col').eq(0).children("strong").text();
                    var quant = $('input', $(this)).val();
                    total_quant += Number(quant);
                    if (quant != 0) {
                        var price_per = $('.per-piece', $(this)).children('span').text();
                        var total = $('.piece-total', $(this)).text();

                        var html = '<div class="row">';
                        html += '<span>' + size.toUpperCase() + '</span>';
                        html += '<span>' + quant + '</span>';
                        html += '<span>$' + price_per + '</span>';
                        html += '<span>' + total + '</span>';
                        html += '</div>';
                    }
                    if (total != "" && total != null) {
                        Builder.total_price_new = total.replace("$", '');
                        Builder.totalPriceToShow += Number(Builder.total_price_new);
                    }
                    $(".option-set.review .quantity .table").append(html);
                });
            }
            $(".option-set.review .total-quantity").children('span').text(total_quant);
        }
        else {
            //These are woring on default page load and by default first printing type will be selected
            $('#print_typeBasedOnColor').html('');
            $('#print_typeBasedOnColor').html("<h4>Print Type:</h4>");
            $('#print_typeBasedOnColor').append("<input type='radio' checked class='chkBasedOnColorSecond' name='PrintingTypeValueForColor_0' value='Screen Printing'><label>Screen Printing</label>");
        }
    }
}
function PrintBasedOnColorFor_MoreProductCheckBox(group, code) {
    var container = $(".option-set.review .design");
    var IsViewOnly = $('body').hasClass('view-only');
    if (IsViewOnly) {
        $('.CustInfoViewOnlySendToDealerLinkBasedOnColor').css("display", "block");
        $('#ForDealerForViewOnly').css("display", "block");
        $('#HidePringTypeOfWithOutColor').css("display", "none");
        $('.option-set').css("display", "block");
    }
    if (group === "BODY")
        if (code === "WH" || code === "GY" || code === "SG") {

            $('#NotificationSection').html('<h4><strong></strong>Select from the following options:</h4>');
            $('#NotificationSection').show();
            //Important-- inpiut type name should be saved in this format for working with array "PrintingTypeValueForColor_0","PrintingTypeValueForColor_1" etc.
            //If Printing Type is save empty array,then first printing type should be checked
            var PrintingType = Cust.PrintingTypeValueBasedOnColorFirst;
            if (PrintingType || PrintingType !== null) {
                if (PrintingType.length === 0) {
                    $('#print_typeBasedOnColor').html('');
                    $('#print_typeBasedOnColor').append("<input type='checkbox' checked class='chkBasedOnColorFirst' name='PrintingTypeValueForColor_0' value='Screen Printing' onclick='ChangeTextColor()'><label>Screen Printing</label>");
                    $('#print_typeBasedOnColor').append("<input type='checkbox' class='chkBasedOnColorFirst' name='PrintingTypeValueForColor_1' value='Spot Sublimation' onclick='ChangeTextColor()'><label>Spot Sublimation</label>");
                }
                else {
                    //checked those checked boxes which are saved in Db
                    $('#print_typeBasedOnColor').html('');
                    $('#print_typeBasedOnColor').append("<input type='checkbox' class='chkBasedOnColorFirst' name='PrintingTypeValueForColor_0' value='Screen Printing' onclick='ChangeTextColor()'><label>Screen Printing</label>");
                    $('#print_typeBasedOnColor').append("<input type='checkbox' class='chkBasedOnColorFirst' name='PrintingTypeValueForColor_1' value='Spot Sublimation' onclick='ChangeTextColor()'><label>Spot Sublimation</label>");
                    var PrintTypecheckBoxLngth = $("#print_typeBasedOnColor").find('input:checkbox').length;
                    for (var t = 0; t < PrintTypecheckBoxLngth; t++) {
                        var printval = $('input[name="PrintingTypeValueForColor_' + t + '"]').val();
                        if (PrintingType.indexOf(printval) > -1) {
                            $('input[name="PrintingTypeValueForColor_' + t + '"]').attr("checked", "checked");
                        }
                    }
                    //20-9-2019
                    //Start
                    //Important--Displaying Printing Type in Review Order section or Send to delaer Link also                  
                    if (IsViewOnly) {
                        var StatusFirst = $('#print_typeBasedOnColor input').hasClass('chkBasedOnColorFirst');
                        var StatusSecond = $('#print_typeBasedOnColor input').hasClass('chkBasedOnColorSecond');
                        if (StatusFirst) {
                            var PrintingFirst = Cust.PrintingTypeValueBasedOnColorFirst;
                            if (PrintingFirst) {
                                if (PrintingFirst.length > 1) {
                                    PrintingFirst = PrintingFirst.toString();
                                }
                                $(".print_typeBasedOnColor span", container).text(PrintingFirst);
                                $(".CustInfoViewOnlySendToDealerLinkBasedOnColor span", container).text(PrintingFirst);
                            }
                        }
                        if (StatusSecond) {
                            var PrintingSecond = Cust.PrintingTypeValueBasedOnColorSecond;
                            if (PrintingSecond) {
                                if (PrintingSecond.length > 1) {
                                    PrintingSecond = PrintingSecond.toString();
                                }
                                $(".print_typeBasedOnColor span", container).text(PrintingSecond);
                                $(".CustInfoViewOnlySendToDealerLinkBasedOnColor span", container).text(PrintingSecond);
                            }
                        }
                    }
                    //End
                }
            }
            else {
                //These are woring on default page load and by default first printing type will be checked
                $('#print_typeBasedOnColor').html('');
                $('#print_typeBasedOnColor').append("<input type='checkbox' checked class='chkBasedOnColorFirst' name='PrintingTypeValueForColor_0' value='Screen Printing' onclick='ChangeTextColor()'><label>Screen Printing</label>");
                $('#print_typeBasedOnColor').append("<input type='checkbox' class='chkBasedOnColorFirst' name='PrintingTypeValueForColor_1' value='Spot Sublimation' onclick='ChangeTextColor()'><label>Spot Sublimation</label>");
            }
        }
    if (code === "BK" || code === "NY" || code == "SC") {
        //$('#NotificationSection').html('<h4><strong></strong>Select from the following option:</h4>');
        $('#NotificationSection').html('<h4><strong></strong></h4>');

        PrintingType = Cust.PrintingTypeValueBasedOnColorSecond;
        if (PrintingType || PrintingType !== null) {
            //Important-- inpiut type name should be saved in this format for working with array "PrintingTypeValueForColor_0","PrintingTypeValueForColor_1" etc.
            //If Printing Type is save empty array,then first printing type should be checked
            if (PrintingType.length === 0) {
                $('#print_typeBasedOnColor').html('');
                $('#print_typeBasedOnColor').html("<h4>Print Type:</h4>");
                $('#print_typeBasedOnColor').append("<input type='checkbox' checked class='chkBasedOnColorSecond' name='PrintingTypeValueForColor_0' value='Screen Printing'><label>Screen Printing</label>");
            }
            else {
                //checked those checked boxes which are saved in Db
                $('#print_typeBasedOnColor').html('');
                $('#print_typeBasedOnColor').html("<h4>Print Type:</h4>");
                $('#print_typeBasedOnColor').append("<input type='checkbox' class='chkBasedOnColorSecond' name='PrintingTypeValueForColor_0' value='Screen Printing'><label>Screen Printing</label>");
                PrintTypecheckBoxLngth = $("#print_typeBasedOnColor").find('input:checkbox').length;
                for (t = 0; t < PrintTypecheckBoxLngth; t++) {
                    printval = $('input[name="PrintingTypeValueForColor_' + t + '"]').val();
                    if (PrintingType.indexOf(printval) > -1) {
                        $('input[name="PrintingTypeValueForColor_' + t + '"]').attr("checked", "checked");
                    }
                }
                //20-9-2019
                //Start
                //Important--Displaying Printing Type in Review Order section or Send to delaer Link also              
                if (IsViewOnly) {
                    StatusFirst = $('#print_typeBasedOnColor input').hasClass('chkBasedOnColorFirst');
                    StatusSecond = $('#print_typeBasedOnColor input').hasClass('chkBasedOnColorSecond');
                    if (StatusFirst) {
                        PrintingFirst = Cust.PrintingTypeValueBasedOnColorFirst;
                        if (PrintingFirst) {
                            if (PrintingFirst.length > 1) {
                                PrintingFirst = PrintingFirst.toString();
                            }
                            $(".print_typeBasedOnColor span", container).text(PrintingFirst);
                            $(".CustInfoViewOnlySendToDealerLinkBasedOnColor span", container).text(PrintingFirst);
                        }
                    }
                    if (StatusSecond) {
                        PrintingSecond = Cust.PrintingTypeValueBasedOnColorSecond;
                        if (PrintingSecond) {
                            if (PrintingSecond.length > 1) {
                                PrintingSecond = PrintingSecond.toString();
                            }
                            $(".print_typeBasedOnColor span", container).text(PrintingSecond);
                            $(".CustInfoViewOnlySendToDealerLinkBasedOnColor span", container).text(PrintingSecond);
                        }
                    }
                }
                //End
            }
        }
        else {
            //These are woring on default page load and by default first printing type will be checked
            $('#print_typeBasedOnColor').html('');
            $('#print_typeBasedOnColor').html("<h4>Print Type:</h4>");
            $('#print_typeBasedOnColor').append("<input type='checkbox' checked class='chkBasedOnColorSecond' name='PrintingTypeValueForColor_0' value='Screen Printing'><label>Screen Printing</label>");
        }
    }
}

function ChangeTextColor() {
    var PrintingType = $("#print_typeBasedOnColor input[value]:checked").val();
    if (Product.sku === "TDRI3" && PrintingType === "Spot Sublimation") {
        var newcolor = "";
        var view = $(".preview-nav.active a.active").attr('data-view');
        var len = $('#text_palette' + view + ' .panel').length;
        var newLayer = $("#paletteLayer" + view + "0");
        //newLayer.find(".text-color").each(function () {
        //    var palette_holder = $(this);
        //    palette_holder.find(".swatch").each(function (index) {
        //        var PrintingType = $("#print_typeBasedOnColor input[value]:checked").val();
        //        if (Product.sku === "TDRI3" && PrintingType === "Spot Sublimation") {
        //            if ($(this).attr('data-code') === "WH") {
        //                $(this).css("display", "none");
        //            }
        //            //else {
        //            //    if ($(this).attr('data-code') === "WH") {
        //            //        $(this).css("display", "block");
        //            //    }
        //            //}
        //        }
        //        if ($(this).attr("data-color") == svgText.layerObjects[svgText.currentView][0].fillcolor)
        //            $(this).addClass("selected");
        //        $(this).click(function (e) {
        //            if (!palette_holder.hasClass("swatches-active")) {
        //                palette_holder.addClass("swatches-active");
        //            }
        //            else {
        //                palette_holder.removeClass("swatches-active");
        //                palette_holder.find(".selected").removeClass("selected");
        //                $(this).addClass("selected");
        //                var thisTextIndex = svgText.currentLayer;
        //                var newcolor = $(this).attr("data-color");
        //                var newcode = $(this).attr("data-code");
        //                svgText.layerObjects[svgText.currentView][thisTextIndex].fillcolor = newcolor;
        //                svgText.layerObjects[svgText.currentView][thisTextIndex].fillcode = newcode;
        //                $("#layer_svg" + svgText.currentView + thisTextIndex).find('*[data-style="filltxt"]')[0].style.fill = newcolor;
        //            }
        //            svgText.pricing.getCustomPanels();
        //            Builder.hasChanged("text color changed");
        //        });
        //    });
        //});
        for (var i = 0; i < len; i++) {
            var www = $('#text_palette_Front .panel .text-color')[i];
            $("span[data-code]", www).each(function (i, j) {
                if (i === 0) {
                    //console.log($(this).css("display", "none"));
                    $(this).css("background", "#000000");
                    $(this).attr("data-code", "BK");
                    $(this).attr("data-color", "#000000");
                }
                if (i === 1) {
                    $(this).css("display", "none")
                }
            })
            newcolor = "#000000";
            $("#layer_svg" + view + "0").find('*[data-style="filltxt"]')[0].style.fill = newcolor;
        }
    }
    else {
        if (Product.sku === "TDRI3") {
            var view = $(".preview-nav.active a.active").attr('data-view');
            var len = $('#text_palette' + view + ' .panel').length
            for (var i = 0; i < len; i++) {
                var www = $('#text_palette_Front .panel .text-color')[i];
                $("span[data-code]", www).each(function (i, j) {
                    if (i === 0) {
                       // console.log($(this).css("display", "block"));
                        $(this).css("background", "#ffffff");
                        $(this).attr("data-code", "WH");
                        $(this).attr("data-color", "#ffffff");
                    }
                    if (i === 1) {
                        $(this).css("display", "block")
                    }
                })
            }
            newcolor = "#ffffff";
            $("#layer_svg" + view + "0").find('*[data-style="filltxt"]')[0].style.fill = newcolor;
        }
        else {
            return true;
        }
    }
}

function ProductSkuChange(event) {
    var JacketType = $(event.currentTarget).attr('value');
    if (JacketType === "Hooded") {
        Product.sku = "WJ200";
        IsPrduct_WJ200S = false;
    }
    if (JacketType === "Standup Collar") {
        Product.sku = "WJ200S";
        IsPrduct_WJ200S = true;
    }
    Builder.getPricingFromAPI();
}







