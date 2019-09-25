$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

// Get Button
var myButton = document.getElementById("topBtn");

// user scrolls down 20px form the top
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myButton.style.display = "block";
    } else {
        myButton.style.display = "none";
    }
}

// user clicks on button
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
