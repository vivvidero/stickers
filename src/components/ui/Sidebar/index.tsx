import { Link } from "react-router-dom"

export const Sidebar = () => {
    return (
        <aside className="w-52">
            <nav>
                <ul className="flex md:flex-col gap-3">    
                    <Link to={'/pisos'} className='bg-slate-700 text-white p-4 rounded-md hover:bg-slate-900'>Pisos</Link>
                    <Link to={'/muros'} className='bg-slate-700 text-white p-4 rounded-md hover:bg-slate-900'>Muros</Link>
                    <Link to={'/salpicaderos'} className='bg-slate-700 text-white p-4 rounded-md hover:bg-slate-900'>Salpicaderos</Link>
                    <Link to={'/mueblealto'} className='bg-slate-700 text-white p-4 rounded-md hover:bg-slate-900'>Muebles alto</Link>
                    <Link to={'/mueblebajo'} className='bg-slate-700 text-white p-4 rounded-md hover:bg-slate-900'>Mueble bajo</Link>
                </ul>
            </nav>
        </aside>
    )
}
