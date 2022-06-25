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

/* PIGGY BANK SMASH TO BUY LEGO
Rules: 
1 - At least 2 piggy banks 
    to smash;
2 - Make no sense smash piggy 
    bank 0 (empty); 
3 - Obviously, cannot smash 
    the same piggy bank twice.

Constraints:
piggyBankList INTEGER ARRAY;
cost INTEGER. */

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