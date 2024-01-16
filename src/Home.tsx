import font from "./variables";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import scubaProfile from "./Content/Home/scuba1.jpg";
import Col from "react-bootstrap/Col";

export const Home = () => {
  return (
    <>
      <div
        className="vh-100"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "100%",
        }}
      >
        <Row style={{ justifyContent: "center", width: "100%" }}>
          <Col
            xs={{ order: "last" }}
            sm={{ order: "first" }}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div
              style={{
                width: "80%",
                marginTop: "20px",
                justifyContent: "center",
              }}
            >
              <h1
                style={{
                  color: font.color,
                  textAlign: "left",
                  fontSize: "60px",
                }}
              >
                Hello.
              </h1>
              <h1
                style={{
                  color: font.color,
                  marginBottom: "10px",
                  // textAlign: "center",
                  fontSize: "50px",
                }}
              >
                Welcome to my website!
              </h1>
            </div>
          </Col>
          <Col
            xs={{ order: "first" }}
            sm={{ order: "last" }}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <img
              style={{
                height: "300px",
                width: "auto",
                borderRadius: "20px",
              }}
              src={scubaProfile}
            />
          </Col>
        </Row>
        <Row style={{ margin: "20px", justifyContent: "center" }}>
          <p
            style={{
              color: font.color,
              margin: "10px",
              textAlign: "center",
              alignContent: "center",
            }}
          >
            I'm Chace, a tech enthusiast who has lived and worked in Rhode
            Island, San Francisco, and Raleigh, NC. My passion lies in robotics
            and software development, where I love to create innovative
            solutions. I thrive on collaboration, constantly seeking new
            learning opportunities, and finding ways to assist others in their
            endeavors. This website is a window into my professional journey,
            showcasing my experiences, projects, and insights. Whether you're
            here to learn about my work history, explore my projects, or connect
            with me professionally, I'm delighted to have you visit. Feel free
            to browse through my portfolio, and if you have any questions or
            potential collaborations in mind, don't hesitate to reach out. Thank
            you for stopping by, and I hope you find the information here
            valuable for your needs.
          </p>
        </Row>
      </div>
    </>
  );
};
