using System.ComponentModel.DataAnnotations;

namespace VeggiTales.Models
{
    public class FavouriteItem
    {
        public int FavouriteItemId { get; set; }

        [Required]
        public string CustomerId { get; set; }

        [Required]
        public int ProductId { get; set; }

        // parent ref
        public Product? Product { get; set; }
    }
}
