import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { AiFillCaretDown, AiFillCaretUp, BsShieldFillX } from "react-icons/all";

export default function Contact({ details, title, children ,number,action}) {
  const [expanded, setExpanded] = useState(false);
  function toggleExpanded() {
    setExpanded(!expanded);
  }

  return (
    <div className="border-gray-300/20 p-2 pb-3 rounded-md shadow-sm border-[3px]">
      <div className="flex p-2 rounded flex-row  ">
        <div className="basis-1/12 relative">
          <div className="h-8 w-8 rounded-md bg-gray-300/40 border">
            {children}
          </div>{" "}
        </div>
        <div className="basis-11/12">
          <div>
            <div className="text-left  text-lightishgpurple  text-sm ml-2 relative">
              <p
                onClick={toggleExpanded}
                className="mt-1 font-bold select-none"
              >
                {title}
              </p>
              <p className=" text-[.6rem]">{number}</p>
            </div>
          </div>
        </div>
      </div>
      <button className="text-nav_purple font-semibold mx-[5%] bg-gray-500/20 rounded text-[.6rem] h-9 w-[90%]">
        {action}
      </button>
    </div>
  );
}
