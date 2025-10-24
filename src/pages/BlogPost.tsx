import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowLeft } from "lucide-react";
import blogVisaTips from "@/assets/blog-visa-tips.jpg";
import blogEurope from "@/assets/blog-europe.jpg";

const BlogPost = () => {
  const { slug } = useParams();

  // In a real app, this would fetch from a database
  const articles: Record<string, any> = {
    "schengen-visa-requirements-2025": {
      title: "Schengen Visa Requirements 2025",
      image: blogVisaTips,
      date: "September 28, 2025",
      author: "Sarah Johnson",
      category: "Visa Tips",
      content: `
        <h2>Updated Schengen Visa Requirements for 2025</h2>
        <p>The Schengen visa process has been updated with new requirements and procedures. Here's a comprehensive breakdown of what you need to know.</p>

        <h2>New Biometric Requirements</h2>
        <ul>
          <li>Digital fingerprint scanning for all applicants</li>
          <li>High-resolution digital photograph requirements</li>
          <li>Biometric data validity period: 5 years</li>
        </ul>

        <h2>Documentation Updates</h2>
        <p>Essential documents required for your application:</p>
        <ul>
          <li>Valid passport (minimum 6 months beyond stay)</li>
          <li>Completed visa application form</li>
          <li>Travel insurance (minimum €50,000 coverage)</li>
          <li>Proof of accommodation</li>
          <li>Flight itinerary</li>
          <li>Employment documentation</li>
          <li>Bank statements (last 6 months)</li>
        </ul>

        <h2>Interview Procedures</h2>
        <p>New interview guidelines include:</p>
        <ul>
          <li>Mandatory video interviews for first-time applicants</li>
          <li>Online scheduling system</li>
          <li>Preparation guidelines and documentation checklist</li>
        </ul>

        <h2>Processing Times and Fees</h2>
        <p>Standard processing: 15 working days</p>
        <p>Express processing: 5 working days (additional fee)</p>
        <p>Visa fee: €80 (standard)</p>
      `,
    },
    "top-visa-tips-europe": {
      title: "Top Visa Tips for Europe Travel",
      image: blogVisaTips,
      date: "October 15, 2025",
      author: "Sarah Johnson",
      category: "Visa Tips",
      content: `
        <h2>Essential Preparation Steps</h2>
        <p>Applying for a Schengen visa doesn't have to be stressful. With proper preparation and understanding of the requirements, you can significantly increase your chances of approval. Here's everything you need to know.</p>

        <h2>1. Start Early</h2>
        <p>Begin your visa application at least 3 months before your intended travel date. This gives you ample time to gather all required documents and handle any unexpected issues. The Schengen visa can be applied for up to 6 months in advance, but not earlier.</p>

        <h2>2. Choose the Right Embassy</h2>
        <p>If you're visiting multiple Schengen countries, apply to the embassy of the country where you'll spend the most time. If you're spending equal time in multiple countries, apply to the first country you'll enter.</p>

        <h2>3. Document Checklist</h2>
        <ul>
          <li>Valid passport with at least 2 blank pages and 3 months validity beyond your travel dates</li>
          <li>Two recent passport-sized photographs with white background</li>
          <li>Completed and signed visa application form</li>
          <li>Travel insurance with minimum €30,000 coverage</li>
          <li>Proof of accommodation for entire stay</li>
          <li>Flight itinerary (don't purchase tickets before visa approval)</li>
          <li>Bank statements for the last 3 months</li>
          <li>Employment letter or proof of income</li>
          <li>Cover letter explaining purpose of visit</li>
        </ul>

        <h2>4. Financial Requirements</h2>
        <p>You need to demonstrate sufficient funds to cover your entire stay. The minimum required amount varies by country but generally ranges from €50-100 per day. Your bank statements should show a stable balance over the past 3-6 months.</p>

        <h2>5. Common Mistakes to Avoid</h2>
        <p>Many applications are rejected due to simple oversights:</p>
        <ul>
          <li>Incomplete or incorrect application forms</li>
          <li>Insufficient travel insurance coverage</li>
          <li>Lack of proof of ties to home country</li>
          <li>Inconsistent travel dates across documents</li>
          <li>Poor quality photographs</li>
        </ul>

        <h2>Interview Preparation</h2>
        <p>If required to attend an interview, be honest and confident. Prepare answers about your travel plans, accommodation, and financial situation. Bring all original documents even if you've submitted copies.</p>

        <h2>After Approval</h2>
        <p>Once approved, your visa will be valid for the dates specified. You can enter the Schengen area up to 90 days within a 180-day period. Keep copies of all documents you submitted with your application for reference during your trip.</p>
      `,
    },
    "complete-guide-visiting-europe": {
      title: "Complete Guide to Visiting Europe",
      image: blogEurope,
      date: "October 10, 2025",
      author: "Michael Chen",
      category: "Destinations",
      content: `
        <h2>Planning Your European Adventure</h2>
        <p>Europe offers an incredible diversity of experiences, from ancient ruins to modern cities, pristine beaches to snow-capped mountains. This comprehensive guide will help you plan the perfect European getaway.</p>

        <h2>Best Time to Visit</h2>
        <p>The ideal time depends on your preferences:</p>
        <ul>
          <li><strong>Spring (April-May):</strong> Pleasant weather, fewer crowds, blooming flowers</li>
          <li><strong>Summer (June-August):</strong> Peak season, warmest weather, most activities available</li>
          <li><strong>Fall (September-October):</strong> Comfortable temperatures, harvest season, beautiful foliage</li>
          <li><strong>Winter (November-March):</strong> Christmas markets, skiing, lower prices</li>
        </ul>

        <h2>Must-Visit Destinations</h2>
        <h3>Western Europe</h3>
        <p><strong>Paris, France:</strong> The City of Light offers iconic landmarks like the Eiffel Tower, world-class museums, and exquisite cuisine. Don't miss the Louvre, Notre-Dame, and charming Montmartre neighborhood.</p>
        <p><strong>Amsterdam, Netherlands:</strong> Explore canal-lined streets, visit Anne Frank House, and experience the vibrant cultural scene. Rent a bicycle to tour the city like a local.</p>

        <h3>Southern Europe</h3>
        <p><strong>Rome, Italy:</strong> Ancient history comes alive in the Eternal City. Visit the Colosseum, Vatican City, and Trevi Fountain. Italian cuisine and gelato are must-tries.</p>
        <p><strong>Barcelona, Spain:</strong> Gaudí's architectural masterpieces, beautiful beaches, and lively tapas scene make Barcelona unforgettable.</p>

        <h3>Central Europe</h3>
        <p><strong>Prague, Czech Republic:</strong> Medieval charm, stunning castles, and affordable prices. Walk across Charles Bridge and explore Prague Castle.</p>
        <p><strong>Vienna, Austria:</strong> Imperial palaces, classical music, and coffeehouse culture create an elegant atmosphere.</p>

        <h2>Transportation Tips</h2>
        <p>Europe's excellent transportation network makes travel easy:</p>
        <ul>
          <li><strong>Trains:</strong> Eurail pass for multiple countries, book in advance for best prices</li>
          <li><strong>Budget Airlines:</strong> Ryanair, EasyJet for affordable flights between cities</li>
          <li><strong>Buses:</strong> FlixBus offers extensive routes at low prices</li>
          <li><strong>Car Rentals:</strong> Great for rural areas and flexibility</li>
        </ul>

        <h2>Money-Saving Tips</h2>
        <ul>
          <li>Visit free attractions like parks, churches, and walking tours</li>
          <li>Eat at local markets and bakeries instead of tourist restaurants</li>
          <li>Stay in hostels or budget hotels in less central areas</li>
          <li>Purchase city passes for discounted attractions and transport</li>
          <li>Travel during shoulder season for lower prices</li>
        </ul>

        <h2>Cultural Etiquette</h2>
        <p>Respect local customs: greet in the local language, dress modestly in churches, tip appropriately (varies by country), and observe quiet hours in residential areas.</p>
      `,
    },
    "hidden-gems-southern-europe": {
      title: "Hidden Gems of Southern Europe",
      image: blogEurope,
      date: "September 20, 2025",
      author: "Marco Rossi",
      category: "Destinations",
      content: `
        <h2>Discover Europe's Hidden Treasures</h2>
        <p>Beyond the famous landmarks lie countless hidden gems waiting to be discovered. Here's your guide to Europe's best-kept secrets.</p>

        <h2>Greece's Lesser-Known Islands</h2>
        <ul>
          <li>Milos: Stunning beaches and volcanic landscapes</li>
          <li>Folegandros: Traditional villages and dramatic cliffs</li>
          <li>Amorgos: Authentic Greek island life</li>
        </ul>

        <h2>Portugal's Secret Spots</h2>
        <ul>
          <li>Óbidos: Medieval walled town</li>
          <li>Monsanto: Village built among boulders</li>
          <li>Comporta: Pristine beaches and rice paddies</li>
        </ul>

        <h2>Croatia's Hidden Paradises</h2>
        <ul>
          <li>Vis Island: Remote beauty and local wine</li>
          <li>Motovun: Hilltop town in Istria</li>
          <li>Rastoke: Waterfall village</li>
        </ul>

        <h2>Travel Tips</h2>
        <p>Best times to visit these locations and how to get there off the beaten path.</p>
      `,
    },
    "photography-tips-travel": {
      title: "Photography Tips for Travel",
      image: "/tokyo.jpg",
      date: "September 15, 2025",
      author: "David Chen",
      category: "Photography",
      content: `
        <h2>Capture Your Travel Memories Like a Pro</h2>
        <p>Whether you're using a DSLR or smartphone, these tips will help you take stunning travel photos.</p>

        <h2>Landscape Photography</h2>
        <ul>
          <li>Use golden hour lighting (sunrise/sunset)</li>
          <li>Include foreground elements for depth</li>
          <li>Use tripod for sharp images</li>
          <li>Consider neutral density filters</li>
        </ul>

        <h2>Street Photography</h2>
        <ul>
          <li>Observe and anticipate moments</li>
          <li>Practice discrete shooting</li>
          <li>Focus on telling stories</li>
          <li>Capture local life and culture</li>
        </ul>

        <h2>Portrait Tips</h2>
        <ul>
          <li>Connect with your subjects</li>
          <li>Use natural light when possible</li>
          <li>Focus on the eyes</li>
          <li>Consider environmental portraits</li>
        </ul>

        <h2>Camera Settings</h2>
        <p>Basic settings for different scenarios and lighting conditions.</p>
      `,
    },
    "best-time-visit-japan": {
      title: "Best Time to Visit Japan",
      image: "/tokyo.jpg",
      date: "October 5, 2025",
      author: "Emily Rodriguez",
      category: "Travel Tips",
      content: `
        <h2>Seasonal Beauty of Japan</h2>
        <p>Japan offers unique experiences throughout the year, each season bringing its own charm and festivities. Understanding the best time to visit depends on what you want to see and do.</p>

        <h2>Cherry Blossom Season (Late March - Early April)</h2>
        <p>The most famous time to visit Japan is during cherry blossom (sakura) season. The exact timing varies by region:</p>
        <ul>
          <li><strong>Kyushu (Southern Japan):</strong> Late March</li>
          <li><strong>Tokyo & Kyoto:</strong> Late March to Early April</li>
          <li><strong>Hokkaido (Northern Japan):</strong> Late April to Early May</li>
        </ul>
        <p><strong>Pros:</strong> Stunning beauty, pleasant weather, hanami (flower viewing) parties</p>
        <p><strong>Cons:</strong> Very crowded, higher prices, fully booked accommodations</p>

        <h2>Summer (June - August)</h2>
        <p>Summer in Japan is hot and humid, especially in July and August. However, it offers unique experiences:</p>
        <ul>
          <li>Vibrant festivals (matsuri) throughout the country</li>
          <li>Fireworks displays (hanabi)</li>
          <li>Beach activities in Okinawa</li>
          <li>Mountain climbing season for Mount Fuji (July-August only)</li>
        </ul>
        <p><strong>Note:</strong> June is rainy season (tsuyu) - bring an umbrella!</p>

        <h2>Autumn (September - November)</h2>
        <p>Many travelers consider autumn the best time to visit Japan:</p>
        <ul>
          <li><strong>Mid-October to Mid-November:</strong> Peak fall foliage (koyo)</li>
          <li>Comfortable temperatures</li>
          <li>Clear skies perfect for viewing Mount Fuji</li>
          <li>Harvest festivals and food events</li>
          <li>Fewer crowds than spring</li>
        </ul>
        <p>Popular spots for fall colors: Kyoto temples, Nikko, Japanese Alps</p>

        <h2>Winter (December - February)</h2>
        <p>Winter offers a magical experience, especially in northern regions:</p>
        <ul>
          <li>World-class skiing and snowboarding in Hokkaido and Nagano</li>
          <li>Snow festivals like Sapporo Snow Festival (February)</li>
          <li>Relaxing in hot springs (onsen) surrounded by snow</li>
          <li>New Year celebrations and traditions</li>
          <li>Lower prices and fewer tourists (except New Year)</li>
        </ul>

        <h2>Regional Considerations</h2>
        <p><strong>Tokyo & Central Japan:</strong> Spring or autumn are ideal</p>
        <p><strong>Hokkaido:</strong> Summer (cool and comfortable) or winter (snow activities)</p>
        <p><strong>Okinawa:</strong> Best from March to May and October to November (avoid typhoon season)</p>

        <h2>Visa Requirements</h2>
        <p>Many countries have visa-free access to Japan for tourism (up to 90 days). Check if you need a visa and apply 1-2 months before travel. Required documents typically include:</p>
        <ul>
          <li>Valid passport</li>
          <li>Visa application form</li>
          <li>Photograph</li>
          <li>Flight itinerary</li>
          <li>Hotel reservations</li>
          <li>Financial proof</li>
        </ul>

        <h2>Travel Tips</h2>
        <ul>
          <li>Book accommodations early, especially during peak seasons</li>
          <li>Get a JR Pass for unlimited train travel (purchase before arrival)</li>
          <li>Download translation apps and offline maps</li>
          <li>Carry cash - many places don't accept cards</li>
          <li>Learn basic Japanese phrases</li>
          <li>Respect local customs and etiquette</li>
        </ul>
      `,
    },
  };

  const article = slug ? articles[slug] : null;

  if (!article) {
    return (
      <div className="min-h-screen bg-muted/30">
        <Header />
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
            <Link to="/blog">
              <Button>Back to Blog</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <article className="container mx-auto px-4 max-w-4xl">
          {/* Back Button */}
          <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          {/* Article Header */}
          <div className="mb-8">
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium text-sm">
              {article.category}
            </span>
            <h1 className="text-5xl font-bold mt-6 mb-6">{article.title}</h1>
            <div className="flex flex-wrap gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>{article.date}</span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-96 object-cover rounded-2xl mb-12 shadow-lg"
          />

          {/* Article Content */}
          <div
            className="prose prose-lg max-w-none prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6 prose-ul:my-6 prose-li:text-muted-foreground prose-strong:text-foreground"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Call to Action */}
          <div className="mt-16 p-8 bg-primary/5 rounded-2xl text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
            <p className="text-muted-foreground mb-6">
              Let us help you with your visa application and travel planning
            </p>
            <Link to="/visa-application">
              <Button size="lg">Apply for Visa</Button>
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
