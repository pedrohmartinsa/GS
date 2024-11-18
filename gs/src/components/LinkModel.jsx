import { Link } from 'react-router-dom'

export default function LinkModel( {json} ) {
    return(
        <>
            {
                json
                .map((detalhes) => (
                    <Link
                    to = {`/product/${detalhes.id}/${detalhes.title}/${detalhes.sobre}/${detalhes.foto}`}
                    className='flex items-center text-xl justify-center bg-primary text-tertiary rounded-md w-48 md:w-64 h-20 md:h-36 transition-colors duration-500 ease-in-out hover:bg-secondary hover:text-primary'
                    >
                        {detalhes.title}
                    </Link>
                ))
                
            }
        </>
    )
}