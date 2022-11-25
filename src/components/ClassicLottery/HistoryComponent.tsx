import {
  Box,
  Flex,
  Image,
  Stack,
  Text,
  useColorMode,
  VStack,
  WrapItem,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import Babylonia_Logo from "../../assets/Babylonia_Logo.png";
import { useAppSelector } from "@hooks";
import { useRouter } from "next/router";
import styled from "styled-components";

const HistoryComponent = (props: any) => {
  const grayscaleMode = useAppSelector((state: any) => state.grayscale.value);
  const { colorMode, toggleColorMode } = useColorMode();
  const textColor = useColorModeValue("gray.900", "#C5C5C5");
  const bgBuyBtnColor = useColorModeValue("gray.100", "gray.800");
  const bgBuyBtnTextColor = useColorModeValue("gray.900", "gray.200");

  const router = useRouter();

  return (
    <Stack justifyContent="center" alignItems="center">
      <Box
        {...props}
        w={["100vw", "90vw", "340px"]}
        h={"480px"}
        borderRadius="10px"
        whiteSpace="nowrap"
        bg={colorMode === "dark" ? "black" : "white"}
        border={"1px"}
        borderColor={colorMode === "dark" ? "white" : "black"}
        p="8px"
        m={["10px"]}
      >
        <Box
          bg={colorMode === "dark" ? "#5C5C5C" : "#E2E2E2"}
          borderRadius="5px"
          border="1px"
          minH={"462px"}
          paddingX="15px"
          borderColor={colorMode === "dark" ? "black" : "black"}
          paddingBottom="150px"
        >
          <Flex justifyContent="space-evenly" mt="15px">
            <Text
              fontSize={"2xl"}
              pl="6px"
              color={colorMode === "dark" ? "#C5C5C5" : ""}
            >
              ALL HISTORY
            </Text>
            <Text
              fontSize={"2xl"}
              pl="6px"
              color={colorMode === "dark" ? "#C5C5C5" : ""}
            >
              YOUR HISTORY
            </Text>
          </Flex>
          <Container style={{ background: "#F0B90B" }}>
            <h2>PRIZE POOL</h2>
            <p style={{display: 'block'}}>
              88,888888.00 <br /> <span>-$123456.00</span>
            </p>
          </Container>
          <Container style={{ background: "#B49EF2" }}>
            <h2>ROUND</h2>
            <h4>{`<`}</h4>
            <p>0000</p>
            <h4>{`>`}</h4>
            <h3>First</h3>
            <h3>Last</h3>
          </Container>
          <Container style={{ background: "#37A93B" }}>
            <h2>WINNER WINNER</h2>
            <p style={{fontSize: "32px"}}>1234356</p>
          </Container>
        </Box>
      </Box>
    </Stack>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 10px 8px;
  padding: 10px;
  height: 55px;

  border: 1px solid #000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  h2 {
    font-family: "Ropa Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 19px;
    color: #000000;
  }
  h3 {
    padding: 5px;
  }
  h4 {
    font-size: 20px;
  }
  p {
    display: flex;
    align-items: center;
    background: #ffffff;
    border: 1px solid #8E8E8E;
    border-radius: 5px;
    font-family: "Ropa Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 26px;
    color: #000000;
    padding: 0 10px;
    height: 40px;
    margin-left: 5px;
    span {
      font-size: 12px;
      margin: 0;
      padding: 0;
      position: relative;
      top: -12px;
      line-height: 18px;
      font-weight: 400;
    }
  }
`;

export default HistoryComponent;
