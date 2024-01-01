import React from "react";
import Sidebar from "../components/sidebar";
import Sidecarddata from "../components/sidecarddata";
import SearchBar from "../components/Searchbar";
import "../styles/explore.css";
import { Routes, Route, Link } from "react-router-dom";
import  Result  from "../pages/searchresult.jsx";
import Policies from "./National Strategies and Policies.jsx";
import Links from "./importanlinks.jsx";

const Explore = () => {
  return (
    <>
      <div className="w-[100%] clear-both h-max">
        <div className="w-[80%] float-left container sidediv">
          <SearchBar />
          <Routes>
            <Route path="/" exact element={<Sidecarddata />} />
            <Route path="/National-strategies-and-policies" element={<Policies />} />
            <Route path="/Strategy-repository" element={<Result/>}/>
            <Route path="/Important-links" element={<Links/>}/>
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