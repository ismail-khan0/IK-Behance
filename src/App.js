import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from './Pages/Header';
import Home from './Pages/Home';
import AuthPage from './Pages/AuthPage';
import Jobs from './Pages/Jobs';
import Behance from './Pages/Behance';
import Explore from './Pages/Explore';
import Recommended from './Components/Recommended';
import HireFreelancer from './Pages/HireFreelancer';
import FreelanceProject from './Components/FreelanceProject';
import PricingPlans from './Components/PricingPlans';
import Notification from './Components/Notification';

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
          <Route path="/recommended" element={<Recommended/>} />
          <Route path="/hireFreelancer" element={<HireFreelancer/>} />
          <Route path="/freelanceproject" element={<FreelanceProject/>} />
          <Route path="/notification" element={<Notification/>} />
          <Route path="/pricing" element={<PricingPlans />} />
          {/* Add more routes as needed */}
        </Routes>
        
      </div>
      
    </Router>
  );
}

export default App;