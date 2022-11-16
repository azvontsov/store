import React from "react";
import Head from "next/head";
import NavBar from "./NavBar";
// import FooterBanner from "./FooterBanner";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>AZ Store</title>
      </Head>

      <main className="main-container">
        <NavBar />
        {children}
        <Footer />
      </main>
    </div>
  );
};

export default Layout;
