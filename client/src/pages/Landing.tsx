import Loading from "@/components/ui/Loading";
import MarqueeIntroText2 from "@/components/ui/MarqueeText2";
import BigeCard from "@/features/card/BigeCard";
import MainItemCard from "@/features/card/MainItemCard";
import MarqueeIntroText from "@/features/navbar/MarqueeIntroText";
import SwiperLanding from "@/features/Swiper/SwiperLanding";
import {
  useGetItems,
  useGetSideItems,
} from "@/hooks/datahooks/useGetItemsHook";
import Navbar from "../features/navbar/Navbar";

import slider from "../assets/3slider.webp";
import refill from "../assets/refill.webp";

import BeforeFooter from "@/features/footer/BeforeFooter";
import Footer from "../features/footer/Footer";
import { SwiperContainer } from "@/components/Swiper";
import TextReveal from "@/components/TextReveal";
import GirlPhoto from "@/components/GirlPhoto";

const Landing = () => {
  const { items, isLoading } = useGetItems();
  const { sideItems } = useGetSideItems();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className=" h-auto w-full">
      <MarqueeIntroText />
      <div className="sticky top-0 z-50 bg-white hidden lg:block">
        <Navbar />
      </div>

      <div className="w-full h-auto">
        <SwiperLanding />
      </div>

      {/* extra */}
      <div className="hidden h-auto py-16 w-full sm:flex flex-col items-center justify-center gap-8">
        <h2 className="  text-3xl text-center font-Roboto font-bold tracking-wider">
          THE FIRST PERFUMERY OF EXCELLENCE <br /> TO BE CERTIFIED MOISTURIZING
        </h2>
        <h1 className=" text-5xl text-center font-Garamond font-extralight">
          Sabé Masson the house that <br /> invented “le parfum de soin” the{" "}
          <br /> Skincare fragrance - no alcohol - <br /> soft perfume®
        </h1>
      </div>

      {/* slider */}
      <div className=" py-11">
        <MarqueeIntroText2 />
      </div>

      {/* items */}
      <SwiperContainer>
        {items?.map((item) => (
          <MainItemCard
            key={item.id}
            imageUrl={item.image}
            price={item.price}
            title={item.name}
          />
        ))}
      </SwiperContainer>

      {/* extra */}
      <div className="w-full max-w-full h-auto hidden sm:flex items-center justify-center gap-8 py-2">
        <BigeCard
          img={slider}
          description="Feel all our essences through an ecological process."
          title="Olfactory Opus"
        />
        <BigeCard
          img={refill}
          description="A rich mysterious amber"
          title="Les Recharges"
        />
      </div>

      {/* extra */}
      <div className="h-auto w-full flex items-center justify-center my-16 px-6">
        <h1 className="max-w-[70rem] text-5xl text-center font-Garamond font-extralight">
          Without alcohol our skin has more power Fragrance is a marvel of
          emotion and develops more powerfully when worn by the skin. And even
          more so on well-moisturised skin!
        </h1>
      </div>

      {/* sideitems */}
      <SwiperContainer>
        {sideItems?.map((item) => (
          <MainItemCard
            key={item.id}
            imageUrl={item.image}
            price={item.price}
            title={item.name}
          />
        ))}
      </SwiperContainer>

      {/* extra */}
      <div className="h-auto w-full flex flex-col items-center justify-center gap-4 my-11">
        <TextReveal delay={0}>
          <p className="font-Roboto text-center">
            THE EXCEPTIONAL SKINCARE FRAGRANCES BY SABE MASSON
          </p>
        </TextReveal>
        <TextReveal delay={0.5}>
          <h1 className="max-w-[40rem] text-5xl text-center font-Garamond font-extralight">
            Whether you glide or spray them on, get back in touch with your
            skin, listen to yourself.
          </h1>
        </TextReveal>
      </div>
      <BeforeFooter />
      {/* girlfoto */}
      <GirlPhoto />
      <Footer />
    </div>
  );
};

export default Landing;
