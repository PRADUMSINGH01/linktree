"use client";
import { useState, useEffect } from "react";
import AboutProfile from "@/app/component/ProfileLins/AboutProfile";
import Avatar from "@/app/component/ProfileLins/Avatar";
import Links from "@/app/component/ProfileLins/LinksUI";
import SocailMediaIcons from "@/app/component/ProfileLins/SocialMedia";
/*
 */
function Preview({ dataa }) {
  const [data, setdata] = useState([]);
  console.log("dadaaa----" + dataa);

  useEffect(() => {
    async function storedata(data) {
      console.log("ddd----" + data);
      const res = setdata(...data);
      return res;
    }
    storedata(dataa);
    return setdata([]);
  }, []);
  return (
    <div className="bg-gradient-to-r from-black via-[#ecc69d] to-[#ebd5bb] h-full w-full p-4 md:p-2 lg:p-2 ">
      <AboutProfile Bio={"Gamer || Twitch "} />
      <div className="w-full flex justify-center items-center ">
        <Avatar Profile={"/"} />
        <SocailMediaIcons />
      </div>
      {data ? (
        data.map((items, index) => (
          <div
            key={index}
            className="w-full flex flex-col justify-center items-center"
          >
            <Links
              Url={items.url}
              link={items.title}
              color={items.color}
              font={items.font}
              text={""}
            />
          </div>
        ))
      ) : (
        <>Loading</>
      )}{" "}
    </div>
  );
}

export default Preview;
