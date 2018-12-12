var lineBreak = "\n-------------\n";

// Write a javascript function named is_integer which checks if the passed argument is an integer. You can use any mathematical operator or functions defined in the Math object.
console.log("Integer check");
function is_integer(n) {
    if (isNaN(n))
        console.log("Not a number");
    else
        console.log("Its a number");
}
is_integer("5mm");
console.log(lineBreak);

// Using the forEach function defined for an array, find the sum of the array of numbers. [function add_all(arr) {...}]
console.log("Sum of array");
var sum = 0;
var arrayNumber = [2, 9, 10];
arrayNumber.forEach(function (num) {
    sum += num;
});
console.log(sum);
console.log(lineBreak);

// Write a JavaScript program to convert temperatures to and from celsius, fahrenheit. [ Use the formula : c/5 = (f-32)/9, where c = temperature in celsius and f = temperature in fahrenheit]
console.log("Temparature conversion");
var tempF;
var tempC;
var data = process.argv[2];
var tempType = data.substr(data.length - 1);
var temp = parseFloat(data.substr(0, (data.length - 1)));
if ((tempType === "c") || (tempType === "C"))
    celToF(temp);
else if ((tempType === "f") || (tempType === "F"))
    fToCel(temp);
else
    console.log("Enter in correct format");

function celToF(c) {
    tempF = c * 1.8 + 32;
    console.log(c + "°C Temparature in Fahrenheit is " + tempF + "°F");
}

function fToCel(f) {
    tempC = (f - 32) / 1.8;
    console.log(f + " °F Temparature in Celsius is " + tempC + "°C");
}

// Write a factorial function that returns the factorial of a given number, n. Make sure you return the calculated value and not just print it. [function factorial(n){...}]
console.log("Factorial");
function factorial(num) {
    if (num === 0) { return 1; }
    else { return num * factorial(num - 1); }
}
var fSum = factorial(4);
console.log(fSum);
console.log(lineBreak);

// Write a javascript function that converts a given amount of money into coins of denominations (1, 2, 5, 10 and 25). [function convert_to_coins(amount) {...}]. You may choose to print the coin denominations used on the console. E.g. convert_to_coins(87) should print 25 25 25 10 2.
function convert_to_coins(amount) {
    var denominations = [25, 10, 5, 2, 1];
    var curr_denom_index = 0;
    while (amount > 0) {
        while (amount < denominations[curr_denom_index]) {
            curr_denom_index++;
        }
        amount = amount - denominations[curr_denom_index];
        console.log(denominations[curr_denom_index]);
    }
}