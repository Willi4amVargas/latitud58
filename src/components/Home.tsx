import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { products, type ProductSlide } from "@/models/products";
import { Button } from "@/components/ui/button";
import MenuPDF from "@/assets/menu.pdf";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

export function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentSlide: ProductSlide = products[currentIndex];

  useEffect(() => {
    products.forEach((slide) => {
      if (slide.url) {
        const img = new Image();
        img.src = slide.url;
      }
    });
  }, []);

  const prevSlide = useCallback(() => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? products.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, products.length]);

  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === products.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, products.length]);

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);

    return () => clearInterval(slideInterval);
  }, [nextSlide]);

  return (
    <div className="h-screen w-full relative group overflow-hidden">
      <div
        style={{
          backgroundImage: `url(${currentSlide.url})`,
        }}
        className="w-full h-full bg-center bg-cover duration-700 ease-in-out transition-opacity"
      >
        <div className="absolute right-0 flex justify-end z-50 ">
          <div className="flex justify-center space-x-3 md:space-x-6 md:text-7xl text-4xl text-white mr-5 mt-30 md:mr-40">
            <a
              target="_blank"
              href="https://www.instagram.com/latitud58_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            >
              <FaInstagram />
            </a>
            <a
              target="_blank"
              href="https://www.tiktok.com/@latitud58?refer=creator_embed"
            >
              <FaTiktok />
            </a>
            <a
              target="_blank"
              href="https://wa.me/18542008599?text=Hello!%20I%20am%20ready%20to%20place%20an%20order."
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white p-8">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold drop-shadow-lg text-center mb-4">
            Latitud 58
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-light italic text-center max-w-3xl">
            {currentSlide.caption}
          </p>
          <Button asChild className="mt-5">
            <a href={MenuPDF} target="_blank">
              See Menu
            </a>
          </Button>
        </div>
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer transition">
        <ChevronLeft size={30} onClick={prevSlide} />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer transition">
        <ChevronRight
          size={30}
          onClick={() => {
            nextSlide();
          }}
        />
      </div>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {products.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => setCurrentIndex(slideIndex)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 shadow-md ${
              currentIndex === slideIndex
                ? "bg-white scale-125"
                : "bg-gray-400 opacity-50"
            }`}
            title={slide.caption}
          ></div>
        ))}
      </div>
    </div>
  );
}
