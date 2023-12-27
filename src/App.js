import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/home";
import About from "./pages/about";
import Explore from "./pages/explore";
import { Routes, Route, useLocation } from "react-router-dom";
import Result from "./pages/searchresult";

const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return (
    <div className="block">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/explore/*" element={<Explore />} />
        <Route path="/about" element={<About />} />
        <Route path="/searchresult" element={<Result />} />
        
      </Routes>
      <Footer />
    </div>
  );
};

export default App;