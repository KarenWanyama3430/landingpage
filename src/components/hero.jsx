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
      <section className="grid md:h-[21rem]  text-center md:text-left bg-black text-white gap-2 relative grid-row md:grid-cols-2 2xl:px-[11%]   xsm:px-[10%]">
        <div className=" h-fit z-20">
          <div className="xl:ml-20">
            <h1 className="lg:text-4xl w-fit mx-auto md:mx-0 relative text-3xl xsm:text-4xl  font-bold">
              Discover
              <img src="orb.svg" className="h-7 -z-10 absolute -right-5 -top-2"  />
            </h1>
            <h1 className="lg:text-4xl text-2xl xsm:text-4xl  capitalize font-bold">
              most suitable
            </h1>
            <h1 className="lg:text-4xl text-2xl xsm:text-4xl  font-bold">
              Property
            </h1>
            <div className="text-gray-50/40 text-xs xl:text-base mt-2 ">
              <p>Find a variety of properties that suite you very well,</p>
              <p>forget all difficulties in finfing a residence for you</p>
            </div>
            <div className="mb-3 z-20">
              <Search />
            </div>
            <div className="flex pb-4 text-xs xsm:text-base flex-row md:justify-start justify-center gap-3 xsm:gap-12   h-fit">
              <span className="">
                <h2 className="xsm:text-lg ">
                  9K<span className="text-orange-400">+</span>
                </h2>
                <p>Premium</p>
                <p>Procuct</p>
              </span>
              <span>
                <h2 className="xsm:text-lg">
                  2k<span className="text-orange-400">+</span>
                </h2>
                <p>Happy</p>
                <p>Customer</p>
              </span>
              <span>
                <h2 className="xsm:text-lg">
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
          className="md:relative  md:mb-0  border-black flex  justify-center"
        >
          <img
            src="/block1.jpg"
            className="md:absolute md:z-10 md:left-[5%] md:-top-[0%] xl:top-[0%] h-[80%] md:h-[23rem] w-[75%] object-fill rounded-t-[50%] rounded-b-xl"
          />

          <div className="-bottom-2 absolute md:block blur-lg shadow-2xl brightness-200 h-7 w-[85%] left-[0%] bg-white hidden" />
        </div>
      </section>
 
  );
}
