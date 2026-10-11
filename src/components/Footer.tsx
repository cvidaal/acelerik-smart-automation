import { contact } from "@/lib/site-config";
import { MessageCircle, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      href: contact.whatsapp,
      color: "hover:text-[#25D366]",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://instagram.com/acelerik.agency",
      color: "hover:text-[#E4405F]",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/company/acelerik",
      color: "hover:text-[#0A66C2]",
    },
  ];

  return (
    <footer className="bg-carbon-light border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-xl">
                  A
                </span>
              </div>
              <span className="font-display font-bold text-xl text-foreground">
                ACELER<span className="text-primary">IK</span>
              </span>
            </Link>

            {/* Tagline */}
            <p className="text-muted-foreground text-center md:text-left">
              Reservas online para parques infantiles
            </p>

            {/* Social links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground transition-all duration-300 hover:border-primary/30 hover:-translate-y-1 ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} ACELERIK. Todos los derechos reservados.</p>
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3">
            <Link to="/aviso-legal" className="hover:text-primary transition-colors">
              Aviso legal
            </Link>
            <Link to="/privacidad" className="hover:text-primary transition-colors">
              Política de privacidad
            </Link>
            <Link to="/terminos" className="hover:text-primary transition-colors">
              Términos de uso
            </Link>
            <Link to="/cookies" className="hover:text-primary transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
