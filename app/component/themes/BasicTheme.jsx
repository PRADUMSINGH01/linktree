import Link from "next/link";
import Avatar from "../ProfileLins/Avatar";
import AboutProfile from "../ProfileLins/AboutProfile";
import SocailMediaIcons from "../ProfileLins/SocialMedia";
const BasicThem = ({ bg, URL, Title }) => {
  return (
    <div className="w-full md:w-1/2 h-full mb-10 md:rouned-xl bg-yellow-500 text-black flex flex-col items-center justify-center p-5 ">
      <Avatar />

      <AboutProfile />
      <SocailMediaIcons />

      <div className=" w-full h-16 bg-black border border-x-black border-y-black m-2  flex items-center justify-center  rouned-2xl relative">
        <Link
          href={URL}
          className="w-full  h-14 flex items-center bg-blue-500 justify-center text-2xl tracking-widest	 capitalize font-basic top-0  mr-1  z-10 absolute"
        >
          {Title}
        </Link>
      </div>

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
    </div>
  );
};

export default BasicThem;
