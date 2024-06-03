using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using UBuilder.Helper;


namespace UBuilder.Domain.Results
{
    public class DesignsOut
    {
        public string UserId { get; set; }
        public string DealerId { get; set; }
        public string ProductId { get; set; }
        public string Quantities { get; set; }
        public int ID { get; set; }

        public string Product { get; set; }
        public string ProductCategory { get; set; }
        public string DesignGUID { get; set; }
        public DateTime? ModifiedTime { get; set; }

        public string Status { get; set; }
        public string Customization { get; set; }
        public string Notes { get; set; }
        public int Sort { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string OriginalOrderNo { get; set; }
        public string LoginEmail { get; set; }
    }

    public class DesignOut
    {
        public int ID { get; set; }
        public string UserId { get; set; }
        public string DealerId { get; set; }
        public string Quantities { get; set; }
        public string Customization { get; set; }
        public string Product { get; set; }
        public string Status { get; set; }
        public string Notes { get; set; }
        public int Sort { get; set; }
        public string OriginalOrderNo { get; set; }      
    }

    public class PriceObjOut
    {
        public string ProductCode { get; set; }
        public int Quantity { get; set; }
        public double UnitPrice { get; set; }
        public double TotalPrice { get; set; }
        public double DiscountPrice { get; set; }
    }
    public class KitProduct
    {
        public int ID { get; set; }
        public string UserId { get; set; }
        public string DealerId { get; set; }
        public string Quantities { get; set; }
        public string Customization { get; set; }
        public string Product { get; set; }
        public string Status { get; set; }
        public string Notes { get; set; }
        public int Sort { get; set; }
        public int ParentID { get; set; }
        public Guid? Guid { get; set; }
        public string OriginalOrderNo { get; set; }
    }
    public class DesignDetail
    {
        public int id { get; set; }
        public string UserId { get; set; }
        public string DealerId { get; set; }
        public string productId { get; set; }
        public string quantities { get; set; }
        public string customization { get; set; }
        public string category { get; set; }
        public string Description { get; set; }
        public string Thumbnail { get; set; }
        public string Status { get; set; }
        public string Sort { get; set; }
        public string ParentID { get; set; }
        public string ParentGUID { get; set; }
        public string IsSuccess { get; set; }
        public string Message { get; set; }
        public string OriginalOrderNo { get; set; }      
    }

   
    public class KitProductID
    {
        public string guid { get; set; }
    }

    public class PriceObj
    {
        public string ProductCode { get; set; }
    }

    public class DesignID
    {
        public string GUID { get; set; } // this is the GUID for design
    }

    public class DeleteDesignID
    {
        public int ID { get; set; } // this is the GUID for design
        public string IsAdmin { get; set; } // To distinguish Normal User and Admin

    }
    public class FileID
    {
        public int ID { get; set; } // this is the GUID for design
    }

    public class DuplicateDesignID
    {
        public int ID { get; set; } // this is the GUID for design
    }

    public class DealerIdentifier
    {
        public string DealerID { get; set; }
    }

    public class DesignGuidStatus
    {
        public string Guid { get; set; }
    }

    public class DealerMsg
    {
        public int ID { get; set; }
        public string dealerId { get; set; }
        public string dealerEmail { get; set; }
        public string message { get; set; }
    }

    public class DealerMsgSubmit
    {
        public int ID { get; set; }
        public string dealerId { get; set; }
        public string dealerEmail { get; set; }
        public string message { get; set; }
        public string ImagePath { get; set; }
        public string ImagePathFront { get; set; }
        public string ImagePathBack { get; set; }
        public string ImagePathLeft { get; set; }
        public string ImagePathRight { get; set; }
        public String CurrentPageUrl { get; set; }
        public String OriginalOrderNo { get; set; }
        public String[] CaptureImagePath { get; set; }

    }
    public class DealerMsgTest
    {
        public int ID { get; set; }
        public string dealerId { get; set; }
        public string dealerEmail { get; set; }
        public string message { get; set; }
        public string ImagePath { get; set; }
    }

    public class UserMsg
    {
        public string guid { get; set; }
        public string userEmail { get; set; }
        public string recipientEmail { get; set; }
    }

    public class DesignIn
    {
        public int id { get; set; }
        public string UserId { get; set; }
        public string DealerId { get; set; }
        public string category { get; set; }
        public string quantities { get; set; }
        public string customization { get; set; }
        public string productId { get; set; }
        public string Status { get; set; }
        public string Notes { get; set; }
        public int Sort { get; set; }
        public bool IsAdmin { get; set; }
        public string OriginalOrderNo { get; set; }
        public string LoginEmail { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }

    public class PriceLookupIn
    {
        public List<string> productId { get; set; }
    }

    public class UserIDInput
    {
        public string userID { get; set; }
    }

    public class DuplicateDesign
    {
        public int? Id { get; set; }

        public string guid { get; set; }
    }

    public class DesignStatusIn
    {
        public int id { get; set; }
        public string status { get; set; }
    }

    public class DesignCategories
    {
        public string _category { get; set; }
    }
    public class GetProducts
    {
        public string _products { get; set; }
    }
    public partial class GetDesignCategoriesOut : CallResult
    {
        public List<DesignCategories> Data { get; set; }
    }

    public partial class DuplicateDesignOut : CallResult
    {
        public DuplicateDesign Data { get; set; }
    }

    public partial class DesignOutput : CallResult
    {
        public DesignOut Data { get; set; }
    }

    public partial class GetDesignsOut : CallResult
    {
        public List<DesignsOut> Data { get; set; }
    }

    public partial class GetUserOut : CallResult
    {
        public LoginHelper.CurrentUser Data { get; set; }
    }

    public partial class GenericErrorOut : CallResult
    {
        public string Data { get; set; }
    }

    public partial class SaveDesignOut : CallResult
    {
        public string Data { get; set; }
    }

    public partial class AssignToDealerOut : CallResult
    {
        public string Data { get; set; }
    }

    public partial class EmailDesignOut : CallResult
    {
        public string Data { get; set; }
    }

    public partial class DeleteDesignOut : CallResult
    {
        public string Data { get; set; }
    }

    public partial class GetOrderStatusOut : CallResult
    {
        public string Data { get; set; }
    }

    public partial class UploadImageOut : CallResult
    {
        public string Data { get; set; }
    }

    public partial class UploadZipOut : CallResult
    {
        public string Data { get; set; }
    }

    public partial class DesignStatusOut : CallResult
    {
        public string Data { get; set; }
    }

    public partial class GetPricingOut : CallResult
    {
        public List<PriceObjOut> Data { get; set; }
       // public PriceObjOut Data { get; set; }
    }
    public partial class GetProductsOut : CallResult
    {
        public List<GetProducts> Data { get; set; }
    }
    public partial class kitProductOut : CallResult
    {
        public List<KitProduct> Data { get; set; }
    }
}