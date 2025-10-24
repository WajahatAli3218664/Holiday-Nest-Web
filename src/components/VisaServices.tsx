import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Link } from "react-router-dom";

const VisaServices = () => {
  const schengenCountries = [
    { name: "Germany", code: "de", processing: "15-20 days", price: "£80", description: "Business hub with rich history and cultural heritage" },
    { name: "France", code: "fr", processing: "15-20 days", price: "£70", description: "Home to iconic landmarks and world-class cuisine" },
    { name: "Italy", code: "it", processing: "15-20 days", price: "£60", description: "Art, architecture, and Mediterranean beauty" },
    { name: "Spain", code: "es", processing: "15-20 days", price: "£50", description: "Vibrant culture and stunning coastal destinations" },
    { name: "Netherlands", code: "nl", processing: "15-20 days", price: "£40", description: "Windmills, tulips, and progressive innovation" },
    { name: "Greece", code: "gr", processing: "15-20 days", price: "£30", description: "Ancient history meets island paradise" },
    { name: "Austria", code: "at", processing: "15-20 days", price: "£86", description: "Alpine beauty and classical music heritage" },
    { name: "Belgium", code: "be", processing: "15-20 days", price: "£44", description: "Medieval towns and European Union capital" },
    { name: "Portugal", code: "pt", processing: "15-20 days", price: "£40", description: "Coastal charm and historic explorers' legacy" },
  ];

  const popularDestinations = [
    { name: "United Kingdom", code: "gb", processing: "15-30 days", price: "£120", description: "Historic landmarks and modern metropolitan life" },
    { name: "United States", code: "us", processing: "30-60 days", price: "£160", description: "Diverse landscapes from coast to coast" },
    { name: "Canada", code: "ca", processing: "20-40 days", price: "£100", description: "Natural wonders and multicultural cities" },
    { name: "Australia", code: "au", processing: "15-30 days", price: "£140", description: "Unique wildlife and Great Barrier Reef" },
    { name: "Japan", code: "jp", processing: "10-15 days", price: "£90", description: "Ancient traditions meet cutting-edge technology" },
    { name: "United Arab Emirates", code: "ae", processing: "5-10 days", price: "£110", description: "Luxury shopping and modern architecture" },
    { name: "Singapore", code: "sg", processing: "5-7 days", price: "£85", description: "Garden city with futuristic skyline" },
    { name: "Switzerland", code: "ch", processing: "15-20 days", price: "£95", description: "Alpine peaks and pristine landscapes" },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Schengen Visa Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Schengen Visa Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              One visa for 27 European countries. Travel freely across the Schengen Area with our expert visa processing service.
            </p>
          </div>

          <div>
            <div className="w-full overflow-x-auto -mx-4 px-4 visa-scroll">
              <div className="flex gap-6 items-stretch pb-6 snap-x snap-mandatory visa-carousel" style={{ paddingLeft: '8%', paddingRight: '8%' }}>
                {schengenCountries.map((country) => (
                  <div key={country.name} tabIndex={0} className="flex-shrink-0 w-72 sm:w-80 md:w-96 lg:w-[420px] snap-center carousel-item">
                    <Card className="visa-card relative overflow-hidden rounded-2xl shadow-xl transform-gpu transition-transform duration-300">
                      <div className="h-40 sm:h-48 md:h-56 lg:h-64 w-full bg-gray-200">
                        <img
                          src={`https://flagcdn.com/h240/${country.code}.png`}
                          alt={`${country.name} flag`}
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                      <CardContent className="pt-4 pb-6">
                        <h3 className="text-2xl font-bold mb-2">{country.name}</h3>
                        <p className="text-sm text-muted-foreground mb-3 min-h-[40px]">{country.description}</p>
                        <div className="flex items-center justify-between text-muted-foreground">
                          <div>
                            <p className="text-sm">Processing: {country.processing}</p>
                            <p className="text-lg font-bold text-primary">{country.price}</p>
                          </div>
                          <Link to="/visa-application">
                            <Button>Apply</Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Other Popular Destinations */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Other Popular Destinations</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We also process visas for major destinations worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularDestinations.map((country) => (
              <Card key={country.name} className="hover:shadow-xl transition-all hover:-translate-y-1">
                <CardContent className="pt-6">
                  <div className="text-center mb-4">
                    <img
                      src={`https://flagcdn.com/h120/${country.code}.png`}
                      alt={`${country.name} flag`}
                      className="inline-block h-10 w-12 object-cover mb-3 rounded-sm shadow-sm"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = `https://flagcdn.com/w40/${country.code}.png`;
                      }}
                    />
                    <h3 className="text-xl font-bold mb-2">{country.name}</h3>
                    <p className="text-xs text-muted-foreground mb-2 min-h-[32px]">{country.description}</p>
                    <div className="space-y-1 text-muted-foreground text-sm">
                      <p>{country.processing}</p>
                      <p className="text-xl font-bold text-primary">{country.price}</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link to="/visa-application" className="w-full">
                    <Button className="w-full">Apply Now</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisaServices;
