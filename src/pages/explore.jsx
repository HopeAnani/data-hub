import React from "react";
import Sidebar from "../components/sidebar";
import Sidecarddata from "../components/sidecarddata";
import SearchBar from "../components/Searchbar";
import FlipBook from "../components/FlipBook";
import "../styles/explore.css";
import { Routes, Route } from "react-router-dom";
import Steps from "../components/steps";
import  Result  from "../pages/searchresult.jsx";

const Explore = () => {
  return (
    <>
      <div className="w-[100%] clear-both h-max">
        <div className="w-[80%] float-left container sidediv">
          <SearchBar />
          <Routes>
            <Route path="/" exact element={<Sidecarddata />} />
            <Route path="/regulatory" element={<Steps />} />
            <Route path="/Strategy-repository" element={<Result/>}/>
          </Routes>
          {/* <FlipBook/> */}
        </div>
        <div className="w-[20%] float-right sidenav">
          <Sidebar />
        </div>
      </div>
    </>
  );
};

export default Explore;