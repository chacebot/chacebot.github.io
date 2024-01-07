import font from "./variables";

export const Personal = () => {
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
        <h1 style={{ color: font.color, marginTop: "20px" }}>
          {" "}
          A glimpse into my personal interests (under construction){" "}
        </h1>
      </div>
    </>
  );
};
