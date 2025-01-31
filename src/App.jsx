import { useState, useRef, useEffect } from 'react'
import { Analytics } from "@vercel/analytics/react"

import Header from './Components/Header'
import HtmlCanvas from './Components/htmlCanvas'
import Projects from './Components/Projects'
import './App.css'




function App() {



  return (
    <>
      <Analytics />
      <div className="App" style={{ display: "flex", flexDirection: "column", width: "100%", alignItems: "center", textAlign: "center" }}>

        <Header />
        <div className="NameTag" style={{ width: "auto", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "left", zIndex: "1", filter: "invert(100%)", mixBlendMode: 'difference', color: "black" }}>

          <h1 style={{ fontSize: "100px", margin: "0", padding: "0", backgroundColor: "black", color: "white", width: "fit-content" }}>Chase Nagle.</h1>

          <p style={{}}>Java/TypeScript - C/C++ - Java - C# - Python - Go - Node.js - mongoDB - AWS - Open/WebGL - Vulkan</p>

        </div>

        <div style={{ filter: "invert(100%)", mixBlendMode: "difference", position: "fixed", bottom: "0", left: "0", margin: "10px", fontSize: "15px", color: "black", zIndex: "1", fontWeight: "lighter", lineHeight: "1em" }}><p>Oakland, CA</p> <p>2025</p> </div>




        <HtmlCanvas tipColor={[1.0, 0.0, 0.0]} bodyColor={[0.0, 0.0, 0.0]} dist={75.0} scroll={0.1} />

        <HtmlCanvas tipColor={[1.0, 0.0, 0.0]} bodyColor={[1.0, 1.0, 1.0]} dist={0.0} scroll={0.01} />
        <h1 style={{ color: "black", filter: "invert(100%)", mixBlendMode: "difference" }}>Projects</h1>

      </div >




    </>
  )
}

export default App
