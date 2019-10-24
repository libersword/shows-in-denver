var apiKey = "MTg5NDc2Nzh8MTU3MTI2OTc4MC40Nw";



function getPerformerID(artist){
  var artistURL = 'https://api.seatgeek.com/2/performers?q=' + artist;
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
  var baseURL = 'https://api.seatgeek.com/2/recommendations?performers.id='+ performerID + '&venue.city=denver&datetime_utc.gte='+ startDate +'&datetime_utc.lte=+' + endDate + '&client_id=' + apiKey;
  $.ajax({
    url: baseURL,
    method: "GET"
  }).then(function(data){
    var results = data.recommendations;
      for (var i = 0; i < results.length; i++){
        var artistName = '';
        var venue = results[i].event.venue.name;
        $.each(results[i].event.performers, function(j){
          artistName = results[i].event.performers[j].name;
          artistImg = results[i].event.performers[j].images.huge;
        })
      var lat = results[i].event.venue.location.lat;
      var lon = results[i].event.venue.location.lon;
      var eventDate = moment(results[i].event.datetime_utc).format("dddd, MMMM Do YYYY, h:mm:ss a");
      
      createCard(
        artistName, 
        artistImg, 
        eventDate, 
        venue, 
        lat, 
        lon
        );
    }
    
  });
}