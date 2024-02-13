//password()

/**
 * 
 * ফাং শন টি একটা object ইনপুট হি সে বে নি বে । যে খানে শুধুতি ন টি প্র োপার্টি থাকবে ।
{ name: "kolimuddin" , birthYear: 1999 , siteName: "google" }
⚠️অব্জেক্ট এ প্র োপার্টি গুল োর নাম একদম সেইম হতে হবে ।} array 
 */
// ফাং শন টি উপরে র স্ট্রাকচার অনুযায়ী একটা স্ট্রি ং আউটপুট আকারে রি টার্ন করবে ।
// Google#kolimuddin@1999
/**
 * 
 * {Challenge📢: যদি ক োন একটা প্র োপার্টি মি সি ং থাকে অথবা যদি birthYear 4 ডি জি টে র না হয় ফাং শন টি
রি টার্ন করবে একটি স্ট্রি ং যার ভ্যালুহবে invalid} array 
 */


// function - password
// input - object
// name: "" , birthYear: , siteName: ""

// check all 3 properties
// check birthYear 4 digit
// if false return - invalid



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

console.log(password({ name: "kolimuddin" , birthYear: 1999 , siteName: "ooo" }))