
List<string> TaskList = new List<string>();

int menuSelected = 0;
do
{
    menuSelected = ShowMainMenu();
    if ((Menu)menuSelected == Menu.add)
    {
        ShowMenuAdd();
    }
    else if (menuSelected == 2)
    {
        ShowMenuRemove();
    }
    else if (menuSelected == 3)
    {
        ShowMenuTask();
    }
} while (menuSelected != 4);

int ShowMainMenu()
{
    Console.WriteLine("----------------------------------------");
    Console.WriteLine("Ingrese la opción a realizar: ");
    Console.WriteLine("1. Nueva tarea");
    Console.WriteLine("2. Remover tarea");
    Console.WriteLine("3. Tareas pendientes");
    Console.WriteLine("4. Salir");

    // Read ChosenOption
    string ChosenOption = Console.ReadLine();
    return Convert.ToInt32(ChosenOption);
}

void ShowMenuRemove()
{
    try
    {
        Console.WriteLine("Ingrese el número de la tarea a remover: ");
        // Show current taks
        TraverseList();

        string ChosenOption = Console.ReadLine();
        // Remove one position
        int indexTaskRemove = Convert.ToInt32(ChosenOption) - 1;
        if (indexTaskRemove > (TaskList.Count - 1) || indexTaskRemove < 0)
        {
            Console.WriteLine("error en la ejecucion porque ingresaste un numero no valido");
        }
        else
        {
            if (indexTaskRemove > -1 && TaskList.Count > 0)
            {
                string task = TaskList[indexTaskRemove];
                TaskList.RemoveAt(indexTaskRemove);
                Console.WriteLine($"Tarea {task} eliminada");

            }
        }

    }
    catch (Exception error)
    {
        Console.WriteLine("se produjo un eror : " + error);
    }
}

void ShowMenuAdd()
{
    try
    {
        Console.WriteLine("Ingrese el nombre de la tarea: ");
        string taskName = Console.ReadLine();
        if (string.IsNullOrWhiteSpace(taskName))
        {
            Console.WriteLine("No se puede agregar una tarea vacia");
        }
        else
        {
            TaskList.Add(taskName);
            Console.WriteLine("Tarea registrada");
        }

    }
    catch (Exception error)
    {
        Console.WriteLine("se produjo un eror : " + error);
    }
}

void ShowMenuTask()
{
    TraverseList();
}

void TraverseList()
{
    if (TaskList == null || TaskList.Count == 0)
    {
        Console.WriteLine("No hay tareas por realizar");
    }
    else
    {
        Console.WriteLine("----------------------------------------");
        var indexTask = 1;
        TaskList.ForEach(p => Console.WriteLine($"{indexTask++} . {p}"));
        Console.WriteLine("----------------------------------------");
    }
}

public enum Menu
{
    add = 1,
    remve = 2,
    list = 3,
    exit = 4
}

