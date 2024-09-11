import Logo from "../Logo"
import Brand from "../Brand"

export default function Navbar() {
    return (
        <nav className="w-full h-14 px-6 border-b shadow-sm flex items-center justify-between bg-blue-500 border-white text-white">
            <div className="flex items-center gap-2">
                <Logo />
                <Brand />
            </div>
            <div className="flex items-center gap-2">
                <button className="font-medium hover:underline hover:underline-offset-8">Login</button>
                <span>|</span>
                <button className="font-medium hover:underline hover:underline-offset-8">Register</button>
            </div>
        </nav>
    )
}