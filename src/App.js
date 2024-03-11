import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/home";
import Explore from "./pages/explore";
import { Routes, Route, useLocation } from "react-router-dom";
import Result from "./pages/searchresult";
import { NextUIProvider } from "@nextui-org/react";
import ScrollButton from "./components/ToTop";

const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return (
    <NextUIProvider>
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/explore/*" element={<Explore />} />
        <Route path="/searchresult" element={<Result />} />
      </Routes>
      </div>
      <Footer />
      <ScrollButton />
    </div>
    </NextUIProvider>
  );
};

export default App;