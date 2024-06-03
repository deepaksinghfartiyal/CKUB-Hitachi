using System.Collections.Generic;
using UBuilder.Domain;
using UBuilder.Domain.Repository;
using UBuilder.Domain.Results;
using System.Linq;
using System.Data.Entity;
using System;
using System.IO;
using UBuilder.Helper;
using System.Web;
using System.Net.Mail;
using System.Configuration;
using System.Xml;
using System.Xml.Linq;
using System.Web.Mvc;
using UBuilder.Models;
using ImageMagick;
using System.Drawing;
using System.Web.UI;
using System.Net.Mime;
using LinqToTwitter;

namespace UBuilder.Domain.EntityRepository
{
    public class DesignsRepository : BaseRepository<Designs>, IDesignsRepository
    {
        public DesignsRepository(IDatabaseFactory databaseFactory)
            : base(databaseFactory)
        {
        }

        /// <summary>
        /// Get all designs
        /// </summary>
        /// <returns>List of designs</returns>
        public List<DesignsOut> GetDesigns()
        {
            var query = GetAll().OrderByDescending(x => x.Created);

            var result = (from re in query
                          select new DesignsOut
                          {
                              ID = re.ID,
                              DealerId = re.DealerId,
                              ProductId = re.ProductId,
                              Quantities = re.Quantities,

                              UserId = re.UserId,
                              ModifiedTime = re.LastUpdated.Value,
                              ProductCategory = re.Category,
                              DesignGUID = re.DesignGUID.ToString(),
                              Status = re.Status,
                              Notes = re.Notes,
                              Sort = re.Sort,
                              LoginEmail=re.LoginEmail,
                              FirstName=re.FirstName
                          });
            return new List<DesignsOut>(result);
        }

        //Get all design for admin user
        public List<DesignsOut> GetDesignsAdmin()
        {
            var query = GetAll().OrderByDescending(x => x.Created);

            var result = (from re in query
                          select new DesignsOut
                          {
                              ID = re.ID,
                              DealerId = re.DealerId,
                              ProductId = re.ProductId,
                              Quantities = re.Quantities,

                              UserId = re.UserId,
                              ModifiedTime = re.LastUpdated.Value,
                              ProductCategory = re.Category,
                              DesignGUID = re.DesignGUID.ToString(),
                              Status = re.Status,
                              Notes = re.Notes,
                              Sort = re.Sort,
                              LoginEmail=re.LoginEmail,
                              FirstName=re.FirstName
                          });
            return new List<DesignsOut>(result);
        }        
        public List<DesignsOut> GetRequests(int pageindex, int pagesize)
        {
            //var reject = GetAll().Where(x => x.UserId.StartsWith("-"));
            //var query1 = GetAll().Where(x => x.UserId !="-1" && x.DealerId !="-1").Except(reject).OrderByDescending(x => x.Created).Skip(pageindex * pagesize).Take(pagesize); ;
            // var query = GetAll().Where(x => !x.UserId.StartsWith("-") && (x.Status == "" || x.Status == "")).OrderByDescending(x => x.Created).ThenByDescending(x => x.LastUpdated).Skip(pageindex * pagesize).Take(pagesize);
            //var query = GetAll().Where(x => !x.UserId.StartsWith("-") && (x.Status == "in-cart" || x.Status == "with-dealer")).OrderByDescending(x => x.Created).ThenByDescending(x=>x.LastUpdated).Skip(pageindex * pagesize).Take(pagesize); 
            var query = GetAll().Where(x => !x.UserId.StartsWith("-1") && x.DealerId!="NO_DEALER" && (x.Status == "in-cart" || x.Status == "with-dealer")).OrderByDescending(x => x.LastUpdated).Skip(pageindex * pagesize).Take(pagesize);
            var result = (from re in query
                          select new DesignsOut 
                          {
                              ID = re.ID,
                              DealerId = re.DealerId,
                              ProductId = re.ProductId,
                              Quantities = re.Quantities,
                              UserId = re.UserId,
                              ModifiedTime = re.LastUpdated.Value,
                              ProductCategory = re.Category,
                              DesignGUID = re.DesignGUID.ToString(),
                              Status = re.Status,
                              Notes = re.Notes,
                              Sort = re.Sort,
                              LoginEmail = re.LoginEmail,
                              FirstName = re.FirstName,
                              LastName = re.LastName
                          });//.Distinct().ToList();
            return new List<DesignsOut>(result);
        }

        public int GetRequestsCount()
        {
            var query = GetAll().Where(x => !x.UserId.StartsWith("-1") && (x.Status == "in-cart" || x.Status == "with-dealer")).Count();            
            return query;
        }

        public List<DesignsOut> GetSearchResult(SearchModel model)
        {
            var query = GetAll().Where(x => !x.UserId.StartsWith("-1") && (x.Status == "in-cart" || x.Status == "with-dealer"));
            if (model != null)
            {
                if (!string.IsNullOrEmpty(model.ProductID))
                    query = query.Where(x => x.ProductId.StartsWith(model.ProductID));
                if (!string.IsNullOrEmpty(model.Category))
                    query = query.Where(x => x.Category == model.Category);
                if (model.startDate.HasValue)
                    query = query.Where(x => x.LastUpdated >= model.startDate);
                if (model.endDate.HasValue)
                    query = query.Where(x =>x.LastUpdated <= model.endDate);
                if (!string.IsNullOrEmpty(model.Cartstatus))
                    query = query.Where(x => x.Status == model.Cartstatus);
                if (!string.IsNullOrEmpty(model.designID))
                {
                    Guid guid = new Guid(model.designID);
                    query = query.Where(x => x.DesignGUID == guid);
                }
                if (!string.IsNullOrEmpty(model.LoginEmail))
                {
                    query = query.Where(x => x.LoginEmail == model.LoginEmail);
                }

            }
            query = query.OrderByDescending(x => x.LastUpdated).Skip(model.pageindex * model.pagesize).Take(model.pagesize);
            var result = (from re in query
                          select new DesignsOut
                          {
                              ID = re.ID,
                              DealerId = re.DealerId,
                              ProductId = re.ProductId,
                              Quantities = re.Quantities,
                              UserId = re.UserId,
                              ModifiedTime = re.LastUpdated.Value,
                              ProductCategory = re.Category,
                              DesignGUID = re.DesignGUID.ToString(),
                              Status = re.Status,
                              Notes = re.Notes,
                              Sort = re.Sort,
                              LoginEmail=re.LoginEmail,
                              FirstName=re.FirstName,
                              LastName=re.LastName
                          });
            return new List<DesignsOut>(result);
        }
        public int GetSearchResultCount(SearchModel model)
        {
            var query = GetAll().Where(x => !x.UserId.StartsWith("-1") && (x.Status == "in-cart" || x.Status == "with-dealer"));
            if (model != null)
            {
                if (!string.IsNullOrEmpty(model.ProductID))
                    query = query.Where(x => x.ProductId.StartsWith(model.ProductID));
                if (!string.IsNullOrEmpty(model.Category))
                    query = query.Where(x => x.Category == model.Category);
                if (model.startDate.HasValue)
                    query = query.Where(x => x.LastUpdated >= model.startDate);
                if (model.endDate.HasValue)
                    query = query.Where(x => x.LastUpdated <= model.endDate);
                if (!string.IsNullOrEmpty(model.Cartstatus))
                    query = query.Where(x => x.Status == model.Cartstatus);
                if (!string.IsNullOrEmpty(model.designID))
                {
                    Guid guid = new Guid(model.designID);
                    query = query.Where(x => x.DesignGUID == guid);
                }
                if (!string.IsNullOrEmpty(model.LoginEmail))
                {
                    query = query.Where(x => x.LoginEmail == model.LoginEmail);
                }
            }
            int result = query.OrderByDescending(x => x.LastUpdated).Count();
           
            return result;
        }

