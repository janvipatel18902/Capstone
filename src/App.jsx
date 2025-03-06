import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./routes/homePage/HomePage";
import MortgageCal from "./routes/mortgageCalculator/mortgageCal";
import ListPage from "./routes/listPage/ListPage";
import Login from "./routes/login/Login";
import SinglePage from "./routes/singlePage/singlePage";
import SignInPage from "./routes/SignInPage/SignInPage";
import SignUpPage from "./routes/SignUpPage/SignUpPage";
import HomeBuyerGuidance from "./routes/guidance/guidance"; 
import Footer from "./components/footer/Footer"; 
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
            <Route path="/guidance" element={<HomeBuyerGuidance />} /> 
            <Route path="/listPage" element={<ListPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/singlePage" element={<SinglePage />} />
            <Route path="/SignInPage" element={<SignInPage />} />
            <Route path="/SignUpPage" element={<SignUpPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
