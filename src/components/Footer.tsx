import Logo from "@/logo.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";


export function Footer() {
  return (
    <>
      <footer className="w-full bg-tertiary">
        <div className="grid grid-cols-5 mx-[10%] items-center justify-items-center mt-3 py-3">
          <img src={Logo} alt={"Logo Latitud 58"} className="w-30" />
          <p className="col-span-3 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dolorum harum dolore illo asperiores quisquam magni, earum corrupti, et culpa, exercitationem consequatur libero quibusdam repudiandae modi. Vitae nisi aperiam fugit?
          </p>
          <p className="flex flex-col">
            <div className="flex justify-between text-4xl text-center text-primary">
              <a href="">
                <FaFacebook />
              </a>
              <a href="">
                <FaInstagram />
              </a>
              <a href="">
                <FaTiktok />
              </a>
              <a href="">
                <FaWhatsapp />
              </a>
            </div>
            <span className="text-center mt-5">
              © 2025 Latitud 58. All rights reserved.
            </span>
          </p>
        </div>
      </footer>
    </>
  );
}
