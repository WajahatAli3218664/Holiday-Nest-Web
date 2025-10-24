import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const reviews = [
    {
      name: "Emma R.",
  text: "Holiday Nest made my Schengen visa application so easy — fast and professional service.",
      rating: 5,
    },
    {
      name: "Liam K.",
      text: "Great customer support and clear guidance. Highly recommend for first-time travellers.",
      rating: 5,
    },
    {
      name: "Sophia M.",
      text: "They handled everything and I got my visa on time. Excellent service.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">What our customers say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Real reviews from travellers who used our visa and booking services.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, idx) => (
            <Card key={idx} className="p-4 shadow-lg">
              <CardContent>
                <div className="flex items-center gap-3 mb-4">
                  <div className="rounded-full bg-primary/10 h-12 w-12 flex items-center justify-center">{r.name[0]}</div>
                  <div>
                    <div className="font-semibold">{r.name}</div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      {Array.from({ length: r.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-gold" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground">{r.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
