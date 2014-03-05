var textarray;
var i;

$(document).ready(function(){
    var text = $(".ftext p").text();
    textarray = text.split(" ");
    i = 0;
   $("#freader-start").click(function(){
       setInterval(stepText,150);
   }); 
});

function stepText(){
    $(".freader p").text(textarray[i++]);
}
