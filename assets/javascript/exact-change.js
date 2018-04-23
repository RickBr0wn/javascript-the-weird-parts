function checkCashRegister(price, cash, cid) {
    let change;
    let scale = 100;
    let requiredChange = Math.floor((cash - price) * scale);
    let dollarValues = [{
            name: 'ONE HUNDRED',
            val: 100.00
        },
        {
            name: 'TWENTY',
            val: 20.00
        },
        {
            name: 'TEN',
            val: 10.00
        },
        {
            name: 'FIVE',
            val: 5.00
        },
        {
            name: 'ONE',
            val: 1.00
        },
        {
            name: 'QUARTER',
            val: 0.25
        },
        {
            name: 'DIME',
            val: 0.10
        },
        {
            name: 'NICKEL',
            val: 0.05
        },
        {
            name: 'PENNY',
            val: 0.01
        }
    ];

    const addUpRegister = (accumulator, currentValue) => accumulator + currentValue;
    const returnValues = (obj) => Math.floor(obj[1]*scale);
    
    let registerTotal = cid.map(returnValues).reduce(addUpRegister);
    
    console.log(requiredChange, registerTotal);

    if(requiredChange === registerTotal){
        return "Closed";
    }
    
    if(requiredChange > registerTotal){
        return "Insufficient Funds";
    }
    
    // Here is your change, ma'am.
    return change;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
