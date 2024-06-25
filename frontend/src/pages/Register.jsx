import {
  Box,
  Flex,
  Heading,
  Image,
  Input,
  Text,
  Link as ChakraLink,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";
import Logo from "../assets/registerBanner.jpg";
import NavTopBannerBackgroundImage from "../assets/navbarBackgroundImage.png";

import LoginRegisterPageBackGroundTexture from "../assets/loginRegisterPageBackGroundTexture.jpeg";
import LoginRegisterPageBackGroundHi from "../assets/loginRegisterPageBackGroundHi.jpeg";
import { Link as RouterLink } from "react-router-dom";
import SummaryApi from "../common/SummaryApi";

const Register = () => {
  const toast = useToast();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNo: "",
  });
  

  const handleInputChange = (event) => {
    const { name, value, type } = event.target;
    setUser({ ...user, [name]: type === "number" ? +value : value });
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    if (user.password !== user.confirmPassword) {
      // console.log("User", user);
      toast({
        title: "Registration Failed",
        description: "Password & Confirm Password Must Be Same",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    if (
      user.firstName &&
      user.lastName &&
      user.email &&
      user.password &&
      user.confirmPassword &&
      user.phoneNo &&
      user.password === user.confirmPassword
    ) {
      const newUser = {
        firstName: user?.firstName,
        lastName: user?.lastName,
        email: user?.email,
        password: user?.password,
        phoneNo: user?.phoneNo,
      };
      try {
        console.log("Trying To Register", newUser);
        const resp = await axios({
          url: `${SummaryApi.register.url}`,
          method: SummaryApi.register.method,
          data: newUser,

          headers: {
            "Content-Type": "application/json",
          },
        });

        console.log("Register Response", resp);
        if (resp.status === 200) {
          toast({
            title: "Registration Success",
            description: "You Are Registered Successfully",
            status: "success",
            duration: 2000,
            isClosable: true,
          });
          // setUser({
          //   firstName: "",
          //   lastName: "",
          //   email: "",
          //   password: "",
          //   confirmPassword: "",
          //   phoneNo: "",
          // });
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Flex w={"100%"} h={"100vh"} justifyContent={"space-between"}>
      <Box w={"37.5%"} overflow={"hidden"}>
        <Image w={"100%"} src={Logo} alt="Sugar Logo" />
      </Box>
      <Box
        w={"62.5%"}
        h={"100%"}
        py={"20px"}
        backgroundImage={`url(${LoginRegisterPageBackGroundTexture})`}
        backgroundSize="fill"
        backgroundPosition="center"
      >
        <Flex
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={"20px"}
          w={"100%"}
          h={"100%"}
        >
          <Box w={"100%"} textAlign={"center"}>
            <Image
              src={LoginRegisterPageBackGroundHi}
              display={"block"}
              margin={"auto"}
              alt="Hi"
            />
            <Heading as={"h2"} size={"md"} my={"5px"}>
              Login Using Email
            </Heading>
          </Box>
          <form
            style={{
              width: "100%",
              height: "100%",
              margin: "auto",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            onSubmit={handleRegister}
          >
            <Flex w={"50%"} h={"50px"} justifyContent={"space-between"}>
              <Flex
                w={"48%"}
                h={"50px"}
                alignItems={"center"}
                border={"2px solid #343a40"}
                _focusWithin={{ border: "2px solid #f61083" }}
                p={"10px"}
                borderRadius={"10px"}
                position={"relative"}
              >
                <Input
                  fontSize="16px"
                  width={"100%"}
                  type="text"
                  name="firstName"
                  onChange={handleInputChange}
                  value={user?.firstName}
                  placeholder="Enter Your First Name"
                  outline={"none"}
                  border={"none"}
                  focusBorderColor="transparent"
                  required
                />
                <Box
                  position={"absolute"}
                  top={"-12px"}
                  left={"15px"}
                  backgroundImage={`url(${LoginRegisterPageBackGroundTexture})`}
                  backgroundRepeat="no-repeat"
                  backgroundSize="cover"
                  overflow={"hidden"}
                  backgroundPosition="center"
                  cursor={"pointer"}
                  backgroundColor={"#e3dcdc"}
                  px={2}
                  fontSize={"14px"}
                >
                  First Name
                </Box>
              </Flex>
              <Flex
                w={"48%"}
                h={"50px"}
                alignItems={"center"}
                border={"2px solid #343a40"}
                _focusWithin={{ border: "2px solid #f61083" }}
                p={"10px"}
                borderRadius={"10px"}
                position={"relative"}
              >
                <Input
                  fontSize="16px"
                  width={"100%"}
                  type="text"
                  name="lastName"
                  onChange={handleInputChange}
                  value={user?.lastName}
                  placeholder="Enter Your Last Name"
                  outline={"none"}
                  border={"none"}
                  focusBorderColor="transparent"
                  required
                />
                <Box
                  position={"absolute"}
                  top={"-12px"}
                  left={"15px"}
                  backgroundImage={`url(${LoginRegisterPageBackGroundTexture})`}
                  backgroundRepeat="no-repeat"
                  backgroundSize="cover"
                  overflow={"hidden"}
                  backgroundPosition="center"
                  cursor={"pointer"}
                  backgroundColor={"#e3dcdc"}
                  px={2}
                  fontSize={"14px"}
                >
                  Last Name
                </Box>
              </Flex>
            </Flex>
            <Flex
              w={"50%"}
              h={"50px"}
              alignItems={"center"}
              border={"2px solid #343a40"}
              _focusWithin={{ border: "2px solid #f61083" }}
              p={"10px"}
              borderRadius={"10px"}
              position={"relative"}
            >
              <Input
                fontSize="16px"
                width={"100%"}
                type="email"
                name="email"
                onChange={handleInputChange}
                value={user?.email}
                placeholder="Enter Your Email"
                outline={"none"}
                border={"none"}
                focusBorderColor="transparent"
                required
              />
              <Box
                position={"absolute"}
                top={"-12px"}
                left={"15px"}
                backgroundImage={`url(${LoginRegisterPageBackGroundTexture})`}
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                overflow={"hidden"}
                backgroundPosition="center"
                cursor={"pointer"}
                backgroundColor={"#e3dcdc"}
                px={2}
                fontSize={"14px"}
              >
                Email
              </Box>
            </Flex>
            <Flex
              w={"50%"}
              h={"50px"}
              alignItems={"center"}
              border={"2px solid #343a40"}
              _focusWithin={{ border: "2px solid #f61083" }}
              p={"10px"}
              borderRadius={"10px"}
              position={"relative"}
            >
              <Input
                fontSize="16px"
                width={"100%"}
                type="number"
                name="phoneNo"
                onChange={handleInputChange}
                value={user?.phoneNo}
                placeholder="Enter Your Phone Number"
                outline={"none"}
                border={"none"}
                focusBorderColor="transparent"
                required
              />
              <Box
                position={"absolute"}
                top={"-12px"}
                left={"15px"}
                backgroundImage={`url(${LoginRegisterPageBackGroundTexture})`}
                backgroundRepeat={"no-repeat"}
                backgroundSize="cover"
                overflow={"hidden"}
                backgroundPosition="center"
                cursor={"pointer"}
                backgroundColor={"#e3dcdc"}
                px={2}
                fontSize={"14px"}
              >
                Phone/Mobile
              </Box>
            </Flex>
            <Flex
              w={"50%"}
              h={"50px"}
              alignItems={"center"}
              border={"2px solid #343a40"}
              _focusWithin={{ border: "2px solid #f61083" }}
              p={"10px"}
              borderRadius={"10px"}
              position={"relative"}
            >
              <Input
                fontSize="16px"
                width={"100%"}
                type="password"
                name="password"
                onChange={handleInputChange}
                value={user?.password}
                placeholder="Enter Password"
                outline={"none"}
                border={"none"}
                focusBorderColor="transparent"
              />
              <Box
                position={"absolute"}
                top={"-12px"}
                left={"15px"}
                backgroundImage={`url(${LoginRegisterPageBackGroundTexture})`}
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                overflow={"hidden"}
                backgroundPosition="center"
                cursor={"pointer"}
                backgroundColor={"#e3dcdc"}
                px={2}
                fontSize={"14px"}
              >
                Password
              </Box>
            </Flex>
            <Flex
              w={"50%"}
              h={"50px"}
              alignItems={"center"}
              border={"2px solid #343a40"}
              _focusWithin={{ border: "2px solid #f61083" }}
              p={"10px"}
              borderRadius={"10px"}
              position={"relative"}
            >
              <Input
                fontSize="16px"
                width={"100%"}
                type="password"
                name="confirmPassword"
                onChange={handleInputChange}
                value={user?.confirmPassword}
                placeholder="Enter Confirm Password"
                outline={"none"}
                border={"none"}
                focusBorderColor="transparent"
              />
              <Box
                position={"absolute"}
                top={"-12px"}
                left={"15px"}
                backgroundImage={`url(${LoginRegisterPageBackGroundTexture})`}
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                overflow={"hidden"}
                backgroundPosition="center"
                cursor={"pointer"}
                backgroundColor={"#e3dcdc"}
                px={2}
                fontSize={"14px"}
              >
                Confirm Password
              </Box>
            </Flex>
            <Flex
              w={"50%"}
              h={"50px"}
              alignItems={"center"}
              border={"2px solid #d63384"}
              backgroundImage={`url(${NavTopBannerBackgroundImage})`}
              px={"10px"}
              cursor={"pointer"}
              borderRadius={"10px"}
              transition="all 0.3s ease"
              _hover={{
                transform: "scale(1.02)",
                backgroundColor: "#e63384",
              }}
            >
              <Input
                fontSize="16px"
                width={"100%"}
                type="submit"
                value="Register"
                outline={"none"}
                border={"none"}
                cursor={"pointer"}
                color={"#FFFFFF"}
                backgroundColor="transparent" // Ensuring the background remains transparent
              />
            </Flex>
          </form>
          <Text color={"#757575"}>
            Already registered?{" "}
            <ChakraLink
              as={RouterLink}
              to={"/login"}
              color={"#f61083"}
              cursor={"pointer"}
              fontWeight={"bold"}
              _hover={{
                textDecoration: "underline",
                color: "#f61083",
              }}
            >
              Login
            </ChakraLink>
          </Text>
          <Box w={"73%"} lineHeight={"15px"} fontSize={"14px"}>
            <Text color={"#757575"} textAlign={"center"}>
              Registering for this site allows you to access your order status
              and history. Just fill in the above fields, and we'll get a new
              account set up for you in no time. We will only ask you for
              information necessary to make the purchase process faster and
              easier.
            </Text>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Register;
