function openNavigation() {
    document.getElementById("mySidenav").style.width = "100%";
}
function closeNavigation() {
    document.getElementById("mySidenav").style.width = "0";
}

var i = 0;
var j = 0;
var k = 0;
var introText = 'Hi.';
var subText = "I'm Monica.";

function introduction() {
    setTimeout(typing, 100);
    setTimeout(typing2, 2000);
    $(".button").fadeIn(3000);
}

function typing() {
  if (i < introText.length) {
    document.getElementById("greetingText").innerHTML += introText.charAt(i);
    i++;
    setTimeout(typing, 50);
  }
}

function typing2() {
if (j < subText.length) {
    document.getElementById("nameText").innerHTML += subText.charAt(j);
    j++;
    setTimeout(typing2, 50);
  }
}

$(document).ready(() => {
    introduction()
});
