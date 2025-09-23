import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-bakery-cafe.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center hero-section overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Frikulínek cukrárna a kavárna" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/95"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center fade-in">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Vítejte v{" "}
            <span className="text-gradient">Frikulínku</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Nejlepší cukrárna a kavárna v Plzni. Čerstvé zákusky, výběrová káva a láska v každém kousku.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={() => scrollToSection("products")}
              className="btn-hero px-8 py-4 text-lg"
              size="lg"
            >
              Objevte naše speciality
            </Button>
            <Button 
              onClick={() => scrollToSection("about")}
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
            >
              Více o nás
            </Button>
          </div>

          {/* Location Badge */}
          <div className="inline-flex items-center bg-card/80 backdrop-blur-sm rounded-full px-6 py-3 border border-border">
            <div className="w-3 h-3 bg-primary rounded-full mr-3 animate-pulse"></div>
            <span className="text-sm font-medium">Koterovská 2060/132, Plzeň</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scrollToSection("products")}
            className="animate-bounce-soft"
          >
            <ArrowDown className="h-6 w-6 text-primary" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;