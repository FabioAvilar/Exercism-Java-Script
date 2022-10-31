
function dayRate(ratePerHour) {
    const hours = 8;
    const sum = ratePerHour * hours;
    return sum;
}

console.log(dayRate(89));

function daysInBudget(budget, ratePerHour) {
    return Math.floor(budget / ratePerHour / 8);
}

console.log(daysInBudget(20000, 89));

function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
    let numMoths = Math.floor(numDays / 22);
    let monthlyRate = 22 * dayRate(ratePerHour);
    let MonthlyDiscountedRate = (1 - discount) * monthlyRate;

    let numExtraDays = numDays % 22;
    let priceExtraDays = numExtraDays * dayRate(ratePerHour);

    return Math.ceil(numMoths * MonthlyDiscountedRate + priceExtraDays);
}

console.log(priceWithMonthlyDiscount(89, 230, 0.42));