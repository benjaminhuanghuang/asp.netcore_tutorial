using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace modern.Controllers
{

    [Route("api/[controller]")]// GET: /<controller>/
    public class GreetingController : Controller
    {
        [HttpGet]
        public string Get()
        {
            return "Hello from ASP.NET core Web API";
        }
        
        // [HttpGet]
        // public IEnumerable<string> Get()
        // {
        //     return new string[] { "value1", "value2" };
        // }

    }
}
