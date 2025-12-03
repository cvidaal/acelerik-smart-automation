import { useEffect, useRef, useState } from "react";
import { MessageSquare, Cog, Calendar } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Bots Inteligentes de WhatsApp",
    description: "Responden preguntas, gestionan reservas, informan de precios y horarios. Tu negocio disponible 24/7 sin intervención manual.",
    color: "from-green-500/20 to-green-500/5",
  },
  {
    icon: Cog,
    title: "Automatización de Procesos",
    description: "Facturación automática, gestión de envíos, emails personalizados, captura de leads y formularios que trabajan solos.",
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: Calendar,
    title: "Sistemas de Reservas",
    description: "Integración completa con Google Calendar, Sheets y n8n. Tus clientes reservan, tú descansas.",
    color: "from-blue-500/20 to-blue-500/5",
  },
];

const WhatWeDoSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="que-hacemos"
      className="py-24 md:py-32 bg-background relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section header */}
        <div className={`text-center max-w-2xl mx-auto mb-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Qué hacemos</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Automatización inteligente para tu negocio
          </h2>
          <p className="text-muted-foreground text-lg">
            Transformamos tareas repetitivas en sistemas que funcionan solos, 
            permitiéndote enfocarte en lo que realmente importa.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group relative bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-500 card-hover ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative line */}
                <div className="mt-6 h-0.5 w-12 bg-primary/30 group-hover:w-full group-hover:bg-primary transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
