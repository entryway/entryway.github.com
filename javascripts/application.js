
$(function () {

  $('div.expandable').expander();
  
  var path = window.location.href.split("/").slice(-1)[0];
  var selector = 'a[href=\'/' + path + '\']';
  $(selector).addClass('active');
  
});


