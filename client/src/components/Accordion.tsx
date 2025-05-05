import { useState } from "react";

interface AccordionProps {
  title?: string;
  content?: string;
}

const Accordion = ({ title, content }: AccordionProps) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="border-t border-b border-gray-300/30 cursor-pointer w-auto font-semibold">
      {/* Header Section */}
      <div
        className="flex items-center justify-between p-2"
        onClick={() => setIsVisible((prev) => !prev)}
      >
        <h1 className="text-xl font-light">{title}</h1>
        <p>{isVisible ? "-" : "+"}</p>
      </div>

      {/* Description Section */}
      <div
        className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
          isVisible ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <p className="p-2 font-Roboto text-sm font-light tracking-wider">{content}</p>
      </div>
    </div>
  );
};

export default Accordion;
