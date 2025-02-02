const PSimContent = () => {
  return (
    <div style={{ textAlign: "left", padding: "10px" }}>
      <p>I was deeply inspired by the Artist Space Filler when making this. They were an early introduction into the world of creative coding. In an attempt at making something similair{","} I made this. I used p5js to for stuff like bezier curves for the softbody object. The ECS system may sound familiar from engines like Bevy or Unity{"'"}s own DOTS system. Its pretty create in the case of a particle system because it allows for new behaviors to be easily created by simple adding interections between particle types. something like flocking can be added with 6 function calls. 4 of which are already coded. </p>

      <p>Tech Stack: Javascript, p5.js</p>

      <p> you can check it out <a href="https://particle-sim-chase-nagle.vercel.app/" target="_blank" style={{ color: "black", textDecoration: "underline" }}>here</a>. Give it a second to settle. Things are places randomly so it may look whack for a bit</p>
    </div>
  );
};

export default PSimContent;
