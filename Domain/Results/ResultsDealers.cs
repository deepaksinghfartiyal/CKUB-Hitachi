using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using UBuilder.Domain;
using UBuilder.Domain.Repository;
using UBuilder.Domain.Results;

namespace UBuilder.Domain.Results
{
    public class DealersOut
    {
        public string DealerID { get; set; }
        public string DealerName { get; set; }
        public string DealerEmail { get; set; }
    }
}