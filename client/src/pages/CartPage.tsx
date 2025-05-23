import placeholder from "@/assets/placeholder.webp";
import BeforeFooter from "@/features/footer/BeforeFooter";
import Footer from "@/features/footer/Footer";
import MarqueeIntroText from "@/features/navbar/MarqueeIntroText";
import Navbar from "@/features/navbar/Navbar";
import {
  getCart,
  getCartQuantity,
  getCartTotalPrice,
  itemQuantityDecrement,
  itemQuantityIncrement,
} from "@/state/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CartPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector(getCart);
  const itemCount = useSelector(getCartQuantity);
  const totalPrice = useSelector(getCartTotalPrice);

  function onDecrement(id: string) {
    dispatch(itemQuantityDecrement(id));
  }

  function onIncrement(id: string) {
    dispatch(itemQuantityIncrement(id));
  }

  return (
    <div className="w-full h-auto font-Garamond">
      <MarqueeIntroText />
      <div className="sticky top-0 z-50 bg-white lg:block">
        <Navbar />
      </div>

      {/* catitems */}
      <div className=" my-[4rem] mx-[6rem] flex flex-col">
        {/* continue shopping */}
        <div className="flex flex-col gap-6 md:flex-row items-center justify-between p-2">
          <h1 className="text-4xl">
            CART{" "}
            <span className="font-Roboto font-extralight text-3xl">
              ({itemCount})
            </span>
          </h1>
          <Link
            to={"/"}
            className="p-2 border border-gray-700/50 cursor-pointer hover:opacity-80"
          >
            CONTINUE SHOPPING
          </Link>

          <h1 className="text-4xl">
            SUBTOTAL{" "}
            <span className="font-Roboto font- text-3xl italic">
              € {totalPrice.toFixed(2)}
            </span>
          </h1>
        </div>
        {/* item */}
        {cart.map((item) => (
          <div className="w-full h-auto" key={item.id}>
            <div className=" flex flex-col  p-4 gap-2 border-b border-black/20 md:flex-row md:items-center md:justify-between">
              <div className="w-[5rem] h-[6rem]">
                <img
                  src={item.image || placeholder}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-lg w-[20rem] h-[1.5rem] overflow-hidden">
                {item.title}
              </p>
              <p className="font-Roboto text-xs font-light">
                € {item.totalPrice.toFixed(2)}
              </p>
              <div className="font-Roboto font-light w-[6rem] h-[2rem] flex items-center justify-between py-1 px-2 text-sm border border-gray-500/60">
                <button
                  onClick={() => onDecrement(item.id)}
                  className="cursor-pointer hover:opacity-70 text-2xl"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => onIncrement(item.id)}
                  className="cursor-pointer hover:opacity-70 "
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <BeforeFooter />
      <Footer />
    </div>
  );
};

export default CartPage;
