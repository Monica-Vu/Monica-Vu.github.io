$(document).ready( () => {
    $(".accordion").click(function () {
        console.log("this is a test");
        $(this).nextAll("div").first().slideToggle();
    });
});

function openNavigation() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNavigation() {
    document.getElementById("mySidenav").style.width = "0";
}
