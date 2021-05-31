class Paper
{
    constructor(x,y,r)
    {
        var options3={
		isStatic:false,
            friction:	0.5,
            restitution:0.3,
            density:1.2,		
			}
		this.x=x;
		this.y=y;
		this.r=r
		
		
		this.image = loadImage("paper.png");
		this.body=Bodies.circle(this.x, this.y, this.r/2, options3);
 		World.add(world, this.body);

		 
      
    }
    display()
	{
			
			var paperPos=this.body.position;		

			push()
			translate(paperPos.x, paperPos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128);

			ellipse(0,0,this.r, this.r);
			pop()
			
	}
}