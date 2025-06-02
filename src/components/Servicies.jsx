import { FaBuilding, FaHome, FaRoad } from "react-icons/fa";
import { FaBridge } from "react-icons/fa6";

const Service = () => {
    return ( 
        <main className="px-5 md:px-20 my-10">
            <div className="p-4">
                <h2 className="font-bold text-2xl my-5">Our Services</h2>
                <div className="my-3">
                    <h3 className="text-3xl font-bold">Comprehensive Construction Solutions</h3>
                    <p className="my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, placeat!</p>

                </div>

                <div className="projects grid grid-cols-1 my-5 md:grid-cols-4 gap-5">
                    <div className="project p-4 hover:scale-95 duration-500 transition-all border rounded-md border-yellow-700">
                        <FaHome size={20} />
                        <div className="text">
                            <h3 className="font-bold text-lg my-2">Quarries</h3>
                            <p className="text-yellow-800 my-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, consequatur.</p>
                        </div>
                    </div>
                    <div className="project p-4 hover:scale-95 duration-500 transition-all border rounded-md border-yellow-700">
                        <FaBuilding size={20} />
                        <div className="text">
                            <h3 className="font-bold text-lg my-2">Building Construction</h3>
                            <p className="text-yellow-800 my-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, consequatur.</p>
                        </div>
                    </div>
                    <div className="project p-4 hover:scale-95 duration-500 transition-all border rounded-md border-yellow-700">
                        <FaRoad size={20} />
                        <div className="text">
                            <h3 className="font-bold text-lg my-2">Road Construction</h3>
                            <p className="text-yellow-800 my-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, consequatur.</p>
                        </div>
                    </div>
                    <div className="project p-4 hover:scale-95 duration-500 transition-all border rounded-md border-yellow-700">
                        <FaBridge size={20} />
                        <div className="text">
                            <h3 className="font-bold text-lg my-2">Bridge Construction</h3>
                            <p className="text-yellow-800 my-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, consequatur.</p>
                        </div>
                    </div>

                </div>
            </div>
        </main>
     );
}
 
export default Service;