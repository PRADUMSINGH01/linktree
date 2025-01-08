import Image from "next/image";
const Avatar = ({ Profile }) => {
  return (
    <div className="w-full justify-center items-center flex mt-5">
      <Image
        src={Profile}
        alt="Profile "
        width={100}
        height={100}
        className="rounded-full bg-white flex items-center "
      ></Image>
    </div>
  );
};

export default Avatar;
