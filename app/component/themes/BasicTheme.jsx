import Link from "next/link";
import Avatar from "../ProfileLins/Avatar";
import AboutProfile from "../ProfileLins/AboutProfile";
import SocailMediaIcons from "../ProfileLins/SocialMedia";
const BasicThem = ({ link }) => {
  const color = [
    "bg-blue-500",
    "bg-blue-700",
    "bg-pink-500",
    "bg-red-200",
    "bg-red-500",
    "bg-pink-500",
    "bg-red-200",
    "bg-red-500",
  ];
  return (
    <div className="w-full bg-yellow-500 flex flex-col items-center justify-center ">
      <div className="  lg:mt-5 shadow-xl rounded-md w-full md:w-1/2 h-screen mb-10 md:rouned-xl bg-yellow-400 text-black flex flex-col items-center justify-center p-5 ">
        <Avatar />

        <AboutProfile />
        <SocailMediaIcons />
        {link
          ? link.map((items, index) => (
              <div className=" w-full h-16 bg-black border border-x-black border-y-black m-2  flex items-center justify-center  rouned-2xl relative">
                <Link
                  href={items.url}
                  className={`w-full  h-14 flex items-center ${color[index]} justify-center text-2xl tracking-widest	 capitalize font-basic top-0  mr-1  z-10 absolute`}
                >
                  {items.title}
                </Link>
              </div>
            ))
          : ""}
        {/**
 * 
        <div className=" w-full h-16 bg-black border border-x-black border-y-black m-2  flex items-center justify-center  rouned-2xl relative">
          <Link
            href={URL}
            className="w-full  h-14 flex items-center bg-blue-700 justify-center text-2xl tracking-widest	 capitalize font-basic top-0  mr-1  z-10 absolute"
          >
            {Title}
          </Link>
        </div>

        <div className=" w-full h-16 bg-black border border-x-black border-y-black m-2  flex items-center justify-center  rouned-2xl relative">
          <Link
            href={URL}
            className="w-full  h-14 flex items-center bg-pink-500 justify-center text-2xl tracking-widest	 capitalize font-basic top-0  mr-1  z-10 absolute"
          >
            {Title}
          </Link>
        </div>

        <div className=" w-full h-16 bg-black border border-x-black border-y-black m-2 flex items-center justify-center  rouned-2xl relative">
          <Link
            href={URL}
            className="w-full  h-14 flex items-center bg-red-200 justify-center text-2xl tracking-widest	 capitalize font-basic top-0  mr-1  z-10 absolute"
          >
            {Title}
          </Link>
        </div>

        <div className=" w-full h-16 bg-black border border-x-black border-y-black m-2  flex items-center justify-center  rouned-2xl relative">
          <Link
            href={URL}
            className="w-full  h-14 flex items-center bg-yellow-300 justify-center text-2xl tracking-widest	 capitalize font-basic top-0  mr-1  z-10 absolute"
          >
            {Title}
          </Link>
        </div>
        
 */}
      </div>
    </div>
  );
};

export default BasicThem;
