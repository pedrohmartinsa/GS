import { useState } from "react";
import { GoPlus } from "react-icons/go";
import { MdOutlineExpandLess } from "react-icons/md";
import sustainable_energy from './assets/sustainable-energy.png'
import { AnimatePresence, motion } from "framer-motion";


export default function Home() {

    return(
        <>
            <main className="flex flex-col justify-center items-center h-screen">
                
                <div className="flex flex-col items-center justify-center gap-9 h-auto">
                    <img className=" w-52" src={sustainable_energy} alt="" />

                    <div className="w-64 text-justify gap-">
                        <p className="mb-7 text-xl">“A vida é como andar de bicicleta. Para manter o equilíbrio, você precisa se manter em movimento.”</p>
                        <p className=""> - Albert Einstein</p>
                
                    </div>
                </div>
                
                <div className="flex flex-col items-center bg-tertiary w-full">
                    
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
                </div>
            </main>
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
            <div className={`flex items-center flex-wrap border-2 rounded-lg border-secondary ${isOpen ? 'w-72' : 'w-56'}`}>
                <div className="flex w-full justify-between items-center p-5">
                    <h3 className={`text-2xl transition-transform duration-500 ease-in-out ${isOpen ? 'opacity-70 scale-125 translate-x-4' : 'opacity-100 scale-100 translate-x-0'}`}>
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