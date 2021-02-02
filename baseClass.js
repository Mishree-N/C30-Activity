//create BASE class
class baseClass {

    //give any x,y,width and height
    constructor (x,y, width, height, angle){
        //setup width and height
        this.width = width;
        this.height = height;
        //give restitution, friction and density option
        var base_options = {
            restitution : 0.8,
            friction : 1,
            density:1
        }
        //add image
        this.image=loadImage("sprites/base.png");
        //create  body
        this.body = Bodies.rectangle (x, y, this.width, this.height, base_options);
        //add body to world
        World.add (myWorld, this.body );
    }

    //display function to show 
    display () {

        //make pos variable to control positions
        var pos =this.body.position;
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
}