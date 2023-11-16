'use client';
import React, { useState } from "react";


export default function Home() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <div onClick={toggleDropdown} className="navbar-menu">
            <div className="one"></div>
            <div className="two"></div>
            <div className="three"></div>
      </div>
      {isDropdownOpen && (
        <div className="dropdown-content">
          {/* Add your dropdown menu items here */}
          <div className="dropdown-item">Portfolio</div>
          <div className="dropdown-item">Twitch</div>
          <div className="dropdown-item">GitHub</div>
        </div>
      )}
      <div className="mb-2 text-center flex-auto text-4xl font-semibold border-b border-[#C3A3D4]">Skye's Dev Blog </div>
      <div className="text-xl flex-col content-center mb-auto text-center pt-5">
        11 - 16 - 2023
      </div>
      <div className="border border-[#C3A3D4] pt-2 flex-col content-center mb-auto text-center">
        Created a dev blog today and worked on several W3 school problems as well as attempted 
        and solved a few JS/React questions via BFE website and leetcode.com.
      </div>
    </div>
  )
}