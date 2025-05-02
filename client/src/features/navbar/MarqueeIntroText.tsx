import Marquee from "react-fast-marquee";

const MarqueeIntroText = () => {
  return (
    <>
      <div className="text-white bg-[#333333] h-9 w-full items-center justify-center text-sm tracking-wide hidden lg:flex">
        <p>
          Free delivery for orders over 50 euros in France. See our specific
          conditions when you purchase according to your country of order.
        </p>
      </div>

      {/* Marquee for small screens */}
      <div className="text-white bg-[#333333] h-9 w-full text-sm tracking-wide flex items-center lg:hidden">
        <Marquee speed={40} pauseOnHover={true} gradient={false}>
          Free delivery for orders over 50 euros in France. See our specific
          conditions when you purchase according to your country of order.
        </Marquee>
      </div>
    </>
  );
};

export default MarqueeIntroText;
