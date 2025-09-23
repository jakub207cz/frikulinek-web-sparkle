import { Card, CardContent } from "@/components/ui/card";
import { Award, Clock, Users, MapPin } from "lucide-react";
import cafeInteriorImage from "@/assets/cafe-interior.jpg";

const About = () => {
  const features = [
    {
      icon: Award,
      title: "Kvalita na prvním místě",
      description: "Používáme pouze ty nejkvalitnější suroviny a tradiční postupy výroby.",
    },
    {
      icon: Clock,
      title: "Čerstvé každý den",
      description: "Naše zákusky se připravují denně v našich prostorách pro maximální čerstvost.",
    },
    {
      icon: Users,
      title: "Rodinný podnik",
      description: "Jsme místní rodinný podnik s láskou k tradici a inovacím.",
    },
    {
      icon: MapPin,
      title: "Srdce Plzně",
      description: "Nacházíme se v centru Plzně, snadno dostupní pro všechny milovníky sladkého a kávy.",
    },
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Příběh <span className="text-gradient">Frikulínku</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Frikulínek je moderní cukrárna a kavárna v srdci Plzně, kde se tradice setkává s inovacemi. 
              Naším cílem je přinést vám ty nejlepší zákusky a kávu připravené s láskou a péčí o každý detail.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Každý den připravujeme čerstvé zákusky z nejkvalitnějších surovin a pražíme výběrovou kávu. Naše receptury 
              kombinují tradiční cukrářské postupy s moderními technikami, aby vznikla dokonalá harmonie chutí.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">30+</div>
                <div className="text-sm text-muted-foreground">Druhů zákusků</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Čerstvé suroviny</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="slide-up">
            <div className="relative">
              <img 
                src={cafeInteriorImage} 
                alt="Interiér Frikulínku"
                className="w-full h-96 object-cover rounded-2xl shadow-elegant"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12">Proč si vybrat Frikulínek?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card 
                  key={index}
                  className="text-center hover:shadow-soft transition-all duration-300 hover:scale-105 glass-effect"
                >
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;