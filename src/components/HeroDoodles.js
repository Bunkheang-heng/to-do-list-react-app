import React from "react";

import calendar from "../assets/image/doodles/calendar.jpg";
import clipboard from "../assets/image/doodles/clipboard.jpg";
import hourglass from "../assets/image/doodles/hourglass.jpg";
import plan from "../assets/image/doodles/plan.jpg";
import dontForget from "../assets/image/doodles/dont-forget.jpg";
import done from "../assets/image/doodles/done.png"; 

export default function HeroDoodles() {
  return (
    <>
      {/* top-left clipboard */}
      <img
        src={clipboard}
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-6 left-4 sm:top-8 sm:left-6 md:top-10 md:left-8 w-[160px] sm:w-[190px] md:w-[210px] rotate-[-12deg] opacity-90 drop-shadow"
      />

      {/* top-right hourglass */}
      <img
        src={hourglass}
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-6 right-4 sm:top-8 sm:right-6 md:top-10 md:right-8 w-[110px] sm:w-[130px] md:w-[150px] rotate-[15deg] opacity-90 drop-shadow"
      />

      {/* mid-left hourglass (faded) */}
      <img
        src={hourglass}
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-[46%] left-6 w-[130px] sm:w-[150px] rotate-[-8deg] opacity-80 drop-shadow hidden md:block"
      />

      {/* mid-right "Done!" sticker */}
      <img
        src={done}
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-[36%] right-8 w-[160px] sm:w-[180px] rotate-[8deg] opacity-90 drop-shadow hidden md:block"
        />

      {/* bottom-left calendar */}
      <img
        src={calendar}
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute -bottom-4 -left-2 w-[170px] sm:w-[200px] rotate-[-10deg] opacity-90 drop-shadow"
      />

      {/* bottom-center don't-forget tag */}
      <img
        src={dontForget}
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute -bottom-2 left-1/2 -translate-x-1/2 w-[140px] sm:w-[160px] rotate-[-8deg] opacity-95 drop-shadow"
      />

      {/* bottom-right plan sheet */}
      <img
        src={plan}
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute -bottom-6 right-8 w-44 sm:w-52 rotate-12 opacity-90 drop-shadow"
      />
    </>
  );
}
