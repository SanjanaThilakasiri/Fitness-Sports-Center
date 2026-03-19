
import './App.css'
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Reviews from "./sections/Reviews";
import Trainers from "./sections/Trainers";
import Packages from "./sections/Packages";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function App() {
  return (
     <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Reviews />
      <Trainers />
      <Packages />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
