let array_num=[
    1,2,3,4,5
]
let array_obj=[
    {name:"John"},
    {name:"John 1"},
    {name:"John 2"}
]
array_num.forEach((el)=>{console.log(el)})

let multipliedNums = array_num.map((el)=>{
    return el*el
})

console.log(multipliedNums);

array_obj.forEach((obj)=>{console.log(obj.name)})