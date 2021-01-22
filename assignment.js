


// kilometer to meter
function kilometerToMeter(kilometer){
    //1 kilometer = 1000 meter
    var meter = kilometer * 1000;
    return meter;
}
var distrence = kilometerToMeter(-1);
console.log(distrence);


// 2nd part budget calculator
function budgetCalculator(watch, phone, laptop){
    // cost every single item
    var watchCost = watch * 50;
    var phoneCost = phone * 100;
    var laptopCost = laptop * 500;
    //total cost of all item.
    var totalCost = watchCost +  phoneCost + laptopCost;
    return totalCost;

}

var sum = budgetCalculator(7, 10, 5);
console.log(sum);




// 3nd part hotel cost.
function hotelCost(day){
    var money = 0;
    if (day <= 10){
        money = day * 100;
    }else if(day <= 20){
        //cost for first part
        var firstpart = 10 * 100;
        var remaning = day - 10;
        //cost for second part
        var secondPart = remaning * 80;
        money = firstpart + secondPart;
    
    }else{
        //cost for first part
        var firstpart = 10 * 100;
        //cost for second part
        var secondPart = 10 * 80;
        var remaning = day - 20;
        //cost for third part
        var thirdPart = remaning * 50;
        money = firstpart + secondPart + thirdPart;   
    }
    return money;
}
var totalCost = hotelCost(25);
console.log(totalCost);


// 4th part mega friend.
function megaFriend(bigName){
    var naam = bigName[0];
    //loop for single name
    for(var i = 0; i < bigName.length; i++){
        //to find largest name
        if(naam.length < bigName[i].length){
            naam = bigName[i];
        }
    }
     return naam;
}
var longestName = megaFriend(['jaavad', 'tompa', 'sopna', 'sakib',"Happy Akhter"]); 
console.log(longestName);