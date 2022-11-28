import React from "react";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div className="bg-slate-400 w-full h-screen">
      <Navbar />
      <div className="w-full h-full overflow-auto">{children}</div>
    </div>
  );
}

export default Layout;
