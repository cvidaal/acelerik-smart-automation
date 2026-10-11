import { useState } from "react";
import { Calendar, CreditCard, LayoutDashboard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CasesSection = ({ videoLoaded: controlledVideo, onVideoChange }: { videoLoaded?: boolean; onVideoChange?: (loaded: boolean) => void }) => {
  const [localVideo, setLocalVideo] = useState(false);
  const videoLoaded = controlledVideo ?? localVideo;
  const setVideoLoaded = onVideoChange ?? setLocalVideo;
  return (
    <section id="casos" className="py-24 md:py-32 bg-carbon-light relative overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Acelerik Booking</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Demo: sistema de reservas para parques infantiles
          </h2>
          <p className="text-muted-foreground text-lg">
            Mira el recorrido completo: elegir fecha, reservar un cumpleaños, pagar una señal de prueba y consultar la reserva en el panel.
          </p>
        </div>
        <div className="max-w-4xl mx-auto bg-card rounded-2xl border border-border overflow-hidden">
          {videoLoaded ? (
            <div className="aspect-video">
              <iframe className="w-full h-full" src="https://www.youtube-nocookie.com/embed/GGFnJBzPR6k?rel=0&autoplay=1"
                title="Demo de Acelerik Booking: reservas, pago de señal y panel"
                allow="autoplay; encrypted-media; picture-in-picture; fullscreen" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center text-center p-6 sm:p-10 bg-gradient-card">
              <img src="/demo/booking-cover.png" alt="Demo Acelerik Booking: reservas de cumpleaños, señal, confirmación y calendario" width="1672" height="941" loading="lazy" className="w-full rounded-lg mb-6" />
              <h3 className="font-display text-xl sm:text-2xl font-bold mb-4">Así funciona una reserva</h3>
              <p className="text-muted-foreground text-sm max-w-lg mb-6">
                Al cargar el vídeo se establece una conexión con YouTube (Google), que puede tratar datos de navegación.
                Consulta la <Link to="/privacidad" className="text-primary underline">política de privacidad</Link>.
              </p>
              <Button variant="hero" onClick={() => setVideoLoaded(true)}>Ver el vídeo</Button>
            </div>
          )}
          <div className="p-6 sm:p-8">
            <div className="grid sm:grid-cols-3 gap-5 mb-8 text-sm text-muted-foreground">
              <p className="flex items-center gap-3"><Calendar className="w-5 h-5 text-primary shrink-0" aria-hidden="true" />Reserva online</p>
              <p className="flex items-center gap-3"><CreditCard className="w-5 h-5 text-primary shrink-0" aria-hidden="true" />Cobro de señal</p>
              <p className="flex items-center gap-3"><LayoutDashboard className="w-5 h-5 text-primary shrink-0" aria-hidden="true" />Gestión desde el panel</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-between">
              <p className="text-muted-foreground text-sm">Entorno de demostración. Utiliza datos ficticios y pagos de prueba.</p>
              <Button variant="hero" asChild><a href="https://acelerik-demo.onrender.com/reservar" target="_blank" rel="noopener noreferrer">Ver la demo</a></Button>
            </div>
            {videoLoaded && <button className="mt-5 text-sm text-primary underline" onClick={() => setVideoLoaded(false)}>Cerrar vídeo y desconectar YouTube</button>}
          </div>
        </div>
      </div>
    </section>
  );
};
export default CasesSection;
