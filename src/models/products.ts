import P_1 from "@/assets/P_1.webp";
import P_2 from "@/assets/P_2.webp";
import P_3 from "@/assets/P_3.webp";
import P_4 from "@/assets/P_4.webp";
import P_5 from "@/assets/P_5.webp";
import P_6 from "@/assets/P_6.webp";
import P_7 from "@/assets/P_7.webp";

import P_AB_1 from "@/assets/P_AB_1.webp";
import P_AB_2 from "@/assets/P_AB_2.webp";
import P_AB_3 from "@/assets/P_AB_3.webp";
import P_AB_4 from "@/assets/P_AB_4.webp";

export type ProductSlide = {
  url: string;
  caption: string;
};

export const aboutUsImages = [
  { url: P_AB_1, alt: "About Us Image 1" },
  { url: P_AB_2, alt: "About Us Image 2" },
  { url: P_AB_3, alt: "Latitud 58 Team" },
  { url: P_AB_4, alt: "About us Image 4" },
];

export const products = [
  { url: P_1, caption: "Gourmet Club House with Golden Fries" },
  { url: P_2, caption: "Mixed Grill Platter: Meats, Chorizo, and Salad" },
  { url: P_3, caption: "Classic Burger and Crispy Fries Combo" },
  { url: P_4, caption: "Delicious Signature Pizza" },
  { url: P_5, caption: "Freshly Baked Specialty Pizza" },
  { url: P_6, caption: "Assortment of Mini Club Houses with Fries" },
  { url: P_7, caption: "Hearty Club House and Fries" },
];

// BURGERS
import S_O_CROQUETA from "@/assets/menu_img/BURGERS/DOBLE_CROQUETA_SINGLE_CROQUETA.jpg";
import MECHADA from "@/assets/menu_img/BURGERS/MECHADA.jpg";
import B_CHIKEN from "@/assets/menu_img/BURGERS/CHIKEN.jpg";
import B_LOMITO from "@/assets/menu_img/BURGERS/LOMITO.jpg";
import CHULETA from "@/assets/menu_img/BURGERS/CHULETA.jpg";
import SUPER_MIXTA from "@/assets/menu_img/BURGERS/SUPER_MIXTA.jpg";
// PIZZAS
import FOUR_CHESSES from "@/assets/menu_img/PIZZAS/4_CHESSES.jpg";
import HAWAIANA from "@/assets/menu_img/PIZZAS/HAWAIANA.jpg";
import P_CHIKEN from "@/assets/menu_img/PIZZAS/CHIKEN.jpg";
import SAVONA from "@/assets/menu_img/PIZZAS/SAVONA.jpg";
import CAMPESINA from "@/assets/menu_img/PIZZAS/CAMPESINA.jpg";
import ITALIANA from "@/assets/menu_img/PIZZAS/ITALIANA.jpg";
import BOCADILLO from "@/assets/menu_img/PIZZAS/BOCADILLO.jpg";
// CLUB HOUSES
import CLUB_HOUSE from "@/assets/menu_img/CLUB_HOUSE/CLUB_HOUSE.jpg";
// PARRILLAS
import PARRILLA from "@/assets/menu_img/PARRILLA/PARRILLA.jpg";
// SHAWARMAS
import S_CHIKEN from "@/assets/menu_img/SHAWARMAS/CHIKEN.webp";
import S_LOMITO from "@/assets/menu_img/SHAWARMAS/LOMITO.jpg";
import MIXTO from "@/assets/menu_img/SHAWARMAS/MIXTO.jpg";
// AREPAS
import PELUDA from "@/assets/menu_img/AREPAS/PELUDA.jpg";
import LOMITO from "@/assets/menu_img/AREPAS/LOMITO.jpg";
import POLLO from "@/assets/menu_img/AREPAS/POLLO.jpg";
import MIXTA from "@/assets/menu_img/AREPAS/MIXTA.jpg";
import REINA_PEPIADA from "@/assets/menu_img/AREPAS/REINA_PEPIADA.jpg";
import HUEVONA from "@/assets/menu_img/AREPAS/HUEVONA.jpg";

export const menuProducts = {
  burgers: {
    single_croqueta: {
      img: S_O_CROQUETA,
    },
    double_croqueta: {
      img: S_O_CROQUETA,
    },
    mechada: {
      img: MECHADA,
    },
    chiken: {
      img: B_CHIKEN,
    },
    lomito: {
      img: B_LOMITO,
    },
    chuleta: {
      img: CHULETA,
    },
    super_mixta: {
      img: SUPER_MIXTA,
    },
  },
  pizzas: {
    four_chesse: {
      img: FOUR_CHESSES,
    },
    hawaiana: {
      img: HAWAIANA,
    },
    chiken: {
      img: P_CHIKEN,
    },
    savona: {
      img: SAVONA,
    },
    campesina: {
      img: CAMPESINA,
    },
    italiana: {
      img: ITALIANA,
    },
    bocadillo: {
      img: BOCADILLO,
    },
  },
  shawarmas: {
    chiken: {
      img: S_CHIKEN,
    },
    lomito: {
      img: S_LOMITO,
    },
    mixto: {
      img: MIXTO,
    },
  },
  parrillas: {
    parrilla: {
      img: PARRILLA,
    },
  },
  arepas: {
    peluda: {
      img: PELUDA,
    },
    lomito: {
      img: LOMITO,
    },
    pollo: {
      img: POLLO,
    },
    mixta: {
      img: MIXTA,
    },
    reina_pepiada: {
      img: REINA_PEPIADA,
    },
    huevona: {
      img: HUEVONA,
    },
  },
  club_houses: {
    club_house: {
      img: CLUB_HOUSE,
    },
  },
};
