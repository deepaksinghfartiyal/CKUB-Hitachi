using System.Web.Mvc;

namespace UBuilder.Controllers
{
    public class ErrorController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Error404()
        {
            return View("Error404");
        }
    }
}