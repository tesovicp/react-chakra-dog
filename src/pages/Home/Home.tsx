import React from "react";
import { Heading } from "@chakra-ui/react";
import { Navigation } from "../Navigation/Navigation";
import "./Home.css";

export const Home = () => {
    const [text, setText] = React.useState<string>("");

    const handleInput = (event: any) => {
    };

    const handleKeyUp = (event: any) => {
        event.preventDefault();

        if (event.keyCode === 13) {
            console.log("ENTER!");
            event.target.value = "";
        }

        event.target.style.height = "1px";
        event.target.style.height = (event.target.scrollHeight) + "px";
        setText(event.target.value);
    };

    return <div style={{ padding: 20 }}>
        <Navigation />
        <Heading>Home</Heading>
        <br />
        {/* <textarea onChange={(x) => console.log(x.target.value)} style={{ width: 300 }} /> */}
        <textarea cols={30} rows={2} onInput={handleInput} onKeyUp={handleKeyUp} className="input-msg"></textarea>
        <br />
        <br />
        <Heading>{text}</Heading>
    </div>;
};