import Logo from "./Logo"

import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Footer() {
    return (
        <>
            <div className="flex flex-col justify-center gap-16 bg-primary h-52">
                <div className="flex items-center justify-around text-tertiary">
                    <Logo/>
                    <div className="flex flex-col items-center gap-4 ">
                        <div className="flex gap-3">
                            <a href="" className="text-quaternary hover:text-secondary transition-colors duration-500 ease-in-out"><AiFillInstagram size={30}/></a>
                            <a href="" className="text-quaternary hover:text-secondary transition-colors duration-500 ease-in-out"><IoLogoWhatsapp size={30}/></a>
                            <a href="" className="text-quaternary hover:text-secondary transition-colors duration-500 ease-in-out"><FaSquareXTwitter size={30}/></a>
                        </div>
                        <p>passoenergetico@gmail.com</p>
                    </div>
                </div>
                <h3 className="text-quaternary text-xs self-center px-2 text-nowrap"> Passo Energético 2024 © Todos os direitos reservados </h3>
            </div>
        </>
    )
}