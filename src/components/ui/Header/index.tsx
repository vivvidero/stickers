import { Sidebar } from '..'
import logo from '/assets/images/Logo-verde.png?url'
export const Header = () => {
    return (
        <header className='w-full flex justify-between items-center'>
            <div>
                <img src={logo} alt='logo' />
            </div>
            <nav>
                <Sidebar />
            </nav>
        </header>
    )
}
