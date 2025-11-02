import Navbar from "./assets/Components/Navbar"
import Home from "./Pages/Home"
import Product from "./Pages/Product"
import Contact from "./Pages/Contact"
import About from "./Pages/About"
import { Routes, Route } from "react-router-dom"
const Apps = () => {
    return (
      <div>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Product />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
         
        </div>
   
      </div>
    );
}
export default Apps