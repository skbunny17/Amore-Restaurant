"use client";

import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="nav">
      <h1 className="logo">Amore</h1>

      <ul className="nav-links">
        {/* Home */}
        <li>
          <Link href="/" className="nav-link">
            Home
          </Link>
        </li>

        {/* Menu navigates to /menu page */}
        <li>
          <Link href="/menu" className="nav-link">
            Menu
          </Link>
        </li>

        {/* Contact */}
        <li>
          <Link href="/contact" className="nav-link">
            Contact
          </Link>
        </li>

        {/* Locations dropdown */}
        <li className="dropdown">
          <span className="dropdownTitle">Locations</span>
          <ul className="dropdownMenu">
            <li>
              <Link href="/locations/sydney-cbd" className="dropdownItem">
                Sydney CBD
              </Link>
            </li>
            <li>
              <Link href="/locations/parramatta" className="dropdownItem">
                Parramatta
              </Link>
            </li>
            <li>
              <Link href="/locations/bondi" className="dropdownItem">
                Bondi
              </Link>
            </li>
            <li>
              <Link href="/locations/liverpool" className="dropdownItem">
                Liverpool
              </Link>
            </li>
            <li>
              <Link href="/locations/manly" className="dropdownItem">
                Manly
              </Link>
            </li>
            <li>
              <Link href="/locations/castle-hill" className="dropdownItem">
                Castle Hill
              </Link>
            </li>
            <li>
              <Link href="/locations/wetherill-park" className="dropdownItem">
                Wetherill Park
              </Link>
            </li>
            <li>
              <Link href="/locations/bankstown" className="dropdownItem">
                Bankstown
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
