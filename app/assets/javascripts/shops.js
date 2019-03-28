function getShop() {
  axios.get('/api/v1/shops')
    .then(function (response) {
      console.log("a", response.data)
      return response.data
    }).then(initMap)
    .catch(function (error) {
      console.log(error);
  });
}

function initMap(shops) {
  console.log(shops)
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: new google.maps.LatLng(13.8000, 100.5250),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });
  
  var infowindow = new google.maps.InfoWindow();

  var marker, i;
  var icon_nail  = "/assets/icons/nail.png";
  var icon_hair  = "/assets/icons/hair.png";
  var icon_spa = "/assets/icons/spa.png";
  var icon_barbershop  = "/assets/icons/barbershop.png";

  for (i = 0; i < shops.SpaAndMassage.length; i++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(shops.SpaAndMassage[i].latitude, shops.SpaAndMassage[i].longitude),
      map: map,
      icon: icon_spa
    });

    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infowindow.setContent("Spa and massage : " + shops.SpaAndMassage[i].name);
        infowindow.open(map, marker);
      }
    })(marker, i));
  }

  for (i = 0; i < shops.Nails.length; i++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(shops.Nails[i].latitude, shops.Nails[i].longitude),
      map: map,
      icon: icon_nail
    });

    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infowindow.setContent("Nails : " + shops.Nails[i].name);
        infowindow.open(map, marker);
      }
    })(marker, i));
  }

  for (i = 0; i < shops.HairRemoval.length; i++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(shops.HairRemoval[i].latitude, shops.HairRemoval[i].longitude),
      map: map,
      icon: icon_hair
    });

    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infowindow.setContent("Hair removal : " + shops.HairRemoval[i].name);
        infowindow.open(map, marker);
      }
    })(marker, i));
  }

  for (i = 0; i < shops.BarberShop.length; i++) {
    console.log(shops.BarberShop[i].name)
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(shops.BarberShop[i].latitude, shops.BarberShop[i].longitude),
      map: map,
      icon: icon_barbershop
    });

    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infowindow.setContent("Barbershop : " + shops.BarberShop[i].name);
        infowindow.open(map, marker);
      }
    })(marker, i));
  }
}