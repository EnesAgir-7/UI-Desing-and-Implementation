//! ES5
function printSum(sum){
   // console.log(sum);
}

function calc(num1,num2 , cb){
    var sum= num1+num2;
    cb(sum);
}
calc(2,5,printSum);

//! ES6
const sum1=(sum)=> console.log(sum);
const calc1=(num1,num2,cb)=>cb(num1+num2)

calc1(2,5,sum1);

let calc2=(num1,num2,cb)=>cb(num1+num2);
calc(5,5,(sum)=>console.log(sum)) 
