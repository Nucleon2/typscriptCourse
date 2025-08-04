// data:
// inital amount
// annual contribution
// expected return rate
// duration

type InvestData = {
    initialAmount: number
    annualContribution: number
    expectedReturn: number
    duration: number
}

type InvestResult = {
    year: string
    totalAmount: number
    totalcontributions: number
    totalIntrestEarned: number
}

type CalulationResult = InvestResult[] | string

function calculateInvestment(data: InvestData): CalulationResult { // => result []
    const {initialAmount, annualContribution, expectedReturn, duration} = data
    if(initialAmount < 0) {
        return "Initial investment must atleast 0"
    }

    if (duration <= 0 ) {
        return "No valid amount of year provided"
    }

    if(expectedReturn < 0) {
        return "Expected return must be atleast 0"
    }

    let total =  initialAmount
    let totalcontributions = 0
    let totalIntrestEarned = 0

    const annualResults: InvestResult[] = []

    for (let i = 0; i < duration; i++){
        total = total * (1 + expectedReturn)
        totalIntrestEarned = total - totalcontributions - initialAmount
        totalcontributions = totalcontributions + annualContribution
        total = total + annualContribution

        annualResults.push({
            year: `Year ${i+1}`,
            totalAmount: total,
            totalcontributions,
            totalIntrestEarned
        })
    }

    return annualResults
}

function printResults(results: CalulationResult){   
    if( typeof results === "string"){
        console.log(results);
        return
    }

    for(const yearEndResult of results) {
        console.log(yearEndResult.year);
        console.log(`Total: ${yearEndResult.totalAmount.toFixed(0)}`);
        console.log(`Total Contributions: ${yearEndResult.totalcontributions.toFixed(0)}`);
        console.log(`Total Intrest Earned: ${yearEndResult.totalIntrestEarned.toFixed(0)}`);
        console.log("----------------------------------");
    }
}

const investmentData: InvestData = {
    initialAmount: 5000,
    annualContribution: 500,
    expectedReturn: 0.08,
    duration: 10
}

const results = calculateInvestment(investmentData)

printResults(results)