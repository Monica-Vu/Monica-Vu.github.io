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

$(document).ready( () => {
    $(".button").css("opacity", 0);
    setTimeout( () => {
        $(".button").animate( { opacity: 1 }, 700);
    }, 3000);
    setTimeout(() => {
        $(".button").removeAttr("style");
    }, 3800);

    $(".accordion").click(function () {
        console.log("this is a test");
        $(this).nextAll("div").first().slideToggle();
        // console.log(`$(this).nextAll("div").first(): ${$(this).nextAll("div").first().html()}`);
    });
});
