import { useState } from 'react';
import { ArrowUpRight, ArrowRight, Inbox, Sparkles, Check, Layers, Play, Pause, Workflow } from 'lucide-react';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { SiteNav, PageMeta, RevealObserver } from '@/components/Studio';
import { products } from '@/lib/site-config';
import '@/studio.css';

const steps = [
  { icon: Inbox, title: 'Llega una solicitud', text: 'Un formulario, un mensaje o un pedido. Da igual por dónde entre.' },
  { icon: Sparkles, title: 'El sistema la entiende', text: 'La IA interpreta lo que hace falta y la automatización ejecuta cada paso.' },
  { icon: Check, title: 'Todo queda resuelto', text: 'Registrado, avisado y a la vista de tu equipo. Sin copiar y pegar.' },
];

const principles = [
  ['01', 'Primero, tu proceso', 'Nos cuentas cómo trabajas y buscamos dónde se pierde el tiempo. Sin venderte funciones que no necesitas.'],
  ['02', 'IA donde aporta', 'Usamos IA para entender y decidir, y automatización clásica donde basta. Lo que importa es que funcione cada día.'],
  ['03', 'Sabes lo que contratas', 'Acordamos alcance, puesta en marcha, soporte y costes de servicios externos antes de empezar.'],
];

export default function Index() {
  const [active, setActive] = useState(0);
  const [motion, setMotion] = useState(true);
  const Icon = steps[active].icon;

  return (
    <div className={`studio ${motion ? '' : 'motion-paused'}`}>
      <PageMeta />
      <RevealObserver />
      <SiteNav />
      <main>
        <section className="studio-hero wrap">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> SISTEMAS DE AUTOMATIZACIÓN CON IA</p>
            <h1>Tu negocio.<br />Con menos <span className="outline-word">tareas.</span><br /><span className="accent-word">Más impulso.</span></h1>
            <p className="hero-description">
              Diseñamos sistemas que conectan tus herramientas y usan IA para hacer el trabajo repetitivo.<br className="desktop-break" />
              {' '}Para que tu equipo se dedique a lo que de verdad importa.
            </p>
            <div className="actions">
              <a className="studio-button" href="#productos">Ver productos <ArrowUpRight size={20} /></a>
              <a className="text-link" href="#contacto">Cuéntanos tu proceso <ArrowRight size={17} /></a>
            </div>
            <div className="hero-footnote"><span>Hecho para el trabajo de verdad.</span><span>01 — Menos fricción, más acción</span></div>
          </div>
          <div className="automation-art" aria-label="Ilustración de un proceso automatizado">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" /><div className="art-grid" />
            <div className="engine"><img src="/brand/acelerik-icon-transparent.svg" alt="" width="90" height="90" /><span>ACELERIK</span></div>
            <div className="floating-label label-one"><Inbox size={20} /><div><small>ENTRADA</small><strong>Nueva solicitud</strong></div><span className="tiny-dot" /></div>
            <div className="floating-label label-two"><Sparkles size={20} /><div><small>IA</small><strong>Clasificada</strong></div><Check size={15} /></div>
            <div className="floating-label label-three"><Layers size={20} /><div><small>RESULTADO</small><strong>Todo en su sitio</strong></div></div>
            <div className="art-caption">
              <span>Un proceso conectado. Un negocio en marcha.</span>
              <button onClick={() => setMotion(!motion)} aria-label={motion ? 'Pausar animaciones' : 'Activar animaciones'}>{motion ? <Pause size={15} /> : <Play size={15} />}</button>
            </div>
          </div>
        </section>

        <div className="capability-strip"><span>IA</span><i>✳</i><span>AUTOMATIZACIÓN</span><i>✳</i><span>INTEGRACIONES</span><i>✳</i><span>PAGOS</span><i>✳</i><span>AVISOS</span></div>

        <section id="productos" className="wrap studio-section reveal">
          <div className="section-heading">
            <div><p className="eyebrow">02 / PRODUCTOS</p><h2>Menos promesas.<br />Más producto.</h2></div>
            <p>Cuando un sistema resuelve bien un problema, lo convertimos en producto para que otros negocios lo usen desde el primer día.</p>
          </div>
          <a href={products.booking} className="featured-product">
            <div className="product-copy">
              <span className="product-tag"><span className="status-dot" /> PRIMER PRODUCTO · DEMO DISPONIBLE</span>
              <div>
                <p className="eyebrow">PARQUES INFANTILES Y CUMPLEAÑOS</p>
                <h3>Acelerik<br />Booking<span>↗</span></h3>
                <p>Reservas de cumpleaños online, cobro de la señal y un panel para el equipo del parque.</p>
              </div>
              <span className="product-link">Ir a booking.acelerik.com <ArrowUpRight /></span>
            </div>
            <div className="product-screen">
              <div className="screen-bar"><span /><span /><span /><small>ACELERIK BOOKING / VISTA DE LA DEMO</small></div>
              <img src="/demo/panel.png" alt="Panel de la demo de Acelerik Booking con la gestión de cumpleaños" loading="lazy" />
              <div className="screen-caption"><span>Reserva online</span><span>Cobro de señal</span><span>Panel de gestión</span></div>
            </div>
          </a>
          <div className="custom-row">
            <div><span className="eyebrow">¿TU SECTOR TIENE SU PROPIO CUELLO DE BOTELLA?</span><h3>El siguiente producto puede nacer de tu problema.</h3></div>
            <a href="#contacto" className="text-link">Cuéntanos qué necesitas <ArrowUpRight size={22} /></a>
          </div>
        </section>

        <section id="como-funciona" className="workflow-section">
          <div className="wrap workflow-grid reveal">
            <div>
              <p className="eyebrow">03 / CÓMO FUNCIONA</p>
              <h2>El trabajo avanza.<br /><span className="muted-word">Tú no tienes que<br />perseguirlo.</span></h2>
              <p className="section-description">Así es un proceso automatizado con IA. Explora cada paso.</p>
              <div className="workflow-tabs" role="tablist" aria-label="Pasos de un proceso automatizado">
                {steps.map((step, i) => (
                  <button
                    key={step.title}
                    id={`step-${i}`}
                    role="tab"
                    aria-selected={active === i}
                    aria-controls="workflow-panel"
                    tabIndex={active === i ? 0 : -1}
                    onKeyDown={event => {
                      const next = event.key === 'ArrowDown' || event.key === 'ArrowRight' ? (i + 1) % 3 : event.key === 'ArrowUp' || event.key === 'ArrowLeft' ? (i + 2) % 3 : event.key === 'Home' ? 0 : event.key === 'End' ? 2 : null;
                      if (next !== null) { event.preventDefault(); setActive(next); document.getElementById(`step-${next}`)?.focus(); }
                    }}
                    onClick={() => setActive(i)}
                  >
                    <span>0{i + 1}</span>{step.title}<ArrowRight size={18} />
                  </button>
                ))}
              </div>
            </div>
            <div className="workflow-demo" id="workflow-panel" role="tabpanel" aria-labelledby={`step-${active}`}>
              <span className="eyebrow">RECORRIDO ILUSTRATIVO</span>
              <div className="workflow-visual" key={active}>
                <div className="workflow-icon"><Icon size={45} /></div>
                <div className="workflow-line" />
                <div className="workflow-result"><span className="status-dot" /> PASO 0{active + 1}<h3>{steps[active].title}</h3><p>{steps[active].text}</p></div>
              </div>
              <div className="workflow-progress">{steps.map((_, i) => <span key={i} className={i <= active ? 'filled' : ''} />)}</div>
              <a href={products.booking} className="text-link">Verlo en un producto real <Workflow size={18} /></a>
            </div>
          </div>
        </section>

        <section className="wrap studio-section reveal">
          <p className="eyebrow">04 / CÓMO TRABAJAMOS</p>
          <div className="section-heading">
            <h2>La tecnología sola<br />no es la solución.</h2>
            <p>El valor está en que encaje en tu negocio. Por eso hablamos de procesos antes de hablar de herramientas.</p>
          </div>
          <div className="principles">
            {principles.map(([n, t, d]) => <article key={n}><span>{n} /</span><h3>{t}</h3><p>{d}</p></article>)}
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
