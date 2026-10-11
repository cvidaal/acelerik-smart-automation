// Public information. Configure the Formspree recipient in its dashboard.
export const siteUrl = "https://www.acelerik.com";
export const contact = {
  email: "hola@acelerik.com",
  phone: "+34 608 429 382",
  whatsapp: `https://wa.me/34608429382?text=${encodeURIComponent("Hola, me interesa el sistema de reservas")}`,
  formEndpoint: "https://formspree.io/f/mbgdywwb",
};

// Complete and review these fields before publishing the legal pages.
// Do not put the home address here. LSSI asks for a domicile, but it should be
// a professional one (mailbox, coworking, or company address) before going live.
export const legal = {
  status: "draft" as "draft" | "reviewed",
  owner: "Carlos Vidal Sánchez",
  taxId: "02329412H",
  address: "",
  registry: "No procede: titular persona física, sin sociedad mercantil.",
  hostingProvider: "Vercel, Inc.",
  transferSafeguards: "",
  privacyVersion: "2026-10-11-draft",
};

export const legalReady = legal.status === "reviewed" &&
  [legal.owner, legal.taxId, legal.address, legal.hostingProvider, legal.transferSafeguards]
    .every((value) => value.trim().length > 0);
