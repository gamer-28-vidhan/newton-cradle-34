class roof {


constructor(x,y,width,height,angle)

{
    var f = {

		isStatic:true
	}

    this.body = Bodies.rectangle(x,y,width,height,f)
    this.width=width
    this.height=height
	World.add(world,this.body)
	



}

display(){

var cd = this.body.position
var angle = this.body.angle

rectMode(CENTER);
fill ("yellow")
strokeWeight(2)
rect(cd.x, cd.y, this.width, this.height)

push ();
translate(cd.x, cd.y)
rotate (angle)
pop ();



}
}