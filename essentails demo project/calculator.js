"use strict";
// data:
// inital amount
// annual contribution
// expected return rate
// duration
function calculateInvestment(data) {
    const { initialAmount, annualContribution, expectedReturn, duration } = data;
    if (initialAmount < 0) {
        return "Initial investment must atleast 0";
    }
    if (duration <= 0) {
        return "No valid amount of year provided";
    }
    if (expectedReturn < 0) {
        return "Expected return must be atleast 0";
    }
    let total = initialAmount;
    let totalcontributions = 0;
    let totalIntrestEarned = 0;
    const annualResults = [];
    for (let i = 0; i < duration; i++) {
        total = total * (1 + expectedReturn);
        totalIntrestEarned = total - totalcontributions - initialAmount;
        totalcontributions = totalcontributions + annualContribution;
        total = total + annualContribution;
        annualResults.push({
            year: `Year ${i + 1}`,
            totalAmount: total,
            totalcontributions,
            totalIntrestEarned
        });
    }
    return annualResults;
}
function printResults(results) {
    if (typeof results === "string") {
        console.log(results);
        return;
    }
    for (const yearEndResult of results) {
        console.log(yearEndResult.year);
        console.log(`Total: ${yearEndResult.totalAmount.toFixed(0)}`);
        console.log(`Total Contributions: ${yearEndResult.totalcontributions.toFixed(0)}`);
        console.log(`Total Intrest Earned: ${yearEndResult.totalIntrestEarned.toFixed(0)}`);
        console.log("----------------------------------");
    }
}
const investmentData = {
    initialAmount: 5000,
    annualContribution: 500,
    expectedReturn: 0.08,
    duration: 10
};
const results = calculateInvestment(investmentData);
printResults(results);
