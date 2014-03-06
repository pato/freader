var textarray;
var i;
var timer;
var $freader;
var bdelay = 200;
var cdelay = bdelay*1.5;
var pdelay = bdelay*2.5;

$(document).ready(function(){
    var text = $(".ftext p").text();
    textarray = text.split(" ");
    i = 0;

    $freader = $(".freader p");

    $("#freader-pause").hide();
    $(".freader p").text("Harry");

    $("#freader-start").click(function(){
        $("body").append('<div class="blind"></div>');
        //$(".freader").css("color", "white");
        $("#freader-start").hide();
        $("#freader-pause").show();
        stepText();
    });

    $("#speed").change(function(){
        bdelay = $(this).val();
        cdelay = bdelay*1.5;
        pdelay = bdelay*2.5;
    });
});

function stepText(){
    clearInterval(timer);

    var word = textarray[i++];
    var delay;

    if (/[!?\.;]/.test(word)){
        delay = pdelay;
    }else if (~(word.indexOf(","))){
        delay = cdelay;
    }else{
        delay = bdelay;
    }
    orp = getOrp(word);
    
    var orpc = word.charAt(orp);
    var part1 = word.substring(0, orp);
    var part2 = word.substring(orp+1, word.length);

    var left = /[i]/.test(orpc+"")?".leftS":"leftB";
    var right = /[m]/.test(orpc+"")?".rightB":"rightS";
    
    var nbsp = "&nbsp;";

    var lspaces = Math.max(part1.length, part2.length) - part1.length;
    var rspaces = Math.max(part1.length, part2.length) - part2.length;
    
    var correctWord = "";

    for (var j=0;j<lspaces;j++) correctWord += nbsp;
    
    correctWord += part1;

    correctWord += "<span class=\"orp\">" + orpc + "</span>";

    correctWord += part2;

    for (var j=0;j<rspaces;j++) correctWord += nbsp;
    
    $freader.html(correctWord);

    if (i<textarray.length)
        timer = setInterval(stepText,delay);

}
function getOrp(word){
    if (word.length > 13)
        return 4;
    else
        return [0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3][word.length];
}
