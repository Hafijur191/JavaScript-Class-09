// Problems Example for switch case :

// 1. JavaScript  program to input week number(1-7) and print day of week name:

if (day == 1) {
  document.write("Saturday");
}
if (day == 2) {
  document.write("Sunday");
}
if (day == 3) {
  document.write("Monday");
}
if (day == 4) {
  document.write("Tuesday");
}
if (day == 5) {
  document.write("Wednesday");
}
if (day == 6) {
  document.write("Thursday");
}
if (day == 7) {
  document.write("Friday");
}

// 2. JavaScript  program to input month number and print total number of days in month :

if (month == 1) {
  document.write("January = 31");
}
if (month == 2) {
  document.write("February = 29");
}
if (month == 3) {
  document.write("March = 31");
}
if (month == 4) {
  document.write("April = 30");
}
if (month == 5) {
  document.write("May = 31");
}
if (month == 6) {
  document.write("June = 30");
}
if (month == 7) {
  document.write("July = 31");
}
if (month == 8) {
  document.write("August = 31");
}
if (month == 9) {
  document.write("September = 30");
}
if (month == 10) {
  document.write("October = 31");
}
if (month == 11) {
  document.write("November = 30");
}
if (month == 12) {
  document.write("December = 31");
}

// 4. JavaScript  program to input two numbers from user and find maximum between two numbers:

var num1 = 5000;
var num2 = 2000;

if (num1 > num2) {
  document.write("number 1 is bigger");
}
if (num2 > num1) {
  document.write("number 2 is bigger");
}

// 5. JavaScript  program to input number from user and check whether the number is even or odd:

var number = 10;

if (number % 2 == 0) {
  document.write("Even");
}
if (number % 2 != 0) {
  document.write("Odd");
}

// 6. JavaScript  program to input a number and check positive negative or zero:

var num = 9;

if (num > 0) {
  document.write("Positive");
}
if (num < 0) {
  document.write("Negative");
}

// Problems Example for if-else:

// 1. JavaScript  program to find maximum between three numbers:

var num1 = 5000;
var num2 = 2000;
var num3 = 3000;

if (num1 > num2 && num1 > num3) {
  document.write("number 1 is bigger");
}
if (num2 > num1 && num2 > num3) {
  document.write("number 2 is bigger");
}
if (num3 > num1 && num3 > num2) {
  document.write("number 3 is bigger");
}

// 2. JavaScript program to check whether a number is divisible by 5 and 11 or not using if else:

if (numbers[i] % 5 === 0) {
  document.write(numbers[i] + " is  div by 5");
} else if (numbers[i] % 11 === 0) {
  document.write(numbers[i] + " is  div by 5");
} else if (numbers[i] % 5 === 0 && numbers[i] % 11 === 0) {
  document.write(numbers[i] + " are both div by 5 and 11");
} else {
  document.write("no fizz or buzz");
}

// 3. JavaScript  program to check leap year using if else. How to check whether a given year is leap year:

var year = 1998;

if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
  document.write(year + " is a leap year");
} else {
  document.write(year + " is a common year");
}

// 5. JavaScript  program to input a character from user and check whether given character is alphabet, digit or special character using if else:

