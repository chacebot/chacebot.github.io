import font from "../Styles/variables";
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
        <div style={{ height: "60%", display: "flex", alignItems: "center" }}>
          <h1
            style={{
              color: font.color,
              marginBottom: "10px",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            No such page exists.
          </h1>
        </div>
      </div>
    </>
  );
};
