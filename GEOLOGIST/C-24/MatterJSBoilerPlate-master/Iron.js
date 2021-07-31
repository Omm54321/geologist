class Iron {
    constructor(x, y) {
      var options = {
          'restitution':0.4,
          'friction':1.0,
          'density':1.0,
      }
       this.width = 40;
      this.height = 50;
      this.body = Bodies.rectangle(x, y, 40, 50, options);
     
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("blue");
      rect(0, 0, 40, 50);
      pop();
    }
  };
  