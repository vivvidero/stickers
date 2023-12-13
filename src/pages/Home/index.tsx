import { MainLayout } from "../../layouts"
import base from '/assets/images/00. Base.png'
import { Outlet } from "react-router-dom"
import { useContext } from 'react'
import { ImagenesContext } from "../../context/ImagenesContext"


export const Home = () => {

    const { imagenes } = useContext(ImagenesContext)

    return (
        <MainLayout>
            <Outlet />
            <div className='w-full h-screen flex  justify-center py-20 bg-vivvi  rounded-2xl'>
                <div className='w-3/4 h-full relative rounded-2xl overflow-hidden'>
                    <img src={base} alt='' className='w-full object-cover absolute z-10' />
                    <img src={`/assets/images/Pisos/${imagenes.pisos}.png`} alt='' className='w-full  absolute z-20' />
                    <img src={`/assets/images/Muros/${imagenes.muros}.png`} alt='' className='w-full absolute z-20' />
                    <img src={`/assets/images/Salpicaderos/${imagenes.salpicaderos}.png`} alt='' className='w-full absolute z-20' />
                    <img src={`/assets/images/Mueble Alto/${imagenes.mueblealto}.png`} alt='' className='w-full absolute z-20' />
                    <img src={`/assets/images/Mueble Bajo/${imagenes.mueblebajo}.png`} alt='' className='w-full absolute z-20' />
                </div>
            </div>
        </MainLayout>
    )
}
