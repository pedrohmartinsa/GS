import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { GoPlus } from "react-icons/go";
import { MdOutlineExpandLess } from "react-icons/md";

import CardAnimation from "../components/CardAnimation";

import { LuSwords } from "react-icons/lu";
import { MdOutlineDiamond } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";

import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";

import placa from "./assets/placa-de-circuito.png"
import sustainable_energy from "./assets/sustainable-energy.png"

import Name from "../components/Name";

export default function Home() {

    return(
        <>
            <main className="flex flex-col justify-center items-center h-[100%]">
                <Introduction/>
                <CardsAbout/>
                <CardProducts/>
                <Contacts/>
            </main>
        </>
    )
}

function Introduction() {
    return (
        <>
            <div className="flex flex-col items-center justify-center gap-16 mb-8 md:mb-20 md:mt-20 mt-8">
                <Name/>
                <div className="flex flex-col md:flex-row items-center justify-center gap-9 md:gap-20">
                    <img className="w-52" src={sustainable_energy} alt="" />

                    <div className="w-64 text-justify">
                        <p className="mb-7 text-xl">“A vida é como andar de bicicleta. Para manter o equilíbrio, você precisa se manter em movimento.”</p>
                        <p className=""> - Albert Einstein</p>
                    </div>
                </div>
            </div>
        </>
    )
}

function CardsAbout() {

    return (
        <>
            <div className="flex flex-col items-center bg-secondary w-full md:h-[500px] gap-9 pb-7 pt-7 justify-around">
                <div className="flex flex-col md:flex-row gap-9">
                    <CardAnimation
                    title='Missão'
                    text='Pedro Henrique Martins Alves dos Santos Pereira'
                    icon= {<LuSwords size={80}/>}
                    />

                    <CardAnimation 
                    title='Visão'
                    text='Pedro Henrique Martins Alves dos Santos Pereira José Corderio'
                    icon= {<IoEyeOutline size={80}/>}
                    />

                    <CardAnimation 
                    title='Valores'
                    text='Pedro Henrique Martins Alves dos Santos Pereira José Corderio'
                    icon={<MdOutlineDiamond size={80}/>}
                    />
                </div>
                <ButtonRoute
                route='about'
                title='Quem somos'
                bgColor='bg-primary'
                />
            </div>
            
        </>
    )
}

function CardProducts() {

    const [isOpen, setIsOpen] = useState(false)

    const toggleCard = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <div className="flex flex-col items-center justify-around gap-9">
                
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
        </>
    )
}

function Contacts() {
    return (
        <>
            <div className="flex flex-col items-center bg-secondary w-full mt-10 pb-10">
                <div className="text-tertiary flex justify-around p-7 mr-3 mt-7 mb-7 w-96">
                    <a href="" className="text-quaternary hover:text-primary transition-colors duration-500 ease-in-out"><AiFillInstagram size={60}/></a>
                    <a href="" className="text-quaternary hover:text-primary transition-colors duration-500 ease-in-out"><IoLogoWhatsapp size={60}/></a>
                    <a href="" className="text-quaternary hover:text-primary transition-colors duration-500 ease-in-out"><FaSquareXTwitter size={60}/></a>
                </div>
                <div className="self-center">
                    <ButtonRoute
                    route="contact"
                    title="Contato"
                    bgColor="bg-primary"
                    />
                </div>
            </div>
        </>
    )
}

function ButtonRoute( { route, title, bgColor } ) {
    return(
        <>
            <NavLink to={route} className={`flex items-center justify-center rounded-xl hover:opacity-70 ${bgColor} text-quaternary h-12 w-36 md:h-20 md:w-60 md:text-2xl`}>{title}</NavLink>
        </>
    )
}