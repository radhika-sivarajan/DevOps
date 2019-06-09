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