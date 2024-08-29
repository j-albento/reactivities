import { Button, Item, Label, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/layout/models/activity";
import { SyntheticEvent, useState } from "react";

interface Props {
    activities: Activity[];
    selectActivity: (id: string) => void;
    deleteActivity: (id: string) => void;
    submitting: boolean;
}

export default function ActivityList({
    activities,
    selectActivity,
    deleteActivity,
    submitting,
}: Props) {
    const [target, setTarget] = useState("");

    function handleActivityDelete(
        event: SyntheticEvent<HTMLButtonElement>,
        id: string
    ) {
        setTarget(event.currentTarget.name);
        deleteActivity(id);
    }
    return (
        <Segment>
            <Item.Group divided={true}>
                {activities.map((activity) => (
                    <Item key={activity.id}>
                        <Item.Content>
                            <Item.Header as="a">{activity.title}</Item.Header>
                            <Item.Meta>{activity.date}</Item.Meta>
                            <Item.Description>
                                <div>{activity.description}</div>
                                <div>
                                    {activity.city}, {activity.venue}
                                </div>
                            </Item.Description>
                            <Item.Extra>
                                <Button
                                    floated="right"
                                    content="View"
                                    color="blue"
                                    onClick={() => selectActivity(activity.id)}
                                />
                                <Button
                                    floated="right"
                                    content="Delete"
                                    color="red"
                                    name={activity.id}
                                    loading={submitting && target === activity.id}
                                    onClick={(event) =>
                                        handleActivityDelete(event, activity.id)
                                    }
                                />
                                <Label
                                    basic={true}
                                    content={activity.category}
                                />
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    );
}
