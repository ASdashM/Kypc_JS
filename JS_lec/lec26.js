//declaration

let usdCurr = 29;
let eurCurr = 32;

function convDec(sum, curr){
    console.log(sum * curr);
}

convDec(100, usdCurr);
convDec(100, eurCurr);

//expression 

let usdCurr1 = 29;
let eurCurr1 = 32;

let convExpr = function(sum, curr) {
    console.log(sum * curr);
};

convExpr(200, usdCurr1);
convExpr(200, eurCurr1);

//arrow

let usdCurr2 = 28;
let eurCurr2 = 32;

let convArr = (sum, curr) => {
    console.log(sum * curr);
};

convArr(300, usdCurr2);
convArr(300, eurCurr2);