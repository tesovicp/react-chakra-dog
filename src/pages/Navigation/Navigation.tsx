import { useLocation } from "react-router-dom";
import { Box, Button, Heading, HStack, Menu, MenuButton, MenuItem, MenuList, useColorMode } from "@chakra-ui/react";
import { ChevronDownIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";

interface IItemText {
    title: string;
    path: string;
    locationPath: string;
}

interface ITitle {
    [key: string]: string
}

const title: ITitle = {
    home: "Home",
    cats: "Cats",
    dogs: "Dogs",
    dogsContext: "Dogs - Context",
}

const getTitle = (pathname: string) => {
    const value = pathname === "/" ? "home" : pathname.replace("/", "");
    return title[value] || "ERROR";
}

const ItemText = ({ title, path, locationPath }: IItemText) =>
    <div style={{ fontWeight: path === locationPath ? "bold" : "initial" }}>{title}</div>;

export const Navigation = () => {
    let location = useLocation();
    const { colorMode, toggleColorMode } = useColorMode();

    return <HStack spacing="auto">
        <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>{getTitle(location.pathname)}</MenuButton>
            <MenuList>
                <MenuItem as="a" href="/#/">
                    <ItemText title={getTitle("home")} path="/" locationPath={location.pathname} />
                </MenuItem>
                <MenuItem as="a" href="/#/cats">
                    <ItemText title={getTitle("cats")} path="/cats" locationPath={location.pathname} />
                </MenuItem>
                <MenuItem as="a" href="/#/dogs">
                    <ItemText title={getTitle("dogs")} path="/dogs" locationPath={"/#/dogs"} />
                </MenuItem>
                <MenuItem as="a" href="/#/dogsContext">
                    <ItemText title={getTitle("dogsContext")} path="/dogsContext" locationPath={location.pathname} />
                </MenuItem>
            </MenuList>
        </Menu>
        <Heading p="20px" size="lg">{getTitle(location.pathname)}</Heading>
        <Box>
            <Button leftIcon={colorMode === "light" ? <MoonIcon /> : <SunIcon />} onClick={toggleColorMode}>
                Toggle {colorMode === "light" ? "Dark" : "Light"}
            </Button>
        </Box>
    </HStack>;
};