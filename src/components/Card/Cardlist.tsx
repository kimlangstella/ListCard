import React from "react";
import { Card } from "./Card";
import { User } from "@/app/page";
interface CardlistProps {
  items: User[];
  selectCard: string;
  onSelectCard: React.Dispatch<React.SetStateAction<string>>;
  onDeleteCard: (id: string) => void;
}
const Cardlist: React.FC<CardlistProps> = ({
  items,
  selectCard,
  onSelectCard,
  onDeleteCard
}) => {
  return (
    <div>
      {items.map((item, index) => (
        <Card
          id={item.id}
          fullname={item.username}
          src={item.profile}
          key={item.id || index}
          onSelectCard={onSelectCard}
          selectCard={selectCard}
          onDeleteCard={onDeleteCard}
        ></Card>
      ))}
    </div>
  );
};

export { Cardlist };
