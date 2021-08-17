import React from "react";
import { Avatar, Center, Heading, ScaleFade, Wrap, WrapItem, Image, Box } from "@chakra-ui/react";
import { Navigation } from "../Navigation/Navigation";
import { useDogsContext } from "./dogsContext";
import { getDogsContextApi } from "./api/getDogsContextApi";
import "./DogsC.css";

export const DogsC = () => {
    const { state: dogState, dispatch: dogDispatch } = useDogsContext();

    React.useEffect(() => {
        getDogsContextApi(dogDispatch);
    }, []);

    // const dogClick = (dogId: string) => {
    //     if (dogDispatch) {
    //         dogDispatch({ type: "removeDog", dogId });
    //     }
    // }

    const makeBig = (dogId: string) => {
        if (dogDispatch) {
            dogDispatch({ type: "makeBig", dogId })
        }
    }

    const select = (dogId?: string) => {
        if (dogDispatch) {
            dogDispatch({ type: "select", dogId: dogId || "" })
        }
    }

    return <div style={{ padding: 20 }}>
        <Navigation />
        <Heading>Dogs - Context</Heading>

        <Center>
            <div className="dogs-wrap">
                <Wrap>
                    {dogState && !dogState.selected && dogState.dogsURLList.map((dog, i) => (
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
                    {dogState && dogState.selected &&
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
                </Wrap>
            </div>
        </Center>
    </div>;
};