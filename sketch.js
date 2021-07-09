var canvas, backgroundImage;
var car1,car2,car3,car4;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var arrcar

function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  car1 = createSprite(100,displayHeight-30,20,20)
  car2 = createSprite(200,displayHeight-30,20,20)
  car3 = createSprite(300,displayHeight-30,20,20)
  car4 = createSprite(400,displayHeight-30,20,20)
  arrcar = [car1,car2,car3,car4];
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  //drawSprites();
}
