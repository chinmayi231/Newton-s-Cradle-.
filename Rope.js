class Rope {

    constructor(body1, body2, offsetX, offsetY) {
    
this.offsetX = offsetX;
this.offsetY = offsetY;

        var options = {
    
            isStatic : true,
            bodyA : body1,
            bodyB : body2,
            stiffness : 0.5,
           pointB : {x : this.offsetX, y : this.offsetY }
            
            }
        
           this.rope = Constraint.create(options);
           World.add(world, this.rope);

    }
    
    display() {
        
    

    var pointA = this.rope.bodyA.position;
    var pointB = this.rope.bodyB.position;
    
    

    var Anchor1X = pointA .x
    var Anchor1Y = pointA.y

    var Anchor2X = pointB.x + this.offsetX
    var Anchor2Y = pointB.y + this.offsetY

    strokeWeight(3);
    
    stroke(255);

    line(Anchor1X, Anchor1Y, Anchor2X, Anchor2Y);
    
    
    
    }
    
    }