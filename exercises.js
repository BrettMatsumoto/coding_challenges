// Function -  FirstFactorial(num)
// The function will take the num parameter being passed and return the factorial of it (ie. if num =3, return(3 * 2 * 1)).  For test cases, the range will be between 1 and 18.

var ranNum = Math.floor(Math.random()*19);

function factorial(num){
    if (num === 0) {
        return 1;
    } else {
        return num * factorial(num-1)
    }
}
// console.log(factorial(ranNum));

// Function - SimpleAdding(num)
// The function will take the num parameter and add up all the numbers from 1 to num.  For test cases, the parameter num will be any number from 1 to 1000.

var ranNum2 = Math.floor(Math.random()*1000);

function sumUp(num){
    var sum = 0;
    for (i=1;i<=num;i++){
    sum += i;
    }
    return sum
}
// console.log(ranNum2);
// console.log(sumUp(4));
// console.log(sumUp(ranNum2));

// Function - LetterCapitalize(str)
// The function will take the str parameter being passed and capitalize the first letter of each word.  Words will be separated by only one space.

function capIt(str){
    strSplit = str.split(' ');
    for (i=0;i<strSplit.length;i++){
        strSplit[i] = strSplit[i].charAt(0).toUpperCase() + strSplit[i].substring(1);
    }
    return strSplit.join(' ');
}
// console.log(capIt('this is a string'));

// Function rangeRover(arr)
// The function will take an array of two numbers and return the sum of those two numbers AND all numbers between them.  The lowest number will not always come first.  For example rangeRover([1, 4]) should return 10, i.e.(1 + 2 + 3 + 4), rangeRover([4, 1]) should also return 10.

function rangeRover(arr){
    var a = arr[0];
    var b = arr[1];
    var reorganized = [];
    var sum = 0;
    if (a < b){
        reorganized.push(a);
        reorganized.push(b);
    } else {
        reorganized.push(b);
        reorganized.push(a);
    }
    for (i = reorganized[0]; i <= reorganized[1]; i++){
        sum += i;
    } return sum
}
console.log(rangeRover([5,2]));

// Function missingLetter(str)
// The function will find the missing letter passed in the parameter and return it.  If all letters are present in the string, the return will be undefined.  For example missingLetter("abce") should return "d", missingLetter("bcd") should return undefined.

function findMissing(str){
    var start = 0;
    var end = 122;
    if (str) {
        i = str.charCodeAt(0);
        while (i <= end && start < str.length) {
            if (String.fromCharCode(i) !== str.charAt(start)) {
                return String.fromCharCode(i);
            }
            i++; start++;
        }
    }
    return undefined;
}
// console.log(findMissing('abce'))
// console.log(findMissing('bcd'))

// Function hailCaesar(num)
// The function will take the num parameter and convert the given number into a roman numeral.  For example hailCaesar(2) should return "II", hailCaesar(5) should return "V".

function hailCaesar(num){
    if (typeof num !== 'number')
    return NaN;

    var digits = String(+num).split('')
    var key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
    "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
    "","I","II","III","IV","V","VI","VII","VIII","IX"]
    var romanNum = '';
    var i = 3;
    while (i--)
    romanNum = (key[+digits.pop() + (i*10)] || "") + romanNum;
    return Array(+digits.join('')+1).join('M') + romanNum;
}
// console.log(hailCaesar(3));
// console.log(hailCaesar(16));
// console.log(hailCaesar('zebra'));

// Function spinalTap(str)
// The function will convert a string to spinal case.  Spinal case is all-lowercase-words-joined-by-dashes.  For example spinalTap("I own this Taco Stand!") should return "i-own-this-taco-stand!".

function spinalTap(str){
    var regex = / /gi;
    return str.replace(regex, '-')
}
// console.log(spinalTap('I own this Taco Stand!'));

// Function sumFibs(num)
// The function will return the sum of all ODD Fibonacci numbers up to and including the passed number if it's a Fibonacci number.  The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, where the next number is found by adding up the two numbers before it.  For example subFibs(4) should return 5, sumbFibs(1000) should return 1785.

function sumFibs(num){
    var a = 0;
    var b = 1;
    var fib = 1;
    var sum = 0;
    while (fib <=num){
        if (fib%2 === 1){
            sum += fib;
        }
        fib = a+b;
        a = b;
        b = fib;
    }
    return sum;
}
// console.log(sumFibs(4));
// console.log(sumFibs(1000));