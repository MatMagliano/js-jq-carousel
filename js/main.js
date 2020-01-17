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
    
//-------- Utilizzo Tastiera
    $(document).keydown(
      function() {
        if (event.keyCode == 39) {
          clickNext();
        } else if (event.keyCode == 37) {
          clickPrev();
        }
      }
    )
});


// -------- Function --------

//       NEXT
function clickNext() {

// ------Variabili image
  var imageActive = $('img.active');
  var nextImage = imageActive.next();

// ------Variabili circle

var circleActive = $('i.active');
var nextCircle = circleActive.next()

  if (imageActive.hasClass('last') == true) {

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

//       PREV
function clickPrev() {

// ------Variabili image
  var imageActive = $('img.active');
  var nextImage = imageActive.prev();

// ------Variabili circle

var circleActive = $('.active');
var nextCircle = circleActive.prev()

  if (imageActive.hasClass('first') == true) {

//      IMAGE
    imageActive.removeClass('active');
    $('img.last').addClass('active');

//      CIRCLE
    circleActive.removeClass('active')
    $('i.last').addClass('active');

  } else {

    //      IMAGE
    imageActive.removeClass('active');
    nextImage.addClass('active');

//      CIRCLE
    circleActive.removeClass('active');
    nextCircle.addClass('active');
  }
}
