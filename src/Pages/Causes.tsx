import font from "../Styles/variables";

export const Causes = () => {
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
        <h1 style={{ color: font.color, marginTop: "20px" }}>
          {" "}
          The causes I support (under construction){" "}
        </h1>
      </div>
    </>
  );
};
