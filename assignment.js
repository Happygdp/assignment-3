
// kilometer to meter
function kilometerToMeter(kilometer){
    var meter = kilometer * 1000;
    return meter;
}
var distrence = kilometerToMeter(9);
console.log(distrence);


// 2nd part budget calculat
function budgetCalculat(watch, phone, leptop){
var total = watch + phone + leptop;
return total;
}
var watch = 23 * 50;
var phone = 42 * 100;
var leptop = 54 * 500;
var sum = budgetCalculat(watch, phone, leptop);
console.log(sum);




var day = 15;
var money = 0;
if (day <= 10){
money = day * 100;
}else if(day <= 20){
var firstpart = 10 * 100;
var remaning = day - 10;
var secondPart = remaning * 80;
money = firstpart + secondPart;
}else{
var firstpart = 10 * 100;
var secondPart = 10 * 80;
var remaning = day - 20;
var thirdPart = remaning * 50;
money = firstpart + secondPart + thirdPart; 
}
console.log (money);

// var magaFriend = ['jaavad', 'tompa', 'sopna', 'sakib'];
// console.log(magaFriend)