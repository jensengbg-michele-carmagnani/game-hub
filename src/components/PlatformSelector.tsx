import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { usePlatform } from "../hooks/usePlatform";
import usePlatforms from "../hooks/usePlatforms";
import useQueryGames from "../store/queryStore";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  const selectedPlatformId = useQueryGames((s) => s.gameQuery.platformId);
  const onSelectPlatform = useQueryGames((s) => s.setPlatformId);
  const selectedPlatform = usePlatform(selectedPlatformId);

  if (error) return null;

  return (
    <Menu>
      {/* @ts-ignore */}
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {/* @ts-ignore */}
        {data?.results?.map((platform) => (
          <MenuItem
            onClick={() => onSelectPlatform(platform.id)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
