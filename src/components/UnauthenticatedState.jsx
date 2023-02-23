import "../flow/config";
import * as fcl from "@onflow/fcl";
import { Box, Button, Center, Heading, HStack, VStack } from "@chakra-ui/react";

const UnauthenticatedState = () => {
  return (
    <VStack
      pos={"absolute"}
      top={"50%"}
      left={"40%"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      boxShadow={"xl"}
      rounded={"lg"}
      p={6}
      maxW={"max-content"}
    >
      <Heading textAlign={"center"}>Flow Bytes</Heading>
      <HStack>
        <Button onClick={fcl.logIn}>Log In</Button>
        <Button onClick={fcl.signUp}>Sign Up</Button>
      </HStack>
    </VStack>
  );
};

export default UnauthenticatedState;
