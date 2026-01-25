/* This file contains every fucking javascript details 
let a = 10 ; 
let b = 20 ;


console.log(a+b) ; 


concatenate strings 
 let m = "aditya"
let n = "swaraj "
console.log(m+n); 

let a = 5 ; 
let b = "5"; 

console.log(a === b ); 
console.log(a == b ) ; 




Destructuring an array

const arr = [1,2,3,4,5] ; 
const  [a,b,c  , ...rest] = arr ; 
console.log(a,b,c , rest) ; 






Destructuring 
const person = {name: "Aditya"   , age:22 , profession: "MERN Developer "}; 
const {name , profession } = person; 
console.log(name , profession) ; 


const person = {name: "Aditya"   , age:22 , profession: "MERN Developer", 
    places: {
    area:"uran",
    tal:"raigad" , 
    dist:"ahmednagar"
    }
}; 

const {name , places:{area , tal}}= person ; 
console.log(name , area  , tal) ; 



const arr = [11,12,13,14,15] ; 
const {a,b,c , ...rest } = arr ; 
console.log(rest);




Spread Operator: 
Spread operator is used to spread values of array or object while rest operator is used to collect remaining values into an array or object.
spread operator transforms an array to object .
You can add new properties to an object using spread operator.


const person = {
    name: "Aditya"   , age:22 , profession: "MERN Developer",
}

const newPerson =  {
 
    ...person,
       places:"Navi Mumbai" 
}
console.log(newPerson) ;



const user = {
    name:"Jhon " , age:22 , proffession:"Developer"
}

console.log(user);

user.name = "Aditya" ;

console.log(user);

In the above example you cant directly change the state of an object.
you cant mutate it directly.



const user = {
    name:"Jhon " , age:22 , proffession:"Developer"
}
console.log(user);

const updatedUser = { 
   
    ...user,
     name:"Vhuuauuau" ,
}
console.log(updatedUser);

spread se hamare pass original aur newarr bhi rehata hai
*/

// Type conversion & Type
// let str = "234"; 
// let newStr = Number(str); 
// console.log(newStr + 10);
// console.log(str + 10);



// let str = "234abc" ; 
// let newStr  = Number(str) ;
// console.log(newStr) ; //This will show You NaN 
// console.log(typeof newStr)  This will show you type Number but in reality me ye ek string hai 


/* let a = "1a";
let b = 3;

let c = Number(a) ; 
console.log(c + b ) ; 
*/

// let a = "24ab"; 
// let b =  "ab24" ; 

// let newA = parseInt(a); 
// console.log(  a );


// let a = "353553.AB" ;
// let newS   =  parseFloat(a); 
// console.log(newS);

// let a = 24.355555555555555; 
// let newStr = a.toFixed(2) ; 
// console.log(newStr) ; 

//Note : The data coming from sources you dont if it is string or number and if you want in in a number you will make a that string into a number 



//Type coersion : This is done by javasript itself 
//for ex if(34 == "34") will give true




//Alternative for for loop 

// let arr = [1,2,3,4,5,6] ; 
// for(let i of arr){
//     console.log(i);
// }


//for each
//  let arr = [21 , 22 , 23 , 24] ; 
//  arr.forEach((index , element)=> { 
// console.log(index + 1 , element);
//  })

// arr.map((element)=> { 
// console.log(element); 
// })


// arr.map will return values while arr.foreaach will not 
// let arr = [11,12,13,14] ; 

// let newArr = arr.map((element)=> { 
// return element * 2  ; 
// })

// console.log(newArr); 


//FILTER
// let arr = [1,2,3,4,5,6,7,8,9,10] ; 
// let evemArr = arr.filter((element) => { 
//  return element % 2 === 0 ; 
// })


// console.log(evemArr); 


let arr = [1,2,30,4,5,6]; 

let newArr =  arr.map((element)=>{
return element * 2  ; 
})
console.log(newArr);

let div = arr.filter((element)=>{
return element % 10 == 0  ; 
})

console.log(div);


let sum = 