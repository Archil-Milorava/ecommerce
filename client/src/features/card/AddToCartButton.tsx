import {
  getItemQuantity,
  itemQuantityDecrement,
  itemQuantityIncrement,
} from "@/state/cart/cartSlice";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";

interface AddToCardButtonProps {
  onClick: () => void;
}

export const AddToCardButton = ({ onClick }: AddToCardButtonProps) => {
  return (
    <div className="bg-[#f0efe6]/80 absolute bottom-0 w-full flex items-center justify-center font-Raleway h-11 opacity-0 group-hover:opacity-100 transition-all duration-700">
      <button
        onClick={onClick}
        className="text-sm w-full uppercase font-Roboto tracking-wider text-gray-700/90 cursor-pointer"
      >
        Quick add
      </button>
    </div>
  );
};

interface UpdateItemQuantityProps {
  id: string;
}

export const UpdateItemQuantity = ({ id }: UpdateItemQuantityProps) => {
  const dispatch = useDispatch();
  const itemQuantity = useSelector((state: RootState) =>
    getItemQuantity(state, id)
  );

  function onDecrement() {
    dispatch(itemQuantityDecrement(id));
  }

  function onIncrement() {
    dispatch(itemQuantityIncrement(id));
  }

  return (
    <div className="bg-[#f0efe6]/80 absolute bottom-0 w-full flex items-center justify-center font-Raleway h-11 opacity-0 group-hover:opacity-100 transition-all duration-700">
      <button
        onClick={onDecrement}
        className="text-sm w-full uppercase font-Roboto tracking-wider text-gray-700/90 cursor-pointer"
      >
        -
      </button>
      <span>{itemQuantity}</span>
      <button
        onClick={onIncrement}
        className="text-sm w-full uppercase font-Roboto tracking-wider text-gray-700/90 cursor-pointer"
      >
        +
      </button>
    </div>
  );
};
