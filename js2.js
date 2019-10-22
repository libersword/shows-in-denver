   $(document).ready(function(){
        $("#search").on("click", function(e){
        e.preventDefault();
         var artist = $("#artist").val().trim().toLowerCase().replace(" ", "-");
         var venue = $("#venue").val().trim().toLowerCase().replace(" ", "-");
         var startDate = moment($("start-date").val().trim()).format("YYYY-MM-DD");
         var endDate= moment($("#end-date").val().trim()).format("YYYY-MM-DD");
        })})