


import Contact from "./contact";
import {
  IoCallSharp,
BsFillChatDotsFill,
MdEmail,  IoVideocam
} from "react-icons/all";

export default function Values() {
  
  const data = [
    {
      details:
        "lorem ipsum dolor sit amet, consectetur adip left, consectetur adip right ggodin lorem. Lorem ipsum dolor sit amet, consect lorem ipsum dolor sit amet, consectetur adip left, consectetur adip right ggodin lorem. Lorem ipsum dolor sit amet, consect",
      children: (
        <IoCallSharp className="text-nav_purple  h-4 w-4  absolute left-2 top-2" />
      ),
      title: "Call",
      number: "021.123.145.14",
      action: "Call Now",
    },
    {
      details:
        "lorem ipsum dolor sit amet, consectetur adip left, consectetur adip right ggodin lorem. Lorem ipsum dolor sit amet, consect lorem ipsum dolor sit amet, consectetur adip left, consectetur adip right ggodin lorem. Lorem ipsum dolor sit amet, consect",
      children: (
        <BsFillChatDotsFill className="text-nav_purple  h-4 w-4  absolute left-2 top-2" />
      ),
      number: "021.123.145.14",
      title: "Chat",
      action: "Chat Now",
    },
    {
      details:
        "lorem ipsum dolor sit amet, consectetur adip left, consectetur adip right ggodin lorem. Lorem ipsum dolor sit amet, consect lorem ipsum dolor sit amet, consectetur adip left, consectetur adip right ggodin lorem. Lorem ipsum dolor sit amet, consect",
      children: (
        <IoVideocam className="text-nav_purple  h-4 w-4  absolute left-2 top-2" />
      ),
      title: "Video Call",
      number: "021.123.145.14",
      action: "Video Call Now",
    },
    {
      details:
        "lorem ipsum dolor sit amet, consectetur adip left, consectetur adip right ggodin lorem. Lorem ipsum dolor sit amet, consect lorem ipsum dolor sit amet, consectetur adip left, consectetur adip right ggodin lorem. Lorem ipsum dolor sit amet, consect",
      children: (
        <MdEmail  className="text-nav_purple h-4 w-4  absolute left-2 top-2" />
      ),
      number: "021.123.145.14",
      title: "Message",
      action: "Message Now",
    },
  ];

  return (
    <div className="md:grid grid-cols-10 md:grid-cols-2 mt-10 md:mt-20">
      <div className="md:ml-[22%] mt-10 mb-4 md:mt-0 md:text-left text-center md:mx-8 col-span-6 md:col-span-1">
        <div className=" text-darkpurple">
          <h4 className="text-orange-600 text-sm md:text-base font-semibold ">
            Contact Us
          </h4>
          <h2 className="font-bold mb-3 text-sm md:text-xl">
            Easy to contact us<span className="text-orange-600">.</span>
          </h2>
          <p className="mx-10 md:mr-8 md:mx-0 text-xs md:text-sm">
            Is there a problem finfing your dream home? Need a guide in buying your first home? or need a consultation on residential issuess? just contact us.
          </p>
          <div className="grid grid-cols-2 gap-3 mt-2 mx-8 md:mx-0  md:mr-[8%]">
            {data.map((item, index) => (
              <Contact key={index} {...item}></Contact>
            ))}
          </div>
        </div>
      </div>
      <div className="md:mx-8 col-span-4 md:col-span-1">
        <div className="flex justify-center">
          <div className="border-[10px] relative  bg-gray-600/5 rounded-b-lg  rounded-t-[50%] border-gray-500/5 shadow-gray-900/40 shadow-2xl h-[25rem] md:h-[27rem] w-[23rem]">
            {" "}
            <img
              src="/banner.jpg"
              className="absolute h-full w-full rounded-t-[50%] rounded-b-xl "
            />
          </div>
        </div>
      </div>{" "}
    </div>
  );
}
