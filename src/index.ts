import _ from "radash";
import p5 from "p5";

const sketch = (p5: p5) => {
  p5.setup = () => {
    // Run at start
    p5.createCanvas(window.innerWidth, window.innerHeight);
  };

  p5.draw = () => {
    // Runs every frame
    p5.circle(50, 50, 50);
  };
};

const P5 = new p5(sketch);
