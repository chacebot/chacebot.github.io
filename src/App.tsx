import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Professional } from "./Professional";
import { Personal } from "./Personal";
import { Causes } from "./Causes";
import { Contact } from "./Contact";
import { PageWrapper } from "./PageWrapper";
import { NoMatch } from "./NoMatch";
import ReactGA from "react-ga";
import { useEffect } from "react";
const TRACKING_ID = "G-B9F8KZ81K0";

ReactGA.initialize(TRACKING_ID);

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
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
