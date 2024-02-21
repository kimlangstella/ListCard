"use client";
import React from "react";
import { useState } from "react";
import { Addform, Cardlist, SearchForm, Updateform } from "@/components";
import ShowModal from "@/components/Modal/ShowModal";
export interface User {
  id: string;
  username: string;
  profile: string;
}
const page = () => {
  const [user, setuser] = useState<User[]>([]);
  const [selectCard, setSelectCard] = useState("");
  const [Search, setSearch] = useState("");
  const handleDeleteCard = (id: string) => {
    const deleteItem = user.filter((user) => user.id !== id);
    setuser(deleteItem)
  }
  const selectedUser = user.filter((user) => {
    if(user.id === selectCard){
      return user
    }
  })
  const findUser =user.filter((user) => {
    return user.username.toLowerCase().includes(Search.toLowerCase())
  })
  return (
    <div>
      <SearchForm searchUser={setSearch}/>
      <Cardlist
        items={findUser}
        selectCard={selectCard}
        onSelectCard={setSelectCard}
        onDeleteCard={handleDeleteCard}
      />
      <ShowModal selectCard={selectCard}>
      {selectedUser.length > 0 ? (
          <>
            <Updateform selectedUser={selectedUser[0]} updateUser={setuser} />
          </>
        ) : (
          <>
            <Addform addNewUser={setuser} />
          </>
        )}

      </ShowModal>
    </div>
  );
};

export default page;
