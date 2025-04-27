"use client";
import React from "react";
import "./menu.css";
import Link from "next/link";
import LinkMan from "@/components/link-manager";

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const Menu: React.FC<MenuProps> = ({ isOpen, onClose }) => {
  return (
    <div className={`menu ${isOpen ? "open" : ""}`}>
      <div className="bg-blurcircle"></div>

      <h1 className="menu-heading">DISCOVER THE WORLD OF FRONT-END</h1>

      <div className="menu-items">
        <div className="menu-section">
          <div className="menu-section-title">Account</div>

          <div className="menu-section-items">
            <div className="menu-item">
              <Link href="/" onClick={onClose}>
                Profile
              </Link>
            </div>
            <div className="menu-item">
              <Link href="/" onClick={onClose}>
                Settings
              </Link>
            </div>
            <div className="menu-item">
              <Link href="/" onClick={onClose}>
                Notifications
              </Link>
            </div>
            <div className="menu-item">
              <Link href="/" onClick={onClose}>
                Favourites
              </Link>
            </div>
          </div>
        </div>

        <div className="menu-section">
          <div className="menu-section-title">Community</div>

          <div className="menu-section-items">
            <div className="menu-item">
              <Link href={LinkMan.links.forum} onClick={onClose}>
                Forum
              </Link>
            </div>
            <div className="menu-item">
              <Link href={LinkMan.links.blog} onClick={onClose}>
                Blog
              </Link>
            </div>
            <div className="menu-item">
              <Link href={LinkMan.links.discord} onClick={onClose}>
                Discord
              </Link>
            </div>
            <div className="menu-item">
              <Link href={LinkMan.links.xCom} onClick={onClose}>
                X.com
              </Link>
            </div>
          </div>
        </div>
        <div className="menu-section">
          <div className="menu-section-title">Knowledge Hub</div>
          <div className="menu-section-items">
            <div className="menu-item">
              <Link href="/" onClick={onClose}>
                HTML
              </Link>
            </div>
            <div className="menu-item">
              <Link href="/" onClick={onClose}>
                CSS
              </Link>
            </div>
            <div className="menu-item">
              <Link href="/" onClick={onClose}>
                JavaScript
              </Link>
            </div>
            <div className="menu-item">
              <Link href="/" onClick={onClose}>
                View All Courses
              </Link>
            </div>
          </div>
        </div>

        <div className="menu-section">
          <div className="menu-section-title">Tools</div>
          <div className="menu-section-items">
            <div className="menu-item">
              <Link href="/" onClick={onClose}>
                Generators
              </Link>
            </div>
            <div className="menu-item">
              <Link href="/" onClick={onClose}>
                Fonts
              </Link>
            </div>
            <div className="menu-item">
              <Link href="/" onClick={onClose}>
                Icons
              </Link>
            </div>
            <div className="menu-item">
              <Link href="/" onClick={onClose}>
                View All Tools
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
