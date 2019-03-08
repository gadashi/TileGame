//DO ALL THE BULKY SETUP WORK HERE
var can = document.getElementById("can"),
	 c = can.getContext("2d");

   //create a Camera for displaying
   let cam = new Camera();
   //create a new tilemap
   let tileMap = new TileMap(55,35);
   //create the gamecontroller
   let ctrl = new GameController();
   console.log("gogo");
   cam.drawScreen();
