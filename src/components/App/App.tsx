import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage';
import DeviceListPage from '../../pages/DeviceListPage/DeviceListPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/device-list" element={<DeviceListPage />} />
      </Routes>
    </Router>
  );
}

export default App;
