import { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 1500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const goTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <button
      onClick={goTop}
      className={`${
        !isVisible ? "opacity-0 pointer-events-none" : "opacity-100"
      } transition-all duration-700 fixed bottom-8 right-8 h-12 w-12 bg-[#333333] flex items-center justify-center cursor-pointer `}
    >
      <MdOutlineKeyboardArrowUp className="text-white text-3xl" />
    </button>
  );
};

export default GoToTop;
