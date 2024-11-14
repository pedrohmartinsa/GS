import { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "react-router-dom"


function NavLinks() {


  return (
    <>
        <NavLink to='about'>Quem somos</NavLink>
        <NavLink to='product' >Produto</NavLink>
        <NavLink to='contact' >Contato</NavLink>
    </>
  )
}


export default function Nav() {

  const [isOpen, setIsOpen] = useState(false)

  const toggleNavbar = () => {
    setIsOpen(!isOpen)
  }

    return (
        <>
        <nav className="w-1/3 flex justify-end">
          <div className=" hidden w-full md:flex justify-between text-xl md:justify-normal md:gap-10">
              <NavLinks/>
          </div>
          <div className="md:hidden">
            <button 
              className={`md:hidden self-end transition-transform duration-300 ease-in-out ${isOpen ? "rotate-90 scale-110" : "rotate-0 scale-100"}`} 
              onClick={toggleNavbar}
              >
              {isOpen ? <IoMdClose size={35} /> : <MdOutlineMenu size={35} />}
            </button>
          </div>
        </nav>
        <AnimatePresence>
          {isOpen && (
            <motion.div 
            className="md:hidden flex flex-col text-2xl gap-6 items-center basis-full"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <NavLinks/>
            </motion.div>
          )}
        </AnimatePresence>
        </>
    )
}






