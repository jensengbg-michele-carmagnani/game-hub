import { Box, flexbox, Heading, Image, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import getCroppedImageUrl from "../services/image-url";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;
  if (!game) throw error;

  return (
    <>
      <Box display={"flex"} flexDirection={"column"}>
        <Heading>{game.name}</Heading>
        <Image src={getCroppedImageUrl(game.background_image)} />
        <Text>{game.description_raw}</Text>
      </Box>
    </>
  );
};

export default GameDetailPage;
