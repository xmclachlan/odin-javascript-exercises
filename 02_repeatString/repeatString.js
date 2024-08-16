const repeatString = function(string, num) {
   /* let result = string.repeat(num);

   return result; */
  
   var repeatedString = "";

   while (num > 0) {
    repeatedString += string;
    num--;
   } 
   
   console.log(repeatedString)

   return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
