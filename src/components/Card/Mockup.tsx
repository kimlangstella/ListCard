import React from 'react'
import { Card } from './Card';

const Mockup = () => {
  const data = [
    {
      fullname: "Kimlang",
      src: "/next.svg",
    },
    {
      fullname: "Kimlang",
      src: "/vercel.svg",
    },
    {
      fullname:"flower",
      src:"/1..jpg"
    }
  ];
  return (
    <div>
      <>
        {data.map((items, index) => {
          return (
            <Card key={index} fullname={items.fullname} src={items.src}/>
          );
        })}
      </>
    </div>
  )
}

export default Mockup
