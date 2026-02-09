/*console.log('I am external javascript');
var myAge = 30;
console.log(myAge);
var my_firstName = "john";
var _myLastName$ = "Doe";
var 123myAge = 25;
var $cityName = "New york"; var my@Email = "Thapa@me.com";
console.log( _myLastName$ , my_firstName , $cityName ) ;

string to number
var myFavNum = "10";
console.log(typeof +myFavNum);
console.log(typeof Number(myFavNum));*/



// number to string

let str = 5;
console.log(typeof str);
console.log(typeof String(str));
console.log(typeof (str + " "));

// parseInt

const myString = "43.6";
const myNumber = parseInt(myString );
console.log(myNumber);


// parseFloat

const abcString ="43.6";
const a = parseFloat(abcString);
console.log(a);

const c ="45.7";
const b = parseInt(c);
console.log(b);



console.log(parseInt("123"));
console.log(parseInt("123" , 10));
console.log(parseInt("   123  "));
console.log(parseFloat("077"));
console.log(parseInt("-123"));
console.log(parseInt("xyz"));
console.log(parseInt("1.9"));

console.log(parseInt("$123"));
console.log(parseInt("-123"));
console.log(parseInt("xte"));
console.log(parseInt("123"));
console.log(isNaN("vinod"));
console.log(isNaN("5"));

// Concatenation


const st = "Hello " + " khushbu" ;
console.log(st);

console.log( 10 + "20");
console.log( 9 -"5");
console.log("java" + "Script");
console.log( " " + " ");
// let sum = " " + " 0 ";
// console.log(typeof sum);
console.log("vinod" -"thapa");
console.log(true + true);
console.log(true + false);
console.log( false + true);
console.log(false - true);


// let sum = "5" + 10 ;
// console.log(sum);  



let go = 10 ;
let we = 56 ;
let sum = go + we ;
console.log(sum);
let sub = we - go;
console.log(sub);
let mul = go * we;
console.log(mul);
let div = we / go ;
console.log(div);
let mod = we % go ;
console.log(mod)

var result = "hello" /2 ;
console.log(result);

var result = 0.1 + 0.2;
console.log(result.toFixed(2));


const res = 55 * "hello";
console.log(res);

// comparison operator

console.log(5 == "5");

console.log(4 ==="4");

// not  equal 

console.log(10 != 6);

//  Greater than

console.log(5 > 4);

// less than(<)
console.log( 5 < 10);

//  greater than or equal to 
console.log(10 <= 10);


//  less than or equal to 
console.log( 5 <= 10);

// logical (AND) operator

var x = 5 ;
var y = 10 ;
console.log(x > 0 && y < 0);

// logical or(||)

let  k = 15 ;
var l = 0 ;
console.log(k > 10 || l > 10);


var isOpen = false ;
console.log(!isOpen);

// person is eligible to drive or not 

var age = 7 ;
var hadDrivingLicense = false ;

if(age >= 18 && hadDrivingLicense == true){ 
    console.log("eligible for driving ");
}
else{ 
    console.log("not eligible for driving");
}

//  ternary operator

//  condition? expressionIFtrue:epressionIFfalse;
console.log(( age >= 18 && hadDrivingLicense == true)?("eligible"):("not eligible"));

// let say have a variable score representing a student's exam score . If The score is greater than or equal to 60 , the student passes ;
// otherwise , they fail . Use the conditional(ternary) operator to determine the result and and store it in a variable calledresult .Log the result to the console? 


var score = 40;
console.log((score >= 60)?("pass"):("Fail"));


console.log(typeof ("5" - 3));
console.log(2 < 12 < 5);
// 2 < 12 = true and true 1 so 1 < 5 = true
console.log(typeof ("20" + 10 + 10));


// control Statement & Loops
/*
1 . if else 
 2. switch statement
3 . while loop
4 . do while
5.  for loop   
6. for In / forof loop  
(Later in Arrays )

*/


var temp = 20;
if(temp >= 30){ 
    console.log("Let's go to Beach....yaaahooo");
} else if(temp >= 20 && temp <= 30){ 
    console.log("Watch TV at Home.....");
} else{ 

    console.log("good night guys.....");

}

// If the person is 18 years or older , a citizen , and registered to vote , display a mesage saying they are eligible to vote

var age = 18
var hadCitizen = true;
var hadResisterd = false; 
if(age >= 18 && hadCitizen == true && hadResisterd == true){ 
    console.log("person is eligible for vote");
}
else if (age >= 18 && hadCitizen != true && hadResisterd != true){ 
    console.log("not eligible for vote");
}

 else if(age >= 18 && hadCitizen != true ) { 

    console.log("person is not eligible due to citizenship")
 }
else if(age >= 18 && hadCitizen == true && hadResisterd != true){ 
    console.log("person is not eligibledue to resistration status");

} else{ 
    console.log("I am tired");
}


//  check even or odd
var number = 6;
if( number % 2 == 0){ 
console.log( "number is even number");
}
else{ 
    console.log("number is odd number");
}

//  check prime number

let num =47;
let isPrime = true ;
if( num <= 1){ 
    isPrime = false ;

} else {
    for(let i = 2 ; i < num ; i++){ 
        if(num % 2 === 0 ){ 
            isPrime = false;
            break;
        }
    }
}
if(isPrime){


    console.log("prime number");
}
else { 
    console.log("not a prime number");
}

//  check a number if a number is positive , negative  or Zero

var m = 7;
if(m == 0){ 
    console.log("number is zero");
}else if(m > 0){ 
    console.log("number is positive");
} else { 
    console.log("number is negative");
}

// 
var day ="thursday";
switch(day){ 
    case "Monday":
    console.log("Today is monday");
    break;


    case "Tuesday":
       console.log("Today is tuesday") ;
       break;

       case "sunday":
       console.log("Yaah today is sunday....");
       break;

       default:
        console.log("Today is another day");
        break;
}

//  SWITCH STATEMENT 

var areaOfShapes = "triangle" ;

switch(areaOfShapes){ 

    case "rectangle":
        var l = 5;
        var br = 10;
        var area = l * br ;
        console.log(area);
        break;
        
        case "circle":
            var r =3;
            var area = 3.14 * r * r;
            console.log(area);
            break;

            case "square":
                var s = 5;
                var area = s * s ;
                console.log(area);
                break;

                default:
                    console.log(" Sorry ,this shape is not available");
}

