// LIBS
import { useState } from "react"
import { Auth } from "../../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

// COMPONENTS
import Navbar from "../../components/Navbar"


export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLoginSubmit = (e) => {
        e.preventDefault()
        console.log("Before login", email, password)

        signInWithEmailAndPassword(Auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("After login", user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });

    }

    return (
        <div className="w-full min-h-screen flex justify-center items-center bg-gray-100">
            <Navbar />

            <div className="w-full max-w-screen-sm p-6 h-[400px] flex flex-col justify-between rounded-sm shadow-sm drop-shadow-sm bg-white">
                <div className="flex flex-col gap-1.5">
                    <h1 className="text-3xl font-medium">LOGIN</h1>
                    <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, nobis?</p>
                </div>
                <form onSubmit={handleLoginSubmit} className="w-full flex flex-col gap-4">
                    <div className="w-full flex flex-col gap-1.5">
                        <label htmlFor="email">E-Mail</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" placeholder="user@mail.com" autoComplete="off" required className="w-full p-2.5 border outline-none focus:border-blue-500" />
                    </div>
                    <div className="w-full flex flex-col gap-1.5">
                        <label htmlFor="password">Password</label>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" placeholder="******" autoComplete="off" required className="w-full p-2.5 border outline-none focus:border-blue-500" />
                    </div>
                    <button className="w-full p-2.5 bg-blue-500 hover:bg-blue-600 text-white duration-200">Register</button>
                </form>
                <p className="text-center">Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
    )
}