import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  return <header className="studio-nav"><Link className="studio-logo" to="/" aria-label="Acelerik, inicio"><img src="/brand/acelerik-logo.svg" alt="Acelerik" width="180" height="40"/></Link><button className="studio-menu" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button><nav className={open ? 'is-open' : ''} aria-label="Navegación principal"><a href={pathname === '/' ? '#productos' : '/#productos'} onClick={() => setOpen(false)}>Soluciones</a><Link to="/parques" onClick={() => setOpen(false)}>Acelerik Booking</Link><a href="#contacto" onClick={() => setOpen(false)}>Hablemos <ArrowUpRight size={16}/></a></nav></header>;
}

export function PageMeta({ parks = false }: { parks?: boolean }) {
  useEffect(() => {
    const title = parks ? 'Acelerik Booking | Reservas para parques infantiles' : 'Acelerik | Software y automatizaciones para tu negocio';
    const description = parks ? 'Reservas de cumpleaños, cobro de señales y gestión desde un panel. Conoce Acelerik Booking y prueba la demo para parques infantiles.' : 'Software y automatizaciones para simplificar el trabajo de tu negocio. Descubre Acelerik Booking y cuéntanos qué proceso quieres automatizar.';
    document.title = title;
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', `https://www.acelerik.com${parks ? '/parques' : '/'}`);
    for (const selector of ['meta[name="description"]','meta[property="og:description"]','meta[name="twitter:description"]']) document.querySelector(selector)?.setAttribute('content', description);
    for (const selector of ['meta[property="og:title"]','meta[name="twitter:title"]']) document.querySelector(selector)?.setAttribute('content', title);
    for (const selector of ['meta[property="og:url"]','meta[name="twitter:url"]']) document.querySelector(selector)?.setAttribute('content', `https://www.acelerik.com${parks ? '/parques' : '/'}`);
    window.scrollTo(0, 0);
  }, [parks]);
  return null;
}

export function RevealObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('revealed'); observer.unobserve(entry.target); }
    }), { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return null;
}
