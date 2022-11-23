let car={
    car_name:"MR Beans Car",
    model:"Fiat",
    color:"Green",
    weight:700,
    start:()=>{
        console.log("start");
    },
    drive:()=>{
        console.log("drive");
    },
    brake:()=>{
        console.log("brake");
    }
};

// console.log(car.start());
// console.log(car.brake());
// console.log(car.car_name);
// console.log(car.model);  
// console.log(car.weight);

let carObject=(car_name,model,color,weight)=>{
    return{
        car_name,
        model,
        color,
        weight,
    }
}

let audi = carObject("Audi","q7", "yellow", 2000)
let mercedes = carObject("Mercedes","220", "blue", 2000)

console.log(audi);
console.log(mercedes);
