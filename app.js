$(document).ready(function() {

  startProgram()

  function startProgram() {
  $("#messages").html("");
  $("#buttonsRow").html("");
  $("#keepChangeChange").html("");
  $("#kccButton").html("")
  $("#afterKcc").html("")

  var numberList = [-20,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

  var randomIndex = Math.floor(Math.random() * 39) + 1
  console.log("Random Number is: " + randomIndex)

  var randomIndexTwo = Math.floor(Math.random() * 40) + 1

  var firstNumber = numberList[randomIndex];
  console.log("First Number is: " + firstNumber);

  var secondNumber = numberList[randomIndexTwo];
  console.log("Second Number is: " + secondNumber);

  if (secondNumber < 0) {
    $("#messages").html("Subtract <br>" + firstNumber + " - (" + secondNumber + ")" )
  }
else {
  $("#messages").html("Subtract <br>" + firstNumber + " - " + secondNumber);
}

$button = $("<button type = 'submit'>Keep Change Change</button>")
$button.addClass("stepOne")
$(".buttonsRow").html($button);

$button2 = $("<button type = 'submit'>Check</button>")
$button2.addClass("check");

$(".stepOne").on("click", function() {
  $(".buttonsRow").html("")
  $("#keepChangeChange").html("1. Keep the first number the same <br>2. Change the 'minus' to a PLUS<br>3. Change the second number to its opposite<br><br>Try writing out this step before checking if it's correct<br>")
  $("#kccButton").append($button2);

  $(".check").on("click", function() { 
  var oppSecNum = secondNumber*-1
  console.log(oppSecNum);
    $("#kccButton").html("");
    $form = $("<form autocomplete = 'off'></form>")
    $form.addClass("guessForm");
    $form.append("<span class = 'answer'><input class = 'numberInput' type = 'numeric' maxlength ='3' size = '3'></input></span>");

  if (oppSecNum < 1) {
  $("#keepChangeChange").append("<br>Your expression after Keep Change Change should be:<br>" + firstNumber + " + (" + oppSecNum + ") = ");
  }
  else {
    $("#keepChangeChange").append("<br>Your expression after Keep Change Change should be:<br>" + firstNumber + " + " + oppSecNum + " = ");
  }

  if (firstNumber>0 && oppSecNum>0) {
    console.log("both numbers are positive");
    $("#afterKcc").append($form);
    $button3 = $("<button type = 'submit'>Submit</button>")
    $button3.addClass("finalAnswer")
    $("#afterKcc").append($button3)

    $(".finalAnswer").on("click", function() { 
    var answer = firstNumber + oppSecNum
    console.log("The answer is: " + answer);
    var userAnswer = $(".numberInput").val();
    console.log("The User Said: " + userAnswer);

    if (answer == userAnswer) {
      console.log("Correct!")
      $button4 = $("<button type = 'submit'>New Problem</button>");
      $button4.addClass("newProblem");

      $("#keepChangeChange").append(answer)
      $("#afterKcc").html("You got it! Great job! <br>")
      $("#afterKcc").append($button4)

      $(".newProblem").on("click", function() {
        startProgram()
      })
    }
  })
}


})
})
  }

})