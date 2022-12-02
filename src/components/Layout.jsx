import React from "react";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Layout({ children }) {
  const [title, setTitle] = useState();
  const navigate = useNavigate();

  function handleSubmit(event) {
    navigate(`/search/${title}`, {
      state: {
        title: title,
      },
    });
    event.preventDefault();
  }

  return (
    <div className=" dark:bg-blackTwo bg-abuTua w-full h-screen overflow-auto">
      <div>
        <Navbar onChange={(e) => setTitle(e.target.value)} onSubmit={() => handleSubmit()} />
      </div>

      <div className="w-full h-full bg-abuTua p-1 ">{children}</div>
    </div>
  );
}

export default Layout;
