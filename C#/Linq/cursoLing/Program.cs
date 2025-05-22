var frutas = new string[] { "Sandia", "Fresa", "Mango", "Mango de azúcar", "Mango Tomy" };

var MangoList = frutas.Where(fruta => fruta.StartsWith("Mango")).ToList();
//var MangoList = frutas.Where(fruta => fruta.StartsWith("Mango")).ToList();


//foreach (var mango in MangoList)
//{
//    Console.WriteLine(mango);
//}

MangoList.ForEach(mango => Console.WriteLine(mango));