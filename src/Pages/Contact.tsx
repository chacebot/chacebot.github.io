import font from "../Styles/variables";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { useState } from "react";

import { Gmail } from "../Content/Contact/Icons/Gmail";
import { LinkedIn } from "../Content/Contact/Icons/LinkedIn";
import { Github } from "../Content/Contact/Icons/Github";

export const Contact = () => {
  const renderTooltip = (props: any) => (
    <Tooltip id="email-tooltip" {...props}>
      hello@chace.me
    </Tooltip>
  );

  return (
    <>
      <div
        className="vh-100"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Row style={{ width: "60%", height: "100%" }}>
          <Col style={{ width: "60%" }}>
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
                Let's connect!
              </h2>
            </Row>
            <Row
              xs={1}
              md={3}
              style={{ height: "50%", justifyContent: "center" }}
            >
              <Col
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <OverlayTrigger
                  placement="bottom"
                  delay={{ show: 250, hide: 1000000 }}
                  overlay={renderTooltip}
                >
                  <div>
                    <Gmail />
                  </div>
                </OverlayTrigger>
              </Col>
              <Col
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    window.open("https://www.linkedin.com/in/chace-medeiros/");
                  }}
                >
                  <LinkedIn />
                </div>
              </Col>
              <Col
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    window.open("https://github.com/chacebot");
                  }}
                >
                  <Github />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
};
