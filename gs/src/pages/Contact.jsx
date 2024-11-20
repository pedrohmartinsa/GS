import { useState } from "react";
import { FaCheck } from "react-icons/fa";

import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";

import contato from './assets/e-mail.png' 


export default function Contact() {

    return(
        <>
            <main className="flex flex-col items-center gap-16 mb-10">
                <Introduction/>
                <Forms/>
                <SocialMedia/>
                {localStorage.getItem('email') === null ? <Novidades/> : <EmailEnviado/>}
            </main>
        </>
    )
}

function Introduction() {
    return(
        <>
            <div className="flex flex-col gap-10 items-center w-56 md:w-[700px] mt-10">
                <h3 className="text-5xl text-justify md:text-8xl">Contato</h3>
                <img  className="md:w-72" src={contato} alt="" />
            </div>
        </>
    )
}

function Forms() {

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
            <form 
            onSubmit={handleContato} 
            className="flex flex-col p-6 gap-4" 
            required
            >

                
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
        </>
    )
}

function SocialMedia() {
    return(
        <>
            <div className="flex flex-col items-center gap-8 mb-9 w-full">
                <h3 className="text-2xl">Redes Sociais</h3>

                <div className="flex gap-6 mr-4">
                    <a href="" className="text-secondary hover:text-primary transition-colors duration-500 ease-in-out"><AiFillInstagram size={60}/></a>
                    <a href="" className="text-secondary hover:text-primary transition-colors duration-500 ease-in-out"><IoLogoWhatsapp size={60}/></a>
                    <a href="" className="text-secondary hover:text-primary transition-colors duration-500 ease-in-out"><FaSquareXTwitter size={60}/></a>
                </div>
            </div>
        </>
    )
}

function Novidades() {
    const handleNovidades = () => {
        return(
            <>
            </>
        )
    }

    return(
        <>
            <form
            onSubmit={handleNovidades}
            className="flex flex-col border-2 border-primary rounded-md p-4 gap-4"
            required
            >
                <label htmlFor="emailNovidades">Digite seu email para receber as novidades</label>
                <input
                onChange={(e) => localStorage.setItem( 'email', e.target.value)} 
                className="text-black border-secondary bg-white border-4 rounded-md h-8"
                type="text" 
                id="emailNovidades"/>
                <button type="submit" className="bg-quaternary font-bold text-secondary hover:border-primary hover:text-primary border-secondary border-4 w-24 h-8 rounded-sm mt-5 transition-colors duration-500 ease-in-out">Enviar</button>
            </form>
        </>
    )
}

function EmailEnviado() {
    return(
        <>
            <div className="mx-3 flex flex-col border-2 border-primary rounded-md p-4 gap-4">
                <div className="flex items-center gap-7">
                    <FaCheck/>
                    <p>Já tem um email cadastrado.</p>
                </div>
                <p>Email cadastrado: {localStorage.getItem('email')}</p>
            </div>
        </>
    )
}