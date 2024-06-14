/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import Mailing from "./mailing";

interface Props {}

function Page(props: Props) {
  const {} = props;

  return (
    <section
      style={{ cursor: 'url("/icons/cursorWhite.png"), auto' }}
      className="h-screen w-screen bg-black"
    >
      <div className="flex flex-col mx-14">
        <Navbar />
        <Mailing />
      </div>
      <Footer />
    </section>
  );
}

export default Page;
