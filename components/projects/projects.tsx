/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useRef, useState } from "react";
import "./projects.css";
import Image from "next/image";
import Display from "./display";

interface Props {}

function Projects(props: Props) {
  const projects = [
    {
      index: 1,
      imageLink: "/projects/shubhUI.png",
      projectName: "SHUBH.UI",
      shortDes: "A COMPONENT LIBRARY CREATED WITH NEXT.JS, TAILWINDCSS AND GSAP",
      gitLink: "https://github.com/ShubhMehrotra19/Shubh.UI",
      deployedLink: "https://shubh-ui.vercel.app/",
    },
    {
      index: 2,
      imageLink: "/projects/devlink.png",
      projectName: "DEVLINK",
      shortDes: "A DIGITAL CARD FOR DEVELOPERS TO CONNECT IN A FLASH!",
      gitLink: "https://github.com/ShubhMehrotra19/DevLink-UI",
      deployedLink: "https://devlink-rho.vercel.app/",
    },
    {
      index: 3,
      imageLink: "/projects/cuesource.png",
      projectName: "CUESOURCE",
      shortDes: "AN ONLINE PLATFORM FOR DEVELOPERS TO TAKE UP OPEN SOURCED ISSUES AS FREELANCE",
      gitLink: "https://github.com/CueSource-PE2/CueSource-WebApp",
      deployedLink: "https://cuesource.vercel.app/",
    },
    {
      index: 4,
      imageLink: "/projects/chefio.png",
      projectName: "CHEFIO",
      shortDes: "A SOCIAL MEDIA PLATFORM FOR FOODIES",
      gitLink: "https://github.com/ShubhMehrotra19/chefio",
      deployedLink: "https://chefio.vercel.app/",
    },
  ];

  const {} = props;
  const [isHovering, setIsHovering] = useState(false);
  const talkRef = useRef<HTMLDivElement>(null);

  function handleMouseEnter() {
    setIsHovering(true);
  }

  function handleMouseLeave() {
    setIsHovering(false);
  }

  return (
    <section className="mb-32 flex flex-col justify-center items-center mx-14">
      <div className="w-full flex justify-between items-end mb-40">
        <div className="w-full text-left flex flex-col justify-start items-start">
          <p className='text-[80px] font-["Anton"] leading-snug mb-12 w-full'>
            DESIGNING DIGITAL <br /> PRODUCTS WITH EMPHASIS <br /> ON
            <span className="text-[#b7b7b7] mb-8"> VISUAL DESIGN.</span>
          </p>
          <div
            ref={talkRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className='talking px-8 py-4 text-base rounded-full text-white bg-black hover:bg-[#B2D12E] cursor-pointer text-center font-["Open_Sans"] hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out flex justify-center items-center gap-2'
          >
            LET'S TALK
            <Image
              src={
                isHovering ? "/icons/arrow_black.png" : "/icons/arrow_green.png"
              }
              alt=""
              height={30}
              width={30}
            />
          </div>
        </div>
        <div className="text-left text-base font-normal font-['Open_Sans']">
          AS A <span className="text-[#337225] font-bold">UI DESIGNER</span> AND
          A <span className="text-[#337225] font-bold">FRONTEND DEVELOPER</span>
          , MY PROJECTS REFLECT A MAJOR PART OF MY{" "}
          <span className="text-[#337225] font-bold">
            CREATIVE AND DESIGN SKILLS.
          </span>{" "}
          <br />I WORK IN A{" "}
          <span className="text-[#337225] font-bold">SYSTEMATIC</span> PROCEDURE
          TO DELIVER PRODUCTS <br /> STARTING FROM CREATING WIREFRAMES TO
          DESIGNING AND CONVERTING THEM TO A DEPLOYED WEBSITE.
        </div>
      </div>
      <div className="w-full flex justify-start my-12">
        <h2 className="font-['Anton'] text-[60px] pb-1 border-b-[3px] border-black">
          SELECTED WORKS
        </h2>
      </div>
      <div className="mb-32 w-full">
        {projects.map((project, index) => (
          <Display
            key={index}
            imageLink={project.imageLink}
            projectName={project.projectName}
            shortDes={project.shortDes}
            gitLink={project.gitLink}
            deployedLink={project.deployedLink}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
