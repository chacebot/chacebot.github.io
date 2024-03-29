import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import { ContentEntry } from "./ContentStructure";

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
          <Carousel pause="hover" interval={null} data-bs-theme="dark">
            {props.content.images.map((image: any, idx: number) => {
              return (
                <Carousel.Item key={idx}>
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
          {props.content.links?.map((link: any, idx: number) => {
            return (
              <Card.Link key={idx} href={link.url}>
                {" "}
                {link.label}
              </Card.Link>
            );
          })}
        </Card.Body>
      </Card>
    </div>
  );
};
