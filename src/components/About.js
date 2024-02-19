import React from 'react'
import { FaHtml5, FaCss3Alt,FaJava, FaBootstrap, FaReact, FaFigma, FaNode } from "react-icons/fa6";
import { DiJavascript1 } from "react-icons/di";
import { SiMongodb, SiGithub,SiAdobexd, SiTailwindcss, SiMui, SiPostman,SiFirebase,SiExpress,SiRedux} from "react-icons/si";

const About = () => {
  return (
    
    <div className='relative p-10'>
      <h1 className="absolute left-1/3 text-neutral-200 text-9xl font-normal font-['Allison']">About me</h1>
      <h1 className="absolute pl-20 left-1/3 top-24 text-black text-[49px] font-normal font-['Quintessential']">About me</h1>
      {/* <p className="  pt-32 m-20 text-xl font-['Quintessential']">I am a UI-UX Developer and Front-end Developer who specializes in creating amazing digital experiences.With knowledge in HTML, CSS, JavaScript, Figma and more, I bring your digital dreams to life. Let&apos;s build something amazing together!</p> */}
      <h4 className="pt-40 mx-20 text-4xl font-['Quintessential']">Technologies I&apos;m good at:</h4>
      <div className="flex p-10">
      <FaHtml5 className=" ml-5  h-12 w-20"/> 
      <FaCss3Alt className=" ml-5 h-12 w-20"/>
      <DiJavascript1 className=" ml-5   h-12 w-20"/>
      <FaReact className=" ml-5   h-12 w-20"/>
      <SiTailwindcss className=" ml-5  h-12 w-20 "/>
      <FaJava className=" ml-5   h-12 w-20"/>
      <FaBootstrap className=" ml-5  h-12 w-20"/>
      <SiGithub className=" ml-5   h-12 w-20"/>
      <FaFigma className=" ml-5  h-12 w-20"/>
      <SiAdobexd className=" ml-5  h-12 w-20"/>
      <SiMui className=" ml-5 h-12 w-20"/>
      
      

      </div>
      <h4 className="px-20 text-4xl font-['Quintessential']">Technologies I&apos;m familiar with:</h4>
      <div className="flex p-10">

      <SiMongodb className=" ml-5  object-fill h-12 w-20"/>
      <SiFirebase className=" ml-5  object-fill h-12 w-20"/>
        <FaNode className=" ml-5  object-fill h-12 w-20"/>
        <SiExpress className=" ml-5  object-fill h-12 w-20"/>
        <SiRedux className=" ml-5  object-fill h-12 w-20"/>
        <SiPostman className=" ml-5  object-fill h-12 w-20"/>
      </div>
        <h4 className="px-20 text-4xl font-['Quintessential']">Certifications</h4>
        <ul className="list-disc pt-10 mx-40 text-2xl font-['Quintessential']">
          <li>Google UX design Professional Certificate by Google.</li>
          <li className='my-3'>HTML,CSS and JavaScript for Web Developers by John Hopkins University.</li>
          <li>Infosys Global Agile Developer Certification.</li>
        </ul>
        
    </div>
  )
}

export default About
