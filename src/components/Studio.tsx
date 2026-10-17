import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { contact, siteUrl } from '@/lib/site-config';

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  return <header className="studio-nav"><Link className="studio-logo" to="/" aria-label="Acelerik, inicio"><img src="/brand/acelerik-logo.svg" alt="Acelerik" width="180" height="40"/></Link><button className="studio-menu" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button><nav className={open ? 'is-open' : ''} aria-label="Navegación principal">{[['#productos', 'Productos'], ['#como-funciona', 'Cómo funciona'], ['#contacto', 'Contacto']].map(([hash, label]) => <a key={hash} href={pathname === '/' ? hash : `/${hash}`} onClick={() => setOpen(false)}>{label}</a>)}<a className="nav-whatsapp" href={contact.whatsapp} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}><svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="currentColor"><path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .16 5.33.16 11.89c0 2.1.55 4.14 1.59 5.95L0 24l6.3-1.65a11.9 11.9 0 0 0 5.76 1.47h.01c6.55 0 11.89-5.34 11.89-11.9 0-3.18-1.24-6.16-3.44-8.44zM12.07 21.5h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.74.98 1-3.64-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.89 9.9-9.89 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.88 9.88zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35z"/></svg>WhatsApp</a></nav></header>;
}

// Keep in sync with index.html: legal pages change these tags, so the home restores them.
export function PageMeta() {
  useEffect(() => {
    const title = 'Acelerik | Sistemas de automatización con IA';
    const description = 'Sistemas de automatización con IA que conectan tus herramientas y hacen el trabajo repetitivo. Conoce nuestros productos, como Acelerik Booking.';
    document.title = title;
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', `${siteUrl}/`);
    for (const selector of ['meta[name="description"]','meta[property="og:description"]','meta[name="twitter:description"]']) document.querySelector(selector)?.setAttribute('content', description);
    for (const selector of ['meta[property="og:title"]','meta[name="twitter:title"]']) document.querySelector(selector)?.setAttribute('content', title);
    for (const selector of ['meta[property="og:url"]','meta[name="twitter:url"]']) document.querySelector(selector)?.setAttribute('content', `${siteUrl}/`);
    window.scrollTo(0, 0);
  }, []);
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
