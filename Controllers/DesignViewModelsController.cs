using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using UBuilder.Domain.EntityRepository;
using UBuilder.Models;
using PagedList;
using UBuilder.Domain;
using UBuilder.Helper;
using System.IO;
using System.Drawing;
using System.Drawing.Imaging;
using System.Configuration;
using System.Text;
using Svg;
using System.Threading;
using ImageMagick;

namespace UBuilder.Controllers
{
    public class DesignViewModelsController : Controller
    {
        IDesignsRepository _DesignsRepository;

        public DesignViewModelsController(IDesignsRepository DesignsRepository)
        {
            _DesignsRepository = DesignsRepository;
        }

        // GET: DesignViewModels
        [Route("admin/designs")]
        public ActionResult Index()
        {
            if (Session[Constants.AdminSessionName] == null || Session[Constants.AdminSessionName].ToString() != "true")
                return RedirectToAction("Index", "AdminLogin", new { redirectUrl = Url.Action("Index", "DesignViewModels") });

            return View();
        }

        public ActionResult GetAllDesigns(int? page)
        {
            //var pageNumber = (page ?? 1);

            var result = _DesignsRepository.GetAllTemplates();
            var returnResult = new List<DesignViewModel>();

            foreach (var item in result)
            {

                returnResult.Add(new DesignViewModel
                {
                    ID = item.ID,
                    DesignGUID = item.DesignGUID,
                    ProductId = item.ProductId,
                    Customization = item.Customization,
                    Category = item.Category,
                    Zip_path = item.Zip_path,
                    Image_path = item.Image_path,
                    Notes = item.Notes,
                    Description = item.Description,
                    Sort = item.Sort
                });
            }

            return PartialView("_designs", returnResult);
        }

        [HttpGet]  
        [Route("admin/designs/{id:int}/edit")]
        public ActionResult EditDesign(int id,string ProductId)
        {     
            if (Session[Constants.AdminSessionName] == null || Session[Constants.AdminSessionName].ToString() != "true")
                return RedirectToAction("Index", "AdminLogin", new { redirectUrl = Url.Action("EditDesign", "DesignViewModels", new { id = id }) });
            var design = _DesignsRepository.GetById(id);          
            if (Session["Svaerequest"]!=null)
            {
                var data = Session["Svaerequest"].ToString();
                ViewBag.JavaScriptFunction = string.Format("displayalertmessage('{0}');", data);
                Session.Remove("Svaerequest");
             }                  
            return View("Edit", design);
        }

        [HttpPost]
        [Route("admin/designs/{id:int}/edit")]
        [ValidateAntiForgeryToken]
        public ActionResult EditDesignPost(Designs design)
        {
          
            if (Session[Constants.AdminSessionName] == null || Session[Constants.AdminSessionName].ToString() != "true")
                return RedirectToAction("Index", "AdminLogin", new { redirectUrl = Url.Action("EditDesign", "DesignViewModels", new { id = design.ID }) });

            if (ModelState.IsValid)
            {
                design.LastUpdated = DateTime.UtcNow;
                _DesignsRepository.SaveOrUpdate(design);              
                Session["Svaerequest"] = "Data has been saved successfully";                
                return RedirectToAction("EditDesign", new { id = design.ID});
            }          
            return View("Edit", design);
        }

