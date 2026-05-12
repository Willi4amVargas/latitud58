import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState, useMemo } from "react";
import { products, type ProductSlide } from "@/models/products";
import { Button } from "@/components/ui/button";
import MenuPDF from "@/assets/menu.pdf";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

export function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [pageHeight, setPageHeight] = useState(0);

  // Randomize carousel images on initial mount (Task 3)
  const randomizedProducts = useMemo(() => {
    return [...products].sort(() => Math.random() - 0.5);
  }, []);

  const currentSlide: ProductSlide = randomizedProducts[currentIndex];

  useEffect(() => {
    // Calculate height once on mount and on resize, instead of every render (Performance Audit fix)
    const calculateHeight = () => {
      const body = document.body;
      const html = document.documentElement;
      const height = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      );
      setPageHeight(height);
    };

    calculateHeight();
    window.addEventListener("resize", calculateHeight);
    return () => window.removeEventListener("resize", calculateHeight);
  }, []);

  useEffect(() => {
    randomizedProducts.forEach((slide) => {
      if (slide.url) {
        const img = new Image();
        img.src = slide.url;
      }
    });
  }, [randomizedProducts]);

  const prevSlide = useCallback(() => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? randomizedProducts.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, randomizedProducts.length]);

  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === randomizedProducts.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, randomizedProducts.length]);

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, [nextSlide]);

  const handleScroll = useCallback(() => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    if (pageHeight > 0 && window.scrollY > pageHeight - 1000) {
      setIsScrolled(false);
    }
  }, [pageHeight]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <section aria-label="Home Carousel" className="h-screen w-full relative group overflow-hidden">
      <div
        style={{
          backgroundImage: `url(${currentSlide.url})`,
        }}
        className="w-full h-full bg-center bg-cover duration-700 ease-in-out transition-opacity"
      >
        <div
          className={`transition-colors duration-300 ease-in-out ${
            isScrolled
              ? "fixed bottom-5 right-2 z-50"
              : "absolute right-0 flex justify-end z-50"
          }`}
        >
          <div
            className={`flex justify-center space-x-3 md:space-x-6 ${
              isScrolled
                ? "text-black md:text-5xl text-3xl"
                : "text-white md:text-7xl text-4xl"
            }  mr-5 mt-30 md:mr-40`}
          >
            <a
              target="_blank"
              aria-label="Instagram"
              rel="noopener noreferrer"
              href="https://www.instagram.com/latitud58_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            >
              <FaInstagram />
            </a>
            <a
              target="_blank"
              aria-label="TikTok"
              rel="noopener noreferrer"
              href="https://www.tiktok.com/@latitud58?refer=creator_embed"
            >
              <FaTiktok />
            </a>
            <a
              target="_blank"
              aria-label="WhatsApp"
              rel="noopener noreferrer"
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
            <a href={MenuPDF} target="_blank" rel="noopener noreferrer">
              See Menu
            </a>
          </Button>
        </div>
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer transition">
        <ChevronLeft size={30} onClick={prevSlide} aria-label="Previous Slide" />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer transition">
        <ChevronRight
          size={30}
          onClick={() => {
            nextSlide();
          }}
          aria-label="Next Slide"
        />
      </div>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {randomizedProducts.map((slide, slideIndex) => (
          <button
            key={slideIndex}
            onClick={() => setCurrentIndex(slideIndex)}
            aria-label={`Go to slide ${slideIndex + 1}`}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 shadow-md ${
              currentIndex === slideIndex
                ? "bg-white scale-125"
                : "bg-gray-400 opacity-50"
            }`}
            title={slide.caption}
          ></button>
        ))}
      </div>
    </section>
  );
}
