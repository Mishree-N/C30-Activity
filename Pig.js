//create pig class using base class
class Pig extends baseClass {

    constructor (x,y){

        
        //create body
        super(x,y,50,50);
        //add image
        this.image=loadImage("sprites/enemy.png");
        //give maximum visibility
        this.Visibilty=255;

    }
    display (){
        console.log (this.body.speed);
        if (this.body.speed < 3) {
            super.display ();
        } else {

            console.log("in else")

            World.remove (myWorld, this.body);
            
            push ();
            this.Visibility = this.Visibility-3;
            tint (255,this.Visibility);
           
            image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
            pop ();
        }
    }
}







/*create pig class
class Pig {

    //give any x,y,width and height
    constructor (x,y){
        //setup width and height as 50
        this.width = 50;
        this.height = 50;
        //give restitution, friction and density option
        var pig_options = {
            restitution : 0.8, 
            friction : 1,
            density : 1
        }
        //create pig body
        this.body = Bodies.rectangle (x, y, this.width, this.height, pig_options);
        //add pig body to world
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
        fill("green");
        rect(0, 0, this.width, this.height);
        //push & pop are a pair
        pop ();
        
    }
}*/