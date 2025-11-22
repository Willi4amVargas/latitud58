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
              <h2 className="text-tertiary">about us subtitle</h2>
              <p>
                Quibusdam ipsa, illo iste tenetur maxime doloremque! Officia
                iure hic error fugit, voluptatibus vero, quae laboriosam
                adipisci libero amet omnis veritatis laborum recusandae
                voluptate mollitia quia cum. Reiciendis, sed officiis.
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
              <h1 className="text-secondary mb-0">Title 1</h1>
              <h2 className="text-tertiary">sub-title </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt reiciendis modi aut accusamus id aspernatur adipisci,
                enim nostrum in, animi quos ad, beatae natus expedita eos non
                nam. Earum, eaque?
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
