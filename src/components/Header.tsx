import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">#</span>
            </div>
            <span className="text-2xl font-bold text-gradient">Frikulínek</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-primary transition-smooth"
            >
              Domů
            </button>
            <button 
              onClick={() => scrollToSection("products")}
              className="text-foreground hover:text-primary transition-smooth"
            >
              Naše zmrzlina
            </button>
            <button 
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-smooth"
            >
              O nás
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-smooth"
            >
              Kontakt
            </button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection("contact")}
              className="btn-primary"
            >
              Navštivte nás
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 pt-4">
              <button 
                onClick={() => scrollToSection("home")}
                className="text-left text-foreground hover:text-primary transition-smooth"
              >
                Domů
              </button>
              <button 
                onClick={() => scrollToSection("products")}
                className="text-left text-foreground hover:text-primary transition-smooth"
              >
                Naše zmrzlina
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="text-left text-foreground hover:text-primary transition-smooth"
              >
                O nás
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="text-left text-foreground hover:text-primary transition-smooth"
              >
                Kontakt
              </button>
              <Button 
                onClick={() => scrollToSection("contact")}
                className="btn-primary w-full mt-2"
              >
                Navštivte nás
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;