import { Swiper, SwiperSlide } from "swiper/react";
import HeroSlide from '../assets/slide1.jpg'
import HeroSlide1 from '../assets/slide2.jpg'
import HeroSlide2 from '../assets/slide3.jpg'
import HeroSlide3 from '../assets/slide4.jpg'
import HeroSlide4 from '../assets/slide5.jpg'
import { A11y, Pagination, Autoplay, EffectFade } from "swiper/modules";

const Hero = () => {
    return ( 
        <main className="md:px-20 md:py-15 relative">
            <div className="overlay absolute w-full top-0 h-full md:top-[10%] md:left-[5%] md:w-[90%] bg-linear-to-r h-[81%] from-slate-900/60 to-slate-800/70 z-10"></div>

            <Swiper
                modules={[Pagination, A11y, Autoplay, EffectFade]}
                slidesPerView={1}
                spaceBetween={5}
                pagination={{clickable:true}}
                onSwiper={(swiper)=>console.log(swiper)}
                autoplay={{
                    delay:3000,
                    disableOnInteraction:false
                }}
                className=""
            >
                <SwiperSlide>
                    <img src={HeroSlide} alt="Construction Site with Bulldozers"className="w-full h-screen md:h-full object-cover " />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={HeroSlide1} alt="Construction Site with Mixing Machine"className="w-full h-screen md:h-full object-cover" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={HeroSlide2} alt="Construction Site with tall building"className="w-full h-screen md:h-full object-cover" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={HeroSlide3} alt="Road Construction Site with Asphalt"className="w-full h-screen md:h-full object-cover" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={HeroSlide4} alt="Construction Site with Cranes" className="w-full h-screen md:h-full object-cover"/>
                </SwiperSlide>
            </Swiper>

            <div className="text absolute top-52 left-10 w-10/12 md:left-[15%] z-10 md:w-7/12">
                <h1 className="font-bold text-5xl md:text-6xl my-5 text-white text-shadow-lg">Building Your <span className="text-yellow-400 ">Vision</span> </h1>
                <p className="text-white text-lg my-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi cum optio distinctio corporis modi adipisci aliquam atque maiores fugiat provident natus ipsa deleniti facere nostrum velit doloremque magnam enim, autem ipsam aspernatur? Quas dolorum odio, neque dolor eum ullam veritatis explicabo, ad dolore sed, officiis ipsum reiciendis unde laudantium ratione.</p>

                <button className="px-4 py-3 text-lg text-white my-5 bg-yellow-500 rounded-md hover:bg-white hover:text-yellow-500 hover:border transition-all duration-500 ">
                   View Projects
                </button>
            </div>
        </main>
     );
}
 
export default Hero;