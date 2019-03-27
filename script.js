$(document).ready(function () {

    //search bar adding buttons
    
    $("#add-animal").on("click", function (event) {
        event.preventDefault();

        if ($("#animal-search").val().trim() == "") {

        }
    
        else {


            var animalValue = $("#animal-search").val().trim();


            var animalButton = $("<button>");
            animalButton.attr("class", "buttons");
            animalButton.attr("data-animal", animalValue);
            animalButton.text(animalValue);


            // Add the button and to do item to the to-dos div
            $("#buttons-here").append(animalButton);

            // Clear the textbox when done
            $("#animal-search").val("");


        }

    });






    //click function & creating gifs
    $(document).on("click", ".buttons", function () {
        $("#gifs-here").empty();
        var animal = $(this).attr("data-animal");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            animal + "&api_key=dc6zaTOxFJmzC&limit=9";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {





            var image = response.data

            for (var i = 0; i < image.length; i++) {
                var animalDiv = $("<div>")
                animalDiv.attr("class", "gifs");
                var p = $("<p>")
                p.text(image[i].rating)
                var animalImage = $("<img>")
                animalImage.attr("src", image[i].images.fixed_height_still.url);
                animalImage.attr("data-animate", image[i].images.fixed_height.url);
                animalImage.attr("data-state", "still")
                animalImage.attr("data-still", image[i].images.fixed_height_still.url)
                animalDiv.append(p);
                animalDiv.append(animalImage);
                $("#gifs-here").prepend(animalDiv);
            }
        })
    })


    $(document).on("click", "img", function () {

        var state = $(this).attr("data-state");

        if (state === "still") {
            var animate = $(this).attr("data-animate");

            $(this).attr("src", animate);
            $(this).attr("data-state", "active");

        }

        else {
            var still = $(this).attr("data-still");
            $(this).attr("src", still);
            $(this).attr("data-state", "still");



        }










    })












});
