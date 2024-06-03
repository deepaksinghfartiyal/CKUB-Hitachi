namespace UBuilder.Domain
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;
    using System.Web.Mvc;

    [Table("Designs")]
    public partial class Designs : DomainObject
    {
        [Display(Name = "Design GUID")]
        public Guid? DesignGUID { get; set; }
        [Display(Name ="User ID")]
        public string UserId { get; set; }
        [Display(Name = "Dealer ID")]
        public string DealerId { get; set; }
        [Display(Name = "Product ID")]
        public string ProductId { get; set; }
        public string Quantities { get; set; }

        [Column(TypeName = "ntext")]
        public string Customization { get; set; }

        [StringLength(50)]
        public string Category { get; set; }

        [StringLength(250)]
        [Display(Name = "Zip Path")]
        public string Zip_path { get; set; }

        [StringLength(250)]
        [Display(Name = "Image Path")]
        public string Image_path { get; set; }

        [StringLength(50)]
        [Display(Name = "Email From")]
        public string EmailFrom { get; set; }

        [StringLength(150)]
        [Display(Name ="Email To")]
        public string EmailTo { get; set; }

        [StringLength(250)]
        [Display(Name = "Email Message")]
        public string EmailMessage { get; set; }

        [StringLength(1050)]
        [Display(Name = "Email Body")]
        public string EmailBody { get; set; }

        [AllowHtml]
        [Column(TypeName = "ntext")]
        public string Notes { get; set; }

        [StringLength(250)]
        public string Description { get; set; }

        [Column(TypeName = "ntext")]
        public string Thumbnails { get; set; }

        [StringLength(50)]
        public string Status { get; set; }

        public int Sort { get; set; }

        public int? ParentID { get; set; }

        public Guid? ParentGUID { get; set; }
        [StringLength(50)]
        public string OriginalOrderNo { get; set; }
        public string LoginEmail { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }

        public Designs()
        {
            if (DesignGUID != null)
            {
                DesignGUID = Guid.NewGuid();
            }
        }
    }
}
