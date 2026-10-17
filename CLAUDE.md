# CLAUDE.md

## Qué es este proyecto

Web comercial de **ACELERIK** (https://www.acelerik.com), negocio de Carlos Vidal (persona física, sin sociedad). **Acelerik es una empresa de sistemas de automatización con IA**, no una empresa de reservas. Cada producto tiene que tener su propia web e identidad, diferenciada de la marca principal.

El primer producto es **Acelerik Booking**, para **parques infantiles** (reservas de cumpleaños online, cobro de señal y panel de gestión). Ahora vive en `/parques` dentro de esta misma web, pero ya se ha separado en su propio repo, `../acelerik-booking` (para `https://booking.acelerik.com`, en Cloudflare Pages). Cuando esté publicado, `/parques` tiene que redirigir allí y esta web también migra a Cloudflare Pages. El software de reservas está en `../acelerik-demo-cumple`. Al escribir textos para la web principal, no la centres en parques ni en reservas: Booking es un producto más del catálogo.

Este repositorio es **solo la web de marketing**, no el software de reservas. La demo del producto está en otro sitio: https://acelerik-demo.onrender.com/reservar (datos ficticios y pagos de prueba).

Todo el contenido visible está en **español de España** y se dirige a dueños de parques infantiles: tono directo, sin cifras ni promesas no acreditadas.

## Stack

- React 18 + TypeScript + Vite 5 (plugin SWC). Proyecto creado originalmente con Lovable (`lovable-tagger` en dev).
- Tailwind CSS 3 + shadcn/ui (Radix) en `src/components/ui/`, alias `@/` → `src/`.
- React Router 6 (SPA). React Query está montado pero no se usa para datos.
- Formulario de contacto: `fetch` directo a **Formspree**; toasts con `sonner`.
- Alojamiento: **Vercel**. Correo: hola@acelerik.com (Zoho Mail).
- Sin backend propio, sin variables de entorno, sin analítica ni cookies. El README menciona n8n/OpenAI, pero no hay nada de eso en el código.

## Comandos

```bash
npm install
npm run dev        # http://localhost:8080 (acepta túneles *.loca.lt)
npm run build      # vite build + scripts/product-page.mjs
npm run lint
npx tsc --noEmit -p tsconfig.app.json   # comprobación de tipos
```

No hay tests automatizados. Hay `bun.lockb` y `package-lock.json`; se usa npm.

## Estructura

```
src/
  App.tsx                 rutas: /, /parques, /aviso-legal, /privacidad, /cookies, /terminos, * (404)
  pages/Index.tsx         portada (soluciones, "cómo funciona", principios, contacto)
  pages/Parks.tsx         página de producto Acelerik Booking (/parques)
  pages/LegalPage.tsx     las cuatro páginas legales, según la prop `kind`
  pages/NotFound.tsx      404 con noindex
  components/Studio.tsx   SiteNav, PageMeta (title/meta/canonical por página), RevealObserver
  components/ContactSection.tsx  formulario Formspree con consentimiento de privacidad
  components/{Footer,ParkViewSection,CasesSection}.tsx
  components/ui/          shadcn/ui generado (no editar salvo necesidad)
  lib/site-config.ts      datos de contacto, endpoint del formulario y datos legales (fuente única)
  studio.css              estilos del diseño actual (minificado, clases .studio, .wrap, .reveal…)
  index.css               variables de tema Tailwind/shadcn
scripts/product-page.mjs  tras el build genera dist/parques/index.html con metadatos propios para SEO/previews
public/                   brand/ (logos), demo/ (capturas del producto), sitemap.xml, robots.txt, 404.html
vercel.json               rewrites de /parques y de las rutas legales
LEGAL-SETUP.md            notas de cumplimiento legal (LSSI/RGPD) y verificaciones realizadas
```

Componentes **sin uso** (diseño anterior): `Header`, `HeroSection`, `ProcessSection`, `ServicesSection`, `WhatWeDoSection`, `NavLink`. No los reutilices sin confirmarlo.

## Convenciones y avisos

- Las páginas usan el diseño "studio": envolver en `<div className="studio">`, incluir `<PageMeta/>`, `<RevealObserver/>`, `<SiteNav/>` e importar `@/studio.css`. Las secciones animadas llevan la clase `reveal`.
- Datos de contacto, teléfono, WhatsApp y textos legales: cambiarlos **solo** en `src/lib/site-config.ts`. El número real (teléfono y WhatsApp) es el +34 657 506 301. `contact.whatsapp` es el mensaje general de Acelerik y `contact.whatsappBooking` el del producto.
- `legalReady` (en `site-config.ts`) controla si las páginas legales llevan `noindex` y aviso de borrador. No publicar el domicilio particular del titular.
- Una ruta nueva exige: añadirla en `App.tsx` (encima de `*`), un rewrite en `vercel.json` y, si debe indexarse, `public/sitemap.xml`. Si necesita metadatos propios para crawlers, ampliar `PageMeta` y `scripts/product-page.mjs`.
- Los metadatos de `index.html`, `PageMeta` y `product-page.mjs` deben coincidir. URL canónica con `www`.
- Privacidad: nada de servicios de terceros que carguen sin acción del usuario (el vídeo de YouTube solo se carga al pulsar). Cualquier servicio nuevo implica revisar la política de privacidad/cookies.
- WhatsApp es un canal de contacto comercial; un bot de WhatsApp es una integración adicional con presupuesto aparte.
- Comprobar que no haya desbordamiento horizontal en móvil (320–390 px).
