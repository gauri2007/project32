class Box {
  constructor(x, y, width, height){
    this.image = loadImage("sprites/wood1.png");
    var options = {
          isStatic: false
          }
    this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.visibility=255;
      World.add(world, this.body);
  }
  display(){
    if((this.body.speed)<3){
    var angle =this.body.angle;
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y)
      rotate(angle)
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      pop();
    }
    else{
    World.remove(world,this.body)
    push();
    this.Visibility=this.Visibility-1
    tint(255,this.Visibility)
    image(this.image,this.body.position.x,this.body.position.y,50,50)
    pop();
    }
      
      
    }

};
