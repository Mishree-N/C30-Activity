//create ground class
class Ground {

    //give any x,y,width and height
    constructor (x,y,width, height){
        //setup width and height
        this.width = width;
        this.height = height;
        //give restitution option
        var ground_options = {
            isStatic : true
        }
        //create ground body
        this.body = Bodies.rectangle (x, y, this.width, this.height, ground_options);
        //add ground body to world
        World.add (myWorld, this.body );
    }

    //display function to show 
    display () {
        //make pos variable to control positions
        var pos =this.body.position;
        //make rectMode center
        rectMode(CENTER);
        //color and make rectangle visible
        fill("brown");
        rect(pos.x, pos.y, this.width, this.height);
        
    }
}