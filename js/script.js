$(document).ready(function(){
    $("#one").click(function() {
        $(".single-image").animate({
            opacity: 0.25,
        }, 5000, function() {
            // Animation complete.
        });
    });
});