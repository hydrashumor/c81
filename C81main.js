canvas = document.getElementById("myCanvas");
color = "red";
ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200,200,50,0,2 * Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown", chicken_man);
function chicken_man(e){
    mouse_X = e.clientX - canvas.offsetLeft;
    mouse_Y = e.clientY - canvas.offsetTop;
    console.log("X = "+mouse_X+",Y = "+mouse_Y);
    circle(mouse_X,mouse_Y);
}
function circle(mouse_X, mouse_Y){
    canvas = document.getElementById("myCanvas");
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(mouse_X,mouse_Y,50,0,2 * Math.PI);
ctx.stroke();
}

