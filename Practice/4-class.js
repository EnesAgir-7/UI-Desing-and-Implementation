class Car{
    car_name;
    model;
    color;
    weight;
    constructor(car_name,model,color,weight){
        this.car_name=car_name;
        this.model=model;
        this.color=color;
        this.weight=weight;
    }
    start(){
        console.log(this.car_name + " Started");
    }
}

let greenCar = new Car("BMW","X5","Black", 2700);
greenCar.start();
