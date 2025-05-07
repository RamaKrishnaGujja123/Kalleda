import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main style={{ paddingBottom: "60px" }}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
