

//
//  SETUP GOOGLE MAPS
//––––––––––––––––––––––––––––––––––––––––––––––––––

var SetupGoogleMaps = (function() {  


  //
  //  CONFIG
  //––––––––––––––––––––––––––––––––––––––––––––––––––

  var config = {
    lat: -27.437160,
    lng: 153.008062,
  };
  

  //
  //  GOOGLE MAP
  //––––––––––––––––––––––––––––––––––––––––––––––––––

  function setupGoogleMap() {

    google.maps.event.addDomListener(window, 'load', initialise);
    
  }


  //
  //  INITIALISE
  //––––––––––––––––––––––––––––––––––––––––––––––––––
  
  function initialise() {

    var lat = config.lat;
    var lng = config.lng

    // Setup Google maps.
    var mapCanvas = document.getElementById('map');
    var myLatlng = new google.maps.LatLng( lat, lng );
    var mapOptions = {
      zoom: 16,
      center: myLatlng,
      scrollwheel: false,
      mapTypeControl: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      streetViewControl: false,
      panControl: false,
    };

    // Create the map.
    var map = new google.maps.Map(mapCanvas, mapOptions);

    // Map icon.
    var iconWidth = 72;
    var iconHeight = 72;

    var iconURL = '/img/icon-map-pin.png';
    var iconSize = new google.maps.Size(iconWidth, iconHeight);

    var iconImage = {
     url: iconURL,
     size: iconSize,
     scaledSize: new google.maps.Size(iconWidth, iconHeight),
    };

    marker = new google.maps.Marker({
      position: new google.maps.LatLng(lat, lng),
      map: map,
      icon: iconImage
    });
  }


  //
  //  INIT
  //––––––––––––––––––––––––––––––––––––––––––––––––––

  function init() {
    setupGoogleMap();
  }


  //
  //  RETURN
  //––––––––––––––––––––––––––––––––––––––––––––––––––

  return {
    init: init
  };

})();
