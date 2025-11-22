import type { MenuSection } from "@/types/menu";
import { products } from "@/models/products";
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
          image: products[0].url,
        },
        {
          name: "DOUBLE CROQUETA",
          description:
            "Double croqueta de carne, American cheese, lettuce, tomato, caramelized onion, ham, pickles, accompanied by french fries",
          image: products[0].url,
        },
        {
          name: "MECHADA",
          description:
            "Carne mechada, fried egg, bacon, ham, cheese, lettuce, tomato, onion accompanied by french fries.",
          image: products[0].url,
        },
        {
          name: "CHICKEN",
          description:
            "Grilled chicken, fried egg, ham, cheese, bacon, lettuce, tomato, onion accompanied by french fries.",
          image: products[0].url,
        },
        {
          name: "LOMITO",
          description:
            "Beef, bacon, grilled fresh cheese, pickles, lettuce, tomato, red onion accompanied by french fries.",
          image: products[0].url,
        },
        {
          name: "CHULETA",
          description:
            "Smoked pork chop, coleslaw, grilled pineapple, cheddar cheese, served with french fries.",
          image: products[0].url,
        },
        {
          name: "SUPER MIXTA",
          description:
            "Grilled chicken, beef, pork chop, ham, cheese, fried egg, bacon, lettuce, tomato, onion, accompanied by french fries.",
          image: products[0].url,
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
          image: products[0].url,
        },
        {
          name: "HAWAIANA",
          description:
            "Napolitan sauce, mozzarella cheese, pineapple and ham. ",
          image: products[0].url,
        },
        {
          name: "CHICKEN",
          description: "Napolitan sauce, mozzarella cheese, chicken and ham.",
          image: products[0].url,
        },
        {
          name: "SAVONA",
          description:
            "Napolitan sauce, bacon, mozzarella cheese, chicken, corn, paprika and ham.",
          image: products[0].url,
        },
        {
          name: "CAMPESINA",
          description:
            "Napolitan sauce, mozzarella cheese, shredded meat, bell pepper, onion, ham and corn. ",
          image: products[0].url,
        },
        {
          name: "ITALIANA",
          description:
            "Napolitan sauce, mozzarella cheese, smoked ham, pesto, arugula and parmesan cheese. ",
          image: products[0].url,
        },
        {
          name: "BOCADILLO",
          description: "Napolitan sauce, cheese and bocadillo.",
          image: products[0].url,
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
          image: products[0].url,
        },
        {
          name: "LOMITO",
          description:
            ": Grilled steak, lettuce, tomato, onion, parsley, garlic sauce. ",
          image: products[0].url,
        },
        {
          name: "MIXTO",
          description:
            "Chicken and steak, lettuce, tomato, onion, parsley, garlic sauce.",
          image: products[0].url,
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
          image: products[0].url,
        },
      ],
    },
    {
      description: "Arepas",
      section: [
        {
          name: "Peluda",
          description: ": Shredded beef and yellow cheese",
          image: products[0].url,
        },
        {
          name: "Lomito",
          description: "Grilled steak",
          image: products[0].url,
        },
        {
          name: "Pollo",
          description: "Grilled chicken",
          image: products[0].url,
        },
        {
          name: "Mixta",
          description: "Grilled steak and chicken",
          image: products[0].url,
        },
        {
          name: "Reina Pepiada",
          description: "Shredded chicken, avocado, onion, and cilantro",
          image: products[0].url,
        },
        {
          name: "Huevona",
          description: "with Quail egg",
          image: products[0].url,
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
          image: products[0].url,
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
            <div className="grid md:grid-cols-2 gap-y-3 my-10 justify-items-center">
              {menu[selectedSection].section.map((item, idx) => (
                <div className="w-full grid md:grid-cols-3 items-center " key={idx}>
                  <div className="border rounded-full overflow-hidden h-38 w-38 mx-auto">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <section className="col-span-2 prose text-sm/6">
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
