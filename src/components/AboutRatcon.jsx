import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import { Link } from "react-router";

const AboutRatcon = () => {
    return ( 
        <main className="px-5 md:px-20 my-10 py-15 text-center bg-slate-50">
            <div className="md:w-10/12 mx-auto text-center px-6 py-4 my-5 shadow-md relative">
                <div className="open-quote absolute bottom-2 right-3">
                    <FaQuoteRight size={30}/>
                </div>
                 <div className="open-quote absolute top-2 left-3">
                    <FaQuoteLeft size={30}/>
                </div>
                <p className="my-5 py-3 text-lg">
                    Ratcon Construction Company Ltd is one of the top Construction companies in its region in Nigeria. Being established in 1990, the company has many years of experience in the contracting and construction business and has developed tremendously over the past few decades. With its tentacles spread throughout the southern region in the country, Ratcon has successfully executed many construction and infrastructural projects in more than 7 states and continues to evolve to better service the Nigerian nation’s growth.
                </p>
                
            </div>
             <button type="submit"  className="bg-yellow-600 text-white rounded-md hover:bg-white hover:text-black hover:border border-yellow-500 transition-all duration-500 px-5 py-3">
                <Link to="/about">Read More ...</Link>
            </button>
        </main>
     );
}
 
export default AboutRatcon;