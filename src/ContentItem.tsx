import Card from "react-bootstrap/Card";
import { ContentEntry } from "./ContentEntry";

export interface ContentItemProps {
  content: ContentEntry;
  style?: any;
}

export const ContentItem = (props: ContentItemProps) => {
  return (
    <div style={props.style}>
      <Card className="text-center">
        <Card.Body>
          <Card.Title>{props.content.heading}</Card.Title>
          <Card.Img
            className="m-3"
            style={{ width: "80%", maxHeight: "20%" }}
            src={props.content.images[0]}
          />
          <Card.Text>{props.content.body}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
