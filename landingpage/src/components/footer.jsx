
export default function Footer() {
  return (
    <footer>
      <div className="grid relative mx-[10%] pb-5 grid-cols-5 md:grid-cols-7 grid-rows-1 gri">
        <div className="">
          <div className="relative w-fit font-bold md:text-2xl">
            <p className="z-10 -mt-2 relative text-blue-600">
              <img src="orb.svg" className="h-4 -z-10 absolute  -right-2 " />
              Homyz
            </p>
          </div>
          <p className="md:text-xs text-[.6rem]">
            Our ur vision is to make all people the best place to live for them
          </p>
        </div>
        <div className="hidden md:block"></div>
        <div className="hidden md:block"></div>

        <div className="md:text-xs ml-3 text-[.6rem]">
          <p className="font-bold md:text-xl text-blue-800">About</p>
          <p>About US</p>
          <p>Features</p>
          <p>News & Blog</p>
        </div>
        <div className="md:text-xs text-[.6rem]">
          <p className="font-bold md:text-xl text-blue-800">Company</p>
          <p>How We Work?</p>
          <p>Capital</p>
          <p>Security</p>
        </div>
        <div className="md:text-xs text-[.6rem]">
          <p className="font-bold md:text-xl text-blue-800">Support</p>
          <p>FAQs</p>
          <p>Support Center</p>
          <p>Contact Us</p>
        </div>
        <div className="md:ml-[50%] ml-5 md:text-xs text-[.6rem]">
          <p className="font-bold md:text-xl text-blue-800">Movement</p>
          <p>What Homyz?</p>
          <p>Support Us</p>
          <p></p>
        </div>
      </div>
      <div className="mx-[10%] pb-5 flex text-[.5rem] md:text-[.72rem] mt-10">
        <p className="basis-2/6 md:basis-6/12">@2021 Homyz. <span className="block md:inline">All rights reserved</span></p>

        <p className="md:basis-1/6 basis-4/12  ">Terms & Conditions</p>
        <p className="md:1/6   basis-3/12 text-right md:text-right">Privacy Policy</p>
      </div>
    </footer>
  );
}