        public List<DesignsOut> GetDesigns(string UserID, int pageindex, int pagesize)
        {
            var query = GetAll().Where(x=> x.ParentGUID == null  && (x.UserId == UserID || x.DealerId == UserID) ).OrderByDescending(x => x.LastUpdated).Skip(pageindex * pagesize).Take(pagesize);

            var result = (from re in query
                          select new DesignsOut
                          {
                              ID = re.ID,
                              DealerId = re.DealerId,
                              ProductId = re.ProductId,
                              Quantities = re.Quantities,
                              UserId = re.UserId,
                              ModifiedTime = re.LastUpdated.Value,
                              ProductCategory = re.Category,
                              DesignGUID = re.DesignGUID.ToString(),
                              Status = re.Status,
                              Customization=re.Customization,
                              Notes = re.Notes,
                              Sort = re.Sort,                              
                              OriginalOrderNo=re.OriginalOrderNo,
                              FirstName=re.FirstName,
                              LoginEmail=re.LoginEmail
                          });
            return new List<DesignsOut>(result);
        }

        //Get all design for admin user
        public List<DesignsOut> GetDesignsAdmin(int pageindex, int pagesize)
        {
            var query = GetAll().Where(x => x.ParentGUID == null && x.UserId != "-1" && x.DealerId !="-1").OrderByDescending(x => x.LastUpdated).Skip(pageindex * pagesize).Take(pagesize);

            var result = (from re in query
                          select new DesignsOut
                          {
                              ID = re.ID,
                              DealerId = re.DealerId,
                              ProductId = re.ProductId,
                              Quantities = re.Quantities,
                              UserId = re.UserId,
                              ModifiedTime = re.LastUpdated.Value,
                              ProductCategory = re.Category,
                              DesignGUID = re.DesignGUID.ToString(),
                              Status = re.Status,
                              Customization = re.Customization,
                              Notes = re.Notes,
                              Sort = re.Sort,
                              OriginalOrderNo = re.OriginalOrderNo,
                              LoginEmail=re.LoginEmail,
                              FirstName=re.FirstName
                          });
            return new List<DesignsOut>(result);
        }

        public int GetUserDesigns(string UserID)
        {
            var query = GetAll().Where(x => x.ParentGUID == null && (x.UserId == UserID || x.DealerId == UserID)).OrderByDescending(x => x.LastUpdated).Count();
            return query;
        }
        public int GetAdminDesigns()
        {
            var query = GetAll().Where(x => x.ParentGUID == null && x.UserId !="-1" && x.DealerId !="-1").OrderByDescending(x => x.LastUpdated).Count();
    
            return query;
        }
        public string GetGUID(int orderID)
        {

            var query = GetById(orderID);
            if (query == null) throw new System.InvalidOperationException("Original Design cannot be located");
            return query.DesignGUID.ToString();
        }
        /// <summary>
        /// Get design by dealer ID
        /// </summary>
        /// <param name="dealerId"></param>
        /// <returns>List of Designs</returns>
        public List<DesignsOut> GetDesignsByDealerId(string dealerId)
        {
            var query = GetAll().Where(x => x.DealerId == dealerId).OrderByDescending(x => x.Created);

            var result = (from re in query
                          select new DesignsOut
                          {
                              DealerId = re.DealerId,
                              ProductId = re.ProductId,
                              Quantities = re.Quantities,
                              UserId = re.UserId,
                              ModifiedTime = re.LastUpdated.Value,
                              ProductCategory = re.Category,
                              DesignGUID = re.DesignGUID.ToString(),
                              Status = re.Status,
                              Notes = re.Notes,
                              Sort = re.Sort

                          });
            return new List<DesignsOut>(result);
        }



        /// <summary>
        /// Get a design by Design ID
        /// </summary>
        /// <param name="id"></param>
        /// <returns>A design</returns>
        public DesignOut GetDesign(string guid)
        {
            var query = GetAll().Where(x => x.DesignGUID == new Guid(guid)).OrderByDescending(x => x.Created);
            var result = (from re in query
                          select new DesignOut
                          {
                              ID = re.ID,
                              UserId = re.UserId,
                              DealerId = re.DealerId,
                              Quantities = re.Quantities,
                              Product = re.ProductId,
                              Customization = re.Customization,
                              Status = re.Status,
                              Notes = re.Notes,
                              OriginalOrderNo=re.OriginalOrderNo,                           
                              Sort = re.Sort
                          }).FirstOrDefault();
            return result;
        }
        /// <summary>
        /// Get status of a design by Design ID
        /// </summary>
        /// <param name="id"></param>
        /// <returns>status</returns>
        public string GetOrderStatus(string guid)
        {
            var query = GetAll().Where(x => x.DesignGUID == new Guid(guid)).OrderByDescending(x => x.Created);

            var result = (from re in query
                          select new DesignOut
                          {
                              ID = re.ID,
                              UserId = re.UserId,
                              DealerId = re.DealerId,
                              Quantities = re.Quantities,
                              Product = re.ProductId,
                              Customization = re.Customization,
                              Status = re.Status,
                              Notes = re.Notes,
                              Sort = re.Sort
                          }).FirstOrDefault();
            if (result == null) throw new System.InvalidOperationException("Order cannot be located");
            return result.Status;
        }


        /// <summary>
        /// Get designs for the dealer for the assigned dealer and created by the dealer
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public List<DesignsOut> GetDesignForDealerAndUser(string id)
        {
            var query = GetAll().Where(x => x.UserId == id || x.DealerId == id).OrderByDescending(x => x.Created);
            var result = (from re in query
                          select new DesignsOut
                          {
                              DealerId = re.DealerId,
                              ProductId = re.ProductId,
                              Quantities = re.Quantities,
                              UserId = re.UserId,
                              ModifiedTime = re.LastUpdated.Value,
                              ProductCategory = re.Category,
                              DesignGUID = re.DesignGUID.ToString(),
                              Status = re.Status,
                              Notes = re.Notes,
                              Sort = re.Sort
                          });
            return new List<DesignsOut>(result);
        }

