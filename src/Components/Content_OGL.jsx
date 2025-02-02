

const OGLContent = () => {
  return (
    <div style={{ textAlign: "left", padding: "10px" }}>
      <p> My entry into Engine Creation. I started working on this project so that I had a create starting place to continue to explore more graphics programming techniques. While there are already engines like Unity that do this, I am often spending more time fighting with the software than actually building so I thought I would make my own engine.</p>

      <p>Tech Stack: C++, OpenGL, GLFW, GLM</p>

      <p>Features Include: Mesh loading, shadow maps, and Material creation. Surface Shading and Diffuse done with Blinn-Phong</p>

      <div style={{ filter: "invert(100%)", mixBlendMode: "difference", width: "100%", textAlign: "center" }}>
        <img src="/Images/OpenGL_1.png" style={{ width: "30%", height: "auto" }} />
        <img src="/Images/OpenGL_2.png" style={{ width: "30%", height: "auto" }} />
        <img src="/Images/OpenGL_3.png" style={{ width: "30%", height: "auto" }} />
      </div>

    </div >
  )
};

export default OGLContent;
