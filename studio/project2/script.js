//check if document is ready
$(document).ready(function(){

  var shapeWidth1 = $('#shape1').width();
//get document size
  var width = $(document).width() - shapeWidth1;
  var height = $(document).height() - shapeWidth1;

  var swidth = $(document).width() - 300;
  var sheight = $(document).height() - 300;


//speed and direction of animation
  var speedX1 = 4;
  var speedY1 = 4;

//variable to move css
  var positionLeft1 = 0;
  var positionTop1 = 0;


//60 frames per second
function step(timestamp){

  //update css variable
  positionLeft1 += speedX1;
  positionTop1 += speedY1;

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


  $('#shape1').css("left", positionLeft1)
  $('#shape1').css("top", positionTop1)


  window.requestAnimationFrame(step);
}
function animation(){
  var element = document.getElementById("planet")
      time    = Date.now();

  console.log(time);
  element.style.left = (450 + Math.cos(time / 1200)*400) + "px";
  element.style.top  = (950 + Math.sin(time / 1200)*800) + "px";

  setTimeout(animation, 1000 / 30);
}


animation();



function animation2(){
  var element = document.getElementById("incircle2")
      time    = Date.now();

  console.log(time);
  element.style.left = (450 + Math.cos(time / 1000)*350) + "px";
  element.style.top  = (950 + Math.sin(time / 1000)*200) + "px";

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
  var element = document.getElementById("ball")
      time    = Date.now();

  console.log(time);
  element.style.left = (450 + Math.floor(time / 40)*200) + "px";
  element.style.top  = (1050 + Math.floor(time / 40)*400) + "px";

  setTimeout(animation4, 1000 / 30);
}


animation4();


  window.requestAnimationFrame(step);
})
