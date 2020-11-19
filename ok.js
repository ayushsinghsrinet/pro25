class ok {
    constructor(x,y,width,height){
        var an={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,an)
        this.height=height
        this.width=width
        World.add(world,this.body)
    }
    display(){
        fill(255)
     
        rect(this.body.position.x,this.body.position.y,this.width,this.height)
    }
}