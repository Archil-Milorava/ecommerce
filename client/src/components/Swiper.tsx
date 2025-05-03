import useEmblaCarousel from "embla-carousel-react";
import { ReactNode } from "react";

interface SwiperContainerprops {
  children: ReactNode;
}

export function SwiperContainer({ children }: SwiperContainerprops) {
  const [emblaRef] = useEmblaCarousel({
    loop: false,
    dragFree: true,
  });

  return (
    <div className="embla h-full " ref={emblaRef}>
      <div className="embla__container h-full  items-center  w-auto  m-11  justify-around gap-11">
        {children}
      </div>
    </div>
  );
}
