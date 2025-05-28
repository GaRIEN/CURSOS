using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace cursoLing
{

    internal class LinqQueries
    {
        private List<Book> librosCollection = new List<Book>();
        public LinqQueries()
        {
            using (StreamReader reader = new StreamReader("books.json"))
            {
                string json = reader.ReadToEnd();
                this.librosCollection = JsonSerializer.Deserialize<List<Book>>(json, new System.Text.Json.JsonSerializerOptions() { PropertyNameCaseInsensitive = true });

            }
        }
        //clase para poder leer toda la coleccion
        public IEnumerable<Book> TodaLaColeccion()
        {
            return librosCollection;
        }

        public IEnumerable<Book> LibrosDespues200()
        {
            return librosCollection.Where(libros => libros.publishedDate.Year > 2000);
        }

        public IEnumerable<Book> More250Pages()
        {
            return librosCollection.Where(libros => libros.Title.Contains("in Action") && libros.pageCount > 250);
        }

        public bool TodosEstatus()
        {
            return librosCollection.All(libros => libros.status != string.Empty);
        }

        public bool AlgunLibroPublicado2005()
        {
            return librosCollection.Any(libros => libros.publishedDate.Year == 2005);
        }

        public IEnumerable<Book> LibosdePython()
        {
            return librosCollection.Where(libros => libros.categories.Contains("Python"));
        }

        public IEnumerable<Book> librosDeJava()
        {
            return librosCollection.Where(libros => libros.categories.Contains("Java")).OrderBy(p => p.Title);
        }

        public IEnumerable<Book> LibrosMas450Paginas()
        {
            return librosCollection.Where(libros => libros.pageCount > 450).OrderByDescending(p => p.pageCount);
        }
        public IEnumerable<Book> TresPrimeroLibros()
        {
            return librosCollection.Where(libro => libro.categories.Contains("Java")).OrderByDescending(p=>p.publishedDate).Take(3);
        }

        public IEnumerable<Book> librosMasde400PaginasyTomar2()
        {
            return librosCollection.Where(libro => libro.pageCount > 400).Take(4).Skip(2);
        }

    }
}
