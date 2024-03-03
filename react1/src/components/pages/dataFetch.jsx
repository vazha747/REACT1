import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Button,
  Divider,
  Text,
  Heading,
  ButtonGroup,
  Box,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";
import Cardi from "../../components/cardi/index.jsx";
import Skeletoni from "../../components/skeleton/index.jsx";
const DataFetch = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.log("error", error);
      }
    };
    setTimeout(() => {
      fetchData();
    }, 4000);
  }, []);

  return (
    <Box display={"flex"} gap={"25px"} flexWrap={"wrap"}>
      {data ? (
        data?.map((item, index) => {
          return <Cardi kay={index} item={item} />;
        })
      ) : (
        <Skeletoni />
      )}
    </Box>
  );
};

export default DataFetch;
