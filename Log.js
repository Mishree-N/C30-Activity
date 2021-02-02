//create log class using base class
class Log extends baseClass {

    constructor (x,y,height,angle){

        //create body
        super(x,y,20,height,angle);
        //add image
        this.image=loadImage("sprites/wood2.png");
        //set angle for log body
        Matter.Body.setAngle (this.body, angle);

    }

}





/*create log class
class Log {

    //give any x,y,width and height
    constructor (x,y, height, angle){
        //setup width and height
        this.width = 20;
        this.height = height;
        //give restitution, friction and density option
        var log_options = {
            restitution : 0.8,
            friction : 1,
            density : 1
        }
        //create log body
        this.body = Bodies.rectangle (x, y, this.width, this.height, log_options);
        //set angle for log body
        Matter.Body.setAngle (this.body, angle);
        //add log body to world
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
        //make rectMode center
        rectMode(CENTER);
        //color and make rectangle visible
        fill("red");
        rect(0, 0, this.width, this.height);
        //push & pop are a pair
        pop ();
        
    }
}*/