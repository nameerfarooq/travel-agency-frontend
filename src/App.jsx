import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Package from "./pages/Package";
import Login from "./pages/Login";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="w-full min-h-[69vh]">
          <Routes>
            <Route path="/*" element={<LandingPage />} />
            <Route path="/package/:id" element={<Package />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
