const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var maxDrops = 100;
var drops = [];

function preload() {
  thunder1 = loadImage("images/thunderbolt/1.png");
  thunder2 = loadImage("images/thunderbolt/2.png");
  thunder3 = loadImage("images/thunderbolt/3.png");
  thunder4 = loadImage("images/thunderbolt/4.png");

  rainbow = loadImage("images/rainbow gif.gif");
}

function setup() {
  var canvas = createCanvas(500, 600);
  engine = Engine.create();
  world = engine.world;

  base = createSprite(250, 150);
  base.addImage(rainbow);
  base.scale = 0.4;

  if (frameCount % 100 === 0) {
    for (var i = 0; i < maxDrops; i++) {
      drops.push(new Drops(random(0, 600), random(0, 200)));
    }
  }

  umbrella = new Umbrella(300, 450);
}

function draw() {
  Engine.update(engine);
  background("black");

  for (var i = 0; i < maxDrops; i++) {
    drops[i].display();
    drops[i].update();
  }
  umbrella.display();

  var rand = Math.round(random(1, 4));
  if (frameCount % 40 === 0) {
    thunder = createSprite(random(10, 350), random(10, 30), 10, 10);
    switch (rand) {
      case 1:
        thunder.addImage(thunder1);
        break;
      case 2:
        thunder.addImage(thunder2);
        break;
      case 3:
        thunder.addImage(thunder3);
        break;
      case 4:
        thunder.addImage(thunder4);
        break;
      default:
        break;
    }
    thunder.lifetime = 10;
    thunder.scale = 0.5;
  }

  drawSprites();
}
