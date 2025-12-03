import { useEffect, useRef, useState } from "react";
import { Calendar, MessageSquare, FileSpreadsheet, GitBranch } from "lucide-react";

const cases = [
  {
    icon: Calendar,
    title: "Sistema de reservas",
    subtitle: "Parque de bolas",
    description: "Automatización completa de reservas con confirmación por WhatsApp y sincronización con Google Calendar.",
    result: "-80% llamadas",
    gradient: "from-blue-500/20 to-blue-500/5",
  },
  {
    icon: MessageSquare,
    title: "Bot de atención",
    subtitle: "Clínica dental",
    description: "Bot inteligente que responde FAQs, agenda citas y envía recordatorios automáticos.",
    result: "+95% satisfacción",
    gradient: "from-green-500/20 to-green-500/5",
  },
  {
    icon: FileSpreadsheet,
    title: "Automatización Sheets",
    subtitle: "E-commerce",
    description: "Sincronización automática de pedidos, inventario y facturación entre plataformas.",
    result: "-15h/semana",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: GitBranch,
    title: "Flujo n8n completo",
    subtitle: "Agencia marketing",
    description: "Sistema de captación de leads con scoring automático e integración con CRM.",
    result: "+200% leads",
    gradient: "from-purple-500/20 to-purple-500/5",
  },
];

const CasesSection = () => {
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
      id="casos"
      className="py-24 md:py-32 bg-carbon-light relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section header */}
        <div className={`text-center max-w-2xl mx-auto mb-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Casos reales</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Resultados que hablan
          </h2>
          <p className="text-muted-foreground text-lg">
            Automatizaciones reales que están transformando negocios como el tuyo.
          </p>
        </div>

        {/* Cases grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {cases.map((caseItem, index) => (
            <div
              key={caseItem.title}
              className={`group relative bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-500 card-hover ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${caseItem.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  {/* Icon & Title */}
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <caseItem.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {caseItem.title}
                      </h3>
                      <span className="text-primary text-sm font-medium">{caseItem.subtitle}</span>
                    </div>
                  </div>

                  {/* Result badge */}
                  <div className="bg-primary/10 px-3 py-1 rounded-full">
                    <span className="text-primary font-bold text-sm">{caseItem.result}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {caseItem.description}
                </p>

                {/* Decorative element */}
                <div className="mt-6 flex items-center gap-2">
                  <div className="h-1 w-8 bg-primary/30 rounded group-hover:w-16 group-hover:bg-primary transition-all duration-500" />
                  <div className="h-1 w-4 bg-primary/20 rounded group-hover:w-8 group-hover:bg-primary/50 transition-all duration-500" />
                  <div className="h-1 w-2 bg-primary/10 rounded group-hover:w-4 group-hover:bg-primary/30 transition-all duration-500" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
