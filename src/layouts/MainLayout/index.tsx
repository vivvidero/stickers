import { FC, ReactNode } from "react"
import { Header } from "../../components"

interface Props {
    children: ReactNode
}

export const MainLayout: FC<Props> = ({ children }) => {
    return (
        <main className='w-full min-h-screen p-4 flex flex-col gap-3'>
            <Header />
            <section className="flex flex-col gap-3 h-screen">
               {/*  <Sidebar /> */}
                {children}
            </section>
        </main>
    )
}
