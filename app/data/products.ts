// app/data/products.ts

export type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
  tagline: string;
  description: string;
  specs: string[];
  inStock: boolean;
};

export const products: Product[] = [
  {
    id: "wave-runner",
    name: "Wave Runner Dry Bag",
    price: 68,
    category: "Storage",
    tagline: "30L welded TPU waterproof deck pack.",
    description:
      "Built for wet decks and sudden squalls. High-frequency welded seams and a roll-top closure keep electronics and spare layers completely dry even if dropped overboard.",
    specs: ["30L capacity", "IPX7 submersible", "500D TPU-coated nylon", "Removable sternum strap"],
    inStock: true,
  },
  {
    id: "harbor-chrono",
    name: "Harbor Chrono Deck Watch",
    price: 185,
    category: "Navigation",
    tagline: "High-contrast tide and regatta timer.",
    description:
      "Designed for direct sunlight readability with a scratch-resistant mineral lens, countdown regatta start timer, and saltwater-sealed stainless steel casing.",
    specs: ["200m water resistance", "316L stainless steel", "5-minute regatta timer", "Luminous hands"],
    inStock: true,
  },
  {
    id: "storm-shell",
    name: "NorthSea Foul Weather Jacket",
    price: 249,
    category: "Apparel",
    tagline: "3-layer breathable coastal sailing shell.",
    description:
      "Cuts wind and driving spray without trapping heat. Features articulated elbows, a high fleece-lined storm collar, and double storm cuffs.",
    specs: ["3-layer membrane", "20,000mm waterproof rating", "YKK AquaGuard zippers", "Hi-vis stowable hood"],
    inStock: true,
  },
  {
    id: "reef-knife",
    name: "Titanium Rigging Knife",
    price: 94,
    category: "Tools",
    tagline: "Corrosion-proof serrated blade with marlinspike.",
    description:
      "One-handed locking blade engineered to slice through wet Dyneema and braided line instantly. Includes a locking marlinspike and shackle key.",
    specs: ["Grade 5 titanium blade", "Locking marlinspike", "Integrated shackle key", "G10 non-slip handle"],
    inStock: true,
  },
  {
    id: "beacon-pro",
    name: "Solas LED Strobe Beacon",
    price: 52,
    category: "Safety",
    tagline: "Water-activated personal locator strobe.",
    description:
      "Clips directly to any PFD shoulder strap. Automatically triggers a high-intensity 360-degree LED flash visible up to 3 nautical miles upon water contact.",
    specs: ["3 NM visibility", "Auto water activation", "60-hour lithium battery", "USCG & SOLAS approved"],
    inStock: false,
  },
  {
    id: "compass-70",
    name: "Bulkhead Bearing Compass",
    price: 129,
    category: "Navigation",
    tagline: "Damped marine sighting compass with night LED.",
    description:
      "Precision liquid-filled card stabilizes quickly in rough chop. Works as both a handheld bearing compass and a quick-release bracket mount.",
    specs: ["1-degree graduations", "Built-in red night LED", "Quick-release deck bracket", "5-year warranty"],
    inStock: true,
  },
];

export function getProduct(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}