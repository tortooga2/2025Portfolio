import { useRef, useState } from 'react'


import './Header.css'
import NavItem from './Item_Nav'

const Header = () => {
  const headerRef = useRef(null);
  const titleRef = useRef(null);

  const [headerStyle, setHeaderStyle] = useState({
    //backgroundColor: 'black',
    fontFamily: "'AOK Buenos Aires', sans-serif",
    color: 'black',
    filter: "invert(100%)",
    mixBlendMode: 'difference',
    padding: '10px',
    position: 'fixed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: "space-between",
    top: '0',
    left: '0',
    width: '100%',
    zIndex: '1000',

  });

  const [titleStyle, setTitleStyle] = useState({
    fontWeight: '400',
    fontSize: '1em',
    margin: '20px',
    backgroundColor: 'black',
    color: 'white',
    width: 'fit-content',
  });

  const [navStyle, setNavStyle] = useState({
    display: 'flex',
    justifyContent: 'space-evenly',
    padding: '20px',
    margin: '0',

  });



  return (
    <div ref={headerRef} className="Header" style={headerStyle}>
      <h1 ref={titleRef} className="Title" style={titleStyle}>Chase Nagle</h1>

      <div className="Nav" style={navStyle}>
        <NavItem name="projects" color="black" bg_color="#FFFFFF" onClick={() => {
          console.log("Scrolling");
          const el = document.getElementById("Projects");
          window.scrollTo({ top: el.offsetTop - 120, behavior: 'smooth' });
        }} />
        <NavItem name="linkedIn" color="black" bg_color="#FFFFFF" onClick={() => { window.open("https://www.linkedin.com/in/chase-nagle-7069a6212/", "_blank") }} />
        <NavItem name="github" color="black" bg_color="#FFFFFF" onClick={() => { window.open("https://www.github.com/tortooga2", "_blank") }} />
        <NavItem name="resume" color="black" bg_color="#FFFFFF" onClick={() => { window.open("Resume.pdf", "_blank") }} />



      </div>

    </div>
  )

}





export default Header
