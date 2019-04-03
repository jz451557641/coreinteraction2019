console.log("regular.js")

$(document).ready(function(){
  var name = "Jizheng Chen";
  var time = new Date();
  var ticker = 0;
  var ticker2 = 0;
  var colors = ["#e6e6ff", "#ffffcc", "#ccffff", "#ffccff"];
  var colors2 = ["#660066", "#003300", "#003366", "#000066"];
  var width= $(document).width() - 200;
  var deg = 60;



  //change some css
  $('p').css("font-size", '22px')
  $('p').css("color", 'grey')

  //create a function!!!
  function getTime(){
    time = new Date();
    //change some html
    $('#name').text(name);
    $('#time').text(time);
    $('#ticker').text(ticker);
    $('#ticker2').text(ticker2);


    var rotate = 'rotate('+ ticker * 10+ 'deg)';
    $('#clock').css("transform", rotate);
    $('#clock').css("background-color", colors[ticker2]);
    $('#clock2').css("background-color", colors2[ticker2]);

    var rotate = 'rotate('+ ticker * 40 + 'deg)' ;
    $('#clock3').css('transform', rotate);
    $('#clock3').css('background-color', colors2[ticker2]);


    ticker += 1;
    ticker2 += 1;
    //make ticker += 10

    if(ticker2 >=4)  {

      ticker2=0;
    }

  }
  //call it
  getTime();

  setInterval(function(){





    //call it every second
    getTime();

  },1000)
  //end document ready fuction
})
