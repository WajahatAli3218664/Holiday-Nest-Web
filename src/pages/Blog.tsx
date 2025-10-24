import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight, Search } from "lucide-react";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Articles" },
    { id: "visa-tips", label: "Visa Tips" },
    { id: "destinations", label: "Destinations" },
    { id: "travel-tips", label: "Travel Tips" },
    { id: "photography", label: "Photography" },
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Top Visa Tips for Europe Travel",
      excerpt: "Essential advice for a smooth Schengen visa application process. Learn about document requirements, processing times, and common mistakes to avoid.",
      image: "/can.jpg",
      date: "October 15, 2025",
      category: "visa-tips",
      slug: "top-visa-tips-europe",
    },
    {
      id: 2,
      title: "Complete Guide to Visiting Europe",
      excerpt: "Discover the best time to visit, must-see destinations, and travel tips for exploring European countries with your Schengen visa.",
      image: "/euro.jpg",
      date: "October 10, 2025",
      category: "destinations",
      slug: "complete-guide-visiting-europe",
    },
    {
      id: 3,
      title: "Best Time to Visit Japan",
      excerpt: "From cherry blossoms to autumn foliage, learn when to visit Japan for the best experience and how to prepare your visa application.",
      image: "/tokyo.jpg",
      date: "October 5, 2025",
      category: "travel-tips",
      slug: "best-time-visit-japan",
    },
    {
      id: 4,
      title: "Schengen Visa Requirements 2025",
      excerpt: "Complete breakdown of updated Schengen visa requirements, including new biometric data regulations and interview procedures.",
      image: "red.jpg",
      date: "September 28, 2025",
      category: "visa-tips",
      slug: "schengen-visa-requirements-2025",
    },
    {
      id: 5,
      title: "Hidden Gems of Southern Europe",
      excerpt: "Explore lesser-known destinations in Greece, Portugal, and Croatia that offer authentic experiences away from tourist crowds.",
      image: "/viva.jpg",
      date: "September 20, 2025",
      category: "destinations",
      slug: "hidden-gems-southern-europe",
    },
    {
      id: 6,
      title: "Photography Tips for Travel",
      excerpt: "Capture stunning travel memories with professional photography techniques for landscapes, portraits, and street photography.",
      image: "/travel.jpg",
      date: "September 15, 2025",
      category: "photography",
      slug: "photography-tips-travel",
    },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === "all" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-muted/30">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">Travel Blog & Guides</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expert insights, destination guides, and visa tips to help you plan your perfect journey
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 text-lg"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-3">
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

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-all group bg-background">
                <div className="overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-medium capitalize">
                      {post.category.replace("-", " ")}
                    </span>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="px-6 pb-6">
                  <Link to={`/blog/${post.slug}`} className="w-full">
                    <Button variant="outline" className="w-full group/btn">
                      Read Article
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">No articles found. Try a different search or category.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
