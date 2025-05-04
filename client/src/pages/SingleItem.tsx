import MarqueeIntroText from "@/features/navbar/MarqueeIntroText";
import Navbar from "@/features/navbar/Navbar";

import Accordion from "@/components/Accordion";
import GirlPhoto from "@/components/GirlPhoto";
import BeforeFooter from "@/features/footer/BeforeFooter";
import Footer from "@/features/footer/Footer";
import SingleImage from "@/components/SingleImage";

const SingleItem = () => {
  return (
    <div className="w-full h-auto font-Garamond">
      <MarqueeIntroText />
      <Navbar />
      {/* itemWrapper*/}
      <div className="flex flex-col  items-center justify-center px-8   sm:min-h-[50rem]  sm:flex-row sm:items-start sm:justify-center sm:pt-[5rem] sm:gap-4">
        {/* image div */}
        <div className="sm:h-[40rem] sm:w-[34rem]">
          <SingleImage />
        </div>
        {/* descriptiondiv  */}
        <div className="w-full flex flex-col items-start gap-2 m-6  sm:min-h-[40rem] sm:w-[34rem]">
          <h1 className="text-5xl font-semibold">
            The Refill - Eu vent de vous{" "}
          </h1>
          <p className="text-xl tracking-wider font-extralight w-[18rem]">
            100mL Skincare Eau de parfum. Alcohol free. Refillable spray. Tested
            under dermatological control. Vegan, made in France. Perfumery of
            excellence certified moisturizing.
          </p>
          <p className="font-light font-Roboto text-sm">€142,00</p>
          {/* buttons */}
          <div className=" w-full h-[3rem] flex justify-between gap-4 px-1 items-center">
            <select
              name="itemCount"
              id="item-Count"
              className=" border border-[#212121] focus:outline-none  focus:border-[#212121] text-xs text-[#212121] font-Roboto w-36 h-8 px-3"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <button
              className="bg-[#212121] w-full h-8 text-white font-Roboto text-sm tracking-wider
              cursor-pointer hover:opacity-90 transition-all duration-300
            "
            >
              ADD TO CART
            </button>
          </div>
          <div className="h-auto w-full flex flex-col flex-wrap">
            <Accordion />
            <Accordion />
            <Accordion />
          </div>
        </div>
      </div>

      <div className="my-[4rem]">
        <h1 className="text-center px-4 text-4xl my-4 w-full sm:px-[15rem] ">
          Soft perfume is a very special way of getting closer to yourself and
          to others. It's almost like a metamorphosis that opens a window onto
          our inner truth. It's the visceral, sacred emotion that only the scent
          of pampered, perfumed skin can create.
        </h1>
      </div>

      <div className=" sm:py-2 sm:mt-8 flex justify-center px-[2rem] sm:px-[15rem]">
        <Accordion />
      </div>

      <BeforeFooter />
      <GirlPhoto />
      <Footer />
    </div>
  );
};

export default SingleItem;
