import React from 'react'
import { FaHtml5, FaCss3Alt,FaJava, FaBootstrap, FaReact, FaFigma, FaNode } from "react-icons/fa6";
import { DiJavascript1 } from "react-icons/di";
import { SiMongodb, SiGithub,SiAdobexd, SiTailwindcss, SiMui, SiPostman,SiFirebase,SiExpress,SiRedux} from "react-icons/si";

const About = () => {
  return (
    <div>
      <h1 className="AboutMe left-[486px] top-[865px] absolute text-neutral-200 text-9xl font-normal font-['Allison']">About me</h1>
      <h1 className=" left-[569px] top-[930px] absolute text-black text-[49px] font-normal font-['Quintessential']">About me</h1>
      <p className="pt-52 m-20 text-xl font-['Quintessential']">I am a UI-UX Developer and Front-end Developer who specializes in creating amazing digital experiences.With knowledge in HTML, CSS, JavaScript, Figma and more, I bring your digital dreams to life. Let's build something amazing together!</p>
      <h4 className="px-20 text-4xl font-['Quintessential']">Technologies I'm good at:</h4>
      <div className="flex p-10">
      <FaHtml5 className=" ml-5  object-fill h-12 w-20"/>
      <FaCss3Alt className=" ml-5 object-fill h-12 w-20"/>
      <DiJavascript1 className=" ml-5  object-fill h-12 w-20"/>
      <FaReact className=" ml-5  object-fill h-12 w-20"/>
      <SiTailwindcss className=" ml-5  object-fill h-12 w-20"/>
      <FaJava className=" ml-5  object-fill h-12 w-20"/>
      <FaBootstrap className=" ml-5  object-fill h-12 w-20"/>
      
      <SiGithub className=" ml-5  object-fill h-12 w-20"/>
      <FaFigma className=" ml-5  object-fill h-12 w-20"/>
      <SiAdobexd className=" ml-5  object-fill h-12 w-20"/>
      <SiMui className=" ml-5  object-fill h-12 w-20"/>
      
      

      </div>
      <h4 className="px-20 text-4xl font-['Quintessential']">Technologies I'm familiar with:</h4>
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
        <div className="Experience left-[166px] top-[1800px] absolute text-neutral-200 text-9xl font-normal font-['Allison']">Experience</div>
        <h4 className="m-28 px-32 text-5xl absolute font-['Quintessential']">Experience</h4>
        <svg className="w-[18px] h-[488px] left-[134px] top-[2000px] absolute" xmlns="http://www.w3.org/2000/svg" width="18" height="488" viewBox="0 0 18 488" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.57249 64.3697L8.04955 488L9.04955 487.999L8.5726 64.4723C8.71424 64.4789 8.85673 64.4822 9 64.4822C13.9706 64.4822 18 60.4528 18 55.4822C18 50.5117 13.9706 46.4822 9 46.4822C8.8499 46.4822 8.70065 46.4859 8.55235 46.4932L8.5 0.00195312L7.5 0.00307926L7.55247 46.598C3.27011 47.2904 0 51.0044 0 55.4822C0 59.967 3.28031 63.6856 7.57249 64.3697Z" fill="black"/>
</svg>
<h4 className=" flex px-52 pt-72 text-4xl font-['Quintessential']">Senior Systems Engineer</h4>
<p className="flex pr-72 float-right font-['Quintessential']">May 2021 - Currently</p>
<p className=" mx-56 p-4 text-2xl font-['Quintessential']">Infosys LTD</p>
<ul className="mx-52 list-disc text-xl font-['Quintessential']">
  <li >Worked under Farmers insurance Group’s project which was a part of Swiss-based Zurich insurance Group.</li>
  <li>Was part of Migration team, Migrated and maintained ARS Application. Resolved a lot of Critical User Stories by code analysis and code debugging.</li>
  <li>Developed App360 which was built on ReactJS, HTML5, Bootstrap. It helped the new project joiners with the access and it had documentations which helped them to understand the project better.</li>
  <li>Developed CIVS Application which was customer input verification system where the agents was allowed to upload the documents and verify for the ........and worked on server connectivity end.</li>
  <li>Developed small applications which helped other team members to ease the application testing processes.</li>
  <li>Developed automated tools which monitored the application working and performance.</li>
  <li>Developed a dashboard which gave the information of all the servers with the availability, errors, and the Databases availibilty</li>
</ul>
    </div>
  )
}

export default About
