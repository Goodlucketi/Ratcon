import image1 from "../assets/convention-center.jpg"
import image2 from "../assets/factory-infrastructure.jpg"
import image3 from "../assets/dual-road.jpg"
import image4 from "../assets/hotel.jpg"
const Featured = () => {
    return ( 
        <main className="px-5 md:px-20 my-10">
            <div className="p-4">
                <h2 className="font-bold text-2xl my-5">Featured Projects</h2>

                <div className="projects grid grid-cols-1 md:grid-cols-4 gap-10">
                    <div className="project hover:scale-95 duration-500 transition-all shadow-md">
                        <img src={image1} alt="" className="rounded-md h-52 my-3 w-full object-cover" />
                        <div className="text px-4 pb-8 pt-2">
                            <h3 className="font-bold text-lg">Ibom Convention Center</h3>
                            <p className="text-yellow-800">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, consequatur.</p>
                        </div>
                    </div>
                     <div className="project hover:scale-95 duration-500 transition-all shadow-md">
                        <img src={image2} alt="" className="rounded-md h-52 my-3 w-full object-cover" />
                        <div className="text px-4 pb-8 pt-2">
                            <h3 className="font-bold text-lg">Factory Infrastructure</h3>
                            <p className="text-yellow-800">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, consequatur.</p>
                        </div>
                    </div>
                     <div className="project hover:scale-95 duration-500 transition-all shadow-md">
                        <img src={image3} alt="" className="rounded-md h-52 my-3 w-full object-cover" />
                        <div className="text px-4 pb-8 pt-2">
                            <h3 className="font-bold text-lg">Dual Road</h3>
                            <p className="text-yellow-800">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, consequatur.</p>
                        </div>
                    </div>
                     <div className="project hover:scale-95 duration-500 transition-all shadow-md">
                        <img src={image4} alt="" className="rounded-md h-52 my-3 w-full object-cover" />
                        <div className="text px-4 pb-8 pt-2">
                            <h3 className="font-bold text-lg">Ibom Hotel</h3>
                            <p className="text-yellow-800">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, consequatur.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
     );
}
 
export default Featured;