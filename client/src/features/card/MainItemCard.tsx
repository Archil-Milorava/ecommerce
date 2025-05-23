import { useNavigate } from "react-router-dom";
import placeholder from "../../assets/placeholder.webp";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getIsInCart } from "@/state/cart/cartSlice";
import { RootState } from "@/store/store";
import { AddToCardButton, UpdateItemQuantity } from "./AddToCartButton";

interface MainItemCardProps {
  imageUrl: string | undefined;
  title: string;
  price: number;
  id: string;
}

const MainItemCard: React.FC<MainItemCardProps> = ({
  imageUrl,
  title,
  price,
  id,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isInCart = useSelector((state: RootState) => getIsInCart(state, id));

  function handleAddToCart() {
    const item = {
      id,
      title,
      unitPrice: price,
      quantity: 1,
      totalPrice: price,
      imageUrl,
    };

    dispatch(addToCart(item));
  }

  return (
    <div className="embla__slide2 w-[27rem] h-[38rem]  flex flex-col font-Garamond cursor-pointer ">
      {/* Image Section */}
      <div className=" relative group w-full h-11/12 overflow-hidden">
        <img
          onClick={() => navigate(`/${id}`)}
          src={imageUrl || placeholder}
          alt={title}
          className="h-full w-full object-cover"
        />
        {isInCart ? (
          <UpdateItemQuantity id={id} />
        ) : (
          <AddToCardButton onClick={handleAddToCart} />
        )}
      </div>
      {/* Details Section */}
      <div className="w-full h-1/12 ">
        <p className="w-full h-1/2 flex items-center justify-center text-black text-lg overflow-hidden">
          {title}
        </p>
        <p className=" w-full h-1/2 flex items-center justify-center text-xs tracking-wider text-gray-600 font-Roboto overflow-hidden">
          €{price.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default MainItemCard;
