import { Link } from "react-router";
import Logo from "../assets/Ratcon_logo.png"
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
const Navbar = () => {
    const [menuBar, setMenuBar] = useState(false)

    const toggleNavbar = ()=>{
        setMenuBar(!menuBar)
    }
    return ( 
        <nav className="px-10 md:px-20 py-3 relative flex justify-between items-center bg-slate-50 shadow-md z-20 ">
            <div className="logo md:w-3/12">
                <img src={Logo} alt="Ratcon Logo" className="w-2/12" />
            </div>
            <div className={`links ${menuBar ? "block" : "hidden"} absolute bg-slate-50 h-screen md:h-0 left-0 top-20 md:top-0 p-10 md:relative list-none md:p-2 md:flex items-center gap-x-8 md:block`}>
                <li onClick={()=>{setMenuBar(false)}} className="mb-5 md:mb-0"><Link to='/'>Home</Link></li>
                <li onClick={()=>{setMenuBar(false)}} className="mb-5 md:mb-0"><Link to='/about'>About</Link></li>
                <li onClick={()=>{setMenuBar(false)}} className="mb-5 md:mb-0"><Link to='/services'>Services</Link></li>
                <li onClick={()=>{setMenuBar(false)}} className="mb-5 md:mb-0"><Link to='/projects'>Projects</Link></li>
                <li onClick={()=>{setMenuBar(false)}} className="mb-5 md:mb-0"><Link to='/contact'>Contact</Link></li>
                
                <button className="px-4 py-2 bg-yellow-500 rounded-md hover:bg-white hover:text-yellow-500 hover:border transition-all duration-500 ">
                    Get a Quote
                </button>
               
            </div>
             <div  onClick={toggleNavbar}  className="menu-bar p-2 md:hidden">
                {
                    menuBar ? <FaX size={25}/> :  <FaBars size={25}/>
                }
               
            </div>
        </nav>
     );
}
 
export default Navbar;