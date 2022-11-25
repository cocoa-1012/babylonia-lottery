import React, { useState, useEffect } from "react";
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
  Tooltip,
  useDisclosure,
  Modal,
  ModalCloseButton,
  ModalOverlay,
  ModalFooter,
  ModalContent,
  ModalHeader,
  ModalBody,
} from "@chakra-ui/react";
import Web3 from "web3";
import config from "@config/index";
import tokenJSON from "../../babies/abis/BABYToken.json";
import Babylonia_Logo from "../../assets/Babylonia_Logo.png";
import { useAppSelector } from "@hooks";
import { useRouter } from "next/router";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { AiOutlineDown, AiOutlineInfoCircle } from "react-icons/ai";
import { useEthers } from "@usedapp/core";
import DisconnectedWalet from "@components/TokenList/DisconnectedWalet";
import BuyPointOne from "./BuyConfirm";
import { ethers } from "ethers";

const JackpotComponent = (props: any) => {
  const [number, setNumber] = useState(100);
  const { account, chainId } = useEthers();
  const grayscaleMode = useAppSelector((state: any) => state.grayscale.value);
  const { colorMode } = useColorMode();
  const [babyBalance, setBabyBalance] = useState("");

  const walletAddress = useAppSelector(
    (state: any) => state.wallet.walletAddress
  );
  const selectedNetwork = useAppSelector(
    (state: any) => state.wallet.selectedNetwork
  );
  const selectedWallet = useAppSelector(
    (state: any) => state.wallet.selectedWallet
  );

  const increaseNumber = () => {
    if (number < 100) {
      setNumber(number + 1);
    }
  };
  const decreaseNumber = () => {
    if (number > 1) {
      setNumber(number - 1);
    }
  };

  const getBabyAddress = () => {
    if (chainId === 80001) {
      return config.contractAddress.babyToken[80001];
    } else if (chainId === 137) {
      return config.contractAddress.babyToken[137];
    }
  };

  let web3 = new Web3();
  if (typeof window !== "undefined") {
    web3 = new Web3(window.ethereum);
  }

  const ITokenContract = new web3.eth.Contract(
    tokenJSON.abi as any,
    getBabyAddress()
  );

  const tokenContract = {
    address: getBabyAddress(),
    abi: tokenJSON.abi,
    contract: ITokenContract,
    decimals: 18,
  };

  const getBalance = async (address: string) => {
    try {
      const result = await tokenContract.contract.methods
        .balanceOf(address)
        .call();

      return web3.utils.toBN(result).toString();
    } catch (error) {}
  };

  const getRates = async () => {
    try {
      if (account) {
        const babybalance = await getBalance(account ? account : "");
        // const depositRate: any = await getDepositRate();
        let test: string = babybalance!;
        setBabyBalance(web3.utils.fromWei(test as string));
        // if (swapTokenBalance) {
        //   setSwapTokenBalance(web3.utils.fromWei(swaptokenbalance));
        // }
      }
    } catch (error) {}
  };
  useEffect(() => {
    getRates();
  }, []);

  const { isOpen, onOpen, onClose } = useDisclosure();

  if (account != undefined) {
    return (
      <Stack justifyContent="center" alignItems="center">
        <Box
          {...props}
          w={["100vw", "90vw", "260px"]}
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
            paddingX="15px"
            minHeight="63vh"
            borderColor={colorMode === "dark" ? "black" : "black"}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Image
                src={Babylonia_Logo.src}
                className={grayscaleMode === "gray" ? "grayscale" : ""}
                alt="babylonia logo"
                marginTop={"15px"}
                w="120px"
              />

              <FaTimes
                style={{
                  backgroundColor: "white",
                  padding: "1px",
                  borderRadius: "2px",
                  fontSize: "20px",
                  cursor: "pointer",
                }}
                onClick={props.onClose}
              />
            </div>
            <Text
              fontSize={"2xl"}
              pl="6px"
              color={colorMode === "dark" ? "#C5C5C5" : ""}
            >
              Buy Tickets
            </Text>
            <MainContainer>
              <Container style={{ background: "white" }}>
                <RowContainer>
                  <Image
                    src={"/babylogo.png"}
                    className={grayscaleMode === "gray" ? "grayscale" : ""}
                    alt="babylonia logo"
                    w="24px"
                    h="24px"
                  />
                  <p style={{fontSize: 18, margin: 0}}>
                    BABY
                    <AiOutlineDown style={{ cursor: "pointer" }} />
                  </p>
                </RowContainer>
                <p className="balanceText">
                  Balance: {Number(babyBalance).toFixed(2)}
                </p>
              </Container>
              <Container style={{ background: "#fff", width: "100%" }}>
                <RowContainer>
                  <p className="button" onClick={() => decreaseNumber()}>{`-`}</p>
                  <p className="number">{number}</p>
                  <p className="button" onClick={() => increaseNumber()}>{`+`}</p>
                </RowContainer>
                <h3
                  style={{ cursor: "pointer" }}
                  onClick={() => setNumber(100)}
                >
                  Max
                </h3>
              </Container>
              <ColumnContainer style={{ width: "100%" }}>
                <p>
                  Cost <span>0.002123</span> BABY
                </p>
                <p style={{ display: "flex", alignItems: "center" }}>
                  Discount &nbsp;<span>0.01%</span>
                  <Tooltip label="Description of the product" fontSize="lg">
                    <AiOutlineInfoCircle
                      style={{
                        cursor: "pointer",
                        marginLeft: "10px",
                      }}
                    />
                  </Tooltip>
                </p>
                <p style={{ fontSize: "16px" }}>
                  Total <span>0.002123</span> BABY + gas
                </p>
              </ColumnContainer>
              <ButtonContainer>
                <button>Approval</button>
              </ButtonContainer>
              <ButtonContainer>
                <button>Buy Instantly</button>
              </ButtonContainer>
              <ButtonContainer>
                <button onClick={onOpen}>View/Edit Number</button>
                <Modal isOpen={isOpen} size="sm" onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent background={"none"}>
                    <ModalBody>
                      <BuyPointOne onClose={onClose} />
                    </ModalBody>
                  </ModalContent>
                </Modal>
              </ButtonContainer>
            </MainContainer>
          </Box>
        </Box>
      </Stack>
    );
  }

  return (
    <Stack justifyContent="center" alignItems="center" mt={"80px"}>
      <DisconnectedWalet></DisconnectedWalet>
    </Stack>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  margin: 10px;
  padding: 10px;
  min-height: 55px;
  border: 1px solid #000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  width: 100%;
  .balanceText {
    font-family: "Ropa Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 15px;
  }
  .number {
    border: 1px solid #8e8e8e;
    border-radius: 5px;
    font-family: "Ropa Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 26px;
    padding: 5px 8px;
    min-width: 56px;
  }
  h3 {
    font-family: "Ropa Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 26px;
  }
`;

const RowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  p {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5px;
    font-family: "Ropa Sans";
    font-style: normal;
    font-weight: 400;
    /* font-size: 14px; */
    line-height: 19px;
  }
  .button {
    cursor: pointer;
    font-size: 24px;
    margin: 0px 3px;
  }
`;
const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 10px;
  padding: 10px;
  div {
    display: flex;
  }
  p {
    font-family: "Ropa Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 25px;
    word-spacing: 5px;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border: 2px solid #000000;
  border-radius: 5px;
  margin: 5px 40px 5px 40px;
  width: 100%;

  text-align: center;
  button {
    font-family: "Ropa Sans";
    font-style: normal;
    width: 100%;
    font-weight: 400;
    font-size: 24px;
    line-height: 26px;

    color: #000000;
    padding: 5px 20px;
  }
`;

export default JackpotComponent;
