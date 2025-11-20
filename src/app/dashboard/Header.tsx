import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-4 py-2 border-b border-gray-200 bg-white">
      {/* Left: Logo */}
      <div className="flex items-center">
        <img src="/favicon.png" alt="logo" className="w-10 h-10" />
      </div>

      {/* Center: Navigation */}
      <nav className="flex space-x-6 font-semibold text-gray-800">
        <a href="#" className="hover:text-orange-600">
          FOOTBALL
        </a>
        <a href="#" className="hover:text-orange-600">
          FUTSAL
        </a>
        <a href="#" className="hover:text-orange-600">
          RUNNING
        </a>
        <a href="#" className="hover:text-orange-600">
          LIFESTYLE
        </a>
        <a
          href="#"
          className="text-orange-600 font-bold hover:underline"
          style={{ fontWeight: "700" }}
        >
          #TEAMORTUSEIGHT
        </a>
      </nav>

      {/* Right: Search, language, links, cart, favorite */}
      <div className="flex items-center space-x-4 text-sm text-gray-700">
        {/* Language selector */}
        <div className="flex items-center space-x-1 cursor-pointer hover:text-orange-600">
          <span>en</span>
          <span className="uppercase font-bold">EN</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3 h-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        {/* Links */}
        <a href="#" className="hover:text-orange-600">
          Find Store
        </a>
        <a href="#" className="hover:text-orange-600">
          Join Us
        </a>
        <a href="#" className="hover:text-orange-600">
          Sign In
        </a>

        {/* Cart icon */}
        <button className="hover:text-orange-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
            <circle cx="7" cy="21" r="1" />
            <circle cx="17" cy="21" r="1" />
          </svg>
        </button>

        {/* Favorite icon */}
        <button className="hover:text-orange-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path d="M12 21l-1-1C5 15 2 12 2 8a5 5 0 0110 0 5 5 0 0110 0c0 4-3 7-9 12z" />
          </svg>
        </button>
        
        {/* Search input */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded-full pl-8 pr-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-orange-600"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <circle cx="11" cy="11" r="7" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </div>

        
      </div>
    </header>
  );
};

export default Header;
