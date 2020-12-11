class Rope{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA, pointB:pointB, stiffness:0.2, length:300
        }
        this.rope= Constraint.create(options)
        World.add(world,this.rope)
    }
    display(){
var posA=this.rope.bodyA.position
var posB=this.rope.pointB
strokeWeight(4.8)
fill(254, 254, 242)
line(posA.x,posA.y,posB.x,posB.y)
}
}