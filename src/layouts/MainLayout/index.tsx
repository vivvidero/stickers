import { FC, ReactNode } from "react"
import { Sidebar } from "../../components"

interface Props {
    children: ReactNode
}

export const MainLayout: FC<Props> = ({ children }) => {
    return (
        <main className='w-full h-screen bg-slate-300 p-4 flex flex-col md:flex-row gap-3'>
            <Sidebar />
            {children}
        </main>
    )
}
