import React from "react";
import { Avatar, Center, Heading, Wrap, WrapItem } from "@chakra-ui/react";
import { Navigation } from "../Navigation/Navigation";
import { useDogsContext } from "./dogsContext";
import { getDogsContextApi } from "./api/getDogsContextApi";
import "./DogsC.css";

export const DogsC = () => {
    const { state: dogState, dispatch: dogDispatch } = useDogsContext();

    React.useEffect(() => {
        getDogsContextApi(dogDispatch);
    }, []);

    const dogClick = (dog: string) => {
        if (dogDispatch) {
            dogDispatch({ type: "removeDog", dogsId: dog });
        }
    }

    return <div style={{ padding: 20 }}>
        <Navigation />
        <Heading>Dogs - Context</Heading>

        <Center>
            <div className="dogs-wrap">
                <Wrap>
                    {dogState && dogState.dogsURLList.map((dog, i) => (
                        <WrapItem key={dog}>
                            <Avatar
                                className="dog"
                                name={i.toString()}
                                onClick={() => dogClick(dog)}
                                size="2xl"
                                src={dog}
                            />
                        </WrapItem>
                    ))}
                </Wrap>
            </div>
        </Center>
    </div>;
};