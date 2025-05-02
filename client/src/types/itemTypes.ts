export interface getItemsResponse {
  count: number;
  items: Item[];
}

export interface Item {
  category: string;
  currency: string;
  description: string;
  features: string[];
  id: string;
  image: string | undefined;
  ingredients: string[];
  name: string;
  price: number;
  olfactiveEquation: string;
  warnings: string[];
}
