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
      <HtmlCanvas width={200} height={100} />
    </>
  )
}

export default App
