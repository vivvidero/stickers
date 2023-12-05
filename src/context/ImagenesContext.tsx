import { Dispatch, FC, ReactNode, SetStateAction, createContext, useState } from 'react'

interface Imagenes {
    pisos: string,
    muros: string,
    salpicaderos: string,
    mueblealto: string,
    mueblebajo: string
}

interface ImagenesContextProps {
    imagenes: Imagenes
    setImagenes: Dispatch<SetStateAction<Imagenes>>,
}

interface Props {
    children: ReactNode
}

export const ImagenesContext = createContext<ImagenesContextProps>({} as ImagenesContextProps)

export const ImagenesProvider: FC<Props> = ({ children }) => {

    const [imagenes, setImagenes] = useState<Imagenes>({
        pisos: '',
        muros: '',
        salpicaderos: '',
        mueblealto: '',
        mueblebajo: ''
    })

    return (
        <ImagenesContext.Provider value={{setImagenes, imagenes}}>
            {children}
        </ImagenesContext.Provider>
    )

}