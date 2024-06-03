using System;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using UBuilder.Domain;
using UBuilder.Domain.EntityRepository;
using UBuilder.Helper;
using UBuilder.Domain.Results;
using UBuilder.AddressAccessFiltering;
using System.Web.Http.Cors;
using System.Configuration;
using System.Text;
//using Newtonsoft.Json;
using UBuilder.Models;
using Newtonsoft.Json;

using System.Drawing;

namespace UBuilder.Controllers
{
    //[Authorize]    
    [RoutePrefix("api/Designs")]
    public class DesignsController : ApiController
    {
        IDesignsRepository _DesignsRepository;

        public DesignsController(IDesignsRepository DesignsRepository)
        {
            _DesignsRepository = DesignsRepository;
        }

        //static void Main(string[] args)
        //{
        //    var sampleDoc = SvgDocument.Open(Path.Combine(AppDomain.CurrentDomain.BaseDirectory, @"..\..\sample.svg"));
        //    sampleDoc.GetElementById<SvgUse>("Commonwealth_Star").Fill = new SvgColourServer(Color.Black);
        //    sampleDoc.Draw().Save(Path.Combine(AppDomain.CurrentDomain.BaseDirectory, @"..\..\sample.png"));
        //}

        [Route("GetDesigns")]
        [HttpPost]
        public IHttpActionResult GetDesigns(LockerModel model)
        {
            GetDesignsOut result = new GetDesignsOut();
            LoginHelper.CurrentUser cu = new LoginHelper.CurrentUser();
            LoginHelper.CurrentUser priorUser = new LoginHelper.CurrentUser();

            if (LoginHelper.UserStandard(ref cu))
            {
                if (LoginHelper.UserTempExists(ref priorUser))
                {
                    _DesignsRepository.AssignDesignToUser(priorUser.ID, cu.ID);
                    LoginHelper.DeleteTempCookie();
                }
            }
            else
            {
                LoginHelper.UserTemp(ref cu);
            }

            try
            {
                result.LockerCount = _DesignsRepository.GetUserDesigns(cu.ID);
                result.Data = _DesignsRepository.GetDesigns(cu.ID, model.pageindex, model.pagesize);
                result.Success = true;
                result.ErrorCode = string.Empty;
                result.ErrorText = string.Empty;
                return Ok(result);
            }
            catch (System.Exception ex)
            {
                result.Success = false;
                result.ErrorCode = "400";
                result.ErrorText = ex.Message;
                result.Data = null;
                return Ok(result);
            }
        }
        [Route("GetAdminDesigns")]
        [HttpPost]       
        public IHttpActionResult GetAdminDesigns(LockerModel model)
        {
            GetDesignsOut result = new GetDesignsOut();
            LoginHelper.CurrentUser cu = new LoginHelper.CurrentUser();
            LoginHelper.CurrentUser priorUser = new LoginHelper.CurrentUser();

            if (LoginHelper.UserStandard(ref cu))
            {
                if (LoginHelper.UserTempExists(ref priorUser))
                {
                    _DesignsRepository.AssignDesignToUser(priorUser.ID, cu.ID);
                    LoginHelper.DeleteTempCookie();
                }
            }
            else
            {
                LoginHelper.UserTemp(ref cu);
            }

            try
            {
                result.LockerCount = _DesignsRepository.GetAdminDesigns();
                result.Data = _DesignsRepository.GetDesignsAdmin(model.pageindex, model.pagesize);
                //result.Data = _DesignsRepository.GetDesigns(cu.ID, model.pageindex, model.pagesize);
                result.Success = true;
                result.ErrorCode = string.Empty;
                result.ErrorText = string.Empty;
                return Ok(result);
            }
            catch (System.Exception ex)
            {
                result.Success = false;
                result.ErrorCode = "400";
                result.ErrorText = ex.Message;
                result.Data = null;
                return Ok(result);
            }
        }
        [Route("GetUser")]
        [HttpPost]
        public IHttpActionResult GetUser()
        {
            GetUserOut result = new GetUserOut();
            LoginHelper.CurrentUser cu = new LoginHelper.CurrentUser();
            
            LoginHelper.CurrentUser priorUser = new LoginHelper.CurrentUser();
            try
            {
                if (LoginHelper.UserStandard(ref cu))
                {

                    // if user HAS logged in, see if they have created and saved a temp design prior
                    if (LoginHelper.UserTemp(ref priorUser))
                    {
                        // update
                        _DesignsRepository.AssignDesignToUser(priorUser.ID, cu.ID);
                        //HttpContext.Current.Session["BuilderEmail"] = cu.email;
                        // then kill the temp cookie
                        LoginHelper.DeleteTempCookie();
                    }


                    result.Data = cu;
                    result.Success = true;
                    result.ErrorCode = string.Empty;
                    result.ErrorText = string.Empty;
                }
                else {
                    // see if temp cookie exists
                    if (LoginHelper.UserTemp(ref cu))
                    {
                        result.Data = cu;
                        result.Success = true;
                        result.ErrorCode = string.Empty;
                        result.ErrorText = string.Empty;
                    }
                    else
                    // create the temp cookie
                    {
                        int tempID = LoginHelper.GenerateTempID();                       
                        cu.ID = tempID.ToString();
                        result.Data = cu;
                        result.Success = true;
                        result.ErrorCode = string.Empty;
                        result.ErrorText = string.Empty;
                    }
                }

                return Ok(result);
            }
            catch (System.Exception ex)
            {
                result.Success = false;
                result.ErrorCode = "400";
                result.ErrorText = ex.Message;
                result.Data = null;
                return Ok(result);
            }
        }
        //JSON  
        [Route("KitProducts")]
        [HttpPost]
        public IHttpActionResult KitProducts(KitProductID objKid)
        {
            kitProductOut result = new kitProductOut();
            try
            {

                var KitProductdesignResult = _DesignsRepository.GetKitProduct(objKid.guid);
                result.Success = true;
                result.ErrorCode = string.Empty;
                result.ErrorText = string.Empty;
                result.Data = KitProductdesignResult;

                return Ok(result);
                //return result;
            }
            catch (System.Exception ex)
            {
                result.Success = false;
                result.ErrorCode = "400";
                result.ErrorText = ex.Message;
                result.Data = null;

                return Ok(result);
            }
        }

