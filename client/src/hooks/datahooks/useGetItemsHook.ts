import { getItems } from "@/services/apiItems";
import { useQuery } from "@tanstack/react-query";

export const useGetItems = () => {
  const { data, ...rest } = useQuery({
    queryKey: ["items"],
    queryFn: getItems,
  });

  const items = data?.items;

  return { items, ...rest };
};