if ((ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z")) {
  System.out.println(ch + " is A ALPHABET.");
} else if (ch >= "0" && ch <= "9") {
  System.out.println(ch + " is A DIGIT.");
} else {
  System.out.println(ch + " is A SPECIAL CHARACTER.");
}

// 7. JavaScript  program to input week number(1-7) and print the corresponding day of week name using if else:

if (day == 1) {
  document.write("Saturday");
}
if (day == 2) {
  document.write("Sunday");
}
if (day == 3) {
  document.write("Monday");
}
if (day == 4) {
  document.write("Tuesday");
}
if (day == 5) {
  document.write("Wednesday");
}
if (day == 6) {
  document.write("Thursday");
}
if (day == 7) {
  document.write("Friday");
}

// 8. JavaScript  program to check whether a triangle is valid or not if angles are given using if else:

function Valid(a, b, c) {
  if (a + b + c == 180 && a != 0 && b != 0 && c != 0) return 1;
  else return 0;
}

var a = 60;
var b = 40;
var c = 80;

if (Valid(a, b, c) == 1) {
  document.write("Triangle is Valid");
} else {
  document.write("Triangle is Invalid");
}

// 9. JavaScript  program to input side of a triangle and check whether triangle is valid or not using if else:

function checkValidity(a, b, c) {
  if (a + b <= c || a + c <= b || b + c <= a) return false;
  else return true;
}

let a = 7,
  b = 10,
  c = 5;

if (checkValidity(a, b, c)) document.write("Triangle is Valid");
else document.write("Triangle is Invalid");

// 10. JavaScript program to input sides of a triangle and check whether a triangle is equilateral, scalene or isosceles triangle using if else:

function checkTriangle(x, y, z) {
  if (x == y && y == z) document.write("Equilateral Triangle");
  else if (x == y || y == z || z == x) document.write("Isosceles Triangle");
  else document.write("Scalene Triangle");
}

let x = 8,
  y = 7,
  z = 9;

checkTriangle(x, y, z);


// 11. JavaScript C program to input cost price and selling price of a product and check profit or loss:

function Profit(costPrice, sellingPrice) {
  let profit = sellingPrice - costPrice;

  return profit;
}

function Loss(costPrice, ellingPrice) {
  let Loss = costPrice - sellingPrice;

  return Loss;
}

let costPrice = 1500,
  sellingPrice = 2000;

if (sellingPrice == costPrice) document.write("No profit nor Loss");
else if (sellingPrice > costPrice)
  document.write(Profit(costPrice, sellingPrice) + " Profit ");
else document.write(Loss(costPrice, sellingPrice) + " Loss ");


// 12. JavaScript  program to input marks of five subjects Physics, Chemistry, +```Biology, Mathematics and Computer, calculate percentage and grade according to given conditions:

var Physics = 82;
var Chemistry = 70;
var Biology = 64;
var Mathematics = 78;
var Computer = 92;

var avg = 0;

avg = (Physics + Chemistry + Biology + Mathematics + Computer) / 5;


if (avg >= 90 && avg <= 100) {
  document.write('A+');
}
if (avg >= 80 && avg <= 90) {
  document.write("A");
}
if (avg >= 70 && avg <= 80) {
  document.write("B");
}
if (avg >= 60 && avg <= 70) {
  document.write("C");
}
if (avg >= 33 && avg <= 60) {
  document.write("D");
}
if (avg < 33) {
  document.write('F')
}


// 13. JavaScript  program to input basic salary of an employee and calculate gross salary according to given conditions:

function computeSalary(basic, grade) {
  let allowance;
  let hra, da, pf;

  hra = 0.2 * basic;
  da = 0.5 * basic;
  pf = 0.11 * basic;

  
  if (grade == "A") {
    allowance = 1700.0;
  } else if (grade == "B") {
    allowance = 1500.0;
  } else {
    allowance = 1300.0;
  }
  let gross;

  gross = Math.round(basic + hra + da + allowance - pf);

  return gross;
}

let basic = 10000;
let grade = "A";

document.write(computeSalary(basic, grade));


// 14. JavaScript program to input electricity unit charge and calculate the total electricity bill according to the given condition:

var unit = 283;
var subtotal = 0;
var total = 0;

if (unit <= 50) {
  subtotal = unit * 5;
}
if (unit > 50 && unit <= 150) {
  subtotal = 50*5 + (unit-50)*7;
}
if (unit > 150 && unit <= 250) {
  subtotal = 50 * 5 + 100*7 + (unit - 150) * 10;
}
if (unit > 250) {
  subtotal = 50 * 5 + 100 * 7 + 100*10 + (unit - 250) * 12;
}

total = subtotal * 0.15 + subtotal;

document.write('Subtotal: ' + subtotal + '<br>' + 'Total: ' + total);