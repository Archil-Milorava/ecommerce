import API from "@/config/axiosConfig";
import { getItemsResponse, Item } from "@/types/itemTypes";

export const getItems = (): Promise<getItemsResponse> =>
  API.get("/api/v1/products/items");

export const getSideItems = (): Promise<getItemsResponse> =>
  API.get("/api/v1/products/sideItems");

export const getSingleItem = (id: string): Promise<{item: Item}> =>
  API.get(`/api/v1/products/${id}`);
