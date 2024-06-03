using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace UBuilder.Models
{
    public class DealerViewModel
    {
        [Key]
        public string DealerID { get; set; }
        public string DealerName { get; set; }
        public string DealerEmail { get; set; }
    }
}