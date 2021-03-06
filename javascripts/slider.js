$(document).ready(function(){
  slidespeed = 1000
  $('.right').click(function() {
    Slide(this, true);
    return false;
  });
  
  $('.left').click(function() {
    Slide(this, false);
    return false;
  }); 
  
  $('.bullet').click(function() {
    bulletSlide(this);
    return false;
  });
  
});

var Slide = function(element, slideright, speed) {
  var slidespeed = speed || slidespeed;
  var total_images = parseInt($(element).closest('ul').prevAll('.total-images').val());
  var active_element = $(element).closest('ul').prevAll('.active-image')
  var current_image_number = parseInt($(active_element).val());
  var next_image_number = ((current_image_number + total_images + (slideright ? 1 : -1)) % total_images);
  var navigation_ul = $(element).closest('ul');
  var image_div = navigation_ul.nextAll('div.slider');
  var current_slide = image_div.find('li.slide-' + current_image_number);
  var next_slide = image_div.find('li.slide-' + next_image_number);
   if (next_slide.length != 0) {
     navigation_ul.find('a.active').removeClass('active');
     navigation_ul.find('li.bullet-' + next_image_number + ' a').addClass('active');
     $(active_element).val(next_image_number);
     next_slide.show("slide", {direction: (slideright ? "right" : "left")}, speed);
     current_slide.hide("slide", {direction: (slideright ? "left" : "right")}, speed);
   }
}

var bulletSlide = function(element) {
  var bullet_number = parseInt($(element).attr('class').substr(-1, 1));
  var current_image_number = parseInt($(element).closest('ul').prevAll('.active-image').val());
  var slide_right = (bullet_number > current_image_number);
  slide_amount = Math.abs(bullet_number - current_image_number);
  speed = slidespeed/slide_amount;
  if (slide_amount > 0) {
    Slide(element, slide_right, speed);
  }
  if (slide_amount > 1)
  {
     var remaining_slides = slide_amount - 1
     var delayed_slides = function() { 
       Slide(element, slide_right, speed);
       if (remaining_slides > 1) {
         remaining_slides -= 1;
         setTimeout(delayed_slides, speed);
       }
     }
     setTimeout(delayed_slides, speed);
  }

}
