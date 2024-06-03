using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using PagedList;
using UBuilder.Domain.EntityRepository;
using UBuilder.Models;
using System.Configuration;
using System.IO;

namespace UBuilder.Controllers
{
    //[Authorize]
    public class TemplatesController : Controller
    {
        IDesignsRepository _DesignsRepository;

        public TemplatesController(IDesignsRepository DesignsRepository)
        {
            _DesignsRepository = DesignsRepository;
        }

        public ActionResult index()
        {
            var pageUrl = System.Web.HttpContext.Current.Request.Url;
           // WriteLog(pageUrl);
            return View();
        }

        public ActionResult GetAllTemplates(string category, int? page)
        {
            var imageBasePath = ConfigurationManager.AppSettings["IMAGEURL"];
           // WriteErrorLog("category------"+ category);
           // WriteErrorLog("page-------"+page.ToString());
            List<Domain.Designs> result;
            if (string.IsNullOrEmpty(category))
            {               
                result = _DesignsRepository.GetAllTemplates();
            }
            else
            {             
                result = _DesignsRepository.GetTemplatesByCategory(category);
            }

            var returnResult = new List<DesignViewModel>();
            foreach (var item in result)
            {
              
                var thumbnails = !string.IsNullOrEmpty(item.Thumbnails) ?  item.Thumbnails.Split(',').Select(s => imageBasePath + item.ProductId + '/' + s.ToString()).ToList() : null;

                string baseImg = "";
                if (thumbnails.Count > 0)
                {
                   
                    baseImg = thumbnails[0];
                }

                returnResult.Add(new DesignViewModel
                {
                    Category = item.Category,
                    Customization = item.Customization,
                    Description = item.Description,
                    DesignGUID = item.DesignGUID,
                    ID = item.ID,
                    // per andy, 03/04
                    //Image_path = imageBasePath + item.Image_path, 
                    Image_path = baseImg,
                    Notes = item.Notes,
                    ProductId = item.ProductId,
                    Thumbnails = thumbnails,
                    Sort = item.Sort
                });
            }
          
           
          
            return PartialView("_templates", returnResult);
        }

        public void WriteErrorLog(string log)
        {
            // string webPageName = Path.GetFileName(Request.Path);
            string errorLogFilename = "ErrorLog_" + DateTime.Now.ToString("dd-MM-yyyy") + ".txt";
            string path = Server.MapPath("~/Content/MyGoogleStorage/" + errorLogFilename);
            if (System.IO.File.Exists(path))
            {
                using (StreamWriter stwriter = new StreamWriter(path, true))
                {
                    stwriter.WriteLine("-------------------Error Log Start-----------as on " + DateTime.Now.ToString("hh:mm tt"));
                    // stwriter.WriteLine("WebPage Name :" + webPageName);
                    stwriter.WriteLine("Message:" + log);
                    stwriter.WriteLine("-------------------End----------------------------");
                }
            }
            else
            {
                StreamWriter stwriter = System.IO.File.CreateText(path);
                stwriter.WriteLine("-------------------Error Log Start-----------as on " + DateTime.Now.ToString("hh:mm tt"));
                // stwriter.WriteLine("WebPage Name :" + webPageName);
                stwriter.WriteLine("Message: " + log);
                stwriter.WriteLine("-------------------End----------------------------");
                stwriter.Close();
            }
        }

        public ActionResult TemplateCategory()
        {
            return View();
        }

        public ActionResult GetTemplatesByCategory(string category, int? page)
        {
            var imageBasePath = ConfigurationManager.AppSettings["IMAGEURL"];
            var result = _DesignsRepository.GetTemplatesByCategory(category);
            var returnResult = new List<DesignViewModel>();

            foreach (var item in result)
            {
                var thumbnails = !string.IsNullOrEmpty(item.Thumbnails) ? item.Thumbnails.Split(',').Select(s => imageBasePath + s.ToString()).ToList() : null;
                returnResult.Add(new DesignViewModel
                {
                    Category = item.Category,
                    Customization = item.Customization,
                    Description = item.Description,
                    DesignGUID = item.DesignGUID,
                    ID = item.ID,
                    Image_path = imageBasePath + item.Image_path,
                    Notes = item.Notes,
                    ProductId = item.ProductId,
                    Thumbnails = thumbnails,
                    Sort = item.Sort
                });
            }

            return PartialView("_templates", returnResult);
        }

        public ActionResult GetAllKits(string category, int? page)
        {
            var imageBasePath = ConfigurationManager.AppSettings["IMAGEURL"];

            List<Domain.Designs> result;
            if (string.IsNullOrEmpty(category))
            {
                result = _DesignsRepository.GetAllKits();
            }
            else
            {
                result = _DesignsRepository.GetKitsByCategory(category);
            }

            var returnResult = new List<DesignViewModel>();
            foreach (var item in result)
            {
                var thumbnails = !string.IsNullOrEmpty(item.Thumbnails) ? item.Thumbnails.Split(',').Select(s => imageBasePath + item.ProductId + '/' + s.ToString()).ToList() : null;

                string baseImg = "";
                if (thumbnails.Count > 0)
                {
                    baseImg = thumbnails[0];
                }

                returnResult.Add(new DesignViewModel
                {
                    Category = item.Category,
                    Customization = item.Customization,
                    Description = item.Description,
                    DesignGUID = item.DesignGUID,
                    ID = item.ID,
                    // per andy, 03/04
                    //Image_path = imageBasePath + item.Image_path, 
                    Image_path = baseImg,
                    Notes = item.Notes,
                    ProductId = item.ProductId,
                    Thumbnails = thumbnails,
                    Sort = item.Sort
                });
            }

            return PartialView("_templates", returnResult);
        }
        public void WriteLog(dynamic ex)
        {
            // string webPageName = Path.GetFileName(Request.Path);
            string errorLogFilename = "ErrorLog_" + DateTime.Now.ToString("dd-MM-yyyy") + ".txt";
            string path = Server.MapPath("~/Content/MyGoogleStorage/" + errorLogFilename);
            if (System.IO.File.Exists(path))
            {
                using (StreamWriter stwriter = new StreamWriter(path, true))
                {
                    stwriter.WriteLine("-------------------Error Log Start-----------as on " + DateTime.Now.ToString("hh:mm tt"));
                    // stwriter.WriteLine("WebPage Name :" + webPageName);
                    stwriter.WriteLine("Message template Index:" + ex);
                    stwriter.WriteLine("-------------------End----------------------------");
                }
            }
            else
            {
                StreamWriter stwriter = System.IO.File.CreateText(path);
                stwriter.WriteLine("-------------------Error Log Start-----------as on " + DateTime.Now.ToString("hh:mm tt"));
                // stwriter.WriteLine("WebPage Name :" + webPageName);
                stwriter.WriteLine("Message template Index: " + ex.ToString());
                stwriter.WriteLine("-------------------End----------------------------");
                stwriter.Close();
            }
        }

    }
}
