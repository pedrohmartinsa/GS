import { Link } from "react-router-dom";
import { IoChevronBackCircle } from "react-icons/io5";
import { useEffect, useState } from "react";
export default function Data() {

    const [dados, setDados] = useState(null);

    useEffect(() => {
        fetch('https://python-gs-2-sem-production.up.railway.app/get_average_energy_generated')
            .then(response => response.json())
            .then(data => setDados(data))
            .catch(err => console.error('Erro ao buscar os dados:', err));
    }, []);

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
                    <h2 className="text-5xl text-center md:text-8xl pt-1">Dados</h2>
                </div>
                <div className="flex flex-col md:flex-row gap-5 items-center justify-center px-5">
                    <img className="w-56  md:w-96" src="/consumo-de-energia.png" alt=""/>
                    <div className="border-2 border-secondary p-6 rounded-lg w-72 md:w-auto max-w-[650px] h-auto text-xl md:text-4xl">
                        {dados ? (
                            <p>O estimado é que para uma força de {Math.round(dados.forca_average)} Newtons (aproximadamente {(dados.forca_average / 9.8).toFixed(2)} Kg) tenha uma média de {Math.round(dados.energia_average)} Joules de energia gerada, o suficiente para manter uma lâmpada acesa por 4 minutos.</p>
                        )
                        :
                        (
                            <p>Carregando dados...</p>
                        )}
                </div>
                </div>
            </main>
        </>
    )
}
