const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given")
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
checkButton.addEventListener("click", function validateBillAndCashAmount() {
    message.style.display = "none";
    if (billAmount.value > 0) {
        if (Number(cashGiven.value) >= Number(billAmount.value)) {
            const amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned);
        } else {
            showMessage("The cash provided should be at least equal to bill amount.");
        }
    } else {
        showMessage("Invalid bill amount!");
    }
});

function calculateChange(amountToBeReturned) {
    for (var i = 0; i < availableNotes.length; i++) {
        const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
        amountToBeReturned = amountToBeReturned % availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}

function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;
}