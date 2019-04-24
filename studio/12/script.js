$(document).ready(function(){

var doc = $(document);


var width = $(document).width() - 100;
var height = $(document).height() - 100;
var heys = ["😂", "🤣", "😛", "🤤"]

var shapes = [ $(".circle"),$(".triangle"),$(".square") ]


function randomStuff(){
var randomShape = shapes[ Math.floor( Math.random() * shapes.length )]
var clone = randomShape.clone().appendTo('body');

clone.last().css('left', Math.random() * width)
clone.last().css('top', Math.random() * height)
}



setInterval(function(){
randomStuff();

var randomText = Math.floor(Math.random() * heys.length);



$("#text").html(heys[randomText])

},500)
})
