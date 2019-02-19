const typing = (function(id, text, i = 0) {
    return (function() {
        if (i < text.length) {
            // console.log(text.charAt(i));
            document.getElementById(id).innerHTML += text.charAt(i);
            setTimeout(() => typing(id, text, ++i), 80);
        }
    })();
  })

$(document).ready(() => {
    typing("welcomeText", "Hi.");
    setTimeout(typing("introduction", "I'm Monica."), 12000);
});

function openNavigation() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNavigation() {
    document.getElementById("mySidenav").style.width = "0";
}
