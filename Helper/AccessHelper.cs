using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net.Http;
using System.Web;
using System.Web.Http.Controllers;
using System.Web.Http.Filters;
using System.Configuration;
using UBuilder.Domain.Results;
using System.Net;
 

namespace UBuilder.AddressAccessFiltering
{
    public class AuthorizeIPAddressAttribute : ActionFilterAttribute
    {
        public override void OnActionExecuting(HttpActionContext context)
        {
            string ipAddress = HttpContext.Current.Request.UserHostAddress;

            if (!IsIpAddressAllowed(ipAddress.Trim()))
            {
               DesignStatusOut result = new DesignStatusOut();
               result.Success = false;
               result.ErrorCode = "403";
               result.ErrorText = "IP address not allowed";
               result.Data = null;

               context.Response = context.Request.CreateErrorResponse(HttpStatusCode.BadRequest, "IP Address " + ipAddress.Trim() + " does not have access.");

            }

            base.OnActionExecuting(context);
        }

        private bool IsIpAddressAllowed(string IpAddress)
        {
            if (!string.IsNullOrWhiteSpace(IpAddress))
            {
                string[] addresses = Convert.ToString(ConfigurationManager.AppSettings["AllowedIPAddresses"]).Split(',');
                return addresses.Where(a => a.Trim().Equals(IpAddress, StringComparison.InvariantCultureIgnoreCase)).Any();
            }
            return false;
        }
    }
}