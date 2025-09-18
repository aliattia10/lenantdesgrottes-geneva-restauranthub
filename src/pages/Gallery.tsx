import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import beefStew from '@/assets/beef-stew.jpg';
import goatCheeseSalad from '@/assets/goat-cheese-salad.jpg';
import chickenGratin from '@/assets/chicken-gratin.jpg';
import restaurantInteriorDay from '@/assets/restaurant-interior-day.jpg';
import restaurantBar from '@/assets/restaurant-bar.jpg';
import restaurantExterior from '@/assets/restaurant-exterior.jpg';

const Gallery = () => {
  const cuisineImages = [
    { src: beefStew, alt: 'Traditional French beef stew with vegetables' },
    { src: goatCheeseSalad, alt: 'Fresh goat cheese salad with mixed greens' },
    { src: chickenGratin, alt: 'Chicken with gratin dauphinois and seasonal vegetables' },
  ];

  const ambianceImages = [
    { src: restaurantInteriorDay, alt: 'Restaurant interior during day with natural lighting' },
    { src: restaurantBar, alt: 'Cozy bar area with wine selection' },
    { src: restaurantExterior, alt: 'Charming restaurant exterior with outdoor seating' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-6">
              Gallery
            </h1>
            <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
            <p className="font-inter text-lg text-foreground/80 max-w-2xl mx-auto">
              Discover the ambiance and culinary artistry that makes Le Nant des Grottes 
              a special place in Geneva's Grottes district.
            </p>
          </div>

          {/* Our Cuisine Section */}
          <section className="mb-16">
            <h2 className="font-playfair text-3xl font-bold text-primary mb-8 text-center">
              Our Cuisine
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
              Our Ambiance
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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