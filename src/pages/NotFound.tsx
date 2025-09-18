import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="flex min-h-[60vh] items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="font-playfair text-6xl md:text-8xl font-bold text-primary mb-4">404</h1>
          <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-primary mb-4">
            Page Not Found
          </h2>
          <p className="font-inter text-lg text-foreground/80 mb-8 max-w-md mx-auto">
            Oops! The page you're looking for seems to have wandered off. 
            Let's get you back to our delicious offerings.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Button asChild variant="default" size="lg" className="font-inter">
              <Link to="/">Return Home</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-inter">
              <Link to="/menu">View Menu</Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
