import { useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/all";
import PropTypes from "prop-types";

export default function Singlevalue({details,title,icon}) {
  const [expanded, setExpanded] = useState(false);
  function toggleExpanded() {
    setExpanded(!expanded);
  }

  return (
    <div className="flex p-2 rounded flex-row  border-gray-300/20 border-[3px]">
      <div className="basis-1/12 relative">
        <div className="h-8 w-8 rounded-md bg-gray-300/40 border">
          {icon}
        </div>{" "}
      </div>
      <div className="basis-11/12">
        <div>
          <div className="text-left font-semibold3 text-lightishgpurple  text-base ml-2 relative">
            <p onClick={toggleExpanded} className="mt-1 select-none">{title}</p>{" "}
            <span className="absolute top-1 right-1">
              {expanded ? (
                <div className="h-5 w-5 justify-center items-center  rounded-md bg-gray-300/40 border">
                  <AiFillCaretUp
                    onClick={toggleExpanded}
                    className="inline mx-[2px] text-nav_purple"
                  />
                </div>
              ) : (
                <div className="h-5 w-5 flex justify-center items-center  rounded-md bg-gray-300/40 border">
                  <AiFillCaretDown
                    onClick={toggleExpanded}
                    className=" text-nav_purple"
                  />
                </div>
              )}
            </span>
          </div>
        </div>
        {expanded && (
      <div className="relative">
                <div className="bg-slate-700/30 inset-11 blur-3xl absolute"></div>
              <p className="text-sm md:text-sm text-left mt-4 mb-3 ml-4 mr-8 text-gray-500/50 ">
                {details}
              
              </p>
      </div>
        )}
      </div>
    </div>
  );
}

Singlevalue.propTypes={
    details: PropTypes.string,
    title: PropTypes.string,
    icon: PropTypes.element
}
