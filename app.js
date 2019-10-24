$(document).ready(function() {
  $("#search").on("click", function(event) {
    event.preventDefault();

    let artist = $("#artist")
      .val()
      .trim()
      .toLowerCase()
      .replace(" ", "-");

    let venue = $("#venue").val();

    startDate = $(".datepicker[name=start-date]").val();
    endDate = $(".datepicker[name=end-date]").val();

    startDate = moment(startDate).format("YYYY-MM-DD");
    endDate = moment(endDate).format("YYYY-MM-DD");

    // console.log(artist);
    // console.log(venue);
    // console.log(startDate);
    // console.log(endDate);
  });
});

function createCard(artist, image, date, venue, lat, lon) {
  let carouselItem = $("<div>").addClass("carousel-item");
  let card = $("<div>").addClass("card hoverable");
  let cardImage = $("<div>").addClass("card-image");
  let img = $("<img>")
    .addClass("responsive-img")
    .attr("src", image);
  let pin = $("<a>").addClass("halfway-fab btn-floating red");
  pin.attr("data-latitude", lat);
  pin.attr("data-longitude", lon);
  let pinIcon = $("<i>")
    .addClass("material-icons")
    .text("location_on");
  let cardContent = $("<div>").addClass("card-content");
  let cardTitle = $("<div>")
    .addClass("card-title")
    .text(artist);
  let info = $("<p>").text(`${date} at ${venue}`);

  carouselItem.append(card);
  card.append(cardImage);
  cardImage.append(img);
  cardImage.append(pin);
  pin.append(pinIcon);
  card.append(cardContent);
  cardContent.append(cardTitle);
  cardContent.append(info);

  $(".carousel").append(carouselItem);
}

createCard(
  "Tom Petty",
  "https://media1.s-nbcnews.com/j/newscms/2017_40/2175431/171002-tom-petty-ac-420p_196cf56fd5bd962c850474c2930be267.fit-2000w.jpg",
  "October 31, 2019",
  "Red Rocks",
  "39.6",
  "-105.2"
);

createCard(
  "Tom Petty",
  "https://media1.s-nbcnews.com/j/newscms/2017_40/2175431/171002-tom-petty-ac-420p_196cf56fd5bd962c850474c2930be267.fit-2000w.jpg",
  "October 31, 2019",
  "Red Rocks",
  "39.6",
  "-105.2"
);

createCard(
  "Tom Petty",
  "https://media1.s-nbcnews.com/j/newscms/2017_40/2175431/171002-tom-petty-ac-420p_196cf56fd5bd962c850474c2930be267.fit-2000w.jpg",
  "October 31, 2019",
  "Red Rocks",
  "39.6",
  "-105.2"
);

createCard(
  "Tom Petty",
  "https://media1.s-nbcnews.com/j/newscms/2017_40/2175431/171002-tom-petty-ac-420p_196cf56fd5bd962c850474c2930be267.fit-2000w.jpg",
  "October 31, 2019",
  "Red Rocks",
  "39.6",
  "-105.2"
);

createCard(
  "Tom Petty",
  "https://media1.s-nbcnews.com/j/newscms/2017_40/2175431/171002-tom-petty-ac-420p_196cf56fd5bd962c850474c2930be267.fit-2000w.jpg",
  "October 31, 2019",
  "Red Rocks",
  "39.6",
  "-105.2"
);

createCard(
  "Tom Petty",
  "https://media1.s-nbcnews.com/j/newscms/2017_40/2175431/171002-tom-petty-ac-420p_196cf56fd5bd962c850474c2930be267.fit-2000w.jpg",
  "October 31, 2019",
  "Red Rocks",
  "39.6",
  "-105.2"
);
