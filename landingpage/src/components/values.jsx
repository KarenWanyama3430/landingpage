import Singlevalue from "./singlevalue";
import {
  BsShieldFillX,
  AiFillCloseSquare,
  MdAnalytics,
  AiFillCheckSquare,
} from "react-icons/all";

export default function ContactUs() {
  const data = [
    {
      details:
        "lorem ipsum dolor sit amet, consectetur adip left, consectetur adip right ggodin lorem. Lorem ipsum dolor sit amet, consect lorem ipsum dolor sit amet, consectetur adip left, consectetur adip right ggodin lorem. Lorem ipsum dolor sit amet, consect",
      icon: (
        <BsShieldFillX className="text-nav_purple  h-4 w-4  absolute left-2 top-2" />
      ),
      title: "Best intrest rates on the market",
    },
    {
      details:
        "lorem ipsum dolor sit amet, consectetur adip left, consectetur adip right ggodin lorem. Lorem ipsum dolor sit amet, consect lorem ipsum dolor sit amet, consectetur adip left, consectetur adip right ggodin lorem. Lorem ipsum dolor sit amet, consect",
      icon: (
        <AiFillCloseSquare className="text-nav_purple  h-4 w-4  absolute left-2 top-2" />
      ),
      title: "Prevent Unstable Prices",
    },
    {
      details:
        "lorem ipsum dolor sit amet, consectetur adip left, consectetur adip right ggodin lorem. Lorem ipsum dolor sit amet, consect lorem ipsum dolor sit amet, consectetur adip left, consectetur adip right ggodin lorem. Lorem ipsum dolor sit amet, consect",
      icon: (
        <MdAnalytics className="text-nav_purple  h-4 w-4  absolute left-2 top-2" />
      ),
      title: "Best price on the market",
    },
    {
      details:
        "lorem ipsum dolor sit amet, consectetur adip left, consectetur adip right ggodin lorem. Lorem ipsum dolor sit amet, consect lorem ipsum dolor sit amet, consectetur adip left, consectetur adip right ggodin lorem. Lorem ipsum dolor sit amet, consect",
      icon: (
        <AiFillCheckSquare className="text-nav_purple h-4 w-4  absolute left-2 top-2" />
      ),
      title: "Security of your data",
    },
  ];

  return (
    <div className="md:grid grid-cols-10  md:grid-cols-2 mt-10 md:mt-20">
      <div className="md:mx-8 col-span-4 md:col-span-1">
        <div className="flex justify-center">
          <div className="border-[10px] relative  bg-gray-600/5 rounded-b-lg  rounded-t-[50%] border-gray-500/5 shadow-gray-900/40 shadow-2xl h-[25rem] md:h-[27rem] w-[23rem]">
            {" "}
            <img
              src="/values.jpg"
              className="absolute h-full w-full rounded-t-[50%] rounded-b-xl "
            />
          </div>
        </div>
      </div>
      <div className="mx-2 mt-8 md:mt-0 md:text-left text-center md:mx-8 col-span-6 md:col-span-1">
        <div className=" text-darkpurple">
          <h4 className="text-orange-600 mt-10 text-sm md:text-base font-semibold ">
            Our Value
          </h4>
          <h2 className="font-bold text-sm md:text-xl">
            Value We Give To You.<span className="text-orange-600">.</span>
          </h2>
          <p className="md:mr-[33%] mr-8  mx-6 md:mx-0 text-xs md:text-sm">
            We are always ready to help by providing the best service for you ,
            We belive a good place to live can make your life better
          </p>
          <div className="grid grid-flow-row gap-2 mt-2 mx-[2%] mr md:mr-[33%]">
            {data.map((item, index) => (
              <Singlevalue
                key={index}
                title={item.title}
                details={item.details}
              >
                {item.icon}{" "}
              </Singlevalue>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
   