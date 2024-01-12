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
                  margin: "10px",
                  textAlign: "center",
                  alignContent: "center",
                  maxWidth: "80%",
                }}
              >
                I am a seasoned professional with a passion for robotics and
                software development, specializing in Perception, Motion
                Control, and Manipulation.
              </p>
              <p
                style={{
                  color: font.color,
                  margin: "10px",
                  textAlign: "center",
                  alignContent: "center",
                  maxWidth: "80%",
                }}
              >
                My expertise encompasses a wide range of technologies and tools,
                including ROS (Robot Operating System), C++, Python, OpenCV, and
                PyTorch, which I leverage to design and implement innovative
                robotics solutions. With a deep understanding of kinematics, PID
                control, and stereo cameras, I excel in creating robust systems
                that push the boundaries of what's possible in the field of
                robotics.
              </p>
              <p
                style={{
                  color: font.color,
                  margin: "10px",
                  textAlign: "center",
                  alignContent: "center",
                  maxWidth: "80%",
                }}
              >
                In addition to my proficiency in robotics, I have a strong
                background in web app development, where I utilize technologies
                such as React, Node.js, MongoDB, and SQL to build intuitive and
                efficient web applications. My skills extend to backend
                development using Python, REST API design, and database
                management, enabling me to create seamless user experiences
                across a variety of platforms.
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
