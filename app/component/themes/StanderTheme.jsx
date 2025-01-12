import Link from "next/link";
import Avatar from "../ProfileLins/Avatar";
import SocailMediaIcons from "../ProfileLins/SocialMedia";
import AboutProfile from "../ProfileLins/AboutProfile";
const StanderTheme = () => {
  return (
    <div className="w-full h-full  bg-gradient-to-r from-cyan-500 to-blue-500 flex justify-center items-center">
      <div className="w-full md:w-1/2 h-full mb-10 rouned-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-black flex flex-col items-center justify-center p-5 ">
        <Avatar />
        <AboutProfile Bio={"Ocan Cleaner || Diver "} />

        <SocailMediaIcons />
        <Link
          href={"/"}
          className="font-stander w-full h-12 text-2xl bg-gradient-to-r from-cyan-500 to-blue-200 text-white flex items-center justify-center  rounded shadow-xl m-2"
        >
          {" "}
          URL
        </Link>

        <Link
          href={"/"}
          className="font-stander w-full h-12  text-2xl bg-gradient-to-r from-cyan-200 to-blue-500 text-white flex items-center justify-center  rounded shadow-xl m-2"
        >
          {" "}
          URL
        </Link>

        <Link
          href={"/"}
          className="font-stander w-full h-12  text-2xl bg-gradient-to-r from-cyan-500 to-blue-200 text-white flex items-center justify-center  rounded shadow-xl m-2"
        >
          {" "}
          URL
        </Link>

        <Link
          href={"/"}
          className="font-stander w-full h-12  text-2xl bg-gradient-to-r from-cyan-200 to-blue-500 text-white flex items-center justify-center  rounded shadow-xl m-2"
        >
          {" "}
          URL
        </Link>
        <Link
          href={"/"}
          className="font-stander w-full h-12  text-2xl bg-gradient-to-r from-cyan-500 to-blue-200 text-white flex items-center justify-center  rounded shadow-xl m-2"
        >
          {" "}
          URL
        </Link>
      </div>
    </div>
  );
};

export default StanderTheme;
