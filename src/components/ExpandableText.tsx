import { Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";

interface Props {
  text: string;
  limit: number;
}

const ExpandableText = ({ text, limit }: Props) => {
  const [expanded, setExpanded] = useState(false);

  if (text.length <= limit) return <Text>{text}</Text>;
  const summary = expanded ? text : text.substring(0, limit | 90) + "...";

  return (
    <>
      <Text>
        {summary}
        <Button
          marginLeft={3}
          onClick={() => setExpanded(!expanded)}
          size={"xs"}
          fontWeight={"bold"}
          backgroundColor={"gray"}
        >{`${expanded ? "Show less" : "Read more"}`}</Button>
      </Text>
    </>
  );
};

export default ExpandableText;
