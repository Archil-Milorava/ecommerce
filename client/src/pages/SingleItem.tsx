import MarqueeIntroText from "@/features/navbar/MarqueeIntroText";
import Navbar from "@/features/navbar/Navbar";

import Accordion from "@/components/Accordion";
import GirlPhoto from "@/components/GirlPhoto";
import SingleImage from "@/components/SingleImage";
import Loading from "@/components/ui/Loading";
import BeforeFooter from "@/features/footer/BeforeFooter";
import Footer from "@/features/footer/Footer";
import { useGetSingleItem } from "@/hooks/datahooks/useGetItemsHook";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import {
  addToCart,
  getIsInCart,
  getItemQuantity,
  itemQuantityDecrement,
  itemQuantityIncrement,
} from "@/state/cart/cartSlice";

const SingleItem = () => {
  const { itemId } = useParams();
  const { item, error, isLoading } = useGetSingleItem(itemId!);
  const isInCart = useSelector((state: RootState) =>
    getIsInCart(state, itemId!)
  );
  const itemQuantity = useSelector((state: RootState) =>
    getItemQuantity(state, itemId!)
  );

  const dispatch = useDispatch();

  function onDecrement() {
    dispatch(itemQuantityDecrement(itemId!));
  }

  function onIncrement() {
    dispatch(itemQuantityIncrement(itemId!));
  }

  function handleAddToCart() {
    if (item) {
      const cartItem = {
        id: itemId!,
        title: item.name,
        unitPrice: item.price,
        quantity: 1,
        totalPrice: item.price,
        image: item.image,
      };
      dispatch(addToCart(cartItem));
    }
  }

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div className="w-full h-auto font-Garamond">
      <MarqueeIntroText />
      <Navbar />
      {/* itemWrapper*/}
      <div className="flex flex-col  items-center justify-center p-8   sm:min-h-[50rem]  sm:flex-row sm:items-start sm:justify-center sm:pt-[5rem] sm:gap-4 ">
        {/* image div */}

        <SingleImage imgUrl={item?.image} />

        {/* descriptiondiv  */}
        <div className="w-full flex flex-col items-start gap-2 m-6  sm:min-h-[40rem] sm:w-[34rem]">
          <h1 className="text-5xl font-semibold">{item?.name}</h1>
          <p className="text-xl tracking-wider font-semibold w-[25rem] py-4">
            {item?.description}
          </p>
          <p className="font-light font-Roboto text-lg text-gray-700">
            € {item?.price.toFixed(2)}
          </p>
          {/* buttons */}
          <div className=" w-full h-[3rem] flex justify-between gap-4 px-1 items-center">
            {isInCart ? (
              <div className="flex border border-[#212121] h-8 w-full items-center justify-around font-Roboto">
                <button onClick={onDecrement} className="cursor-pointer">
                  -
                </button>
                <span>{itemQuantity}</span>
                <button onClick={onIncrement} className="cursor-pointer">
                  +
                </button>
              </div>
            ) : (
              <button
                onClick={handleAddToCart}
                className="bg-[#212121] w-full h-8 text-white font-Roboto text-sm tracking-wider
              cursor-pointer hover:opacity-90 transition-all duration-300
            "
              >
                ADD TO CART
              </button>
            )}
          </div>
          {/* accordion */}
          <div className="h-auto w-full flex flex-col flex-wrap">
            <Accordion title="features" content={item?.features.join(" ")} />
            <Accordion
              title="olfactiveEquation"
              content={item?.olfactiveEquation}
            />
            <Accordion
              title="ingredients"
              content={item?.ingredients.join(" ")}
            />
            <Accordion title="Warinings" content={item?.warnings.join(" ")} />
          </div>
        </div>
      </div>

      <div className="my-[4rem]">
        <h1 className="text-center px-4 text-4xl my-4 w-full sm:px-[15rem] ">
          Soft perfume is a very special way of getting closer to yourself and
          to others. It's almost like a metamorphosis that opens a window onto
          our inner truth. It's the visceral, sacred emotion that only the scent
          of pampered, perfumed skin can create.
        </h1>
      </div>

      <BeforeFooter />
      <GirlPhoto />
      <Footer />
    </div>
  );
};

export default SingleItem;
