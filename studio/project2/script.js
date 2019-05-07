//check if document is ready
$(document).ready(function(){

  var shapeWidth1 = $('#shape1').width();
  var shapeWidth2 = $('#shape2').width();
  var shapeWidth3 = $('#shape3').width();
//get document size
  var width = $(document).width() - shapeWidth1;
  var height = $(document).height() - shapeWidth1;

  var width2 = $(document).width() - shapeWidth2;
  var height2 = $(document).height() - shapeWidth2;

  var width3 = $(document).width() - shapeWidth3;
  var height3 = $(document).height() - shapeWidth3;
//speed and direction of animation
  var speedX1 = 4;
  var speedY1 = 4;

  var speedX2 = 2;
  var speedY2 = 2;

  var speedX3 = 3;
  var speedY3 = 3;
//variable to move css
  var positionLeft1 = 0;
  var positionTop1 = 0;

  var positionLeft2 = 500;
  var positionTop2 = 500;

  var positionLeft3 = 900;
  var positionTop3 = 1000;
//60 frames per second
function step(timestamp){

  //update css variable
  positionLeft1 += speedX1;
  positionTop1 += speedY1;

  positionLeft2 += speedX2;
  positionTop2 += speedY2;

  positionLeft3 += speedX3;
  positionTop3 += speedY3;

  //change speed and direction variable if the ball hits the edge of the screen
  if(positionLeft1 > width){
    speedX1 = speedX1 * -1;
  }

  if(positionLeft1 < 0){
    speedX1 = speedX1 * -1;
  }

  if(positionTop1 > height){
    speedY1 = speedY1 * -1;
  }

  if(positionTop1 < 0 ){
    speedY1 = speedY1 * -1;
  }





  if(positionLeft2 > width){
    speedX2 = speedX2 * -1;
  }

  if(positionLeft2 < 0){
    speedX2 = speedX2 * -1;
  }

  if(positionTop2 > height){
    speedY2 = speedY2 * -1;
  }

  if(positionTop2 < 0 ){
    speedY2 = speedY2 * -1;
  }





  if(positionLeft3 > width){
    speedX3 = speedX3 * -1;
  }

  if(positionLeft3 < 0){
    speedX3 = speedX3 * -1;
  }

  if(positionTop3 > height){
    speedY3 = speedY3 * -1;
  }

  if(positionTop3 < 0 ){
    speedY3 = speedY3 * -1;
  }

  $('#shape1').css("left", positionLeft1)
  $('#shape1').css("top", positionTop1)

  $('#shape2').css("left", positionLeft2)
  $('#shape2').css("top", positionTop2)

  $('#shape3').css("left", positionLeft3)
  $('#shape3').css("top", positionTop3)
  window.requestAnimationFrame(step);
}
function animation(){
  var element = document.getElementById("planet")
      time    = Date.now();

  console.log(time);
  element.style.left = (450 + Math.cos(time / 1200)*400) + "px";
  element.style.top  = (900 + Math.sin(time / 1200)*750) + "px";

  setTimeout(animation, 1000 / 30);
}


animation();



function animation2(){
  var element = document.getElementById("incircle2")
      time    = Date.now();

  console.log(time);
  element.style.left = (450 + Math.cos(time / 1000)*350) + "px";
  element.style.top  = (950 + Math.sin(time / 1000)*230) + "px";

  setTimeout(animation2, 1000 / 30);
}


animation2();

function animation3(){
  var element = document.getElementById("incircle3")
      time    = Date.now();

  console.log(time);
  element.style.left = (450 + Math.cos(time / 10000)*400) + "px";
  element.style.top  = (1050 + Math.sin(time / 10000)*300) + "px";

  setTimeout(animation3, 1000 / 30);
}


animation3();



function animation4(){
  var element = document.getElementById("incircle4")
      time    = Date.now();

  console.log(time);
  element.style.left = (450 + Math.cos(time / 8000)*400) + "px";
  element.style.top  = (950 + Math.sin(time / 8000)*500) + "px";

  setTimeout(animation4, 1000 / 30);
}


animation4();


  window.requestAnimationFrame(step);
})
