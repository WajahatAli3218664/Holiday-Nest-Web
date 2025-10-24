import { useState } from "react";
import { Button } from "@/components/ui/button";
import galleryBeach from "@/assets/gallery-beach.jpg";
import galleryCity from "@/assets/gallery-city.jpg";
import galleryCulture from "@/assets/gallery-culture.jpg";

const TravelGallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All" },
    { id: "beach", label: "Beach" },
    { id: "city", label: "City" },
    { id: "culture", label: "Culture" },
  ];

  const galleryItems = [
    { id: 1, image: galleryBeach, category: "beach", title: "Maldives Paradise", description: "Crystal clear waters and white sand beaches" },
  { id: 2, image: '/republic.jpg', category: "city", title: "Prague Old Town", description: "Historic European architecture and charm" },
    { id: 3, image: galleryCulture, category: "culture", title: "Ancient Temple", description: "Traditional Asian cultural heritage" },
  { id: 4, image: '/cab.jpg', category: "beach", title: "Caribbean Coast", description: "Tropical paradise with luxury resorts" },
    { id: 5, image: galleryCity, category: "city", title: "Amsterdam Canals", description: "Picturesque waterways and historic buildings" },
  { id: 6, image: '/bud.jpg', category: "culture", title: "Buddhist Monastery", description: "Spiritual heritage and ancient traditions" },
  ];

  const filteredItems = activeCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Travel Gallery</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Discover stunning destinations around the world
          </p>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className="px-6"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelGallery;
