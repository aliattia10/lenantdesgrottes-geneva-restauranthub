import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Restaurant Info */}
          <div>
            <h3 className="font-playfair text-2xl font-bold mb-4">
              Le Nant des Grottes
            </h3>
            <p className="font-inter text-primary-foreground/80 mb-4">
              Authentic French cuisine in the heart of Geneva's Grottes district. 
              Fresh ingredients, traditional techniques, and warm hospitality.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/nantdesgrottes" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <Link 
                to="/" 
                className="font-inter text-primary-foreground/80 hover:text-accent transition-colors block"
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="font-inter text-primary-foreground/80 hover:text-accent transition-colors block"
              >
                About Us
              </Link>
              <Link 
                to="/menu" 
                className="font-inter text-primary-foreground/80 hover:text-accent transition-colors block"
              >
                Menu
              </Link>
              <Link 
                to="/gallery" 
                className="font-inter text-primary-foreground/80 hover:text-accent transition-colors block"
              >
                Gallery
              </Link>
              <Link 
                to="/contact" 
                className="font-inter text-primary-foreground/80 hover:text-accent transition-colors block"
              >
                Contact & Reservations
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-accent flex-shrink-0" />
                <span className="font-inter text-sm text-primary-foreground/80">
                  Rue des Grottes 7, 1201 Geneva
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                <a 
                  href="tel:+41227400720"
                  className="font-inter text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  +41 22 740 07 20
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-accent flex-shrink-0" />
                <a 
                  href="mailto:info@lenantdesgrottes.com"
                  className="font-inter text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  info@lenantdesgrottes.com
                </a>
              </div>
            </div>

            <div className="mt-6">
              <h5 className="font-inter text-sm font-semibold mb-2">Opening Hours</h5>
              <div className="font-inter text-xs text-primary-foreground/70 space-y-1">
                <p>Tue-Sat: 11:30-14:30, 18:30-23:00</p>
                <p>Sunday: 11:30-15:00</p>
                <p>Monday: Closed</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="font-inter text-sm text-primary-foreground/70">
            © 2024 Le Nant des Grottes. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;