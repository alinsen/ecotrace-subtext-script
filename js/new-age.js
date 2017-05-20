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

})(jQuery); // End of use strict

function initMap() {
    //example locations for pins
    var bellinghamExample1 = {lat: 48.731316, lng: -122.485619};
    var bellinghamExample2 = {lat: 48.730694, lng: -122.478223};
    var bellinghamExample3 = {lat: 48.730785, lng: -122.488626};

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: bellinghamExample1
    });

    //add example markers to map for demonstration
    addMarker(bellinghamExample1, map);
    addMarker(bellinghamExample2, map);
    addMarker(bellinghamExample3, map);

    //add a pin when and where the map is clicked
    google.maps.event.addListener(map, 'click', function(event) {
        addMarker(event.latLng, map);
    });
}

//Google Maps API
//add a marker to map
function addMarker(location, map) {
    //content for infoWindow
    var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h3 id="firstHeading" class="firstHeading">Litter!</h3>'+
        '<div id="bodyContent">'+
        '<p> There is litter here if anyone is in the area and has time to take care of it; thanks! </p>';

    //info to accompany a pin
    var infoWindow = new google.maps.InfoWindow({
        content: contentString
    });

    //a pin dropped at a user-clicked location
    var marker = new google.maps.Marker({
        position: location,
        map: map

    });
    marker.addListener('click', function(event) {
        //open pin's infoWindow when marker clicked
        infoWindow.open(map, marker);
    });
}
google.maps.event.addDomListener(window, 'load', initMap);
