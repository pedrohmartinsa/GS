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
                    <div className="flex gap-3">
                        <a href=""><AiFillInstagram size={30}/></a>
                        <a href=""><IoLogoWhatsapp size={30}/></a>
                        <a href=""><FaSquareXTwitter size={30}/></a>
                    </div>
                </div>
                <h3 className="font-bold text-xs md:self-center"> Passo Energético 2024 © Todos os direitos reservados </h3>
            </div>
        </>
    )
}