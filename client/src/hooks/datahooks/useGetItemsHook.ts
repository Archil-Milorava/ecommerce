import { getItems, getSideItems, getSingleItem } from "@/services/apiItems";
import { useQuery } from "@tanstack/react-query";

export const useGetItems = () => {
  const { data, ...rest } = useQuery({
    queryKey: ["items"],
    queryFn: getItems,
  });

  const items = data?.items;

  return { items, ...rest };
};

export const useGetSideItems = () => {
  const { data, ...rest } = useQuery({
    queryKey: ["sideItems"],
    queryFn: getSideItems,
  });

  const sideItems = data?.items;

  return { sideItems, ...rest };
};

export const useGetSingleItem = (id: string) => {
  const { data, ...rest } = useQuery({
    queryKey: ["item", id],
    queryFn: () => getSingleItem(id),
  });

  const item = data?.item;

  return { item, ...rest };
};
