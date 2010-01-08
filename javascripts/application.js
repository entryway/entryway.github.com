
$(function () {

  $('div.expandable').expander();
  
  var path = window.location.href.split('/').slice(-1)[0];
  var selector = 'a[href=\'/' + path + '\']';
  $(selector).addClass('active');
 
  $(window).bind('load', function() { 
    $('div.svwp').slideViewerPro({
      galBorderWidth: 3,
      galBorderColor: '#EB9400',
      thumbsActiveBorderColor: '#EB9400',
      thumbsVis: true
    });
  }); 

  $('#twitter').getTwitter({
      userName: 'entryway',
      numTweets: 5,
      loaderText: 'Loading tweets...',
      slideIn: true,
      showHeading: false,
      headingText: 'Latest Tweets',
      showProfileLink: true
  });
   
});


