import { Box, Flex } from "@chakra-ui/react";
import React, { useState } from "react";

const CategoryLink = ({ children }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <Flex
      h="100%"
      justifyContent="center"
      alignItems="center"
      cursor="pointer"
      position="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <Box
        bg="#f61083"
        h="2.5px"
        w={hovered ? "100%" : "0"}
        position="absolute"
        bottom="0.5"
        left="0"
        transition="width 1s ease"
        transformOrigin="left"
      />
    </Flex>
  );
};

export default CategoryLink;
