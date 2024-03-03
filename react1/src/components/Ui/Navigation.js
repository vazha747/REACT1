import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import DashboardLogo from "../../components/logos/dashboardLogo";
import GroupsLogo from "../../components/logos/groupsLogo";
import HomeLogo from "../../components/logos/homeLogo";
import NotificationsLogo from "../../components/logos/notificationsLogo";
import ProfileLogo from "../../components/logos/profileLogo";
import SettingsLogo from "../../components/logos/settingLogo";
const Navigation = () => {
  return (
    <Box gap={"20px"} flexDir={"col"} justifyContent={"center"} display={"grid"}>
      <Text>
        <a href="/">
          <Flex gap={"8px"}>
            <HomeLogo />
            Home
          </Flex>
        </a>
      </Text>
      <Text>
        <a href="/profile">
          <Flex gap={"8px"}>
            <ProfileLogo />
            Profile
          </Flex>
        </a>
      </Text>
      <Text>
        <a href="/groups">
          <Flex gap={"8px"}>
            <GroupsLogo />
            groups
          </Flex>
        </a>
      </Text>
      <Text>
        <a href="/notifications">
          <Flex gap={"8px"}>
            <NotificationsLogo />
            Notifications
          </Flex>
        </a>
      </Text>
      <Text
        paddingX={"20px"}
        background={"#EFF4FF"}
        Radius={"0px, 0px, 0px, 30px"}
      >
        <a href="/dashboard">
          <Flex gap={"8px"}>
            <DashboardLogo />
            Dashboard
          </Flex>
        </a>
      </Text>
      <Text paddingY={"100%"}>
        <a href="/settings">
          <Flex gap={"8px"}>
            <SettingsLogo />
            Settings
          </Flex>
        </a>
      </Text>
    </Box>
  );
};

export default Navigation;
