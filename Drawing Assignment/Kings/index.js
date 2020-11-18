//Drawing The King

//Canvas Setup
cnv = document.getElementById("canvas")
ctx = cnv.getContext("2d")
cnv.height = 1000
cnv.width = 1900

//Draw the king (x coordinate, y coordinate, scaling factor, fill/stroke, colour, ring size, legnth of king, width of king)
king(300,100,20, "fill", "black", 20, 20/2.5, 20)
king(500,200,30, "fill", "red", 50, 2, 6)
king(800,0, 100, "stroke", "blue", 2,3,100)


