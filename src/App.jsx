import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./routes/homePage/homePage";
import MortgageCal from "./routes/mortgageCalculator/mortgageCal";
import "./layout.scss";


function App() {
  return (
    <Router>
      <div className="layout">
        <div className="navbar">
          <Navbar />
        </div>

        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/mortgage-calculator" element={<MortgageCal />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
