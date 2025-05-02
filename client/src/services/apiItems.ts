import API from "@/config/aciosConfig";
import { getItemsResponse } from "@/types/itemTypes";

export const getItems = (): Promise<getItemsResponse> =>
  API.get("/api/v1/products/items");


export const getSideItems = (): Promise<getItemsResponse> =>
    API.get("/api/v1/products/sideItems");