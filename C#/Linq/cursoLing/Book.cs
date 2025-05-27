using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace cursoLing
{
    internal class Book
    {
        public string Title { get; set; }
        public int pageCount { get; set; }
        public DateTime publishedDate { get; set; }
        public string thumbnailUrl { get; set; }
        public string shortDescription { get; set; }
        public string status { get; set; }
        public string[] authors { get; set; }
        public string[] categories { get; set; }



    }
}
