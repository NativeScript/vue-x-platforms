<template>
  <div class="about">
    <a class="dreaming"
      >Dreaming about our Vue Valentine ❤️</a
    >
    <Logo3D />
  </div>
</template>

<style>
@media (min-width: 768px) {
  .about {
    max-width: 768px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 1rem;
  }
}
.dreaming {
  background-color: #42b883cc;
  border-radius: 0.75rem;
  user-select: none;
  display: block;
  font-weight: bold;
  color: #35495e;
  font-size: x-large;
  margin: 15px auto 8px;
  padding: 1rem;
  text-align: center;
}
@keyframes heartfade {
  0% {
    opacity : 1;
  }
  50% {
    opacity : 0;
  }
}
.heart {
  z-index : 999;
  animation : heartfade 6s linear;
  position : absolute; 
}
.heart:before,
.heart:after {
  content : "";
  background-color : #fc2a62;
  position : absolute;
  height : 30px;
  width : 45px;
  border-radius : 15px 0px 0px 15px;
}

.heart:before {
  transform : rotate(45deg);
}

.heart:after {
  left : 10.5px;
  transform : rotate(135deg);
}
</style>

<script setup lang="ts">
import Logo3D from '../app/components/Logo3D.vue';

var brd = document.createElement("DIV");
document.body.insertBefore(brd, document.getElementById("board"));

const duration = 3000;
const speed = 0.5;
const cursorXOffset = 0;
const cursorYOffset = -5;

let hearts = [];
    
function generateHeart(x, y, xBound, xStart, scale)
{
  var heart = document.createElement("DIV") as any;
  heart.setAttribute('class', 'heart');
  brd.appendChild(heart);
  heart.time = duration;
  heart.x = x;
  heart.y = y;
  heart.bound = xBound;
  heart.direction = xStart;
  heart.style.left = heart.x + "px";
  heart.style.top = heart.y + "px";
  heart.scale = scale;
  heart.style.transform = "scale(" + scale + "," + scale + ")";
  if(hearts == null)
    hearts = [];
  hearts.push(heart);
  return heart;
}

var down = false;
var event = null;

document.onmousedown = function(e) {
  down = true;
  event = e;
}

document.onmouseup = function(e) {
  down = false;
}

document.onmousemove = function(e) {
  event = e;
}

document.ontouchstart = function(e) {
  down = true;
  event = e.touches[0];
}

document.ontouchend = function(e) {
  down = false;
}

document.ontouchmove = function(e) {
  event = e.touches[0];
}

var before = Date.now();
var id = setInterval(frame, 5);
var gr = setInterval(check, 100);

function frame()
{
  var current = Date.now();
  var deltaTime = current - before;
  before = current;
  for(const i in hearts)
  {
    var heart = hearts[i];
    heart.time -= deltaTime;
    if(heart.time > 0)
    {
      heart.y -= speed;
      heart.style.top = heart.y + "px";
      heart.style.left = heart.x + heart.direction * heart.bound * Math.sin(heart.y * heart.scale / 30) / heart.y * 100 + "px";
    }
    else
    {
      heart.parentNode.removeChild(heart);
      hearts.splice(+i, 1);
    }
  }
}

function check()
{
  if(down)
  {
    var start = 1 - Math.round(Math.random()) * 2;
    var scale = Math.random() * Math.random() * 0.8 + 0.2;
    var bound = 30 + Math.random() * 20;
    generateHeart(event.pageX - brd.offsetLeft + cursorXOffset, event.pageY - brd.offsetTop + cursorYOffset, bound, start, scale);
  }
}
</script>
