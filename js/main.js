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
  var imageActive = $('img.active');
  var nextImage = imageActive.next();
  imageActive.removeClass('active');
  nextImage.addClass('active');

}