        //JSON
        [Route("GetDesignsByDealer")]
        [HttpPost]
        public IHttpActionResult GetDesignsByDealer(DealerIdentifier dealerObj)
        {
            GetDesignsOut result = new GetDesignsOut();
            try
            {
                result.Data = _DesignsRepository.GetDesignsByDealerId(dealerObj.DealerID);
                result.Success = true;
                result.ErrorCode = string.Empty;
                result.ErrorText = string.Empty;

                return Ok(result);
            }
            catch (System.Exception ex)
            {
                result.Success = false;
                result.ErrorCode = "400";
                result.ErrorText = ex.Message;
                result.Data = null;
                return Ok(result);
            }
        }


        //JSON
        //DesignID 
        [Route("GetDesign")]
        [HttpPost]
        public IHttpActionResult GetDesign(DesignID objDesign)
        {
            DesignOutput result = new DesignOutput();

            try
            {

                DesignOut designResult = _DesignsRepository.GetDesign(objDesign.GUID);
                //it creating error log file in my locker file or locker images are missing and showing error path error
                // WriteLog("verify design guid after redirection");

                result.Success = true;
                result.ErrorCode = string.Empty;
                result.ErrorText = string.Empty;
                result.Data = designResult;

                return Ok(result);
                //return result;
            }
            catch (System.Exception ex)
            {
                result.Success = false;
                result.ErrorCode = "400";
                result.ErrorText = ex.Message;
                result.Data = null;

                return Ok(result);

            }
        }

