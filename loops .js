//  while loops
let i= 1 ;
while (i <= 10) { 
    console.log(i);
    i++;
}
//  for loop
for(let i = 1 ; i <= 20 ; i++){ 
    console.log(i);
}

//  do while loops
let k = 10;
do{ 
    console.log("this is do while loops");
    console.log(k);
    k++;
} while( k <= 30);


// while loop for table of 5

for( let t = 1 ; t <= 10; t++){ 
    let m = t*2; 
    console.log(m);
}

// while loop for table 5
let num = 1 ;
while(num <= 10){ 
    // let v = n*5;
    // console.log(v);
    console.log(`5*${num} =${5*num}`);
    num ++;
}

// simpe do while loop to count from 1 to 10

let c = 1;
do{ 
    console.log(c);
    c++;
} while(c <= 10);

// validating user input with a Do... while loop(User need to write a valid number)

// 
// let userInput ;
// /let positiveNumber ;
// do{ 
    // userInput =prompt("enter any posotive number");
    // positiveNumber = parseFloat(userInput);
// }while(isNaN(positiveNumber)|| positiveNumber < 0);
// console.log("you entered a valid positive number:"  , positiveNumber);

//  calculate the sum of number from 1 to 10 using a for loop
var sum = 0;
for(let  n = 1;  n <= 10 ; n ++){ 
    var sum = sum + n ;

}
console.log(sum);


// check a number is prime or not
var p = 37;
var isPrime = true;
for( var v = 2; v<p ; v++){ 
    if(p % 2 == 0){ 
        isPrime = false;
        break;
    }
}
if(isPrime){ 
    console.log("number is prime");
} else{ 
    console.log("Num is not prime");
}

// table of 5 using for loop
for(var a = 1;a <= 10; a++){ 
    console.log(" 5 *" + a + "=" + 5 * a);
}
//  js program to print table for given number (8 , 9 ,12 , 15)using for loop ?

for( var s = 1 ; s <= 10; s++){ 
    console.log(" 8  *" + s + "=" + 8 * s);
}
for( var b = 1 ; b <= 10; b++){ 
    console.log(" 9  *" + b + "=" + 9 * b);
}

for( var x = 1 ; x <= 10; x++){ 
    console.log(" 12  * " + x + "=" + 12 * x);
}
for( var y = 1 ; y <= 10; y++){ 
    console.log(" 15 * " + y + "=" + 15 * y);
}
//  check year is leap or not

var year = 2004;

if((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) { 
    console.log(year ,"it is a leap year");
} else { 
    console.log(year , "it is not leap year");
}
// pattern printing

for(var s =1; s<=5;s++){ 
    var pattern = " " ;
    for(var w =1;w <= s;w++){
        
            pattern = pattern + " *" ;

    }

    console.log(pattern);
}
// functions 

function  add(a , b) { 
    return a + b;
}

console.log(add(2 ,4));
console.log(add(12 ,44));
console.log(add(247 ,4));
console.log(add(27 ,884));
console.log(add(28 ,44));


function addition(){ 
    var a =6;
    var b = 10;
    var c = a + b;
    console.log(c);
}
addition();
//   
function greet(name){ 

console.log("hello " +name +" , welcome to Thapa Technical channel js course ") 
}
greet("khushbu");
greet("reena");

//  iife

(function (a , b){ 
    console.log(a + b);
}) (5,10);


let firstName = "khushbu";
let lastName = "shah";
let fullName = `${firstName} ${lastName}`;
console.log(fullName);

let age = 21;
let message = `I am ${age} years old `;
console.log(message);

let multilineString = `
This is multiline strings using template literals .
it's much easier and cleaner to read 
`;
console.log(multilineString);

//  default parameter

function addition1(a ,b=10){ 
    return a + b ;

}

console.log(addition1(40 , 50));

//  traditional function 


const addition2 = function (a , b){ 
    let result = `The  sum of ${a} and ${b} is ${a + b}`;
    console.log(result);
};

 addition2(20 , 50);


 const abc = (a ,b) => { 
    console.log(`The sum of ${a} and ${b} is ${a +b}`);

 };
 abc(80 , 50);

 const num2 =(a , b) =>`The sum of ${a} and ${b} is ${a +b}`;
 console.log(num2(20 , 40));

 const square = (a) =>`The square of ${a} is ${a *a}`;
 console.log(square(10));

 const hello = () =>console.log("please helpme!...");
 hello();


// calculator function 

/*const calculator =(a , b, operator) =>{ 
    console.log(`the value of ${a} and ${b} is ${a +b}`);
    console.log(`the value of${a} and ${b} is ${a - b}`);
    console.log(`the value of${a} and ${b} is ${a * b}`);
    console.log(`the value of${a} and ${b} is ${a / b}`);
    
    
};

console.log(calculator( 5 , 4, '+'));
console.log(calculator( 8 , 4, '-'));
console.log(calculator( 5 , 4, '*'));
console.log(calculator( 16, 4, '/'));*/

/*let  calculator = '/';
switch(calculator){ 
    case '+':
        var a =2;
        var b = 10 ;
        console.log(`the sum of ${a} and ${b} is ${a +b}`);
        break;

        case'-':
        var a =10  , b = 2;
console.log(`the substraction of ${a} and ${b} id ${a-b}`);
break;

case '*':
    var a =30 , b =20;
    console.log(`the multiplication of ${a} and ${b} is ${a *b}`);
    break;

    case '/':
        var a=30,b =2;
        console.log(`the division of ${a} and ${b} is ${a/b}`);
        break;
        default:
            console.log("sorry there is no any case of this type");
         
}*/

//  calculator function 

function calculator(num1 , num2 , operator)
 { 
    let result ;
    switch(operator){ 
        case '+':
            result = num1 +num2;
            return result;  
            
            case '-':
                result = num1 - num2;
                return result;

                case '*':
                    result = num1 * num2;
                    return result;

                    case '/':
                        if(num2 == 0){ 
                            return "0 is not allowed";
                        } else{

                        
                        result = num1 /num2;
                        return result;
                        }
                        default:
                            console.log("sorry...")

    }
};

// alert(calculator(2 , 4 , '+'));
console.log(calculator(2 , 4 , '-'));
console.log(calculator(2 , 0 , '/'));

//  Reverse a string 
const isReverse =(str) => { 
    let reverse =" ";
    for(let char = str.length-1; char >= 0 ; char--){ 
        reverse = reverse +(str[char]);
    }
    return reverse;
}

console.log(isReverse("vinod thapa"));
const persons = ["ram" ,"Hari" ,"Sita" ,"Bishal" ,"Gita"]
console.log(persons.at(-2));