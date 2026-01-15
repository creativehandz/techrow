import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutUs from "./components/AboutUs";
import FundPartnerWithUs from "./components/FundPartnerWithUs";
import FundGala from "./components/FundGala";
import Donate from "./components/Donate";
import ImpactProgramWeFunded from "./components/ImpactProgramWeFunded";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/fund-partner-with-us" element={<FundPartnerWithUs />} />
        <Route path="/fund-gala" element={<FundGala />} />
        <Route path="/donate" element={<Donate />} />
        <Route
          path="/impact-program-we-funded"
          element={<ImpactProgramWeFunded />}
        />
      </Routes>
    </Router>
  );
}

export default App;
