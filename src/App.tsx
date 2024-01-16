import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Professional } from "./Professional";
import { Personal } from "./Personal";
import { Causes } from "./Causes";
import { Contact } from "./Contact";
import { PageWrapper } from "./PageWrapper";
import { NoMatch } from "./NoMatch";

function App() {
  return (
    <>
      <PageWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/professional" element={<Professional />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="/causes" element={<Causes />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </PageWrapper>
    </>
  );
}

export default App;
