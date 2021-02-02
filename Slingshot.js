class Slingshot {

    constructor (BodyX,PointY){

        var options = {

            bodyA : BodyX,
            pointB : PointY,
            stiffness : 0.04,
            length : 10
        }

        //load images
        this.image1=loadImage("sling1.png");
        this.image2=loadImage("sling2.png");
        this.image3=loadImage("sling3.png");

        //this.pointB = pointY;
        this.slingshot=Constraint.create(options);

        World.add(myWorld,this.slingshot);

    }

    display(){

        //show image for catapult even if body a doesn't have a value
        image(this.image1,200,20);
        image(this.image2,170,20);

        //if bodyA still has a value,
        if (this.slingshot.bodyA){

            var pointA, pointB;

            pointA=this.slingshot.bodyA.position;
            pointB=this.slingshot.pointB;

            strokeWeight (8);
            stroke (137,77,39);

            //when bird is behind catapult,
            if (pointA.x<220){

                //create constraint lines and image
                line (pointA.x-20, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x-20,pointA.y, pointB.x+30, pointB.y-3);
                image (this.image3,pointA.x-30, pointA.y-10, 15,30);
                
            } else {

                //else, arrange them differently and make them thinner
                strokeWeight(4);
                line (pointA.x+25, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x+25,pointA.y, pointB.x+30, pointB.y-3);
                image (this.image3,pointA.x+25, pointA.y-10, 15,30);

            }


        }

    }

    //to make bird fly
    fly (){

        //make value of bodyA nothing to make bird fly
        this.slingshot.bodyA = null;

    }

    attach (body){

        this.slingshot.bodyA=body;

    }

}