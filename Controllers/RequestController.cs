using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using UBuilder.Domain.EntityRepository;
using UBuilder.Helper;

namespace UBuilder.Controllers
{
    public class RequestController : Controller
    {
        IDesignsRepository _DesignsRepository;

        public RequestController(IDesignsRepository DesignsRepository)
        {
            _DesignsRepository = DesignsRepository;
        }

        // GET: Request
        public ActionResult Index()
        {         
            if (Session[Constants.AdminSessionName] == null || Session[Constants.AdminSessionName].ToString() != "true")
                return RedirectToAction("Index", "AdminLogin", new { redirectUrl = Url.Action("Index", "Request") });

            string SessionValue = Convert.ToString(Session[Constants.AdminSessionName]);
            string key = "sblw-3hn8-sqoy19";
            ViewBag.isAdmin = Encript.Encrypt(SessionValue, key);
            return View();
        }
    }
}