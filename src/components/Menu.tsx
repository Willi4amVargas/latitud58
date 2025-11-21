import logoImage from "@/logo.png";
import { useEffect, useState } from "react";
import { IoIosMenu } from "react-icons/io";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export function Menu() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuDesplegable, setMenuDesplegable] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuClasses = `
    fixed top-0 w-full z-50 transition-all duration-300 py-1
    ${isScrolled ? "bg-black/50 md:py-1" : "bg-transparent md:py-2"}
  `;

  const logoClasses = `
    transition-all duration-300 w-12
    ${isScrolled ? "md:w-16 my-0" : "md:w-18 my-1"}
  `;

  return (
    <>
      <nav className={menuClasses}>
        <ul className="hidden md:flex items-center justify-center text-white">
          <li className="mx-5">
            <a href="#aboutus">ABOUT US</a>
          </li>
          <li className="mx-5">
            <a href="#ourmenu">OUR MENU</a>
          </li>
          <li className="mx-5">
            <a href="/">
              <img
                src={logoImage}
                alt="logo latitud58"
                className={logoClasses}
              />
            </a>
          </li>
          <li className="mx-5">
            <a href="#reviews">REVIEWS</a>
          </li>
          <li className="mx-5">
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
        <div className="md:hidden flex items-center justify-center">
          <a href="/">
            <img src={logoImage} alt="logo latitud58" className={logoClasses} />
          </a>
          <div className="absolute left-8 top-3">
            <Drawer
              direction="left"
              open={menuDesplegable}
              onOpenChange={setMenuDesplegable}
            >
              <DrawerTrigger>
                <div className="flex items-center text-white">
                  <IoIosMenu size={30} />
                  <span className="ml-1">Menu</span>
                </div>
              </DrawerTrigger>
              <DrawerContent className="bg-fourthary text-white">
                <DrawerHeader>
                  <DrawerTitle>Menu</DrawerTitle>
                  <DrawerDescription>
                    What do you want to see?
                  </DrawerDescription>
                  <ul>
                    <li className="my-1">
                      <a
                        href="#aboutus"
                        onClick={() => setMenuDesplegable(false)}
                      >
                        ABOUT US
                      </a>
                    </li>
                    <hr />
                    <li className="my-1">
                      <a
                        href="#ourmenu"
                        onClick={() => setMenuDesplegable(false)}
                      >
                        OUR MENU
                      </a>
                    </li>
                    <hr />
                    <li className="my-1">
                      <a
                        href="#reviews"
                        onClick={() => setMenuDesplegable(false)}
                      >
                        REVIEWS
                      </a>
                    </li>
                    <hr />
                    <li className="my-1">
                      <a
                        href="#contact"
                        onClick={() => setMenuDesplegable(false)}
                      >
                        CONTACT
                      </a>
                    </li>
                  </ul>
                </DrawerHeader>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </nav>
    </>
  );
}
