import { Link } from "react-router-dom"

export const Sidebar = () => {
    return (
        <aside>
            <nav>
                <ul className="flex gap-3">    
                    <Link to={'/pisos'} className='bg-vivvi text-white p-2 rounded-md hover:bg-slate-900'>Pisos</Link>
                    <Link to={'/muros'} className='bg-vivvi text-white p-2 rounded-md hover:bg-slate-900'>Muros</Link>
                    <Link to={'/salpicaderos'} className='bg-vivvi text-white p-2 rounded-md hover:bg-slate-900'>Salpicaderos</Link>
                    <Link to={'/mueblealto'} className='bg-vivvi text-white p-2 rounded-md hover:bg-slate-900'>Muebles alto</Link>
                    <Link to={'/mueblebajo'} className='bg-vivvi text-white p-2 rounded-md hover:bg-slate-900'>Mueble bajo</Link>
                </ul>
            </nav>
        </aside>
    )
}
