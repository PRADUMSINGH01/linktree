import Link from "next/link";
import Avatar from "../ProfileLins/Avatar";
import SocailMediaIcons from "../ProfileLins/SocialMedia";
import AboutProfile from "../ProfileLins/AboutProfile";
const Themethree = ({ links }) => {
  return (
    <div className="w-full md:w-1/2 h-full mb-10 rouned-xl bg-gradient-to-r from-pink-500 to-blue-500 text-black flex flex-col items-center justify-center p-5 ">
      <Avatar />
      <AboutProfile Bio={"Ocan Cleaner || Diver "} />

      <SocailMediaIcons />
      <Link
        href={"/"}
        className="hover:shadow-2xl font-stander w-full h-12 text-2xl bg-gradient-to-r from-pink-600 to-yellow-100 text-white flex items-center justify-center  rounded shadow-xl m-2"
      >
        {" "}
        URL
      </Link>

      <Link
        href={"/"}
        className=" hover:shadow-2xl font-stander w-full h-12 text-2xl bg-gradient-to-r from-pink-600 to-yellow-100 text-white flex items-center justify-center  rounded shadow-xl m-2"
      >
        {" "}
        URL
      </Link>

      <Link
        href={"/"}
        className=" hover:shadow-2xl font-stander w-full h-12 text-2xl bg-gradient-to-r from-pink-600 to-yellow-100 text-white flex items-center justify-center  rounded shadow-xl m-2"
      >
        {" "}
        URL
      </Link>

      <Link
        href={"/"}
        className=" hover:shadow-2xl font-stander w-full h-12 text-2xl bg-gradient-to-r from-pink-600 to-yellow-100 text-white flex items-center justify-center  rounded shadow-xl m-2"
      >
        {" "}
        URL
      </Link>
      <Link
        href={"/"}
        className=" hover:shadow-2xl  font-stander w-full h-12 text-2xl bg-gradient-to-r from-pink-600 to-yellow-100 text-white flex items-center justify-center  rounded shadow-xl m-2"
      >
        {" "}
        URL
      </Link>
    </div>
  );
};

export default Themethree;
