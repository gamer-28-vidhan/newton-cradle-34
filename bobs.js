class bobObj {


constructor(x,y,angle) {

    var opt = {

        isStatic:false,
        restitution:1
    }

this.body = Bodies.circle(x,y,60,opt)
this.width=width
this.height=height
World.add(world,this.body)


}


display() {

var angle = this.body.angle
    var ji = this.body.position

ellipseMode(RADIUS)
fill ("red")
ellipse(ji.x,ji.y, 60)

push ();
translate(ji.x, ji.y)
rotate (angle)
pop ();





}









}