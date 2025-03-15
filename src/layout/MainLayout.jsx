import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <>
    <div className="w-11/12 mx-auto">
      <Navbar />
      <div className="min-h-screen">
        <Outlet />
      </div>
    </div>
      <Footer/>
    </>  
  );
}
