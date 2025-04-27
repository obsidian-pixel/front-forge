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

        <div className="hero-sub-section">
          <p className="hero-subtitle">
            Create a free account and become a community member or contribute to
            the fastest growing developer community the world has ever seen
            before.
          </p>

          <div className="hero-cta">
            <Link href="/" className="btn-cta btn-primary">
              CREATE ACCOUNT
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
