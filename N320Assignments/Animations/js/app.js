let titleTxt = document.getElementById("txtCool");
let navItems = document.getElementsByClassName("navitem");
let navbar = document.getElementById("nav");
let canvasboxs = document.getElementsByClassName("box");
let body = document.getElementById("bod");
let colo = "";


TweenMax.from(titleTxt, {duration:3, x:-300});
TweenMax.from(navbar, {duration:3, x:-2000});
for(let i = 0; i< navItems.length; i++){
    TweenLite.from(navItems[i],
        {duration: 3, x:-200, alpha: 0 });
}

for(let i = 0; i< canvasboxs.length; i++){
    TweenLite.from(canvasboxs[i],
        {duration: 3, x:-2000});
}
//TweenMax.from(canvasboxs, {duration:3, x:-2000,});

/* for(const box of canvasboxs) {
    box.addEventListener("mouseOver", function hoverOver(){
        box.style.backgroundColor = "blue";
        console.log("blue");
    })
} */

function hoverOver(i){
    if (colo != "black"){
        colo = "blue";
    }
    TweenMax.to(canvasboxs[i], {duration:2, backgroundColor: colo});
}
function hoverOut(i){
    
    if (colo != "black"){
      colo="red";
    }
    TweenMax.to(canvasboxs[i], {duration:2, backgroundColor: colo});
}

function blackOut(){
    if (colo != "black"){
        colo="black";
      }
    TweenMax.to(canvasboxs, {duration:5, /* x: -2000, y:-2000,  */backgroundColor: colo});
    TweenMax.to(navItems, {duration: 5, /* x: -2000, y:-2000, */ color: colo});
    TweenMax.to(titleTxt, {duration:5, /* x:2000, y:000 */});
    TweenMax.to(navbar, {duration:5,/*  x:-2000,y:2000,  */backgroundColor: colo});
    TweenMax.to(body, {duration: 5, backgroundColor: colo });
}
