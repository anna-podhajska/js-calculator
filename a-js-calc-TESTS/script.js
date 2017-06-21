$(document).ready(function() {
// code code below

  var equation = "";


  $( "div" ).click(function(event) {

    $("#equation").append(" " + event.target.innerText);


      switch (event.target.id) {

        case "equals":

          var result = eval(equation);
          $("#result").html(result);

          break;

        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "plus":

        equation += event.target.innerText;
        break;


      };
  });



// code code above
})
