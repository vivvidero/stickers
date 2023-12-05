import { useParams } from "react-router-dom"
import { caracteristicas } from "../../data/caracteristicas"
import { useContext } from 'react'
import { ImagenesContext } from "../../context/ImagenesContext"

export const Caracteristicas = () => {

    const { element } = useParams()
    const { imagenes, setImagenes } = useContext(ImagenesContext)

    const handleImagen = (e: React.MouseEvent<HTMLButtonElement>) => {

        setImagenes({
            ...imagenes,
            [element]: e.target.name
        })

    }


    return (
        <nav className="w-44">
            <ul className="flex flex-col gap-2 w-full">
                {caracteristicas[element]?.map((carac: string) => {
                    return (
                        <button key={carac} name={carac} onClick={handleImagen} className="bg-slate-400  p-4 rounded-md hover:bg-slate-900 hover:text-white"> {carac} </button>
                    )
                })}
            </ul>
        </nav>
    )
}
