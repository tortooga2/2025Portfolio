import { useState, useRef, useEffect } from 'react'
import { Analytics } from "@vercel/analytics/react"

import Header from './Components/Header'
import HtmlCanvas from './Components/htmlCanvas'
import Projects from './Components/Projects'
import './App.css'




function App() {

  const ref = useRef(null);



  return (
    <>
      <Analytics />
      <div className="App" style={{ display: "flex", flexDirection: "column", width: "100%", alignItems: "center", textAlign: "center" }}>

        <Header />
        <div className="NameTag" style={{ width: "auto", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "left", zIndex: "1", filter: "invert(100%)", mixBlendMode: 'difference', color: "black" }}>

          <h1 ref={ref} style={{ fontSize: "100px", margin: "0", padding: "0", backgroundColor: "black", color: "white", width: "fit-content" }}>Chase Nagle.</h1>

          <p style={{}}>Java/TypeScript - C/C++ - Java - C# - Python - Go - Node.js  - AWS - Open/WebGL</p>

        </div>





        <HtmlCanvas tipColor={[1.0, 0.0, 0.0]} bodyColor={[0.0, 0.0, 0.0]} dist={75.0} scroll={0.1} zIndex={0} />
        <HtmlCanvas tipColor={[1.0, 0.0, 0.0]} bodyColor={[1.0, 1.0, 1.0]} dist={-75.0} scroll={0.1} zIndex={3} />



        <h1 style={{ color: "black", filter: "invert(100%)", mixBlendMode: "difference", fontSize: "1.5em" }}>Projects</h1>
        <div id="Projects" style={{ width: "100vw", color: "black", filter: "invert(100%)", mixBlendMode: "difference", scrollMarginTop: "10%" }}>
          <Projects title="Project 1" desc="This is a description of project 1" timeline="2022-2023" />
          <Projects title="Project 2" desc="This is a description of project 2" timeline="2023-2024" />
          <Projects title="Project 3" desc="This is a description of project 3" timeline="2024-2025" />
        </div>

        <div style={{ height: "70vh" }}></div>

        <div style={{ filter: "invert(100%)", mixBlendMode: "difference", position: "fixed", bottom: "0", left: "0", padding: "30px", fontSize: "1em", color: "black", zIndex: "100", lineHeight: "0.5em" }}><p>Oakland, CA</p> <p>2025</p> </div>




      </div >




    </>
  )
}

export default App
