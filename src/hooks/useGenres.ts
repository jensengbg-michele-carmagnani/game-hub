import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";

import APIClient from "../services/api-client";

export type Genre = {
  id: number;
  name: string;
  image_background: string;
  slug: string;
};
const apiClient = new APIClient<Genre>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: { count: genres.length, results: genres },
  });

export default useGenres;
