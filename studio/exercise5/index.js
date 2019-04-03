//check if document is ready
$(document).ready(function(){

var circleWidth = $("#circle").width();
var width= $(document).width() - 200;
var height = $(document).height() - 200;


var colors1 = ["#ccffdd", "#80ffaa", "#00ff55", "#00802b"]
var colors2 = ["#b3ecff", "#33ccff", "#00ace6", "#007399"]
var colors3 = ["#ffb3b3", "#ff4d4d", "#ff0000", "#990000"]
var colors4 = ["#ccb3ff", "#9966ff", "#661aff", "#4c00e6"]
var colors5 = ["#ffff80", "#ffff1a", "#cccc00", "#666600"]

//random color and position every second
setInterval(function(){
        let positionLeft = Math.random() * width + 50 + "px";

        let randomNumber = Math.random()* colors1.length;
        let randomColor1 = colors1[Math.floor(randomNumber)];

        let randomSize1 = Math.random() * 200 +'px';
        let randomSize2 = Math.random() * 280 +'px';

        $('#shape1').css("left", positionLeft)
        $('#shape1').css("background-color", randomColor1)
        $('#shape1').css("width", randomSize1)
        $('#shape1').css("height", randomSize2)

      },500)

        setInterval(function(){
            let randomRotate = 'rotate(' + Math.random() * 90 + 'deg)';

            $('#shape1').css("transform", randomRotate)

        },500)





        setInterval(function(){
                let positionLeft = Math.random() * width + 50 + "px";

                let randomNumber = Math.random()* colors2.length;
                let randomColor2 = colors2[Math.floor(randomNumber)];

                let randomSize3 = Math.random() * 200 +'px';
                let randomSize4 = Math.random() * 200 +'px';

                $('#shape2').css("left", positionLeft)
                $('#shape2').css("background-color", randomColor2)
                $('#shape2').css("width", randomSize3)
                $('#shape2').css("height", randomSize4)

              },1000)

                setInterval(function(){
                    let randomRotate = 'rotate(' + Math.random() * 90 + 'deg)';

                    $('#shape2').css("transform", randomRotate)

                },1000)










                setInterval(function(){
                        let positionLeft = Math.random() * width + 50 + "px";

                        let randomNumber = Math.random()* colors3.length;
                        let randomColor3 = colors3[Math.floor(randomNumber)];

                        let randomSize5 = Math.random() * 200 +'px';
                        let randomSize6 = Math.random() * 200 +'px';

                        $('#shape3').css("left", positionLeft)
                        $('#shape3').css("background-color", randomColor3)
                        $('#shape3').css("width", randomSize5)
                        $('#shape3').css("height", randomSize6)

                      },300)

                        setInterval(function(){
                            let randomRotate = 'rotate(' + Math.random() * 90 + 'deg)';

                            $('#shape3').css("transform", randomRotate)

                        },300)






                        setInterval(function(){
                                let positionLeft = Math.random() * width + 50 + "px";

                                let randomNumber = Math.random()* colors4.length;
                                let randomColor4 = colors4[Math.floor(randomNumber)];

                                let randomSize5 = Math.random() * 200 +'px';
                                let randomSize6 = Math.random() * 200 +'px';

                                $('#shape4').css("left", positionLeft)
                                $('#shape4').css("background-color", randomColor4)
                                $('#shape4').css("width", randomSize5)
                                $('#shape4').css("height", randomSize6)

                              },800)

                                setInterval(function(){
                                    let randomRotate = 'rotate(' + Math.random() * 90 + 'deg)';

                                    $('#shape4').css("transform", randomRotate)

                                },800)





                                setInterval(function(){
                                        let positionLeft = Math.random() * width + 50 + "px";

                                        let randomNumber = Math.random()* colors5.length;
                                        let randomColor5 = colors5[Math.floor(randomNumber)];

                                        let randomSize5 = Math.random() * 200 +'px';
                                        let randomSize6 = Math.random() * 200 +'px';

                                        $('#shape5').css("left", positionLeft)
                                        $('#shape5').css("background-color", randomColor5)
                                        $('#shape5').css("width", randomSize5)
                                        $('#shape5').css("height", randomSize6)

                                      },400)

                                        setInterval(function(){
                                            let randomRotate = 'rotate(' + Math.random() * 90 + 'deg)';

                                            $('#shape5').css("transform", randomRotate)

                                        },400)



  //end document ready function
})
