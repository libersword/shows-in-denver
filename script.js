var map;
var la= 39.7392
var ln= -104.9903
var initMap = function() {
     map = new google.maps.Map(document.getElementById("map"), {
        center: {lat: la, lng: ln},
        zoom: 15
    });
    var marker = new google.maps.Marker({
    position: {lat: la, lng: ln},
    map: map
  });
}

$("#button").on("click", function(){
   la= parseFloat($(this).attr("h"), 10);
   ln= parseFloat($(this).attr("v"), 10)
   map = new google.maps.Map(document.getElementById("map"), {
        center: {lat: la, lng: ln},
        zoom: 15
    });
    var marker = new google.maps.Marker({
    position: {lat: la, lng: ln},
    map: map
  });
   
})
