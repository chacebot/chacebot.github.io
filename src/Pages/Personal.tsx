import { PageContent } from "../Common/PageContent";
import { PersonalContent } from "../Content/Personal/PersonalContent";

export const Personal = () => {
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
        <PageContent info={PersonalContent} />
      </div>
    </>
  );
};
