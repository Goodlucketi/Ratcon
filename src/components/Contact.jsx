import { useForm } from "react-hook-form";
import { FaEdit, FaEnvelope, FaUser } from "react-icons/fa";
// import bgImage from "../assets/ikija-2.jpg"
const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm()

    const onSubmit = (data)=>{
        console.log("Form Submitted", data);
        
    }
    return ( 
        <main className="px-5 py-10 md:px-20 bg-yellow-100">
            <div className="p-4 md:flex items-center justify-between">
                <div className="p-2 md:w-5/12 p-4">
                    <h2 className="font-bold text-3xl md:text-5xl my-5">Ready to Start Your Project?</h2>
                    <p className="text-lg">Contact us today for a consultation and estimate</p>
                </div>
                <div className="form md:w-5/12 p-4">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                        <div className="relative">
                            <div className="absolute top-4 left-3">
                                <FaUser />
                            </div>
                         
                            <input 
                                {
                                ...register("name", {
                                    required:"Name is required",                                
                                })
                                }
                            type="text"
                            placeholder="Name"
                            className="border px-10 py-3 w-full rounded-md"
                            />
                             {errors.name && <p className="text-red-600">{errors.name.message}</p>}
                        </div>
                        <div className="relative">
                            <div className="absolute top-4 left-3">
                                <FaEnvelope />
                            </div>
                           
                            <input 
                                {
                                ...register("email", {
                                    required:"Email is required",
                                    pattern: {
                                        value:/^\S+@\S+$/i,
                                        message: "invalid Email Form"
                                    }
                                
                                })
                                }
                            type="email"
                            placeholder="Email"
                            className="border px-10 py-3 w-full rounded-md"
                            />
                             {errors.email && <p className="text-red-600">{errors.email.message}</p>}
                        </div>
                        <div className="relative">
                            <div className="absolute top-4 left-3">
                                <FaEdit />
                            </div>
                            
                           <textarea
                            {
                                ...register('description', {
                                    required:"Description is Required",
                                    minLength: {
                                        value:10,
                                        message: "Description must be at least 10 characters long"
                                    }
                                })
                            }
                             className="border px-10 py-3 w-full rounded-md"
                             placeholder="Describe your project here"
                           ></textarea>
                             {errors.description && <p className="text-red-600">{errors.description.message}</p>}
                        </div>

                        <div>
                            <button type="submit"  className="bg-yellow-600 text-white rounded-md hover:bg-white hover:text-black hover:border border-yellow-500 transition-all duration-500 px-4 py-3 w-full">
                                Get Quote
                            </button>
                        </div>

                       
                    </form>
                </div>
               
            </div>
        </main>
     );
}
 
export default Contact;