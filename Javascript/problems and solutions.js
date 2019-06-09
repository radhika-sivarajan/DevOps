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
    var result = (arrOfZeros) 
    ? arrOfZeros.sort((n1, n2) => n1.length < n2.length)[0].length 
    : 0;
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
    return Math.ceil((Y - X)/ D);
}

function permMissingElem(A) {
    A.sort(function (a, b) {
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
    A.sort(function (a, b) {
        return a - b;
    });

    if (arrayLength < 3) {
        return 0;
    }

    for (var i = 0; i < len - 2; i++) {
        var P = i, Q = i + 1, R = i + 2;
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
    A.sort(function (a, b) {
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