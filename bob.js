class Bob
{
    constructor(x,y,radius)
    {
        var bob_options={
            isStatic:false,
            restitution:1,
            friction:0,
            density:2
        }
        this.body=Matter.Bodies.circle(x,y,radius,bob_options);
        this.radius=radius;
        World.add(world,this.body);
    }

    display()
    {
        ellipseMode(CENTER)
        var pos=this.body.position
        fill('pink')
        ellipse(pos.x,pos.y,this.radius*2);
    }
}