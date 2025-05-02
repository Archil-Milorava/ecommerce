import Navbar from "../features/navbar/Navbar";

const Landing = () => {
  return (
    <div className="h-auto w-full">
      <div className="text-white bg-[#333333] h-9 w-full flex items-center justify-center text-sm tracking-wide">
        Free delivery for orders over 50 euros in France. See our specific
        conditions when you purchase according to your country of order.
      </div>
      <Navbar />
    </div>
  );
};

export default Landing;
