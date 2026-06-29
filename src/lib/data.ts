export type Event = {
  id: string;
  dateISO: string; // ISO date used for countdown
  dateLabel: string;
  timeLabel: string;
  artist: string;
  vibe: string;
};

export const events: Event[] = [
  { id: "1", dateISO: "2026-06-07T17:00:00+02:00", dateLabel: "07 Juin", timeLabel: "17h", artist: "Badass Bluegrass Band", vibe: "Bluegrass" },
  { id: "2", dateISO: "2026-06-21T20:30:00+02:00", dateLabel: "21 Juin", timeLabel: "20h30", artist: "The Show", vibe: "Fête de la musique" },
  { id: "3", dateISO: "2026-07-12T15:00:00+02:00", dateLabel: "12 Juillet", timeLabel: "15h / 17h", artist: "Nino Gotfunky", vibe: "Funk groove" },
  { id: "4", dateISO: "2026-07-19T17:00:00+02:00", dateLabel: "19 Juillet", timeLabel: "17h", artist: "Just 1 Magicien", vibe: "Magie close-up" },
  { id: "5", dateISO: "2026-07-26T17:00:00+02:00", dateLabel: "26 Juillet", timeLabel: "17h", artist: "Karaoké Live", vibe: "Karaoké live band" },
  { id: "6", dateISO: "2026-07-31T17:00:00+02:00", dateLabel: "31 Juillet", timeLabel: "17h", artist: "One Shot Cocotte", vibe: "Pop rock français" },
  { id: "7", dateISO: "2026-08-15T20:30:00+02:00", dateLabel: "15 Août", timeLabel: "20h30", artist: "Black Cat", vibe: "Rock blues" },
  { id: "8", dateISO: "2026-08-30T17:00:00+02:00", dateLabel: "30 Août", timeLabel: "17h", artist: "Groov Bones", vibe: "Soul groove" },
  { id: "9", dateISO: "2026-09-13T17:00:00+02:00", dateLabel: "13 Septembre", timeLabel: "17h", artist: "Jam Session", vibe: "Scène ouverte" },
];

export const hours = [
  { day: "Lundi", value: "Fermé", closed: true },
  { day: "Mardi", value: "Fermé", closed: true },
  { day: "Mercredi", value: "10h – 22h" },
  { day: "Jeudi", value: "10h – 22h" },
  { day: "Vendredi", value: "10h – 22h" },
  { day: "Samedi", value: "10h – 22h" },
  { day: "Dimanche", value: "10h – 22h" },
];

export const reviews = [
  { name: "Camille L.", text: "L’ambiance la plus chaleureuse de Courseulles. Coucher de soleil incroyable depuis la terrasse.", role: "Habituée" },
  { name: "Julien M.", text: "Concerts top, cocktails parfaits, équipe adorable. On s’y sent un peu en vacances toute l’année.", role: "Local" },
  { name: "Sarah & Pierre", text: "Notre rituel du vendredi soir en famille. Les enfants adorent, nous aussi.", role: "Famille" },
  { name: "Marc D.", text: "Un vrai spot face à la mer, sans chichi. Le mojito est une tuerie.", role: "Cycliste" },
  { name: "Élodie R.", text: "Les soirées live valent le détour. Bonne humeur garantie.", role: "Visiteuse" },
  { name: "Thomas B.", text: "Le coin parfait pour boire un verre après la plage. Service ultra accueillant.", role: "Estivant" },
];

export type Drink = {
  name: string;
  desc: string;
  price: string;
  category: "Cocktails" | "Mocktails" | "Bières" | "Softs" | "Vins" | "Spritz";
};

export const drinks: Drink[] = [
  // Cocktails
  { name: "Sunny Mojito", desc: "Rhum blanc, menthe fraîche, citron vert, sucre de canne", price: "9 €", category: "Cocktails" },
  { name: "Piña Courseulles", desc: "Rhum ambré, ananas, lait de coco", price: "10 €", category: "Cocktails" },
  { name: "Sunset Margarita", desc: "Tequila, triple sec, citron vert, sel de mer", price: "10 €", category: "Cocktails" },
  { name: "Caïpirinha", desc: "Cachaça, citron vert pressé, sucre brun", price: "9 €", category: "Cocktails" },
  { name: "Dark & Stormy", desc: "Rhum ambré, ginger beer, citron vert", price: "9 €", category: "Cocktails" },
  { name: "Sea Breeze", desc: "Vodka, cranberry, pamplemousse", price: "9 €", category: "Cocktails" },

  // Spritz
  { name: "Aperol Spritz", desc: "Aperol, prosecco, eau pétillante, orange", price: "8 €", category: "Spritz" },
  { name: "Limoncello Spritz", desc: "Limoncello maison, prosecco, basilic", price: "9 €", category: "Spritz" },
  { name: "Hugo", desc: "Sirop de fleur de sureau, prosecco, menthe, citron vert", price: "8 €", category: "Spritz" },

  // Mocktails
  { name: "Virgin Sunny", desc: "Pamplemousse, gingembre, citron vert, eau pétillante", price: "7 €", category: "Mocktails" },
  { name: "No-Jito", desc: "Menthe, citron vert, eau pétillante, sucre", price: "6 €", category: "Mocktails" },
  { name: "Coco Sunrise", desc: "Lait de coco, ananas, grenadine", price: "7 €", category: "Mocktails" },

  // Bières
  { name: "Blonde pression", desc: "Bière locale normande 25cl", price: "4 €", category: "Bières" },
  { name: "Ambrée artisanale", desc: "Brasserie de la Côte de Nacre 33cl", price: "6 €", category: "Bières" },
  { name: "IPA du moment", desc: "Sélection rotative de microbrasseurs", price: "6,50 €", category: "Bières" },

  // Vins
  { name: "Rosé de Provence", desc: "Verre frais et fruité", price: "5 €", category: "Vins" },
  { name: "Blanc Sancerre", desc: "Sec, vif, minéral", price: "6 €", category: "Vins" },
  { name: "Rouge Bordeaux", desc: "Souple et rond", price: "5,50 €", category: "Vins" },

  // Softs
  { name: "Limonade artisanale", desc: "Citron pressé, sucre de canne", price: "4 €", category: "Softs" },
  { name: "Iced tea pêche", desc: "Thé glacé maison", price: "4 €", category: "Softs" },
  { name: "Café glacé", desc: "Espresso, glace, lait", price: "4,50 €", category: "Softs" },
];
