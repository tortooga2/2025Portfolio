import { useState } from 'react'
import { Analytics } from "@vercel/analytics/react"

import Header from './Components/Header'
import HtmlCanvas from './Components/htmlCanvas'
import './App.css'

function App() {



  return (
    <>
      <Analytics />
      <Header />
      <h1 style={{ position: "absolute", fontSize: "200px", bottom: "0", left: "0", color: "#9f8082", backgroundColor: "#E85D75" }}>Chase Nagle. </h1>
      <HtmlCanvas tipColor={[0.91, 0.365, 0.459]} bodyColor={[.624, 0.502, 0.51]} />
      <div style={{ height: "300vh", width: "300vw" }}></div>
    </>
  )
}

export default App
