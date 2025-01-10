import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import { FaReddit } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

const SocailMediaIcons = () => {
  return (
    <div className="flex justify-evenly text-white  items-center w-full md:w-1/2 m-5 px-10  text-2xl shadow-2xl">
      <FaFacebookSquare className="hover:text-black  hover:shadow-xl  " />
      <FaInstagram className="hover:text-black  hover:shadow-xl  " />
      <FaSpotify className="hover:text-black  hover:shadow-xl  " />
      <FaReddit className="hover:text-black  hover:shadow-xl  " />
      <FaDiscord className="hover:text-black  hover:shadow-xl  " />
    </div>
  );
};

export default SocailMediaIcons;
