'use client'
import React,{ReactNode,useState} from 'react'
import { motion } from "framer-motion";
import { Button } from "@/components";
interface ShowModalProps {
  children?: ReactNode;
  selectCard: string;
}
const ShowModal:React.FC<ShowModalProps> = ({children,selectCard}) => {
  const [isShowModal, setIsShowModal] = useState(false);
  return (
    <>
      <Button onClick={() => setIsShowModal(true)}
        position="bottom-right"
      >
        {selectCard ? "Edit" : "Add"}

      </Button>
      {isShowModal && (
        <>
          <motion.div
            initial={{ x: "100%" }}
            animate={{
              x: 0,
            }}
            exit={{
              x: "100%",
            }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed bg-indigo-200 text-white shadow-lg top-0 right-0 w-full max-w-sm h-screen p-5"
          >
            <button
              onClick={() => setIsShowModal((sideBar) => !sideBar)}
              className="bg-white text-black h-8 w-8 block mb-2 rounded-full"
            >
              &times;
            </button>
            <div>{children}</div>
          </motion.div>
        </>
      )}
    </>
  )
}

export default ShowModal
