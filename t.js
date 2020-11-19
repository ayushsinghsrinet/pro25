class t{
    constructor(x,y,width,height){
        
        this.body=Bodies.rectangle(x,y,width,height)
        this.height=height
        this.width=this.width
       
        World.add(world,this.body)
    }
    display(){
        fill(255)
        rect(this.body.position.x,this.body.position.y,this.width,this.height)
    }
}