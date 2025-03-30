"use client";

import React, { useState } from "react";
import Link from "next/link";
import "./navbar.css";
import Image from "next/image";
import Menu from "../menu/menu"; // Import the Menu component
import LinkMan from "@/components/link-manager";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <Link href="/">
            <Image
              src="./logo.png"
              alt="Logo"
              width={50}
              height={50}
              overrideSrc="./logo.png"
            />
            FRONT FORGE
          </Link>
        </div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link href={LinkMan.links.xCom} className="nav-link">
              X.COM
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4 nav-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </Link>
          </li>
          <li className="nav-item">
            <Link href={LinkMan.links.discord} className="nav-link">
              DISCORD
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4  nav-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </Link>
          </li>
        </ul>
        <div className="navbar-menu">
          <div className="login-item">
            <Link href="/">Log In / Sign Up</Link>
          </div>
          <button
            className={`menu-btn ${
              isMenuOpen ? "menu-close-btn" : "menu-open-btn"
            }`}
            onClick={toggleMenu}
          >
            {isMenuOpen ? "CLOSE" : "MENU"}
            <span className="menu-icon"></span>
          </button>
        </div>
      </nav>
      <Menu isOpen={isMenuOpen} onClose={toggleMenu} />
    </>
  );
};

export default Navbar;
