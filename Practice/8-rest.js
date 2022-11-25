function myBio(fName, lastName, company){
    console.log(`${fName} ${lastName} ${company}`);
}

let info= [ "Enes", "Agir", "Vidinli"];

//! ​‌‍‌ES6​
myBio(...info)

//! ​‌‍‌𝗘𝗦𝟱​

myBio(info[0],info[1],info[2]);