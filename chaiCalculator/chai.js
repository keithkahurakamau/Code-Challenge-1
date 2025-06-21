// Prompt user for input
const prompt = require('prompt-sync')(); // Using prompt-sync for synchronous input in Node.js
const input = prompt("Karibu! How many cups of Chai Bora would you like to make?");
const numberOfCups = Number(input);
// i need only one function to calculate ingredients for Kenyan Chai,need to be called
function calculateChaiIngredients(numberOfCups) {
    const waterPerCup = 200; // ml
    const milkPerCup = 50; // ml
    const teaLeavesPerCup = 1; // tablespoon
    const sugarPerCup = 2; // teaspoons
    // Calculate total ingredients based on the numbers based on the number of cups
    // The ingredients are multiplied by the number of cups requested
    const totalWater = waterPerCup * numberOfCups;
    const totalMilk = milkPerCup * numberOfCups;
    const totalTeaLeaves = teaLeavesPerCup * numberOfCups;
    const totalSugar = sugarPerCup * numberOfCups;
    // Display the results and outputs
    console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`);
    console.log(`Water: ${totalWater} ml`);
    console.log(`Milk: ${totalMilk} ml`);
    console.log(`Tea Leaves (Majani): ${totalTeaLeaves} tablespoon${totalTeaLeaves > 1 ? 's' : ''}`);
    console.log(`Sugar (Sukari): ${totalSugar} teaspoon${totalSugar > 1 ? 's' : ''}\n`);
    console.log("Enjoy your Chai Bora!");
}

// Validate input and calculate ingredients
//checks if input is a valid number display error message if not
if (!isNaN(numberOfCups) && numberOfCups > 0) {
    calculateChaiIngredients(numberOfCups);
} else {
    console.error("Please enter a valid number of cups.");
}
