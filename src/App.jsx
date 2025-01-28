import { useState } from 'react'

import Header from './Components/Header'
import HtmlCanvas from './Components/htmlCanvas'
import './App.css'

function App() {



  return (
    <>
      <Header />
      <HtmlCanvas width={200} height={100} />
    </>
  )
}

export default App
