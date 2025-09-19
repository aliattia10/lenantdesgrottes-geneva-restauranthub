import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Phone, ChefHat, Utensils, Wine } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import realExterior from '@/assets/real-exterior.jpg';

const Index = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${realExterior})` }}
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
            Welcome to Le Nant des Grottes
          </h1>
          <p className="font-inter text-xl md:text-2xl font-light mb-8 opacity-90">
            {t('hero.title')}
          </p>
          <p className="font-inter text-lg mb-8 opacity-80 max-w-2xl mx-auto">
            {t('hero.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="default" className="font-inter">
              <Link to="/menu">{t('hero.viewMenu')}</Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="font-inter">
              <Link to="/contact">{t('hero.makeReservation')}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Choose Le Nant des Grottes?
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-elegant transition-shadow">
              <CardContent className="p-8">
                <ChefHat className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-playfair text-xl font-semibold text-primary mb-3">
                  {t('features.freshIngredients')}
                </h3>
                <p className="font-inter text-foreground/80">
                  {t('features.freshIngredientsDesc')}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-elegant transition-shadow">
              <CardContent className="p-8">
                <Utensils className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-playfair text-xl font-semibold text-primary mb-3">
                  {t('features.cozySetting')}
                </h3>
                <p className="font-inter text-foreground/80">
                  {t('features.cozySettingDesc')}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-elegant transition-shadow">
              <CardContent className="p-8">
                <Wine className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-playfair text-xl font-semibold text-primary mb-3">
                  Curated Wine Selection
                </h3>
                <p className="font-inter text-foreground/80">
                  Carefully selected wines to complement our dishes, 
                  featuring both local Swiss and classic French varieties.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Daily Specials Preview */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-4">
              {t('features.dailySpecials')}
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto mb-6"></div>
            <p className="font-inter text-lg text-foreground/80 max-w-2xl mx-auto">
              {t('features.dailySpecialsDesc')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="overflow-hidden hover:shadow-elegant transition-shadow">
              <CardHeader className="bg-primary text-primary-foreground">
                <CardTitle className="font-playfair text-center">Cuisse de Poulet</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="font-inter text-sm text-foreground/80 mb-4">
                  Gratin dauphinois, aubergines confites, sauce champignons
                </p>
                <p className="font-inter text-xl font-bold text-accent">CHF 28</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-elegant transition-shadow">
              <CardHeader className="bg-primary text-primary-foreground">
                <CardTitle className="font-playfair text-center">Daurade à la Plancha</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="font-inter text-sm text-foreground/80 mb-4">
                  Pommes grenailles, légumes du jour, sauce chimichurri
                </p>
                <p className="font-inter text-xl font-bold text-accent">CHF 32</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-elegant transition-shadow">
              <CardHeader className="bg-primary text-primary-foreground">
                <CardTitle className="font-playfair text-center">Steak de Boeuf</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="font-inter text-sm text-foreground/80 mb-4">
                  Frites, légumes du jour, sauce tartare
                </p>
                <p className="font-inter text-xl font-bold text-accent">CHF 35</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button asChild variant="outline" size="lg" className="font-inter">
              <Link to="/menu">{t('hero.viewMenu')}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-3xl font-bold text-primary mb-6">
                Visit Us
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-inter font-semibold text-primary">Address</p>
                    <p className="font-inter text-foreground/80">
                      Rue des Grottes 7<br />
                      1201 Geneva, Switzerland
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-inter font-semibold text-primary">Reservations</p>
                    <a 
                      href="tel:+41227400720"
                      className="font-inter text-foreground/80 hover:text-primary transition-colors"
                    >
                      +41 22 740 07 20
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
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
              </div>
            </div>

            <div className="bg-card rounded-lg p-8 shadow-elegant">
              <h3 className="font-playfair text-2xl font-semibold text-primary mb-4">
                Ready to Dine?
              </h3>
              <p className="font-inter text-foreground/80 mb-6">
                Reserve your table today and experience authentic French cuisine 
                in a warm, welcoming atmosphere.
              </p>
              <Button asChild className="w-full font-inter">
                <Link to="/contact">{t('hero.makeReservation')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
