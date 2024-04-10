console.log(eval('2 + 2'));
console.log(eval(new String('2 + 2')));
console.log(eval('2 + 2') === eval('4'));
console.log(eval('2 + 2') === eval(new String('2 + 2')));

console.log("Hello world");

function div(z) {
    if (isFinite(1000/z)) {
        return 'Not Infinity';
    }
    return 'Infinity';
}
console.log(div(0));
console.log(div(1));
/*
console.log("Using var Keyword");
var x = 1;
if (x === 1) {
    var x = 2;
    console.log(x);
}
console.log(x);
console.log("Using let Keyword");
let x1 = 1;
if (x1 === 1) {
    let x1 = 2;
    console.log(x1); 
}
console.log(x1); 

console.log("Using const Keyword");
const numb = 48;
try {
    const numb = 42;
} catch (err) {
    console.log(err);
}
console.log(numb); 

// String
let str = "hello world";
console.log(str);

// Number
const num = 10;
console.log(num);

// Boolean
const x = "true";
console.log(x);

// Undefined
let name;
console.log(name );

// Null
const number = null;
console.log(number);

// Symbol
const value1 = Symbol("hello");
const value2 = Symbol("hello");
console.log(value1);
console.log(value2);

const object={
    firstName: "divya",
    lastName: null,
    batch:2,
};
console.log(object);
*/

let a = 5;
let b = 3;

console.log("a + b = ", a);
console.log("a - b = ", a - b);
console.log("a * b = ", a * b); 
console.log("a / b = ", a / b);
console.log("a % b = ", (a % b));
console.log("++a = ", ++a);
console.log("a++ = ", a++);
console.log("a = ", a);
console.log("--a = ", --a);
console.log("a-- = ", a--);
console.log("a = ", a);
console.log("a ** b =", a ** b);
console.log(a > b);
console.log((2 == 2));
console.log((3 != 2));
console.log((2 === 2));
console.log((2 !== 2));
console.log((a < 6 && b < 5));
console.log((a < 6 || b > 6));
console.log(!(a < 6));

// Declaring and initializing arrays

let arr = [10, 20, 30, 40, 50];
let arr1 = [110, 120, 130, 140];
let string_arr = ["Alex", "peter", "chloe"];
arr.push(60);
console.log("After push op " + arr);
arr.unshift(0, 10);
console.log("After unshift op " + arr );
arr.pop();
console.log("After pop op" + arr);
arr.shift();
console.log("After shift op " + arr);
arr.splice(2, 1);
console.log("After splice op" + arr);
arr.reverse();
console.log("After reverse op" + arr);
console.log("After concat op" + arr.concat(arr1));


// Illustration of for loop
let d;
for (d = 2; d <= 4; d++) {
    console.log("Value of d:" + d);
}
/*
let languages = {
    first: "C",
    second: "Java",
    third: "Python",
    fourth: "PHP",
    fifth: "JavaScript",
};

for (itr in languages) {
    console.log(languages[itr]);
}

// Illustration of while loop
let y = 1;

while (y <= 4) {
    console.log("Value of y:" + y);
    x++;
}

// Illustration of do-while loop
let z = 21;

do {
    console.log("Value of z:" + z);

    z++;
} while (z < 20);

// JavaScript program to illustrate if-else statement
const i = 10;

if (i < 15)
    console.log("Value of i is less than 10");
else
    console.log("Value of i is greater than 10");
*/
let hii = 'HII';
let divya = 'javascript';
    
console.log(hii);
console.log(divya);
console.log(hii.concat(divya));
console.log(divya.match(/ivy/));
console.log(divya.charAt(5));
console.log(divya.valueOf());
console.log(divya.lastIndexOf('for'));
console.log(divya.substr(6));
console.log(divya.indexOf('H'));
console.log(divya.replace('II', 'ii'));
console.log(divya.slice(2, 8));
console.log(divya.split('-'));
console.log(divya.toUpperCase(divya));
console.log(divya.toLowerCase(divya));

// Program to validate the email address
function validateEmail(email) {

    const re = /\S+@\S+\.\S+/g;

    let result = re.test(email);
    if (result) {
        console.log("The email is valid.");
    } else {
        console.log("The email is not valid.");
    }
}

// Input Email Id
let email = "abc@gmail.com"
validateEmail(email);

email = "abc#$#@45com"
validateEmail(email);


// Here a date has been assigned by creating a date obj
let DateObj = new Date("October 13, 1996 05:35:32");
let A = DateObj.getDate();
console.log(A);
let B = DateObj.getTime();
console.log(B);
let minutes = DateObj.getMinutes();
console.log(minutes);
let C = DateObj.getFullYear();
console.log(C);
let Day = DateObj.getDay();
console.log("Number of Day: " + Day);
DateObj.setDate(15);
let D = DateObj.getDate();
console.log(D);


var num = 213;
var num1 = 213.3456711;
console.log("Output : " + num.valueOf());
console.log("Output : " + num.toString(2));
console.log("Output : " + num1.toString(2));
console.log("Output : " + num1.toPrecision(3));
console.log("Output : " + num1.toExponential(4));
