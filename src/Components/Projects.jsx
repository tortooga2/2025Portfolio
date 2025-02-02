import { useState, useRef, useEffect, forwardRef, useImperativeHandle } from 'react'
import propTypes from 'prop-types'


const Projects = forwardRef(({ title, desc, timeline, Content, parentFunc }, ref) => {
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
    textAlign: "left",




  });

  const [DropDownStyle, setDropDownStyle] = useState({
    position: "relative",
    height: "0px",
    width: "100%",
    overflow: "hidden",
    transition: "0.3s ease",
  });

  const [TitleStyle, setTitleStyle] = useState({
    width: " 20%",
    color: "black",
    transition: "0.3s ease",
  });


  const [DateStyle, setDateStyle] = useState({
    width: " 10%",
    color: "black",
    transition: "0.3s ease",
  });



  const [DescStyle, setDescStyle] = useState({
    width: " 70%",
    color: "black",
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


  }

  const onLeave = () => {
    setProjectsStyle({
      ...ProjectsStyle,
      borderTop: "1px solid black",
      transition: "0.3s ease",
    });




  }

  const Drop = () => {
    parentFunc();
    setDropDownStyle({
      ...DropDownStyle,
      height: `${DropDownHeight()}px`,
      transition: "0.3s ease",
    });

    setDescStyle({
      ...DescStyle,
      color: "white",
      transition: "0.3s ease",
    });
  }

  const Fold = () => {
    setDropDownStyle({
      ...DropDownStyle,
      height: "0px",
      transition: "0.3s ease",
    });

    setDescStyle({
      ...DescStyle,
      color: "black",
      transition: "0.3s ease",
    });
  }

  useImperativeHandle(ref, () => ({
    Fold: Fold,
  }));






  return (
    <div className="ProjectsSection" style={ProjectsStyle} onMouseEnter={onEnter} onMouseLeave={onLeave} onClick={Drop}>
      <div className="index" style={IndexStyle}>
        <p style={TitleStyle}>{title}</p>
        <p style={DescStyle}>{desc}</p>
        <p style={DateStyle}>{timeline}</p>
      </div>
      <div className="DropDown" ref={dropDownRef} style={DropDownStyle}>
        {Content}
      </div>
    </div >

  );
});

Projects.propTypes = {
  title: propTypes.string,
  desc: propTypes.string,
  timeline: propTypes.string,
  Content: propTypes.object,
  parentFunc: propTypes.func,

}


export default Projects
