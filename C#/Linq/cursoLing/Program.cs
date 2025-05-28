//var frutas = new string[] { "Sandia", "Fresa", "Mango", "Mango de azúcar", "Mango Tomy" };

//var MangoList = frutas.Where(fruta => fruta.StartsWith("Mango")).ToList();

//MangoList.ForEach(mango => Console.WriteLine(mango));

using cursoLing;

LinqQueries queries = new LinqQueries();

//ImprimirValores(queries.TodaLaColeccion());

//ImprimirValores(queries.LibrosDespues200());

//ImprimirValores( queries.More250Pages());

//Console.WriteLine($"Todos los libros tienen estatus: {queries.TodosEstatus()}");

//Console.WriteLine($"Algun libro publicado 2005: {queries.AlgunLibroPublicado2005()}");

//ImprimirValores(queries.LibosdePython());
//ImprimirValores(queries.librosDeJava());
//ImprimirValores(queries.LibrosMas450Paginas());
//ImprimirValores(queries.TresPrimeroLibros());
//ImprimirValores(queries.librosMasde400PaginasyTomar2());
//ImprimirValores(queries.TresPrimeroLibroSelect());
//Console.WriteLine($"la cantidad de libros: {queries.CantidadLibrosMasDe250()}");
//Console.WriteLine($"La publicacion mas Antigua: {queries.FechadePublicacionMenor()}");
//Console.WriteLine($"Libro con mas paginas: {queries.LibrosMasPaginas()}");
//Console.WriteLine(queries.LibroConMenorPagina().Title);
//Console.WriteLine(queries.LibroFechaReciente().Title);
//Console.WriteLine(queries.sumadeTodasPainasentre0y500());
//Console.WriteLine(queries.TitulosDespuesDel2015Concatenados());
//Console.WriteLine(queries.promediocaracteresTitulos());
//ImprimirGrupo(queries.LibrosDespues200Agrupados());

var dictionaryLookup = queries.DictionaryBookByChar();
PrintDictionary(dictionaryLookup, 'A');



void ImprimirValores(IEnumerable<Book> libros)
{
    foreach (var libro in libros)
    {
        Console.WriteLine($"Titulo: {libro.Title}");
        Console.WriteLine($"Autores: {string.Join(", ", libro.authors)}");
        Console.WriteLine($"Categorias: {string.Join(", ", libro.categories)}");
        Console.WriteLine($"Fecha de Publicacion: {libro.publishedDate}");
        Console.WriteLine($"Descripcion: {libro.shortDescription}");
        Console.WriteLine($"Estado: {libro.status}");
        Console.WriteLine($"pageCount: {libro.pageCount}");
        Console.WriteLine(new string('-', 50));
    }
}

void ImprimirGrupo(IEnumerable<IGrouping<int, Book>> ListadeLibros)
{
    foreach (var grupo in ListadeLibros)
    {
        Console.WriteLine("");
        Console.WriteLine($"Grupo: {grupo.Key}");
        Console.WriteLine("{0,-60} {1, 15} {2, 15}\n", "Titulo", "N. Paginas", "Fecha publicacion");
        foreach (var item in grupo)
        {
            Console.WriteLine("{0,-60} {1, 15} {2, 15}", item.Title, item.pageCount, item.publishedDate.Date.ToShortDateString());
        }
    }
}

void PrintDictionary(ILookup<char, Book> bookList, char letter)
{
    Console.WriteLine("{0,-60} {1, 15} {2, 15}\n", "Titulo", "N. Paginas", "Fecha publicacion");
    foreach (var item in bookList[letter])
    {
        Console.WriteLine("{0,-60} {1, 15} {2, 15}", item.Title, item.pageCount, item.publishedDate.Date.ToShortDateString());
    }

}