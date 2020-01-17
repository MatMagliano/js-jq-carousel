$(document).ready(
  function() {

//---- Click Next -----------
    $('.next').click(
      function() {
        clickNext();
      }
    );

//---- Click Prev -----------
    $('.prev').click(
      function() {
        clickPrev();
      }
    );

});








// -------- Function --------

function clickNext() {

// ------Variabili image
  var imageActive = $('img.active');
  var nextImage = imageActive.next();

// ------Variabili circle

var circleActive = $('.active');
var nextCircle = circleActive.next()

  if (imageActive.hasClass('last') == true && circleActive.hasClass('last') == true) {

//      IMAGE
    imageActive.removeClass('active');
    $('img.first').addClass('active');

//      CIRCLE
    circleActive.removeClass('active')
    $('i.first').addClass('active');

  } else {

    //      IMAGE
    imageActive.removeClass('active');
    nextImage.addClass('active');

//      CIRCLE
    circleActive.removeClass('active');
    nextCircle.addClass('active');
  }



}
