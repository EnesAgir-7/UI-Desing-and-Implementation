import axios from "axios";

const users = ["Pasha", "Duygu", "Nur"]

const areOtherComing =() =>{
    //!consuming a promise
    setTimeout(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            res.data.forEach((user)=> console.log(user.username + " Came"))
        }).catch((err)=>{
            console.log(err);
        })
    },1500)
}

const party =() =>{
    areOtherComing();
    console.log("*********** Party Started ************");
    users.forEach((u)=> console.log(u+ " Came"));
};

party();


