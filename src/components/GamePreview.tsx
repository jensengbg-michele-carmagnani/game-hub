import { Spinner } from "@chakra-ui/react";
import React from "react";
import usePreview from "../hooks/usePreview";

interface Props {
  gameId: number;
}

const GamePreview = ({ gameId }: Props) => {
  console.log(gameId);
  const { data, error, isLoading } = usePreview(gameId);

  if (isLoading) return <Spinner />;
  if (error) throw error;
  const first = data?.results[0];

  return first ? (
    <video
      style={{ width: "100vw" }}
      src={first?.data[480]}
      controls
      poster={first.data[480]}
    />
  ) : null;
};

export default GamePreview;
