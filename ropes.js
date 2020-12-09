class rope{
    constructor(body1, body2, offsetX, offsetY){
        
        this.offsetX = offsetX
        this.offsetY = offsetY

        var options = {
            bodyA: body1,
            bodyB:body2,
            pointB: {x:this.offsetX, y:this.offsetY},
            stifness:0.04,
            length:500
            
        }

       
        this.string = Constraint.create(options);
        World.add(world, this.string);
    }

   // fly(){
      //  this.string.bodyA = null;
   // }


    display(){
      if(this.string.bodyA) {
        var pointA = this.string.bodyA.position
        var pointB1 = this.string.bodyB.position.x + this.offsetX
        var pointB2 = this.string.bodyB.position.y + this.offsetY
      


        strokeWeight(4);
        line(pointA.x, pointA.y, pointB1, pointB2);
      }
    }




}







