import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import blogVisaTips from "@/assets/blog-visa-tips.jpg";
import blogEurope from "@/assets/blog-europe.jpg";

const BlogPreview = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Top Visa Tips for Europe Travel",
      excerpt: "Essential advice for a smooth Schengen visa application process. Learn about document requirements, processing times, and common mistakes to avoid.",
      image: blogVisaTips,
      date: "October 15, 2025",
      category: "Visa Tips",
      slug: "top-visa-tips-europe",
    },
    {
      id: 2,
      title: "Complete Guide to Visiting Europe",
      excerpt: "Discover the best time to visit, must-see destinations, and travel tips for exploring European countries with your Schengen visa.",
      image: blogEurope,
      date: "October 10, 2025",
      category: "Destinations",
      slug: "complete-guide-visiting-europe",
    },
    {
      id: 3,
      title: "Best Time to Visit Japan",
      excerpt: "From cherry blossoms to autumn foliage, learn when to visit Japan for the best experience and how to prepare your visa application.",
      image: "/tokyo.jpg",
      date: "October 5, 2025",
      category: "Travel Tips",
      slug: "best-time-visit-japan",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Travel Insights & Tips</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Expert advice, destination guides, and visa information to help you plan your perfect trip
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-all group">
              <div className="overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
                    {post.category}
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
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/blog">
            <Button size="lg" className="px-8">
              View All Articles
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
