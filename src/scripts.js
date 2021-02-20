$("a.light").toggle(lightSwitchOn);
function lightSwitchOn() {
    if($("#light").hasClass('off')){
        $("#light").removeClass("off").addClass("on");
    }
    else;
}
$("a.dark").toggle(lightSwitchOff);
function lightSwitchOff() {
    if($("#light").hasClass('on')){
        $("#light").removeClass("on").addClass("off");
    }
    else;
}