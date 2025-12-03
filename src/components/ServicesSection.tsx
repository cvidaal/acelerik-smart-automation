import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Zap, Crown, Share2, Rocket } from "lucide-react";

const services = [
  {
    icon: Zap,
    name: "AAA Básico",
    description: "Automatización simple para empezar",
    price: "Desde 297€",
    features: [
      "Bot WhatsApp básico",
      "Integración con Google Sheets",
      "Respuestas automáticas",
      "Soporte por email",
    ],
    popular: false,
  },
  {
    icon: Crown,
    name: "AAA Premium",
    description: "Sistemas completos para crecer",
    price: "Desde 597€",
    features: [
      "Bot WhatsApp avanzado",
      "Sistema de reservas completo",
      "Integraciones múltiples",
      "Panel de control",
      "Soporte prioritario",
    ],
    popular: true,
  },
  {
    icon: Share2,
    name: "SMMA Básico",
    description: "Contenido automático",
    price: "Desde 197€",
    features: [
      "Publicaciones programadas",
      "Contenido automático",
      "2 redes sociales",
      "Informes mensuales",
    ],
    popular: false,
  },
  {
    icon: Rocket,
    name: "Celeric Hybrid",
    description: "Todo en uno para dominar",
    price: "Personalizado",
    features: [
      "Automatización completa",
      "Contenido + redes sociales",
      "Crecimiento digital",
      "Estrategia personalizada",
      "Soporte 24/7",
    ],
    popular: false,
  },
];

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="servicios"
      className="py-24 md:py-32 bg-carbon-light relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section header */}
        <div className={`text-center max-w-2xl mx-auto mb-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Servicios</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Planes que se adaptan a ti
          </h2>
          <p className="text-muted-foreground text-lg">
            Elige el nivel de automatización que necesita tu negocio. 
            Todos incluyen configuración y formación.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.name}
              className={`relative bg-card rounded-2xl p-6 border transition-all duration-500 card-hover ${
                service.popular 
                  ? "border-primary shadow-glow" 
                  : "border-border hover:border-primary/30"
              } ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Popular badge */}
              {service.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                    MÁS POPULAR
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                service.popular ? "bg-primary" : "bg-primary/10"
              }`}>
                <service.icon className={`w-6 h-6 ${service.popular ? "text-primary-foreground" : "text-primary"}`} />
              </div>

              {/* Name & Description */}
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                {service.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {service.description}
              </p>

              {/* Price */}
              <div className="mb-6">
                <span className="text-2xl font-display font-bold text-primary">
                  {service.price}
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={service.popular ? "default" : "outline"}
                className="w-full"
                onClick={() => window.open("https://wa.me/34XXXXXXXXX", "_blank")}
              >
                Solicitar info
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
