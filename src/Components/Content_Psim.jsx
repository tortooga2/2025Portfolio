const PSimContent = () => {
  return (
    <div style={{ textAlign: "left", padding: "10px" }}>

      <p>I was deeply inspired by the Artist Space Filler when making this. They were an early introduction to the world of creative coding. In an attempt at making something similar, I made this. I used p5.js for things like Bézier curves for the soft-body object. The ECS system may sound familiar from engines like Bevy or Unity{"'"}s own DOTS system. It's pretty great in the case of a particle system because it allows for new behaviors to be easily created by simply adding interactions between particle types. Something like flocking can be added with six function calls, four of which are already coded.</p>

      <p>Tech Stack: JavaScript, p5.js</p>

      <p>You can check it out <a href="https://particle-sim-chase-nagle.vercel.app/" target="_blank" style={{ color: "black", textDecoration: "underline" }}>here</a>. Give it a second to settle. Things are placed randomly, so it may look whack for a bit.</p>
    </div>
  );
};

export default PSimContent;
