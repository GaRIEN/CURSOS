using SingleResponsability;

StudentRepository studentRepository = new();
ExportHelpers exportHelpers = new();
exportHelpers.ExportToCsv(studentRepository.GetAll());
Console.WriteLine("Proceso Completado");