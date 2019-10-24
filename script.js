var map;
var lat = 39.7392;
var lon = -104.9903;
var initMap = function() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: lat, lng: lon },
    zoom: 15
  });
  var marker = new google.maps.Marker({
    position: { lat: lat, lng: lon },
    map: map
  });
};

$(".carousel").on("click touchstart", ".btn-floating", function(e) {
  e.stopPropagation();
  $(".carousel").carousel("next", 0);
  lat = parseFloat($(this).attr("data-latitude"), 10);
  lon = parseFloat($(this).attr("data-longitude"), 10);
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: lat, lng: lon },
    zoom: 15
  });
  var marker = new google.maps.Marker({
    position: { lat: lat, lng: lon },
    map: map
  });
});
