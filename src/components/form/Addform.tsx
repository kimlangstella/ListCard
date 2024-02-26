"use client";
import React, { useState } from "react";
import { User } from "@/app/page";
import Schema from "@/Validation/Schema";
interface AddFormProps {
  addNewUser: (User: User) => void;
}
const Addform: React.FC<AddFormProps> = ({ addNewUser }) => {
  const [user, setUser] = useState({ id: "", username: "", profile: "" });
  const [errors, setErrors] = useState({
    username: "",
    profile: "",
  });
  const validateForm = async (name, value) => {
    try {
      await Schema.validateAt(name, { [name]: value });
      setErrors((prev) => ({ ...prev, [name]: "" }));
    } catch (error) {
      console.log("Error", error);
      setErrors((prev) => ({ ...prev, [name]: errors.message }));
    }
  };
  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (errors.profile) {
      return;
    }

    try {
      await Schema.validate(user, { abortEarly: false });

      const newId = Math.random().toString(36).substring(2, 8); // return 1f74e
      const newUser = { ...user, id: newId };
      addNewUser((prevUsers) => {
        return [...prevUsers, newUser];
      });
    } catch (error) {
      console.log("error", error);
      const fieldErrors = {};

      // Error From Yup
      error.inner.forEach((err) => {
        fieldErrors[err.path] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
  };
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prevUser) => {
      return {
        ...prevUser,
        [e.target.name]: e.target.value,
      };
    });
    validateForm(name, value);
  };
  const handleOnUploadFile = (e: React.FormEvent<HTMLInputElement>) => {
    const file = e.target.files[0];

    validateForm(e.target.name, file);
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
          {errors.username && (
        <div className="error-message text-red-500">{errors.username}</div>
      )}
        <br />
        <label htmlFor="">Image: </label>
        <br />
        <input
          type="file"
          name="profile"
          id="profile"
          className="w-[210px] mt-2"
          onChange={handleOnUploadFile}
        />
        {errors.profile && (
          <div className="error-message text-red-500">{errors.profile}</div>
        )}
        <br />
        <button className="p-2 bg-slate-400 mt-3 m-36 rounded-md">submit</button>
      </form>
    </div>
  );
};

export { Addform };
