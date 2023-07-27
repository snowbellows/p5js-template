import _ from "radash";
import p5 from "p5";

const sketch = (p: p5) => {
  p.setup = () => {
    // Run at start
    p.createCanvas(window.innerWidth, window.innerHeight);
  };

  p.draw = () => {
    // Runs every frame
    p.circle(50, 50, 50);
  };
};

const P5 = new p5(sketch);
