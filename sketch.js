var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var car1,car2,car3,car4;

var cars;

function setup(){
  canvas = createCanvas(displayWidth - 20,displayHeight - 30);
  database = firebase.database();
  database.ref('/').update({
    playerCount: 0,
    gameState: 0
  });
  database.ref('players/player1').update({
    name: "",
    distance: 0
  });
  database.ref('players/player2').update({
    name: "",
    distance: 0
  });
  database.ref('players/player3').update({
    name: "",
    distance: 0
  });
  database.ref('players/player4').update({
    name: "",
    distance: 0
  });
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
}
