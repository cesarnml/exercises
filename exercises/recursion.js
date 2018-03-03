//complete the following using recursion

// 1. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21 *** DONE ***

var sum = function(array) {
  if (array.length === 0) return 0;
  return array.pop() + sum(array);
};

console.log(sum([1,2,4]));


// 2. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15 *** DONE ***

var arraySum = function (array) {

  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      newArr = newArr.concat(arraySum(array[i]));
    } else {
      newArr.push(array[i]);
    }
  }
  return newArr.reduce( (acc, cur) => acc += cur, 0)
};

console.log(arraySum([1,[2,3],[[4]],5]));

// 3. Check if a number is even. *** DONE BUT NOT PERFECT ****
var isEven = function(n) {
  if (n === 0 ) return true;
  if (n === 1 ) return false;
  return isEven(n - 2); // solution limited by callstack n <= 16092
};

// 4. Sum all integers below a given integer. ***DONE***
// sumBelow(10); // 45
// sumBelow(7); // 21 

var sumBelow = function(n) {
  if (n === 0 ) return 0 
  return n - 1 + sumBelow(n - 1);
};

console.log(sumBelow(10))

// 5 Get the integers within a range (x, y). ***DONE***
// range(2,9); // [3,4,5,6,7,8]
//
const range = function(x, y) {
  let arr = []
  if (x === y) return []
  if (x === y - 1) return []
  return  arr.concat(x+1).concat(range(x+1,y))
};
console.log(range(2,6))

// 6. Compute the exponent of a number.  ***DONE***
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  if (exp === 0) return 1;
  return base * exponent(base, exp - 1 );
};

console.log(exponent(2,8));

// 7. Determine if a number is a power of two.  ***DONE***
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  console.log(n);
  if (n === 1) return true;
  if (n < 1) return false;
  return powerOfTwo(n/2);
};

console.log(powerOfTwo(10))

// 8. Write a function that reverses a string. *** DONE ***
var reverse = function(str) {
  if (!str) return "" // false if str is empty
  return reverse(str.substr(1)) + str.charAt(0);
};

console.log(reverse('cesar'))


// 9. Write a function that determines if a string is a palindrome. *** DONE ***
var palindrome = function(str) {
  const last = str.length - 1;
  if (!str) return true
  if (str.charAt(0) !== str.charAt(last)) return false;
  return palindrome(str.substr(1,last-1))
};

console.log(palindrome('hannah'));
