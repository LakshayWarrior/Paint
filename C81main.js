canvas = document.getElementById('myCanvas'); 
ctx = canvas.getContext("2d")

var mouseEvent = "";
var color ="";
var radius = "";
var width = "";

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown (e)
{
    color=document.getElementById("color").value;
    radius=document.getElementById("radius").value;
    width=document.getElementById("width").value;

    mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup (e)
{
    mouseEvent = "mouseUp";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave (e)
{
    mouseEvent="mouseLeave";
    mouse_x=e.clientX-canvas.offsetLeft;
    mouse_y=e.clientY-canvas.offsetTop;
    circle(mouse_x,mouse_y);
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e)
{
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown") {
        console.log("Current position of x and y coordinates =");
        console.log("x =" + current_position_of_mouse_x + "y =" + current_position_of_mouse_y);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0, 2*Math.PI);
        ctx.stroke();
    }
}

function clearArea()
{
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}