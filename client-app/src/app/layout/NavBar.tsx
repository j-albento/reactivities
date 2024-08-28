import { Button, Container, Menu } from "semantic-ui-react";

interface Props {
    openForm: () => void;
}

export default function NavBar({ openForm }: Props) {
    return (
        <Menu inverted={true} fixed="top">
            <Container>
                <Menu.Item header={true}>
                    <img
                        src="./assets/logo.png"
                        alt="logo"
                        style={{ marginRight: 100 }}
                    />
                    Reactivities
                </Menu.Item>
                <Menu.Item name="Activities" />
                <Menu.Item>
                    <Button onClick={openForm} positive={true} content="Create Activity" />
                </Menu.Item>
            </Container>
        </Menu>
    );
}
