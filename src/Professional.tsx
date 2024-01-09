import font from "./variables";
import { ContentItem } from "./ContentItem";
import { ProfessionalContent } from "./Content/Professional/ProfessionalContent";
import { ContentEntry } from "./ContentEntry";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Professional = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Row style={{ maxWidth: "100%" }}>
          <Col>
            <Row style={{ justifyContent: "center" }}>
              <h2
                style={{
                  color: font.color,
                  marginBottom: "10px",
                  textAlign: "center",
                  alignContent: "center",
                  maxWidth: "90%",
                }}
              >
                {" "}
                A glimpse into my work.{" "}
              </h2>
            </Row>
            <Row style={{ justifyContent: "center" }}>
              <p
                style={{
                  color: font.color,
                  marginBottom: "10px",
                  textAlign: "center",
                  alignContent: "center",
                  maxWidth: "100%",
                }}
              >
                I have been working as a Robotics engineer forever. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </Row>
          </Col>
        </Row>
        <Row
          style={{
            justifyContent: "center",
            maxWidth: "100%",
          }}
        >
          {ProfessionalContent.entries.map((entry: ContentEntry) => {
            console.log(entry);
            return (
              <Col xs={10} md={1} className="m-2" style={{ minWidth: "40%" }}>
                <ContentItem content={entry} />
              </Col>
            );
          })}
        </Row>
      </div>
    </>
  );
};
