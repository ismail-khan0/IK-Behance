import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from './Pages/Header';
import Home from './Pages/Home';
import AuthPage from './Pages/AuthPage';
import Jobs from './Pages/Jobs';
import Behance from './Pages/Behance';
import Explore from './Pages/Explore';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/behance" element={<Behance/>} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/explore" element={<Explore/>} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;