import { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { contact, legal, legalReady, siteUrl } from "@/lib/site-config";

type LegalKind = "aviso-legal" | "privacidad" | "cookies" | "terminos";
const titles: Record<LegalKind, string> = {
  "aviso-legal": "Aviso legal",
  privacidad: "Política de privacidad",
  cookies: "Política de cookies",
  terminos: "Términos de uso",
};
const pending = "Pendiente de completar por el titular";
const Email = () => (
  <a
    className="text-primary underline break-all"
    href={`mailto:${contact.email}`}
  >
    {contact.email}
  </a>
);

export default function LegalPage({ kind }: { kind: LegalKind }) {
  useEffect(() => {
    const previousTitle = document.title;
    const canonical = document.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    );
    const previousCanonical = canonical?.href;
    const metadata = [
      ['meta[property="og:url"]', `${siteUrl}/${kind}`],
      ['meta[name="twitter:url"]', `${siteUrl}/${kind}`],
      ['meta[property="og:title"]', `${titles[kind]} | ACELERIK`],
      ['meta[name="twitter:title"]', `${titles[kind]} | ACELERIK`],
      [
        'meta[name="description"]',
        `${titles[kind]} de ACELERIK: información sobre el titular, el uso de la web y el tratamiento de datos.`,
      ],
      ['meta[property="og:description"]', `${titles[kind]} de ACELERIK.`],
      ['meta[name="twitter:description"]', `${titles[kind]} de ACELERIK.`],
    ].map(([selector, content]) => {
      const element = document.querySelector<HTMLMetaElement>(selector);
      const previous = element?.content;
      if (element) element.content = content;
      return { element, previous };
    });
    const previousRobots = document.querySelector<HTMLMetaElement>(
      'meta[name="robots"]',
    );
    const previousRobotsContent = previousRobots?.content;
    const robots = previousRobots ?? document.createElement("meta");
    robots.name = "robots";
    if (!legalReady) {
      robots.content = "noindex, nofollow";
      if (!previousRobots) document.head.appendChild(robots);
    }
    document.title = `${titles[kind]} | ACELERIK`;
    if (canonical) canonical.href = `${siteUrl}/${kind}`;
    window.scrollTo(0, 0);
    return () => {
      document.title = previousTitle;
      metadata.forEach(({ element, previous }) => {
        if (element && previous !== undefined) element.content = previous;
      });
      if (canonical && previousCanonical) canonical.href = previousCanonical;
      if (!previousRobots) robots.remove();
      else if (previousRobotsContent !== undefined)
        robots.content = previousRobotsContent;
    };
  }, [kind]);

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto max-w-3xl px-4 py-12 md:py-20">
        <Link to="/" className="text-primary hover:underline">
          ← Volver a ACELERIK
        </Link>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-8 mb-6">
          {titles[kind]}
        </h1>
        {!legalReady && (
          <aside
            className="rounded-xl border border-primary/40 bg-primary/10 p-5 mb-8"
            role="note"
          >
            <strong>Borrador pendiente de revisión.</strong> Falta verificar las
            condiciones de tratamiento de las cuentas de los proveedores. Este
            texto todavía no es la versión legal definitiva.
          </aside>
        )}
        <div className="space-y-8 text-muted-foreground leading-relaxed [&_h2]:text-foreground [&_h2]:font-bold [&_h2]:text-xl [&_h2]:mb-3 [&_p]:mb-3 [&_a]:underline [&_a]:text-primary">
          {kind === "aviso-legal" && (
            <>
              <section>
                <h2>1. Titular y contacto</h2>
                <dl className="space-y-3">
                  <div>
                    <dt className="font-semibold text-foreground">
                      Nombre o razón social
                    </dt>
                    <dd>{legal.owner || pending}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-foreground">
                      Nombre comercial
                    </dt>
                    <dd>ACELERIK</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-foreground">NIF</dt>
                    <dd>{legal.taxId || pending}</dd>
                  </div>
                  {legal.address.trim() && (
                    <div>
                      <dt className="font-semibold text-foreground">
                        Domicilio profesional
                      </dt>
                      <dd>{legal.address}</dd>
                    </div>
                  )}
                  <div>
                    <dt className="font-semibold text-foreground">
                      Datos registrales, si corresponden
                    </dt>
                    <dd>{legal.registry || pending}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-foreground">
                      Correo electrónico
                    </dt>
                    <dd>
                      <Email />
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-foreground">Teléfono</dt>
                    <dd>
                      <a href="tel:+34657506301">{contact.phone}</a>
                    </dd>
                  </div>
                </dl>
              </section>
              <section>
                <h2>2. Objeto del sitio</h2>
                <p>
                  Esta web presenta los servicios de ACELERIK y permite
                  solicitar información, una demostración o un presupuesto. El
                  envío de una consulta no formaliza una contratación.
                </p>
              </section>
              <section>
                <h2>3. Uso y contenidos</h2>
                <p>
                  El uso de la web debe respetar la legislación y los derechos
                  de terceros. No se permite utilizar el formulario para enviar
                  contenido ilícito, suplantar identidades o interferir en el
                  funcionamiento del servicio.
                </p>
                <p>
                  Los contenidos y elementos de la web están sujetos a los
                  derechos de sus respectivos titulares. Su publicación no
                  concede una licencia de explotación comercial.
                </p>
              </section>
              <section>
                <h2>4. Enlaces y disponibilidad</h2>
                <p>
                  Los enlaces a WhatsApp y redes sociales llevan a servicios
                  externos con sus propias condiciones. Si detectas un error de
                  contenido o funcionamiento, puedes comunicarlo por correo
                  electrónico. Estas condiciones no excluyen las
                  responsabilidades exigibles por ley.
                </p>
              </section>
              <section>
                <h2>5. Información relacionada</h2>
                <p>
                  Consulta la{" "}
                  <Link to="/privacidad">política de privacidad</Link>, la{" "}
                  <Link to="/cookies">política de cookies</Link> y los{" "}
                  <Link to="/terminos">términos de uso</Link>.
                </p>
              </section>
            </>
          )}
          {kind === "privacidad" && (
            <>
              <section>
                <h2>1. Responsable</h2>
                <p>
                  {legal.owner || pending}, que opera bajo el nombre comercial
                  ACELERIK. Contacto para protección de datos: <Email />. El
                  teléfono de contacto figura en el aviso legal.
                </p>
              </section>
              <section>
                <h2>2. Datos, finalidad y base jurídica</h2>
                <p>
                  El formulario solicita nombre, email y mensaje para atender tu
                  consulta y responderte. La base jurídica es el consentimiento
                  que otorgas al marcar la casilla del formulario. También se
                  remiten la aceptación y la versión de esta información para
                  documentar la solicitud.
                </p>
                <p>
                  Estos datos no se utilizan para suscribirte a publicidad. No
                  incluyas datos de menores, información de salud ni otros datos
                  sensibles en el mensaje.
                </p>
              </section>
              <section>
                <h2>3. Proveedores y transferencias</h2>
                <p>
                  El formulario utiliza Formspree, Inc. para recibir y tramitar
                  los mensajes. Su{" "}
                  <a
                    href="https://formspree.io/legal/privacy-policy/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    política de privacidad
                  </a>{" "}
                  describe el tratamiento en Estados Unidos y otros países en
                  los que opera.
                </p>
                <p>
                  Proveedor de alojamiento de esta web:{" "}
                  {legal.hostingProvider || pending}. La correspondencia por
                  email se gestiona actualmente mediante Zoho Mail. Al contactar
                  por WhatsApp interviene también su proveedor, conforme a sus
                  condiciones.
                </p>
                <p>
                  Garantías aplicables a las transferencias internacionales y
                  cómo obtener una copia: {legal.transferSafeguards || pending}.
                </p>
              </section>
              <section>
                <h2>Vídeo de demostración</h2>
                <p>
                  El vídeo de YouTube solo se carga al pulsar el botón
                  correspondiente. Al hacerlo, Google recibe datos técnicos de
                  tu conexión y puede utilizar tecnologías de almacenamiento.
                  Puedes retirar esa elección cerrando el vídeo. Consulta la{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    política de privacidad de Google
                  </a>
                  .
                </p>
              </section>
              <section>
                <h2>4. Conservación</h2>
                <p>
                  Los datos se conservarán durante el tiempo necesario para
                  gestionar la consulta. Al finalizar se suprimirán, salvo
                  aquellos que deban conservarse debidamente bloqueados para
                  cumplir obligaciones legales o atender posibles
                  responsabilidades durante los plazos aplicables. Si se inicia
                  una relación contractual, se facilitará la información
                  correspondiente a ese tratamiento.
                </p>
              </section>
              <section>
                <h2>5. Tus derechos</h2>
                <p>
                  Puedes solicitar acceso, rectificación, supresión, limitación,
                  oposición y portabilidad cuando procedan, y retirar tu
                  consentimiento, escribiendo a <Email />. La retirada no afecta
                  a la licitud del tratamiento anterior.
                </p>
                <p>
                  Si consideras vulnerados tus derechos, puedes presentar una
                  reclamación ante la{" "}
                  <a
                    href="https://www.aepd.es/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Agencia Española de Protección de Datos
                  </a>
                  .
                </p>
              </section>
              <section>
                <h2>6. Alcance</h2>
                <p>
                  Esta política corresponde al contacto comercial de esta web.
                  Los datos de reservas y pagos de un negocio que contrate el
                  servicio requieren su propia información de privacidad y los
                  acuerdos que correspondan. No se toman decisiones
                  automatizadas ni se elaboran perfiles con los datos de este
                  formulario.
                </p>
              </section>
            </>
          )}
          {kind === "cookies" && (
            <>
              <section>
                <h2>1. Uso de cookies</h2>
                <p>
                  El código de las páginas públicas de esta web no incorpora
                  herramientas de analítica, píxeles publicitarios ni cookies de
                  seguimiento. No se carga un banner de consentimiento para
                  tecnologías que no se utilizan.
                </p>
                <p>
                  En la comprobación de navegación pública realizada el 10 de
                  octubre de 2026 no se observaron cookies. Esta información se
                  revisará si cambia la configuración del sitio o se incorporan
                  servicios adicionales.
                </p>
              </section>
              <section>
                <h2>2. Servicios externos</h2>
                <p>
                  Los enlaces a WhatsApp, Instagram y LinkedIn abren páginas
                  externas que aplican sus propias políticas. El formulario
                  envía los datos a Formspree únicamente al solicitar su envío;
                  no carga un formulario incrustado de ese proveedor.
                </p>
              </section>
              <section>
                <h2>Vídeo de YouTube</h2>
                <p>
                  El reproductor se carga únicamente cuando eliges ver el vídeo.
                  Utiliza el modo de privacidad mejorada de YouTube. Al
                  reproducirlo, Google puede tratar datos y utilizar tecnologías
                  de almacenamiento. Puedes cerrar el vídeo para dejar de cargar
                  el reproductor; para eliminar datos ya guardados, utiliza los
                  ajustes de tu navegador.
                </p>
              </section>
              <section>
                <h2>3. Configuración del navegador</h2>
                <p>
                  Puedes consultar y eliminar las cookies desde los ajustes de
                  privacidad de tu navegador. Si en el futuro se incorporan
                  tecnologías que requieran consentimiento, se ofrecerá la
                  opción de aceptarlas, rechazarlas y configurar o retirar la
                  elección antes de activarlas.
                </p>
              </section>
              <section>
                <h2>4. Contacto</h2>
                <p>
                  Para consultas sobre privacidad: <Email />.
                </p>
              </section>
            </>
          )}
          {kind === "terminos" && (
            <>
              <section>
                <h2>1. Consultas y demostraciones</h2>
                <p>
                  Esta web permite conocer los servicios y solicitar
                  información. Enviar el formulario o contactar por WhatsApp no
                  supone contratar un servicio ni aceptar un presupuesto.
                </p>
              </section>
              <section>
                <h2>2. Presupuestos y contratación</h2>
                <p>
                  Antes de contratar se concretarán por escrito el alcance, los
                  entregables, el plazo, el precio, los impuestos, la forma de
                  pago y las condiciones de cancelación. Cualquier importe
                  «desde» publicado necesita un presupuesto adaptado al
                  proyecto.
                </p>
              </section>
              <section>
                <h2>3. Instalación, mantenimiento y soporte</h2>
                <p>
                  El presupuesto especificará qué incluye la instalación, si
                  existe una cuota recurrente y su alcance: alojamiento,
                  mantenimiento, canales y horarios de soporte. También
                  detallará los costes de terceros y qué adaptaciones requieren
                  un presupuesto adicional.
                </p>
                <p>
                  Solicitar información no activa ninguna cuota ni implica un
                  compromiso de permanencia.
                </p>
              </section>
              <section>
                <h2>4. Demostraciones</h2>
                <p>
                  Las demostraciones sirven para evaluar el funcionamiento del
                  producto. Si un entorno se identifica como prueba, utiliza
                  datos ficticios y los medios de pago de prueba indicados. La
                  contratación del servicio se formaliza por separado.
                </p>
              </section>
              <section>
                <h2>5. Consultas e incidencias</h2>
                <p>
                  Puedes contactar con ACELERIK en <Email />. Estas condiciones
                  se interpretan conforme a la normativa aplicable y no limitan
                  los derechos que legalmente correspondan al usuario.
                </p>
              </section>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
