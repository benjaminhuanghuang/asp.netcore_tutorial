# Part 1
http://opensourcedotnetter.blogspot.com/2016/07/building-web-application-using-aspnet_31.html

npm install -g yo generator-aspnet generator-aspnet-item


## Create project
    yo aspnet

    select Empty Web Application and give it the name "modern".

## Create MVC controller
    yo aspnet-item:MvcController Home

##Change Empty web application to Mvc web application. 

Modify Startup.cs:
public void ConfigureServices(IServiceCollection services)       
{ 
    services.AddMvc();       
}
 
public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
         
{
   ...
   app.UseMvc(routes => {
        routes.MapRoute(    
             name: "default",
             template: "{controller=Home}/{action=Index}/{id?}");          
        });   
}

## Add Control and View
    Add Controllers/HomeController.cs
    Add Views/Home/Index.cshtml
## Add API
    Add Controllers/GreetingController.cs
    http://localhost:5000/api/Greeting
    