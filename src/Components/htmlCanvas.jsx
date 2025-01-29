import { useEffect, useRef, useState } from 'react';

import propTypes from 'prop-types';

const HtmlCanvas = ({ tipColor, bodyColor }) => {
  const canvasRef = useRef(null);

  const vertShader = `
    attribute vec2 position;
    void main() {
      gl_Position = vec4(position, 0.0, 1.0);
    }
  `;

  const fragShader = `
    precision mediump float;
    
    uniform float time;

    float linearGradient(float y, float height) {
      return (y / height);
    }

    float mod289(float x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
vec4 mod289(vec4 x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
vec4 perm(vec4 x){return mod289(((x * 34.0) + 1.0) * x);}

float noise(vec3 p){
    vec3 a = floor(p);
    vec3 d = p - a;
    d = d * d * (3.0 - 2.0 * d);

    vec4 b = a.xxyy + vec4(0.0, 1.0, 0.0, 1.0);
    vec4 k1 = perm(b.xyxy);
    vec4 k2 = perm(k1.xyxy + b.zzww);

    vec4 c = k2 + a.zzzz;
    vec4 k3 = perm(c);
    vec4 k4 = perm(c + 1.0);

    vec4 o1 = fract(k3 * (1.0 / 41.0));
    vec4 o2 = fract(k4 * (1.0 / 41.0));

    vec4 o3 = o2 * d.z + o1 * (1.0 - d.z);
    vec2 o4 = o3.yw * d.x + o3.xz * (1.0 - d.x);

    return o4.y * d.y + o4.x * (1.0 - d.y);
}

float map(float value, float min1, float max1, float min2, float max2) {
  return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}
    
    uniform vec3 tipColor;
    uniform vec3 bodyColor;
    uniform float yDist;
    
    void main() {


      float grad = (1.0 - linearGradient(gl_FragCoord.y,  yDist));
      vec2 pos = vec2(gl_FragCoord.x, gl_FragCoord.y * 5.0);
      float n1 = noise(vec3(gl_FragCoord.xy * 0.2 + vec2(0.0, time), time * 0.1));
      float n2 = noise(vec3(gl_FragCoord.xy * 0.1 + vec2(0.0, time), time * 0.1));
      float n3 = noise(vec3(gl_FragCoord.xy * 0.075 + vec2(0.0, time), time * 0.1));


      float fire = (n1 + n2 + n3) / 3.0;

      //float gradient2 = sin(map(gl_FragCoord.x + 15.0, 0.0, 280.0, 0.0, 1.0) * 3.14159);
      
      float color = (fire + grad);


    color = color * step(0.6, color);


      if(color > 0.1){
      vec4 color = mix( vec4(tipColor, 1.0), vec4(bodyColor, 1.0), color * 1.35);
      //gl_FragColor = vec4(1.0, 1.0 - (color + grad)/2.0, 0.0, color);
      gl_FragColor = color;
      } else { gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0); }

      

    } 
  `;


  const time = useRef(0);
  const yDist = useRef(46.0);
  const lastScrollY = useRef(0);
  const scrollSpeed = useRef(0.0);








  useEffect(() => {



    const canvas = canvasRef.current;
    const webGLCavnas = canvas.getContext('webgl');
    webGLCavnas.filter = 'none';


    const vert = webGLCavnas.createShader(webGLCavnas.VERTEX_SHADER);
    webGLCavnas.shaderSource(vert, vertShader);
    webGLCavnas.compileShader(vert);

    const frag = webGLCavnas.createShader(webGLCavnas.FRAGMENT_SHADER);
    webGLCavnas.shaderSource(frag, fragShader);
    webGLCavnas.compileShader(frag);


    const program = webGLCavnas.createProgram();
    webGLCavnas.attachShader(program, vert);
    webGLCavnas.attachShader(program, frag);


    webGLCavnas.linkProgram(program);


    const vertices = new Float32Array([
      -1, -1,
      1, -1,
      1, 1,
      -1, 1,
    ]);


    const buffer = webGLCavnas.createBuffer();

    webGLCavnas.bindBuffer(webGLCavnas.ARRAY_BUFFER, buffer);
    webGLCavnas.bufferData(webGLCavnas.ARRAY_BUFFER, vertices, webGLCavnas.STATIC_DRAW);

    webGLCavnas.linkProgram(program);

    const position = webGLCavnas.getAttribLocation(program, 'position');
    webGLCavnas.vertexAttribPointer(position, 2, webGLCavnas.FLOAT, false, 0, 0);

    const renderLoop = () => {

      webGLCavnas.clearColor(0.0, 0.0, 0.0, 1.0);
      webGLCavnas.clear(webGLCavnas.COLOR_BUFFER_BIT);
      time.current -= 0.02;
      scrollSpeed.current = window.scrollY - lastScrollY.current;
      lastScrollY.current = window.scrollY;
      yDist.current += scrollSpeed.current * 0.1;

      webGLCavnas.useProgram(program);

      webGLCavnas.enableVertexAttribArray(position);


      webGLCavnas.uniform1f(webGLCavnas.getUniformLocation(program, 'time'), time.current);
      webGLCavnas.uniform3fv(webGLCavnas.getUniformLocation(program, 'tipColor'), tipColor);
      webGLCavnas.uniform3fv(webGLCavnas.getUniformLocation(program, 'bodyColor'), bodyColor);
      webGLCavnas.uniform1f(webGLCavnas.getUniformLocation(program, 'yDist'), yDist.current);

      webGLCavnas.drawArrays(webGLCavnas.TRIANGLE_FAN, 0, 4);
      requestAnimationFrame(renderLoop);
    }

    renderLoop();








  }, []);







  return (
    <div style={{ margin: "0", padding: "0" }}>
      <canvas ref={canvasRef} id="myCanvas" width={128 * 1} height={72 * 1} style={{ position: "fixed", width: "100vw", height: "100vh", bottom: "0", left: "0", imageRendering: "pixelated", margin: "0", zIndex: "0", }}></canvas>
    </div >
  );
};





HtmlCanvas.propTypes = {
  width: propTypes.number,
  height: propTypes.number,
};


export default HtmlCanvas;
