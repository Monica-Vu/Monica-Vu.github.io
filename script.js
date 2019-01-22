function openNavigation() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNavigation() {
    document.getElementById("mySidenav").style.width = "0";
}

var i = 0;
var j = 0;
var introText = 'Hi.';
var subText = "I'm Monica.";

function introduction() {
    setTimeout(typing, 100);
    setTimeout(typing2, 2000);
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

introduction()

var acc = document.getElementsByClassName("accordion");
var x;

$(document).ready( () => {
    for (x = 0; x < acc.length; x++){ 
        acc[x].addEventListener("click", function() {
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        })
    }
});


$(document).ready( () => {
    $(".button").css("opacity", 0);
    setTimeout( () => {
        $(".button").animate( { opacity: 1 }, 700);
    }, 3000);
    setTimeout(() => {
        $(".button").removeAttr("style");
    }, 3800);
});
