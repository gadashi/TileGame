class Camera{

	//should later be used for drawing and moving the camera

	constructor(){
		this.x = 87;
		this.y = 50;
    this.tileSize = 40;
		this.camSpeed=10;
		this.zoomSpeed=1;
    this.dx = 0;
    this.dy = 0;
		//this.maxCanSizex = 600;
		//this.maxCanSizey = 400;
	}

	moveCam(){
    // console.log(this.dx,this.dy,this.x,this.y);
    //visual bugs at border
		this.x += this.dx * this.camSpeed;
		this.y += this.dy * this.camSpeed;
    if(this.x < 0 || this.x > tileMap.rows * this.tileSize - can.width){
      this.x -= this.dx * this.camSpeed;
    }
    if(this.y < 0 || this.y > tileMap.cols * this.tileSize - (can.height +1)){
      this.y -= this.dy * this.camSpeed;
    }
    this.drawScreen();
		//figure out which tiles to draw now
	}

	zoomCam(z){
		this.tileSize += z * this.zoomSpeed;
	}

	drawTile(x,y,type){
    //draw sprites not colors and attach sprites to tiles
				if(type == "grass"){c.fillStyle = "green";}
				else if(type == "water"){c.fillStyle = "blue";}
				else if(type == "gold"){c.fillStyle = "gold";}
				c.fillRect(x * this.tileSize - this.x,y * this.tileSize - this.y,this.tileSize,this.tileSize);
  }


  drawBuilding(x,y,name){

    // if(can.width / this.zoom > x && can.height/this.zoom > y){				//draw sprites not colors
    //   if(name == "Base"){c.fillStyle = "red";}
    //   else if(name == "Wall"){c.fillStyle = "Grey";}
    //   else if(name == "Mine"){c.fillStyle = "yellow";}
    //   else if(name == "Tower"){c.fillStyle = "white";}
    //
    //   c.fillRect(x * this.zoom,y * this.zoom,this.zoom,this.zoom);
    // }
    //
    // this.drawSelector();
  }


  //create menu overlay
  drawSelector(){
    c.fillStyle = "black";
    c.fillRect(0,can.height - 75, can.width,75);
  }

  drawScreen(){
    let startTx = Math.floor(this.x/this.tileSize),
        maxTx = Math.floor((this.x + can.width)/this.tileSize);
    let startTy = Math.floor(this.y/this.tileSize),
        maxTy = Math.floor((this.y + can.height)/this.tileSize);
    for(var i = startTx;i<=maxTx;i++){
      for(var j = startTy;j<=maxTy;j++){
        // console.log(i,j,tileMap.tiles[i][j]);
        let te =  tileMap.tiles[i][j];
        this.drawTile(te.x,te.y,te.type);
      }
    }


  }



}
