import { ProfessionalContent } from "../Content/Professional/ProfessionalContent";
import { PageContent } from "../Common/PageContent";

export const Professional = () => {
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
        <PageContent info={ProfessionalContent} />
      </div>
    </>
  );
};
