let people = ["Ron", "John", "Pasha"];
let isEnesComing = true;

const enes = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(isEnesComing){
            resolve("Enes Coming");
        }else{
            reject("Enes is not coming ");
        }
    },4000)
});

const Party=()=>{
    enes.then((res)=>{
        console.log(res)
        }).catch((res)=>{
            console.log(res);
        });
        console.log("******** Praty Started ******");
        people.forEach((p)=>console.log(p + " came"));
}

Party();