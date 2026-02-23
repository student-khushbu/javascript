// Array in js can be created using the array constructor or with arrayliterals (square brackets[])

//  using array constructor 
let fruits = new Array ("apple" , "Orange" , "grapes")
console.log(fruits);

//  using array literals 

let fruit = ["apple" ,"bnana" ,"orange" ,"lichi" ,"gavava"];
console.log(fruit);

//  array elements are accessed using zero based indices.
let select =["apple" ,"bnana" ,"dates"];
console.log(select[0]);

// modifying element : you can modify array by assigning new values to specific indices.

let modFruits =["apple" , "orange" ,"bnana"];
modFruits[3]="mango";
modFruits[1] ="grapes";
console.log(modFruits);
// for  of loop

for (let item of fruit) {
    console.log(item);
    
}
// second way

for(let item = 0; item < fruit.length; item++){ 
    console.log(fruit[item]);
}

//  for of loop = for index
for (let item in fruit){ 
    console.log(item);
}

// for each loop

 /*const myEorEach = fruit.forEach((currentValue, index , arr) =>{
    console.log(`${index} ${currentValue}`);
    // console.log(arr);
});
*/
//  map method const


const myMapArr =fruit.map((currentValue , index , arr) =>{ 
    return`my favourite fruits is ${index} ${currentValue}`;
});
console.log(myMapArr);

//  write a program to multiply each element with 2
const numbers = [ 1 , 2, 3, 4 ,5];
// forEach - performs an action on each element 
//  map - creates a new array with transformed element


numbers.forEach((currentValue) =>{
    console.log(currentValue *2);
});

const doubleValue = numbers.map((currentValue) =>{ 
    return currentValue *2 ;
});
console.log(doubleValue);
//  how to insert , add , replace and delete element in array

const persons = ["khushbu" , " Reena" ,"trivisa" ,"Vishal" ,"sita"];
persons.push("Ram" ,"sita" ,"Anjali");
console.log(persons);
persons.pop();
console.log(persons); 

//  unshift and shift method in array

console.log(persons.unshift("Rahul"));
console.log(persons);

console.log(persons.shift());
console.log(persons); 

//  splice method 

let juices =["pineapple" ,"guava" ,"orange" ,"bnana"];
// console.log(juices.splice(0));
// console.log(juices.splice(1 ,1));
// console.log(juices);
juices.splice(1 , 1 ,"lichi");
console.log(juices);


// searching and filter in an array
//  for search we have - indexOf , lastIndexof  & includes

const people =["sita" ,"Ram" ,"Anjali" ,"Ram" ,"Khushi"];
console.log(people.indexOf("Khushi"));

console.log(people.includes("sita" ,2));

console.log(people.lastIndexOf("Ram" ,2));

//  todo challenge time 

// add dec at the end of an array ?
//  what is the return value of splice method ?
//  update march to March
//  delete June from an array

const months =["Jan" ,"march" ,"April" ,"June" ,"July"];
months.splice(months.length , 0 ,"Dec");
console.log(months);
months.splice(1 , 1 ,"March");
console.log(months);
months.splice(3,1);
console.log(months);
// console.log(months.splice()); splice method return empty array

//  find method 

const number =[1 ,2 , 3, 4, 5, 6, 7, 8, 9];
/*const result = number.find((curElem) =>{ 
    return curElem > 6;
});

console.log(result); */

//  findIndex method in array

const result = number.map((curElem) => curElem *5);
console.log(result);
const result2 =result.findIndex((curElem) => { 
    return curElem >10 ;
});
console.log(result2);

//  filter method
const result3 = number.filter((curElem) =>{ 
    return curElem >4 ;

});

console.log(result3);

const values =[1 , 2, 6 ,3, 6,4, 5, 6, 7, 8];
let value =6 ;

let updatedCart = values.filter((curElem) =>{ 
    return curElem !=value ;

});

console.log(updatedCart);

//  filtering product by price

const products =[
    {name:"Laptop" ,price:1200},
    {name:"phone" ,price:800},
    {name:"Tablet" ,price:300},
    {name:"Smartwatch" ,price:150}
];
// let price =500 ;
let filterPrice = products.filter((curElem)=>{ 
    return curElem.price <=500 ;
});

console.log(filterPrice);

// filter unique value

const count =[1 ,2 ,3 , 4,4, 5, 7, 6, 7,8];
let uniqueValue =count.filter((curElem ,index , arr) =>{ 
    console.log(arr.indexOf(curElem));
    return arr.indexOf(curElem)== index ;
}) ;
console.log(uniqueValue);

// console.log(uniqueValue);

// Sort and Compare an Array
const fruts = ["Apple" ,"Banana" ,"Orange","Mango","Grapes"];
fruts.sort();
console.log(fruts); 

const Numbers =[1 ,2 ,6,5 ,6 ,7,];
Numbers.sort();
console.log(Numbers);
//   compare method
// for descending order
// const sortedNumbers =Numbers.sort((a ,b) => a -b);
// if(a > b) return 1 => switch the order
// if(b > a) return -1 => keep the order

Numbers.sort((a ,b) =>{ 
    if(a > b) return -1;
    if(b > a) return 1;
});
console.log(Numbers);

//  usemap to square each number and create a new array

const numberNew =[1 , 2, 3,4 ,5];
const squareValue =numberNew.map((currentValue) =>{ 
    return currentValue*currentValue;
});
console.log(squareValue);
//  using map method , writea function that takes an array of strings and returns a new array where 
// each string is capatalized

const words = ["apple" ,"bnana","cherry","date"];
const capital = words.map((curElem) =>{ 
    return curElem.toUpperCase();
    // return curElem.toLowerCase();

});
console.log(capital);

//  using map method , write a function that takes an arrayof numbers and returns a array where each number is squared , but only if its an even number  
const arrayNumbers =[1 , 2,3 ,4 ,5 ,6 ,7,8,9 ,10];
const square =arrayNumbers.map((curElem)=>{ 
if(curElem % 2==0){ 
    return curElem * curElem ; 

}
}) 
.filter((curElem) => curElem !=  undefined);
console.log(square);

//  using map method .], write a function that takes an array of names and returns a new array where each nameis prefix with "Mr."

const nameArray =["Akash" ,"Anil" ,"Vinod" ,"Sunil"];
const newName = nameArray.map((curElem) =>{ 
    return  ` ${"Mr."} ${curElem}`;
}) ;
console.log(newName);
//  reduce function 
const productPrice = [100 , 200 , 300 , 400, 500];
const totalPrice = productPrice.reduce((accum , curElem)=>{
    return accum + curElem ;
},0);

console.log(totalPrice);