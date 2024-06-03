using GoogleOAuthDemo;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;

namespace UBuilder
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            ///resolve SSL Security layer exception in twitter
            ///
            if (ServicePointManager.SecurityProtocol.HasFlag(SecurityProtocolType.Tls12) == false)
            {
                ServicePointManager.SecurityProtocol = ServicePointManager.SecurityProtocol | SecurityProtocolType.Tls12;
            }

            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);

            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
            AuthConfig.RegisterAuth();
        }
        protected void Application_BeginRequest()
        {
            Response.Cache.SetCacheability(HttpCacheability.NoCache);
            Response.Cache.SetExpires(DateTime.UtcNow.AddHours(-1));
            Response.Cache.SetNoStore();
            var Weburl = Request.Url.ToString();
            var StagingUrl = "http://ub.ckatesting.com/";
            if (!Weburl.Contains(StagingUrl))
            {
                if (!Weburl.Contains("uniformbuilder"))
                {
                    if (!Request.IsLocal && !Request.IsSecureConnection)
                    {
                        string sUrl = Request.Url.ToString().Replace("http:", "https:");
                        Response.Redirect(sUrl);
                    }

                }
            }
        }
    }
}
