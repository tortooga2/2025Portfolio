import { useState, useRef, useEffect } from 'react'
import { Analytics } from "@vercel/analytics/react"

import Header from './Components/Header'
import HtmlCanvas from './Components/htmlCanvas'
import Projects from './Components/Item_Project'
import VKContent from './Components/Content_VK'
import OGLContent from './Components/Content_OGL'
import PSimContent from './Components/Content_PSim'
import WIPContent from './Components/Content_WIP'
import './App.css'






function App() {

  const ref = useRef(null);

  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);
  const project4Ref = useRef(null);
  const project5Ref = useRef(null);

  const FoldAll = () => {
    project1Ref.current.Fold();
    project2Ref.current.Fold();
    project3Ref.current.Fold();
    project4Ref.current.Fold();
    project5Ref.current.Fold();

  };


  return (
    <>
      <Analytics />
      <div className="App" style={{ display: "flex", flexDirection: "column", width: "100%", alignItems: "center", textAlign: "center" }}>

        <Header />
        <div className="NameTag" style={{ width: "auto", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "left", zIndex: "1", filter: "invert(100%)", mixBlendMode: 'difference', color: "black" }}>

          <h1 ref={ref} style={{ fontSize: "100px", margin: "0", padding: "0", backgroundColor: "black", color: "white", width: "fit-content" }}>Chase Nagle.</h1>

          <p style={{}}>Java/TypeScript - C/C++ - Java - C# - Python - Go - Node.js  - AWS - Open/WebGL</p>

        </div>





        <HtmlCanvas tipColor={[1.0, 0.0, 0.0]} bodyColor={[0.0, 0.0, 0.0]} dist={75.0} scroll={0.15} zIndex={0} />
        <HtmlCanvas tipColor={[1.0, 0.0, 0.0]} bodyColor={[1.0, 1.0, 1.0]} dist={-70.0} scroll={0.1} zIndex={3} maxHeight={10.0} />



        <h1 style={{ color: "black", filter: "invert(100%)", mixBlendMode: "difference", fontSize: "1.5em" }}>Projects</h1>
        <div id="Projects" style={{ width: "100vw", color: "black", filter: "invert(100%)", mixBlendMode: "difference", scrollMarginTop: "10%" }}>

          <Projects ref={project2Ref} title="OpenGL Render" desc="My entry into Engine Creation. Features Include: Mesh loading, shadow maps, and Material creation. Built with C++. " timeline="2024" Content={<OGLContent />} parentFunc={FoldAll} />
          <Projects ref={project1Ref} title="Vulkan Create Coding Framework" desc="A reimplimentation of what my work with OpenGL. The goal is easily create great looking 3D scenes. Built with C++. " timeline="2024-present" Content={<VKContent />} parentFunc={FoldAll} />
          <Projects ref={project3Ref} title="ECS Particle System" desc="Built a custom Entity-Component and Physics System with springs, forces, and rigid bodies. Used p5.js to handle drawing. Built with Javascript. " timeline="2024" Content={<PSimContent />} parentFunc={FoldAll} />
          <Projects ref={project4Ref} title="Authentication Server" desc="Built a custom Authentication Server using JWT. Features include: User creation, login, and password reset and request processing. Built with Node.js and Express with SST to manage AWS. " timeline="2024" Content={<WIPContent link={"https://github.com/tortooga2/Authentication_Example"} />} parentFunc={FoldAll} />
          <Projects ref={project5Ref} title="Particle Life" desc="An exploration into the emergent behavior simulation by Artist Jeffery Ventrella. Built with C++ in openFrameworks. " timeline="2023" Content={<WIPContent link={"https://github.com/tortooga2/Particle-Life"} />} parentFunc={FoldAll} />

        </div>

        <div style={{ height: "50vh" }}></div>

        <div style={{ filter: "invert(100%)", mixBlendMode: "difference", position: "fixed", bottom: "0", left: "0", padding: "30px", fontSize: "1em", color: "black", zIndex: "100", lineHeight: "0.5em" }}><p>Oakland, CA</p> <p>2025</p> </div>




      </div >




    </>
  )
}

export default App
