
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
//drawing the ak
function ak(x,y,s, mode, barrelL,c1,c2,c3){
    //draw stock
    ctx.strokeStyle = c1
    ctx.fillStyle = c1
    ctx.beginPath()
    ctx.moveTo(x,y)
    ctx.lineTo(x-s,y)
    ctx.lineTo(x-s,y+1/4*s)
    ctx.lineTo(x-3/5*s,y+1/4*s)
    ctx.lineTo(x,y+0.5*s)
    if (mode == "fill") {
        ctx.fill()
    } else {
    ctx.closePath()
    ctx.stroke()
    }
    //draw body
    ctx.beginPath()
    ctx.moveTo(x-2*s,y-0.2*s)
    ctx.lineTo(x-3*s, y- 0.1*s)
    ctx.lineTo(x-3*s, y+0.2*s)
    ctx.lineTo(x-2*s, y+ 0.3*s)
    if (mode == "fill"){
        ctx.fill()
    } else {
    ctx.closePath()
    ctx.stroke()
    }
    ctx.strokeStyle = c2
    ctx.fillStyle = c2
    rect(x-2*s,y-0.2*s,s,0.5*s, mode)
    //barrel
    rect(x-3*s-barrelL*10,y+0.1*s,barrelL*10,0.1*s, mode)
    //weird thing
    rect(x-3.5*s, y -0.1*s, 0.5*s, 0.1*s, mode)
    rect(x-3.6*s, y -0.1*s, 0.1*s, 0.2*s, mode)
    //magazine
    ctx.beginPath()
    ctx.arc(x-2.5*s, y + 0.3*s,0.8*s,0,0.3*Math.PI)
    ctx.stroke()
    ctx.beginPath(0)
    ctx.arc(x-2.5*s, y + 0.3*s,0.5*s,0,0.4*Math.PI)
    ctx.moveTo(x-2.5*s + 0.5*s*Math.cos(0.4*Math.PI), y+0.3*s +0.5*s*Math.sin(0.4*Math.PI))
    ctx.lineTo(x-2.5*s + 0.8*s*Math.cos(0.3*Math.PI), y+0.3*s+0.8*s*Math.sin(0.3*Math.PI))
    ctx.stroke()
    //trigger
    rect(x-1.7*s, y +0.3*s, 0.3*s, 0.2*s)
    //handle
    ctx.strokeStyle = c3
    ctx.fillStyle = c3
    ctx.beginPath()
    ctx.moveTo(x-1.4*s, y +0.3*s)
    ctx.lineTo(x-1.2*s, y+0.8*s)
    ctx.lineTo(x-0.9*s, y+0.8*s)
    ctx.lineTo(x-1.1*s, y+0.3*s)
    if(mode == "fill"){
        ctx.fill()
    } else {
    ctx.stroke()
    }
}