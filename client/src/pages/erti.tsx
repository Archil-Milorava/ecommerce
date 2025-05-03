import useEmblaCarousel from "embla-carousel-react";

const Erti = () => {
  const [emblaRef] = useEmblaCarousel({
    dragFree: true,
    // containScroll: "trimSnaps"
    // loop: true,
  });
  return (
    <div className="embla w-full h-full" ref={emblaRef}>
      <div className="embla__container w-full h-full flex ">
        <div className="embla__slide w-[10rem] h-[35rem] bg-amber-200">
          Slide 1
        </div>
        <div className="embla__slide w-[15rem] h-[35rem] bg-amber-700">
          Slide 2
        </div>
        <div className="embla__slide w-[15rem] h-[35rem] bg-amber-600">
          Slide 3
        </div>
      </div>
    </div>
  );
};

export default Erti;
