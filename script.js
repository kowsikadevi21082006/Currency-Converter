var arrow = document.getElementById("arrow");
var uparrow = document.getElementById("uparrow");
var up2arrow = document.getElementById("up2arrow");

var rotateValue = arrow.style.transform;
var rotateSum;

uparrow.onclick = function()
{
    rotateSum = rotateValue + "rotate(90deg)";
    arrow.style.transform = rotateSum;
    rotateValue = rotateSum
}

up2arrow.onclick = function()
{
    rotateSum = rotateValue + "rotate(90deg)";
    arrow.style.transform = rotateSum;
    rotateValue = rotateSum
}