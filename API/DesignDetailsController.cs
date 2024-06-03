using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using UBuilder.Domain.Results;
using UBuilder.Domain.EntityRepository;
using System.Web.Http.Description;

namespace UBuilder.API
{
    public class DesignDetailsController : ApiController
    {
        IDesignsRepository _DesignsDetailsRepository;

        public DesignDetailsController(IDesignsRepository DesignsDetailsRepository)
        {
            _DesignsDetailsRepository = DesignsDetailsRepository;
        }
        // GET: api/DesignDetails
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }
        // GET: api/DesignDetails/'0D72C7CF-3E46-4C4B-9E6D-B99AF2E4944D'
        #region GetProductDetails 

        [HttpGet]
        [ResponseType(typeof(List<DesignDetail>))]
        public IHttpActionResult GetProductDetails(string Guid)
        {
            DesignDetail Objdesigndetail = new DesignDetail();
            List<DesignDetail> DesignDetail = new List<DesignDetail>();
            try
            {
                var GetDesignDetails = _DesignsDetailsRepository.GetAllDesign(Guid);
                if (GetDesignDetails.Count > 0 && GetDesignDetails != null)
                {
                    foreach (var item in GetDesignDetails)
                    {
                        Objdesigndetail.id = item.id;
                        Objdesigndetail.UserId = string.IsNullOrEmpty(item.UserId) ? "" : item.UserId;
                        Objdesigndetail.DealerId = string.IsNullOrEmpty(item.DealerId) ? "" : item.DealerId;
                        Objdesigndetail.productId = string.IsNullOrEmpty(item.productId) ? "" : item.productId;
                        Objdesigndetail.quantities = string.IsNullOrEmpty(item.quantities) ? "" : item.quantities;
                        Objdesigndetail.customization = string.IsNullOrEmpty(item.customization) ? "" : item.customization;
                        Objdesigndetail.category = string.IsNullOrEmpty(item.category) ? "" : item.category;
                        Objdesigndetail.Description = string.IsNullOrEmpty(item.Description) ? "" : item.Description;
                        Objdesigndetail.Thumbnail = string.IsNullOrEmpty(item.Thumbnail) ? "" : item.Thumbnail;
                        Objdesigndetail.Status = string.IsNullOrEmpty(item.Status) ? "" : item.Status;
                        Objdesigndetail.Sort = string.IsNullOrEmpty(item.Sort) ? "" : item.Sort;
                     //   Objdesigndetail.ParentID = string.IsNullOrEmpty(item.ParentID) ? "" : item.ParentID;
                       // Objdesigndetail.ParentGUID = string.IsNullOrEmpty(item.ParentGUID) ? "" : item.ParentGUID;
                        Objdesigndetail.IsSuccess = "True";
                        Objdesigndetail.Message = "Valid Details!!";
                        DesignDetail.Add(Objdesigndetail);
                    }
                }
                else
                {

                    Objdesigndetail.id = 0;
                    Objdesigndetail.UserId = "";
                    Objdesigndetail.DealerId = "";
                    Objdesigndetail.productId = "";
                    Objdesigndetail.quantities = "";
                    Objdesigndetail.customization = "";
                    Objdesigndetail.category = "";
                    Objdesigndetail.Description = "";
                    Objdesigndetail.Thumbnail = "";
                    Objdesigndetail.Status = "";
                    Objdesigndetail.Sort = "";
                    //Objdesigndetail.ParentID = "";
                    //Objdesigndetail.ParentGUID = "";
                    Objdesigndetail.IsSuccess = "False";
                    Objdesigndetail.Message = "No Record Found";
                    DesignDetail.Add(Objdesigndetail);
                }
            }
            catch (Exception ex)
            {
                Objdesigndetail.IsSuccess = "False";
                Objdesigndetail.Message = ex.Message;
                DesignDetail.Add(Objdesigndetail);

            }
            return Ok(DesignDetail) ;
        }


        #endregion


        // POST: api/DesignDetails
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/DesignDetails/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/DesignDetails/5
        public void Delete(int id)
        {
        }

        
    }
}
