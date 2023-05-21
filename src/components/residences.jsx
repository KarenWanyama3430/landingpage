import { useEffect } from "react";
import House from "./house";
import { useState } from "react";

export default function Residences() {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(3);
  const [startmobile, setStartMobile] = useState(0);
  const [endmobile, setEndMobile] = useState(2);

  function back() {
    if (start > 0 && end > 3) {
      setStart(start - 3);
      setEnd(end - 3);
    }
  }
  function backMobile() {
    if (startmobile > 0 && endmobile > 2) {
      setStartMobile(startmobile - 2);
      setEndMobile(endmobile- 2);
    }
  }

  function forward() {
    if (start < data.length && end < data.length) {
      setStart(start + 3);
      setEnd(end + 3);
    }
  }
  function forwardMobile() {
    if (startmobile < data.length && endmobile < data.length) {
      setStartMobile(startmobile + 2);
      setEndMobile(endmobile + 2);
          //  console.log(start + " ff " + end);

    }
  }

  const data = [
    {
      name: "Aliva Priva Jardin",
      price: "39,043",
      details:
        "A nice modern house located in the southern bay area in a quiet area",
      image: "/house7.jpg",
    },
    {
      name: "Aliva Priva Jardin",
      price: "51,043",
      details:
        "A nice modern house located in the southern bay area in a quiet area",
      image: "/house.jpg",
    },
    {
      name: "Aliva Priva Jardin",
      price: "47,043",
      details:
        "A nice modern house located in the southern bay area in a quiet area",
      image: "/house1.jpg",
    },
    {
      name: "Aliva Priva Jardin",
      price: "48,043",
      details:
        "A nice modern house located in the southern bay area in a quiet area",
      image: "/house2.jpg",
    },
    {
      name: "Aliva Priva Jardin",
      price: "57,043",
      details:
        "A nice modern house located in the southern bay area in a quiet area",
      image: "/house3.jpg",
    },
    {
      name: "Aliva Priva Jardin",
      price: "34,043",
      details:
        "A nice modern house located in the southern bay area in a quiet area",
      image: "/house4.webp",
    },
    {
      name: "Aliva Priva Jardin",
      price: "67,043",
      details:
        "A nice modern house located in the southern bay area in a quiet area",
      image: "/house5.jpg",
    },
    {
      name: "Rosewood Pines",
      price: "54,044",
      details:
          "A nice modern house located in the southern bay area in a quiet area",
      image: "/house6.jpg",
    },
  ];

  return (
    <section className="mt-2 md:w-[80%] font-poppins relative mx-1 xsm:mx-4 md:mx-[10%]">
      <h3 className="font-bold mx-2 text-sm xsm:text-lg text-orange-600">
        Best Choice
      </h3>
      <div className="flex flex-row  mb-3">
        <h2 className="font-bold mx-2 basis-5/6 text-lg xsm:text-2xl md:text-3xl text-darkpurple">
          Popular Release<span className="text-orange-600">.</span>
        </h2>

        <div className="absolute hidden md:block right-1">
          <button
            onClick={back}
            className="p-1 border-gray-600/40 rounded-md border mx-2"
          >
            {" "}
            <img src="/left-arrow.svg" sizes="12" className="w-6" />
          </button>
          <button
            onClick={forward}
            className="p-1 border-gray-600/40 hover:border rounded-md mx-1"
          >
            <img src="/left-arrow.svg" sizes="12" className="w-6 rotate-180" />
          </button>{" "}
        </div>

        {/* mobile */}
        <div className="absolute md:hidden right-1">
          <button
            onClick={backMobile}
            className="p-1 border-gray-600/40 rounded-md border mx-2"
          >
            {" "}
            <img src="/left-arrow.svg" sizes="12" className="w-3 xsm:w-6" />
          </button>
          <button
            onClick={forwardMobile}
            className="p-1 border-gray-600/40 hover:border rounded-md mx-1"
          >
            <img
              src="/left-arrow.svg"
              sizes="12"
              className="w-3 xsm:w-6 rotate-180"
            />
          </button>{" "}
        </div>
      </div>
      <div className="hidden md:grid  grid-cols-3 gap-3 grid-rows-1">
        {data.slice(start, end).map((item, index) => {
          return <House key={index} {...item} />;
        })}
      </div>
      {/* mobile */}
      <div className="grid grid-cols-2 md:hidden gap-1 grid-rows-1 ">
        {data.slice(startmobile, endmobile).map((item, index) => {
          return <House key={index} {...item} />;
        })}
      </div>
    </section>
  );
}
