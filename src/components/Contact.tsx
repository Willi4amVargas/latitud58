import { FaMapMarkerAlt } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { IoIosChatboxes } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { Button } from "./ui/button";

export function Contact({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  return (
    <div id="contact" className="flex flex-col mx-[5%] md:mx-[10%] ">
      <div className="grid grid-cols-1 md:grid-cols-4 my-5">
        <h1 className="text-5xl text-tertiary">
          Find us in <b className="text-fourthary">Charleston</b>
        </h1>
        <div className="my-5">
          <h2 className="hidden md:flex text-3xl text-tertiary text-nowrap">
            LOCATION
          </h2>
          <div className="grid grid-cols-4 h-full my-5">
            <FaMapMarkerAlt size={24} />
            <span className="col-span-3 mx-2">
              7130 HENRY E. BROWN, IR. ELVD. GOOSE
            </span>
            <FaCalendarAlt size={24} />
            <span className="col-span-3 mx-2">
              Thursday - Sunday: 16:00 - 23:00
            </span>
          </div>
        </div>
        <div className="my-5">
          <h2 className="text-3xl text-tertiary text-nowrap">
            MORE INFORMATION
          </h2>
          <div className="grid grid-cols-4 h-full my-5">
            <IoIosChatboxes size={24} />
            <span className="col-span-3 mx-2">854-200-8599</span>
            <CiMail size={24} />
            <span className="col-span-3 mx-2">info@latitud58.net</span>
          </div>
        </div>
        <div className="flex flex-col md:text-center mt-5">
          <h2 className="text-3xl text-tertiary text-nowrap">GET IN TOUCH</h2>
          <Button
            className="w-1/2 mx-auto my-10 text-tertiary"
            onClick={() => setOpen(!open)}
          >
            CONTACT
          </Button>
        </div>
      </div>
      <div className="my-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3347.0300115304253!2d-80.0034325!3d32.97661!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88fe672fe7eee555%3A0xc21b0ee6b61baf24!2sLATITUD%2058!5e0!3m2!1ses!2sve!4v1763792632615!5m2!1ses!2sve"
          loading="lazy"
          className="border-0 mx-auto my-1 w-full h-96 md:h-[450px]"
        ></iframe>
      </div>
    </div>
  );
}
