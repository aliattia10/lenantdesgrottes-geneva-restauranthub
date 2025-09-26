import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useTranslation } from 'react-i18next';
import realSaladGoatcheese from '@/assets/real-salad-goatcheese.jpg';
import realSaladInterior from '@/assets/real-salad-interior.jpg';
import realKitchenDishes from '@/assets/real-kitchen-dishes.jpg';
import realBarDay from '@/assets/real-bar-day.jpg';
import realBarNight from '@/assets/real-bar-night.jpg';
import realRestaurantNight from '@/assets/real-restaurant-night.jpg';
import realWineStorage from '@/assets/real-wine-storage.jpg';
import realExterior from '@/assets/real-exterior.jpg';
import restaurantDiningGroup from '@/assets/restaurant-dining-group.jpg';

const Gallery = () => {
  const { t } = useTranslation();
  const cuisineImages = [
    { src: realSaladGoatcheese, alt: t('gallery.images.goatCheeseSalad') },
    { src: realSaladInterior, alt: t('gallery.images.colorfulSalad') },
    { src: realKitchenDishes, alt: t('gallery.images.kitchenDishes') },
  ];

  const ambianceImages = [
    { src: restaurantDiningGroup, alt: t('gallery.images.diningGroup') },
    { src: realBarDay, alt: t('gallery.images.barDay') },
    { src: realBarNight, alt: t('gallery.images.barNight') },
    { src: realRestaurantNight, alt: t('gallery.images.restaurantNight') },
    { src: realWineStorage, alt: t('gallery.images.wineStorage') },
    { src: realExterior, alt: t('gallery.images.exterior') },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-6">
              {t('gallery.title')}
            </h1>
            <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
            <p className="font-inter text-lg text-foreground/80 max-w-2xl mx-auto">
              {t('gallery.description')}
            </p>
          </div>

          {/* Our Cuisine Section */}
          <section className="mb-16">
            <h2 className="font-playfair text-3xl font-bold text-primary mb-8 text-center">
              {t('gallery.cuisine')}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {cuisineImages.map((image, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-lg shadow-elegant hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4">
                        <p className="text-white font-inter text-sm font-medium">{image.alt}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Our Ambiance Section */}
          <section>
            <h2 className="font-playfair text-3xl font-bold text-primary mb-8 text-center">
              {t('gallery.ambiance')}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {ambianceImages.map((image, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-lg shadow-elegant hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4">
                        <p className="text-white font-inter text-sm font-medium">{image.alt}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;