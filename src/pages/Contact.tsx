import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock, Instagram } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Reservation form submitted');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-6">
              {t('contact.title')}
            </h1>
            <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
            <p className="font-inter text-lg text-foreground/80 max-w-2xl mx-auto">
              We'd love to welcome you to Le Nant des Grottes. Make a reservation 
              or contact us for any inquiries.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="font-playfair text-2xl text-primary">
                    {t('contact.address')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-inter font-semibold text-primary">{t('contact.address')}</p>
                      <p className="font-inter text-foreground/80">
                        Rue des Grottes 7<br />
                        1201 Geneva, Switzerland
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-inter font-semibold text-primary">{t('contact.telephone')}</p>
                      <a 
                        href="tel:+41227400720" 
                        className="font-inter text-foreground/80 hover:text-primary transition-colors"
                      >
                        +41 22 740 07 20
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-inter font-semibold text-primary">Email</p>
                      <a 
                        href="mailto:info@lenantdesgrottes.com" 
                        className="font-inter text-foreground/80 hover:text-primary transition-colors"
                      >
                        info@lenantdesgrottes.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Instagram className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-inter font-semibold text-primary">Follow Us</p>
                      <a 
                        href="https://instagram.com/nantdesgrottes" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-inter text-foreground/80 hover:text-primary transition-colors"
                      >
                        @nantdesgrottes
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-inter font-semibold text-primary">Opening Hours</p>
                      <div className="font-inter text-foreground/80 space-y-1">
                        <p>Tuesday - Saturday: 11:30 - 14:30, 18:30 - 23:00</p>
                        <p>Sunday: 11:30 - 15:00</p>
                        <p>Monday: Closed</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card className="shadow-elegant">
                <CardContent className="p-6">
                  <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-8 w-8 text-accent mx-auto mb-2" />
                      <p className="font-inter text-foreground/60">Interactive Map</p>
                      <p className="font-inter text-sm text-foreground/40">
                        Rue des Grottes 7, 1201 Geneva
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Reservation Form */}
            <div>
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="font-playfair text-2xl text-primary">
                    {t('contact.reservationForm')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="font-inter text-sm font-medium text-primary block mb-2">
                          {t('contact.name')} *
                        </label>
                        <Input 
                          type="text" 
                          required 
                          placeholder={t('contact.name')}
                          className="font-inter"
                        />
                      </div>
                      <div>
                        <label className="font-inter text-sm font-medium text-primary block mb-2">
                          {t('contact.phone')} *
                        </label>
                        <Input 
                          type="tel" 
                          required 
                          placeholder="+41..."
                          className="font-inter"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="font-inter text-sm font-medium text-primary block mb-2">
                          Date *
                        </label>
                        <Input 
                          type="date" 
                          required 
                          className="font-inter"
                        />
                      </div>
                      <div>
                        <label className="font-inter text-sm font-medium text-primary block mb-2">
                          Time *
                        </label>
                        <Input 
                          type="time" 
                          required 
                          className="font-inter"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="font-inter text-sm font-medium text-primary block mb-2">
                        Number of Guests *
                      </label>
                      <Input 
                        type="number" 
                        min="1" 
                        max="12" 
                        required 
                        placeholder="2"
                        className="font-inter"
                      />
                    </div>

                    <div>
                      <label className="font-inter text-sm font-medium text-primary block mb-2">
                        Special Requests
                      </label>
                      <Textarea 
                        placeholder="Any dietary restrictions, special occasions, or other requests..."
                        className="font-inter"
                        rows={4}
                      />
                    </div>

                    <Button type="submit" className="w-full font-inter">
                      {t('contact.submit')}
                    </Button>
                  </form>

                  <p className="font-inter text-sm text-foreground/60 mt-4 text-center">
                    We'll confirm your reservation by phone within 24 hours.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;