        public void WriteLog(dynamic ex)
        {
            // string webPageName = Path.GetFileName(Request.Path);
            string errorLogFilename = "ErrorLog_" + DateTime.Now.ToString("dd-MM-yyyy") + ".txt";
            string path = HttpContext.Current.Server.MapPath("~/Content/MyGoogleStorage/" + errorLogFilename);
            if (System.IO.File.Exists(path))
            {
                using (StreamWriter stwriter = new StreamWriter(path, true))
                {
                    stwriter.WriteLine("-------------------Error Log Start-----------as on " + DateTime.Now.ToString("hh:mm tt"));
                    // stwriter.WriteLine("WebPage Name :" + webPageName);
                    stwriter.WriteLine("verify design guid after redirection:" + ex);
                    stwriter.WriteLine("-------------------End----------------------------");
                }
            }
            else
            {
                StreamWriter stwriter = System.IO.File.CreateText(path);
                stwriter.WriteLine("-------------------Error Log Start-----------as on " + DateTime.Now.ToString("hh:mm tt"));
                // stwriter.WriteLine("WebPage Name :" + webPageName);
                stwriter.WriteLine("verify design guid after redirection: " + ex.ToString());
                stwriter.WriteLine("-------------------End----------------------------");
                stwriter.Close();
            }
        }

        //}
        //JSON  
        [Route("DuplicateDesign")]
        [HttpPost]
        public IHttpActionResult DuplicateDesign(DuplicateDesignID objDup)
        {
            DuplicateDesignOut result = new DuplicateDesignOut();
            LoginHelper.CurrentUser cu = new LoginHelper.CurrentUser();


            if (!LoginHelper.UserStandard(ref cu))
            {
                LoginHelper.UserTemp(ref cu);
            }


            try
            {                
                result.Data = _DesignsRepository.DuplicateExistingDesign(objDup.ID, cu.ID);
                result.Success = true;
                result.ErrorCode = string.Empty;
                result.ErrorText = string.Empty;

                return Ok(result);
            }
            catch (System.Exception ex)
            {
                result.Success = false;
                result.ErrorCode = "400";
                result.ErrorText = ex.Message;
                result.Data = null;
                return Ok(result);
            }

        }


        //JSON
        [Route("SaveDesign")]
        [HttpPost]
        public IHttpActionResult SaveDesign(DesignIn di)
        {

            SaveDesignOut result = new SaveDesignOut();
            LoginHelper.CurrentUser cu = new LoginHelper.CurrentUser();
            LoginHelper.CurrentUser priorUser = new LoginHelper.CurrentUser();
            string errorText = "";

            if (LoginHelper.UserStandard(ref cu))
            {
                if (LoginHelper.UserTempExists(ref priorUser))
                {
                    _DesignsRepository.AssignDesignToUser(priorUser.ID, cu.ID);
                    LoginHelper.DeleteTempCookie();
                }
            }
            else
            {
                LoginHelper.UserTemp(ref cu);
            }

            try
            {
                string userid = di.UserId.ToString();             
                int ID = 0;
                if (_DesignsRepository.SaveDesign2(di, cu.IsDealer, cu.ID, cu.ID, ref ID, ref errorText))
                {
                    result.Success = true;
                    result.ErrorCode = string.Empty;
                    result.ErrorText = string.Empty;
                    result.Data = ID.ToString();                 
                    return Ok(result);
                }
                else
                {
                    result.Success = false;
                    result.ErrorCode = "400";
                    result.ErrorText = errorText;
                    result.Data = errorText;                   
                    return Ok(result);
                }
            }
            catch (System.Exception ex)
            {
                result.Success = false;
                result.ErrorCode = "400";
                result.ErrorText = ex.Message;
                result.Data = null;               

                return Ok(result);
            }
        }

