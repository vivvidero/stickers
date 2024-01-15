import { Navigate, useParams } from "react-router-dom"
import { caracteristicas } from "../../data/caracteristicas"
import { useContext } from 'react'
import { ImagenesContext } from "../../context/ImagenesContext"


export const Caracteristicas = () => {

    const { element } = useParams()
    const { imagenes, setImagenes } = useContext(ImagenesContext)

    const zona: keyof typeof caracteristicas = element as keyof typeof caracteristicas || 'pisos';

    const handleImagen = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!element) {
            return
        }
        setImagenes({
            ...imagenes,
            [element as string]: e.currentTarget.name
        })

    }


    if (!element) {
        return <Navigate to={'/'} />
    }

    return (
        <nav>
            <ul className="flex flex-wrap gap-2 w-full p-3 bg-vivvi rounded-xl">
                {caracteristicas[zona]?.map((carac: string) => {
                    return (
                        <button key={carac} name={carac} onClick={handleImagen} className="bg-dorado p-2 rounded-md hover:bg-slate-900 hover:text-white"> {carac} </button>
                    )
                })}
            </ul>
        </nav>
    )
}
