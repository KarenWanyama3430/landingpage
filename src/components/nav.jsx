import { MdOutlineClose, GiHamburgerMenu } from "react-icons/all";
import { useState } from "react";

export default function Navbar() {
 const [visibble, setVisibility]= useState();
const toggleVisibility=()=>{
  setVisibility(!visibble)
}

  return (
    <>
      <div className="hidden md:grid xsm:mx-0 w-screen  md:text-center text-xs xl:text-sm gap-2 grid-rows-4 md:grid-rows-none md:grid-cols-12 p-3 font-bold bg-black text-gray-100/70 ">
        <div className="md:col-span-4 text-xl">
          <div className="relative w-fit">
            <p className="z-20 ml-10 relative">
              <img
                src="blueorb.svg"
                className="h-4 -z-10 absolute text-blue-600 -right-2 "
              />
              IREAN
            </p>
          </div>
        </div>

        <div className="col-span-6  grid md:grid-flow-col grid-flow-row ">
          <p className="md:col-span-2">Properties</p>
          <p className="md:col-span-2 ">Service</p>
          <p className="col-span-1">Product</p>
          <p className="md:text-center md:col-span-2">About Us</p>
          <p>Login</p>
          <p>Sign Up</p>
        </div>

        <span className="md:col-span-1">
          <button className="bg-nav_purple h-9 w-fit p-2 rounded-md">
            Contact
          </button>
        </span>

      </div>

      {/* mobile */}

      {visibble ? (
        <div className="md:hidden grid mx-10  transition-opacity  text-xs gap-2 grid-flow-row  p-3 font-bold bg-black text-gray-100/70 ">
          <MdOutlineClose
            onClick={toggleVisibility}
            className="w-8 h-6 text-white left-1 absolute"
          />

          <div className="md:col-span-4  text-xl">
            <div className="relative border-b-2 divide-y-2 w-fit">
              <p className="z-20  relative">
                <img
                  src="blueorb.svg"
                  className="h-4 -z-10 absolute text-blue-600 -right-2 "
                />
                Homyz
              </p>
            </div>
          </div>
          <div className="col-span-6 grid divide-y-2 w-fit md:grid-flow-col grid-flow-row  gap-1">
            <p className="md:col-span-2">Properties</p>
            <p className="md:col-span-2 ">Service</p>
            <p className="col-span-1">Product</p>
            <p className="w-fit">About Us</p>
            <span>Contact</span>
            <span className="border border-nav_purple "></span>
          </div>
        </div>
      ) : (
        <div>
          <GiHamburgerMenu
            onClick={toggleVisibility}
            className="text-white h-12 w-7 md:hidden my mx-2"
          />
        </div>
      )}
    </>
  );
}
