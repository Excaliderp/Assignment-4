$(function () {


  const API_URL = "https://pokeapi.co/api/v2/pokemon/"

  function getRandPoke() {
    let randPokeId = Math.floor(Math.random() * 905);
    fetch(API_URL + randPokeId)
      .then((response) => response.json()) //Turn file into json if valid

      .then((data) => {  //Use the given data
        console.log(data);
        $(".pokemon").append($("<p>").text(data.name.toUpperCase()));
        $(".pokemon").append($("<img>").attr("src", data.sprites.front_shiny));
        $(".pokemon").append($("<img>").attr("src", data.sprites.front_default));

      });
  }

  function getUserPoke() {
    fetch(API_URL + userId)
      .then((response) => response.json()) //Turn file into json if valid

      .then((data) => {  //Use the given data
        console.log(data);
        $(".pokemon").append($("<p>").text(data.name.toUpperCase()));
        $(".pokemon").append($("<img>").attr("src", data.sprites.front_shiny));
        $(".pokemon").append($("<img>").attr("src", data.sprites.front_default));

      });
  }


  $("button").click(function() {
    let userId = $("#pokemon-id").val();

    alert(userId);

    if (userId !== null){
      getUserPoke()
    } else {
      getRandPoke();
    }
  });

});