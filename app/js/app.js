// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

/* scroll to a div with the ID "scrollToThis" by clicking a link with the class "scrollLink" */
$('.scrollLink').click( function() {
     $('html, body').animate({
          scrollTop: $('#scrollToThis').offset().top
     }, 400);
});

/* scroll to the top of the page */
if ($('.scrollToTop')[0]){
     $('.scrollToTop').click(function(){
          $('html,body').animate({ scrollTop: 0 }, 400);
     });
}