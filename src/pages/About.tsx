import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-6">
              Our Story
            </h1>
            <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="font-inter text-lg text-foreground/80 leading-relaxed">
                Nestled in Geneva's charming Grottes district, Le Nant des Grottes has been serving 
                authentic French cuisine with passion and dedication since our opening. Our story 
                begins with a simple vision: to create a warm, welcoming space where the community 
                can gather over exceptional food and genuine hospitality.
              </p>
              
              <p className="font-inter text-lg text-foreground/80 leading-relaxed">
                We believe in the power of fresh, seasonal ingredients sourced from local producers 
                whenever possible. Our kitchen team combines traditional French culinary techniques 
                with modern creativity, ensuring every dish tells a story of flavor, craftsmanship, 
                and care.
              </p>

              <p className="font-inter text-lg text-foreground/80 leading-relaxed">
                From our carefully curated wine selection to our daily specials that celebrate 
                the seasons, every element of Le Nant des Grottes reflects our commitment to 
                quality and our love for bringing people together through exceptional food.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-card rounded-lg p-6 shadow-elegant">
                <h3 className="font-playfair text-xl font-semibold text-primary mb-3">
                  Our Philosophy
                </h3>
                <p className="font-inter text-foreground/80">
                  Fresh ingredients, traditional techniques, and modern creativity come together 
                  to create memorable dining experiences in the heart of Geneva.
                </p>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-elegant">
                <h3 className="font-playfair text-xl font-semibold text-primary mb-3">
                  Community Focus
                </h3>
                <p className="font-inter text-foreground/80">
                  We're proud to be part of the Grottes neighborhood, creating a space where 
                  locals and visitors alike can enjoy authentic French cuisine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;