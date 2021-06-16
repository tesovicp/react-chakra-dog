import React from "react";
import { Avatar, Center, Heading, Wrap, WrapItem } from "@chakra-ui/react";
import { useDogsList } from "./hooks/useDogsList";
import { Navigation } from "../Navigation/Navigation";
import "./Dogs.css";

export const Dogs = () => {
    const { dogsList, getDogs } = useDogsList();

    React.useEffect(() => {
        getDogs();
    }, []);

    return <div style={{ padding: 20 }}>
        <Navigation />
        <Heading>Dogs</Heading>

        <Center>
            <div className="dogs-wrap">
                <Wrap>
                    {dogsList.map((dog, i) => (
                        <WrapItem key={dog}>
                            <Avatar size="2xl" src={dog} name={i.toString()} />
                        </WrapItem>
                    ))}
                </Wrap>
            </div>
        </Center>
    </div>;
};