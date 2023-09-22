import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Contact from "./Contact";
import Home from "./Home";
import About from "./About";
import { FaLinkedinIn,FaGithub } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
const Portfolio = () => {
  return (<div >
   <Navbar/>
   <Home/>
   <About/>
   <Projects/>
   <footer className="text-center p-5 text-2xl font-['Quintessential'] bg-black text-white">Get in touch
   <div className="flex px-12 py-3 justify-between">
   <FaLinkedinIn/><FaGithub/><HiOutlineMail/></div></footer>
   
  </div>)
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Portfolio/>);
