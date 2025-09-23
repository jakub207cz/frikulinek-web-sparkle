import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone, Mail, Instagram, Facebook } from "lucide-react";

const Contact = () => {
  const openingHours = [
    { day: "Pondělí - Pátek", hours: "10:00 - 20:00" },
    { day: "Sobota - Neděle", hours: "10:00 - 21:00" },
    { day: "Svátky", hours: "10:00 - 18:00" },
  ];

  const contactInfo = [
    {
      icon: MapPin,
      title: "Adresa",
      content: "Koterovská 2060/132\n326 00 Plzeň\nVýchodní Předměstí",
      link: "https://maps.google.com/?q=Koterovská+2060/132,+Plzeň",
    },
    {
      icon: Phone,
      title: "Telefon",
      content: "+420 123 456 789",
      link: "tel:+420123456789",
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "info@frikulinek.cz",
      link: "mailto:info@frikulinek.cz",
    },
  ];

  const socialLinks = [
    { icon: Instagram, name: "Instagram", url: "#" },
    { icon: Facebook, name: "Facebook", url: "#" },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
            Navštivte <span className="text-gradient">nás</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Přijďte ochutnat naši vynikající zmrzlinu v příjemném prostředí našeho podniku v centru Plzně.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Contact Information Cards */}
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <Card key={index} className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex flex-col h-full">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-3 shadow-md">
                      <IconComponent className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-foreground">{info.title}</h3>
                    <div className="text-muted-foreground text-sm leading-relaxed flex-grow">
                      {info.content}
                    </div>
                    {info.link && (
                      <div className="mt-3">
                        <Button 
                          variant="outline"
                          size="sm"
                          className="group-hover:bg-primary/5 transition-colors text-sm h-8"
                          onClick={() => window.open(info.link, '_blank')}
                        >
                          {info.icon === MapPin ? "Zobrazit na mapě" : 
                           info.icon === Phone ? "Zavolat" : "Napsat e-mail"}
                        </Button>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}

          {/* Social Media Card */}
          <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <CardContent className="p-6">
              <div className="flex flex-col h-full">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-3 shadow-md">
                  <Instagram className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-foreground">Sledujte nás</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Buďte v obraze o novinkách, speciálních chutích a akcích.
                </p>
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {socialLinks.map((social, index) => {
                      const IconComponent = social.icon;
                      return (
                        <Button 
                          key={index}
                          variant="outline"
                          size="sm"
                          className="group-hover:bg-primary/5 transition-colors text-sm h-8"
                        >
                          <IconComponent className="h-3.5 w-3.5 mr-1.5" />
                          {social.name}
                        </Button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Opening Hours - Right Column */}
          <div className="lg:col-span-5">
            <Card className="h-full border-0 shadow-sm bg-gradient-to-br from-background to-muted/10">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-md">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-2xl">Otevírací doba</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {openingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-border/30 last:border-0">
                      <span className="font-medium text-foreground/90">{schedule.day}</span>
                      <span className="font-semibold text-primary">{schedule.hours}</span>
                    </div>
                  ))}
                  
                  {(() => {
                    const now = new Date();
                    const currentHour = now.getHours();
                    const isOpen = currentHour >= 8 && currentHour < 20;
                    const statusText = isOpen ? 'OTEVŘENO' : 'ZAVŘENO';
                    const statusClass = isOpen ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800';
                    
                    return (
                      <div className={`mt-6 p-4 rounded-xl ${statusClass} bg-opacity-50 backdrop-blur-sm text-center`}>
                        <p className="text-sm font-semibold">
                          Aktuálně <span className="font-bold">{statusText}</span>
                        </p>
                        <p className="text-xs mt-1 opacity-80">
                          {isOpen ? 'Přijďte nás navštívit!' : 'Otevíráme zítra v 10:00'}
                        </p>
                      </div>
                    );
                  })()}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;