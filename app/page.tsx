'use client';
// Import React and other necessary modules
import React, { useState } from "react";
import Modal from './modal.jsx';

export default function Home() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [newDate, setNewDate] = useState("");
  const [newContent, setNewContent] = useState("");
  const [blogEntries, setBlogEntries] = useState([
    {
      date: "11 - 18 - 2023",
      content: "Continued working on dev blog website. Learned how to create sticky footers that stay at the bottom of pages. Studied more Tailwind CSS docs to easier implement into future projects. Created a modal that allows us to dynamically add blogs as needed."
    },
    {
      date: "11 - 16 - 2023",
      content: "Created a dev blog today and worked on several W3 school problems as well as attempted and solved a few JS/React questions via BFE website and leetcode.com."
    },
    // Add more blog entries as needed
  ]);

  const openModal = () => setModalOpen(true);
  const closeModal = () => {
    setModalOpen(false);
    setNewDate("");
    setNewContent("");
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const addBlogEntry = () => {
    if (newDate && newContent) {
      setBlogEntries([{ date: newDate, content: newContent }, ...blogEntries]);
      closeModal();
    } else {
      alert("Please provide both date and content for the new entry.");
    }
  };

  return (
    <div>
      <button onClick={openModal} className="hover:cursor-pointer hover:bg-slate-400 ml-[95vw] bg-white w-6 h-7 z-1 absolute text-black text-center">
        +
      </button>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h1 className="text-xl text-left">Add a new blog</h1>
        <input
          className="m-1 text-black text-center"
          type="text"
          placeholder="date"
          value={newDate}
          onChange={(e) => setNewDate(e.target.value)}
        /><br />
        <input
          className="m-1 text-black p-[100px]"
          type="text"
          placeholder="type something..."
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
        />
        <button className="m-1 p-2 bg-[#679AF2] flex" onClick={addBlogEntry}>Add Entry</button>
      </Modal>

      <div className="min-h-screen">
        <div onClick={toggleDropdown} className="navbar-menu">
          <div className="one"></div>
          <div className="two"></div>
          <div className="three"></div>
        </div>
        {isDropdownOpen && (
          <div className="dropdown-content">
            <div className="dropdown-item"><a href="https://skyewasthelimit.netlify.app/" target="_blank">Portfolio</a></div>
            <div className="dropdown-item"><a href="https://www.twitch.tv/skyewasthelimit" target="_blank">Twitch</a></div>
            <div className="dropdown-item"><a href="https://github.com/skyewasthelimit" target="_blank">GitHub</a></div>
            <div className="dropdown-item"><a href="https://linktr.ee/skyewasthelimit" target="_blank">LinkTree</a></div>
            <div className="dropdown-item"><a href="https://www.freecodecamp.org/skyewasthelimit" target="_blank">FreeCodeCamp</a></div>
            <div className="dropdown-item"><a href="https://leetcode.com/skyewasthelimit/" target="_blank">Leetcode</a></div>
          </div>
        )}
        <div className="mb-2 text-center flex-auto text-4xl font-semibold border-b border-[#C3A3D4]">Skye's Dev Blog </div>
        {/* Render existing and new blog entries */}
        {blogEntries.map((entry, index) => (
          <div key={index}>
            <div className="text-xl flex-col content-center mb-auto text-center pt-5">
              {entry.date}
            </div>
            <div className="border border-[#C3A3D4] pt-2 flex-col content-center mb-auto text-center text-[#AABDFC]">
              {entry.content}
            </div>
          </div>
        ))}
      </div>
      <div className="w-full h-20 bg-[#0E1F42] flex-grow-1 font-sans text-[#AABDFC]">
        <p className="mx-3 p-1">
          Skye McLean <br />
          Victoria, BC <br />
          Contact me @ skyemclean87@gmail.com
        </p>
      </div>
    </div>
  );
}
