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
      <h1 style={{ position: "absolute", fontSize: "300px", bottom: "0", left: "0" }}>hello world</h1>
      <HtmlCanvas width={200} height={100} />
    </>
  )
}

export default App
