
var Request = {
    userID: 0,
    init: function () {
        Request.initUi();
    },
    LoadProductAdd_Cart_Dealer: function () {
        $("#CategorySearch").trigger("click");
    },
    initUi: function () {
        $("#ProductID").val("");
        $("#startDate").val("");
        $("#endDate").val("");
        $('body').on('click', ".customize", function (e) {
            e.preventDefault();
            Api.call(Api.endpoints.duplicateDesign, JSON.stringify({ id: $(this).data('id') }), Request.openDesign);

        });

        $('body').on('click', '[data-delete]', function (e) {

            e.preventDefault();
            console.log('the id', $(this).parent().data('id'));
            var deleteObj = { "id": String($(this).parent().data('id')), "IsAdmin": EncValue }
            //Api.call(Api.endpoints.deleteDesign, JSON.stringify({ id: String($(this).parent().data('id')) }), Request.removeDesigns);
            Api.call(Api.endpoints.deleteDesign, JSON.stringify(deleteObj), Request.removeDesigns);
            $(this).parent().parent().parent().addClass("delete");
        });



        $('body').on('click', '[data-copy]', function (e) {
            e.preventDefault();
            console.log("copy design");
            Api.call(Api.endpoints.duplicateDesign, JSON.stringify({ id: String($(this).parent().data('id')) }), Request.openDesign);//$(this).parent().data('id')
            $(this).parent().parent().parent().addClass("copy");
        });
        $("#CategorySearch").click(function () {
            $('.locker').empty();
            $('.loading').show();
            Search = 0;
            pageIndex = 0;
            counter = 0;
            Request.loadSearchResult();
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
                         window.open(url, '_blank');
                    }
                    else {
                        $(".lds-wrapper").hide();
                        CK.alert(701);
                    }
                });
            }
        });
        //End


        var options = {

            url: function (phrase) {
                return "api/RequestApi/getProducts";
            },

            getValue: function (element) {
                return element._products;
            },

            ajaxSettings: {
                dataType: "json",
                method: "GET",
                data: {
                    dataType: "json"
                }
            },

            preparePostData: function (data) {
                data.phrase = $("#ProductID").val();
                return data;
            },

            requestDelay: 400
        };

        $("#ProductID").easyAutocomplete(options);

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
                            $(".user-info-header > div").show()
                        }
                        else {
                            // user not logged in
                            //$('.main').addClass("loaded").addClass("log-in");
                            $(".user-info-header > a").show();
                        }
                    }
                });

            }

            Request.userID = data.ID;
            Request.loadDesigns();
        });
        Request.loadSearchCategories();
        //  Request.loadDesigns();
    },
    loadSearchCategories: function () {
        Api.call(Api.endpoints.getCategories, JSON.stringify({}), function (Data) {
            if (Data != null) {
                $("#DesignCategory").empty();
                $("#DesignCategory").append("<option value=''>Select Category</option>");
                $.each(Data, function (index, optiondata) {
                    $("#DesignCategory").append("<option value='" + optiondata._category + "'>" + optiondata._category + "</option>");
                });
            }
        });
    },
    loadSearchResult: function () {
        $('#pagination-here').empty();
        var ProductID = $("#ProductID").val();
        var Category = $("#DesignCategory").val();
        var start = $("#startDate").val();
        var f = $.datepicker.parseDate("dd-mm-yy", start);
        var startDate = $.datepicker.formatDate('yy-mm-dd', f);
        var end = $("#endDate").val();
        var endDate = $.datepicker.formatDate('yy-mm-dd', $.datepicker.parseDate("dd-mm-yy", end));
        var Cartstatus = $("#Cartstatus").val();
        var designID = $("#designID").val();
         var LoginEmail = $("#EmailAddress").val();
        var data = { "ProductID": ProductID, "Category": Category, "startDate": startDate, "endDate": endDate, "Cartstatus": Cartstatus, "designID": designID, "pageindex": pageIndex, "pagesize": pageSize, "LoginEmail": LoginEmail};
        Search++;
        Api.call(Api.endpoints.getAdmin, JSON.stringify({}), function (Data) {
            if (Data != null) {
                if (Data == "Admin") {
                    var ep = Api.endpoints.SearchResults;
                    $(".locker-page .no-designs").removeClass("show");
                    Api.call(ep, JSON.stringify(data), Request.displayDesigns);
                    pageIndex++;
                }
                else {
                    window.location.href = '/admin/login/?redirectUrl=/Request/Index';
                }
            }
        });
    },
    loadDesigns: function () {

        $('.main').removeClass("loaded");
        Search = 0;

        Api.call(Api.endpoints.getAdmin, JSON.stringify({}), function (Data) {
            if (Data != null) {

                if (Data == "Admin") {
                    var ep = Api.endpoints.getRequests;
                    var data = { "pageindex": pageIndex, "pagesize": pageSize };
                    $(".locker-page .no-designs").removeClass("show");
                    Api.call(ep, data, Request.displayDesigns);
                    pageIndex++;
                }
                else {
                    window.location.href = '/admin/login/?redirectUrl=/Request/Index';
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
        //Api.call(Api.endpoints.getDesigns, JSON.stringify({}), Request.displayDesigns);
        location.href = "/builder?design=" + data.guid;
    },
    displayDesigns: function (data, locker_count) {

        console.log('display designs', data);
        $('#pagination-here').empty();
        if (data.length > 0) {
            if (Search == 1) {
                $('.locker').empty();
            }
            $('.locker').empty();



            $('.loading').show();
            $(".locker-page .no-designs").removeClass("show");
            $('.main').addClass("loaded");
            localStorage.clear();
            localStorage.setItem("admin", "true");
            var max = 10;
            var inc = 0;
            $(data).each(function () {
                var userdetail = JSON.parse(this.Quantities);
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
                var canedit = (status == 'open' || status == 'NEW' || this.DealerId == Request.userID) ? true : false;
                var html = '<div class="item ' + status + '">';
                html += '<iframe scrolling="no" src="/builder/?design=' + this.DesignGUID + '&f=1" alt="" />';
                html += '<div class="info">';
                var title = ($.QueryString['dev']) ? this.ProductId + " [" + this.UserId + "]" : this.ProductId;
                html += '<h2>' + title + ' <img src="/images/ajax-loader-small.gif" /></h2>';
                html += '<span class="product">' + this.ProductCategory + '</span>';
                html += '<span class="mod">Modified: ' + dateStr + '</span>';
                html += '<span class="mod">Status: ' + this.Status + '</span>';
                if (this.Quantities.indexOf("UserFirstName") > -1 == false) {
                    html += '<span class="mod">Requested By: N/A</span>';
                }
                else {
                    //if (userdetail.UserFirstName != "" && userdetail.UserLastName != "") {
                    //    html += '<span class="mod">Requested By: ' + userdetail.UserFirstName + ' ' + userdetail.UserLastName + ' </span>';
                    //}
                    //else {
                    //    html += '<span class="mod">Requested By: N/A</span>';
                    //}
                    if (this.FirstName !== null && this.FirstName !== '') {
                        html += '<span class="mod">Requested By : ' + this.FirstName + '</span>';
                    }
                    else {
                        html += '<span class="mod">Requested By : N/A </span>';
                    }
                }
                  if (this.LoginEmail !== null) {
                    html += '<span>Email Address: ' + this.LoginEmail + '</span>';
                }
                else {
                    html += '<span>Email Address: N/A</span>';
                }
                html += '<span class="links" data-id="' + this.ID + '">';
                var Url = "/builder/?design=' + this.DesignGUID + '";
                html += '<a href="/builder/?design=' + this.DesignGUID + '" data-edit class="logout" onclick="IsManagerRequestedDesign(event)">Edit</a> | ';
                //html += '<a href="#" data-copy>Copy</a> | ';
                html += '<a href="#" data-delete class="logout">Delete</a></span> ';

                //Important-Zipped Browsed Image
                //Start
                html += '<br/><br/><span class="Zipp-image"  data-id="' + this.ID + '"> <a href="#" ZippBrowsed-image style="color:#e6a413;margin-top:20px;">Download File</a></span>';
                //End
                html += '</div>';
                html += '</div>;';

                $('.locker').append($(html));
                //}
                inc++;

            });
            //if (locker_count > 10) {
            //    locker_count = Math.ceil(locker_count / 10);
            //    $('#pagination-here').bootpag({
            //        total: locker_count,
            //        page: 1,
            //        maxVisible: 10,
            //        leaps: true
            //    });
            //}
            if (locker_count > 10) {
                paging = Math.ceil(locker_count / 10);
                if (pageIndex <= paging) {
                    $('#pagination-here').bootpag({
                        total: paging,
                        page: pageIndex,
                        maxVisible: 10,
                        leaps: true
                    });
                }

            }
            $('#pagination-here .bootpag li').removeClass("active");
            if (pagenum == 1) {
                $("#pagination-here .bootpag [data-lp='" + pagenum + "']:last").addClass("active");
            }
            else {
                $("#pagination-here .bootpag [data-lp='" + pagenum + "']:first").addClass("active");
            }
        }
        else {
            if (Request.userID > 0) {
                //logged-in user, has no designs
                $(".locker-page .no-designs").addClass("show");
            }
            else {
                //user not logged in, has no designs loading
                counter++;
                $(".locker-page .no-designs").addClass("show");
            }

            $('.loading').hide();
        }
    }
};

Date.prototype.addHours = function (h) {
    this.setTime(this.getTime() + (h * 60 * 60 * 1000));
    return this;
};

function IsManagerRequestedDesign(e) {   
    var Url = $(e.path[0]).attr('href');   
    sessionStorage.setItem("IsManagerRequestedDesign", "Yes");
    window.location.href = Url;
}