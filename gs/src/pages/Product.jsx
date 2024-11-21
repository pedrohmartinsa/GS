import { Link } from 'react-router-dom'
import LinkModel from '../components/LinkModel'
import motor from './assets/motor-eletrico.png'
import aboutProduct from '../data/aboutProduct.json'
import { useEffect, useState } from 'react'

export default function Product() {
    return(
        <>
            <main className='flex flex-col items-center mb-10 pt-10'>
                <div className='flex flex-col items-center gap-20 w-56 mb-16'>
                    <h2 className='text-5xl text-center md:text-8xl'>Tecnologia Piezoelétrica</h2>
                    <img src={motor} alt="informações"/>
                </div>
                <div className='flex flex-col md:flex-row flex-wrap gap-10 md:p-7'>
                    <LinkModel
                    json= {aboutProduct}
                    />
                </div>
                <Link
                to = "/data"
                className='mt-10 flex items-center text-xl justify-center bg-primary text-tertiary rounded-md w-48 md:w-64 h-20 md:h-36 transition-colors duration-500 ease-in-out hover:bg-secondary hover:text-primary'
                >
                    Dados
                </Link>
            </main>
        </>
    )
}
