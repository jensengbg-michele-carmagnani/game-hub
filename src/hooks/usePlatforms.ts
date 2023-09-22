import ms from "ms";
import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";

import APIClient from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
const apiClient = new APIClient<Platform>("/platform");

const usePlatforms = () =>
  useQuery({
    queryKey: ["/platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("1d"),
    initialData: genres,
  });

export default usePlatforms;
