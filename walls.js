class bound {

constructor(x,y,width,height) {

    var w ={
        isStatic:true
    }
this.body = Bodies.rectangle(x,y,width,height,w)
this.width=width
this.height=height
this.image = loadImage("images/dustbingreen.png")
World.add(world,this.body)


}

display() {

    var hi = this.body.position

rectMode(CENTER)
fill ("red")
rect(hi.x,hi.y,this.width,this.height)






}











}