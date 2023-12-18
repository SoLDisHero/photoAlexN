// import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "./home.scss";
import React from 'react';
import "animate.css";

function Home() {
  return (
    <div className="home-page">
        <div className="navbar animate__animated animate__bounceInLeft animate__delay-1s">
        <Sidebar/>
        </div>
        <div className="container">
          {/* <h2 className="content">There is a content here</h2> */}
          {/* <Outlet/> it suppost to get all the content in outlet */}
        </div>
    </div>
  )
}

export default Home