import { useState, useRef, useEffect } from 'react'
import propTypes from 'prop-types'


const Projects = ({ title, desc, timeline }) => {
  const [ProjectsStyle, setProjectsStyle] = useState({
    display: "flex",
    flexDirection: "column",
    marginLeft: "30px",
    marginRight: "30px",
    alignItems: "center",

    borderTop: "1px solid black",
  });

  const [IndexStyle, setIndexStyle] = useState({
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",


  });

  const [DropDownStyle, setDropDownStyle] = useState({
    position: "relative",
    height: "0px",
    width: "100%",
    overflow: "hidden",
    transition: "0.3s ease",
  });


  const dropDownRef = useRef(null);
  const DropDownHeight = () => {
    return dropDownRef.current.scrollHeight;
  }

  const onEnter = () => {
    setProjectsStyle({
      ...ProjectsStyle,
      borderTop: "10px solid black",
      transition: "0.3s ease",
    });

    setDropDownStyle({
      ...DropDownStyle,
      height: `${DropDownHeight()}px`,
      transition: "0.8s ease",
    });
  }

  const onLeave = () => {
    setProjectsStyle({
      ...ProjectsStyle,
      borderTop: "1px solid black",
      transition: "0.3s ease",
    });

    setDropDownStyle({
      ...DropDownStyle,
      height: "0px",
      transition: "0.8s ease",
    });
  }






  return (
    <div className="ProjectsSection" style={ProjectsStyle} onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <div className="index" style={IndexStyle}>
        <p>{title}</p>
        <p>{desc}</p>
        <p>{timeline}</p>
      </div>
      <div className="DropDown" ref={dropDownRef} style={DropDownStyle}>
        <p>Details</p>
      </div>
    </div >

  )
};

Projects.propTypes = {
  title: propTypes.string,
  desc: propTypes.string,
  timeline: propTypes.string
}


export default Projects
