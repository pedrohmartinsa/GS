import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { IoChevronBackCircle } from "react-icons/io5";

export default function ProductAboutPage() {

    const {id, foto, title, repositorio, sobre} = useParams();

    return(
        <>
            <main className="h-screen">
                <Link
                    className="hover:text-slate-500" 
                    to="/product"
                    >
                        <IoChevronBackCircle size={50}/>
                </Link>
                <div className="flex flex-col items-center gap-14 mb-14">
                    <h2 className="text-5xl md:text-8xl">{title}</h2>
                    <img className="w-56 md:w-auto" src={`/${foto}`} alt="" />
                </div>
            </main>

            <p>{sobre}</p>
            <h1>{id}</h1>
        </>
    )
}