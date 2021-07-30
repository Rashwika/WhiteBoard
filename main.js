canvas = document.getElementById("myCanvas");
pen = canvas.getContext("2d");
mouse_event = "";
 var last_pos_X, last_pos_Y;
color = "black";
lineWidth = 1;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    mouse_event = "mousedown";
    console.log(mouse_event);
    color= document.getElementById("color").value;
    lineWidth = document.getElementById("width").value;
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouse_event = "mouseup";
    console.log(mouse_event);
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouse_event = "mouseleave";
    console.log(mouse_event);
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    current_pos_X = e.clientX-canvas.offsetLeft;
    current_pos_Y = e.clientY-canvas.offsetTop;
    if(mouse_event=="mousedown"){
        pen.beginPath();
        pen.strokeStyle = color;
        pen.lineWidth = lineWidth;
        pen.moveTo(last_pos_X,last_pos_Y);
        pen.lineTo(current_pos_X,current_pos_Y);
        pen.stroke();
    }
    last_pos_X = current_pos_X;
    last_pos_Y = current_pos_Y;
}
function erase(){
    pen.clearRect(0,0,canvas.width,canvas.height);
}