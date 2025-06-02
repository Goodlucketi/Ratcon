import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import ServicesPage from "./pages/Services"
import Projects from "./pages/Projects"
import ContactPage from "./pages/Contact"


function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home /> } />
        <Route path="/about" element = { <About /> } />
        <Route path="/services" element = { <ServicesPage /> } />
        <Route path="/projects" element = { <Projects /> } />
        <Route path="/contact" element = { <ContactPage /> } />
      </Routes> 
    </BrowserRouter>
  )
}

export default App
