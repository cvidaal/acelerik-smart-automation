import { contact } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";
// import heroBackground from "@/assets/hero-background.png";
import heroBackground from "@/assets/background.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-16">
      {/* Background Image */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-up">
            <div className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
            <span className="text-primary text-sm font-medium">
              Para parques infantiles
            </span>
          </div>

          {/* Main title */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.05] mb-6 animate-fade-up animation-delay-100">
            El cumpleaños
            <br />
            se reserva <span className="text-gradient">solo</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed animate-fade-up animation-delay-200">
            Tus clientes miran qué días hay libres, eligen fecha y dejan la señal. Tú ves cada reserva en un único panel, sin perseguir confirmaciones.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up animation-delay-300">
            <Button
              variant="hero"
              size="xl"
              onClick={() => window.open(contact.whatsapp, "_blank", "noopener,noreferrer")}
              className="group"
            >
              <MessageCircle className="w-5 h-5" />
              Hablar por WhatsApp
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="glass"
              size="xl"
              onClick={() =>
                document
                  .querySelector("#casos")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Ver la demo
            </Button>
          </div>

        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
