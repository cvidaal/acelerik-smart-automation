import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";
import heroBackground from "@/assets/hero-background.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
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
            <span className="text-primary text-sm font-medium">Agencia de Automatización con IA</span>
          </div>

          {/* Main title */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-foreground leading-tight mb-6 animate-fade-up animation-delay-100">
            ACELER<span className="text-gradient">IK</span>
            <br />
            <span className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground font-medium">
              Automatización con IA para negocios modernos
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed animate-fade-up animation-delay-200">
            Transforma tu negocio con sistemas inteligentes que trabajan por ti{" "}
            <span className="text-primary font-semibold">24/7</span>. 
            Reducimos costes, aumentamos eficiencia y liberamos tu tiempo.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up animation-delay-300">
            <Button
              variant="hero"
              size="xl"
              onClick={() => window.open("https://wa.me/34XXXXXXXXX", "_blank")}
              className="group"
            >
              <MessageCircle className="w-5 h-5" />
              Hablar por WhatsApp
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="glass"
              size="xl"
              onClick={() => document.querySelector("#que-hacemos")?.scrollIntoView({ behavior: "smooth" })}
            >
              Descubre más
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-border/50 animate-fade-up animation-delay-400">
            <div>
              <span className="text-3xl md:text-4xl font-display font-bold text-primary">+50</span>
              <p className="text-muted-foreground text-sm">Automatizaciones activas</p>
            </div>
            <div>
              <span className="text-3xl md:text-4xl font-display font-bold text-primary">24/7</span>
              <p className="text-muted-foreground text-sm">Sistemas trabajando</p>
            </div>
            <div>
              <span className="text-3xl md:text-4xl font-display font-bold text-primary">-70%</span>
              <p className="text-muted-foreground text-sm">Tiempo en tareas</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
