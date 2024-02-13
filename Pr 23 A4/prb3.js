// deleteInvalids()



function deleteInvalids(numbers){
   if (!Array.isArray(numbers)){
       return "Invalid Array - Please input a Array"
   }
   return numbers.filter(element => typeof element === 'number' && !isNaN(element));  
}

console.log(deleteInvalids(["1" , {num:2} , NaN ]))