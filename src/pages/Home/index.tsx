import { MainLayout } from "../../layouts"
import base from '../../assets/images/00. Base.png'
import { Outlet } from "react-router-dom"
import { useContext } from 'react'
import { ImagenesContext } from "../../context/ImagenesContext"


export const Home = () => {

    const { imagenes } = useContext(ImagenesContext)

    return (
        <MainLayout>
            <Outlet />
            <div className='w-10/12 '>
                <div className='relative'>
                    <img src={base} alt='' className='w-full absolute z-10' />
                    <img src={`./src/assets/images/Pisos/${imagenes.pisos}.png`} alt='' className='w-full absolute z-20' />
                    <img src={`./src/assets/images/Muros/${imagenes.muros}.png`} alt='' className='w-full absolute z-20' />
                    <img src={`./src/assets/images/Salpicaderos/${imagenes.salpicaderos}.png`} alt='' className='w-full absolute z-20' />
                    <img src={`./src/assets/images/Mueble Alto/${imagenes.mueblealto}.png`} alt='' className='w-full absolute z-20' />
                    <img src={`./src/assets/images/Mueble Bajo/${imagenes.mueblebajo}.png`} alt='' className='w-full absolute z-20' />
                </div>
            </div>
        </MainLayout>
    )
}
