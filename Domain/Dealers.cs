using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace UBuilder.Domain
{
    [Table("Dealers")]
    public class Dealers : DomainObject 
    {
        //public int? ID { get; set; }
        public string DealerID { get; set; }

        [StringLength(80)]
        public string DealerName { get; set; }

        [StringLength(100)]
        public string DealerEmail { get; set; }
    }
}