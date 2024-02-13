// monthlySavings()
// input -  Array , Number

// tax > 3000 / 20%
// income - livingCost = savings
// savings < 0 = earn more

//


function monthlySavings(incomes, livingCost) {
   if (!Array.isArray(incomes) || typeof livingCost !== 'number') {
       return "invalid input"
   }
   let sum = 0;
   for (let i = 0; i < incomes.length; i++) {
       if (incomes[i] >= 3000) {
           incomes[i] -= incomes[i] * .2
       }
       sum += incomes[i];
   }
   let savings = sum - livingCost;
   if (savings < 0) {
       return "earn more"
   }
   return savings;
}
console.log(monthlySavings("sda", [ 900 , 2700 , 3400]))