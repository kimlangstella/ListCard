import React from "react";
import Image from "next/image";
interface CardProps {
  fullname: string;
  src: string;
  id: string;
  selectCard: string | null;
  onSelectCard: React.Dispatch<React.SetStateAction<string>>;
  onDeleteCard: React.Dispatch<React.SetStateAction<string>>;
  fontsize:"bold"|"thin";
  className?:string;
}
const Card: React.FC<CardProps> = ({
  fullname,
  src,
  id,
  selectCard,
  onSelectCard,
  onDeleteCard,
  fontsize,className
}) => {
  const fontSize=(fontsize:string)=>{
    switch(fontsize){
      case 'bold':
        return 'font-bold';
      case 'thin':
        return 'font-thin';
    }
};
const formfontSize=fontSize(fontsize);

  return (
    <div
      onClick={() => {
        // Unselect Card
        if (selectCard === id) {
          onSelectCard("");
        } else {
          // Select Card
          onSelectCard(id);
        }
      }}
      className={
        selectCard === id
          ? "flex gap-44 border w-[450px] bg-red-200 rounded-lg relative mt-3 m-auto p-4 justify-center "
          : "flex gap-44 border w-[450px] border-blue-800 rounded-lg relative mt-3 m-auto p-4 justify-center"
      }
    >
      <div className="flex gap-44 w-[450px] ">
        <div className="flex gap-11 w-72 h-14">
          <Image src={src} width={50} height={50} alt=""></Image>
          <div>
            <h1  className={`${formfontSize} ${className}`}>{fullname}</h1>
            <button className="border mt-2 p-1 border-blue-950 rounded-lg hover:bg-orange-300">
              preview
            </button>
          </div>
        </div>
        <div className="absolute top-0 right-0">
          <button
            onClick={(e) => {
              onDeleteCard(id);
              e.stopPropagation();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="20"
              height="20"
              viewBox="0 0 50 50"
            >
              <path d="M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 37.690466 12.309534 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 13.390466 46 4 36.609534 4 25 C 4 13.390466 13.390466 4 25 4 z M 32.990234 15.986328 A 1.0001 1.0001 0 0 0 32.292969 16.292969 L 25 23.585938 L 17.707031 16.292969 A 1.0001 1.0001 0 0 0 16.990234 15.990234 A 1.0001 1.0001 0 0 0 16.292969 17.707031 L 23.585938 25 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 25 26.414062 L 32.292969 33.707031 A 1.0001 1.0001 0 1 0 33.707031 32.292969 L 26.414062 25 L 33.707031 17.707031 A 1.0001 1.0001 0 0 0 32.990234 15.986328 z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export { Card };
