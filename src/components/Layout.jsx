import React from "react";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div className=" bg-abuTua w-full h-screen overflow-auto">
      <div>
        <Navbar />
      </div>

      <div className="w-full h-full bg-abuTua p-1 ">{children}</div>
    </div>
  );
}

export default Layout;
