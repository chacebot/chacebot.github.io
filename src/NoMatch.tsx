import font from "./variables";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const NoMatch = () => {
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
                No such page exists.
              </h2>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
};
