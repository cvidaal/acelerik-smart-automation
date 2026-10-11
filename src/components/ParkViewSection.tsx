import { Button } from "@/components/ui/button";

const shots = [
  {
    src: "/demo/panel.png",
    alt: "Panel del parque con los cumpleaños del día y los próximos",
    title: "Panel",
    caption: "Los cumpleaños de hoy, la semana y el estado de cada señal.",
  },
  {
    src: "/demo/calendario.png",
    alt: "Calendario mensual de reservas del parque",
    title: "Calendario",
    caption: "El mes entero, con las fiestas de cada día.",
  },
  {
    src: "/demo/reserva.png",
    alt: "Página donde una familia reserva un cumpleaños y paga la señal",
    title: "Página de reserva",
    caption: "Lo que ve la familia: fecha, horario y señal.",
  },
];

const ParkViewSection = () => {
  return (
    <section id="asi-lo-ve" className="py-24 md:py-32 bg-background relative overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">El producto</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Así lo ve tu parque
          </h2>
          <p className="text-muted-foreground text-lg">
            El panel para el equipo, el calendario del mes y la página donde las familias reservan.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          {shots.map((shot) => (
            <figure key={shot.src} className="bg-card rounded-2xl border border-border overflow-hidden">
              <img src={shot.src} alt={shot.alt} className="w-full h-auto bg-carbon-light" />
              <figcaption className="p-5">
                <h3 className="font-display text-lg font-bold text-foreground mb-1">{shot.title}</h3>
                <p className="text-muted-foreground text-sm">{shot.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Button variant="hero" size="xl" asChild>
            <a href="https://acelerik-demo.onrender.com/reservar" target="_blank" rel="noopener noreferrer">
              Ver la demo
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ParkViewSection;