        [Route("UpdateDesignStatus")]
        [HttpPost]
        public IHttpActionResult UpdateDesignStatus(DesignStatusIn di)
        {
            DesignStatusOut result = new DesignStatusOut();
            try
            {
                if (_DesignsRepository.UpdateDesignStatus(di.id, di.status))
                {
                    result.Success = true;
                    result.ErrorCode = string.Empty;
                    result.ErrorText = string.Empty;
                    result.Data = "OK";

                    return Ok(result);
                }
                else
                {
                    result.Success = false;
                    result.ErrorCode = "400";
                    result.ErrorText = "Cannot locate design";
                    result.Data = null;

                    return Ok(result);
                }
            }
            catch (System.Exception ex)
            {
                result.Success = false;
                result.ErrorCode = "400";
                result.ErrorText = ex.Message;
                result.Data = null;


                return Ok(result);
            }
        }
        [AuthorizeIPAddress]
        [Route("UpdateDesignStatusBackend")]
        [HttpPost]
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public IHttpActionResult UpdateDesignStatusBackend(DesignStatusIn di)
        {
            DesignStatusOut result = new DesignStatusOut();
            try
            {
                if (_DesignsRepository.UpdateDesignStatus(di.id, di.status))
                {
                    result.Success = true;
                    result.ErrorCode = string.Empty;
                    result.ErrorText = string.Empty;
                    result.Data = "OK";

                    return Ok(result);
                }
                else
                {
                    result.Success = false;
                    result.ErrorCode = "400";
                    result.ErrorText = "Cannot locate design";
                    result.Data = null;

                    return Ok(result);
                }
            }
            catch (System.Exception ex)
            {
                result.Success = false;
                result.ErrorCode = "400";
                result.ErrorText = ex.Message;
                result.Data = null;


                return Ok(result);
            }
        }


        //JSON  
        [Route("AssignDesignToDealer")]
        [HttpPost]
        public IHttpActionResult AssignDesignToDealer(DealerMsg dealerObj)
        {
            AssignToDealerOut result = new AssignToDealerOut();
            LoginHelper.CurrentUser cu = new LoginHelper.CurrentUser();

            string errorText = "";
            try
            {

                if (!LoginHelper.UserStandard(ref cu))
                {
                    LoginHelper.UserTemp(ref cu);
                }


                if (_DesignsRepository.AssignDesignToDealer(dealerObj.ID, cu.ID, cu.email, dealerObj.dealerId, dealerObj.dealerEmail, dealerObj.message, ref errorText))
                {
                    string orderGUID = _DesignsRepository.GetGUID(dealerObj.ID);

                    // assigned in db, now send email
                    if (_DesignsRepository.EmailDesign2(orderGUID, cu.FirstName + " " + cu.LastName, cu.email, dealerObj.dealerEmail, dealerObj.message, ref errorText))
                    {

                        result.Success = true;
                        result.ErrorCode = string.Empty;
                        result.ErrorText = string.Empty;
                        result.Data = "OK";
                        return Ok(result);
                    }
                    else
                    {

                        result.Success = false;
                        result.ErrorCode = "400";
                        result.ErrorText = "Error emailing design";
                        result.Data = string.Empty;
                        return Ok(result);

                    }
            }


                else
                {
                result.Success = false;
                result.ErrorCode = "400";
                result.ErrorText = errorText;
                result.Data = null;

                return Ok(result);
            }


        }
            catch (System.Exception ex)
            {
                result.Success = false;
                result.ErrorCode = "400";
                result.ErrorText = ex.Message;
                result.Data = string.Empty;

                return Ok(result);
            }
        }

