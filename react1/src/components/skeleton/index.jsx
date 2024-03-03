import React from 'react'
import {
 Box,
 SkeletonCircle,
 SkeletonText,
} from "@chakra-ui/react"
const index = () => {
  return (
    <Box padding="6" boxShadow="lg" bg="white" width={"250px"} >
    <SkeletonCircle size="20" />
    <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
  </Box>  
  );
};

export default index;