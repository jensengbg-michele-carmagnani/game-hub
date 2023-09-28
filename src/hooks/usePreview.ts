import { useQuery } from "@tanstack/react-query";
import Preview from "../entities/Preview";
import APIClient from "../services/api-client";

const usePreview = (gameId: number) => {
  const apiClient = new APIClient<Preview>(`/games/${gameId}/movies`);
  return useQuery({
    queryKey: ["preview", gameId],
    queryFn: apiClient.getAll,
  });
};

export default usePreview;
