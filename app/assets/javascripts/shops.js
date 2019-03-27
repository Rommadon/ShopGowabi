function initMap(shops) {
  console.log(shops)
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 20,
    center: new google.maps.LatLng(13.7563, 100.5018),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  var infowindow = new google.maps.InfoWindow();

  var marker, i;

  for (i = 0; i < shops.length; i++) {  
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(shops[i].latitude, shops[i].longitude),
      map: map
    });

    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infowindow.setContent(shops[i].name);
        infowindow.open(map, marker);
      }
    })(marker, i));
  }
}