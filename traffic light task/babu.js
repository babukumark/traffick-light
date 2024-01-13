"use strict"

let container=document.createElement("div");
container.setAttribute("class","container");

let container2=document.createElement("div");
container2.setAttribute("class", "container2");

let Red=document.createElement("button");
Red.setAttribute("id","Red");

let yellow=document.createElement("button");
yellow.setAttribute("id","yellow");

let green=document.createElement("button");
green.setAttribute("id","green");

let input=document.createElement('button');
input.setAttribute('class','num-display')

container.append(container2)
container2.append(Red,yellow,green,input);
document.body.append(container);


Red.addEventListener("mouseover",MouseOver);
Red.addEventListener("mouseout",MouseOut);

yellow.addEventListener("mouseover",MouseOver2);
yellow.addEventListener("mouseout",MouseOut);

green.addEventListener("mouseover",MouseOver3);
green.addEventListener("mouseout",MouseOut);


function MouseOver(){
     Red.style.background="red";
}

function MouseOver2(){
    yellow.style.background="yellow";
}

function MouseOver3(){
    green.style.background="darkgreen";
}
function MouseOut(){
    Red.style.background="";
    yellow.style.background="";
    green.style.background="";
}



var red=document.getElementById("Red");
var Yellow=document.getElementById("yellow");
var  Green =document.getElementById("green");
var timeclock=document.querySelector(".num-display");

var time=0;
var r=10;
var y=5;
var g=10

function colourchange(){
    if(time < 11){
                red.style.backgroundColor ='red';
                Green.style.backgroundColor='';
                Yellow.style.backgroundColor='';
                timeclock.innerText=r;
                r--;
                
                
            }
            else if(time >=11 && time <17){
                red.style.backgroundColor='';
                Yellow.style.backgroundColor='yellow'
                Green.style.backgroundColor=''
                timeclock.innerText=y;
                y--;
                
            }
            else if(time >= 17 && time < 28){
                red.style.backgroundColor='';
                Yellow.style.backgroundColor='';
                Green.style.backgroundColor='green'
                timeclock.innerText=g;
                g--;
            }
            if(time==27){
               time=0;
               r=10;
               y=5;
               g=10;
            }
            time++;
        }
        setInterval(colourchange,1000);
        









