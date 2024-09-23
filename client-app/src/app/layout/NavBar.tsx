import { Button, Container, Menu, Image, Dropdown } from "semantic-ui-react";
import { Link, NavLink } from "react-router-dom";
import { useStore } from "../stores/store";
import { observer } from "mobx-react-lite";

export default observer(function NavBar() {
    const {
        userStore: { user, logout },
    } = useStore();
    return (
        <Menu inverted={true} fixed="top">
            <Container>
                <Menu.Item as={NavLink} to="/" header={true}>
                    <img
                        src="./assets/logo.png"
                        alt="logo"
                        style={{ marginRight: 100 }}
                    />
                    Reactivities
                </Menu.Item>
                <Menu.Item as={NavLink} to="/activities" name="Activities" />
                <Menu.Item as={NavLink} to="/errors" name="Errors" />
                <Menu.Item>
                    <Button
                        as={NavLink}
                        to="/createActivity"
                        positive={true}
                        content="Create Activity"
                    />
                </Menu.Item>
                <Menu.Item position="right">
                    <Image
                        sr={user?.image || "../../../public/assets/user.png"}
                        avatar
                        spaced="right"
                    />
                    <Dropdown pointing="top left" text={user?.displayName}>
                        <Dropdown.Menu>
                            <Dropdown.Item
                                as={Link}
                                to={`/${user?.username}`}
                                text="My Profile"
                                icon="user"
                            />
                            <Dropdown.Item onClick={logout} icon="power" />
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Item>
            </Container>
        </Menu>
    );
});
