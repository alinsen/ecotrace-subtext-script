(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 100
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 50
        }
    })

    $.getJSON("http://ecotrace.subtextscript.com/json/eco_tips.json", function(json) {

    var sectionTitle = document.getElementById('dt-section');
    console.log(json); // this will show the info it in firebug console
    request.open('GET', json);
    request.responseType = 'json';
    request.send();

    request.onload = function() {
      var dailyTips = request.response;
      populateDiv(dailyTips);
      //showDailyTips(dailyTips);
    }

    function populateDiv(jsonObj) {
      var newDiv = document.createElement('div');
      newDiv.textContent = jsonObj['tipTitle'];
      sectionTitle.appendChild(newDiv);

      var newP = document.createElement('p');
      newP.textContent = jsonObj['descrip'];
      sectionTitle.appendChild(newP);
    }
});

})(jQuery); // End of use strict


/*var requestURL = 'http://ecotrace.subtextscript.com/json/eco_tips.json';
var request = new XMLHttpRequest();
console.log(request);
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var dailyTips = request.response;
  populateDiv(dailyTips);
  //showDailyTips(dailyTips);
}

function populateDiv(jsonObj) {
  var newDiv = document.createElement('div');
  newDiv.textContent = jsonObj['tipTitle'];
  sectionTitle.appendChild(newDiv);

  var newP = document.createElement('p');
  newP.textContent = jsonObj['descrip'];
  sectionTitle.appendChild(newP);
}*/
