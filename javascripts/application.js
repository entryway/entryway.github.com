
$(window).bind('load', function() { 

  $('div#home-slideshow').slideViewerPro({
    galBorderWidth: 3,
    galBorderColor: '#EB9400',
    thumbsVis: false,
    autoslide: true,
    asTimer: 2500 
  });

}); 

$(function () {

  $('div.expandable p').expander();
  
  var path = window.location.href.split('/').slice(-1)[0];
  var selector = 'a[href=\'/' + path + '\']';
  $(selector).addClass('active');

  $('div#entryway-tweet').tweet({
    username: 'entryway',
    count: 1,
    join_text: 'auto',
    auto_join_text_default: "we proclaimed,", 
    auto_join_text_reply: 'we replied to'
  });

  $('div#gustin-tweet').tweet({
    username: 'gustin',
    count: 1,
    join_text: 'auto',
    auto_join_text_reply: 'gustin replied to',
    auto_join_text_default: 'gustin proclaimed,' 
  });

  $('div#katie-tweet').tweet({
    username: 'ktluroberts',
    count: 1,
    join_text: 'auto',
    auto_join_text_reply: 'katie replied to',
    auto_join_text_default: 'katie proclaimed,' 
  });

  $('div#bobby-tweet').tweet({
    username: 'bobbywilson0',
    count: 1,
    join_text: 'auto',
    auto_join_text_reply: 'bobby replied to',
    auto_join_text_default: 'bobby proclaimed,'
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


