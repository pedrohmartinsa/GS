import { useState } from "react";

import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";

import contato from './assets/e-mail.png' 

export default function Contact() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mensagem, setMensagem] = useState('')

    const handleContato = (e) => {
        e.preventDefault()

        if (name === '' || email === '' || mensagem === '') {
            alert('Preencha todos os campos.')
            return;
        }

        console.log(name, email, mensagem);

        setName('');
        setEmail('');
        setMensagem('');

        alert('Mensagem enviada com sucesso!');
    }

    return(
        <>
            <main className="flex flex-col items-center gap-16">

                <div className="flex flex-col gap-6 items-center w-56 md:w-[700px] mt-10">
                    <img  className="md:w-72" src={contato} alt="" />
                    <h3 className="text-xl text-justify md:text-2xl">Caso tenha dúvidas ou queira enviar um feedback:</h3>
                </div>

                <form onSubmit={handleContato} className="flex flex-col p-6 gap-4" required>

                
                    <div className="flex flex-col">
                        <label htmlFor="name">Nome</label>
                        <input 
                        type="text"
                        id="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="text-black border-secondary bg-white border-4 rounded-md h-8 "
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="email">Email</label>
                        <input 
                        type="email"
                        id="email"
                        value={email}
                        onChange={e=> setEmail(e.target.value)}
                        className="text-black border-secondary bg-white border-4 rounded-md h-8 "
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="mensagem">Mensagem</label>
                        <textarea  
                            id="mensagem"
                            cols="30"
                            rows="10"
                            value={mensagem}
                            onChange={e=> setMensagem(e.target.value)}
                            className="text-black border-secondary bg-white border-4 rounded-md"
                        >
                        </textarea>

                        <button type="submit" className="bg-quaternary font-bold text-secondary hover:border-primary hover:text-primary border-secondary border-4 w-24 h-8 rounded-sm mt-10 transition-colors duration-500 ease-in-out">Enviar</button>
                    </div>

                </form>

                <div className="flex flex-col items-center gap-8 mb-9 w-full">
                    <h3 className="text-2xl">Redes Sociais</h3>

                    <div className="flex gap-6 mr-4">
                        <a href="" className="text-secondary hover:text-primary transition-colors duration-500 ease-in-out"><AiFillInstagram size={60}/></a>
                        <a href="" className="text-secondary hover:text-primary transition-colors duration-500 ease-in-out"><IoLogoWhatsapp size={60}/></a>
                        <a href="" className="text-secondary hover:text-primary transition-colors duration-500 ease-in-out"><FaSquareXTwitter size={60}/></a>
                    </div>
                </div>
            </main>
        </>
    )
}