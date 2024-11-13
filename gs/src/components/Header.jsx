import { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom"

export default function Header() {
    
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenMenu = () => {
    setIsOpen(!isOpen);
    };

  return (
    <>
      <div className=" flex justify-between p-4">
        <Link to='/'>Nome</Link>

        <div className="flex flex-col">
            <button 
            className={`self-end transition-transform duration-300 ease-in-out ${isOpen ? "rotate-90 scale-110" : "rotate-0 scale-100"}`} 
            onClick={handleOpenMenu}
            >
            {isOpen ? <IoMdClose size={35} /> : <MdOutlineMenu size={35} />}
            </button>

            <AnimatePresence>
            {isOpen && (
                <motion.div
                className="flex flex-col justify-end items-center mr-7 w-full gap-4 bg-black text-white"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 60, opacity: 1, scale: 2 }}
                exit={{ y: -100, opacity: 0, scale: 1 }}
                transition={{ duration: 0.5 }}
                >
                <NavLink to='about' onClick={handleOpenMenu}>Quem somos</NavLink>
                <NavLink to='products' onClick={handleOpenMenu}>Produtos</NavLink>
                <NavLink to='contact' onClick={handleOpenMenu}>Contato</NavLink>
                </motion.div>
            )}
            </AnimatePresence>
        </div>
        </div>
    </>
  );
}
