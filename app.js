$(document).ready(function() {

  startProgram()

  function startProgram() {
  $("#messages").html("");
  $("#buttonsRow").html("");
  $("#keepChangeChange").html("");
  $("#keepChangeChange").hide("")
  $("#kccButton").html("")
  $("#afterKcc").html("")
  $("#absValCheck").html("");
  $("#absValButtons").html("")
  $("#tryMessage").html("")

  var numberList = [-20,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

  var randomIndex = Math.floor(Math.random() * 39) + 1
  console.log("Random Number is: " + randomIndex)

  var randomIndexTwo = Math.floor(Math.random() * 39) + 1
  console.log("Random Number 2 is: " + randomIndexTwo)
  var firstNumber = numberList[randomIndex];
  console.log("First Number is: " + firstNumber);

  var secondNumber = numberList[randomIndexTwo];
  console.log("Second Number is: " + secondNumber);

  if (firstNumber === secondNumber) {
    startProgram();

  }

  if (secondNumber < 0) {
    $("#messages").html("Subtract <br>" + firstNumber + " - (" + secondNumber + ") = " )
  }
else {
  $("#messages").html("Subtract <br>" + firstNumber + " - " + secondNumber + " = ");
}

$button = $("<button type = 'submit'>Keep Change Change</button>")
$button.addClass("stepOne")
$(".buttonsRow").html($button);

$button2 = $("<button type = 'submit'>Check</button>")
$button2.addClass("check");

$(".stepOne").on("click", function() {
  $(".buttonsRow").html("")
  $("#keepChangeChange").show()
  $("#keepChangeChange").html("<u><b>Keep-Change-Change</b></u><br>1. Keep the first number the same <br>2. Change the 'minus' to a PLUS<br>3. Change the second number to its opposite<br>")
  $("#tryMessage").html("Try writing out this step before checking if it's correct<br>")
  $("#kccButton").append($button2);

  $(".check").on("click", function() { 
  var oppSecNum = secondNumber*-1
  console.log(oppSecNum);
    $("#kccButton").html("");
    $("#tryMessage").html("");
    $form = $("<form autocomplete = 'off'></form>")
    $form.addClass("guessForm");
    $form.append("<span class = 'answer'><input class = 'numberInput' type = 'numeric' maxlength ='3' size = '3'></input></span>");

  if (oppSecNum < 1) {
  $("#tryMessage").append("<br>Your expression after Keep Change Change should be:<br>" + firstNumber + " + (" + oppSecNum + ") = <br>");
  }
  else {
    $("#tryMessage").append("<br>Your expression after Keep Change Change should be:<br>" + firstNumber + " + " + oppSecNum + " = <br>");
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

      // $("#keepChangeChange").append(answer)
      $("#afterKcc").html("You got it! Your final answer is " + answer + "<br>")
      $("#messages").append(answer);
      $("#afterKcc").append($button4)

      $(".newProblem").on("click", function() {
        startProgram()
      })
    }
    else {
      $("#afterKcc").append("<br>Sorry, that is not correct. Try again!");
      $(".numberInput").val("");
    }
  })
}

else if (firstNumber>0 && oppSecNum<0) {
$("#tryMessage").append("<br>Addition Rules! These numbers have <u><b>different</b></u> signs.<br><u><b>Subtract</b></u> the absolute values of both numbers.<br>Write this step yourself before you check.<br>")
$buttonCheck2 = $("<button type = 'submit'>Check</button>")
$buttonCheck2.addClass("check2");
$("#kccButton").html($buttonCheck2);
$(".check2").on("click", function() {
  $("#kccButton").html("")
  var absOppSecNum = oppSecNum*-1;
  if (firstNumber > absOppSecNum) {
    $("#kccButton").append("<br>" + firstNumber + " - " + absOppSecNum + " = ")
    $form2 = $("<form autocomplete = 'off'></form>")
    $form2.addClass("guessFormTwo");
    $form2.append("<span class = 'answer'><input class = 'numberInputTwo' type = 'numeric' maxlength ='3' size = '3'></input></span>")
    $("#afterKcc").html($form2)
    $button5 = $("<button type = 'submit'>Submit</button>")
    $button5.addClass("answerBeforeFinal")
    $("#afterKcc").append($button5)
    $(".answerBeforeFinal").on("click", function() {
      console.log("button is clicked")
      var answerSubAbsVal = firstNumber - absOppSecNum
      var userAnswerSubAbsVal = $(".numberInputTwo").val();
      if (answerSubAbsVal == userAnswerSubAbsVal) {
        $("#afterKcc").html("");
        $("#kccButton").append(answerSubAbsVal);
        $("#absValCheck").html("Final Step! Keep the original sign of whichever number has the larger absolute value.<br>Which number has the larger absolute value? " + firstNumber + " or " + oppSecNum + "?<br>");
        $button6 = $("<button type = 'submit'>" + firstNumber + "</button>")
        $button6.addClass("optionFirstNum")
        $button7 = $("<button type = 'submit'>" + oppSecNum + "</button>")
        $button7.addClass("optionSecNum")
        $("#absValButtons").html($button6).append($button7)
        $(".optionFirstNum").on("click", function() {
          $("#absValButtons").html("")
          $("#absValButtons").append("Correct! " + firstNumber + " is positive, so your final answer is " + answerSubAbsVal + "<br>");
          $("#messages").append(answerSubAbsVal);
          $button4 = $("<button type = 'submit'>New Problem</button>");
          $button4.addClass("newProblem");
          $("#absValButtons").append($button4)

      $(".newProblem").on("click", function() {
        startProgram()
      })
        })
        $(".optionSecNum").on("click", function() {
          $("#absValButtons").append(" Sorry, try again!");
        })
      }
      else {
        $("#afterKcc").append("<br>Sorry! Try again!")
      }
    })

  }
  else {
    $("#kccButton").append("<br>" + absOppSecNum + " - " + firstNumber + " = ");
    $form2 = $("<form autocomplete = 'off'></form>")
    $form2.addClass("guessFormTwo");
    $form2.append("<span class = 'answer'><input class = 'numberInputTwo' type = 'numeric' maxlength ='3' size = '3'></input></span>")
    $("#afterKcc").html($form2)
    $button5 = $("<button type = 'submit'>Submit</button>")
    $button5.addClass("answerBeforeFinal")
    $("#afterKcc").append($button5)
    $(".answerBeforeFinal").on("click", function() {
      console.log("button is clicked")
      var answerSubAbsVal = absOppSecNum - firstNumber 
      var userAnswerSubAbsVal = $(".numberInputTwo").val();
      if (answerSubAbsVal == userAnswerSubAbsVal) {
        $("#afterKcc").html("");
        $("#kccButton").append(answerSubAbsVal);
        $("#absValCheck").html("Final Step! Keep the original sign of whichever number has the larger absolute value.<br>Which number has the larger absolute value? " + firstNumber + " or " + oppSecNum + "?<br>");
        $button6 = $("<button type = 'submit'>" + firstNumber + "</button>")
        $button6.addClass("optionFirstNum")
        $button7 = $("<button type = 'submit'>" + oppSecNum + "</button>")
        $button7.addClass("optionSecNum")
        $("#absValButtons").html($button6).append($button7)
        $(".optionSecNum").on("click", function() {
          $("#absValButtons").html("")
          $("#absValButtons").append("Correct! " + oppSecNum + " is negative, so your final answer is -" + answerSubAbsVal + "<br>");
          $("#messages").append("-" + answerSubAbsVal);
          $button4 = $("<button type = 'submit'>New Problem</button>");
          $button4.addClass("newProblem");
          $("#absValButtons").append($button4)

      $(".newProblem").on("click", function() {
        startProgram()
      })
        })
        $(".optionFirstNum").on("click", function() {
          $("#absValButtons").append(" Sorry, try again!");
        })
      }
      else {
        $("#afterKcc").append("<br>Sorry! Try again!")
      }
    })

  }
  })

}

else if (firstNumber<0 && oppSecNum<0) {
$("#tryMessage").append("<br>Addition Rules! These numbers both have a negative sign.<br>Add the absolute values of both numbers and keep the answer negative.")
$buttonCheck3 = $("<button type = 'submit'>Check</button>")
$buttonCheck3.addClass("check3");
$("#kccButton").html($buttonCheck3);
$(".check3").on("click", function() {
  $("#kccButton").html('');
  var absFirstNum = firstNumber*-1
  var absOppoSecNum = oppSecNum*-1
  $("#kccButton").append('<br>' + absFirstNum + " + " + absOppoSecNum + " = ");
  $form3 = $("<form autocomplete = 'off'></form>")
  $form3.addClass("guessFormThree");
  $form3.append("<span class = 'answer'><input class = 'numberInputThree' type = 'numeric' maxlength ='3' size = '3'></input></span>")
  $("#afterKcc").html($form3)
  $button8 = $("<button type = 'submit'>Submit</button>")
    $button8.addClass("answerBeforeFinalTwo")
    $("#afterKcc").append($button8)
    $(".answerBeforeFinalTwo").on("click", function() {
      var addingAnswer = absFirstNum + absOppoSecNum
      var userAddingAnswer = $(".numberInputThree").val();
      if (addingAnswer == userAddingAnswer) {
        $("#afterKcc").html("");
        $("#kccButton").append(addingAnswer);
        $("#absValCheck").html("Great! Since both numbers you're adding were negative, your final answer will be negative!<br>Your final answer is -" + addingAnswer + "<br>");
        $("#messages").append(" -" + addingAnswer)
        $button4 = $("<button type = 'submit'>New Problem</button>");
        $button4.addClass("newProblem");
        $("#absValCheck").append($button4)

      $(".newProblem").on("click", function() {
        startProgram()
      })
      }
      else {
        $("#afterKcc").append("<br>Sorry! Try again!")
      }
    })

})
}

else if (firstNumber<0 && oppSecNum>0) {
$("#tryMessage").append("<br>Addition Rules! These numbers have <u><b>different</b></u> signs.<br><u><b>Subtract</b></u> the absolute values of both numbers.");
$buttonCheck2 = $("<button type = 'submit'>Check</button>")
$buttonCheck2.addClass("check2");
$("#kccButton").html($buttonCheck2);
$(".check2").on("click", function() {
  $("#kccButton").html("")
  var absOppFirstNum = firstNumber*-1;
  if (absOppFirstNum > oppSecNum) {
    $("#kccButton").append("<br>" + absOppFirstNum + " - " + oppSecNum + " = ")
    $form2 = $("<form autocomplete = 'off'></form>")
    $form2.addClass("guessFormTwo");
    $form2.append("<span class = 'answer'><input class = 'numberInputTwo' type = 'numeric' maxlength ='3' size = '3'></input></span>")
    $("#afterKcc").html($form2)
    $button5 = $("<button type = 'submit'>Submit</button>")
    $button5.addClass("answerBeforeFinal")
    $("#afterKcc").append($button5)
    $(".answerBeforeFinal").on("click", function() {
      console.log("button is clicked")
      var answerSubAbsVal = absOppFirstNum - oppSecNum
      var userAnswerSubAbsVal = $(".numberInputTwo").val();
      if (answerSubAbsVal == userAnswerSubAbsVal) {
        $("#afterKcc").html("");
        $("#kccButton").append(answerSubAbsVal);
        $("#absValCheck").html("Final Step! Keep the original sign of whichever number has the larger absolute value.<br>Which number has the larger absolute value? " + firstNumber + " or " + oppSecNum + "?<br>");
        $button6 = $("<button type = 'submit'>" + firstNumber + "</button>")
        $button6.addClass("optionFirstNum")
        $button7 = $("<button type = 'submit'>" + oppSecNum + "</button>")
        $button7.addClass("optionSecNum")
        $("#absValButtons").html($button6).append($button7)
        $(".optionFirstNum").on("click", function() {
          $("#absValButtons").html("")
          $("#absValButtons").append("Correct! " + firstNumber + " is negative, so your final answer is -" + answerSubAbsVal + "<br>");
          $("#messages").append("-" + answerSubAbsVal);
          $button4 = $("<button type = 'submit'>New Problem</button>");
          $button4.addClass("newProblem");
          $("#absValButtons").append($button4)

      $(".newProblem").on("click", function() {
        startProgram()
      })
        })
        $(".optionSecNum").on("click", function() {
          $("#absValButtons").append(" Sorry, try again!");
        })
      }
      else {
        $("#afterKcc").append("<br>Sorry! Try again!")
      }
    })

  }
  else {
    $("#kccButton").append("<br>" + oppSecNum + " - " + absOppFirstNum + " = ");
    $form2 = $("<form autocomplete = 'off'></form>")
    $form2.addClass("guessFormTwo");
    $form2.append("<span class = 'answer'><input class = 'numberInputTwo' type = 'numeric' maxlength ='3' size = '3'></input></span>")
    $("#afterKcc").html($form2)
    $button5 = $("<button type = 'submit'>Submit</button>")
    $button5.addClass("answerBeforeFinal")
    $("#afterKcc").append($button5)
    $(".answerBeforeFinal").on("click", function() {
      console.log("button is clicked")
      var answerSubAbsVal = oppSecNum - absOppFirstNum 
      var userAnswerSubAbsVal = $(".numberInputTwo").val();
      if (answerSubAbsVal == userAnswerSubAbsVal) {
        $("#afterKcc").html("");
        $("#kccButton").append(answerSubAbsVal);
        $("#absValCheck").html("Final Step! Keep the original sign of whichever number has the larger absolute value.<br>Which number has the larger absolute value? " + firstNumber + " or " + oppSecNum + "?<br>");
        $button6 = $("<button type = 'submit'>" + firstNumber + "</button>")
        $button6.addClass("optionFirstNum")
        $button7 = $("<button type = 'submit'>" + oppSecNum + "</button>")
        $button7.addClass("optionSecNum")
        $("#absValButtons").html($button6).append($button7)
        $(".optionSecNum").on("click", function() {
          $("#absValButtons").html("")
          $("#absValButtons").append("Correct! " + oppSecNum + " is positive, so your final answer is " + answerSubAbsVal + "<br>");
          $("#messages").append(answerSubAbsVal);
          $button4 = $("<button type = 'submit'>New Problem</button>");
          $button4.addClass("newProblem");
          $("#absValButtons").append($button4)

      $(".newProblem").on("click", function() {
        startProgram()
      })
        })
        $(".optionFirstNum").on("click", function() {
          $("#absValButtons").append(" Sorry, try again!");
        })
      }
      else {
        $("#afterKcc").append("<br>Sorry! Try again!")
      }
    })

  }
  })
}


})
})
  }

})