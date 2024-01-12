import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
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
          <Carousel data-bs-theme="dark">
            {props.content.images.map((image: any) => {
              return (
                <Carousel.Item>
                  <Card.Img
                    className="d-block w-100"
                    style={{
                      height: "100%",
                      width: "auto",
                    }}
                    src={image}
                  />
                </Carousel.Item>
              );
            })}
          </Carousel>
          <Card.Text className="mt-3">{props.content.body}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
