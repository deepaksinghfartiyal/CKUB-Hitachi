namespace UBuilder.Domain
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Pricing")]
    public partial class Pricing : DomainObject
    {
        public string ProductCode { get; set; }  
        public int Quantity { get; set; }  
        public double UnitPrice { get; set; }        
        public double TotalPrice { get; set; } 
        public double DiscountPrice { get; set; } 

    }
}
