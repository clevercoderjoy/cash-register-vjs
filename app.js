const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given")
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];

checkButton.addEventListener("click", function validateBillAndCashAmount(){
    hideMessage();

    if (billAmount.value > 0){

        if (cashGiven.value >= billAmount.value){
            const amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned);
        }

        else{
            showMessage("The cash provided should be at least be equal to the bill amount");
        }
    }

    else{
        showMessage("Bill amount has to be greater than 0");
    }

});

function calculateChange(amountToBeReturned) {
    // iterating over the available notes
    for (let i = 0; i < availableNotes.length; i++){
        // no of notes to be returned for a particular note
        const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
        // remaining amount
        amountToBeReturned %= availableNotes[i];
        // rendering number of notes to be returned in the document
        noOfNotes[i].innerText = numberOfNotes;
    }
}

function hideMessage(){
    message.style.display = "none";
}

function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;
}