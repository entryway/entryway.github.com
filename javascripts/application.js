
$(window).bind('load', function() { 

  $('div#home-slideshow').slideViewerPro({
    galBorderWidth: 3,
    galBorderColor: '#EB9400',
    thumbsVis: false,
    autoSlide: true
  });

  $('div.portfolio-slideshow').slideViewerPro({
    galBorderWidth: 3,
    galBorderColor: '#EB9400',
    thumbsActiveBorderColor: '#EB9400',
    thumbsVis: false
  });
}); 

$(function () {

  $('div.expandable p').expander();
  
  var path = window.location.href.split('/').slice(-1)[0];
  var selector = 'a[href=\'/' + path + '\']';
  $(selector).addClass('active');

  $('div#entryway-tweet').tweet({
    username: 'entryway',
    count: 1
  });

  $('div#gustin-tweet').tweet({
    username: 'gustin',
    join_text: 'auto',
    count: 1
  });

  $('div#katie-tweet').tweet({
    username: 'ktluroberts',
    count: 1
  });

  $('div#bobby-tweet').tweet({
    username: 'bobbywilson0',
    count: 1
  });

 /* $(".tweet").tweet({
    username: ['gustin', 'ktluroberts', 'entryway', ],
    query: "from:ktluroberts AND from:gustin AND from:entryway",
    join_text: "auto",
    avatar_size: 32,
    count: 10,
    auto_join_text_default: "proclaimed,", 
    auto_join_text_ed: "we",
    auto_join_text_ing: "we were",
    auto_join_text_reply: "we replied to",
    auto_join_text_url: "we were checking out",
    loading_text: "loading tweets..."
  });*/
  
});


