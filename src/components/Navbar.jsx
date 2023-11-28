import { NavLink } from "react-router-dom"
import home from "../assets/images/home.png";

const Navbar = () => {
    return (
        <header className="header backdrop-blur-lg bg-opacity-40 bg-black font-nunito  shadow-lg rounded-md">
            <NavLink to="/" className="w-10 h-10 rounded-lg bg-transparent border-b-4 border-pink-300  p-1
            items-center justify-center flex shadow-lg">
                <img src={home} alt=""home  className="w-5"/>

            </NavLink>
            <nav className="flex text-lg gap-7 border-b-4 border-pink-300 shadow-lg  p-1  rounded-lg font-nunito ">
                <NavLink to="/about"
                    className={({ isActive }) =>
                        !isActive ? 'text-white' : 'text-pink-200'}>
                    About
                </NavLink>
            </nav>
            <nav className="flex text-lg gap-7 border-b-4 border-pink-300 shadow-lg  p-1  rounded-lg">
                <NavLink to="/projects"
                    className={({ isActive }) =>
                        !isActive ? 'text-white' : 'text-pink-200'}>
                    Projects
                </NavLink>
            </nav>
            <nav className="flex text-lg gap-7 border-b-4 border-pink-300 shadow-lg  p-1  rounded-lg">
                <NavLink to="/contact"
                    className={({ isActive }) =>
                        !isActive ? 'text-white' : 'text-pink-200'}>
                    Contact
                </NavLink>
            </nav>
        </header>
    )
}

export default Navbar