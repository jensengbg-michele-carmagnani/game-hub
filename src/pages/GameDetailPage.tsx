import {
  GridItem,
  Heading,
  Image,
  SimpleGrid,
  Spinner,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GamePrevew from "../components/GamePreview";
import { GameScreehots } from "../components/GameScreehots";
import useGame from "../hooks/useGame";
import getCroppedImageUrl from "../services/image-url";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;
  if (!game) throw error;

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
        <GridItem>
          <Heading>{game.name}</Heading>
          <Image src={getCroppedImageUrl(game.background_image)} />
          <ExpandableText text={game.description_raw} limit={500} />
          <GameAttributes game={game} />
        </GridItem>
        <GridItem>
          <GamePrevew gameId={game.id} />
          <GameScreehots gameId={game.id} />
        </GridItem>
      </SimpleGrid>
    </>
  );
};

export default GameDetailPage;
