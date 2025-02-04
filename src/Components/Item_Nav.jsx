import { useState } from 'react'

import propTypes from 'prop-types'

const NavItem = ({ name, color, bg_color, onClick }) => {
  const [textColor, setTextColor] = useState(color || 'white');
  const [bgColor, setBgColor] = useState(bg_color || 'none');

  const [navItemStyle, setNavItemStyle] = useState({
    position: 'relative',
    marginLeft: '10px',
    marginRight: '10px',
    paddingLeft: '3px',
    paddingRight: '3px',
    transition: '0.3s ease',

    cursor: "pointer",





  });

  const [navTextStyle, setNavTextStyle] = useState({

  });

  const [underlineStyle, setUnderlineStyle] = useState({
    position: 'absolute',
    left: "0",
    bottom: "0",
    width: '100%',
    height: '0px',
    backgroundColor: bgColor,
    filter: 'invert(100%)',
    mixBlendMode: 'difference',
    transition: '0.3s ease',
    zIndex: '-1',


  });


  const Transition = (value, color) => () => {
    setUnderlineStyle({
      ...underlineStyle,
      height: value,
    });

    setNavItemStyle({
      ...navItemStyle,
      color: color,
    });


  }



  return (
    <div className="NavItem" style={navItemStyle} onMouseEnter={Transition("100%", "white")} onMouseLeave={Transition("0%", "black")} onClick={onClick}>
      <div className="navText">{name}</div>
      <div className="NavItem-Underline" style={underlineStyle}></div>
    </div>
  )

}




NavItem.propTypes = {
  name: propTypes.string.isRequired,
  bg_color: propTypes.string,
  color: propTypes.string,
  onClick: propTypes.func,
};


export default NavItem
