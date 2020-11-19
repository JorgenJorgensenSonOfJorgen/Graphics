//Drawing Ak-47 One Tap Machine

//Canvas Setup
cnv = document.getElementById("canvas")
ctx = cnv.getContext("2d")
cnv.height = 800
cnv.width = 800

//call function ak(x coordinate, y coordinate, scaling factor, mode, barrel length, color 1, color 2, color 3)
ak(300,100,50, "fill", 8, "saddlebrown", "dimgrey","black")
ak(600,100,50, "fill", 8, "blue", "black","grey")

ak(800,200,200, "fill", 8, "saddlebrown", "dimgrey","black")
ak(800,400,20, "fill", 50, "blue", "black","grey")
ak(300,500,50, "stroke", 8, "saddlebrown", "dimgrey","black")
