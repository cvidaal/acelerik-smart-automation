// Public information. Configure the Formspree recipient in its dashboard.
export const siteUrl = "https://www.acelerik.com";
const whatsappNumber = "34657506301";
const whatsappLink = (text: string) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
export const contact = {
  email: "hola@acelerik.com",
  phone: "+34 657 506 301",
  phoneHref: `tel:+${whatsappNumber}`,
  whatsapp: whatsappLink("Hola, me interesan las soluciones de Acelerik"),
  formEndpoint: "https://formspree.io/f/mbgdywwb",
};

// Each product has its own site.
export const products = {
  booking: "https://booking.acelerik.com",
};

// The home address stays unpublished. A professional domicile can be added later.
export const legal = {
  status: "reviewed" as "draft" | "reviewed",
  owner: "Carlos Vidal Sánchez",
  taxId: "02329412H",
  address: "",
  registry: "No procede: titular persona física, sin sociedad mercantil.",
  hostingProvider: "Cloudflare, Inc.",
  transferSafeguards:
    "Formspree, Inc. trata los mensajes en Estados Unidos y publica que, como encargado del tratamiento, utiliza las cláusulas contractuales tipo. Cloudflare, Inc. está adherida al Marco de Privacidad de Datos UE-EE. UU. y su acuerdo de tratamiento incorpora las cláusulas contractuales tipo de la Comisión Europea (decisión 2021/914) para las transferencias fuera del Espacio Económico Europeo. Zoho Mail publica las cláusulas contractuales tipo como base de los accesos internacionales del correo. Puedes solicitar una copia escribiendo a hola@acelerik.com.",
  privacyVersion: "2026-10-17",
};

export const legalReady =
  legal.status === "reviewed" &&
  [
    legal.owner,
    legal.taxId,
    legal.hostingProvider,
    legal.transferSafeguards,
  ].every((value) => value.trim().length > 0);
