class Box extends BaseClass{
  constructor(x, y, width, height, angle, image) {
     super(x,y,50,50,0,image);
     this.Visiblity = 255;
    }
    display()
    {    
      if(this.body.speed < 5)
      {
        super.display();
      }
      else
      {
        World.remove(world,this.body);
        push();
        this.Visiblity = this.Visiblity - 5;
        tint(255,this.Visiblity);
        image(this.image,this.body.position.x, this.body.position.y,50,50); 
        pop();   
        boxes.pop();
      }
          
        
        
      
    }
    score1()
    {
      if(this.Visiblity > 5 && this.Visiblity < 15)
      {
        score = score + 1;
      }
    }
}