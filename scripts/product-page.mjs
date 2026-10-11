import { readFile, mkdir, writeFile } from 'node:fs/promises';
// Give link previews and crawlers the product metadata before React runs.
const home = await readFile('dist/index.html', 'utf8');
const title = 'Acelerik Booking | Reservas para parques infantiles';
const description = 'Reservas de cumpleaños, cobro de señales y gestión desde un panel. Conoce Acelerik Booking y prueba la demo para parques infantiles.';
const html = home.replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
  .replace(/(<meta (?:name|property)="(?:og:title|twitter:title)" content=")[^"]*/g, `$1${title}`)
  .replace(/(<meta (?:name|property)="(?:description|og:description|twitter:description)" content=")[^"]*/g, `$1${description}`)
  .replaceAll("https://www.acelerik.com/og-image.png", "https://www.acelerik.com/demo/booking-cover.png")
  .replaceAll('https://www.acelerik.com/"', 'https://www.acelerik.com/parques"');
await mkdir('dist/parques', { recursive: true });
await writeFile('dist/parques/index.html', html);