        /// <summary>
        /// Deulicates a design for a given Desing ID
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public DuplicateDesign DuplicateExistingDesign(int id, string userID)
        {
            var query = GetById(id);

            if (query == null) throw new System.InvalidOperationException("Original Design cannot be located");
            var guid = Guid.NewGuid();
            Designs newDesign = new Designs();
            EntityHelper.CopyPropertyValues(query, newDesign);
            newDesign.DesignGUID = guid;
            newDesign.UserId = userID;
            newDesign.Status = "NEW";
            newDesign.DealerId = null;
            // newDesign.ParentID = null;
            //for copy functonilaty in kit locker
            //Start
            if (query.ParentID == 0)
            {
                newDesign.ParentID = 0;
            }
            else
            {
                newDesign.ParentID = null;
            }
            //End

            //26/3/2019  //In Db Last_Modified Date will be updated 
            newDesign.LastUpdated = DateTime.UtcNow;
            SaveOrUpdate(newDesign);

            //Important--Get browsed images after Copy the designs in "My Locker".copyId is used for creating new directory

            int copyId = newDesign.ID;

            //If parentID is zero then duplicate all of its child designs
            if (query.ParentID == 0)
            {
                Designs newDesign1 = null;
                var ChildDesigns = GetAll().OrderByDescending(x => x.ID).Where(x => x.ParentID == query.ID).ToList().OrderBy(c => c.ID);
                foreach (var item in ChildDesigns)
                {
                    var Kitguid = Guid.NewGuid();
                    // Designs newDesign1 = new Designs();
                    newDesign1 = new Designs();
                    EntityHelper.CopyPropertyValues(item, newDesign1);
                    newDesign1.DesignGUID = Kitguid;
                    newDesign1.UserId = userID;
                    newDesign1.Status = "NEW";
                    newDesign1.DealerId = null;
                    newDesign1.ParentGUID = guid;

                    //newDesign1.ParentID = null;

                    //for copy functonilaty in kit locker
                    newDesign1.ParentID = newDesign.ID;

                    //26/3/2019  //In Db Last_Modified Date will be updated 
                    newDesign1.LastUpdated = DateTime.UtcNow;
                    SaveOrUpdate(newDesign1);
                }
            }
            //Important--Get browsed images after Copy the designs in "My Locker"
            //Start         
            if (id > 0)
            {
                string StId = id.ToString();
                IsFileOrPathExist(StId, out string SourcePathPath, out bool status);
                if (status)
                {
                    string[] getAllImages = Directory.GetFiles(SourcePathPath);
                    if (getAllImages.Length > 0)
                    {
                        string NewId = copyId.ToString();
                        //Replace one substring with another
                        var DestinationPath = SourcePathPath.Replace(StId, NewId);
                        if (!File.Exists(DestinationPath))
                        {
                            Directory.CreateDirectory(DestinationPath);
                        }
                        //Copy images from source to destination position
                        foreach (string image in getAllImages)
                        {
                            string fileName = Path.GetFileName(image);
                            string sourceFile = Path.Combine(SourcePathPath, fileName);
                            string destFile = Path.Combine(DestinationPath, fileName);
                            File.Copy(sourceFile, destFile, true);
                        }
                    }
                }
            }
            //End
            var returnid = GetAll().OrderByDescending(x => x.ID).Select(x => x.ID).FirstOrDefault();
            return new DuplicateDesign { Id = returnid, guid = guid.ToString() };
        }

        //Important--Get browsed images after Copy the designs in "My Locker"
        public void IsFileOrPathExist(string id, out string path, out bool status)
        {
            //Assign Out parameters in each condition
            path = "";
            var FolderPath = System.Web.HttpContext.Current.Server.MapPath("~/UploadFiles/imgFolder/AcutalBrowserdImage_" + id + "/" + id);
            if (!Directory.Exists(FolderPath))
            {
                // Directory is not exist      
                status = false;
            }
            else
            {
                string[] filesindirectory = Directory.GetFiles(FolderPath);
                var length = filesindirectory.Length;
                if (length > 0)
                {
                    // Images are Exist In Directory
                    path = FolderPath;
                    status = true;
                }
                else
                {
                    // Images are not Exist In Directory        
                    status = false;
                }
            }
        }


        /// <summary>
        /// Deletes a design
        /// </summary>
        /// <param name="id"></param>
        /// 

        public bool DeleteDesign(int id)
        {
            if (DesignCanBeDeleted(id))
            {
                var query = GetById(id);
                if (query == null)
                {
                    return false;
                }
                {
                    Delete(query);
                    DataContext.ObjectContext().SaveChanges();
                    return true;
                }
            }
            {
                return false;
            }
        }
        public bool DeleteDesign2(int id, bool isDealer, string dealerID, string userID, ref string errorText,string isAdmin)
        {
            if (DesignCanBeDeleted2(id, isDealer, dealerID, userID, ref errorText,isAdmin))
            {
                var query = GetById(id);
                if (query == null)
                {
                    errorText = "Order not found.";
                    return false;
                }
                else{
                    Delete(query);
                    DataContext.ObjectContext().SaveChanges();
                    return true;
                }
            }
            else
            {
                // errorText should have been set by fn
                return false;
            }
        }

