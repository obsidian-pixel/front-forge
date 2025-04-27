import "./home.css";
import React from "react";
import HeroSection from "../components/heroSection/heroSection";
import Link from "next/link";
import LinkMan from "@/components/link-manager";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="bg-container grid grid-cols-2">
        <div className="bg-ball bg-orange"> </div>
        <div className="bg-ball bg-blue"></div>
      </div>
      <main>
        <div className="section-container">
          <HeroSection />

          <div className="scroll-tooltip ">
            {"Not ready to full commit? Scroll down to learn more :)"}
          </div>
        </div>
        <section className="content-section community-section">
          <h1 className="cs-title">Forge Connections - Build Futures</h1>
          <p className="cs-description">
            {
              "Join our collaborative community to learn, share, and grow with other developers and designers."
            }
          </p>
          <div className="card-container">
            <div className="social-card x-card">
              <div className="social-banner">
                <Image
                  alt="x logo"
                  width={100}
                  height={100}
                  src="https://raw.githubusercontent.com/obsidian-pixel/front-forge/main/public/x-com-logo.avif"
                ></Image>
              </div>
              <p>12k Members</p>
              <p>3.2k Online</p>
              <Link className="social-card-btn" href={LinkMan.links.xCom}>
                FOLLOW US ON X.COM
              </Link>
            </div>
            <div className="social-card discord-card">
              <div className="social-banner">
                <Image
                  alt="discord logo"
                  width={100}
                  height={100}
                  src="https://raw.githubusercontent.com/obsidian-pixel/front-forge/main/public/discord-logo.png"
                ></Image>
              </div>
              <p>12k Members</p>
              <p>3.2k Online</p>
              <Link className="social-card-btn" href={LinkMan.links.discord}>
                JOIN US ON DISCORD
              </Link>
            </div>
            <div className="social-card forum-card">
              <div className="social-banner">
                <Image
                  alt="forum logo"
                  width={100}
                  height={100}
                  src="https://raw.githubusercontent.com/obsidian-pixel/front-forge/main/public/forum-icon.png"
                ></Image>
              </div>
              <p>12k Members</p>
              <p>3.2k Online</p>
              <Link className="social-card-btn" href={LinkMan.links.forum}>
                FIND HELP IN FORUMS
              </Link>
            </div>
            <div className="social-card blog-card">
              <div className="social-banner">
                <Image
                  alt="blog logo"
                  width={100}
                  height={100}
                  src="https://raw.githubusercontent.com/obsidian-pixel/front-forge/main/public/Blog-icon.png"
                ></Image>
              </div>
              <p>12k Members</p>
              <p>3.2k Online</p>
              <Link className="social-card-btn" href={LinkMan.links.blog}>
                LATEST BLOG POSTS
              </Link>
            </div>
            <div className="social-section-decor">
              Still not convinced? We have tons of awesome tools and features.
            </div>
          </div>
        </section>
        <section className="content-section features-section">
          <h1 className="cs-title">{"The Toolbox You've Been Waiting For"}</h1>
          <p className="cs-description">
            {
              "From code generators to design frameworks, discover the tools that simplify development and amplify creativity."
            }
          </p>
        </section>
        <section className="content-section">
          This is the secondary section
        </section>
        <section className="content-section">
          This is the supplimentary section
        </section>
      </main>
    </>
  );
}
