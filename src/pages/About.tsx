import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-6">
              {t('about.title')}
            </h1>
            <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="font-inter text-lg text-foreground/80 leading-relaxed">
                {t('about.paragraph1')}
              </p>
              
              <p className="font-inter text-lg text-foreground/80 leading-relaxed">
                {t('about.paragraph2')}
              </p>

              <p className="font-inter text-lg text-foreground/80 leading-relaxed">
                {t('about.paragraph3')}
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-card rounded-lg p-6 shadow-elegant">
                <h3 className="font-playfair text-xl font-semibold text-primary mb-3">
                  {t('about.philosophy')}
                </h3>
                <p className="font-inter text-foreground/80">
                  {t('about.philosophyDesc')}
                </p>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-elegant">
                <h3 className="font-playfair text-xl font-semibold text-primary mb-3">
                  {t('about.community')}
                </h3>
                <p className="font-inter text-foreground/80">
                  {t('about.communityDesc')}
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