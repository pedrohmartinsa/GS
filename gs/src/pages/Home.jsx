import { GoPlus } from "react-icons/go";
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
                
                <div className="flex flex-col items-center bg-tertiary w-full">
                    <div className="flex items-center h-12 w-52 border-2 rounded-lg border-secondary">
                        <div className="flex w-full justify-between items-center p-5">
                            <h3 className="text-2xl">Missão</h3>
                            <GoPlus size={30}/>
                        </div>
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