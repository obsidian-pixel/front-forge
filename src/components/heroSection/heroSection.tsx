"use client";
import React from "react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <>
      <section className="hero-section">
        <h1 className="hero-title text-center">
          Forge Your Path in Front-End Development
        </h1>

        <svg
          className="hero-abstract"
          width="100%"
          height="100%"
          viewBox="0 0 100% 100%"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.5"
            y="0.5"
            width="100%"
            height="100%"
            rx="19.5"
            stroke="url(#paint0_linear_2_56)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2_56"
              x1="0"
              y1="0"
              x2="771.375"
              y2="840.482"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.3" stopColor="white" stopOpacity="0" />
              <stop offset="1" stopColor="#999999" />
            </linearGradient>
          </defs>
        </svg>
        <div className="hero-sub-section">
          <p className="hero-subtitle">
            Create a free account and become a community member or contribute to
            the fastest growing developer community the world has ever seen
            before.
          </p>

          <div className="hero-cta">
            <Link href="/" className="btn-cta btn-primary">
              CREATOR PATH
            </Link>
            <Link href="/" className="btn-cta btn-secondary">
              MEMBER PATH
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
