using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace UBuilder.Domain.Results
{
    public class Pricing
    {
        public string ProductCode { get; set; }
        public int Quantity { get; set; }
        public decimal UnitPrice { get; set; }
        public decimal TotalPrice { get; set; }
        public decimal DiscountPrice { get; set; }
    }

    public partial class PricingOutput : CallResult
    {
        public Pricing Data { get; set; }
    }
}