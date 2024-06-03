using System.Web.Http;
using UBuilder.Utility;
using System.Web.Http.ExceptionHandling;
using UBuilder.Helper;
namespace UBuilder
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // **** Authentication
            // Web API configuration and services
            // Configure Web API to use only bearer token authentication.
            //  config.SuppressDefaultHostAuthentication();
            //  config.Filters.Add(new HostAuthenticationFilter(OAuthDefaults.AuthenticationType));
            // ****

            config.Formatters.Remove(config.Formatters.XmlFormatter);
            config.Formatters.Add(new PlainTextFormatter());

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}/{state}",
                defaults: new { id = RouteParameter.Optional, state = RouteParameter.Optional }
            );

            config.Services.Replace(typeof(IExceptionHandler), new UBuilder.Helper.Exception.GlobalExceptionHandler());
            config.MessageHandlers.Add(new MethodNotAllowedDelegatingHandler());

            
            config.EnableCors();
        }

    }
}