// Write a javascript function named is_integer which checks if the passed argument is an integer. You can use any mathematical operator or functions defined in the Math object.
function is_integer(n) {
    if (isNaN(n))
        console.log("Not a number");
    else
        console.log("Its a number");
}


// Using the forEach function defined for an array, find the sum of the array of numbers. [function add_all(arr) {...}]
var sum = 0;
var arrayNumber = [2, 9, 10];
arrayNumber.forEach(function(num) {
    sum += num;
});


// Write a factorial function that returns the factorial of a given number, n. Make sure you return the calculated value and not just print it. [function factorial(n){...}]

function factorial(num) {
    if (num === 0) { return 1; } else { return num * factorial(num - 1); }
}


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


function fibonacci(n) {
    var a = 1;
    var b = 1;
    var f = [1, 1];
    for (let i = 2; i < n; i++) {
        c = a + b;
        f.push(c);
        a = b;
        b = c;
    }
    return f;
}

function binaryGap(N) {
    var binary = (N >>> 0).toString(2);
    var regex = /(?!1)(0+)(?=1)/g;
    var arrOfZeros = binary.match(regex);
    var result = (arrOfZeros) ?
        arrOfZeros.sort((n1, n2) => n1.length < n2.length)[0].length :
        0;
    return result;
}

function printStar(n) {
    for (let i = 0; i < n; i++) {
        var o = "";
        for (let j = 0; j <= i; j++) {
            o += "*";
        }
        console.log(o);
    }
}

function printStarPyramid(n) {
    var str = '';
    for (let i = 1; i <= n; i++) {
        for (let k = 1; k <= n - i; k++) {
            str += " ";
        }
        for (let j = 1; j <= i; j++) {
            str += "*  ";
        }
        console.log(str);
    }
}

function cyclicRotation(A, K) {
    K = K % A.length;
    if (A.length === 0 || A.length === 1 || K === 0) {
        return A;
    }
    let part = A.splice(A.length - K);
    return part.concat(A);
}

function oddOccurrencesInArray(A) {
    var arrayLength = A.length;
    var agg = 0;
    for (let i = 0; i < arrayLength; i++) {
        agg ^= A[i];
    }
    return agg;
}

function frogJump(X, Y, D) {
    return Math.ceil((Y - X) / D);
}

function permMissingElem(A) {
    A.sort(function(a, b) {
        return a - b;
    });

    var missing = 1;
    var i = 0;
    while (missing === A[i]) {
        missing++;
        i++;
    }
    return missing;
}

function missingInteger(A) {
    var map = {};
    var min = 1;

    for (var i = 0; i < A.length; i++) {
        if (A[i] > 0) {
            map[A[i]] = true;

        }
    }

    if (!map[min]) return 1;
    while (map[min])
        min++;
    return min;

}

function triangle(A) {
    var arrayLength = A.length;
    A.sort(function(a, b) {
        return a - b;
    });

    if (arrayLength < 3) {
        return 0;
    }

    for (var i = 0; i < len - 2; i++) {
        var P = i,
            Q = i + 1,
            R = i + 2;
        var condition1 = A[P] + A[Q] > A[R];
        var condition2 = A[Q] + A[R] > A[P];
        var condition3 = A[R] + A[P] > A[Q];
        if (condition1 && condition2 && condition3) {
            return 1;
        }
    }
    return 0;
}

function maxProductOfThree(A) {
    var arrayLength = A.length;
    A.sort(function(a, b) {
        return a - b;
    })
    var B = [];
    if (arrayLength >= 3) {
        for (let i = 2; i < arrayLength; i++) {
            var val = parseInt(A[i - 2] * A[i - 1] * A[i]);
            B.push(val);
        }
        var max = getMaxOfArray(B);
        return max;
    }
    return 0;
}

var arrayNum = [5, 1, -13, 8, 3, -2, 7, 4, 6, 45, -20];
arrayNum.sort(function(a, b) {
    return (a - b);
});


var randNum = Math.floor(Math.random() * 12) + 1;


