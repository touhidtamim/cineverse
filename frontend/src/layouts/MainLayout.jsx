import React from "react";
import Navbar from "./../components/navbar/Navbar";
import Footer from "./../components/footer/Footer";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Dynamic component*/}
      <div className="w-11/12 mx-auto min-h-screen">
        <Outlet />
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default MainLayout;
