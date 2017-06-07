

(function($) {

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    //new-age jquery included in the theme
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

    //Custom jquery for making a toggle button for the graphs
    $('#barchart_div').hide();

    $('#graphpie').on('click', function() {
        $('#piechart, #barchart_div').toggle();
        var innerText = $('#piechart').is(":visible") ? "Graph" : "Pie Chart";
        $(this).text(innerText);
        console.log("Success!");
    });

})(jQuery);


//Daily Tips section
//All of this was custom written by us (and not included in the theme)

//arrays
var titles = ["Shut off the lights", "Turn off your devices", "Switch your bulbs", "Lower the temperature", "Compost"];
var quotes = ["Turn off the lights when you leave a room.", "Turn off your TV, computer, radio, etc. when you are not using them by unplugging them. These devices keep consuming small amounts of energy when you hit the 'off' button, so unplug them.", "Switch as many bulbs as possible to compact fluorescent bulbs or LED. Lighting composes about 25% of the average home's energy bill. Compact fluorescent bulbs are estimated to save you $20 over 3 years, and last for around 7 years.", "Try setting your heater to no more than 68 in the winter and no higher than 78 in the summer, set the hot water heater to 140, and use energy saving settings on your refrigerator.", "The Environmental Defense Fund says that around 18 percent of the waste that an average family in the U.S. produces comes from the yard and garden. If you recycle your yard and organic kitchen waste, you can reduce the amount of energy used to get that waste to the landfill"];
var citations = ["http://www.goucher.edu/about/environmental-sustainability/what-you-can-do/tips-for-students", "http://www.practicalenvironmentalist.com/21-practical-ways-to-help-the-environment/", "http://www.practicalenvironmentalist.com/21-practical-ways-to-help-the-environment/", "http://www.practicalenvironmentalist.com/21-practical-ways-to-help-the-environment/", "http://www.practicalenvironmentalist.com/21-practical-ways-to-help-the-environment/"];

//Grabs text from the arrays in a random order
var index = Math.floor(Math.random() * (titles.length + 0)) + 0;
var titleP = document.getElementById("dtTitle");
var textP = document.getElementById("dtText");
var citeP = document.getElementById("dtCite");

//sets initial quote on load
switchText();

//Sets the interval for when the quotes change
setInterval(switchText, 7000);

//function that displays the text
function switchText(){
    titleP.innerHTML = titles[index];
    textP.innerHTML = quotes[index];
    citeP.innerHTML = citations[index];
    index = Math.floor(Math.random() * (titles.length + 0)) + 0;
}

//My Activity section
//All of this was custom written by us (and not included in the theme)

//function that takes the id name from the dropdown in my activity and creates divs and paragraph tags based off of it to display in the area beside it
function processedText(idName){
  var textAreaVal = document.getElementById(idName).value;
  var addedText = String(idName) + " - " + textAreaVal;
  var activityDiv = document.getElementById("myActivityText");
  var textPara = document.createElement("P");
  var textAreaNode = document.createTextNode(addedText);
  activityDiv.appendChild(textPara).appendChild(textAreaNode);

}
