import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { IoChevronBackCircle } from "react-icons/io5";

export default function ProductAboutPage() {

    const {id, foto, title, repositorio, sobre} = useParams();

    return(
        <>
            <main className="md:flex md:flex-col md:items-center h-auto mb-10 pt-4">
                <div className="relative flex justify-center items-center md:w-full gap-14 mb-14 pt-16">
                    <Link
                    className="absolute top-0 left-0 md:relative hover:text-slate-500" 
                    to="/product"
                    >
                        <IoChevronBackCircle className="md:size-20 size-12"/>
                    </Link>
                    <h2 className="text-5xl text-center md:text-8xl pt-1">{title}</h2>
                </div>
                <div className="flex flex-col md:flex-row gap-5 items-center justify-center">
                    <img className="w-56  md:w-96" src={`/${foto}`} alt=""/>
                    <p className="border-2 border-secondary p-6 rounded-lg w-72 md:w-96 h-auto text-xl md:text-4xl ">{sobre}</p>
                </div>
                
            </main>

            
        </>
    )
}