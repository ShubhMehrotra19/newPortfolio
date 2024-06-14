/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Anton, Poppins, Open_Sans } from "next/font/google";

export const anton = Anton({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin-ext", "latin", "vietnamese"],
  display: "swap",
});

export const openSans = Open_Sans({
  weight: ["300", "600", "800"],
  style: ["normal"],
  subsets: ["latin-ext", "latin", "vietnamese"],
  display: "swap",
});

export const poppins = Poppins({
  weight: ["300", "400", "600", "800"],
  style: ["normal"],
  subsets: ["latin-ext", "latin"],
  display: "swap",
});

interface Props {}

function Mailing(props: Props) {
  const {} = props;

  const form = useRef<HTMLFormElement>(null);
  const [btnText, setBtnText] = React.useState("Submit");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) {
      console.error("Form element not found");
      return;
    }

    emailjs
      .sendForm("service_x686oab", "template_vcpa47h", form.current, {
        publicKey: "5AL_jHrKvAJ0hyi0J",
      })
      .then(
        () => {
          setBtnText("Sent message! 😊");
        },
        (error) => {
            setBtnText("Failed! ☹️");
        }
      );
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div
        className={`${anton.className} text-[100px] text-white flex justify-start pb-24 items-center w-[40%] leading-tight`}
      >
        LET'S GET <br /> STARTED.
      </div>
      <div className="flex flex-col justify-start mb-28 items-start gap-5 w-[60%]">
        <form ref={form} onSubmit={sendEmail}>
          <div
            style={{ letterSpacing: "2px" }}
            className={`${poppins.className} text-[30px] pt-12 font-bold text-white text-left px-3 leading-[2.2] mb-5`}
          >
            My name is &nbsp;{" "}
            <input
              required
              name="user_name"
              type="text"
              className="text-[25px] border-b-2 border-white w-[500px] h-[36px] bg-transparent placeholder:text-white/30 focus:outline-none"
              placeholder="    full name"
            />{" "}
            &nbsp; and I <br />
            have a &nbsp;{" "}
            <input
              name="message"
              required
              className="text-[25px] border-b-2 border-white w-[550px] h-[36px] bg-transparent placeholder:text-white/30 focus:outline-none"
              placeholder="    website/full-time job etc."
            />
            &nbsp; that <br />
            needs help. You can reach me at, <br /> &nbsp;{" "}
            <input
              required
              name="user_email"
              type="text"
              className="text-[25px] border-b-2 border-white w-[600px] h-[36px] bg-transparent placeholder:text-white/30 focus:outline-none"
              placeholder="    your email address"
            />{" "}
            &nbsp; to get <br /> things started.
          </div>
          <button
            type="submit"
            className={`rounded-full px-12 text-xl py-2 text-center ${openSans.className} bg-[#b2de21] text-white font-[600] hover:scale-105 active:scale-95 duration-300 ease-in-out`}
          >
            {btnText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Mailing;
