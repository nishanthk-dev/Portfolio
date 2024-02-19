import React from "react";
import { Link } from "react-router-dom";
import { FiArrowDownRight } from "react-icons/fi";

const Homepg = () => {
  return (
    <div className="box-border overflow-hidden lg:h-screen bg-zinc-300 font-['Quintessential']">
      <div className="relative left-36 top-1/3">
        <h1 className="p-3 mx-28 text-5xl ">Hello! I&apos;m </h1>
        <h1 className="font-bold text-7xl">NISHANTH K</h1>
        <h2 className="text-xl mx-28 py-5">I build things for the web.</h2>
        <div className="pt-24 flex items-center">
          {/* <div className='hover:cursor-pointer pr-28 font-semibold hover:scale-105 '>Download CV</div> */}
          <Link
            className="hover:cursor-pointer pr-28 font-semibold hover:scale-105"
            href="https://drive.google.com/file/d/1AE6XbzUh0gr1U2jCO6QdhkPB2G_2tz1a/view?usp=drive_link "
            target="_blank"
          >
            Download CV
          </Link>
          <div className="box-border bg-slate-600  w-2/3 left  p-10">
            I am a Full Stack Developer(MERN) with the knowledge on UI/UX who
            specializes in creating amazing digital experiences. <br />
            With knowledge in HTML, CSS, JavaScript, Figma and more, I bring
            your digital dreams to life. Let&apos;s build something amazing
            together!
            <div className=" bg-slate-400 scroll rounded-full h-10 w-10 relative left-3/4 -bottom-full  p-3">
              <div className="scale-150">
                <FiArrowDownRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepg;
