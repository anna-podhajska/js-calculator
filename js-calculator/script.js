$(document).ready(function() {
  var equation = "";

  $("table").click(function (event) {

    $("#equation").append(" " + event.target.innerText);

    switch(event.target.id){

      case "equals":
        try {
          var result = eval(equation);
          $("#result").html(result);
          equation = "";
          } catch (exeption) {
              if (exeption instanceof SyntaxError) {
                alert("invalid expression");
              }
            }
        $('#equation').html("");
        break;

      case "AC":
        equation = "";
        $("#result").html("0");
        break;

      case "CE":
        equation = equation.substr(0, equation.length-1);
        //return the same str minus last element
        break;

      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        equation += event.target.innerText;
        break;

      case "dot":
        if (equation.charAt(equation.length-1) != ".") {
                equation += event.target.innerText;
              };
        break;

      case "plus":
        if (equation.charAt(equation.length-1) != "+") {
          equation += event.target.innerText;
        }
        break;

      case "minus":
        if (equation.charAt(equation.length-1) != "-") {
          equation += event.target.innerText;
        }
        break;

      case "divide":
        if (equation.charAt(equation.length-1) != "/") {
          equation += event.target.innerText;
        }
        break;

      case "multiply":
        if (equation.charAt(equation.length-1) != "*") {
          equation += event.target.innerText;
        }
        break;
    }  // switch end

  if (equation.length > 35 ) {
    alert("really? hey, shorter equation is actionable");
  }

  $("#equation").html(equation);
})

// MY COLOR VERSIONS:
$("#moreFun").click(colorColorScheme);
$("#lessFun").click(classicColorsScheme);

// doc load end:
});


// CLASSIC COLOR SCHEME FUNCTION:
function classicColorsScheme() {
  $("#lessFun").css('background-color', '#f1c689');
  $("#moreFun").css('background-color', '#4b5160');

  $(".op1").css('background-color','');
  $('.op1').unbind();

  $("#AC, #CE").css('background-color','');
  $("#AC, #CE").unbind();

  $("th").css('font-family', '');
  $("th").css('background-color','');
  $("th").css('color', '');

  $("#equation").css('color', '');
};


//COLOR SCHEME FUNCTION:
function colorColorScheme() {

  $("#moreFun").css('background-color', '#f1c689');
  $("#lessFun").css('background-color', '#4b5160');

  $("th").css('font-family', 'Playfair Display, serif');
  $("th").css('background-color', '#4b5160');
  $("th").css('color','#f1c689');

  $(".op1").hover(function(){
      $(this).css('background-color','#5c9c99');
    }, function() {
      $(this).css('background-color', '#79a5a3');
    }
  );

  $("#AC, #CE").hover(function(){
    $(this).css('background-color','#dea95e');
    }, function() {
    $(this).css('background-color','#f1c689');
  });

};
