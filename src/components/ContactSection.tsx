import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Mail, ArrowRight } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success("¡Mensaje enviado! Te contactaremos pronto.");
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section
      ref={sectionRef}
      id="contacto"
      className="py-24 md:py-32 bg-background relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className={`${isVisible ? "animate-slide-right" : "opacity-0"}`}>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Contacto</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
              ¿Listo para automatizar tu negocio?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Cuéntanos sobre tu negocio y te proponemos las mejores soluciones de automatización. 
              La primera consulta es <span className="text-primary font-semibold">100% gratis</span>.
            </p>

            {/* WhatsApp CTA */}
            <div className="bg-card rounded-2xl p-6 border border-border mb-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#25D366]/20 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-[#25D366]" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground">¿Prefieres WhatsApp?</h3>
                  <p className="text-muted-foreground text-sm">Respuesta en menos de 24h</p>
                </div>
              </div>
              <Button
                variant="whatsapp"
                className="w-full"
                onClick={() => window.open("https://wa.me/34XXXXXXXXX", "_blank")}
              >
                <MessageCircle className="w-5 h-5" />
                Hablar con ACELERIK
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Email info */}
            <div className="flex items-center gap-3 text-muted-foreground">
              <Mail className="w-5 h-5 text-primary" />
              <span>info@acelerik.com</span>
            </div>
          </div>

          {/* Right form */}
          <div className={`${isVisible ? "animate-fade-up animation-delay-200" : "opacity-0"}`}>
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 border border-border">
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                Envíanos un mensaje
              </h3>

              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="text-sm font-medium text-foreground mb-2 block">
                    Nombre
                  </label>
                  <Input
                    id="name"
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-background border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="text-sm font-medium text-foreground mb-2 block">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-sm font-medium text-foreground mb-2 block">
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Cuéntanos sobre tu negocio y qué te gustaría automatizar..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={4}
                    className="bg-background border-border focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