        [Route("AssignDesignToDealerSubmit")]
        [HttpPost]
        public IHttpActionResult AssignDesignToDealerSubmit(DealerMsgSubmit dealerObj)
        {
            AssignToDealerOut result = new AssignToDealerOut();
            LoginHelper.CurrentUser cu = new LoginHelper.CurrentUser();
            

            string errorText = "";
            try
            {
                if (!LoginHelper.UserStandard(ref cu))
                {
                    LoginHelper.UserTemp(ref cu);
                }

                if (_DesignsRepository.AssignDesignToDealerSubmit(dealerObj.ID, cu.ID, cu.email, dealerObj.dealerId, dealerObj.dealerEmail, dealerObj.message,ref errorText))
                {

                 
                    string orderGUID = _DesignsRepository.GetGUID(dealerObj.ID);

                    // assigned in db, now send email
                    //if (_DesignsRepository.EmailDesign2Submit(orderGUID, cu.FirstName + " " + cu.LastName, cu.email, dealerObj.dealerEmail, dealerObj.message,dealerObj.ImagePathFront,dealerObj.ImagePathBack,dealerObj.ImagePathLeft,dealerObj.ImagePathRight, dealerObj.CurrentPageUrl,ref errorText))

                    if (dealerObj.dealerId != "NO_DEALER")
                    {
                        if (_DesignsRepository.EmailDesign2Submit(orderGUID, cu.FirstName + " " + cu.LastName, cu.email, dealerObj.dealerEmail, dealerObj.message, dealerObj.CurrentPageUrl, dealerObj.OriginalOrderNo, dealerObj.CaptureImagePath, ref errorText))
                        {

                            result.Success = true;
                            result.ErrorCode = string.Empty;
                            result.ErrorText = string.Empty;
                            result.Data = "OK";
                            return Ok(result);
                        }
                        else
                        {

                            result.Success = false;
                            result.ErrorCode = "400";
                            result.ErrorText = "Error emailing design";
                            result.Data = string.Empty;
                            return Ok(result);
                        }
                    }
                    else
                    {

                        result.Success = false;
                        result.ErrorCode = "400";
                        result.ErrorText = "Error emailing design";
                        result.Data = string.Empty;
                        return Ok(result);
                    }

                }
                else
                {
                result.Success = false;
                result.ErrorCode = "400";
                result.ErrorText = errorText;
                result.Data = null;

                return Ok(result);
            }
        }
            catch (System.Exception ex)
            {
                result.Success = false;
                result.ErrorCode = "400";
                result.ErrorText = ex.Message;
                result.Data = string.Empty;

                return Ok(result);
            }
        }      

        //JSON  
        [Route("EmailDesign")]
        [HttpPost]
        public IHttpActionResult EmailDesign(UserMsg userObj)
        {
            EmailDesignOut result = new EmailDesignOut();
            try
            {
                if (_DesignsRepository.EmailDesign(userObj.guid, userObj.userEmail, userObj.recipientEmail))
                {
                    result.Success = true;
                    result.ErrorCode = string.Empty;
                    result.ErrorText = string.Empty;
                    result.Data = "OK";
                    return Ok(result);
                }
                else
                {
                    result.Success = false;
                    result.ErrorCode = "40";
                    result.ErrorText = "Problem Sending Email";
                    result.Data = null;
                    return Ok(result);
                }

            }
            catch (System.Exception ex)
            {
                result.Success = false;
                result.ErrorCode = "400";
                result.ErrorText = ex.Message;
                result.Data = null;
                return Ok(result);
            }
        }



        //JSON
        [Route("DeleteDesign")]
        [HttpPost]
        public IHttpActionResult DeleteDesign(DeleteDesignID deleteObj)
        {
            DeleteDesignOut result = new DeleteDesignOut();
            LoginHelper.CurrentUser cu = new LoginHelper.CurrentUser();
            LoginHelper.CurrentUser priorUser = new LoginHelper.CurrentUser();
            string errorText = "";
            if (!LoginHelper.UserStandard(ref cu))
            {
                LoginHelper.UserTemp(ref cu);
            }

            try
            {

                if (_DesignsRepository.DeleteDesign2(deleteObj.ID, cu.IsDealer, cu.ID, cu.ID, ref errorText, deleteObj.IsAdmin))
                {
                    result.Success = true;
                    result.ErrorCode = string.Empty;
                    result.ErrorText = string.Empty;
                    result.Data = "OK";
                    return Ok(result);
                }
                else
                {
                    result.Success = false;
                    result.ErrorCode = "400";
                    result.ErrorText = errorText;
                    result.Data = errorText;
                    return Ok(result);
                }


            }
            catch (System.Exception ex)
            {
                result.Success = false;
                result.ErrorCode = "400";
                result.ErrorText = ex.Message;
                result.Data = null;
                return Ok(result);
            }
        }

