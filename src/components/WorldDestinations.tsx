import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Plane } from "lucide-react";

const WorldDestinations = () => {
  const regions = [
    {
      name: "Europe",
      description: "Explore 27 Schengen countries with a single visa. From the romantic streets of Paris to the ancient ruins of Rome, experience diverse cultures, stunning architecture, and world-renowned cuisine across the European continent.",
      countries: [
        { code: "de", name: "Germany" },
        { code: "fr", name: "France" },
        { code: "it", name: "Italy" },
        { code: "es", name: "Spain" },
        { code: "nl", name: "Netherlands" },
        { code: "gr", name: "Greece" },
        { code: "at", name: "Austria" },
        { code: "be", name: "Belgium" },
        { code: "pt", name: "Portugal" },
        { code: "ch", name: "Switzerland" },
        { code: "se", name: "Sweden" },
        { code: "no", name: "Norway" }
      ],
      count: "27 Countries",
    },
    {
      name: "North America",
      description: "Discover the vast landscapes and vibrant cities of North America. From New York's skyline to the Rocky Mountains, experience world-class entertainment, natural wonders, and multicultural metropolitan areas.",
      countries: [
        { code: "us", name: "United States" },
        { code: "ca", name: "Canada" },
        { code: "mx", name: "Mexico" }
      ],
      count: "3 Countries",
    },
    {
      name: "Asia Pacific",
      description: "Journey through ancient civilizations and modern metropolises. Experience the perfect blend of tradition and innovation, from Tokyo's neon streets to Bali's tranquil temples, and taste exotic cuisines across diverse cultures.",
      countries: [
        { code: "jp", name: "Japan" },
        { code: "cn", name: "China" },
        { code: "kr", name: "South Korea" },
        { code: "th", name: "Thailand" },
        { code: "sg", name: "Singapore" },
        { code: "my", name: "Malaysia" },
        { code: "id", name: "Indonesia" },
        { code: "vn", name: "Vietnam" },
        { code: "ph", name: "Philippines" },
        { code: "in", name: "India" }
      ],
      count: "15 Countries",
    },
    {
      name: "Middle East",
      description: "Experience the intersection of ancient heritage and modern luxury. Marvel at architectural wonders, shop in world-class souks and malls, and explore deserts and coastal paradises in one of the world's most dynamic regions.",
      countries: [
        { code: "ae", name: "United Arab Emirates" },
        { code: "sa", name: "Saudi Arabia" },
        { code: "qa", name: "Qatar" },
        { code: "om", name: "Oman" },
        { code: "jo", name: "Jordan" },
        { code: "il", name: "Israel" }
      ],
      count: "8 Countries",
    },
    {
      name: "Oceania",
      description: "Venture to the land down under and Pacific islands. Encounter unique wildlife, dive the Great Barrier Reef, explore pristine beaches, and experience the laid-back lifestyle of Australia and New Zealand.",
      countries: [
        { code: "au", name: "Australia" },
        { code: "nz", name: "New Zealand" },
        { code: "fj", name: "Fiji" }
      ],
      count: "5 Countries",
    },
    {
      name: "Africa",
      description: "Embark on safaris, discover ancient pyramids, and experience diverse cultures across the African continent. From Morocco's bustling markets to South Africa's wine country, adventure awaits at every turn.",
      countries: [
        { code: "za", name: "South Africa" },
        { code: "eg", name: "Egypt" },
        { code: "ma", name: "Morocco" },
        { code: "ke", name: "Kenya" },
        { code: "tz", name: "Tanzania" },
        { code: "na", name: "Namibia" }
      ],
      count: "12 Countries",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary/10 mb-4">
            <Plane className="h-10 w-10 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Explore 150+ Global Destinations</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            We provide comprehensive visa services and travel assistance for destinations across six continents. 
            Whether you're planning a European adventure, an Asian cultural journey, or a North American business trip, 
            our expert team ensures a smooth visa application process tailored to your destination.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regions.map((region, index) => (
            <Card key={index} className="hover:shadow-xl transition-all hover:-translate-y-1 bg-gradient-card">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3">{region.name}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {region.countries.map((country) => (
                    <img
                      key={country.code}
                      src={`https://flagcdn.com/h120/${country.code}.png`}
                      alt={`${country.name} flag`}
                      className="h-6 w-8 object-cover hover:scale-125 transition-transform"
                      title={country.name}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = `https://flagcdn.com/w40/${country.code}.png`;
                      }}
                    />
                  ))}
                </div>
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                  {region.count}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {region.description}
                </p>
                <Link to="/visa-application">
                  <Button variant="outline" className="w-full">
                    View Visa Options
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-background border border-border rounded-2xl p-8 max-w-4xl mx-auto shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Not Sure Where to Go?</h3>
            <p className="text-muted-foreground mb-6 text-lg">
              Our visa consultants can help you choose the perfect destination based on your interests, 
              budget, and travel preferences. We'll also guide you through the entire visa application process 
              and provide valuable travel insights for your chosen destination.
            </p>
            <Link to="/booking">
              <Button size="lg" className="px-8">
                Schedule Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorldDestinations;