"use client";
import React from "react";
import { useState } from "react";
import { Addform, Cardlist, Updateform } from "@/components";
import ShowModal from "@/components/Modal/ShowModal";
export interface User {
  id: string;
  username: string;
  profile: string;
}
const page = () => {
  const [user, setuser] = useState<User[]>([
    // {
    //   username:"kimalng",
    //   profile:"/flower.jpg",
    //   id:"1"
    // }
  ]);
  const handleDeleteCard = (id: string) => {
    const deleteItem = user.filter((user) => user.id !== id);
    setuser(deleteItem)
}
  const [selectCard, setSelectCard] = useState("");
  const selectedUser = user.filter((user) => {
    if(user.username === selectCard){
      return user
    }
  })
  const handleUpdateUser = (updatedUser) => {
    const updatedUsers = user.map((user) =>
      user.id === updatedUser.id ? updatedUser : user
    );
    setuser(updatedUsers);
    setSelectCard("");
  };
  return (
    <div>
      <Cardlist
        items={user}
        selectCard={selectCard}
        onSelectCard={setSelectCard}
        onDeleteCard={handleDeleteCard}
        
      />
      <ShowModal selectCard={selectCard}>
        <Addform addNewUser={setuser} />
        <Updateform selectedUser={selectedUser[0]} updateUser={setuser} />
      </ShowModal>
    </div>
  );
};

export default page;
