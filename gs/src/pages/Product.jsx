
import LinkModel from '../components/LinkModel'
import motor from './assets/motor-eletrico.png'
import aboutProduct from '../data/aboutProduct.json'

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
            </main>
        </>
    )
}

