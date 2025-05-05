import { getCartQuantity } from "@/state/cart/cartSlice";
import { CiShoppingCart } from "react-icons/ci";
import {
  PiFacebookLogoThin,
  PiInstagramLogoThin,
  PiUserCircleLight,
} from "react-icons/pi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const menuItemsBeta = [
  {
    title: "Perfumes",
    link: "/",
  },
  {
    title: "Contact Us",
    link: "contact",
  },
];

const Navbar = () => {
  const totalQuantity = useSelector(getCartQuantity);
  return (
    <nav className="w-full h-16 flex items-center justify-around font-Garamond">
      {/* list category */}
      <div className=" h-full w-5/12 font-Garamond hidden lg:block">
        <ul className=" w-full h-full flex items-center pl-11 gap-11">
          {menuItemsBeta.map((item, i) => (
            <li
              key={i}
              className="relative group cursor-pointer font-Garamond text-xl font-semibold tracking-wider"
            >
              <Link to={item.link} className="inline-block">
                {item.title}
                <span className="block h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* logo */}
      <Link
        to={"/"}
        className=" h-full w-2/12 flex items-center justify-center"
      >
        <img src="./logo.svg" alt="logo" className="h- cursor-pointer" />
      </Link>
      {/* icons */}
      <div className=" h-full  w-5/12 flex items-center justify-end gap-4 pr-11 ">
        <a href="https://www.instagram.com/sabemassonparis/" target="blank">
          <PiInstagramLogoThin className="text-2xl cursor-pointer hover:opacity-50 transition-all duration-300" />
        </a>
        <a
          href="https://www.facebook.com/sabemassonparis/?locale=fr_FR"
          target="blank"
        >
          <PiFacebookLogoThin className=" text-2xl cursor-pointer hover:opacity-50 transition-all duration-300" />
        </a>
        <PiUserCircleLight className="text-2xl cursor-pointer hover:opacity-50 transition-all duration-300" />
        <Link to="/cart" className="relative">
          <CiShoppingCart className="text-2xl cursor-pointer hover:opacity-50 transition-all duration-300" />
          {totalQuantity > 0 && (
            <span className="absolute top-0 right-0 translate-x-2 rounded-full bg-black w-4 h-4 flex items-center justify-center text-xs text-white font-Roboto">
              {totalQuantity}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
