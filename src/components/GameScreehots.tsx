import { Image, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import useScreenShots from "../hooks/useScreenshots";
interface Props {
  gameId: number;
}
export const GameScreehots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenShots(gameId);
  if (isLoading) return null;
  if (error) throw error;

  return (
    <SimpleGrid spacing={2} columns={{ base: 1, md: 2 }}>
      {data?.results.map((file) => (
        <Image src={file.image} key={file.id} />
      ))}
    </SimpleGrid>
  );
};
