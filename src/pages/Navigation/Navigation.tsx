import { useLocation } from "react-router-dom";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

interface IItemText {
    title: string;
    path: string;
    locationPath: string;
}

const ItemText = ({ title, path, locationPath }: IItemText) =>
    <div style={{ fontWeight: path === locationPath ? "bold" : "initial" }}>{title}</div>;

export const Navigation = () => {
    let location = useLocation();

    return <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>Pages</MenuButton>
        <MenuList>
            <MenuItem as="a" href="/">
                <ItemText title="Home" path="/" locationPath={location.pathname} />
            </MenuItem>
            <MenuItem as="a" href="/#/cats">
                <ItemText title="Cats" path="/cats" locationPath={location.pathname} />
            </MenuItem>
            <MenuItem as="a" href="/#/dogs">
                <ItemText title="Dogs" path="/dogs" locationPath={location.pathname} />
            </MenuItem>
            <MenuItem as="a" href="/#/dogsContext">
                <ItemText title="Dogs - Context" path="/dogsContext" locationPath={location.pathname} />
            </MenuItem>
        </MenuList>
    </Menu>;
};