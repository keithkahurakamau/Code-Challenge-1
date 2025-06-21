const prompt = require('prompt-sync')(); // gets the library for user input to allow input from terminal.
// this function estimates the transaction fee based on the amount to send
function estimateTransactionFee(amountToSend) {
    const minFee = 10;// Minimum fee cap
    const maxFee = 70;// Maximum fee cap
    const feePercent = 0.015; // 1.5% transaction fee

    let fee = amountToSend * feePercent;
    if (fee < minFee) {
        fee = minFee; // Ensure fee is not less than minimum fee
    } else if (fee > maxFee) {
        fee = maxFee; // Ensure fee does not exceed maximum fee
    } else {
        fee = Math.round(fee);// Round off to nearest whole number
    }

    const total = amountToSend + fee; // Total amount to be sent from the account
    // all the output is displayed in KES (Kenyan Shillings) as expected in the examples of the challenge.
    console.log(`Sending KES ${amountToSend}:`);
    console.log(`Calculated Transaction Fee: KES ${fee}`);
    console.log(`Total amount to be debited: KES ${total}\n`);// Display the total amount to be debited from the account and \n shows a new line.
    console.log('Send Money Securely!');
}

// Prompt user for input
const input = prompt('Unatuma Ngapi? (KES): ');// Prompt user to enter the amount they want to send in KES (Kenyan Shillings).
const amount = Number(input);   // Convert input to a number to avoid string issues in calculations.

if (isNaN(amount) || amount <= 0) {
    console.error('Please enter a valid positive number.');// Check if the input is a valid positive number.
} else {
    estimateTransactionFee(amount);// Call the function to estimate the transaction fee with the provided amount.
}
