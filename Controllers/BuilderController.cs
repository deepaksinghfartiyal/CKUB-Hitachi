using System;
using System.Web.Mvc;
using System.Net.Mail;
using System.Net;
using System.IO;
using System.Configuration;
using UBuilder.Domain.Results;
using UBuilder.Helper;
using System.IO.Compression;

namespace UBuilder.Controllers
{
    public class Calculator
    {
        Calculator obj = new Calculator();
    }


    public class BuilderController : Controller
    {

        //public string FromAddress { get; set; }
        //public string FromName { get; set; }

        //public BuilderController()
        //{
        //    FromAddress = ConfigurationManager.AppSettings["siteEmailFromAddress"];
        //    FromName = ConfigurationManager.AppSettings["siteEmailFrom"];
        //}
        [HttpPost]
        public ActionResult Logout(string inActivityLogout)
        {
            return Redirect(inActivityLogout);
        }

        // GET: Builder
        public ActionResult Index()
        {
           
            LoginHelper.CurrentUser cu = new LoginHelper.CurrentUser();
            LoginHelper.UserStandard(ref cu);
            return View();
        }

        [HttpPost]
        public ActionResult SendEmailMimekit(FormCollection form)
        {
            //  WriteLog(BuilderEmail);
            var attachment = "";
            var returnUrl = "";
            var CurrentUser = "";
            try
            {

                var fromEmail = form["fromEmail"];
                attachment = form["attachment"];
                string ToEmail = form["Toemail"];
                string subject = form["subject"];
                string bodytext = form["bodytext"];
                returnUrl = Convert.ToString(form["returnUrl"]);
                CurrentUser = Convert.ToString(form["CurrentUser"]);
                fromEmail = fromEmail.Replace(" ", string.Empty);
                ToEmail = ToEmail.Replace(" ", string.Empty);
                ToEmail = ToEmail.Replace(';', ',');
                string[] Toemail = ToEmail.Split(',');
                try
                {
                    using (MailMessage mail = new MailMessage())
                    {
                        string mailUser = ConfigurationManager.AppSettings["emailServerUser"];
                        // FromAddress = ConfigurationManager.AppSettings["siteEmailFromAddress"];
                        //mail.From = new MailAddress(mailUser); //its working
                        //mail.From = new MailAddress(fromEmail);  //Not working 
                        mail.From = new MailAddress(mailUser, fromEmail);//(from address,smtp email)
                        foreach (var toEmail in Toemail)
                        {
                            mail.To.Add(toEmail);
                        }
                        mail.Subject = subject;
                        // mail.Body = "Created on the CliffKeen Athletic Uniform Builder By"+ "\"the + FromAddress\"" + returnUrl + "<br>" + bodytext;
                        if (CurrentUser == "null")
                        {
                            mail.Body = "Created on the CliffKeen Athletic Uniform Builder<br>Click the link below to view the custom design <br>" + returnUrl + "<br><br>" + bodytext + "<br><br>View Image:" + attachment;

                        }
                        else
                        {
                            mail.Body = "Created on the CliffKeen Athletic Uniform Builder by " + "\"" + CurrentUser + "\"" + "<br>Click the link below to view the custom design <br>" + returnUrl + "<br><br>" + bodytext + "<br><br>View Image:" + attachment;
                        }
                        // mail.Body = "Created on the CliffKeen Athletic Uniform Builder by " + "\"" + CurrentUser + "\"" + "<br>Click the link below to view the custom design <br>" + returnUrl + "<br><br>" + bodytext + "<br><br>View Image:" + attachment;
                        mail.IsBodyHtml = true;
                        mail.ReplyToList.Add(new MailAddress(fromEmail, "reply-to"));
                        //mail.Attachments.Add(new Attachment(System.Web.HttpContext.Current.Server.MapPath("~" + attachment)));
                        int mailPort = int.Parse(ConfigurationManager.AppSettings["emailPort"]);
                        string mailServer = ConfigurationManager.AppSettings["emailServer"];

                        using (SmtpClient smtp = new SmtpClient(mailServer, mailPort))
                        {

                            string mailPwd = ConfigurationManager.AppSettings["emailServerPwd"];
                            string mailSSL = ConfigurationManager.AppSettings["emailServerSSL"].Trim();
                            EmailAndPasswordLogFile(mailUser, mailPwd);
                            bool enableSSL = false;
                            if (mailSSL.ToUpper() == "N")
                            {
                                enableSSL = false;
                            }
                            else
                            {
                                enableSSL = true;
                            }
                            System.Threading.Thread.Sleep(1000);
                            smtp.Credentials = new NetworkCredential(mailUser, mailPwd);
                            smtp.EnableSsl = enableSSL;
                            smtp.Send(mail);
                        }
                    }
                    TempData["EmailSuccessful_Error"] = true;
                }
                catch (System.Exception ex)
                {
                    WriteErrorLog(ex);
                    TempData["EmailSuccessful_Error"] = false;
                }
            }
            catch (System.Exception ex)
            {
                WriteErrorLog(ex);
            }

            return Redirect(Url.Action("_GmailSendEmail", "Builder", new { @attachment = attachment, returnUrl = returnUrl }));
        }

