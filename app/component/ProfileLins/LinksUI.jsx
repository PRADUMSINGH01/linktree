const { default: Link } = require("next/link");

const Links = async ({ Url, link, color, text, font, bg }) => {
  return (
    <Link
      href={`${Url || ""}`}
      target="_blank"
      className={` text-[${color}] font-${
        font || ""
      }  h-20 lg:w-1/3 w-full border border-white  text-2xl hover:bg-slate-600 flex text-center items-center justify-center rounded-lg px-2 m-2 bg-gray-300 shadow-xl`}
    >
      {link || "hello"}
    </Link>
  );
};

export default Links;
