let points = [];
let lines;
let myDiv;
let mypara;
function setup() {
  createCanvas(400, 400);

  myDiv = createDiv();

  lines = createSlider(0.1, TWO_PI, TWO_PI, 0.1);
  mypara = createP(
    "Adjust the  slider to increase number of lines and see the illusion"
  );
  lines.style("direction", "rtl");
  lines.style("background", "#000");
  lines.style("cursor", "pointer");
  lines.changed(createPoints);
  myDiv.child(mypara);
  myDiv.child(lines);

  function createPoints() {
    points = [];
    for (let angle = 0; angle < TWO_PI; angle += lines.value()) {
      let x = 100 * cos(angle);
      let y = 100 * sin(angle);
      points.push({
        x: x,
        y: y,
        rate: angle,
        c: { r: random(255), g: random(255), b: random(100) },
      });
    }
  }
  createPoints();
}

function draw() {
  translate(width / 2, height / 2);
  background(0);
  stroke(225);
  noFill();
  ellipse(0, 0, 200, 200);
  for (pt of points) {
    line(pt.x, pt.y, -pt.x, -pt.y);
    fill(pt.c.r, pt.c.g, pt.c.b);
    ellipse(pt.x * sin(pt.rate), pt.y * sin(pt.rate), 10, 10);
    pt.rate += 0.01;
  }
}
