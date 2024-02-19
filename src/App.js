import About from "./components/About"
import Sideart from "./components/Sideart"
import Homepg from "./Homepg"
import ReactDOM from "react-dom/client";
import Experience from "./components/Experience"
import Projects from "./components/Projects"
// import Sidebar from "./components/Sidebar"

import { BrowserRouter } from "react-router-dom";
const Portfolio = () => {
  return (<div  >
    <Sideart/>
    <Homepg/>
     <About/>
     <Experience/>
    <Projects/> 
  </div>)
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BrowserRouter><Portfolio/></BrowserRouter>);