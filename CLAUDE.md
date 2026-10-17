# CLAUDE.md

## Qué es este proyecto

Web corporativa de **ACELERIK** (https://www.acelerik.com), negocio de Carlos Vidal (persona física, sin sociedad). **Acelerik es una empresa de sistemas de automatización con IA**, no una empresa de reservas. Cada producto tiene su propia web e identidad; esta web es el escaparate de la empresa y enlaza a ellos.

Productos:
- **Acelerik Booking**: reservas de cumpleaños para parques infantiles. Web propia en https://booking.acelerik.com (repo `../acelerik-booking`). El software está en `../acelerik-demo-cumple`; la demo en https://acelerik-demo.onrender.com/reservar. `/parques` de esta web redirige a Booking.

De momento Booking es lo único que Acelerik vende. No anuncies servicios, clientes ni cifras que no existan: la portada habla del enfoque (IA + automatización a medida) y capta casos nuevos con "cuéntanos tu proceso".

Todo el contenido visible está en **español de España**: tono directo, sin promesas no acreditadas.

## Stack

- React 18 + TypeScript + Vite 5 (plugin SWC). Proyecto creado originalmente con Lovable (`lovable-tagger` en dev).
- Tailwind CSS 3 + shadcn/ui (Radix) en `src/components/ui/`, alias `@/` → `src/`.
- React Router 6 (SPA). React Query está montado pero no se usa para datos.
- Formulario de contacto: `fetch` directo a **Formspree** (los envíos llevan `_subject` y `source`); toasts con `sonner`.
- Alojamiento: **Cloudflare Workers** con assets estáticos (`wrangler.jsonc`, Worker `acelerik-web`, modo SPA), desplegado desde GitHub en cada push a `main`. `vercel.json` solo se conserva mientras dure la migración desde Vercel.
- DNS de acelerik.com en **Cloudflare** (dominio registrado en GoDaddy). Correo: hola@acelerik.com (Zoho Mail): no tocar los registros MX, SPF, DKIM (`zmail._domainkey`) ni DMARC.
- Sin backend propio, sin variables de entorno, sin analítica ni cookies.

## Comandos

```bash
npm ci
npm run dev        # http://localhost:8080 (acepta túneles *.loca.lt)
npm run build      # salida en dist/
npm run lint       # 3 errores conocidos en shadcn/tailwind.config, ajenos al código propio
npx tsc --noEmit -p tsconfig.app.json
```

No hay tests automatizados. Se usa npm (ignorar `bun.lockb`).

## Estructura

```
src/
  App.tsx                 rutas: /, /aviso-legal, /privacidad, /cookies, /terminos, * (404)
  pages/Index.tsx         portada (hero, productos, cómo funciona, cómo trabajamos, contacto)
  pages/LegalPage.tsx     las cuatro páginas legales, según la prop `kind`
  pages/NotFound.tsx      404 con noindex
  components/Studio.tsx   SiteNav, PageMeta (restaura title/meta de la portada), RevealObserver
  components/ContactSection.tsx  formulario Formspree con consentimiento de privacidad
  components/Footer.tsx
  components/ui/          shadcn/ui generado (no editar salvo necesidad)
  lib/site-config.ts      contacto, URLs de productos (`products`) y datos legales (fuente única)
  studio.css              estilos del diseño (minificado, clases .studio, .wrap, .reveal…)
  index.css               variables de tema Tailwind/shadcn
public/                   brand/, demo/panel.png, sitemap.xml, robots.txt, 404.html, _redirects
wrangler.jsonc            configuración del Worker de Cloudflare
LEGAL-SETUP.md            notas de cumplimiento legal (LSSI/RGPD), escritas cuando el hosting era Vercel
```

## Convenciones y avisos

- Las páginas usan el diseño "studio": envolver en `<div className="studio">`, incluir `<PageMeta/>`, `<RevealObserver/>`, `<SiteNav/>` e importar `@/studio.css`. Las secciones animadas llevan la clase `reveal`.
- Datos de contacto, teléfono, WhatsApp, URLs de productos y textos legales: cambiarlos **solo** en `src/lib/site-config.ts`. El número real (teléfono y WhatsApp) es el +34 657 506 301.
- Un producto nuevo: su propia web/repo en un subdominio (Worker + Custom domain en Cloudflare), añadirlo a `products` y a la sección `#productos`.
- `legalReady` (en `site-config.ts`) controla si las páginas legales llevan `noindex` y aviso de borrador. No publicar el domicilio particular del titular. Si cambia un proveedor (hosting, formulario, correo), actualizar `legal` en las webs afectadas y subir `privacyVersion`.
- Una ruta nueva: `App.tsx` (encima de `*`) y, si debe indexarse, `public/sitemap.xml`. El modo SPA ya sirve `index.html` en cualquier ruta.
- Los metadatos de `index.html` y `PageMeta` deben coincidir. URL canónica con `www`.
- Privacidad: nada de servicios de terceros que carguen sin acción del usuario. Cualquier servicio nuevo implica revisar la política de privacidad y la de cookies.
- WhatsApp es un canal de contacto comercial; un bot de WhatsApp es una integración adicional con presupuesto aparte.
- Comprobar que no haya desbordamiento horizontal en móvil (320–390 px).