function frequencyOfChar(str) {
    str = str.toLowerCase();
    str = str.replace(/[^a-zA-Z]/g, '');
    var mostFrequentL = "";
    var mostFrequent = 0;
    var obj = {};
    for (var i = 0; i < str.length; i++) {
        if (obj[str[i]]) {
            obj[str[i]] = obj[str[i]] + 1;
        } else {
            obj[str[i]] = 1;
        }
        // obj[str[i]] = obj[str[i]] ? ++obj[str[i]] : 1;
    }

    for (o in obj) {
        if (obj[o] > mostFrequent) {
            mostFrequent = obj[o];
            mostFrequentL = o;
        }
    }
    return obj;
}


function palindrome(str) {
    if (typeof(str) == "string") {
        str = str.replace(/[^a-zA-Z]/g, "");
        str = str.toLowerCase();
        var str2 = str.split("").reverse().join('');
        if (str === str2)
            return true;
    }
    return false;
}

function fizzBuzz() {
    for (var num = 1; num < 101; num++) {
        if (num % 15 == 0) {
            console.log("fizzBuzz", num);
        } else if (num % 5 == 0) {
            console.log("fizz");
        } else if (num % 3 == 0) {
            console.log("Buzz");
        } else {
            console.log(num);
        }
    }
}

function bubbleSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    console.log(arr);
}

function bubbleSortEff(inputArr) {
    let len = inputArr.length - 1;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < len; i++) {
            if (inputArr[i] > inputArr[i + 1]) {
                let temp = inputArr[i];
                inputArr[i] = inputArr[i + 1];
                inputArr[i + 1] = temp;
                swapped = true;
            }
        }
        len--;
        console.log(inputArr);
    } while (swapped);
    console.log(inputArr);
}


function fibonacci(n) {
    var result = [0, 1];
    for (let i = 2; i = n; i++) {
        let num1 = result[i - 1];
        let num2 = result[i - 2];
        result.push(num1 + num2);
    }
    return result;
}

function fibonacciRecursion(n) {
    // if (n < 2){
    //   return n
    // }
    // return fib(n - 1) + fib (n - 2)
    if (n === 1) {
        return [0, 1];
    } else {
        var s = fibonacciRecursion(n - 1);
        s.push(s[s.length - 1] + s[s.length - 2]);
        return s;
    }
}

function duplicateCharacters(input) {
    // Your code goes here
    var dupeCharObject = {};
    var dupeCount = 0;
    for (var i = 0; i < input.length; i++) {
        var character = input.charAt(i);
        if (dupeCharObject[character]) {
            dupeCharObject[character]++;
        } else {
            dupeCharObject[character] = 1;
        }
    }
    Object.keys(dupeCharObject).forEach(function(key) {
        if (dupeCharObject[key] !== 1) {
            dupeCount++;
        }
    });
    return dupeCount;
};

function secondHighestDigit(input) {
    // Your code goes here
    // Extract number, split to make array, make set get unique elements, 
    var secondHighest;
    var numArray = input.match(/\d/g);
    if (numArray == null) {
        return -1;
    } else if (numArray.length == 0 || numArray.length == 1) {
        return -1;
    } else {
        var numArrayUnique = Array.from(new Set(numArray));
        var sortArray = numArrayUnique.sort();
        secondHighest = sortArray[sortArray.length - 2];
    }
    return parseInt(secondHighest);
};

function formatDate(userDate) {
    // format from M/D/YYYY to YYYYMMDD
    let dateArray = userDate.split("/");
    if (dateArray[0].length == 1) {
        dateArray[0] = 0 + dateArray[0];
    }
    if (dateArray[1].length == 1) {
        dateArray[1] = 0 + dateArray[1];
    }


    let dateString = dateArray[2] + dateArray[1] + dateArray[0]
    return dateString;
}

// var answer = is_integer("5mm");
// console.log(sum);
// var answer = factorial(4);
// var answer = convert_to_coins(87);
// var answer = fibonacci(10);
// var answer = printStar(6);
// var answer = printStarPyramid(4);
// var answer = cyclicRotation([3, 4, 5, 6, 7, 8], 3);
// var answer = oddOccurrencesInArray([3, 7, 3, 7, 3, 9, 4]);
// var answer = frogJump(10,35,50);
// var answer = permMissingElem([3,2,1,5]);
// var answer = missingInteger([1, 3, 5, 4, 1, 2, 8]);
// var answer = triangle([10,2,5,1,8,20]);
// var answer = maxProductOfThree([-3, 1, 2, -2, 5, 6]);
// console.log(answer);