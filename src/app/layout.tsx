import type {Metadata} from 'next'
import '../styles/global.css'
import '../styles/index.css'
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
    title: 'Stefan Vranjes Portfolio',
    description: 'Frontend Developer Portfolio',
    icons: {
        icon: '/public/favicon.ico',
    }
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <head><title>Stefan Vranjes - Portfolio</title></head>
        <body>
        <Navbar/>
        <main className="px-3 py-4 max-w-5xl mx-auto">{children}</main>
        </body>
        </html>
    )
}