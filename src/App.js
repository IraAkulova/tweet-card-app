import { Routes, Route } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
import Home from './pages/Home';
import Tweets from './pages/Tweets';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="tweets" element={<Tweets />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
