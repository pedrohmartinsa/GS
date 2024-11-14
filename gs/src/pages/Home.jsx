import { useState } from "react";
import { NavLink } from "react-router-dom";
import { GoPlus } from "react-icons/go";
import { MdOutlineExpandLess } from "react-icons/md";

import { LuSwords } from "react-icons/lu";
import { MdOutlineDiamond } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";

import placa from "./assets/placa-de-circuito.png"
import sustainable_energy from "./assets/sustainable-energy.png"

import { AnimatePresence, motion } from "framer-motion";


export default function Home() {

    const [isOpen, setIsOpen] = useState(false)

    const toggleCard = () => {
        setIsOpen(!isOpen)
    }

    return(
        <>
            <main className="flex flex-col justify-center items-center h-[100%]">
                <Introduction/>
                <CardsAbout/>
                <div className=" flex flex-col items-center justify-around">
                        <img className="w-52" src={placa} alt="" />

                        <div className="border-2 p-8 border-secondary hover:border-quaternary transition-colors duration-300 ease-in-out w-72 h-auto">
                            
                        <div className={`flex flex-col justify-between items-start transition-all duration-500 ease-in-out overflow-hidden max-h-[600px]`}>
                            <h2 className={`text-3xl transition-all duration-500 ease-in-out transform ${isOpen ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                                Placa Piezoelétrica
                            </h2>
                            <p className={`text-lg transition-opacity duration-500 ease-in-out transform ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                                Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Per aumento de cachacis, eu reclamis. Paisis, filhis, espiritis santis. Cevadis im ampola pa arma uma pindureta.
                            </p>
                            <button
                                className={`self-end transition-transform duration-700 ease-in-out ${isOpen ? 'rotate-180 scale-110' : 'rotate-0 scale-100'}`}
                                onClick={toggleCard}
                            >
                                {isOpen ? <MdOutlineExpandLess size={30} /> : <GoPlus size={30} />}
                            </button>
                            </div>
                        </div>

                    <ButtonRoute
                    title='Produto'
                    route='product'
                    bgColor='bg-secondary'
                    />
                </div>
            </main>
        </>
    )
}

function Introduction() {
    return (
        <>
            <div className="flex flex-col items-center justify-center gap-9 mb-8 mt-8">
                <img className="w-52" src={sustainable_energy} alt="" />

                <div className="w-64 text-justify">
                    <p className="mb-7 text-xl">“A vida é como andar de bicicleta. Para manter o equilíbrio, você precisa se manter em movimento.”</p>
                    <p className=""> - Albert Einstein</p>
            
                </div>
            </div>
        </>
    )
}

function CardsAbout() {
    return (
        <>
            <div className="flex flex-col items-center bg-secondary w-full gap-9 pb-7 pt-7 justify-around">
                <CardAnimation
                title='Missão'
                text='Pedro Henrique Martins Alves dos Santos Pereira'
                />

                <CardAnimation 
                title='Visão'
                text='Pedro Henrique Martins Alves dos Santos Pereira José Corderio'
                />

                <CardAnimation 
                title='Valores'
                text='Pedro Henrique Martins Alves dos Santos Pereira José Corderio'
                />
                <ButtonRoute
                route='about'
                title='Quem somos'
                bgColor='bg-primary'
                />
            </div>
            
        </>
    )
}

function CardAnimation( {title, text} ) {

    const [isOpen, setIsOpen] = useState(false)

    const toogleCard = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <div className={`relative flex items-center flex-wrap border-2 rounded-lg border-quaternary gap-8 ${isOpen ? 'w-72' : 'w-56'}`}>
                <div className="flex w-full justify-between items-center p-5">
                    <h3 className={`text-2xl transition-transform duration-500 ease-in-out ${isOpen ? 'opacity-70 scale-125 translate-y-4 translate-x-4' : 'opacity-100 scale-100 translate-y-0 translate-x-0'}`}>
                        {title}
                    </h3>
                    <button 
                    className= {`self-end transition-transform duration-700 ease-in-out ${isOpen ? "rotate-180 scale-110" : "rotate-0 scale-100"}`}
                    onClick={toogleCard}>
                        {isOpen ? <MdOutlineExpandLess size={30}/> : <GoPlus size={30}/> }
                    </button>
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

function ButtonRoute( { route, title, bgColor } ) {
    return(
        <>
            <NavLink to={route} className={`flex items-center justify-center rounded-xl hover:opacity-70 ${bgColor} text-quaternary h-12 w-36`}>{title}</NavLink>
        </>
    )
}