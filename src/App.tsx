import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Professional } from "./Professional";
import { Personal } from "./Personal";
import { Causes } from "./Causes";
import { Contact } from "./Contact";
import { PageWrapper } from "./PageWrapper";
import { NoMatch } from "./NoMatch";
import ReactGA from "react-ga4";
import { useEffect } from "react";
import GA4React from "ga-4-react";
const TRACKING_ID = "G-3Z0WHF5ZTS";

function App() {
  useEffect(() => {
    try {
      setTimeout((_) => {
        const ga4React = new GA4React(TRACKING_ID);
        ga4React.initialize().catch((err) => console.error(err));
      }, 1000);
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <>
      <PageWrapper>
        <Routes>
          <Route path="/professional" element={<Professional />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="/causes" element={<Causes />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NoMatch />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </PageWrapper>
    </>
  );
}

export default App;
