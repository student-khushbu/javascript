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