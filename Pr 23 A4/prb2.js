//a, y, i , e , o , u, w
//checkName()
//ভাল ো হলে সে রিটার্ন
// করবে “Good Name” আর নাম টি খারাপ হলে রিটার্ন করবে “Bad Name”


function checkName(inputName) {
   const lastLetter = ["a", "y", "i", "e", "o", "u", "w"];
   
   if(typeof inputName !== 'string'){
      return "invalid"
   }  else{
      const find = inputName.slice(-1);
      const findCase = find.toLowerCase();
      
      if(lastLetter.includes(findCase)){
         return "Good Name"
      }  else{
         return "Bad Name"
      }
   }
   }

console.log(checkName("Jhanka"));
