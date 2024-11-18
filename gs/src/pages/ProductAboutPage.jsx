import { useParams } from "react-router-dom"

export default function ProductAboutPage() {

    const {id, foto, title, repositorio, sobre} = useParams()

    return(
        <>
            <h2>{title}</h2>
            <img src={`/${foto}`} alt="" />
            <p>{sobre}</p>
            <h1>{id}</h1>
        </>
    )
}