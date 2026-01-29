import { Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { PageWrapper } from './Common/PageWrapper';
import { NoMatch } from './Pages/NoMatch';

function App() {
  return (
    <PageWrapper>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </PageWrapper>
  );
}

export default App;
