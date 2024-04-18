function calculateInsurancePremium(driverAge, carPrice) {
    if (driverAge < 18 || driverAge > 100) {
        return "Driver age must be between 18 and 100 years.";
    }
    if (carPrice <= 0) {
        return "Car price must be a positive value.";
    }

    const basePremium = 0.1 * carPrice;

    let ageAdjustment = 0;
    if (driverAge < 50) {
        ageAdjustment = 0.1 * (50 - driverAge);
    }

    const totalPremium = basePremium + ageAdjustment;

    console.log(`The annual insurance premium for a ${driverAge}-year-old driver with a car worth $${carPrice} CAD is approximately $${totalPremium.toFixed(2)}.`);

    const discounts = {
        "1": 0.1, // Student discount - 10%
        "2": 0.05, // Online checkout - 5%
        "3": 0.12, // Direct debit - 12%
        "4": 0.15 // Veterans discount - 15%
    };

    console.log("Choose a discount:");
    for (const [key, value] of Object.entries(discounts)) {
        console.log(`${key}. ${key === "1" ? "Student discount" : key === "2" ? "Online checkout" : key === "3" ? "Direct debit" : "Veterans discount"} - ${value * 100}%`);
    }

    const userChoice = prompt("Enter the number of the discount you want to apply:");

    if (userChoice in discounts) {
        const discount = discounts[userChoice];
        const discountedPremium = totalPremium * (1 - discount);
        console.log(`The annual insurance premium with the selected discount is approximately $${discountedPremium.toFixed(2)}.`);
    } else {
        console.log("Invalid choice. No discount applied.");
    }

    console.log("Do you want to calculate another premium? (yes/no)");
    const answer = prompt().toLowerCase();
    if (answer === 'yes') {
        calculateInsurancePremium(prompt("Enter the driver's age:"), prompt("Enter the car's price:"));
    }
}

calculateInsurancePremium(prompt("Enter the driver's age:"), prompt("Enter the car's price:"));