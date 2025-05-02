import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import img1 from "../../assets/1slider.webp";
import img2 from "../../assets/2slider.webp";
import img3 from "../../assets/3slider.webp";

import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import { Button } from "@/components/ui/button";

const SwiperLanding = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="group relative w-full max-w-full h-[40rem]  overflow-hidden">
      <div className="embla__viewport h-full" ref={emblaRef}>
        <div className="embla__container flex h-full">
          {/* first slide */}3
          <div className="embla__slide flex-[0_0_100%] h-full">
            <img
              src={img1}
              alt={`slide-1`}
              className="object-cover realtive w-full h-full"
            />
            <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center text-white">
              <h1 className="text-5xl font-bold mb-2 animate_text delay-1" >TAKE ME AWAY</h1>
              <p className="mb-4 text-sm animate_text delay-2">a thoughtful, and poetic object</p>
              <button className="bg-[#333333]  px-4 py-2 w-24 animate_text delay-3">dicover</button>
            </div>
          </div>

          {/* second slide */}
          <div className="embla__slide relative flex-[0_0_100%] h-full">
            <img
              src={img2}
              alt={`slide-1`}
              className="object-cover w-full h-full"
            />
            <div className="absolute  left-9 bottom-11 flex gap-2 flex-col items-start  text-white/90">
              <h1 className="text-5xl font-bold mb-2 animate_text delay-1">Skincare fragrances</h1>
              <p className="mb-4 text-sm uppercase animate_text delay-2">
                a thoughtful, and poetic object
              </p>
              <Button
                variant="ghost"
                className="rounded-none border border-white hover:bg-transparent hover:opacity-70 hover:text-white cursor-pointer animate_text delay-3"
              >
                Discover
              </Button>
            </div>
          </div>


            {/* third slide */}
          <div className="embla__slide relative flex-[0_0_100%] h-full">
            <img
              src={img3}
              alt={`slide-1`}
              className="object-cover w-full h-full"
            />
            <div className="absolute  w-full h-full flex flex-col items-center pt-16 gap-2  inset-0  text-white/90 ">
              <h1 className="text-5xl font-bold mb-2 uppercase animate_text delay-1">Olfactory</h1>
              <p className="mb-4 text-sm animate_text delay-2">
                Discover the essences of our Skincare Fragrance
              </p>
              <Button
                variant="ghost"
                className="rounded-none border border-white hover:bg-transparent hover:opacity-70 hover:text-white cursor-pointer animate_text delay-3"
              >
                Discover
              </Button>
            </div>
          </div>
        </div>
      </div>

      <button
        className="absolute top-1/2 left-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-black text-xl px-4 py-2 rounded cursor-pointer"
        onClick={scrollPrev}
      >
        <GoArrowLeft />
      </button>
      <button
        className="absolute top-1/2 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-black text-xl px-4 py-2 rounded cursor-pointer"
        onClick={scrollNext}
      >
        <GoArrowRight />
      </button>
    </div>
  );
};

export default SwiperLanding;
