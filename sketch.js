function setup() {
  createCanvas(400, 200);
  background(" rgb(247,206,241)")
 }

 function   draw() {
    stroke(" rgb (140,140,241)" );
     fill("red");   
          
    if(mouseIsPressed){       
       rect(mouseX,    mouseY, 40,   40);     
      }     
    }       