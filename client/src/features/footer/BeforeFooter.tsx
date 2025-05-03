import picto1 from "../../assets/picto.svg";
import picto2 from "../../assets/livraison.svg";
import picto3 from "../../assets/picto-made-in-france.svg";
import TextReveal from "@/components/TextReveal";

const BeforeFooter = () => {
  return (
    <div className="bg-[#F9F5EB] w-full h-auto py-11 flex flex-col items-center justify-center gap-28 md:h-[215px] md:flex-row">
      <TextReveal delay={0.2}>
        <div className=" w-[20rem] h-full flex flex-col items-center justify-center gap-3 font-Garamond">
          <img src={picto1} alt="erti" className="h-11" />
          <h1 className="text-2xl">Secure payment</h1>
          <p className="text-base">Buy with peace of mind</p>
        </div>
      </TextReveal>
      <TextReveal delay={0.6}>
        <div className="  w-[20rem] h-full flex flex-col items-center justify-center gap-3 font-Garamond">
          <img src={picto2} alt="erti" className="h-11" />
          <h1 className="text-2xl">Reliable delivery</h1>
          <p className="text-base">Delivered, well delivered</p>
        </div>
      </TextReveal>
      <TextReveal delay={0.6}>
        <div className=" w-[20rem] h-full flex flex-col items-center justify-center gap-3 font-Garamond">
          <img src={picto3} alt="erti" className="h-11" />
          <h1 className="text-2xl">Made in France</h1>
          <p className="text-base">BCarefully crafted</p>
        </div>
      </TextReveal>
    </div>
  );
};

export default BeforeFooter;
