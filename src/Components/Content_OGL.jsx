

const OGLContent = () => {
  return (
    <div style={{ textAlign: "left", padding: "10px" }}>
      <p>I started working on this project to have a great starting point for exploring more graphics programming techniques. While engines like Unity already exist, I often spend more time fighting with the software than actually building, so I decided to create my own engine.
      </p>

      <p>Tech Stack: C++, OpenGL, GLFW, GLM</p>

      <p>Features Include: Mesh loading, shadow mapping, and material creation. Surface shading and diffuse lighting are implemented using Blinn-Phong.</p>

      <div style={{ filter: "invert(100%)", mixBlendMode: "difference", width: "100%", textAlign: "center" }}>
        <img src="/Images/OpenGL_1.png" style={{ width: "30%", height: "auto" }} />
        <img src="/Images/OpenGL_2.png" style={{ width: "30%", height: "auto" }} />
        <img src="/Images/OpenGL_3.png" style={{ width: "30%", height: "auto" }} />
      </div>

    </div >
  )
};

export default OGLContent;
