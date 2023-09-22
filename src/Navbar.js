
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="px-40 py-7 flex justify-between bg-black text-white font-['Quintessential']">
      <ul className="flex justify-center space-x-40 text-xl">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        
        {/* <li><Link to ="/">Home</Link></li>
        <li><Link to ="/About">About</Link></li>
        <li><Link to ="/Projects">Projects</Link></li>
        <li><Link to ="/Contact">Contact</Link></li> */}
      </ul>
      <button>Download CV</button>
    </nav>
  )
}
export default Navbar
