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
            return librosCollection.Where(libro => libro.categories.Contains("Java")).OrderByDescending(p => p.publishedDate).Take(3);
        }

        public IEnumerable<Book> librosMasde400PaginasyTomar2()
        {
            return librosCollection.Where(libro => libro.pageCount > 400).Take(4).Skip(2);
        }

        public IEnumerable<Book> TresPrimeroLibroSelect()
        {
            return librosCollection.Take(3).Select(libro => new Book
            {
                Title = libro.Title,

                pageCount = libro.pageCount
            });
        }
        public int CantidadLibrosMasDe250()
        {
            //return librosCollection.Where(libro => libro.pageCount >= 250 && libro.pageCount <=500 ).Count();
            return librosCollection.Count(libro => libro.pageCount > 250 && libro.pageCount < 500);
        }

        public DateTime FechadePublicacionMenor()
        {
            return librosCollection.Min(libro => libro.publishedDate);
        }
        public int LibrosMasPaginas()
        { 
            return librosCollection.Max(libro => libro.pageCount);
        }

        public Book LibroConMenorPagina()
        {
            return librosCollection.Where(libro => libro.pageCount > 0).MinBy(p => p.pageCount);
        }

        public Book LibroFechaReciente()
        {
            return librosCollection.MaxBy(libro => libro.publishedDate);
        }

        public int sumadeTodasPainasentre0y500()
        {
            return librosCollection.Where(libro => libro.pageCount > 0 && libro.pageCount < 500).Sum(libro => libro.pageCount);
        }

        public string TitulosDespuesDel2015Concatenados()
        {
           return string.Join(", ", librosCollection.Where(libro => libro.publishedDate.Year > 2015).Select(libro => libro.Title));
        }

        public double promediocaracteresTitulos()
        {
             return librosCollection.Average(libro => libro.Title.Length);
        }

        public IEnumerable<IGrouping<int, Book>> LibrosDespues200Agrupados()
        {
            return librosCollection.Where(libro => libro.publishedDate.Year >= 2000).GroupBy(p => p.publishedDate.Year);
        }

        public ILookup<char, Book> DictionaryBookByChar()
        {
            // En el ToLookUp se pone los valores del diccionario que vas a retornar (char, book)
            return librosCollection.ToLookup(x => x.Title[0], x => x);
        }

        public IEnumerable<Book> librosconmasde500pagpub2005()
        {
            var colection = librosCollection.Where(p => p.publishedDate.Year > 2005);
            var resultado = librosCollection
              .Where(p => p.pageCount > 500)
              .Join(colection,
                  p => p.Title,
                  x => x.Title,
                  (p, x) => p);

            return resultado;
        }
    }
    }
