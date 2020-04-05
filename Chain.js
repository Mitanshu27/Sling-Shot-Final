class Slingshot
{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    display()
    {
        if(this.chain.bodyA)
        {
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;
        push();
        strokeWeight(4);
        stroke("#7F9F32");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        line(pointA.x,pointA.y,pointB.x+20,pointB.y+15);
        pop();
        }
    }
    attach(body)
    {
        this.chain.bodyA = body;
    }
    fly()
    {
        this.chain.bodyA = null;
    }
    
    
}