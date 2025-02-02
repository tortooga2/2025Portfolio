

const OGLContent = () => {
  return (
    <div style={{ textAlign: "left", padding: "10px" }}>
      <p> My entry into Engine Creation. Features Include: Mesh loading, shadow maps, and Material creation. Built with C++. </p>

      <p>Tech Stack: C++, OpenGL, GLFW, GLM</p>

      <div style={{ filter: "invert(100%)", mixBlendMode: "difference", width: "100%", textAlign: "center" }}>
        <img src="/Images/OpenGL_1.png" style={{ width: "30%", height: "auto" }} />
        <img src="/Images/OpenGL_2.png" style={{ width: "30%", height: "auto" }} />
        <img src="/Images/OpenGL_3.png" style={{ width: "30%", height: "auto" }} />
      </div>

    </div >
  )
};

export default OGLContent;
