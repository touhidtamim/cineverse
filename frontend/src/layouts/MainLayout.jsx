import React from "react";
import Navbar from "./../components/navbar/Navbar";
import Footer from "./../components/footer/Footer";
import { Outlet, useNavigation } from "react-router";
import { Spinner } from "./../components/shared/Spinner";

const MainLayout = () => {
  const navigation = useNavigation();

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {navigation.state === "loading" && <Spinner />}

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
