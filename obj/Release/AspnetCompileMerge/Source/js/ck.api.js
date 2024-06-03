var Api = {
	url: '',
	endpoints: {
		getUser: 					{path: '/api/Designs/GetUser', method: 'POST'},
        getDesigns:                 { path: '/api/Designs/GetDesigns', method: 'GET' },
        getDesignsByAdmin:          { path: '/api/Designs/GetAdminDesigns', method: 'POST' },
		getDesignsByUser: 			{path: '/api/Designs/GetDesigns', method: 'POST'},
		getDesignsByDealer: 		{path: '/api/Designs/GetDesignsByDealer', method: 'POST'},
		getDesignsByDealerAndUser: 	{path: '/api/Designs/GetDesignsByDealerAndUser', method: 'POST'},
		getTemplates: 				{path: '../apifake/getTemplates.js', method: 'GET'},
		getDesign: 					{path: '/api/designs/getdesign', method: 'POST'},
		duplicateDesign: 			{path: '/api/Designs/DuplicateDesign', method: 'POST'},
		deleteDesign: 				{path: '/api/Designs/DeleteDesign', method: 'POST'},
		saveDesign: 				{path: '/api/Designs/SaveDesign', method: 'POST'},
		uploadImage: 				{path: '/api/Designs/UploadImage', method: 'POST'},
		uploadZip: 					{path: '/api/Designs/UploadZip', method: 'POST'},
		getPricing: 				{path: '/api/Pricing/PricingLookup', method: 'POST'},
		getDealers: 				{path: '/api/dealers/getdealers', method: 'POST'},
		assignDesignToDealer: { path: '/api/Designs/AssignDesignToDealer', method: 'POST' },
		AssignDesignToDealerSubmit: { path: '/api/Designs/AssignDesignToDealerSubmit', method: 'POST' },
		addDesignToCart:			{path: '../apifake/addDesignToCart.js', method: 'GET'},
		getOrderStatus: 			{path: '/api/Designs/GetOrderStatus', method: 'POST'},
		setOrderStatus: 			{path: '/api/Designs/UpdateDesignStatus', method: 'POST'},
		setOrderStatusBE: 			{path: '/api/Designs/UpdateDesignStatusBackend', method: 'POST'},
		emailDesign: 				{path: '/api/Designs/emailDesign', method: 'POST'},
		getRequests:                {path: '/api/RequestApi/GetRequests', method: 'GET' },
		getAdmin:                   {path: '/admin/GetAdmin',method:'GET' },
		getCategories:              { path: '/api/RequestApi/getCategories', method: 'GET' },
		SearchResults:              { path: '/api/RequestApi/SearchResults', method: 'POST' },
		getProducts: { path: '/api/RequestApi/getProducts', method: 'POST' },
		kitProducts: { path: '/api/Designs/KitProducts', method: 'POST' },
	},
	calls: [],
	call: function (endpoint, data, onComplete) {	    
	    if (endpoint.path == "/api/Designs/GetUser" && data == "chkUserLogin")
	    {
	        Api.calls.push(
                       $.ajax({
                           url: Api.url + endpoint.path,
                           type: endpoint.method,
                           contentType: 'application/json; charset=utf-8',
                           dataType: 'json',
                           async: false,
                           data: data,
                           success: function (response) {
                               if (response.Success) {
                                   //console.log("success", response);
                                   if (response.LockerCount > 0) {
                                       onComplete(response.Data, response.LockerCount)
                                   }
                                   else {
                                       onComplete(response.Data)
                                   }

                               } else {
                                   //console.log("error", response);
                                   Api.error(response.ErrorCode, response.ErrorText);
                               }
                           },
                           error: function (data, status, e) {
                               //console.log("error data", data);
                               if (data.status == 200) {
                                   alert();
                                   onComplete();
                               } else {

                                   CK.log(data, status, e);
                                   Api.error(9);
                               }

                           }
                       })
                   );
	    }
	    else {
	        Api.calls.push(
          $.ajax({
              url: Api.url + endpoint.path,
              type: endpoint.method,
              contentType: 'application/json; charset=utf-8',
              dataType: 'json',
              data: data,
              success: function (response) {
                  if (response.Success) {
                      //console.log("success", response);
                      if (response.LockerCount > 0) {
                          onComplete(response.Data, response.LockerCount)
                      }
                      else {
                          onComplete(response.Data)
                      }

                  } else {
                      //console.log("error", response);
                      Api.error(response.ErrorCode, response.ErrorText);
                  }
              },
              error: function (data, status, e) {
                  //console.log("error data", data);
                  if (data.status == 200) {
                      alert();
                      onComplete();
                  } else {

                      CK.log(data, status, e);
                      Api.error(9);
                  }

              }
          })
      );
	    }
	  
	},
	error: function(code, text) {
		CK.log('error', code, text);
	}
}