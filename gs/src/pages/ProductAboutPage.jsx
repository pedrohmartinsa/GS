import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { IoChevronBackCircle } from "react-icons/io5";

export default function ProductAboutPage() {

    const {id, foto, title, repositorio, sobre} = useParams();

    return(
        <>
            <main className="md:flex md:flex-col md:items-center h-screen">
                <div className="relative flex justify-center gap-14 mb-14 pt-16">
                    <Link
                    className="absolute left-0 top-5 md:w-full md:bottom-0 hover:text-slate-500" 
                    to="/product"
                    >
                        <IoChevronBackCircle className="md:size-16 size-12"/>
                    </Link>
                    <h2 className="text-5xl text-center md:text-8xl pt-1">{title}</h2>
                </div>
                <div className="flex flex-col md:flex-row gap-5 items-center justify-center">
                    <img className="w-56 md:w-auto" src={`/${foto}`} alt=""/>
                    <p className="border-2 border-secondary p-6 rounded-lg w-56 md:w-96 h-auto text-xl md:text-4xl text-justify">{sobre}</p>
                </div>
                
            </main>

            
        </>
    )
}