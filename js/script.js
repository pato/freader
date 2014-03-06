var textarray;
var i;

$(document).ready(function(){
    var text = $(".ftext p").text();
    textarray = text.split(" ");
    i = 0;
    $(".freader p").text("Harry");
   $("#freader-start").click(function(){
       setInterval(stepText,150);
   }); 
});

function stepText(){
    $freader = $(".freader p");

    $freader.text(textarray[i++]);
    $freader.addClass('animated fadeIn');
}
