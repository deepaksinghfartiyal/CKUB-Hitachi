using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace UBuilder.Domain
{
    [Table("Registration")]
    public class Registration : DomainObject
    {
        [StringLength(100)]
        [Display(Name = "User Name")]
        public string UserName { get; set; }
        [StringLength(100)]
        public string Email { get; set; }
        [StringLength(50)]
        public string Password { get; set; }
    }
}