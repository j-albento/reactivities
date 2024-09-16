import { Button, Container, Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
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
            </Container>
        </Menu>
    );
}
