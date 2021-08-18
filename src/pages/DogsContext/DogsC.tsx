import React from "react";
import {
    Avatar, Center, ScaleFade, Image, Box, Modal, useDisclosure, ModalOverlay, ModalContent, Text, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, Stack,
    SimpleGrid, useMediaQuery
} from "@chakra-ui/react";
import { Navigation } from "../Navigation/Navigation";
import { useDogsContext } from "./dogsContext";
import { getDogsContextApi } from "./api/getDogsContextApi";
import "./DogsC.css";

export const DogsC = () => {
    const [isLargerThan600, isLargerThan800, isLargerThan850] = useMediaQuery(["(min-width: 600px)", "(min-width: 800px)", "(min-width: 850px)"])
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

    return <Stack p="0 15px">
        <Navigation />

        {dogState.dogsURLList.length > 0 &&
            <Center>
                <Box p="10px" shadow="md" borderWidth="1px" borderRadius="20px" maxWidth="800px">
                    <SimpleGrid columns={isLargerThan850 ? 6 : (isLargerThan800 ? 5 : (isLargerThan600 ? 4 : 3))} spacing={0}>
                        {dogState.dogsURLList.map((dog, i) => (
                            <Box key={dog}>
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
                            </Box>
                        ))}
                    </SimpleGrid>
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
    </Stack>;
};