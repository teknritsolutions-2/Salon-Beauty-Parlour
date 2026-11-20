export const categories = ["Hair", "Skin", "Makeup"];
export const menu = [
  {
    id: "signature-cut",
    category: "Hair",
    name: "Signature cut & finish",
    minutes: 60,
    price: 950,
    detail:
      "A consultation, tailored haircut and blow-dry shaped around your natural texture.",
  },
  {
    id: "conditioning",
    category: "Hair",
    name: "Conditioning ritual",
    minutes: 45,
    price: 1200,
    detail:
      "A conditioning treatment for lengths and ends, finished with a gentle style.",
  },
  {
    id: "colour",
    category: "Hair",
    name: "Colour consultation & gloss",
    minutes: 90,
    price: 2200,
    detail:
      "Explore tone and depth with a colour consultation and a gloss finish.",
  },
  {
    id: "facial",
    category: "Skin",
    name: "Hydrating facial",
    minutes: 60,
    price: 1500,
    detail:
      "A gentle cleanse, facial massage and hydrating mask for a quiet hour of care.",
  },
  {
    id: "cleanup",
    category: "Skin",
    name: "Fresh skin cleanup",
    minutes: 30,
    price: 650,
    detail: "A short cleansing and exfoliating ritual for a simple refresh.",
  },
  {
    id: "calming-facial",
    category: "Skin",
    name: "Calming facial ritual",
    minutes: 45,
    price: 1200,
    detail:
      "Gentle cleansing and moisturizing, with time to relax in a salon setting.",
  },
  {
    id: "natural-day",
    category: "Makeup",
    name: "Natural day makeup",
    minutes: 45,
    price: 1800,
    detail:
      "Light coverage and softly defined features for daytime occasions or a subtle everyday finish.",
  },
  {
    id: "party",
    category: "Makeup",
    name: "Soft glam makeup",
    minutes: 75,
    price: 2500,
    detail:
      "Build a look for your occasion, from softly defined eyes to a favourite lip colour.",
  },
  {
    id: "bridal",
    category: "Makeup",
    name: "Bridal styling",
    minutes: 150,
    price: 7500,
    detail:
      "Plan a coordinated bridal makeup look around your outfit, ceremony and preferences.",
  },
];
export const price = (value) => "₹" + value.toLocaleString("en-IN");
