import { Link } from "react-router-dom"


export function Navbar(){
    return(
        <>
        <div className="navbar">
            <Link to="/">
                <button>Home</button>
            </Link>

            <Link to="/Items">
                <button>Items</button>
            </Link>

            <Link to="/Login">
                <button>Login</button>
            </Link>
        </div>
        </>
    )
}