import React from "react";
import { Box, Text } from "@chakra-ui/react";

function ActionNavigation() {
  return (
    <Box gap={"20px"} flexDir={"col"} justifyContent={"center"}>
      <Text>
        <a href="/settings">Settings</a>
      </Text>
      <Text>
        <span
          onClick={() => {
            window.location.reload();
          }}
        >settings</span>
      </Text>
    </Box>
  );
}

export default ActionNavigation;
