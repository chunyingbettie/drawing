var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var dragging = false;
radius = 10
context.lineWidth = radius*2;

var engage = function(e){
    dragging = true;
    putPoint(e)
}
var disengage = function(){
    dragging = false;
}
function clearCanvas(canvas){
    canvas.width = canvas.width;
}
var putPoint = function (e){
    if(dragging){
        context.lineTo(e.clientX,e.clientY);
        context.stroke();
        context.beginPath();
        context.arc(e.clientX,e.clientY,radius,0,Math.PI*2);
        context.fill();}   
        context.beginPath();
        context.moveTo(e.clientX,e.clientY)
}
var keyAction = function(e){
    console.log(e.key)
    if (e.key.toLowerCase() == "b") {
        context.fillStyle = "blue";
        context.strokeStyle = "blue";
    }   
    if (e.key == "g"){
        context.fillStyle = "green";
        context.strokeStyle = "green";
    }
    if (e.key == "r"){
        context.fillStyle = "red";
        context.strokeStyle = "red";
    }
    if (e.key == "y"){
        context.fillStyle = "yellow";
        context.strokeStyle = "yellow";
    }
    if (e.key == "ArrowUp"){
        radius = 30
        context.lineWidth = radius*2;
    }
    if (e.key == "ArrowDown"){
        radius = 5
        context.lineWidth = radius*2;
    }
    if (e.key == " "){
        context.clearRect(0,0,800,500)
    }
}

canvas.addEventListener("mousedown",engage);
canvas.addEventListener("mousemove",putPoint);
canvas.addEventListener("mouseup",disengage);
document.addEventListener("keydown", keyAction);
