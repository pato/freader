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
        //$(".ftext").css("opacity", 0.5);
        $("body").append('<div class="blind"></div>');
        $(".freader").css("color", "white");
        $(".freader-controls").hide();
        stepText();
    });
});

function stepText(){
    clearInterval(timer);

    var word = textarray[i++];
    var delay;

    //if (~word.indexOf(".")){
    if (/[!?\.;]/.test(word)){
        delay = pdelay;
    }else if (~word.indexOf(",")){
        delay = cdelay;
    }else{
        delay = bdelay;
    }
    orp = getOrp(word);
    
    var orpc = word.charAt(orp);
    var part1 = word.substring(0, orp);
    var part2 = word.substring(orp+1, word.length);

    console.log(part1 + "|" + orpc + "|" + part2);

    var left = /[i]/.test(orpc+"")?".leftS":"leftB";
    var right = /[m]/.test(orpc+"")?".rightB":"rightS";
    
    $freader.html("<span class=\"" + left + "\">"+ part1 + "</span><span class=\"orp\">" + orpc +
            "</span><span class=\"" + right  + "\">"  + part2 + "</span>");
    
    //$freader.text(word);

    timer = setInterval(stepText,delay);

}
function getOrp(word){
    if (word.length > 13)
        return 4;
    else
        return [0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3][word.length];
}
