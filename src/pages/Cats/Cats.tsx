import React from "react";
import { Avatar, Center, Heading, Wrap, WrapItem } from "@chakra-ui/react";
import { useCatsList } from "./hooks/useCatsList";
import { Navigation } from "../Navigation/Navigation";
import "./Cats.css";

export const Cats = () => {
    const { catsList, getCats } = useCatsList();

    React.useEffect(() => {
        getCats();
    }, []);

    return <div style={{ padding: 20 }}>
        <Navigation />
        <Heading>Cats</Heading>

        <Center>
            <div className="dogs-wrap">
                <Wrap>
                    {catsList.map((cat, i) => (
                        <WrapItem key={cat}>
                            <Avatar size="2xl" src={cat} name={i.toString()} />
                        </WrapItem>
                    ))}
                </Wrap>
            </div>
        </Center>
    </div>;
};