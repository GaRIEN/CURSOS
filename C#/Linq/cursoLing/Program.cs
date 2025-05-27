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

ImprimirValores(queries.LibosdePython());


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