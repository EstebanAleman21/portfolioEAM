"use client";
import React from "react";
import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <h1
          className="text-2xl text-blue-50"
          style={{ fontFamily: "'Manrope'" }}
        >
          Esteban Aleman M.
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
