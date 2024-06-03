using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace UBuilder.Models
{
    public class SearchModel
    {
        public string ProductID { get; set; }
        public string Category { get; set; }
        public int pageindex { get; set; }
        public int pagesize { get; set; }
        public DateTime? startDate { get; set; }
        public DateTime? endDate { get; set; }
        public string Cartstatus { get; set; }
        public string designID { get; set; }
        public string LoginEmail { get; set; }


    }
    public class LockerModel
    {
        public int pageindex { get; set; }
        public int pagesize { get; set; }
    }
   
}