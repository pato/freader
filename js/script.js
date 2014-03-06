var textarray;
var i;
var timer;
var $freader;
var bdelay = 150;
var cdelay = bdelay*2;
var pdelay = bdelay*3;

$(document).ready(function(){
    var text = $(".ftext p").text();
    textarray = text.split(" ");
    i = 0;
    $(".freader p").text("Harry");
    $freader = $(".freader p");
    $("#freader-start").click(function(){
        $(".ftext").css("opacity", 0.5);
        stepText();
    });
});

function stepText(){
    clearInterval(timer);

    var word = textarray[i++];
    var delay;

    $freader.text(word);
    //if (~word.indexOf(".")){
    if (/[!?.]/.test(word)){
        delay = pdelay;
    }else if (~word.indexOf(",")){
        delay = cdelay;
    }else{
        delay = bdelay;
    }

    timer = setInterval(stepText,delay);

}
