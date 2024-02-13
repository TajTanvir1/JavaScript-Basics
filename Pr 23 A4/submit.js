function calculateMoney(ticketSale) {
   if (ticketSale < 0 || typeof ticketSale !== "number") {
      return "Invalid Number - Please give a positive number properly."
   }
   const ticketPrice = 120;
   const gateManCost = 500;
   const staffCost = 8 * 50;
   const netExpense = gateManCost + staffCost;
   const income = ticketSale * ticketPrice;
   const netIncome = income - netExpense;

   return netIncome;
}

function checkName(inputName) {
   const lastLetter = ["a", "y", "i", "e", "o", "u", "w"];

   if (typeof inputName !== 'string') {
      return "invalid"
   } else {
      const find = inputName.slice(-1);
      const findCase = find.toLowerCase();

      if (lastLetter.includes(findCase)) {
         return "Good Name"
      } else {
         return "Bad Name"
      }
   }
}

function deleteInvalids(numbers) {
   if (!Array.isArray(numbers)) {
      return "Invalid Array - Please input a Array"
   }
   return numbers.filter(element => typeof element === 'number' && !isNaN(element));
}

function password(details){
   if(typeof details !== 'object' || details.birthYear < 999 || details.siteName === ""){
      return "invalid"
   }   
   const passwordName = details.name;
   const passwordYear = details.birthYear;
   const passwordSite = details.siteName;
   const fullPassword = passwordSite.charAt(0).toUpperCase() + passwordSite.slice(1) + "#" + passwordName + "@" + passwordYear;
   return fullPassword;
}

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
