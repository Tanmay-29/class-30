class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.visiblity=255;
    this.x=x;
    this.y=y;
    this.width=50;
    this.height=50;
  }
  display(){
    console.log(this.body.speed)
    if(this.body.speed<3)
    super.display();
    else{
      World.remove(world,this.body);
      push();
      this.visiblity=this.visiblity-5;
      tint(255,this.visiblity);
      image(this.image,this.x,this.y,this.width+50,this.height+50);
      pop();

    }
  }

};