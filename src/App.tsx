import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Professional } from "./Pages/Professional";
import { Personal } from "./Pages/Personal";
import { Causes } from "./Pages/Causes";
import { Contact } from "./Pages/Contact";
import { PageWrapper } from "./Common/PageWrapper";
import { NoMatch } from "./Pages/NoMatch";

function App() {
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
