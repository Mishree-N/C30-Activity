//use base parent class to create bird class
class Bird extends baseClass{

    constructor(x,y){

        //create body for bird
        super(x,y,50,50);
        //add image to bird
        this.image=loadImage("sprites/bird.png");
    }

    display(){

        //use key controls to move bird
        //this.body.position.x=mouseX;
        //this.body.position.y=mouseY;

        //link display to base class display
        super.display();

    }

}



/*create bird class
class Bird {

    //give any x,y,width and height
    constructor (x,y){
        //setup width and height
        this.width = 50;
        this.height = 50;
        //give restitution, friction and density option
        var bird_options = {
            restitution : 0.8,
            friction : 1,
            density:1
        }
        //add image
        this.image=loadImage("sprites/bird.png");
        //create bird body
        this.body = Bodies.rectangle (x, y, this.width, this.height, bird_options);
        //add bird body to world
        World.add (myWorld, this.body );
    }

    //display function to show 
    display () {

        //make pos variable to control positions
        var pos =this.body.position;
        //use mouse to move bird
        pos.x=mouseX;
        pos.y=mouseY;
        //control angle
        var angle=this.body.angle;
        //push lets you make properties only available to a portion of the code 
        push ();
        //translate lets you change the position of the origin, in this case it makes it the x and y position to the center of any object you make so that the object will rotate on it's center
        translate (pos.x,pos.y);
        //this is required to make rotate work
        angleMode (RADIANS);
        //Rotate the body
        rotate (angle);
        //make imageMode center
        imageMode (CENTER);
        image(this.image, 0, 0, this.width, this.height);
        //push & pop are a pair
        pop ();
        
    }
}*/