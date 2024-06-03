using System;
using System.Collections.Generic;
namespace UBuilder.Models
{
    public class DesignViewModel 
    {
        public int ID { get; set; }
        public Guid? DesignGUID { get; set; }
        public string ProductId { get; set; }
        public string Customization { get; set; }
        public string Category { get; set; }
        public string Zip_path { get; set; }
        public string Image_path { get; set; }
        public string Notes { get; set; }
        public string Description { get; set; }
        public List<string> Thumbnails { get; set; }
        public int Sort { get; set; }
        
    }
}