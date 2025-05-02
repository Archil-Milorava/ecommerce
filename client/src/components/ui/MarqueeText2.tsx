import Marquee from "react-fast-marquee";

const MarqueeIntroText2 = () => {
  return (
    <>
      <div className="h-auto w-full p-1 text-3xl bg-[#F9F5EB] font-Garamond font-extralight">
        <Marquee
          speed={40}
          pauseOnHover={true}
          gradient={false}
          autoFill={true}
        >
          <span className="mx-8">
            Take care of yourself, your sillage, your skin...
          </span>
          <span className="mx-8">
            Sliding perfume means dancing with the air and your skin...
          </span>
        </Marquee>
      </div>

      <div className="h-auto w-full p-1 text-3xl bg-[#F2EDDF] font-Garamond font-extralight ">
        <Marquee
          speed={40}
          pauseOnHover={true}
          gradient={false}
          direction="right"
          autoFill={true}
        >
          <span className="mx-8">
            Soft Perfumes are olfactory works of art made with exceptional raw
            materials.
          </span>
          <span className="mx-8">Take care of your life.</span>
        </Marquee>
      </div>
    </>
  );
};

export default MarqueeIntroText2;
