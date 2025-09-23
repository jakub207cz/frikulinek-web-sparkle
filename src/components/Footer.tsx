import { Heart, MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">#</span>
              </div>
              <span className="text-2xl font-bold text-gradient">Frikulínek</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Nejlepší domácí zákusky v Plzni. Čerstvě připravené dezerty a výborná káva v příjemném prostředí.
            </p>
          </div>

          {/* Quick Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Rychlý kontakt</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Koterovská 2060/132, Plzeň</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span>+420 123 456 789</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@frikulinek.cz</span>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Otevírací doba</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Po - Pá:</span>
                <span className="text-primary font-medium">10:00 - 20:00</span>
              </div>
              <div className="flex justify-between">
                <span>So - Ne:</span>
                <span className="text-primary font-medium">10:00 - 21:00</span>
              </div>
              <div className="flex justify-between">
                <span>Svátky:</span>
                <span className="text-primary font-medium">10:00 - 18:00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            © {currentYear} Frikulínek. Všechna práva vyhrazena.
          </div>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>Vytvořeno s</span>
            <Heart className="h-4 w-4 text-accent fill-current" />
            <span>v Plzni</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;