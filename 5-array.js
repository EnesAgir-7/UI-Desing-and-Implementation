let array_num = [
    1, 2, 3, 4, 5
]
let array_obj = [{
        name: "John",
        age: 15
    },
    {
        name: "John 1",
        age: 20
    },
    {
        name: "John 2",
        age: 10
    }
]
array_num.forEach((el) => {
    console.log(el)
})

let multipliedNums = array_num.map((el) => {
    return el * el
})

console.log(multipliedNums);

array_obj.forEach((obj)=>{console.log(obj.name)})

//! ------filter

array_obj.filter((obj)=>{ if(obj.age>18) console.log(obj);})

const filterPerson = array_obj.filter((obj) => {
    if (obj.age > 18) return obj
})

console.log(filterPerson);


//! ------reduce

let sum = array_num.reduce((acc, curr)=>{
    return acc+curr
},5)

console.log(sum);

let spending = [
    {item:"Grocery", price:25},
    {item:"Shopping", price:125},
    {item:"Mobile", price:225},
    {item:"Movie", price:325},
]


let total = spending.reduce((acc,curr)=>{
    return acc+curr.price
},0)

console.log(total);