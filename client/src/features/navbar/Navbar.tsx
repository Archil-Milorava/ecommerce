import { CiShoppingCart } from "react-icons/ci";
import { PiUserCircleLight } from "react-icons/pi";
import { PiInstagramLogoThin } from "react-icons/pi";
import { PiFacebookLogoThin } from "react-icons/pi";

const menuItemsBeta = [
  {
    title: "Perfumes",
    link: "#",
  },
  {
    title: "The Set",
    link: "#",
  },
  {
    title: "Discovery Board",
    link: "#",
  },
  {
    title: "Contact Us",
    link: "#",
  },
];

const Navbar = () => {
  return (
    <nav className="w-full h-16 flex items-center justify-around font-Garamond">
      {/* list category */}
      <div className=" h-full w-5/12 font-Raleway hidden lg:block">
        <ul className=" w-full h-full flex items-center pl-11 gap-11">
          {menuItemsBeta.map((item, i) => (
            <li key={i} className="relative group cursor-pointer">
              <a href={item.link} className="inline-block">
                {item.title}
                <span className="block h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* logo */}
      <div className=" h-full w-2/12 flex items-center justify-center">
        <img src="./logo.svg" alt="logo" className="h- cursor-pointer" />
      </div>
      {/* icons */}
      <div className=" h-full  w-5/12 flex items-center justify-end gap-4 pr-11 ">
        <PiInstagramLogoThin className="text-2xl cursor-pointer hover:opacity-50 transition-all duration-300" />
        <PiFacebookLogoThin className=" text-2xl cursor-pointer hover:opacity-50 transition-all duration-300" />
        <PiUserCircleLight className="text-2xl cursor-pointer hover:opacity-50 transition-all duration-300" />
        <CiShoppingCart className="text-2xl cursor-pointer hover:opacity-50 transition-all duration-300" />
      </div>
    </nav>
  );
};

export default Navbar;
