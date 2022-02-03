var num1 = 9;
var num2 = 3;
console.log (num1 + num2);


var answer = num1 === num2;  ///true false answer
console.log (answer);


///math

var sellingPrice = 199; 
var listPrice = 899;
var discount = ((listPrice - sellingPrice)/listPrice) * 100;
console.log("discount price is: " + discount); //// full value (i.e  77.8642936596218)


dislayDiscountPercent = Math.round(discount); 
console.log( dislayDiscountPercent); //// roundoff value (i.e 78)