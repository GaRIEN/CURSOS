


    public class TimeMiddleware 
    {
        private readonly RequestDelegate _next;
        public TimeMiddleware(RequestDelegate next)
        {
            _next = next;
        }
        public async Task InvokeAsync(HttpContext context)
        {
            // Log the current time
            var currentTime = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");
            Console.WriteLine($"Current Time: {currentTime}");
            // Call the next middleware in the pipeline
            await _next(context);
    }

}

