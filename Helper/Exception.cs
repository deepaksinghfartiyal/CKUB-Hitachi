using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ServiceModel.Dispatcher;
using System.Web.Http.ExceptionHandling;
using System.Net;
using System.Net.Http;
using System.Threading;
using System.Web.Http;
using System.Threading.Tasks;
using UBuilder.Domain.Results;
using System.Net.Http.Formatting;
using System.Web.Http.Results;
namespace UBuilder.Helper
{
    public class Exception
    {
        public class GlobalExceptionHandler : System.Web.Http.ExceptionHandling.ExceptionHandler
        {
            public override void Handle(ExceptionHandlerContext context)
            {
                if (context.Exception is ArgumentNullException)
                {
                    var result = new HttpResponseMessage(HttpStatusCode.BadRequest)
                    {
                        Content = new StringContent(context.Exception.Message),
                        ReasonPhrase = "ArgumentNullException"
                    };

                    context.Result = new ArgumentNullResult(context.Request, result);
                }
                else
                {
                  
                    DesignStatusOut result = new DesignStatusOut();
                    result.Success = false;
                    result.ErrorCode = context.Exception.Message;
                    result.ErrorText = context.Exception.Message;
                    result.Data = null;

                    var jsonType = GlobalConfiguration.Configuration.Formatters.JsonFormatter;
                    jsonType.SerializerSettings.Formatting = Newtonsoft.Json.Formatting.Indented;

                    var response = context.Request.CreateResponse(HttpStatusCode.InternalServerError, result, jsonType);


                    context.Result = new ResponseMessageResult(response); 

                }
            }

            public class ArgumentNullResult : IHttpActionResult
            {
                private HttpRequestMessage _request;
                private HttpResponseMessage _httpResponseMessage;


                public ArgumentNullResult(HttpRequestMessage request, HttpResponseMessage httpResponseMessage)
                {
                    _request = request;
                    _httpResponseMessage = httpResponseMessage;
                }

                public Task<HttpResponseMessage> ExecuteAsync(CancellationToken cancellationToken)
                {
                    return Task.FromResult(_httpResponseMessage);
                }
            }
        }

    }
    public class MethodNotAllowedDelegatingHandler : DelegatingHandler
    {
        async protected override Task<HttpResponseMessage> SendAsync(
                HttpRequestMessage request, CancellationToken cancellationToken)
        {
            HttpResponseMessage response = await base.SendAsync(request, cancellationToken);
            if (response.StatusCode == HttpStatusCode.MethodNotAllowed)
            {
        
                GenericErrorOut result = new GenericErrorOut();
                result.Success = false;
                result.ErrorCode = "405";
                result.ErrorText = "Method not allowed";
                result.Data = null;
 
                var jsonType = GlobalConfiguration.Configuration.Formatters.JsonFormatter;
                jsonType.SerializerSettings.Formatting = Newtonsoft.Json.Formatting.Indented;

                var r = request.CreateResponse(HttpStatusCode.InternalServerError, result, jsonType);

                response = r;
            }
            return response;
        }
    }
}