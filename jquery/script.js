/* Exercise 2: Color picker */
$( document ).ready(function() {
  var favouriteColours =[];
  $("#add-to-favorite").click(function() {
    var inputColour = $("#color").val();
    favouriteColours.push(inputColour);
    $("#colors").prepend("<div class='item' style='background-color:"+ inputColour + "'></div>");
    console.log("Hello");
    var ranColour = favouriteColours[Math.floor(Math.random() * favouriteColours.length)];
    $(".preview").css("background-color", ranColour);
  });
});
