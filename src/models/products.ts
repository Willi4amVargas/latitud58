import P_1 from "@/assets/P_1.webp";
import P_2 from "@/assets/P_2.webp";
import P_3 from "@/assets/P_3.webp";
import P_4 from "@/assets/P_4.webp";
import P_5 from "@/assets/P_5.webp";
import P_6 from "@/assets/P_6.webp";
import P_7 from "@/assets/P_7.webp";

export type ProductSlide = {
  url: string;
  caption: string;
};

export const products = [
  { url: P_1, caption: "Gourmet Sandwich with Golden Fries" },
  { url: P_2, caption: "Mixed Grill Platter: Meats, Chorizo, and Salad" },
  { url: P_3, caption: "Classic Burger and Crispy Fries Combo" },
  { url: P_4, caption: "Delicious Signature Pizza" },
  { url: P_5, caption: "Freshly Baked Specialty Pizza" },
  { url: P_6, caption: "Assortment of Sandwiches with Fries" },
  { url: P_7, caption: "Hearty Sandwich and Fries" },
];
