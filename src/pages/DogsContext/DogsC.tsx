import React from "react";
import { Avatar, Center, Heading, ScaleFade, Wrap, WrapItem, Image, Box, Modal, useDisclosure, ModalOverlay, ModalContent, Text, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button } from "@chakra-ui/react";
import { Navigation } from "../Navigation/Navigation";
import { useDogsContext } from "./dogsContext";
import { getDogsContextApi } from "./api/getDogsContextApi";
import "./DogsC.css";

export const DogsC = () => {
    const { state: dogState, dispatch: dogDispatch } = useDogsContext();

    const { isOpen, onClose, onToggle } = useDisclosure();

    React.useEffect(() => {
        getDogsContextApi(dogDispatch);
    }, []);

    // const dogClick = (dogId: string) => {
    //     dogDispatch({ type: "removeDog", dogId });
    // }

    const makeBig = (dogId: string) => {
        dogDispatch({ type: "makeBig", dogId });
    }

    const select = (dogId?: string) => {
        dogDispatch({ type: "select", dogId: dogId || "" });
        onToggle();
    }

    const close = () => {
        onToggle();
        select(undefined);
    }

    return <div style={{ padding: 20 }}>
        <Navigation />
        <Heading>Dogs - Context</Heading>

        <Center>
            <div className="dogs-wrap">
                <Wrap>
                    {dogState.dogsURLList.map((dog, i) => (
                        <WrapItem key={dog}>
                            <Center w="120px" h="120px">
                                <ScaleFade initialScale={0.2} in={true}>
                                    <Avatar
                                        className="pointer"
                                        name={i.toString()}
                                        onClick={() => select(dog)}
                                        onMouseOver={() => makeBig(dog)}
                                        onMouseOut={() => makeBig(dog)}
                                        size={dogState.big.indexOf(dog) >= 0 ? "2xl" : "xl"}
                                        src={dog}
                                    />
                                </ScaleFade>
                            </Center>
                        </WrapItem>
                    ))}
                    {false && dogState.selected &&
                        <Center w="800px" h="400px">
                            <Box boxSize="400px" d="flex" alignItems="center" isTruncated>
                                <Image
                                    className="pointer"
                                    name={dogState.selected}
                                    onClick={() => select(dogState.selected)}
                                    src={dogState.selected}
                                />
                            </Box>
                        </Center>
                    }
                    <Modal onClose={onClose} isOpen={isOpen} trapFocus isCentered>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>Selected Dog</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                <Center>
                                    <Image
                                        className="pointer"
                                        name={dogState.selected}
                                        onClick={() => select(dogState.selected)}
                                        src={dogState.selected}
                                    />
                                </Center>
                                <Text fontSize="xs" color="gray.400">{dogState.selected}</Text>
                            </ModalBody>

                            <ModalFooter>
                                {/* <Button variant="ghost" mr={3}>Secondary Action</Button> */}
                                <Button colorScheme="blue" onClick={close} autoFocus>
                                    Close
                                </Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>
                </Wrap>
            </div>
        </Center>
    </div>;
};