        //JSON
        [Route("GetOrderStatus")]
        [HttpPost]
        public IHttpActionResult GetOrderStatus(DesignGuidStatus designObj)
        {
            GetOrderStatusOut result = new GetOrderStatusOut();
            try
            {
                string s = _DesignsRepository.GetOrderStatus(designObj.Guid);

                if (s != "")
                {
                    result.Success = true;
                    result.ErrorCode = string.Empty;
                    result.ErrorText = string.Empty;
                    result.Data = s;
                    return Ok(result);
                }
                else
                {
                    result.Success = false;
                    result.ErrorCode = "400";
                    result.ErrorText = "Unable to locate order";
                    result.Data = null;
                    return Ok(result);
                }
            }
            catch (System.Exception ex)
            {
                result.Success = false;
                result.ErrorCode = "400";
                result.ErrorText = ex.Message;
                result.Data = null;
                return Ok(result);
            }
        }

        [HttpPost]
        [Route("UploadImage")]
        //public async Task<HttpResponseMessage> AddFile()
        public async Task<IHttpActionResult> UploadImage()
        {
            int id = 0;
            UploadImageOut result = new UploadImageOut();
            LoginHelper.CurrentUser cu = new LoginHelper.CurrentUser();

            if (!LoginHelper.UserStandard(ref cu))
            {
                LoginHelper.UserTemp(ref cu);
            }

            string root = HttpContext.Current.Server.MapPath("~/UploadFiles/imgFolder");
            var provider = new MultipartFormDataStreamProvider(root);

            if (!Request.Content.IsMimeMultipartContent())
            {
                //this.Request.CreateResponse(HttpStatusCode.UnsupportedMediaType);
                {
                    result.Success = false;
                    result.ErrorCode = "52";
                    result.ErrorText = "Unsupported Type: MimeMultipart required";
                    result.Data = "OK";

                    return Ok(result);
                }
            }

            // string len= new System.IO.FileInfo().Length;
            int allowedByte = Convert.ToInt32(ConfigurationManager.AppSettings["maxByteUploadImage"]);
            //int allowedByte = Convert.ToInt32(ConfigurationManager.AppSettings["maxByteUploadImage5MB"]);


            int uploadedByte = 0;
            try
            {
                uploadedByte = System.Web.HttpContext.Current.Request.Files[0].ContentLength;
                if (uploadedByte > allowedByte)
                {
                    result.Success = false;
                    result.ErrorCode = "50";
                    result.ErrorText = "File size too large (submitted " + uploadedByte + ") - allowed: " + allowedByte;
                    result.Data = "OK";

                    return Ok(result);
                }
            }
            catch (System.Exception e)
            {
                if (uploadedByte == 0)
                {
                    result.Success = false;
                    result.ErrorCode = "70";
                    result.ErrorText = "File Not Uploaded";
                    result.Data = "OK";

                    return Ok(result);
                }
            }




            string ext = System.Web.HttpContext.Current.Request.Files[0].FileName;
            // ext = ext.Substring(ext.Length - 4, 4).ToUpper();
            ext = Path.GetExtension(ext);
            ext = ext.ToUpper();


            if (ext != ".JPG" && ext != ".PNG" && ext != ".GIF" && ext != ".JPEG" && ext != ".AI" && ext != ".EPS" && ext != ".SVG" && ext != ".PDF")
            {
                result.Success = false;
                result.ErrorCode = "55";
                result.ErrorText = "Incorrect filetype - (" + ext + ") sumbitted, only PNG, GIF, JPG, JPEG,.EPS,.AI,PDF allowed";
                result.Data = string.Empty;

                return Ok(result);
            }

            System.Net.Http.MultipartFormDataStreamProvider fileResult;
            try
            {
                // Double check root folder exists
                Helper.FileHelper.CheckFileExistsOrCreate(root);

                fileResult = await Request.Content.ReadAsMultipartAsync(provider);
            }
            catch (System.Exception ex)
            {
                result.Success = false;
                result.ErrorCode = string.Empty;
                result.ErrorText = ex.Message + ' ' + root + "-s";
                result.Data = string.Empty;

                return Ok(result);
            }

            foreach (var key in provider.FormData.AllKeys)
            {
                foreach (var val in provider.FormData.GetValues(key))
                {
                    if (key == "id")
                    {
                        id = Convert.ToInt32(val);
                    }
                }
            }

            // see if allowed
            if (!_DesignsRepository.CanModifyDesign(id, cu.IsDealer, cu.ID))
            {
                result.Success = false;
                result.ErrorCode = "21";
                result.ErrorText = "Permission denied to upload on order " + id + " for userID " + cu.ID;
                result.Data = string.Empty;

                return Ok(result);
            }

            // On upload, files are given a generic name like "BodyPart_26d6abe1-3ae1-416a-9429-b35f15e6e5d5"
            // so this is how you can get the original file name
             var originalFileName = GetDeserializedFileName(fileResult.FileData.First());

            var uploadedFileInfo = new FileInfo(fileResult.FileData.First().LocalFileName);
            string path = fileResult.FileData.First().LocalFileName;

            string filepath = _DesignsRepository.UploadImage2(id, uploadedFileInfo, originalFileName, root);
            if (ext == ".EPS" || ext == ".AI" || ext ==".SVG" || ext == ".PDF")
            {
                var CurrentFile = Path.GetFileName(filepath);
                originalFileName = CurrentFile;
            }
            else
            {
               var fileName = Path.GetFileName(filepath);
                var CurrentFile = fileName;

               // var CurrentFile = originalFileName;
                originalFileName = CurrentFile;
            }

            result.Success = true;
            result.ErrorCode = string.Empty;
            result.ErrorText = string.Empty;
            result.Data = originalFileName;



            return Ok(result);
        }

