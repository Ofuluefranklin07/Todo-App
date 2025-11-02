
import logo from "../Images/logo.png"
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} alt="" width="130px" />
      <h3>React Router</h3>
      <ul>
        <Link to= "/">
          <li>Home</li>
        </Link>
        <Link to = "/products">
          <li>Products</li>
        </Link>
        <Link to="/About">
          <li>About</li>
        </Link>
        
        <Link to ="/Contact">
          <li>Contact</li>
        </Link>
      </ul>
      <button className="btn">Get started</button>
     
    </div>
  );
}
