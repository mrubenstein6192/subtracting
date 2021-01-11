$(document).ready(function() {

  var numberList = [-20,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

  var randomIndex = Math.floor(Math.random() * 40) + 1
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
  $("#keepChangeChange").html("1. Keep the first number the same <br>2. Change the 'minus' to a PLUS<br>3. Change the second number to its opposite<br><br>Try writing out this step before checking if it's correct<br>")
  $("#keepChangeChange").append($button2);

})

})