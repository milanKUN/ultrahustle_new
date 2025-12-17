

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import NewWayToWork from './components/NewWayToWork';
import WhyStandsApart from './components/WhyStandsApart';
import UltraHustleAdvantage from './components/UltraHustleAdvantage';
import GlobalMovement from './components/GlobalMovement';
import ResultsThatSpeak from './components/ResultsThatSpeak';
import VisionMeetsAction from './components/VisionMeetsAction';
import Footer from './components/Footer';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  );
}
