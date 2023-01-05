$(function () {


  const API_URL = "https://pokeapi.co/api/v2/pokemon/"

  $(".choose-button").click(function () {
    $(".error-message").empty();
    let userId = $("#pokemon-id").val();
    $(".pokemon-info").empty();

    fetch(API_URL + userId)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      } else {
        return response.json();
      }
    })
      .then((data) => {
        console.log(data);
        $(".name").text(data.name.toUpperCase());
        $(".shiny").attr("src", data.sprites.front_shiny);
        $(".default").attr("src", data.sprites.front_default);

      })
      .catch(error => {
        $(".error-message").text("Something went wrong. " + error + ". You probably choose a non existing number. Try again!")
    });
  });



  $(".random-button").click(function () {
    $(".error-message").empty();
    let randPokeId = Math.floor(Math.random() * 905);
    $(".pokemon-info").empty();

    fetch(API_URL + randPokeId)
      .then((response) => response.json())

      .then((data) => {
        console.log(data);
        $(".name").text(data.name.toUpperCase());
        $(".shiny").attr("src", data.sprites.front_shiny);
        $(".default").attr("src", data.sprites.front_default);

      });

  })

});


