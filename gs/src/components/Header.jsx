import Logo from "./Logo"
import Nav from "./Nav"
import { Link } from "react-router-dom"
export default function Header() {
    return(
        <>
            <header className="bg-primary text-tertiary flex-wrap sticky top-0 z-[20] mx-auto flex w-full items-center justify-between md:justify-around p-8 border-b border-secondary">
                <Link to="/"><Logo/></Link>
                <Nav/>
            </header>
        </>
    )
}