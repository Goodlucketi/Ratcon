import AboutRatcon from "../components/AboutRatcon";
import Contact from "../components/Contact";
import Featured from "../components/Featured";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Service from "../components/Servicies";

const Home = () => {
    return ( 
        <main>
            <Navbar />
            <Hero />
            <AboutRatcon />
            <Featured />
            <Service />
            <Contact />
            <Footer />
        </main>
     );
}
 
export default Home;