        private string GetDeserializedFileName(MultipartFileData fileData)
        {
            var fileName = GetFileName(fileData);
            return JsonConvert.DeserializeObject(fileName).ToString();

        }

        public string GetFileName(MultipartFileData fileData)
        {
            return fileData.Headers.ContentDisposition.FileName;
        }

        //JSON
        [Route("UploadZip")]
        [HttpPost]
        public async Task<IHttpActionResult> UploadZip()
        {
            int id = 0;
            UploadZipOut result = new UploadZipOut();

            if (!Request.Content.IsMimeMultipartContent())
            {
                {
                    result.Success = false;
                    result.ErrorCode = "54";
                    result.ErrorText = "Unsupported Type: MimeMultipart required";
                    result.Data = string.Empty;

                    return Ok(result);
                }
            }

            LoginHelper.CurrentUser cu = new LoginHelper.CurrentUser();

            if (!LoginHelper.UserStandard(ref cu))
            {
                LoginHelper.UserTemp(ref cu);
            }

            int maxUpload = Convert.ToInt32(ConfigurationManager.AppSettings["maxByteUploadZip"]);
            try
            {
                if (System.Web.HttpContext.Current.Request.Files[0].ContentLength > maxUpload)
                {
                    result.Success = false;
                    result.ErrorCode = "50";
                    result.ErrorText = "File size too large (submitted " + System.Web.HttpContext.Current.Request.Files[0].ContentLength + ") - allowed: " + ConfigurationManager.AppSettings["maxByteUploadZip"];
                    result.Data = string.Empty;

                    return Ok(result);
                }
            }
            catch (System.Exception e)
            {
                result.Success = false;
                result.ErrorCode = "70";
                result.ErrorText = "File Not Uploaded";
                result.Data = "OK";

                return Ok(result);
            }

            string ext = System.Web.HttpContext.Current.Request.Files[0].FileName;
            ext = ext.Substring(ext.Length - 3, 3).ToUpper();

            if (ext != "ZIP")
            {
                result.Success = false;
                result.ErrorCode = "52";
                result.ErrorText = "Incorrect filetype - (" + ext + ") sumbitted, only ZIP allowed";
                result.Data = string.Empty;

                return Ok(result);
            }

            System.Net.Http.MultipartFormDataStreamProvider fileResult;
            string root = HttpContext.Current.Server.MapPath("~/UploadFiles/zipFolder");

            var provider = new MultipartFormDataStreamProvider(root);

            try
            {
                // Double check root folder exists
                Helper.FileHelper.CheckFileExistsOrCreate(root);

                fileResult = await Request.Content.ReadAsMultipartAsync(provider);
            }
            catch (System.Exception ex)
            {
                StringBuilder sb = new StringBuilder();
                sb.AppendLine(ex.Message);

                System.Exception exinner = ex;
                while (exinner.InnerException != null)
                {
                    sb.AppendLine(exinner.InnerException.Message);
                    exinner = exinner.InnerException;
                }

                result.Success = false;
                result.ErrorCode = "100";
                result.ErrorText = sb.ToString() + ' ' + root;
                result.Data = string.Empty;

                return Ok(result);
            }

            foreach (var key in provider.FormData.AllKeys)
            {
                foreach (var val in provider.FormData.GetValues(key))
                {
                    if (key == "id")
                    {
                        id = Convert.ToInt32(val);
                    }
                }
            }

            // see if allowed
            if (!_DesignsRepository.CanModifyDesign(id, cu.IsDealer, cu.ID))
            {
                result.Success = false;
                result.ErrorCode = "21";
                result.ErrorText = "Permission denied to upload on order " + id + " for userID " + cu.ID;
                result.Data = string.Empty;

                return Ok(result);
            }

            // On upload, files are given a generic name like "BodyPart_26d6abe1-3ae1-416a-9429-b35f15e6e5d5"
            // so this is how you can get the original file name
            var originalFileName = GetDeserializedFileName(fileResult.FileData.First());

            var uploadedFileInfo = new FileInfo(fileResult.FileData.First().LocalFileName);
            string path = fileResult.FileData.First().LocalFileName;

            string errorText = "";

            if (_DesignsRepository.UploadZip2(id, uploadedFileInfo, originalFileName, root, ref errorText))
            {
                result.Success = true;
                result.ErrorCode = string.Empty;
                result.ErrorText = string.Empty;
                result.Data = originalFileName;

                return Ok(result);
            }
            else
            {
                result.Success = false;
                result.ErrorCode = "101";
                result.ErrorText = errorText;
                result.Data = string.Empty;

                return Ok(result);
            }
        }

        [Route("AddTestDesigns")]
        [HttpPost]
        public IHttpActionResult AddTestDesigns()
        {
            try
            {
                Designs d = null;
                for (int i = 0; i < 100; i++)
                {
                    d = new Designs
                    {
                        Created = DateTime.Now,
                        Category = "",
                        Customization = "Test",
                        DesignGUID = Guid.NewGuid(),
                        Image_path = "/content/images/product.png",
                        Description = "description",
                        Thumbnails = "/content/images/thumb.png,/content/images/thumb1.png",
                        ProductId = i.ToString(),
                        Notes = "design notes"
                    };
                    _DesignsRepository.SaveOrUpdate(d);
                }
            }
            catch (System.Exception ex)
            {
                return BadRequest(ex.Message);
            }
            return Ok();
        }

        #region Templates
        [Route("GetDesignForDealerAndUser")]
        [HttpGet]
        public IHttpActionResult GetDesign(string id)
        {
            try
            {
                var result = _DesignsRepository.GetDesignForDealerAndUser(id);

                return Ok(result);
            }
            catch (System.Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        #endregion  
    }
}
