"use client";

import React, { useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import {
  AiOutlineEdit,
  AiOutlineDelete,
  AiOutlinePlus,
  AiOutlineUpload,
} from "react-icons/ai";
import Link from "next/link";
import UserLink from "../UserLinkUI/LinkUI";

const initialLinks = [
  { id: "1", label: "Home", url: "https://example.com" },
  { id: "2", label: "About", url: "https://example.com/about" },
  { id: "3", label: "Contact", url: "https://example.com/contact" },
];

const AdminDashboard = () => {
  //link setting -------------------------
  const [linksetting , setlinksetting ]= useState({
    bg:"",
    Color:"",
  })  
  const [links, setLinks] = useState(initialLinks);
  const [newLink, setNewLink] = useState({ label: "", url: "" });
  const [editingId, setEditingId] = useState(null);
  const [profilePicture, setProfilePicture] = useState(null);
  




  //------------Handle link setting ------------





  // Handle drag and drop reordering
  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active && over && active.id !== over.id) {
      const oldIndex = links.findIndex((link) => link.id === active.id);
      const newIndex = links.findIndex((link) => link.id === over.id);
      setLinks((prev) => arrayMove(prev, oldIndex, newIndex));
    }
  };

  // Handle link creation
  const handleAddLink = () => {
    if (!newLink.label || !newLink.url) return;
    setLinks([...links, { id: Date.now().toString(), ...newLink }]);
    setNewLink({ label: "", url: "" });
  };

  // Handle link update
  const handleUpdate = (id, updatedLink) => {
    setLinks((prevLinks) =>
      prevLinks.map((link) =>
        link.id === id ? { ...link, ...updatedLink } : link
      )
    );
    setEditingId(null);
  };

  // Handle link deletion
  const handleDelete = (id) => {
    setLinks((prevLinks) => prevLinks.filter((link) => link.id !== id));
  };

  // Handle profile picture upload
  const handleProfilePictureUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => setProfilePicture(event.target.result);
      reader.readAsDataURL(file);
    }
  };

  // Toggle between dark and light mode

  return (
    <div
      className={`${"dark:bg-gray-900 dark:text-white bg-white text-gray-900"} p-8 min-h-screen`}
    >
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-3xl text-center w-full font-bold">
          Customise your Link page{" "}
        </h1>
      </header>

      {/* Profile Section */}
      <div className="flex items-center mb-8">
        <div className="w-24 h-24 bg-gray-200 rounded-full overflow-hidden mr-4">
          {profilePicture ? (
            <img
              src={profilePicture}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex items-center justify-center h-full">
              <span className="text-gray-500">No Image</span>
            </div>
          )}
        </div>
        <label className="cursor-pointer p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          <AiOutlineUpload className="inline-block mr-2" />
          Upload Picture
          <input
            type="file"
            accept="image/*"
            onChange={handleProfilePictureUpload}
            className="hidden"
          />
        </label>
      </div>

      {/* Links Management */}
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <div className="bg-gray-100 p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Links</h2>

          {links.map((link) => (
            <div
              key={link.id}
              className="flex items-center justify-between mb-2 bg-white p-2 rounded shadow"
              draggable="true"
            >
              {editingId === link.id ? (
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Label"
                    value={link.label}
                    className="border px-2 py-1 flex-1"
                    onChange={(e) =>
                      handleUpdate(link.id, { label: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    placeholder="URL"
                    value={link.url}
                    className="border px-2 py-1 flex-1"
                    onChange={(e) =>
                      handleUpdate(link.id, { url: e.target.value })
                    }
                  />
                </div>
              ) : (
                <>
                  <div>
                    <UserLink
                      URL={link.url}
                      URLName={link.label}
                      bg={"red-500"}
                      text={"indigo-500"}
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="color" name="Color" id="" value={linksetting.Color} onChange={(e)=>handleLinksetting(e)}/>

                    <button
                      className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                      onClick={() => setEditingId(link.id)}
                    >
                      <AiOutlineEdit />
                    </button>
                    <button
                      className="p-2 bg-red-500 text-white rounded hover:bg-red-600"
                      onClick={() => handleDelete(link.id)}
                    >
                      <AiOutlineDelete />
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </DndContext>

      {/* Add Link */}
      <div className="mt-4">
        <h3 className="text-lg font-medium mb-2">Add New Link</h3>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Label"
            value={newLink.label}
            className="border px-2 py-1 flex-1"
            onChange={(e) => setNewLink({ ...newLink, label: e.target.value })}
          />
          <input
            type="text"
            placeholder="URL"
            value={newLink.url}
            className="border px-2 py-1 flex-1"
            onChange={(e) => setNewLink({ ...newLink, url: e.target.value })}
          />
          <button
            className="p-2 bg-green-500 text-white rounded hover:bg-green-600"
            onClick={handleAddLink}
          >
            <AiOutlinePlus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
