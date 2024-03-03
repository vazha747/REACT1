import React from "react";
import { Box, Text } from "@chakra-ui/react";
import Navigation from "../Ui/Navigation";
const header = () => {
  return (
    <Box
      paddingY={"10%"}
      paddingX={"60px"}
      justifyContent={""}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      height={"100vh"}
      gap={"30px"}
      background={"#F2F2F2"}
    >
      <Navigation />
    </Box>
  );
};

export default header;
