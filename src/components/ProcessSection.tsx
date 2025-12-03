import { useEffect, useRef, useState } from "react";
import { Search, PenTool, Wrench, Play, Headphones } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Diagnóstico gratis",
    description: "Analizamos tu negocio y detectamos oportunidades de automatización.",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Diseño del sistema",
    description: "Creamos un plan personalizado con los flujos que necesitas.",
  },
  {
    number: "03",
    icon: Wrench,
    title: "Construcción",
    description: "Desarrollamos tu automatización en n8n, Make o Zapier.",
  },
  {
    number: "04",
    icon: Play,
    title: "Activación",
    description: "Ponemos en marcha el sistema y te formamos para usarlo.",
  },
  {
    number: "05",
    icon: Headphones,
    title: "Soporte mensual",
    description: "Te acompañamos con mantenimiento y mejoras continuas.",
  },
];

const ProcessSection = () => {
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
      id="proceso"
      className="py-24 md:py-32 bg-background relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section header */}
        <div className={`text-center max-w-2xl mx-auto mb-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Proceso</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Cómo funciona ACELERIK
          </h2>
          <p className="text-muted-foreground text-lg">
            Un proceso simple y transparente para automatizar tu negocio.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection line - desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 -translate-y-1/2" />

          {/* Steps */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`relative ${isVisible ? "animate-fade-up" : "opacity-0"}`}
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                {/* Card */}
                <div className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300 card-hover h-full">
                  {/* Number badge */}
                  <div className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-primary flex items-center justify-center z-10">
                    <span className="text-primary-foreground text-xs font-bold">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 mt-2">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connection node - desktop */}
                <div className="hidden lg:block absolute -bottom-4 left-1/2 -translate-x-1/2">
                  <div className="w-3 h-3 rounded-full bg-primary animate-glow-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
