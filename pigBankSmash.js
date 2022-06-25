/* PIGGY BANKS TO SMASH FOR BUY A LEGO 
(FROM Google Mock Interview)
youtube: https://youtu.be/wOI6P9-QRNQ

Chalenge: 
Given an array of piggy banks, find the two elements needed to buy a Lego with a random cost.
The ammount of 'Google Dollars' in each piggy bank is equal to its index.

Rules: 
1 - Two piggy banks need to be smashed;
2 - Make no sense smash piggy bank 0 (empty); 
3 - Obviously, cannot smash the same piggy bank twice.

Input:
ARRAY[INTEGER] piggyBankList;
INTEGER cost  */

function piggyBankSmash(piggyBankList, cost){ 
  
    let maxPiggyBanks = Math.max(...piggyBankList);
    let result;

    (cost >= maxPiggyBanks * 2) ? result = `High cost(${cost}): More then two piggy banks(Max: ${maxPiggyBanks*2-1})`:
    (cost <= 2) ? result = `Low cost(${cost}): No or less than two piggy banks`: 
    (cost <= maxPiggyBanks + 1) ? result = [1, cost - 1] : "";
    if(result) return result;

    for(let i in piggyBankList){
        
        let pigBank = piggyBankList[i];

        (pigBank * 2 + 1  == cost && pigBank + 1 < piggyBankList.length) ? result = [pigBank, pigBank + 1]:    
        (pigBank * 2 + 2 == cost && pigBank + 2 < piggyBankList.length) ? result = [pigBank,pigBank +2]:"";
        if(result) return result;
    } 
} 

function testCost(lengthListPiggyBanks, cost){
    let piggyBankList = ([...Array(lengthListPiggyBanks + 1).keys()])
    console.log(piggyBankSmash(piggyBankList, cost));
}

// Tests
testCost(100, -1);
testCost(100, 0);
testCost(100, 1);
testCost(100, 2);
testCost(100, 37);
testCost(100, 190);
testCost(100, 200);
testCost(100, 1500);
testCost(8, 10);