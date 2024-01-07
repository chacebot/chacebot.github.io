import Card from "react-bootstrap/Card";
import { ContentEntry } from "./ContentEntry";

export interface ContentItemProps {
  content: ContentEntry;
}

export const ContentItem = (props: ContentItemProps) => {
  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Title>{props.content.heading}</Card.Title>
        <img
          className="m-3"
          style={{ width: "90%" }}
          src={props.content.images[0]}
        />
        <Card.Text>{props.content.body}</Card.Text>
      </Card.Body>
    </Card>
  );
};
