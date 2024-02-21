"use client";
import React, { useState } from "react";
import { User } from "@/app/page";
interface AddFormProps {
  addNewUser: (User: User) => void;
}
const Addform: React.FC<AddFormProps> = ({ addNewUser }) => {
  const [user, setUser] = useState({ id: "", username: "", profile: "" });
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addNewUser((prevUsers) => [...prevUsers, user]);
  };
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prevUser) => {
      return {
        ...prevUser,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleOnUploadFile = (e: React.FormEvent<HTMLInputElement>) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUser((prevUser) => {
        return {
          ...prevUser,
          profile: imageUrl,
        };
      });
    }
  };
  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="">ID:</label>
        <br />
        <input
          type="text"
          name="id"
          id="id"
          className="border border-blue-300 text-black"
          onChange={handleOnChange}
        />
        <br />
        <label htmlFor="">FullName:</label>
        <br />
        <input
          type="text"
          name="username"
          id="username"
          className="border border-blue-300 text-black"
          onChange={handleOnChange}
        />
        <br />
        <label htmlFor="">Image: </label>
        <br />
        <input
          type="file"
          name="profile"
          id="profile"
          className="w-[110px] mt-2"
          onChange={handleOnUploadFile}
        />
        <br />
        <button className="p-2 bg-slate-400 mt-3 m-36 rounded-md">submit</button>
      </form>
    </div>
  );
};

export { Addform };
