import { IoLogoDesignernews } from "react-icons/io";
import { NavLink } from "react-router-dom";

export default function Logo() {
    return(
        <>
            <NavLink 
            to = "/"
            className="text-quaternary hover:text-secondary transition-colors duration-500 ease-in-out"
            >
                <IoLogoDesignernews size={50}/>
            </NavLink> 
        </>
    )
}