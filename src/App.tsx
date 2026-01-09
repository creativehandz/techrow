import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import FundPartnerWithUs from './components/FundPartnerWithUs';
import FundGala from './components/FundGala';
import Donate from './components/Donate';
import ImpactProgramWeFunded from './components/ImpactProgramWeFunded';
import LoadingSpinner from './components/LoadingSpinner';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Show spinner for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingSpinner isLoading={isLoading} />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/fund-partner-with-us" element={<FundPartnerWithUs />} />
          <Route path="/fund-gala" element={<FundGala />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/impact-program-we-funded" element={<ImpactProgramWeFunded />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
