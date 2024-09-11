// LIBRARY
import { Link } from "react-router-dom"

// COMPONENTS
import Logo from "../Logo"
import Brand from "../Brand"

export default function Navbar() {
    return (
        <nav className="w-full fixed top-0 z-10 h-14 px-6 border-b shadow-sm flex items-center justify-between bg-blue-500 border-white text-white">
            <div className="flex items-center gap-2">
                <Logo />
                <Brand />
            </div>
            <div className="flex items-center gap-2">
                <Link to="/login" className="font-medium hover:underline hover:underline-offset-8">Login</Link>
                <span>|</span>
                <Link to="/register" className="font-medium hover:underline hover:underline-offset-8">Register</Link>
            </div>
        </nav>
    )
}