        [HttpPost]
        public JsonResult SaveCartImages(string SvgStr, string guid)
        {
            String path = System.Web.HttpContext.Current.Server.MapPath("~/Content/CartImages"); //Path

            // Check if directory exist
            if (!System.IO.Directory.Exists(path))
            {
                System.IO.Directory.CreateDirectory(path); //Create directory if it doesn't exist
            }
            string imageName = guid + ".png";
            //set the image path
            string imgPath = Path.Combine(path, imageName);
            byte[] imageBytes = Convert.FromBase64String(SvgStr);
            System.IO.File.WriteAllBytes(imgPath, imageBytes);
            return Json(imageName, JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public JsonResult SaveSharingImage(string SvgStr, string guid, string View)
        {
            try
            {
                String path = System.Web.HttpContext.Current.Server.MapPath("~/Content/CartImages"); //Path

                // Check if directory exist
                if (!System.IO.Directory.Exists(path))
                {
                    System.IO.Directory.CreateDirectory(path); //Create directory if it doesn't exist
                }
                Random r = new Random();
                int randomNo = r.Next();
                string dateTime = DateTime.Now.ToString("yyyy-dd-M--HH-mm-ss"); ;
                string imageName = guid + View + dateTime + ".png";
                //set the image path
                string imgPath = Path.Combine(path, imageName);
                byte[] imageBytes = Convert.FromBase64String(SvgStr);
                System.IO.File.WriteAllBytes(imgPath, imageBytes);
                return Json(imageName, JsonRequestBehavior.AllowGet);
            }
            catch (System.Exception ex)
            {
                var Ex = ex.Message;
                return Json("There is some Problem while getting Image Path", JsonRequestBehavior.AllowGet);
            }
        }
        public JsonResult SaveSharingImageWithMail(string SvgStr, string guid, string View)
        {
            try
            {
                String path = System.Web.HttpContext.Current.Server.MapPath("~/Content/CartImages"); //Path
                // Check if directory exist
                if (!System.IO.Directory.Exists(path))
                {
                    System.IO.Directory.CreateDirectory(path); //Create directory if it doesn't exist
                }
                Random r = new Random();
                int randomNo = r.Next();
                string dateTime = DateTime.Now.ToString("yyyy-dd-M--HH-mm-ss"); ;
                string imageName = guid + View + dateTime + ".png";
                //set the image path
                string imgPath = Path.Combine(path, imageName);
                var PhysicalPath = path + "\\" + imageName;
                byte[] imageBytes = Convert.FromBase64String(SvgStr);
                System.IO.File.WriteAllBytes(imgPath, imageBytes);
                return Json(PhysicalPath, JsonRequestBehavior.AllowGet);
            }
            catch (System.Exception ex)
            {
                var Ex = ex.Message;
                return Json("There is some Problem while getting Image Path", JsonRequestBehavior.AllowGet);
            }
        }

        //[HttpPost]
        //[ValidateInput(false)]
        //public JsonResult ConverSvgToPng12(string SvgStr, string guid, string View)
        //{
        //    try
        //    {
        //        // Save Svg into Folder//
        //        string ImageGUID = Guid.NewGuid().ToString();
        //        string imageData = HttpUtility.UrlDecode(SvgStr);
        //        string Filename = ImageGUID + "sample.svg";
        //        var completePath = System.Web.HttpContext.Current.Server.MapPath("~/ShareSVGImagePath/" + Filename);
        //        System.IO.File.WriteAllText(completePath, imageData);
        //        // END//

        //        // Create PNG Image from SVG-File
        //        var PickFilefromfolder = System.Web.HttpContext.Current.Server.MapPath("~/ShareSVGImagePath/" + Filename);
        //        var svgDocument = Svg.SvgDocument.Open(PickFilefromfolder);
        //        svgDocument.ShapeRendering = SvgShapeRendering.Auto;
        //        Bitmap bmp = svgDocument.Draw(150, 300);
        //        String FinalImagePath = System.Web.HttpContext.Current.Server.MapPath("~/Content/CartImages/");
        //        //Thread.Sleep(1000);

        //        string fileName = Filename;
        //        int fileExtPos = fileName.LastIndexOf(".");
        //        if (fileExtPos >= 0)
        //            fileName = fileName.Substring(0, fileExtPos);


        //        bmp.Save(FinalImagePath + fileName + ".png" + "", ImageFormat.Png);
        //        // bmp.Save(Server.MapPath("~") + @"\profimgs\" + imagename);
        //        // bmp.Save(FinalImagePath, ImageFormat.Png);
        //        bmp.Dispose();
        //        bmp = null;
        //        // Deleet Svg files from Folder//
        //        string Deletefiles = System.Web.HttpContext.Current.Server.MapPath("~/ShareSVGImagePath/");
        //        RemoveFileFromServer(Deletefiles);

        //        // END//
        //        string FinalImagewithExtension = "";
        //        FinalImagewithExtension = fileName + ".png";
        //        return Json(FinalImagewithExtension, JsonRequestBehavior.AllowGet);
        //    }
        //    catch (System.Exception ex)
        //    {
        //        var Ex = ex.Message;
        //        return Json("There is some Problem while getting Image Path", JsonRequestBehavior.AllowGet);
        //    }
        //}

        [HttpPost]
        [ValidateInput(false)]
        public JsonResult ConverSvgToPng(string SvgStr, string guid, string View)
        {
            try
            {
                // Save Svg into Folder//
                string ImageGUID = Guid.NewGuid().ToString();
                //string imageData = HttpUtility.UrlDecode(SvgStr);
                string imageData = SvgStr;
                string Filename = ImageGUID + View + ".svg";
                var completePath = System.Web.HttpContext.Current.Server.MapPath("~/Content/customizedSvg/" + Filename);
                System.IO.File.WriteAllText(completePath, imageData);
                //string FilePath = System.Web.HttpContext.Current.Server.MapPath("~/Content/customizedSvg/" + Filename);
                var UniquePngImg = Filename;
                //Delete Created Current SvG ,after converting svg to png
                //if ((System.IO.File.Exists(completePath)))
                //{
                //    System.IO.File.Delete(completePath);
                //}
                return Json(UniquePngImg, JsonRequestBehavior.AllowGet);
            }
            catch (System.Exception ex)
            {
                var Ex = ex.Message;
                return Json("There is some Problem while getting Image Path", JsonRequestBehavior.AllowGet);
            }
        }
        [HttpPost]
        [ValidateInput(false)]
        public JsonResult ConverSvgToPngSaveandSharebutton(string SvgStr, string guid, string View)
        {
            try
            {
                //Create SVG
                //Start
                string ImageGUID = Guid.NewGuid().ToString();
                string imageDataSVG = SvgStr;
                string Filename = ImageGUID + View + ".svg";
                var completeSVGPath = System.Web.HttpContext.Current.Server.MapPath("~/Content/customizedSvgPath/" + Filename);
                System.IO.File.WriteAllText(completeSVGPath, imageDataSVG);
                var UniquePngImgGmailSVG = Filename;
                //End
                // Save Svg into Folder//
                string imageData = HttpUtility.UrlDecode(SvgStr);
                var completePath = System.Web.HttpContext.Current.Server.MapPath("~/Content/customizedSvg/" + Filename);
                String FinalImagePath = System.Web.HttpContext.Current.Server.MapPath("~/Content/customizedPngImg/");
                System.IO.File.WriteAllText(completePath, imageData);
                string FilePath = System.Web.HttpContext.Current.Server.MapPath("~/Content/customizedSvg/" + Filename);
                var GetDirectory = Path.GetDirectoryName(FilePath) + "\\";
                // var GetDirectory = System.Web.HttpContext.Current.Server.MapPath("~/Content/CartImages/");
                string SvgFileName = FilePath.Substring(FilePath.LastIndexOf("\\") + 1);
                string SvgFileWithoutExtension = SvgFileName.Remove(SvgFileName.LastIndexOf("."));
                string[] dirs = Directory.GetFiles(GetDirectory, SvgFileName);
                var UniquePngImg = "";
                foreach (string EpsFilePath in dirs)
                {
                    // using (MagickImage image = new MagickImage(EpsFilePath, readSettings))
                    using (MagickImage image = new MagickImage(EpsFilePath))
                    {
                        //  make PNG image with white background transparent(Remove Back - Ground From Image)
                        //image.TransparentChroma(Color.Black, Color.Blue);
                        //image.BackgroundColor = new ColorMono(true);
                        //// Q16 (Blue):
                        //image.TransparentChroma(new MagickColor(0, 0, 0), new MagickColor(0, 0, 65535));
                        //image.TransparentChroma(new ColorRGB(0, 0, 0), new ColorRGB(0, 0, 65535));
                        //image.BackgroundColor = new MagickColor("#00f");
                        //image.BackgroundColor = new MagickColor("#0000FF");
                        //image.BackgroundColor = new MagickColor("#00000000ffff");
                        //// With transparency (Red):
                        //image.BackgroundColor = new MagickColor(65535, 0, 0, 32767);
                        //image.BackgroundColor = new MagickColor("#ff000080");
                        //// Q8 (Green):
                        //image.TransparentChroma(new MagickColor(0, 0, 0), new MagickColor(0, 255, 0));
                        //image.TransparentChroma(new ColorRGB(0, 0, 0), new ColorRGB(0, 255, 0));
                        //image.BackgroundColor = new MagickColor("#0f0");
                        //image.BackgroundColor = new MagickColor("#00FF00");
                        // image.Quality = 100;
                        // image.Write(FinalImagePath + Convertedfile + ".png");
                        UniquePngImg = View + "_" + ImageGUID + SvgFileWithoutExtension + ".png";
                        image.Write(FinalImagePath + UniquePngImg);
                        //Delete Created Current SvG ,after converting svg to png
                        if ((System.IO.File.Exists(completePath)))
                        {
                            System.IO.File.Delete(completePath);
                        }
                    }
                }
                return Json(new { image = UniquePngImg, svg = UniquePngImgGmailSVG }, JsonRequestBehavior.AllowGet);
            }
            catch (System.Exception ex)
            {
                var Ex = ex.Message;
                return Json("There is some Problem while getting Image Path", JsonRequestBehavior.AllowGet);
            }
        }
        [HttpPost]
        [ValidateInput(false)]
        public JsonResult SvgToPngGetPhysicalPathForDealer(string SvgStr, string guid, string View)
        {
            try
            {
                // Save Svg into Folder//
                string ImageGUID = View+Guid.NewGuid().ToString();
                string imageData = HttpUtility.UrlDecode(SvgStr);
                string Filename = ImageGUID + "sample.svg";
                var completePath = System.Web.HttpContext.Current.Server.MapPath("~/Content/customizedSvg/" + Filename);
                String FinalImagePath = System.Web.HttpContext.Current.Server.MapPath("~/Content/customizedPngImg/");
                System.IO.File.WriteAllText(completePath, imageData);

                var UniquePngImg = "";
                var PhysicalPath = "";

                string FilePath = System.Web.HttpContext.Current.Server.MapPath("~/Content/customizedSvg/" + Filename);
                var GetDirectory = Path.GetDirectoryName(FilePath) + "\\";
                // var GetDirectory = System.Web.HttpContext.Current.Server.MapPath("~/Content/CartImages/");
                string SvgFileName = FilePath.Substring(FilePath.LastIndexOf("\\") + 1);
                string SvgFileWithoutExtension = SvgFileName.Remove(SvgFileName.LastIndexOf("."));
                string[] dirs = Directory.GetFiles(GetDirectory, SvgFileName);
                foreach (string EpsFilePath in dirs)
                {
                    // using (MagickImage image = new MagickImage(EpsFilePath, readSettings))               
                    using (MagickImage image = new MagickImage(EpsFilePath))
                    {
                        //  make PNG image with white background transparent(Remove Back - Ground From Image)
                        //image.TransparentChroma(Color.Black, Color.Blue);
                        //image.BackgroundColor = new ColorMono(true);

                        //// Q16 (Blue):
                        //image.TransparentChroma(new MagickColor(0, 0, 0), new MagickColor(0, 0, 65535));
                        //image.TransparentChroma(new ColorRGB(0, 0, 0), new ColorRGB(0, 0, 65535));
                        //image.BackgroundColor = new MagickColor("#00f");
                        //image.BackgroundColor = new MagickColor("#0000ff");
                        //image.BackgroundColor = new MagickColor("#00000000ffff");

                        //// With transparency (Red):
                        //image.BackgroundColor = new MagickColor(65535, 0, 0, 32767);
                        //image.BackgroundColor = new MagickColor("#ff000080");

                        //// Q8 (Green):
                        //image.TransparentChroma(new MagickColor(0, 0, 0), new MagickColor(0, 255, 0));
                        //image.TransparentChroma(new ColorRGB(0, 0, 0), new ColorRGB(0, 255, 0));
                        //image.BackgroundColor = new MagickColor("#0f0");
                        //image.BackgroundColor = new MagickColor("#00ff00");
                        // image.Quality = 100;    

                        UniquePngImg = ImageGUID + SvgFileWithoutExtension + ".png";                        
                        image.Write(FinalImagePath + UniquePngImg);
                        PhysicalPath = FinalImagePath + UniquePngImg;
                        
                        //Delete Created Current SvG ,after converting svg to png
                        if ((System.IO.File.Exists(completePath)))
                        {
                            System.IO.File.Delete(completePath);
                        }
                    }
                    //UniquePngImg = UniquePngImg;
                }
                return Json(PhysicalPath, JsonRequestBehavior.AllowGet);
            }
            catch (System.Exception ex)
            {
                var Ex = ex.Message;
                return Json("There is some Problem while getting Image Path", JsonRequestBehavior.AllowGet);
            }
        }
        [HttpPost]
        [ValidateInput(false)]
        public JsonResult SaveCartImagesByImageMaggic(string SvgStr, string guid)
        {
            try
            {
                // Save Svg into Folder//
                string ImageGUID = Guid.NewGuid().ToString();

                //Commit this line For TWMEL1 while sending png to store it chang the actual color

                //string imageData = HttpUtility.UrlDecode(SvgStr);
                string imageData = SvgStr;
                string Filename = ImageGUID + "sample.svg";
                var completePath = System.Web.HttpContext.Current.Server.MapPath("~/Content/customizedSvg/" + Filename);
                String FinalImagePath = System.Web.HttpContext.Current.Server.MapPath("~/Content/customizedPngImg/");
                System.IO.File.WriteAllText(completePath, imageData);
                // END//
                // Create PNG Image from SVG-File
                //  var PickFilefromfolder = System.Web.HttpContext.Current.Server.MapPath("~/ShareSVGImagePath/" + Filename);           

                string FilePath = System.Web.HttpContext.Current.Server.MapPath("~/Content/customizedSvg/" + Filename);
                var GetDirectory = Path.GetDirectoryName(FilePath) + "\\";
                // var GetDirectory = System.Web.HttpContext.Current.Server.MapPath("~/Content/CartImages/");
                string SvgFileName = FilePath.Substring(FilePath.LastIndexOf("\\") + 1);
                string SvgFileWithoutExtension = SvgFileName.Remove(SvgFileName.LastIndexOf("."));
                string[] dirs = Directory.GetFiles(GetDirectory, SvgFileName);
                var UniquePngImg = "";
                foreach (string EpsFilePath in dirs)
                {
                    // using (MagickImage image = new MagickImage(EpsFilePath, readSettings))               
                    using (MagickImage image = new MagickImage(EpsFilePath))
                    {
                        //  make PNG image with white background transparent(Remove Back - Ground From Image)
                        //image.TransparentChroma(Color.Black, Color.Blue);
                        //image.BackgroundColor = new ColorMono(true);

                        // Q16 (Blue):
                        //image.TransparentChroma(new MagickColor(0, 0, 0), new MagickColor(0, 0, 65535));
                        //image.TransparentChroma(new ColorRGB(0, 0, 0), new ColorRGB(0, 0, 65535));
                        //image.BackgroundColor = new MagickColor("#00f");
                        //image.BackgroundColor = new MagickColor("#0000ff");
                        //image.BackgroundColor = new MagickColor("#00000000ffff");

                        // With transparency (Red):
                        //image.BackgroundColor = new MagickColor(65535, 0, 0, 32767);
                        //image.BackgroundColor = new MagickColor("#ff000080");

                        // Q8 (Green):
                        //image.TransparentChroma(new MagickColor(0, 0, 0), new MagickColor(0, 255, 0));
                        //image.TransparentChroma(new ColorRGB(0, 0, 0), new ColorRGB(0, 255, 0));
                        //image.BackgroundColor = new MagickColor("#0f0");
                        //image.BackgroundColor = new MagickColor("#00ff00");
                        // image.Quality = 100;    

                        // image.Write(FinalImagePath + Convertedfile + ".png");

                        UniquePngImg = ImageGUID + SvgFileWithoutExtension + ".png";
                        image.Write(FinalImagePath + UniquePngImg);


                        //Delete Created Current SvG ,after converting svg to png
                        if ((System.IO.File.Exists(completePath)))
                        {
                            System.IO.File.Delete(completePath);
                        }
                    }
                }
                return Json(UniquePngImg, JsonRequestBehavior.AllowGet);
            }
            catch (System.Exception ex)
            {
                var Ex = ex.Message;
                return Json("There is some Problem while getting Image Path", JsonRequestBehavior.AllowGet);
            }   
        }

        //private bool RemoveFileFromServer(string path)
        //{
        //    System.IO.DirectoryInfo di = new DirectoryInfo(path);
        //    foreach (FileInfo file in di.GetFiles())
        //    {
        //        file.Delete();
        //    }
        //    foreach (DirectoryInfo dir in di.GetDirectories())
        //    {
        //        dir.Delete(true);
        //    }
        //    return true;
        //}
    }
}