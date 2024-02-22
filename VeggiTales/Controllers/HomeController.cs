/*using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using VeggiTales.Models;

namespace VeggiTales.Controllers
{
    public class HomeController : Controller
    {
        //private readonly ILogger<HomeController> _logger;

        public HomeController()
        {
            //_logger = logger;
        }

        public IActionResult Index()
        {
            return View("Index");
        }

        public IActionResult Privacy()
        {
            return View("Privacy");
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}*/
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics;
using VeggiTales.Models;
using VeggiTales.Data;

namespace VeggiTales.Controllers
{
    public class HomeController : Controller
    {
        //private readonly ILogger<HomeController> _logger;
        // class level db object
        private readonly ApplicationDbContext _context;

        // class level config object needed to read Stripe Key from appsetttings
        private readonly IConfiguration _configuration;

        // constructor using db dependencies
        public HomeController(ApplicationDbContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }

        public IActionResult Index()
        {
            var products = _context.Products.Include(p => p.Category).ToList();

            return View(products);
        }

        public IActionResult Privacy()
        {
            return View("Privacy");
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}