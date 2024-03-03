import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Header from "./components/layout/header";
import Profile from "./components/pages/profile";
import { ChakraProvider } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import Dashboard from "./components/pages/dashboard";
import DataFetch from "./components/pages/dataFetch";
const router = createBrowserRouter([
  {
    path: "/",
    element: <DataFetch />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/groups",
    element: <h1>groups</h1>,
  },
  {
    path: "/notifications",
    element: <h1>Notifications</h1>,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/settings",
    element: <h1>Settings</h1>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <ChakraProvider>
      <Flex gap={"20px"}>
        <Header />
        <RouterProvider router={router} />
      </Flex>
    </ChakraProvider>
  </>
);
