// Initialize and add the map
function initMap() {
    // The location of Uluru 31.9038° N, 35.2034° E
    var ramallah = {lat: 31.892436, lng: 35.214166};
    // The map, centered at ramallah
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 15, center: ramallah});
    // The marker, positioned at ramallah
    var marker = new google.maps.Marker({position: ramallah, map: map});
  }

