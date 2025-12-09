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
    <div className="w-full flex md:flex-row flex-col justify-center items-center md:mb-0 mb-10 md:px-8 px-4">
      <div
        className={`${anton.className} md:text-[100px] text-[40px] text-white flex justify-start md:pb-24 pb-8 items-center md:w-[40%] w-full leading-tight`}>
        LET'S GET <br /> STARTED.
      </div>
      <div className="flex flex-col justify-start md:mb-28 mb-1 items-start md:gap-5 md:w-[60%] w-full">
        <form ref={form} onSubmit={sendEmail} className="w-full">
          <div
            style={{ letterSpacing: "2px" }}
            className={`${poppins.className} md:text-[30px] text-[18px] md:pt-12 pt-0 font-bold text-white text-left md:px-3 px-0 md:leading-[2.2] leading-[2.5] mb-5`}>
            My name is{" "}
            <input
              required
              name="user_name"
              type="text"
              className="md:text-[25px] text-[16px] pb-1 border-b-2 border-white md:w-[500px] w-full max-w-[280px] md:h-[36px] h-[28px] bg-transparent placeholder:text-white/30 placeholder:text-[15px] placeholder:md:text-[20px] focus:outline-none"
              placeholder="full name"
            />{" "}
            and I <br className="md:hidden block" />
            have a{" "}
            <input
              name="message"
              required
              className="md:text-[25px] text-[16px] pb-1 border-b-2 border-white md:w-[550px] w-full max-w-[280px] md:h-[36px] h-[28px] bg-transparent placeholder:text-white/30 placeholder:text-[15px] placeholder:md:text-[20px] focus:outline-none"
              placeholder="website/full-time job"
            />{" "}
            that <br className="md:hidden block" />
            needs help. You can reach me at, <br className="md:hidden block" />
            <input
              required
              name="user_email"
              type="email"
              className="md:text-[25px] text-[16px] pb-1 border-b-2 border-white md:w-[600px] w-full max-w-[280px] md:h-[36px] h-[28px] bg-transparent placeholder:text-white/30 placeholder:text-[15px] placeholder:md:text-[20px] focus:outline-none"
              placeholder="your email address"
            />{" "}
            to get <br className="md:hidden block" />
            things started.
          </div>
          <button
            type="submit"
            className={`rounded-full md:px-12 px-6 md:py-2 py-2 text-center md:text-base text-sm ${openSans.className} bg-[#b2de21] text-white font-[600] hover:scale-105 active:scale-95 duration-300 ease-in-out transition-transform`}>
            {btnText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Mailing;
