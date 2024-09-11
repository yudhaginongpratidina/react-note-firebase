// CONFIGS
import { Firebase } from "../../config/firebase"

// COMPONENTS
import Navbar from "../../components/Navbar"


export default function Home(){

    console.log(Firebase)

    return (
        <div>
            <Navbar />
        </div>
    )
}