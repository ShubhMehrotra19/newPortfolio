/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Display from "./display";
import { Anton, Open_Sans } from "next/font/google";

export const anton = Anton({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin-ext", "latin", "vietnamese"],
  display: "swap",
});

export const openSans = Open_Sans({
  weight: ["300", "800"],
  style: ["normal"],
  subsets: ["latin-ext", "latin", "vietnamese"],
  display: "swap",
});

interface Props {
  workRef: React.RefObject<HTMLElement>;
}

function Projects(props: Props) {
  const projects = [
    {
      index: 1,
      imageLink: "/projects/shubhUI.png",
      projectName: "SHUBH.UI",
      shortDes:
        "A COMPONENT LIBRARY CREATED WITH NEXT.JS, TAILWINDCSS AND GSAP",
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
      shortDes:
        "AN ONLINE PLATFORM FOR DEVELOPERS TO TAKE UP OPEN SOURCED ISSUES AS FREELANCE",
      gitLink: "https://github.com/CueSource-PE2/CueSource-WebApp",
      deployedLink: "https://cue-source-website.vercel.app/",
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

  const { workRef } = props;
  const [isHovering, setIsHovering] = useState(false);
  const talkRef = useRef<HTMLDivElement>(null);

  function handleMouseEnter() {
    setIsHovering(true);
  }

  function handleMouseLeave() {
    setIsHovering(false);
  }

  return (
    <section ref={workRef} className="mb-20 flex flex-col justify-center items-center mx-14">
      <div className="w-full flex justify-between items-end mb-40">
        <div className="w-full text-left flex flex-col justify-start items-start">
          <p
            className={`text-[80px] ${anton.className} leading-snug mb-12 w-full`}
          >
            DESIGNING DIGITAL <br /> PRODUCTS WITH EMPHASIS <br /> ON
            <span className="text-[#b7b7b7] mb-8"> VISUAL DESIGN.</span>
          </p>
          <div
            ref={talkRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`talking px-8 py-4 text-base rounded-full text-white bg-black hover:bg-[#B2D12E] text-center ${openSans.className} hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out flex justify-center items-center gap-2`}
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
        <div className={`text-left text-base font-normal ${openSans.className}`}>
          AS A <span className="font-bold">WEB DEVELOPER</span> AND
          A <span className="font-bold">UI DESIGNER</span>
          , MY PROJECTS REFLECT A MAJOR PART OF MY{" "}
          <span className="font-bold">
            CREATIVE AND DESIGN SKILLS.
          </span>{" "}
          <br />I WORK IN A{" "}
          <span className="font-bold">SYSTEMATIC PROCEDURE </span>
          TO DELIVER PRODUCTS <br /> STARTING FROM CREATING <span className="font-bold">WIREFRAMES</span> TO
          <span className="font-bold">DESIGNING</span> AND CONVERTING THEM TO A <span className="font-bold">DEPLOYED WEBSITE</span>.
        </div>
      </div>
      <div className="w-full flex justify-start my-12">
        <h2 className={`${anton.className} text-[60px] pb-1 border-b-[3px] border-black`}>
          SELECTED WORKS
        </h2>
      </div>
      <div className="w-full">
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
