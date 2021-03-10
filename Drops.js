class Drops {
  constructor(x, y) {
    var options = {
      restitution: 0.1,
      friction: 0.1,
    };
    this.body = Bodies.circle(x, y, 5, options);
    World.add(world, this.body);

    this.radius = 7;
  }
  display() {
    var pos = this.body.position;

    fill("blue");
    ellipseMode(CENTER);
    ellipse(pos.x, pos.y, this.radius);
  }
  update() {
    if (this.body.position.y > height) {
      Matter.Body.setPosition(this.body, {
        x: random(0, 400),
        y: random(0, 400),
      });
    }
  }
}
