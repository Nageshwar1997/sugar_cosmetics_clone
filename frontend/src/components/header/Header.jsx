import React from "react";
import { Box, Flex, Image, Input, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import NavTopBannerBackgroundImage from "../../assets/navbarBackgroundImage.png";
import Logo from "../../assets/headerImages/logo.webp";

import { IoBagOutline, IoSearch } from "react-icons/io5";
import { FaRegHeart, FaUser } from "react-icons/fa";
import { LuBadgePercent } from "react-icons/lu";
import CategoryLink from "../../pages/CategoryLink";

const Header = () => {
  return (
    <Flex direction={"column"} w={"100%"} h={"161px"}>
      <Box
        w="100%"
        h="36px"
        backgroundImage={`url(${NavTopBannerBackgroundImage})`}
        bgRepeat="no-repeat"
        bgSize="cover"
        bgPosition="center"
      >
        Top
      </Box>
      <Flex
        h={"72px"}
        w={"100%"}
        bg="#000000"
        color={"#FFFFFF"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Flex
          w={"93%"}
          margin={"auto"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box flex={1}>
            <Link to={"/"}>
              <Image
                src={Logo}
                cursor={"pointer"}
                alt="Logo"
                width={"256px"}
                height={"32px"}
              />
            </Link>
          </Box>
          <Box flex={2}>
            <Flex
              border={"1px solid #c4c4c4"}
              color={"#757575"}
              borderRadius={"10px 10px 10px 10px"}
            >
              <Input
                placeholder="Search Products Here...."
                outline={"none"}
                border={"none"}
              />
              <Flex
                bg={"#FFFFFF"}
                color={"#000000"}
                justifyContent={"center"}
                alignItems={"center"}
                px={"10px"}
                py={"4px"}
                gap={1}
                fontSize={"lg"}
                borderRadius={"0px 10px 10px 0px"}
                cursor={"pointer"}
              >
                <IoSearch />
                <Text>Search</Text>
              </Flex>
            </Flex>
          </Box>
          <Box flex={1}>
            <Flex justifyContent={"center"} alignItems={"center"} gap={2}>
              <Box
                border={"1px solid #c4c4c4"}
                borderRadius={"50%"}
                p={"2px"}
                fontSize={"lg"}
                bg={"#FFFFFF"}
                color={"#000000"}
                cursor={"pointer"}
              >
                <FaUser />
              </Box>
              <Text fontSize={"lg"} cursor={"pointer"}>
                <Link to={"/register"}>Login/Register</Link>
              </Text>
            </Flex>
          </Box>
          <Box flex={0.1} fontSize={"lg"}>
            <Flex justifyContent={"center"} alignItems={"center"} gap={5}>
              <Box cursor={"pointer"} _hover={{ color: "#a70053" }}>
                <FaRegHeart />
              </Box>
              <Box cursor={"pointer"} _hover={{ color: "#a70053" }}>
                <IoBagOutline />
              </Box>
              <Box cursor={"pointer"} _hover={{ color: "#a70053" }}>
                <LuBadgePercent />
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Flex>
      <Flex
        justifyContent={"space-evenly"}
        alignItems={"center"}
        w="100%"
        h="53px"
        bg="#141414"
        color={"#FFFFFF"}
      >
        <CategoryLink>
          <Link to={"/sugar_play"}>SUGAR PLAY</Link>
        </CategoryLink>
        <CategoryLink>
          <Link to={"/lips"}>LIPS</Link>
        </CategoryLink>
        <CategoryLink>
          <Link to={"/eyes"}>EYES</Link>
        </CategoryLink>
        <CategoryLink>
          <Link to={"/face"}>FACE</Link>
        </CategoryLink>
        <CategoryLink>
          <Link to={"/nails"}>NAILS</Link>
        </CategoryLink>
        <CategoryLink>
          <Link to={"/skin_care"}>SKIN CARE</Link>
        </CategoryLink>
        <CategoryLink>
          <Link to={"/accessories"}>ACCESSORIES</Link>
        </CategoryLink>
        <CategoryLink>
          <Link to={"/gifting"}>GIFTING</Link>
        </CategoryLink>
        <CategoryLink>
          <Link to={"/best_sellers"}>BEST SELLERS</Link>
        </CategoryLink>
        <CategoryLink>
          <Link to={"/new_launches"}>NEW LAUNCHES</Link>
        </CategoryLink>
        <CategoryLink>
          <Link to={"/offers"}>OFFERS</Link>
        </CategoryLink>
        <CategoryLink>
          <Link to={"/blog"}>BLOG</Link>
        </CategoryLink>
      </Flex>
    </Flex>
  );
};

export default Header;
