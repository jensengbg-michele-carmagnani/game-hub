import {
  Box,
  flexbox,
  Heading,
  Image,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import CriticScore from "../components/CriticScore";
import DefinitionItem from "../components/DefinitionItem";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
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
        <ExpandableText text={game.description_raw} limit={500} />
        <GameAttributes game={game} />
      </Box>
    </>
  );
};

export default GameDetailPage;
