import Dashboard from "../images/Dashboard.png";
import clothingStore from "../images/clothingStore.png";
import blogs from "../images/blog.png";
import Cards from "./Cards";
const Projects = () => {
  return (
    <div className="relative">
      <h1 className="left-1/3 mx-20 top-32 absolute text-neutral-300 text-9xl font-normal font-['Allison']">
        Projects
      </h1>
      <h1 className="m-28 left-1/3 px-6 pt-2 top-20 text-5xl  absolute font-['Quintessential']">
        Projects
      </h1>
      <div className="box-border h-60"></div>
      <div className="m-28 grid grid-cols-3 gap-5 ">
        <div className="pr1">
          <img className="rounded-sm" src={Dashboard} alt="" />
          <h1 className="text-2xl text-center">Admin Dashboard</h1>
        </div>
        <div className="pr1">
          <img className="rounded-sm" src={clothingStore} alt="" />
          <h1 className="text-2xl text-center">Ecommerce store</h1>
        </div>
        <div className="pr1">
          <img className="rounded-sm border border-black" src={blogs} alt="" />
          <h1 className="text-2xl text-center">Blog</h1>
        </div>
      </div>
    </div>
  );
};

export default Projects;
