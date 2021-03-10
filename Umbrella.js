class Umbrella {
  constructor(x, y) {
    var options = {
      isStatic: true,
    };
    this.body = Bodies.circle(x, y, 120, options);
    World.add(world, this.body);

    this.image = loadImage("images/Walking Frame/walking_1.png");
  }
  display() {
    var pos = this.body.position;
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, 300, 300);
  }
}
