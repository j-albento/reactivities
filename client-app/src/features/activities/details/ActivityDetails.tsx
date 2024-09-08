import { Button, Card, Image } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default observer(function ActivityDetails() {
    const { activityStore } = useStore();
    const { selectedActivity: activity, loadActivity } = activityStore;
    const { id } = useParams();

    useEffect(() => {
        if (id) loadActivity(id);
    }, [id, loadActivity]);

    if (!activity) return;

    return (
        <Card fluid={true}>
            <Image
                src={`/client-app/public/assets/categoryImages/${activity.category}.jpg`}
            />
            <Card.Content>
                <Card.Header>{activity.title}</Card.Header>
                <Card.Meta>
                    <span>{activity.date}</span>
                </Card.Meta>
                <Card.Description>{activity.description}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths="2">
                    <Button
                        as={Link}
                        to={`/manage/${activity.id}`}
                        basic={true}
                        color="blue"
                        content="Edit"
                    />
                    <Button
                        as={Link}
                        to="/activities"
                        basic={true}
                        color="grey"
                        content="Cancel"
                    />
                </Button.Group>
            </Card.Content>
        </Card>
    );
});
