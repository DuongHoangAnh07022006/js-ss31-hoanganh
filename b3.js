let container = document.getElementById("container");
let greenBox = document.getElementById("green");
let redBox = document.getElementById("red");
let purpleBox = document.getElementById("purple");
greenBox.onclick = function(){
    container.style.backgroundColor = "green";
};
redBox.onclick = function(){
    container.style.backgroundColor = "red";
};
 purpleBox.onclick = function(){
    container.style.backgroundColor = "purple";
};
