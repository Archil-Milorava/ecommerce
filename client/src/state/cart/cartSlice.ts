import { RootState } from "@/store/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CartItem = {
  id: string;
  title: string;
  unitPrice: number;
  quantity: number;
  totalPrice: number;
  imageUrl?: string;
};

const initialState: CartItem[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const item = action.payload;
      state.push(item);
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      return state.filter((currentItem) => currentItem.id !== itemId);
    },
    itemQuantityIncrement: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      const existingItem = state.find((item) => item.id === itemId);
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice =
          existingItem.unitPrice * existingItem.quantity;
      }
    },
    itemQuantityDecrement: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      const existingItem = state.find((item) => item.id === itemId);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
        existingItem.totalPrice =
          existingItem.quantity * existingItem.unitPrice;
      } else if (existingItem && existingItem.quantity === 1) {
        return state.filter((cartItem) => cartItem.id !== itemId);
      }
    },
    clearCart: () => {
      return [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  itemQuantityIncrement,
  itemQuantityDecrement,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state: RootState) => state.cart;

export const isCartEmpthy = (state: RootState) => state.cart.length === 0;

export const getCartQuantity = (state: RootState) =>
  state.cart.reduce((acc, curr) => curr.quantity + acc, 0);

export const getCartTotalPrice = (state: RootState) =>
  state.cart.reduce((acc, curr) => curr.totalPrice + acc, 0);

export const getIsInCart = (state: RootState, id: string) =>
  state.cart.some((item) => item.id === id);

export const getItemQuantity = (state: RootState, id: string) =>
  state.cart.find((i) => i.id === id)?.quantity;
