import { Button, Container, Menu } from "semantic-ui-react";
import { useStore } from "../stores/store";

export default function NavBar() {
    const { activityStore } = useStore();

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
                    <Button
                        onClick={() => activityStore.openForm()}
                        positive={true}
                        content="Create Activity"
                    />
                </Menu.Item>
            </Container>
        </Menu>
    );
}
