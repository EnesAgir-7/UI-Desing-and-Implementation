//! Destructuring

let user={
    f_name:"john",
    age:32,
    address:"Germany"
};

let {address,age,f_name}=user;

console.log(address);
console.log(age);
console.log(f_name);

//! Spread operator ...

let nums1 = [1,2,3,4,5];
let nums2 = [6,7,8,9,10];

let newnums =[...nums1,...nums2];

console.log(newnums);


