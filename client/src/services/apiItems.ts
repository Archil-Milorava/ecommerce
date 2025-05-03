import API from "@/config/axiosConfig";
import { getItemsResponse } from "@/types/itemTypes";

export const getItems = (): Promise<getItemsResponse> =>
  API.get("/api/v1/products/items");


export const getSideItems = (): Promise<getItemsResponse> =>
    API.get("/api/v1/products/sideItems");