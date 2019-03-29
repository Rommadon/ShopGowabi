function getShop() {
  axios.get('/api/v1/shops')
    .then(function (response) {
      initMap(response.data, "All")
    })
    .catch(function (error) {
      console.log(error);
  });
}

function getShopNails() {
  axios.get('/api/v1/shops')
    .then(function (response) {    
      initMap(response.data, "Nail")
    })
    .catch(function (error) {
      console.log(error);
  });
}

function getShopSpas() {
  axios.get('/api/v1/shops')
    .then(function (response) {
      initMap(response.data, "Spa")
    })
    .catch(function (error) {
      console.log(error);
  });
}

function getShopHairs() {
  axios.get('/api/v1/shops')
    .then(function (response) {
      initMap(response.data, "Hair")
    })
    .catch(function (error) {
      console.log(error);
  });
}

function getShopBarbers() {
  axios.get('/api/v1/shops')
    .then(function (response) {
      initMap(response.data, "Barber")
    })
    .catch(function (error) {
      console.log(error);
  });
}

function initMap(shops, category) {
  var marker, i;
  var icon_nail  = "https://i.imgur.com/6cuiiQi.png";
  var icon_hair  = "https://i.imgur.com/T80DFGl.png";
  var icon_spa = "https://i.imgur.com/tK8JziJ.png";
  var icon_barbershop  = "https://i.imgur.com/X4j6rYg.png";

  if (category == "All" || category == "Spa") {
    if(category == "All") {
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: new google.maps.LatLng(13.8000, 100.5250),
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });
    
      var infowindow = new google.maps.InfoWindow();

      $("#map").show();
      $("#map-nails").hide();
      $("#map-barbers").hide();
      $("#map-spas").hide();
      $("#map-hairs").hide();
    }

    if(category == "Spa") {
      var map = new google.maps.Map(document.getElementById('map-spas'), {
        zoom: 14,
        center: new google.maps.LatLng(13.8000, 100.5250),
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });
    
      var infowindow = new google.maps.InfoWindow();

      $("#map").hide();
      $("#map-nails").hide();
      $("#map-barbers").hide();
      $("#map-spas").show();
      $("#map-hairs").hide();
    }
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
  }

  if (category == "All" || category == "Nail") {
    if(category == "Nail") {
      var map = new google.maps.Map(document.getElementById('map-nails'), {
        zoom: 14,
        center: new google.maps.LatLng(13.8000, 100.5250),
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });
    
      var infowindow = new google.maps.InfoWindow();

      $("#map").hide();
      $("#map-nails").show();
      $("#map-barbers").hide();
      $("#map-spas").hide();
      $("#map-hairs").hide();
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
  }

  if (category == "All" || category == "Hair") {
    if(category == "Hair") {
      var map = new google.maps.Map(document.getElementById('map-hairs'), {
        zoom: 14,
        center: new google.maps.LatLng(13.8000, 100.5250),
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });
    
      var infowindow = new google.maps.InfoWindow();

      $("#map").hide();
      $("#map-nails").hide();
      $("#map-barbers").hide();
      $("#map-spas").hide();
      $("#map-hairs").show();
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
  }

  if (category == "All" || category == "Barber") {
    if(category == "Barber") {
      var map = new google.maps.Map(document.getElementById('map-barbers'), {
        zoom: 14,
        center: new google.maps.LatLng(13.8000, 100.5250),
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });
    
      var infowindow = new google.maps.InfoWindow();

      $("#map").hide();
      $("#map-nails").hide();
      $("#map-barbers").show();
      $("#map-spas").hide();
      $("#map-hairs").hide();
    }

    for (i = 0; i < shops.Barbershop.length; i++) {
      console.log(shops.Barbershop[i].name)
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(shops.Barbershop[i].latitude, shops.Barbershop[i].longitude),
        map: map,
        icon: icon_barbershop
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent("Barbershop : " + shops.Barbershop[i].name);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }
  }
}
