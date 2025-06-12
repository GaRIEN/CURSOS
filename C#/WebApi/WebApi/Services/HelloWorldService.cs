
public class HelloWorldService : IHelloWorldService
{

    public string GetHelloWorldMessage()
    {
        return "Hello, World!";
    }

}

public interface IHelloWorldService
{
    string GetHelloWorldMessage();
}
