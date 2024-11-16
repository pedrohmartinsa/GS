import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Contact() {
    return(
        <>
            <main className="flex flex-col items-center">

                <form onSubmit="" className="flex flex-col p-6 gap-4" required>

                    <h3 className="text-xl">Caso tenha dúvidas ou queira enviar um feedback:</h3>
                
                    <div className="flex flex-col">
                        <label htmlFor="name">Nome</label>
                        <input 
                        type="text"
                        id="name"
                        className="text-black border-secondary bg-white border-4 rounded-md h-8 "
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="email">Email</label>
                        <input 
                        type="email"
                        id="email"
                        className="text-black border-secondary bg-white border-4 rounded-md h-8 "
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="mensagem">Mensagem</label>
                        <textarea  
                            id="mensagem"
                            cols="30"
                            rows="10"
                            className="text-black border-secondary bg-white border-4 rounded-md"
                            value=""
                        >
                        </textarea>

                        <button type="submit" className="bg-quaternary font-bold text-secondary hover:border-primary hover:text-primary border-secondary border-4 w-24 h-8 rounded-sm mt-10 transition-colors duration-500 ease-in-out">Enviar</button>
                    </div>

                </form>

                <div>
                    <h3 className="">Redes Sociais</h3>

                    <div className="flex">
                        <AiFillInstagram size={50}/>
                        <IoLogoWhatsapp size={50}/>
                        <FaSquareXTwitter size={50}/>
                    </div>
                </div>
            </main>
        </>
    )
}