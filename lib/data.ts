import productsA from "./products-a.json";
import productsB from "./products-b.json";

export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  images: string[];
  description: string;
  rating: number;
  reviewCount: number;
  badge: string | null;
  related: string[];
  faq: [string, string][];
  specs: Record<string, string>;
  variants: string[];
  [key: string]: unknown;
};

export const brand = {
  "slug": "cellarhouse-wines",
  "name": "Cellar House",
  "tagline": "Bottles with a story.",
  "niche": "Wine shop",
  "description": "A neighborhood wine shop for small growers, cellar staples, and tasting flights to go.",
  "cta": "Browse the cellar",
  "checkoutNote": "Must be 21+. Demo checkout only — no alcohol ships.",
  "heroImage": "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=2400&q=80",
  "heroVideo": "https://videos.pexels.com/video-files/3209211/3209211-uhd_2560_1440_25fps.mp4",
  "categories": [
    "Red",
    "White",
    "Sparkling",
    "Rosé",
    "Sets"
  ],
  "isBooking": false,
  "offer": {
    "code": "CELLAR12",
    "label": "Case discount — 12% when you buy 6+",
    "ends": "Club week"
  },
  "loyalty": "Cellar Club — quarterly allocations & tasting invites",
  "stats": [
    [
      "40+",
      "regions"
    ],
    [
      "Cellar",
      "aged picks"
    ],
    [
      "4.9",
      "somm rating"
    ],
    [
      "Temp",
      "shipped"
    ]
  ],
  "marquee": [
    "Vintage notes ·",
    "Aging curves ·",
    "Pairing maps ·",
    "Sommelier chat ·",
    "Club allocations ·"
  ],
  "reviews": [
    [
      "Marc E.",
      5,
      "Aging chart for the Old Vine Zin was geeky in the best way."
    ],
    [
      "Julia F.",
      5,
      "Pairing tool matched a roast chicken night perfectly."
    ],
    [
      "Owen R.",
      5,
      "Packaging survived summer shipping. Club is worth it."
    ]
  ],
  "ai": [
    [
      "Wine for mushroom risotto?",
      "Earthy pinot or aged nebbiolo. Check Tasting Notes → earth/umami tags."
    ],
    [
      "Drink now or cellar?",
      "Open Aging on each bottle. Peak windows shown as a curve — not a guarantee of taste preference."
    ],
    [
      "Case deal?",
      "CELLAR12 takes 12% off when your cart has 6+ bottles."
    ],
    [
      "Gift set?",
      "Ask for Mixed Discovery — we'll suggest 3 regions under $120."
    ]
  ],
  "blog": [
    [
      "How we taste for the club",
      "Cellar"
    ],
    [
      "Decanting myths",
      "Guides"
    ],
    [
      "Cheese board pairings",
      "Pairings"
    ]
  ],
  "stores": [
    "Cellar House — warehouse tasting bar (Fri–Sat)"
  ],
  "nicheKind": "wine"
} as const;

export const products: Product[] = [...(productsA as Product[]), ...(productsB as Product[])];

export function formatPrice(n: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
}

export function getProduct(id: string) {
  return products.find((p) => p.id === id);
}

export function relatedProducts(p: Product) {
  return p.related.map(getProduct).filter(Boolean) as Product[];
}
