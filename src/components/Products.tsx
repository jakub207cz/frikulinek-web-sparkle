import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Star, Coffee } from "lucide-react";
import freshPastriesImage from "@/assets/fresh-pastries.jpg";
import premiumCoffeeImage from "@/assets/premium-coffee.jpg";
import customCakesImage from "@/assets/custom-cakes.jpg";

const Products = () => {
  const products = [
    {
      name: "Čerstvé zákusky",
      description: "Domácí zákusky připravované denně z nejkvalitnějších surovin. Tradiční i moderní receptury.",
      image: freshPastriesImage,
      badges: ["Čerstvé", "Domácí"],
      icon: Heart,
      color: "primary"
    },
    {
      name: "Výběrová káva",
      description: "Pečlivě vybraná káva z nejlepších plantáží světa. Profesionálně připravená každý šálek.",
      image: premiumCoffeeImage,
      badges: ["Výběrová", "Čerstvá"],
      icon: Coffee,
      color: "accent"
    },
    {
      name: "Speciální dorty",
      description: "Dorty na zakázku pro vaše slavnosti. Jedinečný design a nezapomenutelná chuť.",
      image: customCakesImage,
      badges: ["Na zakázku", "Slavnostní"],
      icon: Star,
      color: "primary"
    }
  ];

  const specialties = [
    "Schwarzwaldský dort", "Tiramisu", "Cheesecake s ovocem",
    "Pavlova s mascarpone", "Kávové éclair", "Macarons",
    "Cappuccino", "Flat White", "Espresso Romano"
  ];

  return (
    <section id="products" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Naše <span className="text-gradient">speciality</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Každý den připravujeme čerstvé zákusky a pražíme výběrovou kávu. 
            Objevte naše unikátní chutě a tradiční cukrářské postupy.
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-elegant transition-all duration-500 hover:scale-105 glass-effect"
              >
                <CardContent className="p-6">
                  <div className="relative mb-6 overflow-hidden rounded-lg">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4">
                      <div className={`p-3 rounded-full ${product.color === 'primary' ? 'bg-primary' : 'bg-accent'}`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {product.badges.map((badge, badgeIndex) => (
                        <Badge 
                          key={badgeIndex}
                          variant="secondary"
                          className="bg-primary/10 text-primary border-primary/20"
                        >
                          {badge}
                        </Badge>
                      ))}
                    </div>
                    
                    <h3 className="text-2xl font-bold">{product.name}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Specialties Section */}
        <div className="text-center slide-up">
          <h3 className="text-3xl font-bold mb-8">Naše speciality</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {specialties.map((specialty, index) => (
              <Badge 
                key={index}
                variant="outline"
                className="px-4 py-2 text-sm font-medium border-primary/30 hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default"
              >
                {specialty}
              </Badge>
            ))}
          </div>
          <p className="text-muted-foreground mt-6">
            Naše nabídka se pravidelně mění podle sezóny a dostupnosti nejčerstvějších surovin.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Products;