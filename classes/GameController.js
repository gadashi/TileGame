class GameController{



  constructor(){
    //start the game with 100 gold
    this.money = 100;
    this.initializeGame();
    this.selectedBuilding = new Wall();
    this.enemies = [];
    //createEnemies(5);
  }

  initializeGame(){
    //create the Base
    let success = false;
    let x, y;
    while(!success){
    x = Math.floor(Math.random() * tileMap.rows);
    y = Math.floor(Math.random() * tileMap.cols);
    success = tileMap.tiles[x][y].constructBuilding(new Base(x,y));

    }
    console.log(tileMap.tiles[x][y]);
  }

  gameOver(){

  }

  createEnemies(){}

}
