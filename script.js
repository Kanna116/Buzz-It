var main = document.querySelector("#body");
var cursor = document.querySelector("#cursor");

main.addEventListener("mousemove",function(dets){
    cursor.style.left = (dets.x) +"px";
    cursor.style.top = (dets.y+5) +"px";
})