$slideIndex = 1;
$currnetPath = $(location).attr('pathname');

$(function () {
    $("#header").load("Header.html");
    $("#footer").load("Footer.html");
});

if ($currnetPath == '/Portfolio.html') {
    document.addEventListener("DOMContentLoaded", function () {
        showSlides(slideIndex);
    });

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {
            slideIndex = 1
        }
        if (n < 1) {
            slideIndex = slides.length
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block";
    }
}
