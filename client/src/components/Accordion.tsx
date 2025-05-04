import { useState } from "react";

const Accordion = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="border-t border-b border-gray-300/80 cursor-pointer w-auto font-semibold">
      {/* Header Section */}
      <div
        className="flex items-center justify-between p-2"
        onClick={() => setIsVisible((prev) => !prev)}
      >
        <h1 className="text-lg">Title</h1>
        <p>{isVisible ? "-" : "+"}</p>
      </div>

      {/* Description Section */}
      <div
        className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
          isVisible ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <p className="p-2">
          Your Skin Fragrance - soft Perfume, is protected in this sober
          eco-designed and recyclable Refill. Now it's ready to pour easily into
          your large black bottle or your travel bottles. Follow our filling
          method explained below. Oriental woody chypre, it's the balanced
          combination of velvety amber, rare woods, and precious resins,
          accented by a refreshing iris note. « Eu vent de vous », a name
          capturing a fleeting yet profound encounter...
        </p>
      </div>
    </div>
  );
};

export default Accordion;
