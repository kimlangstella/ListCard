"use client";
import React from "react";
import { useState, Dispatch, SetStateAction } from "react";
import { User } from "@/app/page";
interface UpdateformProps {
  updateUser: Dispatch<SetStateAction<User[]>>;
  selectedUser: User;
}
const Updateform: React.FC<UpdateformProps> = ({
  selectedUser,
  updateUser,
}) => {
  const [user, setUser] = useState({
    username: selectedUser.username,
    id: selectedUser.id,
    profile: selectedUser.profile,
  });
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateUser((prevUsers) => {
      return prevUsers.map((prevUser) => {
        if (prevUser.id === selectedUser.id) {
          return {
            ...prevUser,
            ...user,
          };
        }
        return prevUser;
      });
    });
  };
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Event", e);
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
        <label htmlFor="">FullName:</label>
        <br />
        <input
          type="text"
          name="username"
          id="username"
          className="border border-blue-300 text-black"
          defaultValue={user.username}
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
        <button className="p-2 bg-slate-400 mt-3 rounded-md ml-36">update</button>
      </form>
    </div>
  );
};

export default Updateform;
