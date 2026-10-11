# Contacto y páginas legales

Cambios preparados localmente; no publicados. Los textos están marcados como borrador y las páginas legales añaden `noindex` mientras `legalReady` sea falso.

## Datos incorporados

Los datos del titular persona física están en `src/lib/site-config.ts`. El domicilio particular no se publica: ni en la política de privacidad ni en el aviso legal. Antes de marcar las páginas como revisadas hace falta un domicilio profesional (apartado, coworking o sede), no la casa. ACELERIK es el nombre comercial. El correo visible y los enlaces mailto apuntan a hola@acelerik.com, creado por Carlos en Zoho Mail. Se ha creado el formulario Contacto web Acelerik en Formspree y verificado el destinatario hola@acelerik.com en Workflow.

Las cabeceras públicas de `https://acelerik.com` identifican Vercel como alojamiento. El formulario utiliza el nuevo endpoint https://formspree.io/f/mbgdywwb. El código público no utiliza analítica ni píxeles publicitarios; el componente de sidebar que guarda una cookie no se utiliza en estas páginas. Se eliminó el import de Google Fonts, que ya se descartaba por su posición inválida en el CSS; se conservan las fuentes de respaldo existentes.

## Para terminar la revisión antes de publicar

- Confirmar en las cuentas de Vercel y Formspree los contratos de tratamiento y las garantías de transferencia aplicables al plan contratado, El destinatario de las consultas ya está confirmado en Workflow. No basta con enlazar la política general del proveedor.
- Completar `legal.transferSafeguards` con los mecanismos realmente aplicables y cómo solicitar una copia. Revisar también Zoho Mail.
- Repetir la comprobación de cookies y solicitudes de red después del despliegue o si cambia la configuración del alojamiento. En la navegación pública del 10 de octubre de 2026 con un contexto limpio de Edge solo se observaron peticiones a `acelerik.com` y `www.acelerik.com`, sin cookies. No se enviaron consultas reales.
- Revisar y adoptar los criterios de conservación descritos, incluyendo la eliminación de mensajes en Formspree y correo.
- Al cerrar esos puntos, cambiar `legal.status` a `reviewed` y `privacyVersion` a una versión definitiva. Conservar la versión de la política asociada a cada consentimiento. Esto no sustituye la revisión jurídica del contenido.
- El consentimiento y la versión se adjuntan a cada envío desde el cliente. Confirmar su recepción y conservación en Formspree; el endpoint externo no puede validar la casilla mediante este frontend.
- Revisar la navegación directa y la recarga de las cuatro rutas legales tras el despliegue. `vercel.json` incluye las reescrituras necesarias.

## Correo profesional

El buzón hola@acelerik.com ya está creado en Zoho Mail. El código utiliza esa dirección para los contactos públicos. Se ha conectado el formulario mbgdywwb a hola@acelerik.com. La prueba real del 11 de octubre aparece en la bandeja de Formspree, con privacy_consent=true y privacy_version=2026-10-11-draft. La recepción final en la bandeja de Zoho no se ha comprobado desde esta sesión.

## Cambios comerciales y SEO

Se sustituyeron las cifras no acreditadas por la demo y el vídeo GGFnJBzPR6k. YouTube solo se conecta al cargar el reproductor y puede cerrarse. WhatsApp es contacto comercial; el bot figura como integración adicional. Se mantienen el diseño y los precios existentes.

La URL preferida es https://www.acelerik.com/. El sitemap incluye la portada; las páginas legales siguen excluidas mientras permanezcan en borrador con noindex. Al finalizar su revisión, añadirlas al sitemap. La página estática 404.html permite que Vercel muestre el error en español en accesos directos sin convertirlos en respuestas 200.

## Verificación local

`npm ci`, `npm run build` y `npx tsc --noEmit -p tsconfig.app.json`.

Comprobado con Edge y Playwright, interceptando las peticiones a Formspree sin enviar mensajes reales: bloqueo sin consentimiento, error HTTP 500, fallo de red, conservación de campos, éxito único y limpieza tras respuesta 200. También se comprobaron las cuatro rutas y sus recargas, títulos/canonical/noindex, vuelta al inicio, ausencia de errores JavaScript y de desbordamiento horizontal a 390 px.

Esto verifica la interfaz, no la entrega real de emails ni los ajustes privados de las cuentas de proveedores.

Revisión del 11 de octubre: comprobados con el navegador integrado anchos de 320, 390 y 1366 px sin desbordamiento horizontal; vídeo de YouTube accesible, carga bajo petición y retirada del iframe al cerrarlo; formulario bloqueado sin consentimiento; enlace al correo nuevo; canonical y og:url coincidentes con www; un único title, description, og:title y twitter:title; página 404 en español. Después se creó el formulario Contacto web Acelerik y se realizó una prueba real desde la web local: Formspree la registra en Inbox, con el consentimiento y la versión de privacidad. Workflow muestra el envío a hola@acelerik.com.

## Fuentes consultadas

- [LSSI, artículo 10](https://www.boe.es/buscar/act.php?id=BOE-A-2002-13758)
- [AEPD: deber de informar](https://www.aepd.es/preguntas-frecuentes/2-tus-obligaciones-como-responsable-del-tratamiento/6-el-deber-de-informacion/FAQ-0247-como-debo-cumplir-con-el-deber-de-informar)
- [AEPD: guía de cookies](https://www.aepd.es/guias/guia-cookies.pdf)
- [Formspree: privacidad](https://formspree.io/legal/privacy-policy/)
- [Vercel: DPA y alcance por plan](https://vercel.com/legal/dpa)
- [GoDaddy: correo con dominio propio](https://www.godaddy.com/resources/es/stories/crear-correo-profesional-dominio)


