import MarqueeIntroText from "@/features/navbar/MarqueeIntroText";
import Navbar from "../features/navbar/Navbar";
import SwiperLanding from "@/features/Swiper/SwiperLanding";

const Landing = () => {
  return (
    <div className="h-auto w-full">
      <MarqueeIntroText />
      <div className="lg:block hidden">
        <Navbar />
      </div>
      {/* <div className="flex items-center pl-11 lg:hidden  h-16 ">
        <CiMenuBurger
          onClick={() => setIsBurgerOpen((prev) => !prev)}
          className="cursor-pointer text-4xl"
        />
        {isBurgerOpen && <SidebarNav />}
      </div> */}

      <div className="w-full h-auto">
        <SwiperLanding />
      </div>
    </div>
  );
};

export default Landing;
