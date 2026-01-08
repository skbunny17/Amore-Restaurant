"use client";

import React, { useState } from "react";

export default function Navbar() {
  // TypeScript knows this is boolean
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="nav">
      <h1 className="logo">Amore</h1>

      <ul className="nav-links">
        <li>
          <a href="/">Home</a>
        </li>

        {/* Clickable Menu */}
        <li className="dropdown">
          <span
            className="dropdownTitle"
            onClick={toggleMenu}
            style={{ cursor: "pointer" }}
          >
            Menu
          </span>

          {menuOpen && (
            <ul className="dropdownMenu">
              <li>
                <a href="/menu/lunch" className="dropdownItem">
                  Lunch Specials
                </a>
              </li>
              <li>
                <a href="/menu/dinner" className="dropdownItem">
                  Dinner
                </a>
              </li>
              <li>
                <a href="/menu/desserts" className="dropdownItem">
                  Desserts
                </a>
              </li>
               <li>
                <a href="/menu/drinks" className="dropdownItem">
                  Drinks
                </a>
              </li>
            </ul>
          )}
        </li>

        <li>
          <a href="/contact">Contact</a>
        </li>

        {/* Hoverable Locations */}
        <li className="dropdown">
          <span className="dropdownTitle">Locations</span>
          <ul className="dropdownMenu">
            <li>
              <a href="/locations/sydney-cbd" className="dropdownItem">
                Sydney CBD
              </a>
            </li>
            <li>
              <a href="/locations/parramatta" className="dropdownItem">
                Parramatta
              </a>
            </li>
            <li>
              <a href="/locations/bondi" className="dropdownItem">
                Bondi
              </a>
            </li>
             <li>
              <a href="/locations/bondi" className="dropdownItem">
                Liverpool
              </a>
            </li>
             <li>
              <a href="/locations/bondi" className="dropdownItem">
                Manly
              </a>
            </li>
             <li>
              <a href="/locations/bondi" className="dropdownItem">
                Castle Hill
              </a>
            </li>
             <li>
              <a href="/locations/bondi" className="dropdownItem">
                Wetherill Park
              </a>
            </li>
             <li>
              <a href="/locations/bondi" className="dropdownItem">
                Bankstown
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
