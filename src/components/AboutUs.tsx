import { aboutUsImages } from "@/models/products";
import Logo from "@/logo.png";
import { useEffect } from "react";

export function AboutUs() {
  useEffect(() => {
    aboutUsImages.forEach((image) => {
      if (image.url) {
        const img = new Image();
        img.src = image.url;
      }
    });
  }, []);

  return (
    <>
      <div id="aboutus" className="flex mx-[5%] md:mx-[10%] text-justify">
        <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-y-7 md:gap-x-2 md:gap-y-5">
          {/* firts images section */}
          <div className="hidden md:flex justify-center items-center mt-2">
            <div className="w-[45%] mr-4 mt-24 mb-10">
              <img src={aboutUsImages[0].url} alt={aboutUsImages[0].alt} />
            </div>
            <div className="w-[45%]">
              <img src={aboutUsImages[1].url} alt={aboutUsImages[1].alt} />
            </div>
          </div>
          {/* about us section */}
          <div className="flex items-center justify-center text-center prose">
            <div className="flex flex-col justify-center items-center w-full">
              <div>
                <img src={Logo} className="w-32" />
              </div>
              <h1 className="text-secondary mb-0">About us</h1>
              <h2 className="text-tertiary">
                Venezuelan Flavor with Gourmet Passion
              </h2>
              <p>
                At Latitud58, we bring the authentic flavors of Venezuela to
                every dish we serve. From handcrafted burgers to traditional
                arepas and gourmet-style grilled plates, our food is prepared
                with passion, fresh ingredients, and the unmistakable touch of
                our chef. We combine fast-casual convenience with a warm,
                homemade taste that makes every visit unforgettable.
              </p>
            </div>
          </div>
          {/* appear this on phone for best text view */}
          <div className="md:hidden flex justify-center items-center mt-2">
            <div className="w-[45%] mr-4 mb-14">
              <img src={aboutUsImages[0].url} alt={aboutUsImages[0].alt} />
            </div>
            <div className="w-[45%]">
              <img src={aboutUsImages[1].url} alt={aboutUsImages[1].alt} />
            </div>
          </div>
          {/* section 2 */}
          <div className="flex justify-center items-center">
            <div className="flex flex-col justify-center items-center w-full prose text-center">
              <h1 className="text-secondary mb-0">Our Concept</h1>
              <h2 className="text-tertiary">
                Arepas, Hamburgers and More: Signature Comfort Food
              </h2>
              <p>
                A modern Venezuelan food truck offering artisan comfort food
                made fresh daily. We focus on quality, creativity, and generous
                portions blending traditional flavors with a gourmet twist.
              </p>
              <p>
                Whether you’re craving a juicy burger, a perfectly toasted
                arepa, or a flavorful chaguarma, we’ve got something that will
                make you fall in love from the first bite.
              </p>
            </div>
          </div>
          {/* section 2 images */}
          <div className="flex justify-center items-center">
            <img
              src={aboutUsImages[2].url}
              alt={aboutUsImages[2].alt}
              className="w-[80%] my-5"
            />
          </div>
          {/* image alone row */}
          <div className="md:col-span-2">
            <img
              src={aboutUsImages[3].url}
              alt={aboutUsImages[3].alt}
              className="w-full md:w-[50%] mx-auto my-5"
            />
          </div>
        </div>
      </div>
    </>
  );
}
