function initMap(shops_spa, shops_nails, shops_hair, shops_barber) {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 20,
    center: new google.maps.LatLng(13.7563, 100.5018),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  var infowindow = new google.maps.InfoWindow();

  var marker, i;
  var icon_nail  = "/assets/icons/nail.png";
  var icon_hair  = "/assets/icons/hair.png";
  var icon_spa = "/assets/icons/spa.png";
  var icon_barbershop  = "/assets/icons/barbershop.png";

  for (i = 0; i < shops_spa.length; i++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(shops_spa[i].latitude, shops_spa[i].longitude),
      map: map,
      icon: icon_spa
    });

    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infowindow.setContent(shops_spa[i].name);
        infowindow.open(map, marker);
      }
    })(marker, i));
  }

  for (i = 0; i < shops_nails.length; i++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(shops_nails[i].latitude, shops_nails[i].longitude),
      map: map,
      icon: icon_nail
    });

    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infowindow.setContent(shops_nails[i].name);
        infowindow.open(map, marker);
      }
    })(marker, i));
  }

  for (i = 0; i < shops_hair.length; i++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(shops_hair[i].latitude, shops_hair[i].longitude),
      map: map,
      icon: icon_hair
    });

    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infowindow.setContent(shops_hair[i].name);
        infowindow.open(map, marker);
      }
    })(marker, i));
  }

  for (i = 0; i < shops_barber.length; i++) {
    console.log(shops_barber[i].name)
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(shops_barber[i].latitude, shops_barber[i].longitude),
      map: map,
      icon: icon_barbershop
    });

    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infowindow.setContent(shops_barber[i].name);
        infowindow.open(map, marker);
      }
    })(marker, i));
  }
}