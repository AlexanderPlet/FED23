// JavaScript Document
/*
function meerWeergeven() {
    var dots = document.getElementById("dots");
    var showMore = document.getElementById("more");
    var buttonTxt = document.getElementById("buttonMore")

    if(dots.style.display === "none"){
        dots.style.display = "inline";
        buttonTxt.innerHTML = "Meer weergeven";
        showMore.style.display = "none";
    } else {
        dots.style.display = "none";
        buttonTxt.innerHTML = "Minder weergeven";
        showMore.style.display = "inline";
    }
}
*/



/*var meerWeergevenButton = document.querySelector("section:first-child button");
meerWeergevenButton.addEventListener("click", veranderMeerWeergevenUL);

var meerWeergevenUL = document.querySelector("section:first-child ul");
function veranderMeerWeergevenUL() {

    meerWeergevenUL.classList.toggle("anders");
}
*/

// een show more button on click
var meerWeergeven = document.querySelector("#showMore");
var UL = document.querySelector(".meerWeergeven");
meerWeergeven.addEventListener("click", function () {
    UL.classList.add("show");
    meerWeergeven.classList.add("hide");
});

// pakt 2 images en laat ze met elkaar switchen (toggle) door middel van states
var on = "images/uitklab.png";
var off = ("images/verticalMenu.png");
var state = false;
var img = document.querySelector(".vertical img");
var margin = document.querySelector("main");
// op click dan veranderd het van image en image size. de margin wordt ook veranderd naar mate van de image
img.onclick = function () {
    img.style.width="38px";
    margin.style.margin="0px 0px 0px 20px";
    if (state) {
        img.src = off;
        state = false;
    } else {
        img.style.width="300px";
        margin.style.margin="0px 0px 0px 200px";
        img.src = on;

        state = true;
    }
}
