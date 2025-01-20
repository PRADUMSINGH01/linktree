"use client";
import React, { useState, useEffect } from "react";
import { FETCHUSER } from "../module/FechUser";
import { AddLink } from "@/LinkModules/AddLinks";
import { ChooseTheme } from "../module/ChooseTheme";
import Link from "next/link";
import { uploadImage } from "@/LinkModules/UploadImage";
import { AddLinktolinks } from "@/LinkModules/AddlinktoLinks";
const LinkDashboard = () => {
  const [links, setLinks] = useState({
    link: [{ url: "", title: "" }], // Merged `link` into `links`
    color: "#000000",
    font: "Arial",
    style: "normal",
    bio: "",
    theme: "Basic",
  });

  const [userID, setuserId] = useState("");
  useEffect(() => {
    const fetchLinks = async () => {
      const docSnap = await FETCHUSER();
      if (docSnap) {
        setuserId(docSnap.id);
      } else {
        return [];
      }
    };
    fetchLinks();
  }, []);

  const saveLinks = async () => {
    const IslinkAdded = await AddLink(links, userID);
    if (IslinkAdded.success === true) {
      alert(IslinkAdded.msg);
    } else {
      alert(IslinkAdded.msg);
    }
  };

  const handleAddLink = (e) => {
    const { name, value } = e.target;
    setLinks((items) => ({ ...items, [name]: value }));
  };
  const AddLinksss = async () => {
    const IslinkAdded = await AddLinktolinks(links.link, userID);
    if (IslinkAdded.success === true) {
      alert(IslinkAdded.msg);
    } else {
      alert(IslinkAdded.msg);
    }
  };
  const AddLinks = () => {
    setLinks((prevLinks) => ({
      ...prevLinks,
      link: [...prevLinks.link, { url: "", title: "" }],
    }));
  };

  const HandleLink = (index, e) => {
    const { name, value } = e.target;
    setLinks((prevLinks) => {
      const updatedLinks = [...prevLinks.link];
      updatedLinks[index] = { ...updatedLinks[index], [name]: value };
      return { ...prevLinks, link: updatedLinks };
    });
  };
  const handleRemoveLink = (index) => {
    setLinks((prevLinks) => {
      const updatedLinks = prevLinks.link.filter((_, i) => i !== index);
      return { ...prevLinks, link: updatedLinks };
    });
  };
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className=" p-3  text-center text-xl ">
        Your Profile Link is /your full name{" "}
      </h1>
      <button className="mb-6 px-6 py-2 bg-yellow-500 mt-2 text-black font-basic rounded-lg hover:bg-yellow-700">
        Choose your theme
      </button>
      <label className="flex items-center space-x-2 shadow-xl bg-white/10 p-2">
        <span>Theme:</span>
        <select
          value={links.theme}
          name="theme"
          onChange={(e) => handleAddLink(e)}
          className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option>Basic</option>
          <option>Stander</option>
          <option>ocen </option>
        </select>
      </label>{" "}
      <ChooseTheme theme={links.theme} links={links.link} />
      <p className="bg-yellow-500 text-left p-2 m-5 w-[10rem] rounded-xl font-basic">
        <Link href={"/AddLinks"}>4. Add your Profile </Link>
      </p>
      <input
        type="file"
        placeholder="Bio"
        name="Bio"
        id="imageUpload"
        value={links.bio}
        onChange={() => uploadImage()}
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        onClick={AddLinks}
        className="mb-6 px-6 py-2 bg-yellow-500 mt-2 text-black font-basic text-left w-[10rem] rounded-lg hover:bg-yellow-700"
      >
        Add New Link
      </button>
      <div className="w-full max-w-3xl bg-white/50 shadow-lg rounded-lg p-6 space-y-6">
        <div className="p-4 border border-gray-200 rounded-lg space-y-4">
          {links.link.map((items, index) => (
            <div key={index}>
              <div className="flex space-x-4">
                <input
                  type="text"
                  name="url"
                  placeholder="URL"
                  value={items.url}
                  onChange={(e) => HandleLink(index, e)}
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  value={items.title}
                  onChange={(e) => HandleLink(index, e)}
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              <div className="flex space-x-4 items-center">
                <button
                  onClick={() => handleRemoveLink(index)}
                  className="text-red-600 hover:text-red-800"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
        <p className=" w-full flex flex-row justify-cener  text-red-500 text-sm opacity-80">
          Note: On save Change only link will be added
        </p>
        <button
          onClick={AddLinksss}
          className="w-1/2 ml-[25%] py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
        >
          Save Changes
        </button>
      </div>
      <button
        onClick={saveLinks}
        className="w-1/2 py-2 bg-green-600 mt-10 text-white rounded-lg hover:bg-green-700"
      >
        Publish
      </button>
    </div>
  );
};

export default LinkDashboard;
