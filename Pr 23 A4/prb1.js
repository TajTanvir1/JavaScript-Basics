/*
বাকে র ভাই কে calculateMoney( ) নামে একটি ফাং শন বানি য়ে দি তে হবে যাকে প্রতি দি ন
টি কে ট সে ল করার সং খ্যা ইনপুট দি লে সে সকল খরচ বাদ দি য়ে ম োট কত টাকা বাকে র ভাইর কাছে থাকে তা বলে
দি তে পারে ।
চি ড়ি য়াখানায় প্রতি টি কে ট বি ক্রি হয় ১২০ টাকায় । আর ব্যয় এর মধ্যে প্রতি দি ন ১ জন দার োয়ান কে দি তে হয় ৫০০
টাকা এবং ৮ জন স্টাফ কে লাঞ্চ করান োর জন্যে খরচ হয় জনপ্রতি ৫০ টাকা করে ।

------------Input :
ফাং শন টি ইনপুট নে বে টি কে ট সে ল করার সং খ্যা । ইনপুট হবে একটি পজি টি ভ সং খ্যা । (0<=Input)

-----------------Output :
টি কে টে র আয় ও ব্যয় গুল ো ক্যালকুলে ট করে বাকী কত টাকা বাকে র ভাইর কাছে থাকল ো সে টা ই ত োমার
ফাং শন আউটপুট হি সে বে রি টার্ন করবে । আউটপুট পজি টি ভ নে গে টি ভ যে ক োন কি ছু ই হতে পারে ।
💡যে মন ইনপুট যদি 10 হয় তাহলে আউটপুট হবে ( 10 * 120) - ( 500 + (8 * 50) ) = 300

------------Challenge📢:
বাকে র ভাই যদি ইনপুট হি সে বে নে গে টি ভ সং খ্যা দে য় তাহলে ত োমাকে একটা error ম্যাসে জ
আউটপুট হি সে বে রি টার্ন করে দি তে হবে ।

*/


// Create a function named as - calculateMoney( )
// ticketSale






function calculateMoney(ticketSale) {
   if(ticketSale < 0 || typeof ticketSale !== "number"){
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
   
   console.log(calculateMoney([]));