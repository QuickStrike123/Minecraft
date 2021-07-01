Canvas = new fabric.Canvas("Canvas");

BlockImageWidth = 30;

BlockImageHeight = 30;

PlayerX = 10;

PlayerY = 10;

PlayerObject = "";

BlockObject = "";

function PlayerUpdate() {
    
    fabric.Image.fromURL("player.png",function(Img){

        PlayerObject = Img;

        PlayerObject.scaleToWidth(150);

        PlayerObject.scaleToHeight(150);

        PlayerObject.set({

            top:PlayerY,

            left:PlayerX

        });

        Canvas.add(PlayerObject);

    });

}

function NewImage(GetImage) {
    
    fabric.Image.fromURL(GetImage,function(Img){

        BlockObject = Img;

        BlockObject.scaleToWidth(150);

        BlockObject.scaleToHeight(150);

        BlockObject.set({

            top:PlayerY,

            left:PlayerX

        });

        Canvas.add(BlockObject);

    });

}

window.addEventListener("keydown",KeyDown);

function KeyDown(e) {

    var KeyPressed = e.keyCode;

    console.log(KeyPressed);

    if (e.shiftKey == true && KeyPressed == "80") {

        console.log("P And Shift Pressed Together");

        BlockImageHeight = BlockImageHeight + 10;

        BlockImageWidth = BlockImageWidth + 10;

        document.getElementById("Current_Width").innerHTML = BlockImageWidth;

        document.getElementById("Current_Height").innerHTML = BlockImageHeight;
        
    }

    if (e.shiftKey == true && KeyPressed == "77") {

        console.log("M And Shift Pressed Together");

        BlockImageHeight = BlockImageHeight - 10;

        BlockImageWidth = BlockImageWidth - 10;

        document.getElementById("Current_Width").innerHTML = BlockImageWidth;

        document.getElementById("Current_Height").innerHTML = BlockImageHeight;
        
    }

    if (KeyPressed == "38") {

        Up();

        console.log("Up");
        
    }

    if (KeyPressed == "40") {

        Down();

        console.log("Down");
        
    }

    if (KeyPressed == "37") {

        Left();

        console.log("Left");
        
    }

    if (KeyPressed == "39") {

        Right();

        console.log("Right");
        
    }

    if (KeyPressed == "67") {

        NewImage("cloud.jpg");

        console.log("C");
        
    }

    if (KeyPressed == "68") {

        NewImage("dark_green.png");

        console.log("D");
        
    }

    if (KeyPressed == "71") {

        NewImage("ground.png");

        console.log("G");
        
    }

    if (KeyPressed == "76") {

        NewImage("light_green.png");

        console.log("L");
        
    }

    if (KeyPressed == "82") {

        NewImage("roof.jpg");

        console.log("R");
        
    }

    if (KeyPressed == "84") {

        NewImage("trunk.jpg");

        console.log("T");
        
    }

    if (KeyPressed == "85") {

        NewImage("unique.png");

        console.log("U");
        
    }

    if (KeyPressed == "87") {

        NewImage("wall.jpg");

        console.log("W");

    }

    if (KeyPressed == "89") {

        NewImage("yellow_wall.jpg");

        console.log("Y");
        
    }

}