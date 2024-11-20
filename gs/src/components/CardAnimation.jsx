import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion";

import { LuSwords } from "react-icons/lu";

import { GoPlus } from "react-icons/go";
import { MdOutlineExpandLess } from "react-icons/md";

export default function CardAnimation( {title, text, icon} ) {

    const [isOpen, setIsOpen] = useState(false)

    const toogleCard = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <div className={`relative flex flex-col md:h-96 md:w-72 w-56 border-2 hover:border-primary rounded-lg border-quaternary  gap-4 transition-all duration-500 ease-in-out`}>
                <div className="flex w-full justify-between items-center p-5 md:overflow-hidden md:min-h-[100px]">
                    <h3 className={`text-2xl transition-transform duration-500 ease-in-out ${isOpen ? 'opacity-70 scale-125 translate-y-4 translate-x-4' : 'opacity-100 scale-100 translate-y-0 translate-x-0'}`}>
                        {title}
                    </h3>
                    <button 
                    className= {`transition-transform duration-700 ease-in-out ${isOpen ? "rotate-180 scale-110" : "rotate-0 scale-100"}`}
                    onClick={toogleCard}>
                        {isOpen ? <MdOutlineExpandLess size={30}/> : <GoPlus size={30}/> }
                    </button>
                </div>
                <div className={`hidden md:block absolute top-28 right-28 transition-all duration-700 ease-in-out ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
                    {icon}
                </div>
                <AnimatePresence>
                    {isOpen && (
                        <motion.p 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="basis-full text-justify p-6">
                        {text}
                        </motion.p>
                    )}
                </AnimatePresence>
            </div>
        </>
    )
}