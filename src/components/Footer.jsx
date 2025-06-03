import { useForm } from "react-hook-form";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router";


const Footer = () => {
    const {
            register,
            handleSubmit,
            formState: {errors},
        } = useForm()
    
        const onSubmit = (data)=>{
            console.log("Form Submitted", data);
            
        }
    return ( 
        <footer className="px-5 md:px-20 mt-10">
            <div className="p-4 md:p-8 md:flex justify-center space-y-8">
                <div className="links list-none md:w-4/12 text-center p-2">
                    <li className="mb-1 hover:underline transition-all duration-500 inline mx-2"><Link to='/'>Home</Link></li>
                    <li className="mb-1 hover:underline transition-all duration-500 inline mx-2"><Link to='/about'>About</Link></li>
                    <li className="mb-1 hover:underline transition-all duration-500 inline mx-2"><Link to='/services'>Services</Link></li>
                    <li className="mb-1 hover:underline transition-all duration-500 inline mx-2"><Link to='/projects'>Projects</Link></li>
                    <li className="mb-1 hover:underline transition-all duration-500 inline mx-2"><Link to='/contact'>Contact</Link></li>
                </div>
                <div className="social-icons text-center md:w-4/12">
                    <h2 className="text-lg mb-2">Follow us on</h2>
                    <div className=" flex items-center justify-center text-center gap-7">
                        <a 
                        href="#" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-yellow-800 text-xl underline"
                        >
                        <FaFacebook />
                        </a>
                        <a 
                        href="#" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-yellow-800 text-xl underline"
                        >
                        <FaTwitter />
                        </a>
                        <a 
                        href="#" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-yellow-800 text-xl underline"
                        >
                        <FaInstagram />
                        </a>
                    </div>  
                </div>
                <div className="newsletter md:w-4/12">
                    <form onSubmit={handleSubmit(onSubmit)} className="relative">
                        <div className="relative mb-5">
                            <input {
                                ...register("email", {
                                    required: "Email is required"
                                })
                            }
                            
                            type="text"
                            placeholder="Email"  
                            className="px-6 py-3 border-yellow-600 border w-full rounded-md"
                            />
                            {errors.email && <p className="text-red-600">{errors.description.message}</p> }
                        </div>
                        <div className="absolute top-0 right-0">
                            <button type="submit"  className="bg-yellow-600 text-white rounded-md hover:bg-white hover:text-black hover:border border-yellow-500 transition-all duration-500 px-5 py-3">
                                Subscribe
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <p className="text-center text-sm bg-yellow-600 p-2 text-white mt-10">Ratcon Construction Company Limited &copy; 2023 All Rights Reserved| Powered by FedaNetwork Concepts Nigeria</p>
            <p className="text-center p-2">** This is a sample concept and not official **</p>
        </footer>
     );
}
 
export default Footer;