        /// <summary>
        /// Check a design was Assign for a given Design ID and Dealer ID
        /// </summary>
        /// <param name="id"></param>
        /// <param name="delearId"></param>
        /// <returns>Boolean</returns>
        private bool IsDealerOfDesign(int id, string delearId)
        {
            var query = GetById(id);
            if (query.DealerId == delearId)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        /// <summary>
        /// qz 9/4/15 added -- Check if a design is deletable by status
        /// </summary>
        /// <param name="id"></param>
        /// <param name="status"></param>
        /// <returns>Boolean</returns>
        private bool DesignCanBeDeleted(int id)
        {
            var query = GetById(id);
            if (query == null)
            {
                return false;
            }
            else
            {
                if ((query.Status != "ordered") && (query.Status != "in-cart"))
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
        }

        /// <summary>
        /// qz 9/4/15 added -- Check if a design is deletable by status
        /// sw 2/21/17 removed dealer check
        /// sw 3/13/17 Re-added and fixed dealer check
        /// </summary>
        /// <param name="id"></param>
        /// <param name="status"></param>
        /// <returns>Boolean</returns>
        private bool DesignCanBeDeleted2(int id, bool isDealer, string dealerID, string userID, ref string errorText,string isAdmin)
        {
            var query = GetById(id);

            if (query == null)
            {
                errorText = "Order cannot be located";
                return false;
            }
            else
            {
                /*
                 * // Sam removed this check 2/21/2017 - the dealer check is invalid
                 * // 03/13/17: Sam fixed to check if the design is assigned to the dealer
                 */

                //Allow Admin to delete design created by any User!
                if (!string.IsNullOrEmpty(isAdmin))
                {
                    string Admin = Encript.Decrypt(isAdmin, "sblw-3hn8-sqoy19");
                    if (Admin == "true")
                    {
                        return true;
                    }
                }
              
                if (query.Status == "with-dealer")
                {
                    if (query.DealerId != userID)
                    {
                        errorText = "Cannot delete Order " + id + ". It is not assigned to Dealer ID '" + dealerID;
                        return false;
                    }

                    return true;
                }
                // Only delete orders that are still NEW
                else if ((query.Status != "NEW"))
                {
                    errorText = "Order " + id + " with status '" + query.Status + "' cannot be deleted by user " + userID;
                    return false;
                }

                // Only delete your own orders
                if (query.UserId != userID)
                {
                    errorText = "Order " + id + " does not belong to ID '" + userID;
                    return false;
                }



                // If we got here, okay to delete
                return true;
            }
        }

        /// <summary>
        /// Check a design was Assign for a given Desing ID and User ID
        /// </summary>
        /// <param name="id"></param>
        /// <param name="userId"></param>
        /// <returns>Boolean</returns>
        private bool IsUserOfDesign(int id, string userId)
        {
            var query = GetById(id);
            if (query.DealerId == userId)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        /// <summary>
        /// Deletes a design by Dealer ID
        /// </summary>
        /// <param name="id"></param>
        /// <param name="delearId"></param>  
        /// <returns>Boolean</returns>
        public bool DeleteDesignByDealer(int id, string dealerId)
        {
            if (IsDealerOfDesign(id, dealerId))
            {
                var query = GetById(id);
                query.DealerId = null;
                SaveOrUpdate(query);
                return true;
            }
            else
            {
                return false;
            }
        }

        /// <summary>
        /// Saves a design
        /// </summary>
        /// <param name="id"></param>
        /// <param name="productId"></param>
        /// <param name="category"></param>
        /// <param name="customization"></param>
        /// <param name="quantities"></param>
        /// /// <param name="status"></param>
        public bool SaveDesign(int id, string productId, string category, string customization, string quantities, string status)
        {
            var query = GetById(id);
            if (query == null)
            {
                Designs newDesign = new Designs();
                newDesign.DesignGUID = Guid.NewGuid();
                newDesign.ProductId = productId;
                newDesign.Category = category;
                newDesign.Customization = customization;
                newDesign.Quantities = quantities;
                newDesign.Created = DateTime.Now;
                newDesign.Status = "NEW";
                SaveOrUpdate(newDesign);
                return true;
            }
            else
            {
                //
                // permission revision 1/28
                // is this order editable?
                if (query.Status == "in-cart" || query.Status == "ordered" || query.Status == "processing" || query.Status == "on-hold")
                {
                    throw new System.InvalidOperationException("Order with status '" + query.Status + "' cannot be edited");

                }
                else
                {
                    // if dealer, does this person own the order

                    query.ProductId = productId;
                    query.Category = category;
                    query.Customization = customization;
                    query.Quantities = quantities;
                    query.Status = status;
                    SaveOrUpdate(query);
                    return true;

                }

            }

        }

        /// <summary>
        /// Saves a design
        /// </summary>
        /// <param name="id"></param>
        /// <param name="productId"></param>
        /// <param name="category"></param>
        /// <param name="customization"></param>
        /// <param name="quantities"></param>
        /// /// <param name="status"></param>
        public bool SaveDesign2(DesignIn di, bool isDealer, string dealerID, string userID, ref int ID, ref string errorText)
        {
            var query = GetById(di.id);

            if (query == null)
            {
                Designs newDesign = new Designs();
                newDesign.DesignGUID = Guid.NewGuid();
                newDesign.ProductId = di.productId;
                newDesign.Category = di.category;
                newDesign.Customization = di.customization;
                newDesign.Quantities = di.quantities;
                newDesign.Created = DateTime.Now;
                newDesign.Status = "NEW";
                newDesign.OriginalOrderNo = di.OriginalOrderNo;
                newDesign.LoginEmail = di.LoginEmail;

                newDesign.FirstName = di.FirstName;
                newDesign.LastName = di.LastName;


                //Important--Update UserId anfter login store site(set UserId to logged In id)
                newDesign.UserId = di.UserId;




                if (isDealer)
                {
                    //newDesign.DealerId = dealerID;
                    newDesign.UserId = userID;
                }
                else
                {
                    newDesign.UserId = userID;
                }

                SaveOrUpdate(newDesign);

                ID = newDesign.ID;

                return true;
            }
            else
            {
                //Allow Admin to Edit designs created by ither users
                if (di.IsAdmin == true)
                {
                    query.UserId = userID;
                    query.ProductId = di.productId;
                    query.Category = di.category;
                    query.Customization = di.customization;
                    query.Quantities = di.quantities;
                    query.Status = di.Status;
                    query.LastUpdated = DateTime.UtcNow;
                    query.OriginalOrderNo = di.OriginalOrderNo;
                    query.LoginEmail = di.LoginEmail;
                    query.FirstName = di.FirstName;
                    query.LastName = di.LastName;
                    SaveOrUpdate(query);

                    return true;
                }
                // permission revision 1/28
                // is this order editable?
                if (query.Status == "in-cart" || query.Status == "ordered" || query.Status == "processing" || query.Status == "on-hold")// || query.Status == "with-dealer")
                {
                    errorText = "Order with status '" + query.Status + "' cannot be edited";
                    return false;
                }
                else
                {
                    //Important--Update UserId anfter login store site(set UserId to logged In id)
                    query.UserId = di.UserId;
                    // query.UserId = userID;
                    query.ProductId = di.productId;
                    query.Category = di.category;
                    query.Customization = di.customization;
                    query.Quantities = di.quantities;
                    query.Status = di.Status;
                    query.OriginalOrderNo = di.OriginalOrderNo;
                    query.LoginEmail = di.LoginEmail;
                    query.FirstName = di.FirstName;
                    query.LastName = di.LastName;
                    // new mab 5/6 need update date
                    query.LastUpdated = DateTime.UtcNow;
                    SaveOrUpdate(query);
                    return true;
                }
            }
        }


        /// <summary>
        /// updates the status of a design
        /// </summary>
        /// <param name="id"></param>
        /// /// <param name="status"></param>
        /// 
        // 11/3/2019
        //public bool EmailDesign2Submit(string guid, string userName, string userEmail, string recipientEmail, string message, string Front, string back, string left, string right, string CurrentPageUrl, ref string errorText)
        public bool EmailDesign2Submit(string guid, string userName, string userEmail, string recipientEmail, string message,string CurrentPageUrl,string OriginalOrderNo,string[] CaptureImagePath, ref string errorText)
        {
            try
            {
                EmailHelper mail = new EmailHelper();

                // mail.ToAddress = "ckub2019@gmail.com";
                // mail.FromAddress = "softprodigy.testing@gmail.com";           

                mail.FromAddress = userEmail;
                mail.ToAddress = recipientEmail;
                mail.FromName = userName;

                if (ConfigurationManager.AppSettings["devmode"] == "1")
                {
                    mail.ToAddress = ConfigurationManager.AppSettings["devmodeEmail"];
                }
                mail.ToName = "";
                string s="";
                //string s = "<html>User: @userName<br/>Email: @userEmail<br/>Created this item using Cliff Keen Athletics Uniform Builder<br/>Attached are the custom designs, please contact sales@cliffkeen.com if you have any questions<br/>Below is the custom product ID<br/>Order GUID Link: @CurrentUrl<br/>Notes: @Notes</html>";
                if ((OriginalOrderNo=="" || OriginalOrderNo==null)&& (CaptureImagePath==null|| CaptureImagePath.Length==0))
                {
                    s = "<html>User: @userName<br/>Email: @userEmail<br/>Created this item using Cliff Keen Athletics Uniform Builder<br/><br/>Below is the custom product ID link - Select the link to view the custom Design<br/>Order GUID Link: @CurrentUrl<br/><br/>Please contact sales@cliffkeen.com or call Customer Service at 800-992-0799 if you have any questions.<br/><br/>Notes: @Notes</html>";

                    s = s.Replace("@userName", userName);
                    s = s.Replace("@userEmail", userEmail);
                    s = s.Replace("@guid", guid);
                    s = s.Replace("@Notes", message);
                    s = s.Replace("@CurrentUrl", CurrentPageUrl);

                }
                else
                {                 
                    s = "<html>User: @userName<br/>Email: @userEmail<br/>Created this item using Cliff Keen Athletics Uniform Builder<br/><br/>Below is the custom product ID link - Select the link to view the custom Design<br/>Original Order No:@OriginalOrderNo<br/>Order GUID Link: @CurrentUrl<br/><br/>Please contact sales@cliffkeen.com or call Customer Service at 800-992-0799 if you have any questions.<br/><br/>Notes: @Notes</html>";
                    s = s.Replace("@userName", userName);
                    s = s.Replace("@userEmail", userEmail);
                    s = s.Replace("@guid", guid);
                    s = s.Replace("@Notes", message);
                    s = s.Replace("@CurrentUrl", CurrentPageUrl);
                    s = s.Replace("@OriginalOrderNo", OriginalOrderNo);
                 
                }
               
                mail.Subject = "Cliff Keen Dealer Email";
                mail.Body = s;
                mail.IsHtml = true;
                // mail.SendEmail();
                mail.SendEmailSubmit(CaptureImagePath);

                //MailMessage mail = new MailMessage();
                //mail.From = new MailAddress(userEmail);
                //mail.To.Add(recipientEmail);
                //mail.Subject = "Welcome to Cliff Keen";
                //mail.IsBodyHtml = true;

                //mail.Body = "<a href='" + deepLinkUrl + "' target='_blank'>Click to view the design</a>";

                //SmtpClient smtp = new SmtpClient();
                //smtp.Send(mail);
                return true;
            }
            catch (System.Exception ex)
            {

                //handle the email exception
                throw;
                return false;
            }
        }
        public bool UpdateDesignStatus(int id, string status)
        {
            var query = GetById(id);
            if (query == null)
            {
                return false;
            }
            else
            {
                query.Status = status;
                query.LastUpdated = DateTime.UtcNow;
                SaveOrUpdate(query);
                return true;

            }

        }

        // SAM Notes 12/12/16: On a Design, dealerID of -1 means template that won't be modified.
        // Status column has to be "NEW" when doing user Match
        // Status column has to be either "NEW" or "with-dealer" when doing dealer match
        public bool CanModifyDesign(int id, bool isDealer, string UserID)
        {
            var query = GetById(id);

            if (query == null)
            {
                return false;
            }
            else
            {
                if (isDealer && query.DealerId != null)
                {
                    // DealerID has to match AND status has to be either "NEW" or "with-dealer"
                    string[] status = { "NEW", "with-dealer" };
                    if (query.DealerId != UserID || !status.Contains(query.Status))
                    {
                        return false;
                    }
                }
                else
                {
                    // UserID has to match AND status has to be "NEW"
                    if (query.UserId != UserID || query.Status != "NEW")
                    {
                        return false;
                    }

                }

                return true;
            }

        }

        /// <summary>
        /// Saves a design and check the valid Dealer for the Design
        /// </summary>
        /// <param name="id"></param>
        /// <param name="productId"></param>
        /// <param name="category"></param>
        /// <param name="customization"></param>
        /// <param name="quantities"></param>
        /// <param name="dealerId"></param>
        /// <returns>Boolean</returns>
        public bool SaveDesign(int id, string productId, string category, string customization, string quantities, string dealerId, string status)
        {
            if (IsDealerOfDesign(id, dealerId))
            {
                var query = GetById(id);
                query.ProductId = productId;
                query.Category = category;
                query.Customization = customization;
                query.Quantities = quantities;
                query.Status = status;
                SaveOrUpdate(query);
                return true;
            }
            else
            {
                return false;
            }
        }

        /// <summary>
        /// Assigns a design to Dealer by desing ID
        /// </summary>
        /// <param name="id"></param>
        /// <param name="dealerId"></param>
        /// <param name="dealerEmail"></param>
        /// <param name="message"></param>
        /// <returns>Boolean</returns>
        public bool AssignDesignToDealer(int id, string userID, string emailFrom, string dealerId, string dealerEmail, string message, ref string errorText)
        {
            var query = GetById(id);
            if (query != null)
            {
                if (query.UserId != userID)
                {
                    errorText = "Order " + id + " is not owned by userID (" + userID + ")";
                    return false;
                }
                else
                {
                    if (query.Status != "NEW")
                    {
                        errorText = "Order " + id + " cannot be assigned, status is " + query.Status;
                        return false;
                    }
                    else {

                        query.DealerId = dealerId;
                        query.EmailFrom = emailFrom;
                        query.EmailTo = dealerEmail;
                        query.EmailMessage = message;
                        query.Status = "with-dealer";
                        SaveOrUpdate(query);

                        return true;
                    }
                }
            }
            else
            {
                return false;
            }

        }
        /// <summary>
        /// Assign any design for user X to user Y 
        /// </summary>
        /// <param name="id"></param>
        /// <param name="dealerId"></param>
        /// <param name="dealerEmail"></param>
        /// <param name="message"></param>
        /// <returns>Boolean</returns>
        /// 

        //11/3/2019

        public bool AssignDesignToDealerSubmit(int id, string userID, string emailFrom, string dealerId, string dealerEmail, string message, ref string errorText)
        {
            var query = GetById(id);
            if (query != null)
            {
                if (query.UserId != userID)
                {
                    errorText = "Order " + id + " is not owned by userID (" + userID + ")";
                    return false;
                }
                else
                {
                    if (query.Status != "NEW")
                    {
                        errorText = "Order " + id + " cannot be assigned, status is " + query.Status;
                        return false;
                    }
                    else {

                        query.DealerId = dealerId;
                        query.EmailFrom = emailFrom;
                        query.EmailTo = dealerEmail;
                        query.EmailMessage = message;
                        //query.Image_path = ImagePath;  // Please check(Image_path)
                        query.Status = "with-dealer";
                        SaveOrUpdate(query);

                        return true;
                    }
                }
            }
            else
            {
                return false;
            }

        }




        public bool AssignDesignToUser(string tempUserID, string userID)
        {
            //Important--I think It will update all parent product userid -1 to loggged in userid in production server          
            var query = GetAll().Where(x => x.UserId == tempUserID && x.DealerId!="-1").ToList();

            if (query != null)
            {
                // Extra product will be added on a perticular user because it is update the existing userId

                //foreach (var item in query)
                //{
                //    item.UserId = userID;
                //    SaveOrUpdate(item);
                //}
                return true;
            }
            else
            {
                return false;
            }

        }
        /// <summary>
        /// EMails a design
        /// </summary>
        /// <param name="guid"></param>
        /// <param name="userEmail"></param>
        /// <param name="recipientEmail"></param>
        public bool EmailDesign(string guid, string userEmail, string recipientEmail)
        {
            try
            {
                var deepLinkUrl = ConfigurationManager.AppSettings["DEEPLINKURL"] + guid;

                EmailHelper mail = new EmailHelper();

                mail.FromAddress = userEmail;
                mail.FromName = "";

                mail.ToAddress = recipientEmail;
                if (ConfigurationManager.AppSettings["devmode"] == "1")
                {
                    mail.ToAddress = ConfigurationManager.AppSettings["devmodeEmail"];
                }
                mail.ToName = "";

                mail.Subject = "Welcome to Cliff Keen";
                mail.Body = "<a href='" + deepLinkUrl + "' target='_blank'>Click to view the design</a>";
                mail.IsHtml = true;

                mail.SendEmail();

                //MailMessage mail = new MailMessage();
                //mail.From = new MailAddress(userEmail);
                //mail.To.Add(recipientEmail);
                //mail.Subject = "Welcome to Cliff Keen";
                //mail.IsBodyHtml = true;

                //mail.Body = "<a href='" + deepLinkUrl + "' target='_blank'>Click to view the design</a>";

                //SmtpClient smtp = new SmtpClient();
                //smtp.Send(mail);
                return true;
            }
            catch (System.Exception ex)
            {
                //handle the email exception
                throw ex;
                return false;
            }
        }

        /// <summary>
        /// EMails a design
        /// </summary>
        /// <param name="guid"></param>
        /// <param name="userEmail"></param>
        /// <param name="recipientEmail"></param>
        public bool EmailDesign2(string guid, string userName, string userEmail, string recipientEmail,string message, ref string errorText)
        {
            try
            {

                EmailHelper mail = new EmailHelper();

                mail.FromAddress = userEmail;
                mail.FromName = userName;

                mail.ToAddress = recipientEmail;
                if (ConfigurationManager.AppSettings["devmode"] == "1")
                {
                    mail.ToAddress = ConfigurationManager.AppSettings["devmodeEmail"];
                }
                mail.ToName = "";

                string s = "<html>User: @userName<br/>Email: @userEmail<br/>Order GUID: @guid<br/>Notes: @Notes</html>";

                s = s.Replace("@userName", userName);
                s = s.Replace("@userEmail", userEmail);
                s = s.Replace("@guid", guid);
                s = s.Replace("@Notes", message);


                mail.Subject = "Cliff Keen Dealer Email";
                mail.Body = s;
                mail.IsHtml = true;

                mail.SendEmail();

                //MailMessage mail = new MailMessage();
                //mail.From = new MailAddress(userEmail);
                //mail.To.Add(recipientEmail);
                //mail.Subject = "Welcome to Cliff Keen";
                //mail.IsBodyHtml = true;

                //mail.Body = "<a href='" + deepLinkUrl + "' target='_blank'>Click to view the design</a>";

                //SmtpClient smtp = new SmtpClient();
                //smtp.Send(mail);
                return true; 
            }
            catch (System.Exception ex)
            {
                //handle the email exception
                throw;
                return false;
            }
        }
        /// <summary>
        /// Uploads an image for the design
        /// </summary>
        /// <param name="id"></param>
        /// <param name="file"></param>
        /// <returns></returns>
        /// 

        // 11/3/2019
        public bool EmailDesign2Test(string guid, string userName, string userEmail, string recipientEmail, string message, string ImagePath, ref string errorText)
        {
            try
            {
                EmailHelper mail = new EmailHelper();

                // mail.FromAddress = userEmail;
                mail.FromAddress = "deepak.fartiyal045@gmail.com";
                mail.FromName = userName;

                // mail.ToAddress = recipientEmail;
                mail.ToAddress = "ckub2019@gmail.com";
                if (ConfigurationManager.AppSettings["devmode"] == "1")
                {
                    mail.ToAddress = ConfigurationManager.AppSettings["devmodeEmail"];
                }
                mail.ToName = "";

                LinkedResource logo = new LinkedResource(ImagePath);
                logo.ContentId = "CustomizedProduct";

                string s = "<html>User: @userName<br/>Email: @userEmail<br/>Order GUID: @guid<br/>Notes: @Notes<br/><body><img src=cid:CustomizedProduct/>" +
      "<br></body></html>";

                s = s.Replace("@userName", userName);
                s = s.Replace("@userEmail", userEmail);
                s = s.Replace("@guid", guid);
                s = s.Replace("@Notes", message);
                s = s.Replace("@ImagePath",ImagePath);

                string strMailContent = "You can include your text here";

                AlternateView av1 = AlternateView.CreateAlternateViewFromString(
        "<html><body><img src=cid:CustomizedProduct/>" +
        "<br></body></html>" + strMailContent,
        null, MediaTypeNames.Text.Html);

                av1.LinkedResources.Add(logo);

                MailMessage msg = new MailMessage();
                msg.AlternateViews.Add(av1);
                msg.IsBodyHtml = true;

                mail.Subject = "Cliff Keen Dealer Email";
                mail.Body = s;
                mail.IsHtml = true;
                mail.SendEmail();

                //MailMessage mail = new MailMessage();
                //mail.From = new MailAddress(userEmail);
                //mail.To.Add(recipientEmail);
                //mail.Subject = "Welcome to Cliff Keen";
                //mail.IsBodyHtml = true;

                //mail.Body = "<a href='" + deepLinkUrl + "' target='_blank'>Click to view the design</a>";

                //SmtpClient smtp = new SmtpClient();
                //smtp.Send(mail);
                return true;
            }
            catch (System.Exception ex)
            {
                //handle the email exception
                throw;
                return false;
            }
        }

        public string UploadImage(int id, HttpPostedFile file)
        {
            string path = Constants.basicPath + "\\" + Constants.imgFolder + "\\" + id.ToString();
            Helper.FileHelper.CheckFileExistsOrCreate(path);
            var filePath = path + "\\" + file.FileName;
            file.SaveAs(filePath);
            var query = GetById(id);
            query.Image_path = filePath;
            SaveOrUpdate(query);
            return path;
        }
        public string UploadImage2(int id, FileInfo file, string fileName, string destFilePath)
        {

            string ImageGuid = Guid.NewGuid().ToString();
            string path = destFilePath + "\\" + id.ToString();
            var ActutalBwoseredFilesPath = destFilePath + "\\AcutalBrowserdImage_"+ id.ToString()+"\\"+id.ToString();

            Helper.FileHelper.CheckFileExistsOrCreate(path);
            Helper.FileHelper.CheckFileExistsOrCreate(ActutalBwoseredFilesPath);

            string ext = Path.GetExtension(fileName);
           // var result = Path.GetFileNameWithoutExtension(fileName);
           // fileName = result + ImageGuid + ext;

            var filePath = path + "\\" + fileName;
            var ActutalBwoseredImages = ActutalBwoseredFilesPath + "\\" + fileName;


            // Convert Eps,AI Image  to Png 

            // string ext = Path.GetExtension(fileName);
            // ext = ext.Substring(ext.Length - 4, 4).ToUpper();
            ext = ext.ToUpper();           
            if (ext == ".EPS" || ext == ".AI" || ext==".SVG" || ext == ".PDF") 
            {
                if (File.Exists(filePath))
                {
                    File.Delete(filePath);
                    File.Delete(ActutalBwoseredImages);
                }
                try
                {
                    file.CopyTo(filePath);
                  
                }
                catch
                {
                    return filePath;
                }

                //var readSettings = new MagickReadSettings();
                //if (ext == ".EPS")
                //{
                //    readSettings.ColorSpace = ColorSpace.sRGB;
                //}
                string FilePath = filePath;
                var ImgExtension = Path.GetExtension(FilePath);
                var GetDirectory = Path.GetDirectoryName(FilePath) + "\\";
                string EPSfile = FilePath.Substring(FilePath.LastIndexOf("\\") + 1);
                string Convertedfile = EPSfile.Remove(EPSfile.LastIndexOf("."));
                string[] dirs = Directory.GetFiles(GetDirectory, EPSfile);
                foreach (string EpsFilePath in dirs)
                {
                    // using (MagickImage image = new MagickImage(EpsFilePath, readSettings))
                    try
                    {
                        using (MagickImage image = new MagickImage(EpsFilePath))
                        {
                            //  make PNG image with white background transparent(Remove Back - Ground From Image)
                            image.TransparentChroma(Color.Black, Color.Blue);
                            image.BackgroundColor = new ColorMono(true);

                            // Q16 (Blue):
                            image.TransparentChroma(new MagickColor(0, 0, 0), new MagickColor(0, 0, 65535));
                            image.TransparentChroma(new ColorRGB(0, 0, 0), new ColorRGB(0, 0, 65535));
                            image.BackgroundColor = new MagickColor("#00f");
                            image.BackgroundColor = new MagickColor("#0000ff");
                            image.BackgroundColor = new MagickColor("#00000000ffff");

                            // With transparency (Red):
                            image.BackgroundColor = new MagickColor(65535, 0, 0, 32767);
                            image.BackgroundColor = new MagickColor("#ff000080");

                            // Q8 (Green):
                            image.TransparentChroma(new MagickColor(0, 0, 0), new MagickColor(0, 255, 0));
                            image.TransparentChroma(new ColorRGB(0, 0, 0), new ColorRGB(0, 255, 0));
                            image.BackgroundColor = new MagickColor("#0f0");
                            image.BackgroundColor = new MagickColor("#00ff00");
                            // image.Quality = 100;                           
                            image.Write(GetDirectory + Convertedfile + ".png");
                            //Copy the vector graphics image to the  the actualBrowsedimages folder when image magic convert to succesfully.
                            file.CopyTo(ActutalBwoseredImages);
                        }
                    }
                    catch(System.Exception ex)
                    {
                       
                    }                                                  
                }
                //string[] GetConvertedEpsImage = Directory.GetFiles(GetDirectory, Convertedfile + ImgExtension);
                string[] GetConvertedEpsImage = Directory.GetFiles(GetDirectory, Convertedfile+ ".png");
                foreach (string PnjFilePath in GetConvertedEpsImage)
                {
                    filePath = PnjFilePath;
                }
            }
            else
            {
                if (File.Exists(filePath))
                {
                    File.Delete(filePath);
                    File.Delete(ActutalBwoseredImages);                    
                }
                try
                {
                    file.CopyTo(ActutalBwoseredImages);
                    file.CopyTo(filePath);
                }
                catch
                {
                    return filePath;
                }
            }           
            //file.Delete();
            try
            {
                var query = GetById(id);
                query.Image_path = filePath;
                SaveOrUpdate(query);
            }
            catch
            { }
            return filePath;
        }

     

        /// <summary>
        /// Uploads a zip file for the design
        /// </summary>
        /// <param name="id"></param>
        /// <param name="file"></param>
        /// <returns></returns>
        public string UploadZip(int id, HttpPostedFile file)
        {
            string path = Constants.basicPath + "\\" + Constants.zipFolder + "\\" + id.ToString();
            Helper.FileHelper.CheckFileExistsOrCreate(path);
            var filePath = path + "\\" + file.FileName;
            file.SaveAs(filePath);
            var query = GetById(id);
            query.Zip_path = filePath;
            SaveOrUpdate(query);
            return path;
        }
        public bool UploadZip2(int id, FileInfo file, string fileName, string destFilePath, ref string errorText)
        {
            string path = destFilePath + "\\" + id.ToString();
            Helper.FileHelper.CheckFileExistsOrCreate(path);
            var filePath = path + "\\" + fileName;

            if (File.Exists(filePath))
            {
                try
                {
                    File.Delete(filePath);
                }
                catch (System.Exception ex)
                {
                    errorText = ex.Message;
                    return false;
                }
            }


            try
            {
                file.MoveTo(filePath);
            }
            catch (System.Exception ex)
            {
                errorText = ex.Message;
                return false;
            }

            var query = GetById(id);
            try
            {
                // did prior exist, if so  delete
                if (query.Zip_path != null && (File.Exists(filePath)))
                {
                    File.Delete(query.Zip_path);
                }

            }
            catch (System.Exception ex)
            {
                // It's kinda fine if the previous one can't get deleted.
                //errorText = ex.Message;
                //return false;
            }

            try
            {
                query.Zip_path = filePath;
                SaveOrUpdate(query);
            }
            catch (System.Exception ex)
            {
                errorText = ex.Message;
                return false;
            }

            return true;
        }

        //For Templates
        public List<Designs> GetAllTemplates()
        {
            //qz 11/12/15 modified templates criteria -- both user ID AND dealer ID need to be -1
            //var result = GetAll().Where(x => x.UserId.Equals(null) || x.DealerId.Equals(null)).OrderByDescending(x => x.Created).ToList();
            var result = GetAll().Where(x => x.UserId == "-1" && x.DealerId == "-1").OrderByDescending(x => x.Created).ToList();
            return result;
        }
        public List<Designs> GetAllKits()
        {           
            var result = GetAll().Where(x => x.UserId == "-1" && x.DealerId == "-1" && x.ParentID==0).OrderByDescending(x => x.Created).ToList();
            return result;
        }
        public List<Designs> GetKitsByCategory(string category)
        {
            List<Designs> lst = new List<Designs>();
            var result = GetAll().Where(x => x.UserId == "-1" && x.DealerId == "-1" && x.Category == category && x.ParentID==0).OrderByDescending(x => x.Created).ToList();
            return result;
        }
        public List<Designs> GetTemplatesByCategory(string category)
        {
            List<Designs> lst = new List<Designs>();
            //var result = GetAll().Where(x => x.UserId == "-1" && x.DealerId == "-1" && x.Category == category).OrderByDescending(x => x.Created).ToList();
            var result = GetAll().Where(x => x.UserId == "-1" && x.DealerId == "-1" && x.Category == category).ToList();//.OrderByDescending(x => x.ID).ToList();
           // var FinalData = result.OrderByDescending(x => x.ID).ToList();
            return result;
        }
        public List<DesignCategories> GetCategories()
        {
            List<DesignCategories> _lis = new List<DesignCategories>();
            var res = GetAll().Select(x => x.Category).Distinct();
            _lis = (from s in res select new DesignCategories { _category = s }).ToList();
            return _lis;
        }
        public List<GetProducts> ProductsOut(string ProductId)
        {
            List<GetProducts> _lst = new List<GetProducts>();
            var res = GetAll().Where(x => x.ProductId.StartsWith(ProductId));
            _lst = (from s in res select new GetProducts { _products = s.ProductId }).Distinct().ToList();

            return new List<GetProducts>(_lst);
        }
        public List<KitProduct> GetKitProduct(string Parentguid)
        {
            Guid id = new Guid(Parentguid);
            var query = GetAll().Where(x => x.ParentGUID == id).ToList();
            var result = (from re in query
                          select new KitProduct
                          {
                              ID = re.ID,
                              UserId = re.UserId,
                              DealerId = re.DealerId,
                              Quantities = re.Quantities,
                              Product = re.ProductId,
                              Customization = re.Customization,
                              Status = re.Status,
                              Notes = re.Notes,
                              Sort = re.Sort,
                              Guid = re.DesignGUID,
                              OriginalOrderNo=re.OriginalOrderNo
                          }).ToList();
               return result;
        }
        public List<DesignDetail> GetAllDesign(string DesignGuid)
        {
            List<DesignDetail> _lst = new List<DesignDetail>();
            Guid aGuid = new Guid(DesignGuid);
            var query = GetAll().Where(x => x.DesignGUID == aGuid).ToList();
            var query1 = GetAll().Where(x => x.ParentGUID == aGuid).ToList();
            var result = (from re in query
                          select new DesignDetail
                          {
                              id = re.ID,
                              UserId = re.UserId,
                              DealerId = re.DealerId,
                              productId = re.ProductId,
                              quantities = re.Quantities,
                              customization = re.Customization,
                              category = re.Category,
                              Description = re.Description,
                              Thumbnail = re.Thumbnails,
                              Status = re.Status,
                              Sort = Convert.ToString(re.Sort),
                              ParentID = Convert.ToString(re.ParentID),
                              ParentGUID = Convert.ToString(re.ParentGUID),
                              OriginalOrderNo = re.OriginalOrderNo                          
                          }).ToList();

            var result1 = (from re in query1
                          select new DesignDetail
                          {
                              id = re.ID,
                              UserId = re.UserId,
                              DealerId = re.DealerId,
                              productId = re.ProductId,
                              quantities = re.Quantities,
                              customization = re.Customization,
                              category = re.Category,
                              Description = re.Description,
                              Thumbnail = re.Thumbnails,
                              Status = re.Status,
                              Sort = Convert.ToString(re.Sort),
                              ParentID = Convert.ToString(re.ParentID),
                              ParentGUID = Convert.ToString(re.ParentGUID),
                              OriginalOrderNo=re.OriginalOrderNo                          
                          }).ToList();
            result.AddRange(result1);
            return result;
        }




    }

    public interface IDesignsRepository : IRepository<Designs>
    {
        List<DesignsOut> GetDesigns();
        List<DesignsOut> GetDesignsAdmin();
        int GetUserDesigns(string UserID);
        int GetAdminDesigns();
        List<DesignsOut> GetDesigns(string userID, int pageindex, int pagesize);
        List<DesignsOut> GetDesignsAdmin(int pageindex, int pagesize);
        
        DesignOut GetDesign(string id);
        DuplicateDesign DuplicateExistingDesign(int id, string userID);
        string GetOrderStatus(string guid);
        bool DeleteDesign(int id);
        bool DeleteDesign2(int id, bool isDealer, string dealerID, string userID, ref string errorText,string isAdmin);
        bool UpdateDesignStatus(int id, string status);
        bool CanModifyDesign(int id, bool isDealer, string userID);
        bool SaveDesign(int id, string productId, string category, string customization, string quantities, string status);
        bool SaveDesign2(DesignIn di, bool isDealer, string dealerID, string userID, ref int ID, ref string errorText);
        bool AssignDesignToDealer(int id, string userID, string emailFrom, string dealerId, string dealerEmail, string message, ref string errorText);
        bool AssignDesignToDealerSubmit(int id, string userID, string emailFrom, string dealerId, string dealerEmail, string message, ref string errorText);
        bool EmailDesign(string guid, string userEmail, string recipientEmail);
        bool EmailDesign2(string guid, string userName, string userEmail, string recipientEmail,string message, ref string errorText);
        //bool EmailDesign2Submit(string guid, string userName, string userEmail, string recipientEmail, string message, string Front, string Back, string Left, string right,string CurrentPageUrl,ref string errorText);
        bool EmailDesign2Submit(string guid, string userName, string userEmail, string recipientEmail, string message,string CurrentPageUrl,string OriginalOrderNo,string[] CaptureImagePath, ref string errorText);
        bool EmailDesign2Test(string guid, string userName, string userEmail, string recipientEmail, string message,string ImagePath, ref string errorText);
        string UploadImage(int id, HttpPostedFile file);
        string UploadImage2(int id, FileInfo file, string fileName, string destFilePath);
        string UploadZip(int id, HttpPostedFile file);
        bool UploadZip2(int id, FileInfo file, string fileName, string destFilePath, ref string errorText);
        List<DesignsOut> GetDesignsByDealerId(string dealerId);
        // PriceObjOut GetPrice(string sku);
        bool DeleteDesignByDealer(int id, string dealerId);
        bool SaveDesign(int id, string productId, string category, string customization, string quantities, string dealerId, string status);
        List<DesignsOut> GetDesignForDealerAndUser(string id);
        //For Templates
        List<Designs> GetAllTemplates();
        List<Designs> GetTemplatesByCategory(string category);
        bool AssignDesignToUser(string tempUserID, string userID);
        string GetGUID(int orderID);
        List<DesignsOut> GetRequests(int pageindex, int pagesize);
        int GetRequestsCount();
        List<DesignCategories> GetCategories();
        List<DesignsOut> GetSearchResult(SearchModel _model);
        int GetSearchResultCount(SearchModel _model);
        List<GetProducts> ProductsOut(string ProductId);

        ///KITS
        List<Designs> GetAllKits();
        List<Designs> GetKitsByCategory(string category);
        List<KitProduct> GetKitProduct(string guid);
        List<DesignDetail> GetAllDesign(string DesignGuid);
    }
}