"use strict";

var billAmount = document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#cash-given");
var checkButton = document.querySelector("#check-button");
var message = document.querySelector("#error-message");
var noOfNotes = document.querySelectorAll(".no-of-notes");
var availableNotes = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
checkButton.addEventListener("click", function validateBillAndCashAmount() {
  hideMessage();

  if (billAmount.value > 0) {
    if (cashGiven.value >= billAmount.value) {
      var amountToBeReturned = cashGiven.value - billAmount.value;
      calculateChange(amountToBeReturned);
    } else {
      showMessage("The cash provided should be at least be equal to the bill amount");
    }
  } else {
    showMessage("Bill amount has to be greater than 0");
  }
});

function calculateChange(amountToBeReturned) {
  // iterating over the available notes
  for (var i = 0; i < availableNotes.length; i++) {
    // no of notes to be returned for a particular note
    var numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]); // remaining amount

    amountToBeReturned %= availableNotes[i]; // rendering number of notes to be returned in the document

    noOfNotes[i].innerText = numberOfNotes;
  }
}

function hideMessage() {
  message.style.display = "none";
}

function showMessage(msg) {
  message.style.display = "block";
  message.innerText = msg;
}