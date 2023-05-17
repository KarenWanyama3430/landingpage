import Search from "./search";
import { useState, useEffect, useRef } from "react";

export default function Hero() {
  // This ref is connected to the list
  const rightGridRef = useRef();

  // The size of the list
  // It will be updated later
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();

  const getListSize = () => {
    const newWidth = rightGridRef.current.clientWidth;
    setWidth(newWidth);

    const newHeight = rightGridRef.current.clientHeight;
    setHeight(newHeight);
  };



  useEffect(() => {
    window.addEventListener("resize", getListSize);
  }, []);

  return (
      <section className="grid  text-center md:text-left bg-black text-white gap-2 relative grid-row md:grid-cols-2   xsm:px-[10%]">
        <div className=" h-fit z-20">
          <div className="md:mt-[30%] lg:mt-[40%] xl:mt-[50%]">
            <h1 className="lg:text-5xl w-fit mx-auto md:mx-0 relative text-2xl xsm:text-4xl  font-bold">
              Discover
              <img src="orb.svg" className="h-7 -z-10 absolute -right-5 -top-2"  />
            </h1>
            <h1 className="lg:text-5xl text-2xl xsm:text-4xl  capitalize font-bold">
              most suitable
            </h1>
            <h1 className="lg:text-5xl text-2xl xsm:text-4xl  font-bold">
              Property
            </h1>
            <div className="text-gray-50/40 text-xs mt-2 ">
              <p>Find a variety of properties that suite you very well,</p>
              <p>forget all difficulties in finfing a residence for you</p>
            </div>
            <div className="mb-3 z-20">
              <Search />
            </div>
            <div className="flex pb-4 text-xs xsm:text-base flex-row md:justify-start justify-center gap-3 xsm:gap-12 mt-10  h-fit">
              <span className="">
                <h2 className="xsm:text-3xl ">
                  9K<span className="text-orange-400">+</span>
                </h2>
                <p>Premium</p>
                <p>Procuct</p>
              </span>
              <span>
                <h2 className="xsm:text-3xl">
                  2k<span className="text-orange-400">+</span>
                </h2>
                <p>Happy</p>
                <p>Customer</p>
              </span>
              <span>
                <h2 className="xsm:text-3xl">
                  28<span className="text-orange-400">+</span>
                </h2>
                <p>Awards</p>
                <p> Winning</p>
              </span>
            </div>
          </div>
        </div>
        <div
          ref={rightGridRef}
          className="md:relative mb-10 md:mb-0 shadow-2xl border-black flex  justify-center"
        >
          <img
            src="/block1.jpg"
            className="md:absolute md:z-10 left-[5%] top-[10%] h-full sm:w-[90%] w-[80%] object-fill rounded-t-[50%] rounded-b-xl"
          />

          <div className="-bottom-2 absolute md:block blur-lg shadow-2xl brightness-200 h-7 w-full bg-white hidden" />
        </div>
      </section>
 
  );
}
