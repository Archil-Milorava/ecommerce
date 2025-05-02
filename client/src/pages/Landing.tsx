import MarqueeIntroText from "@/features/navbar/MarqueeIntroText";
import Navbar from "../features/navbar/Navbar";
import SwiperLanding from "@/features/Swiper/SwiperLanding";
import MarqueeIntroText2 from "@/components/ui/MarqueeText2";
import MainItemCard from "@/features/card/MainItemCard";
import { useGetItems } from "@/hooks/datahooks/useGetItemsHook";
import Loading from "@/components/ui/Loading";

const Landing = () => {
  const { items, isLoading } = useGetItems();

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

      <div className=" h-auto py-16 w-full flex flex-col items-center justify-center gap-8">
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
      <div className="h-[40rem] w-auto overflow-x-scroll flex items-center justify-center gap-8">
        {items?.map((item) => (
          <MainItemCard
            key={item.id}
            imageUrl={item.image}
            price={item.price}
            title={item.name}
            currency={item.currency}
          />
        ))}
      </div>
    </div>
  );
};

export default Landing;
