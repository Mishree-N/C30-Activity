//create constant engine world and bodies
const Engine = Matter.Engine ;
const World = Matter.World; 
const Bodies = Matter.Bodies; 
const Constraint = Matter.Constraint; 
const Render = Matter.Render;

//create my engine and my world
var myEngine, myWorld ; 



//variables
var ground ; 
var box1, box2, box3, box4, box5;
var pig1, pig2;
var log1, log2, log3, log4;
var bird;
var backgroundImg;
var slingshot;
var platform;

function preload(){

  //load background image
  backgroundImg=loadImage("sprites/bg.png");

}

function setup() {
  createCanvas(1200,400);

  //this line of code will be constant and it is used to make the engine and world
  myEngine = Engine.create ();
  myWorld = myEngine.world;

  //create ground body and add options
  ground = new Ground (600,height,1200,20);

  //create 1st layer boxes
  box1 = new Box (700,320,70,70);
  box2=new Box (920,320,70,70);
  //create 1st layer pig using pig class
  pig1 = new Pig (810,350);
  //create 1st layer log
  log1= new Log (810,260,300,PI/2);
  

  //create 2nd layer boxes
  box3= new Box(700,240,70,70);
  box4= new Box(920,240,70,70);
  //2nd layer pig
  pig2 = new Pig (810,220);
  //2nd layer log
  log2=new Log(810,180,300,PI/2);

  //create 3rd layer box
  box5 = new Box(810,160,70,70);
  //create 3rd layer logs
  log3= new Log(760,120,150,PI/7);
  log4=new Log (870,120,150,-PI/7);

  //create platform
  platform=new Ground(180,305,300,170);

  //create bird
  bird = new Bird (200,50);

  //create slingshot
  slingshot=new Slingshot(bird.body, {x: 200, y:50});

  //create rendering display
  /*
  var render = Render.create({
      element: document.body,
      engine: myEngine,
      options: {
      width: 1200,
      height: 700,
      wireframes: false
    }
  });
*/
  //run the render
  //Render.run (render);
}

function draw() {
  background(backgroundImg); 
  
  //keep engine updated to make code work; this is also a constant line of code that you will repeat everytime 
  Engine.update (myEngine);

  //display ground
  ground.display();

  //display 1st layer box
  box1.display();
  box2.display();
  //display 1st layer pigs
  pig1.display();
  //display 1st layer log
  log1.display();

  //display 2nd layer box
  box3.display();
  box4.display();
  //display 2nd layer pigs
  pig2.display();
  //display 2nd layer log
  log2.display();

  //display 3rd layer box
  box5.display();
  //display 3rd layer logs
  log3.display();
  log4.display();

  //display platform
  platform.display();

  //display bird
  bird.display();

  //display rope
  slingshot.display();

}


//mouse dragged function
function mouseDragged(){

  //let mouse drag bird
  Matter.Body.setPosition(bird.body,{x : mouseX, y: mouseY});

}

//mouse released function
function mouseReleased(){

  //let bird fly
  slingshot.fly();

}

function keyPressed (){

  if (keyCode === 32){

    slingshot.attach(bird.body);

  }

}