import { SlEnergy } from "react-icons/sl";
import { FaTree } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";
import sustainable_energy from './assets/sustainable-energy.png'

export default function Home() {
    return(
        <>
            <main className="flex flex-col justify-center items-center h-screen">
                
                <div className="flex flex-col items-center justify-center gap-9 h-auto">
                    <img className=" w-52" src={sustainable_energy} alt="" />

                    <div className="w-64 text-justify gap-">
                        <p className="mb-7 text-xl">“A vida é como andar de bicicleta. Para manter o equilíbrio, você precisa se manter em movimento.”</p>
                        <p className=""> - Albert Einstein</p>
                
                    </div>
                </div>
                
                <div className="bg-tertiary w-full">
                    <div className="flex justify-center items-center h-20 w-32 border-2 border-quaternary">
                        <h3>Missão</h3>
                    </div>

                    <div>
                        <h3>Visão</h3>
                    </div>

                    <div>
                        <h3>Valores</h3>
                    </div>
                </div>
            </main>
        </>
    )
}