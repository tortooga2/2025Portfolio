import { useState, useRef, useEffect } from 'react'
import propTypes from 'prop-types'



const Projects = ({ title, desc, timeline }) => {

  const [itemStyle, setItemStyle] = useState({ color: "white", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%", height: "30px" });

  const onHover = () => {
    setItemStyle({
      ...itemStyle,
      color: "black",
      backgroundColor: "white",
      transition: "0.3s ease"
    })
  }

  return (
    <div className="ProjectsSection" style={itemStyle} onMouseEnter={onHover} >
      <p>{title}</p>
      <p>{desc}</p>
      <p>{timeline}</p>
    </div >
  )
};

Projects.propTypes = {
  title: propTypes.string,
  desc: propTypes.string,
  timeline: propTypes.string
}


export default Projects
