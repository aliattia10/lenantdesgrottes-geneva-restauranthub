import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';

const Menu = () => {
  const { t } = useTranslation();
  const dailySpecials = [
    {
      name: "Cuisse de poulet & gratin dauphinois",
      description: "Aubergines confites, sauce champignons",
      price: "CHF 28"
    },
    {
      name: "Daurade à la plancha",
      description: "Pommes grenailles, légumes du jour, sauce chimichurri",
      price: "CHF 32"
    },
    {
      name: "Steak de Boeuf",
      description: "Frites, légumes du jour, sauce tartare",
      price: "CHF 35"
    }
  ];

  const appetizers = [
    { name: "Salade de chèvre chaud", description: "Mixed greens, warm goat cheese, walnuts, honey dressing", price: "CHF 16" },
    { name: "Foie gras maison", description: "Traditional preparation with brioche toast", price: "CHF 24" },
    { name: "Escargots de Bourgogne", description: "Classic preparation with garlic and parsley butter", price: "CHF 18" },
    { name: "Soupe à l'oignon", description: "Traditional French onion soup with Gruyère", price: "CHF 14" }
  ];

  const mainCourses = [
    { name: "Bouillabaisse Marseillaise", description: "Traditional fish stew with rouille and crusty bread", price: "CHF 38" },
    { name: "Coq au Vin", description: "Braised chicken in red wine with mushrooms and lardons", price: "CHF 29" },
    { name: "Magret de Canard", description: "Duck breast with cherry sauce and gratin dauphinois", price: "CHF 36" },
    { name: "Sole Meunière", description: "Pan-fried sole with brown butter and lemon", price: "CHF 34" }
  ];

  const desserts = [
    { name: "Tarte Tatin", description: "Classic upside-down apple tart with vanilla ice cream", price: "CHF 12" },
    { name: "Crème Brûlée", description: "Vanilla custard with caramelized sugar", price: "CHF 10" },
    { name: "Mousse au Chocolat", description: "Rich dark chocolate mousse", price: "CHF 9" },
    { name: "Profiteroles", description: "Choux pastry with vanilla ice cream and chocolate sauce", price: "CHF 11" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-6">
              {t('menu.title')}
            </h1>
            <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
            <p className="font-inter text-lg text-foreground/80 max-w-2xl mx-auto">
              Discover our carefully crafted selection of traditional and modern French cuisine, 
              featuring fresh, seasonal ingredients and time-honored techniques.
            </p>
          </div>

          {/* Daily Specials */}
          <section className="mb-16">
            <Card className="bg-gradient-hero text-primary-foreground mb-8">
              <CardHeader>
                <CardTitle className="font-playfair text-3xl text-center">
                  {t('menu.dailySpecials')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  {dailySpecials.map((dish, index) => (
                    <div key={index} className="text-center">
                      <h3 className="font-playfair text-xl font-semibold mb-2">{dish.name}</h3>
                      <p className="font-inter text-sm opacity-90 mb-2">{dish.description}</p>
                      <p className="font-inter text-lg font-bold">{dish.price}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Regular Menu */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Appetizers */}
            <section>
              <h2 className="font-playfair text-2xl font-bold text-primary mb-6">{t('menu.appetizers')}</h2>
              <div className="space-y-4">
                {appetizers.map((dish, index) => (
                  <Card key={index} className="hover:shadow-elegant transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className="font-playfair text-lg font-semibold text-primary mb-2">{dish.name}</h3>
                          <p className="font-inter text-sm text-foreground/80">{dish.description}</p>
                        </div>
                        <span className="font-inter font-bold text-primary ml-4">{dish.price}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Main Courses */}
            <section>
              <h2 className="font-playfair text-2xl font-bold text-primary mb-6">{t('menu.mains')}</h2>
              <div className="space-y-4">
                {mainCourses.map((dish, index) => (
                  <Card key={index} className="hover:shadow-elegant transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className="font-playfair text-lg font-semibold text-primary mb-2">{dish.name}</h3>
                          <p className="font-inter text-sm text-foreground/80">{dish.description}</p>
                        </div>
                        <span className="font-inter font-bold text-primary ml-4">{dish.price}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          {/* Desserts */}
          <section className="mt-12">
            <h2 className="font-playfair text-2xl font-bold text-primary mb-6 text-center">{t('menu.desserts')}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {desserts.map((dish, index) => (
                <Card key={index} className="hover:shadow-elegant transition-shadow">
                  <CardContent className="p-4 text-center">
                    <h3 className="font-playfair text-lg font-semibold text-primary mb-2">{dish.name}</h3>
                    <p className="font-inter text-sm text-foreground/80 mb-3">{dish.description}</p>
                    <span className="font-inter font-bold text-primary">{dish.price}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Menu;