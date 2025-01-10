"use client";
import React, { useState, useEffect } from "react";
import { FETCHUSER } from "../module/FechUser";
import { AddLink } from "@/LinkModules/AddLinks";
import Preview from "@/LinkModules/Preview";

const LinkDashboard = () => {
  const [links, setLinks] = useState([]);

  const [userID, setuserId] = useState("");
  useEffect(() => {
    const fetchLinks = async () => {
      const docSnap = await FETCHUSER();
      if (docSnap) {
        setLinks(docSnap.links);
        setuserId(docSnap.id);
      } else {
        return [];
      }
    };
    fetchLinks();
  }, []);

  //console.log(links, userID);
  const saveLinks = async () => {
    const IslinkAdded = await AddLink(links, userID);
    if (IslinkAdded.success === true) {
      alert(IslinkAdded.msg);
    } else {
      alert(IslinkAdded.msg);
    }
  };

  const handleEditLink = (index, key, value) => {
    const updatedLinks = [...links];
    updatedLinks[index][key] = value;
    setLinks(updatedLinks);
  };

  const handleAddLink = () => {
    setLinks([
      ...links,
      {
        url: "",
        title: "",
        color: "#000000",
        font: "Arial",
        style: "normal",
        bio: "",
      },
    ]);
  };

  const handleRemoveLink = (index) => {
    const updatedLinks = links.filter((_, i) => i !== index);
    setLinks(updatedLinks);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Customize Your Links
      </h1>
      <button
        onClick={handleAddLink}
        className="mb-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Add New Link
      </button>
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6 space-y-6">
        {links.map((link, index) => (
          <div
            key={index}
            className="p-4 border border-gray-200 rounded-lg space-y-4"
          >
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Bio"
                value={link.bio}
                onChange={(e) => handleEditLink(index, "bio", e.target.value)}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="text"
                placeholder="URL"
                value={link.url}
                onChange={(e) => handleEditLink(index, "url", e.target.value)}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="text"
                placeholder="Title"
                value={link.title}
                onChange={(e) => handleEditLink(index, "title", e.target.value)}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="flex space-x-4 items-center">
              <label className="flex items-center space-x-2">
                <span>Color:</span>
                <input
                  type="color"
                  value={link.color}
                  onChange={(e) =>
                    handleEditLink(index, "color", e.target.value)
                  }
                  className="w-10 h-10 p-0 border rounded-md focus:outline-none"
                />
              </label>
              <label className="flex items-center space-x-2">
                <span>Font:</span>
                <select
                  value={link.font}
                  onChange={(e) =>
                    handleEditLink(index, "font", e.target.value)
                  }
                  className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <option>Arial</option>
                  <option>Roboto</option>
                  <option>Verdana</option>
                </select>
              </label>
              <label className="flex items-center space-x-2">
                <span>Style:</span>
                <select
                  value={link.style}
                  onChange={(e) =>
                    handleEditLink(index, "style", e.target.value)
                  }
                  className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <option value="normal">Normal</option>
                  <option value="italic">Italic</option>
                  <option value="bold">Bold</option>
                </select>
              </label>
              <button
                onClick={() => handleRemoveLink(index)}
                className="text-red-600 hover:text-red-800"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
        <button
          onClick={saveLinks}
          className="w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          Save Changes
        </button>
      </div>
      <h2 className="text-2xl font-semibold text-gray-700 mt-10">Preview</h2>
      {links ? <Preview dataa={links} /> : "Loading"}

      <div className="mt-6 w-full max-w-md bg-white shadow-lg rounded-lg p-6 space-y-4">
        {links
          ? links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-2 rounded-lg"
                style={{
                  color: link.color,
                  fontFamily: link.font,
                  fontWeight: link.style === "bold" ? "bold" : "normal",
                  fontStyle: link.style === "italic" ? "italic" : "normal",
                }}
              >
                {link.title || "Untitled Link"}
              </a>
            ))
          : ""}
      </div>
    </div>
  );
};

export default LinkDashboard;
