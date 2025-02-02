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
    position: "relative",
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    textAlign: "left",
  });

  const [backgroundStyle, setBackgroundStyle] = useState({
    position: "absolute",
    width: "100%",
    height: "0%",
    backgroundColor: "black",
    bottom: "0",
    zIndex: "-1",
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


  const isOpen = useRef(false);
  const dropDownRef = useRef(null);
  const DropDownHeight = () => {
    return dropDownRef.current.scrollHeight;
  }

  const onEnter = () => {
    setTitleStyle({
      ...TitleStyle,
      color: "white",
      transition: "0.3s ease",
    });

    setDescStyle({
      ...DescStyle,

      color: isOpen.current ? "black" : "white",
      transition: "0.3s ease",
    });

    setDateStyle({
      ...DateStyle,
      color: "white",
      transition: "0.3s ease",
    });

    setBackgroundStyle({
      ...backgroundStyle,
      height: "100%",
      transition: "0.3s ease",
    });
  }

  const onLeave = () => {
    setTitleStyle({
      ...TitleStyle,
      color: "black",
      transition: "0.3s ease",
    });

    setDescStyle({
      ...DescStyle,
      color: "black",
      transition: "0.3s ease",
    });

    setDateStyle({
      ...DateStyle,
      color: "black",
      transition: "0.3s ease",
    });
    setBackgroundStyle({
      ...backgroundStyle,
      height: "0%",
      transition: "0.3s ease",
    });
  }





  const Fold = () => {
    isOpen.current = false;
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


  const Drop = () => {
    parentFunc();

    setDropDownStyle({
      ...DropDownStyle,
      height: `${DropDownHeight()}px`,
      transition: "0.3s ease",
    });

    setDescStyle({
      ...DescStyle,
      color: "black",
      transition: "0.3s ease",
    });
  }


  const handleClick = () => {
    console.log("click", isOpen.current);
    if (isOpen.current) {
      Fold();
      isOpen.current = false;
    } else {
      Drop();
      isOpen.current = true;
    }
  }






  useImperativeHandle(ref, () => ({
    Fold: Fold,
  }));





  return (
    <div className="ProjectsSection" style={ProjectsStyle} onMouseEnter={onEnter} onMouseLeave={onLeave} >
      <div className="index" style={IndexStyle} onClick={handleClick}>
        <p style={TitleStyle}>{title}</p>
        <p style={DescStyle}>{desc}</p>
        <p style={DateStyle}>{timeline}</p>
        <div className="background" style={backgroundStyle}>

        </div>
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
