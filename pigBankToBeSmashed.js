/*  Mandatory:
    At least 2 pig banks needs to be smashed.
    Pig bank 0 cannot be smashed.
    Cost needs to be less than Max Pig Bank * 2
    Second pig bank needs to be more than 2.

*/

function pigBankTobeSmashed(pigBankMax, Cost){

    if(Cost >= pigBankMax * 2)
        return "Impossible buy the Lego smashing just 2 pig banks";
    
    if(Cost <= 2)
        return "Impossible buy the Lego without smashing pig bank 0";

    let listPigBanks = [...Array(pigBankMax + 1).keys()];
    listPigBanks.shift();

    for(let i = 0; i <= listPigBanks.length; i++){
        
        let firstPigBank =  listPigBanks[i];
        let secondPigBank = Cost - firstPigBank;

        //if(secondPigBank > firstPigBank){
            return [firstPigBank, secondPigBank];
        //}
    }
}

console.log(pigBankTobeSmashed(100, 37));


function pigBankTobeSmashedSlim(pigBankMax, Cost){

    if(Cost >= pigBankMax * 2)
        return "Impossible buy the Lego smashing just 2 pig banks";
    
    if(Cost <= 2)
        return "Impossible buy the Lego without smashing pig bank 0";

    return [1, Cost - 1];
}

console.log(pigBankTobeSmashedSlim(100, 37));

