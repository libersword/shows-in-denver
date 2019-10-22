var apiKey = "MTg5NDc2Nzh8MTU3MTI2OTc4MC40Nw";
var artist = 'taylor-swift'
var artistURL = 'https://api.seatgeek.com/2/performers?q=' + artist;

function getPerformerID(){
  $.ajax({
    url: artistURL,
    method: "GET",
    data:{
      client_id: apiKey
    },
    'success': function (data) {
      performerID = data.performers[0].id;
      artistsLike(performerID);
      
    }
  });
}

function artistsLike(performerID){
  var baseURL = 'https://api.seatgeek.com/2/recommendations?performers.id='+ performerID + '&venue.city=denver&datetime_utc.gte=2019-10-19&datetime_utc.lte=2019-10-29';
  $.ajax({
    url: baseURL,
    method: "GET",
    data: {
      client_id: apiKey,
    }
  }).then(function(data){
    var results = data.recommendations;
    for (var i = 0; i < results.length; i++){
      var artistName = '';
      var venue = results[i].event.venue.name;
      $.each(results[i].event.performers, function(j){
        artistName = results[i].event.performers[j].name;
      })
      var lat = results[i].event.venue.location.lat;
      var lon = results[i].event.venue.location.lon;
      console.log(lat, lon)
      console.log(artistName);
      console.log(venue);
    }
  });
}

getPerformerID();


