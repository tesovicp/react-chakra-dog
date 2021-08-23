import React from "react";
import { Avatar, Center, Stack, Wrap, WrapItem } from "@chakra-ui/react";
import { useDogsList } from "./hooks/useDogsList";
import { Navigation } from "../Navigation/Navigation";
import "./Dogs.css";

export const Dogs = () => {
    const { dogsList, getDogs } = useDogsList();
    const [timer, setTimer] = React.useState(10);

    React.useEffect(() => {
        getDogs();
    }, []);


    React.useEffect(() => {
        const myInterval = setTimeout(() => {
            if (timer === 1) {
                setTimer(10);
            } else {
                setTimer(timer - 1);
            }
        }, 1000)

        return () => {
            clearInterval(myInterval);
        };
    });

    return <Stack p="0 15px">
        <Navigation />

        <Center>
            <p>{timer}</p>
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
    </Stack>;
};