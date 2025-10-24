import { Link } from "react-router-dom";
import { Globe, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Globe className="h-8 w-8" />
              <span className="text-2xl font-bold">Holiday Nest</span>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Your trusted partner for visa services and travel solutions worldwide.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-gold transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-gold transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-gold transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/visa-application" className="text-primary-foreground/80 hover:text-gold transition-colors">
                  Visa Application
                </Link>
              </li>
              <li>
                <Link to="/visa-application" className="text-primary-foreground/80 hover:text-gold transition-colors">
                  Schengen Visa
                </Link>
              </li>
              <li>
                <Link to="/visa-application" className="text-primary-foreground/80 hover:text-gold transition-colors">
                  Travel Insurance
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-primary-foreground/80 hover:text-gold transition-colors">
                  Flight Booking
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/blog" className="text-primary-foreground/80 hover:text-gold transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-gold transition-colors">
                  Travel Guides
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-gold transition-colors">
                  Visa Requirements
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-gold transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>123 Travel Street</li>
              <li>New York, NY 10001</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Email: support@holidaynest.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/80">
          <p>© {currentYear} Holiday Nest. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
