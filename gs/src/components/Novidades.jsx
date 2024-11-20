export default function Novidades() {

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
            >
                <label htmlFor="emailNovidades">Digite seu email para receber as novidades</label>
                <input 
                className="text-black border-secondary bg-white border-4 rounded-md h-8"
                type="text" 
                id="emailNovidades"/>
                <button type="submit" className="bg-quaternary font-bold text-secondary hover:border-primary hover:text-primary border-secondary border-4 w-24 h-8 rounded-sm mt-10 transition-colors duration-500 ease-in-out">Enviar</button>
            </form>
        </>
    )
}