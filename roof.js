
class Roof
{
    constructor(x,y,width,height)
    {
        var roof_options={
            isStatic: true
        }
        this.body=Bodies.rectangle(x,y,width,height,roof_options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }

    display()
    {
        var pos=this.body.position
        rectMode(CENTER)
        fill('red')
        rect(pos.x-10,pos.y-10,this.width,this.height);
    }
}
