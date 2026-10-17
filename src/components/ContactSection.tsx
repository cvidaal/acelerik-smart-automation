import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Mail, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { contact, legal } from "@/lib/site-config";

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [submissionError, setSubmissionError] = useState("");
  const submittingRef = useRef(false);
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
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submittingRef.current) return;
    if (!privacyAccepted) {
      setSubmissionError(
        "Debes autorizar el tratamiento de tus datos para enviar la consulta.",
      );
      return;
    }
    submittingRef.current = true;
    setIsSubmitting(true);
    setSubmissionError("");
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 15000);

    try {
      const response = await fetch(contact.formEndpoint, {
        method: "POST",
        signal: controller.signal,
        credentials: "omit",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formData,
          _subject: "Nueva consulta desde acelerik.com",
          source: "www.acelerik.com",
          privacy_consent: true,
          privacy_version: legal.privacyVersion,
        }),
      });

      if (!response.ok) {
        throw new Error("Error al enviar el formulario");
      }

      toast.success("¡Mensaje enviado! Te contactaremos pronto.");
      setFormData({ name: "", email: "", message: "" });
      setPrivacyAccepted(false);
    } catch {
      setSubmissionError(
        "No hemos podido confirmar el envío. Conservamos tu mensaje para que puedas reintentarlo o contactar por email o WhatsApp.",
      );
    } finally {
      window.clearTimeout(timeout);
      submittingRef.current = false;
      setIsSubmitting(false);
    }
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
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Contacto
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
              ¿Qué te gustaría dejar de hacer a mano?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Cuéntanos qué proceso te quita tiempo y vemos si se puede
              automatizar.{" "}
              La primera consulta es{" "}
              <span className="text-primary font-semibold">100% gratis</span>.
            </p>

            {/* WhatsApp CTA */}
            <div className="bg-card rounded-2xl p-6 border border-border mb-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#25D366]/20 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-[#25D366]" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground">
                    ¿Prefieres WhatsApp?
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Habla directamente con nosotros
                  </p>
                </div>
              </div>
              <Button
                variant="whatsapp"
                className="w-full"
                onClick={() =>
                  window.open(
                    contact.whatsapp,
                    "_blank",
                    "noopener,noreferrer",
                  )
                }
              >
                <MessageCircle className="w-5 h-5" />
                Hablar con ACELERIK
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Email info */}
            <div className="flex items-center gap-3 text-muted-foreground">
              <Mail className="w-5 h-5 text-primary" />
              <a
                href={`mailto:${contact.email}`}
                className="break-all hover:text-primary underline"
              >
                {contact.email}
              </a>
            </div>
          </div>

          {/* Right form */}
          <div
            className={`${isVisible ? "animate-fade-up animation-delay-200" : "opacity-0"}`}
          >
            <form
              onSubmit={handleSubmit}
              aria-busy={isSubmitting}
              className="bg-card rounded-2xl p-8 border border-border"
            >
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                Envíanos un mensaje
              </h3>

              <fieldset disabled={isSubmitting} className="space-y-4">
                <legend className="sr-only">
                  Datos de contacto y consulta
                </legend>
                <div>
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-foreground mb-2 block"
                  >
                    Nombre
                  </label>
                  <Input
                    id="name"
                    placeholder="Tu nombre"
                    name="name"
                    autoComplete="name"
                    maxLength={120}
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="bg-background border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-foreground mb-2 block"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    maxLength={254}
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="bg-background border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-foreground mb-2 block"
                  >
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    placeholder="¿Qué te gustaría automatizar en tu negocio?"
                    name="message"
                    maxLength={5000}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    rows={4}
                    className="bg-background border-border focus:border-primary resize-none"
                  />
                </div>

                <div
                  className="rounded-lg border border-border bg-background p-4 text-xs text-muted-foreground space-y-2"
                  id="privacy-summary"
                >
                  <p>
                    <strong>Responsable:</strong>{" "}
                    {legal.owner ||
                      "Titular de ACELERIK (identificación pendiente de completar)"}
                    .
                  </p>
                  <p>
                    <strong>Finalidad:</strong> responder a tu consulta.{" "}
                    <strong>Base jurídica:</strong> tu consentimiento. El envío
                    se tramita mediante Formspree, con tratamiento en Estados
                    Unidos.
                  </p>
                  <p>
                    <strong>Derechos:</strong> puedes retirar tu consentimiento
                    y solicitar acceso, rectificación o supresión en{" "}
                    {contact.email}. Consulta los demás derechos y detalles en
                    la{" "}
                    <Link
                      to="/privacidad"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline"
                    >
                      política de privacidad (nueva pestaña)
                    </Link>
                    .
                  </p>
                  <p>No incluyas datos de menores ni información sensible.</p>
                </div>
                <div className="flex items-start gap-3">
                  <input
                    id="privacy-consent"
                    name="privacy-consent"
                    type="checkbox"
                    required
                    checked={privacyAccepted}
                    onChange={(event) =>
                      setPrivacyAccepted(event.target.checked)
                    }
                    aria-describedby="privacy-summary"
                    className="mt-1 h-4 w-4 shrink-0 accent-primary"
                  />
                  <label
                    htmlFor="privacy-consent"
                    className="text-sm text-muted-foreground"
                  >
                    Acepto la{" "}
                    <Link
                      to="/privacidad"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline"
                    >
                      política de privacidad
                    </Link>{" "}
                    y consiento el tratamiento de mis datos para responder a
                    esta consulta.
                  </label>
                </div>
                {submissionError && (
                  <p role="alert" className="text-sm text-destructive">
                    {submissionError}
                  </p>
                )}
                <Button
                  type="submit"
                  variant="hero"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
