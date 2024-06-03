using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using UBuilder.Domain.Results;
using UBuilder.Helper;

namespace UBuilder.Controllers
{
    public class AdminLoginController : Controller
    {
        [HttpGet]
        [Route("admin/login")]
        public ActionResult Index()
        {
            TempData["LoginError"] = "";     

            return View("Login");
        }

        [HttpPost]
        [Route("admin/login")]
        public ActionResult Login(string user, string pass, string redirectUrl)
        {
            // This is *the most basic* admin login ever. This is a hardcoded user/pass
            if (user == "admin" && pass == "please4get!")
            {
                Session[Constants.AdminSessionName] = "true";

                if (!string.IsNullOrEmpty(redirectUrl))
                    return Redirect(redirectUrl);

                return RedirectToAction("Index", "DesignViewModels");
            }

            TempData["LoginError"] = "Incorrect Username or Password";

            return View("Login");
        }
        [HttpGet]
        [Route("admin/GetAdmin")]
        public ActionResult GetAdmin()
        {
            var data = Session[Constants.AdminSessionName];
            bool IsAdmin = false;
            string role = "User";
            if (data != null)
            {
                Boolean.TryParse(Convert.ToString(data), out IsAdmin);
                if (IsAdmin == true)
                {
                    role = "Admin";
                }
            }                
          
            return Json(new { Success = true,Data=role, responseText = "Verified" }, JsonRequestBehavior.AllowGet);
        }
        ///Dummy
        public ActionResult Kill()
        {
            Session.Clear();
            Session.Abandon();
            return RedirectToAction("Index");
        }
    }
} 