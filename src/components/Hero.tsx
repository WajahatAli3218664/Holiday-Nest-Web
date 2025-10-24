import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import heroCityA from "@/assets/hero-city-a.jpg";
import heroCityB from "@/assets/hero-city-b.jpg";
import heroCity from "@/assets/hero-city.jpg";
import heroMap from "@/assets/hero-map.jpg";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const heroRef = useRef<HTMLElement | null>(null);
  const fixedBgRef = useRef<HTMLDivElement | null>(null);
  const [heroVisible, setHeroVisible] = useState(true);
  
  // prioritize high-resolution New York city photo as the primary hero image
  const images = [heroCity, heroCityA, heroCityB, heroMap];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Parallax and visibility handler: keep fixed bg visible while hero is in view
  useEffect(() => {
    const heroEl = heroRef.current;
    if (!heroEl) return;

    // IntersectionObserver to toggle visibility when hero fully scrolls out
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setHeroVisible(entry.isIntersecting);
        });
      },
      { threshold: [0, 0.01, 0.5, 1] }
    );
    obs.observe(heroEl);

    let rafId: number | null = null;

    const onScroll = () => {
      if (!fixedBgRef.current) return;
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const rect = heroEl.getBoundingClientRect();
        // compute small parallax offset proportional to hero's distance from top
        const offset = Math.round((rect.top || 0) * 0.15);
        fixedBgRef.current!.style.transform = `translate3d(0, ${offset}px, 0) scale(1.02)`;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    // initial position
    onScroll();

    return () => {
      obs.disconnect();
      window.removeEventListener("scroll", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <section ref={heroRef} className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Fixed background for parallax effect (NYC) */}
      <div
        ref={fixedBgRef}
        aria-hidden
        className={`hero-fixed-bg fixed inset-0 h-screen w-screen pointer-events-none transition-opacity duration-700 ease-in-out ${
          heroVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ backgroundImage: `url(${heroCity})` }}
      />
  {/* Background Images with Ken Burns Effect (kept for variety but behind the fixed background) */}
      {images.map((image, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-all duration-[6000ms] ease-in-out"
          style={{
            opacity: currentImage === index ? 1 : 0,
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: currentImage === index ? 'scale(1.04)' : 'scale(1)',
            filter: currentImage === index ? 'brightness(0.95) saturate(1.03)' : 'brightness(0.85)'
          }}
        />
      ))}
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/50" />
  {/* lighter overlay to tint images (uses CSS var --gradient-hero) + vignette for centered contrast */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute inset-0 bg-[image:var(--gradient-hero)] opacity-90" />
    <div className="absolute inset-0 hero-vignette opacity-100" />
  </div>

      {/* Content */}
  <div className="relative z-30 container mx-auto px-4 text-center text-primary-foreground">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)]">
          Explore Cities. Book Visas. Travel Easy.
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200 text-white/95 drop-shadow-[0_1px_4px_rgba(0,0,0,0.45)]">
          Visa support, local tips and booking help for 150+ countries — start with a city you love.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
          {/* Country flags for quick recognition */}
          {[
            { code: 'de', name: 'Germany' },
            { code: 'fr', name: 'France' },
            { code: 'it', name: 'Italy' },
            { code: 'es', name: 'Spain' },
            { code: 'nl', name: 'Netherlands' },
            { code: 'gr', name: 'Greece' },
            { code: 'gb', name: 'United Kingdom' },
            { code: 'us', name: 'United States' },
            { code: 'ca', name: 'Canada' },
            { code: 'au', name: 'Australia' },
          ].map((country) => (
            <button 
              key={country.code} 
              title={country.name} 
              className="group relative" 
              aria-label={country.name}
            >
              <img
                src={`https://flagcdn.com/w40/${country.code}.png`}
                alt={`${country.name} flag`}
                className="h-8 w-10 object-cover rounded-sm hover:scale-110 transition-transform shadow-md"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = `https://flagcdn.com/w40/${country.code}.png`;
                }}
              />
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity">
                {country.name}
              </span>
            </button>
          ))}
        </div>

        {/* Search Form */}
        <form 
          onSubmit={handleSearch}
          className="max-w-2xl mx-auto bg-white/90 backdrop-blur-sm p-6 rounded-3xl shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300"
          role="search"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Where do you want to go?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-14 text-lg"
              />
            </div>
            <Button type="submit" size="lg" className="h-14 px-8 text-lg">
              Search Destinations
            </Button>
          </div>
        </form>

        <div className="mt-10 flex justify-center gap-4">
          <Button size="lg" className="px-8 py-4 bg-primary text-primary-foreground shadow-lg hover:bg-primary-hover">Book a Consultation</Button>
          <Button size="lg" className="px-8 py-4 bg-blue-600 text-white shadow hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300">Learn How It Works</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
