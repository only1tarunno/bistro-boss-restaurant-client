import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useMenu = () => {
  const axiospublic = useAxiosPublic();

  const {
    data: menu = [],
    refetch,
    isPending: loading,
  } = useQuery({
    queryKey: ["menuItem"],
    queryFn: async () => {
      const res = await axiospublic.get(`/menu`);
      return res.data;
    },
  });

  return [menu, loading, refetch];
};

export default useMenu;