        public void WriteErrorLog(System.Exception ex)
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
                    stwriter.WriteLine("Message Builder Index:" + ex);
                    stwriter.WriteLine("-------------------End----------------------------");
                }
            }
            else
            {
                StreamWriter stwriter = System.IO.File.CreateText(path);
                stwriter.WriteLine("-------------------Error Log Start-----------as on " + DateTime.Now.ToString("hh:mm tt"));
                // stwriter.WriteLine("WebPage Name :" + webPageName);
                stwriter.WriteLine("Message Builder Index: " + ex.ToString());
                stwriter.WriteLine("-------------------End----------------------------");
                stwriter.Close();
            }
        }

        public void EmailAndPasswordLogFile(string Username, string password)
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
                    stwriter.WriteLine("UseName:" + Username.ToString());
                    stwriter.WriteLine("Password:" + password.ToString());
                    stwriter.WriteLine("-------------------End----------------------------");
                }
            }
            else
            {
                StreamWriter stwriter = System.IO.File.CreateText(path);
                stwriter.WriteLine("-------------------Error Log Start-----------as on " + DateTime.Now.ToString("hh:mm tt"));
                // stwriter.WriteLine("WebPage Name :" + webPageName);
                stwriter.WriteLine("UseName:" + Username.ToString());
                stwriter.WriteLine("Password:" + password.ToString());
                stwriter.WriteLine("-------------------End----------------------------");
                stwriter.Close();
            }
        }
        public ActionResult _GmailSendEmail(string attachment, string returnUrl, string CurrentUser)
        {
            TempData["returnUrl"] = returnUrl;
            TempData["emailAttachment"] = attachment;
            TempData["CurrentUser"] = CurrentUser;
            return View();
        }

        //Import --Get Imges for send to Dealer
        //Start
        public ActionResult GetAllFiles(string id)
        {
            try
            {
                var FolderPath = System.Web.HttpContext.Current.Server.MapPath("~/UploadFiles/imgFolder/AcutalBrowserdImage_" + id + "/" + id);
                //var FolderPath = System.Web.HttpContext.Current.Server.MapPath("~/UploadFiles/imgFolder/" + id);
                string[] fileArray = Directory.GetFiles(FolderPath);
                return Json(new { status = true, ImageList = fileArray, message = "There is something went wrong kindly contect", });
            }
            catch
            {
                return Json(new { status = "Excetion", message = "There is something went wrong kindly contect" });
            }
        }
        //End

        public ActionResult IsFileOrPathExist(string id)
        {
            var FolderPath = System.Web.HttpContext.Current.Server.MapPath("~/UploadFiles/imgFolder/AcutalBrowserdImage_" + id + "/" + id);
            if (!Directory.Exists(FolderPath))
            {
                return Json(new { status = false, message = "Directory or Path does Not Exit" });
            }
            else
            {
                string[] filesindirectory = Directory.GetFiles(FolderPath);
                var length = filesindirectory.Length;
                if (length > 0)
                {
                    return Json(new { status = true, message = "Images are Exist In Directory" });
                }
                else
                {
                    return Json(new { status = false, message = "No images are found" });
                }
            }
        }

        public ActionResult DownloadZipFile(string id)
        {
            try
            {
                Random random = new Random();
                int number = random.Next(10) + random.Next(20) + random.Next(20);
                var FolderPath = System.Web.HttpContext.Current.Server.MapPath("~/UploadFiles/imgFolder/AcutalBrowserdImage_" + id + "/" + id);
                var ZippedFileName = System.Web.HttpContext.Current.Server.MapPath("~/UploadFiles/imgFolder/BrowsedImages" + number + ".zip");
                var ZippedFilePath = CreateZipFile(FolderPath, ZippedFileName);
                ZippedFileName = Path.GetFileName(ZippedFilePath);
                // ZippedFileName = ZippedFileName + number;
                return File(ZippedFilePath, "application/zip", ZippedFileName);
            }
            catch
            {
                return Json(new { status = "Excetion", message = "There is something went wrong kindly contect" });
            }
        }
        private string CreateZipFile(string SourcePath, string destinationPath)
        {
            try
            {
                var path = SourcePath;
                if (System.IO.File.Exists(destinationPath))
                {
                    System.IO.File.Delete(destinationPath);
                }
                System.IO.Compression.ZipFile.CreateFromDirectory(SourcePath, destinationPath);
                return destinationPath;
            }
            catch (System.Exception ex)
            {
                Response.Write(ex.Message);
                return ex.Message;
            }
        }

        public ActionResult DeleteImageFromDirectory(string id, string path)
        {
            try
            {
                var fileName = Path.GetFileNameWithoutExtension(path);
                var pathforAttachedImagesOnSvg = System.Web.HttpContext.Current.Server.MapPath(path);
                var directoryPath = Path.GetDirectoryName(pathforAttachedImagesOnSvg);

                //Important Step 1-Delete Images from temprory folde
                //Delete Converted vacter image(vacter to png) and png image both.

                //if (System.IO.File.Exists(pathforAttachedImagesOnSvg))
                //{                   
                string[] files = System.IO.Directory.GetFiles(directoryPath, fileName + ".*");
                foreach (string f in files)
                {
                    System.IO.File.Delete(f);
                }
                // }

                //Important Step 2-Delete Images from actual folde
                //Delete uploaded vactor and raster images from actual folder location(This is the location for browsed zipped images)

                var ActualFoldeFilePath = System.Web.HttpContext.Current.Server.MapPath("~/UploadFiles/imgFolder/AcutalBrowserdImage_" + id + "/" + id + "/" + fileName);
                //if(System.IO.File.Exists(ActualFoldeFilePath))
                //{
                directoryPath = Path.GetDirectoryName(ActualFoldeFilePath);
                files = System.IO.Directory.GetFiles(directoryPath, fileName + ".*");
                foreach (string f in files)
                {
                    System.IO.File.Delete(f);
                }
                //}
                return Json(new { status = true, message = "Images deleted successfully" });
            }
            catch
            {
                return Json(new { status = "Exception", message = "There is something went worng kindly verify" });
            }
        }
    }
}