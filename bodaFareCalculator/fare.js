function calculateBodaFare(distanceInKm) {// Function to calculate the fare for a boda boda ride
    const baseFare = 50;// starting fare bare minimum charge
    const chargePerKm = 15;// charge per kilometer
    const totalFare = baseFare + (distanceInKm * chargePerKm);//this calculates the total fare by adding the base fare and the charge for the distance traveled in kilometers
    
    // These are the fare details and all necessary output to the end user
    console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
    console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
    console.log(`Mpaka Uko: KES ${distanceInKm * chargePerKm}`);
    console.log(`Total: KES ${totalFare}\n`);
    console.log("Panda Pikipiki!");
}

// Prompt user for input of distance in kilometers
const prompt = require('prompt-sync')(); // Using prompt-sync for synchronous input in Node.js
const input = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");
const distance = Number(input);
// Validate input and calculate fare
// checks if input is a valid number and greater than or equal to zero, display error message
if (!isNaN(distance) && distance >= 0) {
    calculateBodaFare(distance);
} else {
    console.error("Tafadhali ingiza nambari sahihi ya kilomita.");
}