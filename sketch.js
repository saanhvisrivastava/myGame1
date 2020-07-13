var form,player;
var gameState=0;

function setup(){
  createCanvas(displayWidth,displayHeight-30);
 form=new Form();

}
function draw(){
  background("pink");
  if(gameState===1){
    player=new Player();
    //clear();
    player.display();
    
    }

  

form.display();
}
function keyPressed(){
  if(keyCode===UP_ARROW){
      player.y=player.y-5;
      console.log(player.y);
  }
}
