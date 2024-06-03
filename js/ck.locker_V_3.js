var Locker = {

    userID: 0,
    init: function () {
        Locker.initUi();
    },

    initUi: function () {
        $('body').on('click', ".customize", function (e) {
            e.preventDefault();
            Api.call(Api.endpoints.duplicateDesign, JSON.stringify({ id: $(this).data('id') }), Locker.openDesign);

        });

        $('body').on('click', '[data-delete]', function (e) {
            e.preventDefault();
            console.log('the id', $(this).parent().data('id'));
            Api.call(Api.endpoints.deleteDesign, JSON.stringify({ id: String($(this).parent().data('id')) }), Locker.removeDesigns);
            $(this).parent().parent().parent().addClass("delete");
        });

        $('body').on('click', '[data-copy]', function (e) {
            e.preventDefault();
            console.log("copy design");
            Api.call(Api.endpoints.duplicateDesign, JSON.stringify({ id: String($(this).parent().data('id')) }), Locker.openDesign);//$(this).parent().data('id')
            $(this).parent().parent().parent().addClass("copy");
        });
        //Important--Close popup 
        $('body').on('click', '.modal .close', function (e) {
            e.preventDefault();
            $(".modal, .modal-bknd").removeClass("active");
        });
        //Important--Zipp browsed images for both singlate and kit
        //Start
        $('body').on('click', '[ZippBrowsed-image]', function (e) {
            $(".lds-wrapper").show();
            e.preventDefault();
            let id = $(this).parent().data('id');
            if (id !== undefined && id !== null) {
                let PrimaryKetOfDesign = id;
                $.post("/Builder/IsFileOrPathExist", { id: PrimaryKetOfDesign }, function (data) {
                    if (data.status) {
                        var url = 'Builder/DownloadZipFile?id=' + PrimaryKetOfDesign;
                        $(".lds-wrapper").hide();
                        window.location = url;
                    }
                    else {
                        $(".lds-wrapper").hide();
                        CK.alert(701);
                    }
                });
            }
        });
        //End

        Api.call(Api.endpoints.getUser, JSON.stringify({}), function (data) {
            //Builder.loadProduct(data);
            console.log("get user", data);

            if (data.ID != '0' && data.ID[0] != '-') {
                // user logged in
                $(".user-info-header > div.name span").text(data.FirstName);
                $(".user-info-header > div").show();
            }
            else {
                Api.call(Api.endpoints.getAdmin, JSON.stringify({}), function (Data) {
                    if (Data != null) {
                        if (Data == "Admin") {
                            // Admin logged in
                            $(".user-info-header > div").show();
                        }
                        else {
                            // user not logged in
                            //$('.main').addClass("loaded").addClass("log-in");
                            $(".user-info-header > a").show();
                        }
                    }
                });
            }

            Locker.userID = data.ID;
            Locker.loadDesigns();
        });
    },
    loadDesigns: function () {
        $('.main').removeClass("loaded");
        // temporary 'userID':23 to filter by user
        var ep = ($.QueryString['dev']) ? Api.endpoints.getDesigns : Api.endpoints.getDesignsByUser;
        var data = { "pageindex": pageIndex, "pagesize": pageSize };
        console.log(data);
        //Important --Logged in user is Admin or user

        Api.call(Api.endpoints.getAdmin, JSON.stringify({}), function (Data) {
            if (Data != null) {
                if (Data == "Admin") {
                    ep = Api.endpoints.getDesignsByAdmin;
                    Api.call(ep, JSON.stringify(data), Locker.displayDesigns);//userID:Locker.userID
                    pageIndex++;
                    // Admin logged in                    
                }
                else {
                    Api.call(ep, JSON.stringify(data), Locker.displayDesigns);//userID:Locker.userID
                    pageIndex++;
                }
            }
        });

    },
    removeDesigns: function () {

        // remove deleted designs
        $(".delete").fadeOut(500, function () {
            $(this).remove();
        });
    },
    openDesign: function (data) {
        console.log("open design", data);
        //Api.call(Api.endpoints.getDesigns, JSON.stringify({}), Locker.displayDesigns);
        location.href = "/builder?design=" + data.guid;
    },
    displayDesigns: function (data, locker_count) {

        if (locker_count > 10) {
            paging = Math.ceil(locker_count / 10);
            $('#pagination-here').bootpag({
                total: paging,
                page: 1,
                maxVisible: 10,
                leaps: true
            });
        }
        $('#pagination-here .bootpag li').removeClass("active");
        if (pagenum == 1) {
            $("#pagination-here .bootpag [data-lp='" + pagenum + "']:last").addClass("active");
        }
        else {
            $("#pagination-here .bootpag [data-lp='" + pagenum + "']:first").addClass("active");
        }
        console.log('display designs', data);

        if (data.length > 0) {
            $('.locker').empty();

            console.log("document height");
            console.log($(document).height());
            console.log("window height");
            console.log($(window).height());

            if ($(document).height() > $(window).height()) {
                $('.loading').show();
            }
            else {
                $('.loading').hide();

            }

            $('.loading').show();

            var max = 2;
            var inc = 0;
            counter++;
            $(data).each(function () {

                //if(inc < max){

                var status = 'open';
                if (this.DealerId) status = 'with-dealer';
                if (this.Status) status = this.Status;

                var date = new Date(this.ModifiedTime);//.replace('T', ' ') + '');
                date.addHours(-5);
                var months = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
                var hours = (date.getHours() <= 12) ? date.getHours() : date.getHours() - 12;
                if (hours == 0) {
                    hours = 12;
                }
                var minutes = (date.getMinutes() >= 10) ? date.getMinutes() : "0" + date.getMinutes();
                var ampm = (date.getHours() < 12) ? "AM" : "PM";
                var dateStr = months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear() + " at " + hours + ":" + minutes + ampm;

                // original order no. section 
                var originalNo = this.OriginalOrderNo;
                var originalNoTxt = "";
                if (originalNo === "null" || originalNo === "0" || originalNo == null) {
                    originalNoTxt = "N/A";
                } else {
                    originalNoTxt = originalNo;
                }
                // ends


                var canEdit = (status == 'open' || status == 'NEW' || this.DealerId == Locker.userID) ? true : false;
                var html = '<div class="item ' + status + '">';
                html += '<iframe scrolling="no" src="/builder?design=' + this.DesignGUID + '&f=1" alt="" />';
                html += '<div class="info">';
                var title = ($.QueryString['dev']) ? this.ProductId + " [" + this.UserId + "]" : this.ProductId;
                if (this.Customization == "") {
                    this.Customization = null;
                }
                var lockerActiveKit = null;
                if (this.Customization === null || this.Customization === '') {
                    lockerActiveKit = null;
                } else {
                    lockerActiveKit = JSON.parse(this.Customization);
                }
                html += '<h2>' + title + ' <img src="/images/ajax-loader-small.gif" /></h2>';
                if (lockerActiveKit) {
                    if (lockerActiveKit["activeKitName"] != null && lockerActiveKit["kitID"] != 0) {
                        var kitName = lockerActiveKit.activeKitName;
                        if (kitName != null && kitName != "") {
                            html += '<h2>' + kitName + ' <img src="/images/ajax-loader-small.gif" /></h2>';
                        }
                    }
                }

                html += '<span class="product">' + this.ProductCategory + '</span>';
                html += '<span>Original Order No:' + originalNoTxt + '</span>';
                html += '<span class="mod">Modified: ' + dateStr + '</span>';
                html += '<span class="links" data-id="' + this.ID + '">';
                html += canEdit ? '<a href="/builder?design=' + this.DesignGUID + '" data-edit>Edit</a> | ' : '<span class="status">' + Content[status] + '</span> | ';
                html += '<a href="#" data-copy>Copy</a> ';
                html += canEdit ? '| <a href="#" data-delete>Delete</a></span>' : '';
                if (status != 'with-dealer') {
                    html += canEdit ? '' : '| <a href="' + ckstoreURL + '/cart/shoppingcart" >View Cart</a> ';
                }

                //Important-Zipped Browsed Image
                //Start
                html += '<br/><br/><span class="Zipp-image"  data-id="' + this.ID + '"> <a href="#" ZippBrowsed-image class="btn btn-primary" style="margin-top:20px;">Download Files</a></span>';
                //End

                html += '</div>';
                html += '</div>;';               
                $('.locker').append($(html));                                  
                inc++;
            });

            // $('.loading').hide();
            //  $('.main').addClass("loaded");

        }
        else {

            if (Locker.userID > 0) {
                if (counter > 0) {
                    $(".no-more").addClass("show");
                }
                else {
                    //logged-in user, has no designs
                    $(".locker-page .no-designs").addClass("show");
                }
            }
            else {
                //user not logged in, has no designs
                if (counter > 0) {

                    $(".no-more").addClass("show");
                }
                else {

                    $(".locker-page .no-designs").addClass("show");
                    $(".locker-page .login").addClass("show");
                }

            }

            $('.loading').hide();
        }
    }

};

Date.prototype.addHours = function (h) {
    this.setTime(this.getTime() + (h * 60 * 60 * 1000));
    return this;
};