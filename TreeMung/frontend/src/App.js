import { Routes, Route } from 'react-router-dom';
import Main from './components/main.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  );
}

export default App;
