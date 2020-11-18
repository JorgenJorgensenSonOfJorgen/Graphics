
//draw a rect
function rect(x1, y1, w, h, mode){
    if (mode == "fill"){
        ctx.fillRect(x1, y1, w, h)
    } else {
        ctx.strokeRect(x1, y1, w, h)
    }
}

//draw a line
function line(x1, y1, x2, y2) {
    
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2)
    ctx.stroke();
};

//draw a cricle
function circle(x, y, r ,mode){
    ctx.beginPath()
    ctx.arc(x, y, r, 0 ,2* Math.PI)
    if(mode == "fill"){
        ctx.fill()
    } else {
        ctx.stroke()
    } 
}

//draw a triangle
function triangle (x1, y1, x2, y2, x3, y3, mode){
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2)
    ctx.lineTo(x3,y3)
    if (mode == "stroke"){
        ctx.closePath();
        ctx.stroke();
    } else {
        ctx.fill()
    }

}
//draw a text
function text(message, x,y,size,font, mode){
    console.log(size + " " + font)
    ctx.font = size + " " + font;
    ctx.fillText(message, x , y)
}

//draw ellipse
function ellipse(x,y, rx, ry, mode){
    ctx.beginPath();
    ctx.ellipse(x, y, rx ,ry, 0, 0, 2*Math.PI)
    if (mode == "fill") {
        ctx.fill()
    } else {
        ctx.stroke()
    }
}
//draw king
function king(x,y,w, mode, Style, rs, crossW, crossH){ 
    //set the colors and drawing style
    ctx.fillStyle = Style
    ctx.strokeStyle = Style
    //draw the cross in an overcomplicated way
    rect(x + 0.5*w - 1/2*crossH, y+ w -(crossH + crossW)/2,crossH,crossW, mode)
    rect(x+ 0.5*w - crossW/2,y +w - crossH, crossW,crossH, mode)
    //draw the trapezoid
    ctx.beginPath()
    ctx.moveTo(x-w/2,y+w)
    ctx.lineTo(x-w/25, y+w*2)
    ctx.lineTo(x+w*26/25,y+w*2)
    ctx.lineTo(x+w*1.5,y+w)
    ctx.closePath()
    if (mode == "fill"){
        ctx.fill()
    } else {
        ctx.stroke()
    }
    //draw first 2 rings
    ellipse(x+w/2,y+w*2.1,0.9*rs,w*0.2, mode) 
    ellipse(x+w/2,y+w*2.45,1.1*rs,w*0.25, mode)
    //draw the curved body
    ctx.beginPath()
    ctx.ellipse(x - 1.8*w, y+4*w, w*9/5,w*4,0 ,-0.12*Math.PI, 0.4*Math.PI)
    ctx.ellipse(x+2.8*w, y+4*w, w*9/5, w*4, 0, 0.6*Math.PI, 1.12*Math.PI)
    if (mode == "fill"){
        ctx.fill()
    } else {
        ctx.stroke()
    }
    //draw final ring
    ellipse(x+w/2, y+w*7.2,1.6*rs,w*0.4, mode)
}
