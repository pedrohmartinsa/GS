import Name from "../components/Name";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { GoPlus } from "react-icons/go";
import { MdOutlineExpandLess } from "react-icons/md";

import { LuSwords } from "react-icons/lu";
import { MdOutlineDiamond } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";


import global from './assets/global.png'

export default function About() {
    return(
        <>
           <main className="flex flex-col items-center gap-4 pt-10 pb-10">
                <Introduction/>
                <Name/>
                <MVV/>
           </main>
        </>
    )
}

function Introduction() {
    return(
        <>
        <div className="flex flex-col md:flex-row gap-6 items-center w-56 md:w-[700px] mb-10">
            <img className="md:w-72" src={global} alt="globo em perigo" />
            <div className="flex flex-col gap-6">
                <p className="text-justify md:text-lg">"Estamos perdendo a corrida para as mudanças climáticas. Esse é o desafio da nossa geração: ganhar a batalha contra o tempo" - Emanuel Macron</p>
                <p>E a solução para isso é a:</p>
            </div>
        </div>
        </>
    )
}

function MVV() {
    return(
        <div className="px-2 sm:px-5">
            <div className="flex flex-col md:grid md:grid-cols-2 md:gap-0 gap-16 mt-10">
                <div className="flex flex-col gap-10 ">
                    <div className="relative flex flex-col gap-4 items-center w-72 border-2 border-primary rounded-md p-5">
                        <div className="absolute left-2 top-2"><LuSwords size={30}/></div>
                        <h3 className="text-4xl">Missão</h3>
                        <p className="text-justify md:text-lg">Promover a sustentabilidade global por meio da inovação, transformando energia cinética em energia limpa e renovável com a utilização de placas piezoelétricas, contribuindo para um futuro mais sustentável e responsável para as próximas gerações.</p>
                    </div>
                    <div className="relative flex flex-col gap-4 items-center w-72 border-2 border-primary rounded-md p-5">
                        <div className="absolute left-2 top-2"><IoEyeOutline size={30}/></div>
                        <h3 className="text-4xl">Visão</h3>
                        <p className="text-justify md:text-lg">Ser referência mundial em tecnologias de conversão de energia cinética em elétrica, liderando a transição para fontes de energia sustentáveis, enquanto capacitamos comunidades e organizações a adotar práticas ecológicas inovadoras.</p>
                    </div>
                </div>
                <div className="relative flex flex-col gap-4 items-center w-72 md:w-96 border-2 border-primary rounded-md p-5">
                    <div className="absolute left-2 top-2"><MdOutlineDiamond size={30}/></div>
                    <h3 className="text-4xl">Valores</h3>
                    <CardAnimation
                    title="Sustentabilidade"
                    text="Compromisso com a preservação do meio ambiente e a redução de impactos ambientais."
                    />
                    <CardAnimation
                    title="Inovação"
                    text="Investir continuamente em pesquisa e desenvolvimento para criar soluções tecnológicas eficientes e acessíveis."
                    />
                    <CardAnimation
                    title="Responsabilidade Social"
                    text="Contribuir para o bem-estar das comunidades, promovendo acesso a energia limpa."
                    />
                    <CardAnimation
                    title="Colaboração"
                    text="Trabalhar em conjunto com parceiros, governos e organizações para maximizar o impacto global."
                    />
                    <CardAnimation
                    title="Eficiência"
                    text="Garantir que nossas soluções sejam economicamente viáveis e otimizem o uso de recursos naturais."
                    />
                </div>
            </div>
        </div>
    )
}


function CardAnimation( {title, text} ) {

    const [isOpen, setIsOpen] = useState(false)

    const toogleCard = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <div className={`flex flex-col md:w-72 w-56 border-2 hover:border-primary rounded-lg border-quaternary  gap-4 transition-all duration-500 ease-in-out`}>
                <div className="flex w-full justify-between items-center p-5 md:overflow-hidden md:min-h-[100px]">
                    <h3 className={`text-xl transition-transform duration-500 ease-in-out ${isOpen ? 'opacity-70 scale-125 translate-y-4 translate-x-4' : 'opacity-100 scale-100 translate-y-0 translate-x-0'}`}>
                        {title}
                    </h3>
                    <button
                    className= {`transition-transform duration-700 ease-in-out ${isOpen ? "rotate-180 scale-110" : "rotate-0 scale-100"}`}
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