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
            <Featured />
            <Service />
            <Footer />
        </main>
     );
}
 
export default Home;