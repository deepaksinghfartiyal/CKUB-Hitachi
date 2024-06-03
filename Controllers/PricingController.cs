using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
//using UBuilder.PricingLookup;
using System.Configuration;
using UBuilder.Domain.Results;
using UBuilder.Domain.EntityRepository;
using UBuilder.Helper;
using System.IO;
using Newtonsoft.Json;

namespace UBuilder.Controllers
{
    [RoutePrefix("api/Pricing")]
    public class PricingController : ApiController
    {

        IPricingRepository _PricingRepository;
        IDesignsRepository _DesignsRepository;

       
        public PricingController(IPricingRepository PricingRepository)
        {
            _PricingRepository = PricingRepository;
            
        }

        [Route("PricingLookup")]
        [HttpPost]
        public IHttpActionResult PricingLookup(PriceLookupIn priceObj)
        {
            LoginHelper.CurrentUser cu = new LoginHelper.CurrentUser();
            LoginHelper.CurrentUser priorUser = new LoginHelper.CurrentUser();


            if (LoginHelper.UserStandard(ref cu))
            {
                if (LoginHelper.UserTempExists(ref priorUser))
                {
                    //AssignDesignToUser(priorUser.ID, cu.ID);
                }
            }
            else
            {
                LoginHelper.UserTemp(ref cu);
            }
            GetPricingOut result = new GetPricingOut();
            try
            {
                //Calling Magento Pricing API
                result.Data = _PricingRepository.GetPrice(priceObj.productId, cu.ID);

                //Call Hitachi/ E-commere price
                //result.Data = _PricingRepository.GetPriceForASMX(priceObj.productId, cu.userGUID);

                result.Success = true;
                result.ErrorCode = string.Empty;
                result.ErrorText = string.Empty;
                return Ok(result);
            }
            catch (System.Exception ex)
            {
                result.Data = null;
                result.Success = true;
                result.ErrorCode = "400";
                result.ErrorText = ex.Message;
                return Ok(result);
            }
        }
        public void WriteErrorLog(string ex)
        {
            // string webPageName = Path.GetFileName(Request.Path);
            string errorLogFilename = "ErrorLog_" + DateTime.Now.ToString("dd-MM-yyyy") + ".txt";
            string path = System.Web.HttpContext.Current.Server.MapPath("~/Content/MyGoogleStorage/" + errorLogFilename);
            if (System.IO.File.Exists(path))
            {
                using (StreamWriter stwriter = new StreamWriter(path, true))
                {
                    stwriter.WriteLine("-------------------Error Log Start-----------as on " + DateTime.Now.ToString("hh:mm tt"));
                    // stwriter.WriteLine("WebPage Name :" + webPageName);
                    stwriter.WriteLine("Message:" + ex.ToString());
                    stwriter.WriteLine("-------------------End----------------------------");
                }
            }
            else
            {
                StreamWriter stwriter = System.IO.File.CreateText(path);
                stwriter.WriteLine("-------------------Error Log Start-----------as on " + DateTime.Now.ToString("hh:mm tt"));
                // stwriter.WriteLine("WebPage Name :" + webPageName);
                stwriter.WriteLine("Message: " + ex.ToString());
                stwriter.WriteLine("-------------------End----------------------------");
                stwriter.Close();
            }
        }
    }
}

    