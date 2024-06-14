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
    <div className="w-full flex md:flex-row flex-col justify-center items-center md:mb-0 mb-10">
      <div
        className={`${anton.className} md:text-[100px] text-[50px] text-white flex justify-start md:pb-24 items-center md:w-[40%] w-full leading-tight`}
      >
        LET'S GET <br /> STARTED.
      </div>
      <div className="flex flex-col justify-start md:mb-28 mb-1 md:-mt-0 -mt-6 items-start md:gap-5 md:w-[60%]">
        <form ref={form} onSubmit={sendEmail}>
          <div
            style={{ letterSpacing: "2px" }}
            className={`${poppins.className} md:text-[30px] text-[16px] pt-12 font-bold text-white text-left px-3 leading-[2.2] mb-5`}
          >
            My name is &nbsp;{" "}
            <input
              required
              name="user_name"
              type="text"
              className="md:text-[25px] text-[13px] md:pb-0 pb-1 border-b-2 border-white md:w-[500px] w-[250px] md:h-[36px] h-[18px] bg-transparent placeholder:text-white/30 focus:outline-none"
              placeholder="    full name"
            />{" "}
            &nbsp; and I <br className="md:block hidden" />
            have a &nbsp;{" "}
            <input
              name="message"
              required
              className="md:text-[25px] text-[13px] md:pb-0 pb-1 border-b-2 border-white md:w-[550px] w-[300px] md:h-[36px] h-[18px] bg-transparent placeholder:text-white/30 focus:outline-none"
              placeholder="    website/full-time job etc."
            />
            &nbsp; that <br className="md:block hidden" />
            needs help. You can reach me at, <br className="md:block hidden" /> &nbsp;{" "}
            <input
              required
              name="user_email"
              type="text"
              className="md:text-[25px] text-[13px] md:pb-0 pb-1 border-b-2 border-white md:w-[600px] w-[300px] md:h-[36px] h-[18px] bg-transparent placeholder:text-white/30 focus:outline-none"
              placeholder="    your email address"
            />{" "}
            &nbsp; to get <br className="md:block hidden" /> things started.
          </div>
          <button
            type="submit"
            className={`rounded-full md:px-12 px-5 md:text-base py-2 text-center text-sm ${openSans.className} bg-[#b2de21] text-white font-[600] hover:scale-105 active:scale-95 duration-300 ease-in-out`}
          >
            {btnText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Mailing;
