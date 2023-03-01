
  // Get IE or Edge browser version
var version = detectIE();
function displayIEerror(){
  document.write("<div>IE is currently not supported, please use a new more secure browser such as <a href='www.google.com/chrome'>chrome</a> or firefox.  </div>")
}
function detectIE() {
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf('MSIE ');
  if (msie > 0) {
    // IE 10 or older => return version number
    displayIEerror();
  }

  var trident = ua.indexOf('Trident/');
  if (trident > 0) {
    // IE 11 => return version number
    var rv = ua.indexOf('rv:');
    displayIEerror();
  }

  
  var coupleapp = 'Qa3RTTPht0LsCz64ikyPdxeXI6R0kPcK'
  var guestapp = 'W6xWeYOZc0Brzsh73e55snEVKMvjX9bX'
  var app_key = coupleapp;
  if (window.guest_mode){
  app_key = guestapp;
  }

  !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics.SNIPPET_VERSION="4.13.1";
  analytics.load(app_key);
  analytics.page();
  }}();

  window.intercomSettings = {
    hide_default_launcher:true
  }
