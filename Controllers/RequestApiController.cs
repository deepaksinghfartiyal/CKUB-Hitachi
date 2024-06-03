using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using UBuilder.Domain.EntityRepository;
using UBuilder.Domain.Results;
using UBuilder.Helper;
using UBuilder.Models;

namespace UBuilder.Controllers
{
    [RoutePrefix("api/RequestApi")]
    public class RequestApiController : ApiController
    {
        IDesignsRepository _DesignsRepository;
      

        public RequestApiController(IDesignsRepository DesignsRepository)
        {
            _DesignsRepository = DesignsRepository;
        }


        [Route("GetRequests")]
        [HttpGet]
        public IHttpActionResult GetDesigns(int pageindex,int pagesize)
        {
            GetDesignsOut result = new GetDesignsOut();        
            UserData obj = new UserData();
            try
            {
                result.LockerCount = _DesignsRepository.GetRequestsCount();
                result.Data = _DesignsRepository.GetRequests(pageindex,pagesize);
                result.Data = obj.GetUserDetails(result.Data);
                result.Success = true;
                result.ErrorCode = string.Empty;
                result.ErrorText = string.Empty;


                return Ok(result);
            }
            catch (System.Exception ex)
            {
                result.Success = false;
                result.ErrorCode = "400";
                result.ErrorText = ex.Message;
                result.Data = null;
                return Ok(result);
            }
        }
        [Route("getCategories")]
        [HttpGet]
        public IHttpActionResult getCategories()
        {
            GetDesignCategoriesOut result = new GetDesignCategoriesOut();
            UserData obj = new UserData();
            try
            {
                result.Data = _DesignsRepository.GetCategories();
                result.Success = true;
                result.ErrorCode = string.Empty;
                result.ErrorText = string.Empty;
                return Ok(result);
            }
            catch (System.Exception ex)
            {
                result.Success = false;
                result.ErrorCode = "400";
                result.ErrorText = ex.Message;
                result.Data = null;
                return Ok(result);
                
            }
        }

        [Route("SearchResults")]
        [HttpPost]
        public IHttpActionResult SearchResults(SearchModel data)
        {
            GetDesignsOut result = new GetDesignsOut();
            UserData obj = new UserData();
            try
            {
                result.LockerCount = _DesignsRepository.GetSearchResultCount(data);
                result.Data = _DesignsRepository.GetSearchResult(data);
                result.Data = obj.GetUserDetails(result.Data);
                result.Success = true;
                result.ErrorCode = string.Empty;
                result.ErrorText = string.Empty;


                return Ok(result);
            }
            catch (System.Exception ex)
            {
                result.Success = false;
                result.ErrorCode = "400";
                result.ErrorText = ex.Message;
                result.Data = null;
                return Ok(result);
            }
        }
        

        [Route("getProducts")]
        [HttpGet]
        public IHttpActionResult GProducts(string dataType,string phrase)
        {
            GetProductsOut result = new GetProductsOut();
            try
            {
                result.Data = _DesignsRepository.ProductsOut(phrase);
                result.Success = true;
                result.ErrorCode = string.Empty;
                result.ErrorText = string.Empty;


                return Ok(result.Data);
            }
            catch (System.Exception ex)
            {
                result.Success = false;
                result.ErrorCode = "400";
                result.ErrorText = ex.Message;
                result.Data = null;
                return Ok(result);
            }
        }


    }
}
