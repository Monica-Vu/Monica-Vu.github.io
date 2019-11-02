/* navigation JavaScript */ 
const openNavigation = () => {
    document.getElementById("mySidenav").style.width = "100%";
}

const closeNavigation = () =>  {
    document.getElementById("mySidenav").style.width = "0";
}

/* Accordian JavaScript */
$(document).ready( () => {
    $(".button").css("opacity", 0);
    setTimeout( () => {
        $(".button").animate( { opacity: 1 }, 700);
    }, 3000);
    setTimeout(() => {
        $(".button").removeAttr("style");
    }, 3800);

    $(".accordion").click(function () {
        $(this).nextAll("div").first().slideToggle();
    });
});