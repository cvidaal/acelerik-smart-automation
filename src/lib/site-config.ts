// Public information. Configure the Formspree recipient in its dashboard.
export const siteUrl = "https://www.acelerik.com";
export const contact = {
  email: "hola@acelerik.com",
  phone: "+34 608 429 382",
  whatsapp: `https://wa.me/34608429382?text=${encodeURIComponent("Hola, me interesa Acelerik Booking para mi parque")}`,
  formEndpoint: "https://formspree.io/f/mbgdywwb",
};

// The home address stays unpublished. A professional domicile can be added later.
export const legal = {
  status: "reviewed" as "draft" | "reviewed",
  owner: "Carlos Vidal Sánchez",
  taxId: "02329412H",
  address: "",
  registry: "No procede: titular persona física, sin sociedad mercantil.",
  hostingProvider: "Vercel, Inc.",
  transferSafeguards:
    "Formspree, Inc. trata los mensajes en Estados Unidos y publica que, como encargado del tratamiento, utiliza las cláusulas contractuales tipo. Vercel, Inc. incorpora en su acuerdo de tratamiento las cláusulas contractuales tipo de la Comisión Europea (decisión 2021/914) para las transferencias fuera del Espacio Económico Europeo. Zoho Mail publica las cláusulas contractuales tipo como base de los accesos internacionales del correo. Puedes solicitar una copia escribiendo a hola@acelerik.com.",
  privacyVersion: "2026-10-11",
};

export const legalReady = legal.status === "reviewed" &&
  [legal.owner, legal.taxId, legal.hostingProvider, legal.transferSafeguards]
    .every((value) => value.trim().length > 0);
