import type { MenuSection } from "@/types/menu";
import { menuProducts } from "@/models/products";
import { useState } from "react";

export function FoodMenu() {
  const [selectedSection, setSelectedSection] = useState(0);

  const menu: MenuSection[] = [
    {
      description: "Burger",
      section: [
        {
          name: "SINGLE CROQUETA",
          description:
            "Double croqueta de carne, American cheese, lettuce, tomato, caramelized onion, ham, pickles, accompanied by french fries",
          image: menuProducts.burgers.single_croqueta.img,
        },
        {
          name: "DOUBLE CROQUETA",
          description:
            "Double croqueta de carne, American cheese, lettuce, tomato, caramelized onion, ham, pickles, accompanied by french fries",
          image: menuProducts.burgers.double_croqueta.img,
        },
        {
          name: "MECHADA",
          description:
            "Carne mechada, fried egg, bacon, ham, cheese, lettuce, tomato, onion accompanied by french fries.",
          image: menuProducts.burgers.mechada.img,
        },
        {
          name: "CHICKEN",
          description:
            "Grilled chicken, fried egg, ham, cheese, bacon, lettuce, tomato, onion accompanied by french fries.",
          image: menuProducts.burgers.chiken.img,
        },
        {
          name: "LOMITO",
          description:
            "Beef, bacon, grilled fresh cheese, pickles, lettuce, tomato, red onion accompanied by french fries.",
          image: menuProducts.burgers.lomito.img,
        },
        {
          name: "CHULETA",
          description:
            "Smoked pork chop, coleslaw, grilled pineapple, cheddar cheese, served with french fries.",
          image: menuProducts.burgers.chuleta.img,
        },
        {
          name: "SUPER MIXTA",
          description:
            "Grilled chicken, beef, pork chop, ham, cheese, fried egg, bacon, lettuce, tomato, onion, accompanied by french fries.",
          image: menuProducts.burgers.super_mixta.img,
        },
      ],
    },
    {
      description: "Pizza",
      section: [
        {
          name: "4 CHEESES",
          description:
            "Napolitan sauce, Mozzarella cheese, Parmesan, Cheddar, Provolone and garlic butter.",
          image: menuProducts.pizzas.four_chesse.img,
        },
        {
          name: "HAWAIANA",
          description:
            "Napolitan sauce, mozzarella cheese, pineapple and ham. ",
          image: menuProducts.pizzas.hawaiana.img,
        },
        {
          name: "CHICKEN",
          description: "Napolitan sauce, mozzarella cheese, chicken and ham.",
          image: menuProducts.pizzas.chiken.img,
        },
        {
          name: "SAVONA",
          description:
            "Napolitan sauce, bacon, mozzarella cheese, chicken, corn, paprika and ham.",
          image: menuProducts.pizzas.savona.img,
        },
        {
          name: "CAMPESINA",
          description:
            "Napolitan sauce, mozzarella cheese, shredded meat, bell pepper, onion, ham and corn. ",
          image: menuProducts.pizzas.campesina.img,
        },
        {
          name: "ITALIANA",
          description:
            "Napolitan sauce, mozzarella cheese, smoked ham, pesto, arugula and parmesan cheese. ",
          image: menuProducts.pizzas.italiana.img,
        },
        {
          name: "BOCADILLO",
          description: "Napolitan sauce, cheese and bocadillo.",
          image: menuProducts.pizzas.bocadillo.img,
        },
      ],
    },
    {
      description: "Shawarma",
      section: [
        {
          name: "CHICKEN",
          description:
            "Grilled chicken, lettuce, tomato, onion, parsley, garlic sauce.",
          image: menuProducts.shawarmas.chiken.img,
        },
        {
          name: "LOMITO",
          description:
            ": Grilled steak, lettuce, tomato, onion, parsley, garlic sauce. ",
          image: menuProducts.shawarmas.lomito.img,
        },
        {
          name: "MIXTO",
          description:
            "Chicken and steak, lettuce, tomato, onion, parsley, garlic sauce.",
          image: menuProducts.shawarmas.mixto.img,
        },
      ],
    },
    {
      description: "Parrilla",
      section: [
        {
          name: "Parrilla",
          description:
            "150gr Grilled Steak 150gr Grilled Chicken Chorizo Chicken Sausage French Fries Salad with a touch of chimichurri",
          image: menuProducts.parrillas.parrilla.img,
        },
      ],
    },
    {
      description: "Arepas",
      section: [
        {
          name: "Peluda",
          description: "Shredded beef and yellow cheese",
          image: menuProducts.arepas.peluda.img,
        },
        {
          name: "Lomito",
          description: "Grilled steak",
          image: menuProducts.arepas.lomito.img,
        },
        {
          name: "Pollo",
          description: "Grilled chicken",
          image: menuProducts.arepas.pollo.img,
        },
        {
          name: "Mixta",
          description: "Grilled steak and chicken",
          image: menuProducts.arepas.mixta.img,
        },
        {
          name: "Reina Pepiada",
          description: "Shredded chicken, avocado, onion, and cilantro",
          image: menuProducts.arepas.reina_pepiada.img,
        },
        {
          name: "Huevona",
          description: "with Quail egg",
          image: menuProducts.arepas.huevona.img,
        },
      ],
    },
    {
      description: "Club House",
      section: [
        {
          name: "Club House",
          description:
            "Sandwich bread, Shredded chicken, Shredded beef, Lettuce, Tomato, Cheese, Ham, French fries.",
          image: menuProducts.club_houses.club_house.img,
        },
      ],
    },
  ];
  return (
    <>
      <div id="ourmenu" className="flex mx-[5%] md:mx-[10%] text-justify">
        <div className="mt-3 grid grid-cols-1 gap-y-7 w-full">
          <div className="flex justify-center items-center mt-2">
            <div className="w-full prose text-center">
              <h1 className="text-secondary mb-0">Our Menu</h1>
              <h2 className="text-tertiary">Delicious food for you</h2>
              <p>
                Explore our diverse menu featuring a variety of delicious dishes
                crafted to satisfy every palate. From appetizers to desserts,
                there's something for everyone to enjoy.
              </p>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-3 md:grid-cols-5 text-center gap-y-3 ">
              {menu.map((menuSection, index) => {
                if (menu.length - 1 === index) {
                  return (
                    <div className="md:col-span-5" key={index}>
                      <div className="group relative inline-block cursor-pointer">
                        <button
                          onClick={() => setSelectedSection(index)}
                          className="cursor-pointer transition-colors duration-300 group-hover:text-tertiary"
                        >
                          {menuSection.description}
                        </button>
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-fourthary origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                      </div>
                    </div>
                  );
                }

                return (
                  <div className="col-span-1" key={index}>
                    <div className="group relative inline-block cursor-pointer">
                      <button
                        onClick={() => setSelectedSection(index)}
                        className="cursor-pointer transition-colors duration-300 group-hover:text-tertiary"
                      >
                        {menuSection.description}
                      </button>
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-fourthary origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="grid md:grid-cols-2 gap-y-3 my-10">
              {menu[selectedSection].section.map((item, idx) => (
                <div
                  className="w-full grid grid-cols-1 md:grid-cols-3"
                  key={idx}
                >
                  <div className="border rounded-full overflow-hidden mx-auto">
                    <img src={item.image} alt={item.name} className="w-56 md:w-full" />
                  </div>
                  <section className="col-span-2 prose text-sm/6 text-center md:text-left mx-10">
                    <h1 className="text-secondary">{item.name}</h1>
                    <p>{item.description}</p>
                  </section>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
