$(document).ready(function() {
  $("#formOne").submit(function() {
    event.preventDefault();
    var userInput = parseInt($("#factorial").val());
    var total = 1;

    for (i = userInput; i > 0 ; i--){
      total = total * i
      console.log(total);
    };
    $("#output").text(total);

  });
});
