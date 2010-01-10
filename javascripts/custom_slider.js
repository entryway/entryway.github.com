$(document).ready(function(){
  $('.right').click(function() {
    // element = $(this);
    //     var i = setTimeout("rightSlide(element)", 100);
    rightSlide(this);
    return false;
  });
  
});

var rightSlide = function(element) {
  var current_image_number = parseInt($('.active-image').val());
  var image_div = $(element).closest('ul').nextAll('div.slideViewer')
  var current_slide = image_div.find('li.' + current_image_number);
  var next_slide = image_div.find('li.' + (current_image_number + 1));
   if (next_slide.length != 0) {
     $('.active-image').val(current_image_number + 1)
     next_slide.show("slide", {direction: "right"}, 3000);
     current_slide.hide("slide", {direction: "left"}, 3000);
   }
}
