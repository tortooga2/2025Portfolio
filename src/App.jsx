import { useState, useRef, useEffect } from 'react'
import { Analytics } from "@vercel/analytics/react"

import Header from './Components/Header'
import HtmlCanvas from './Components/htmlCanvas'
import './App.css'

function App() {

  const iAmRef = useRef("I Am: ");
  const whatAmI = "what ever you need me to be. I just want a job. I am in College you really think I have specialized yet! I am a tool. A blank canvas for which you can impart your paint upon. I am here and ready to learn. Heck I done made this website, how bad could I be right. Take a chance, Take a chance, take a change. If you Change your Mind... I am the first in line. Take on chance on ME!";

  useEffect(() => {
    let current_string = "I am: ";

    if (iAmRef) {
      whatAmI.split("").forEach((letter, index) => {
        setTimeout(() => {
          current_string += letter;
          iAmRef.current.innerText = current_string;
        }, 100 * index);
      })
    }
  }, []);



  return (
    <>
      <Analytics />
      <Header />
      <div className="NameTag" style={{ position: "absolute", zIndex: "1", filter: "invert(100%)", mixBlendMode: 'difference', width: "100%", display: "flex", height: "100%", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

        <h1 style={{ fontSize: "100px", color: "black", margin: "0", padding: "0" }}>Chase Nagle. </h1>

        <h1 ref={iAmRef} style={{ fontSize: "40px", color: "white", backgroundColor: "black", margin: "0", padding: "10px", width: "30%" }}>I am: </h1>

      </div>
      <h1 style={{ position: "fixed", bottom: "0", right: "10px", fontSize: "20px", color: "black", zIndex: "1", fontWeight: "lighter" }}>@2025 </h1>
      <HtmlCanvas tipColor={[0.0, 0.0, 0.0]} bodyColor={[0.0, 0.0, 0.0]} />
      <div style={{ height: "300vh", width: "300vw" }}></div>
    </>
  )
}

export default App
