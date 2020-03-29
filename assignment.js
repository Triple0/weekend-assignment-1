// Oddish vs. Evenish
// Published by Helen Yu
 
// mathnumbersvalidation
// Create a function that determines whether a number is Oddish or Evenish. A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish".
// For example, oddishOrEvenish(121) should return "Evenish", since 1 + 2 + 1 = 4. oddishOrEvenish(41) should return "Oddish", since 4 + 1 = 5.

function oddishOrEvenish(num) {
    let str_num = num.toString().split('');
    var add_num = 0;
	for(var i in str_num){
		var add_num = add_num + Number(str_num[i]);
    }
    return add_num%2==0 ? "Evenish" : "Oddish";
	
}

// Scrabble Hand
// Published by Helen Yu in 
// gamesloopsmathobjects
// Given an array of scrabble tiles, create a function that outputs the maximum possible score a player can achieve by summing up the total number of points for all the tiles in their hand. Each hand contains 7 scrabble tiles.
// Here's an example hand:
// [
//   { tile: "N", score: 1 },
//   { tile: "K", score: 5 },
//   { tile: "Z", score: 10 },
//   { tile: "X", score: 8 },
//   { tile: "D", score: 2 },
//   { tile: "A", score: 1 },
//   { tile: "E", score: 1 }
// ]
// The players maximumScore from playing all these tiles would be 1 + 5 + 10 + 8 + 2 + 1 + 1, or 28.

function maximumScore(tileHand) {
	return tileHand.reduce((sum, currentValue) => {
  return sum + currentValue.score;
}, 0);
}

// Stack the Boxes
// Published by Ruud Peter Boelens in 
// algebramathnumbers
// Here's an image of four models. Some of the cubes are hidden behind other cubes. Model one consists of one cube. Model two consists of four cubes, and so on...
 
// Write a function that takes a number n and returns the number of stacked boxes in a model n levels high, visible and invisible.
function stackBox(n) {
	return n*n;
}

// Length of a Nested Array
// Published by Helen Yu in 
// arraysrecursion
// The .length property on an array will return the number of elements in the array. For example, the array below contains 2 elements:
// [1, [2, 3]]
// // 2 elements, number 1 and array [2, 3]
// Suppose we instead wanted to know the total number of non-nested items in the nested array. In the above case, [1, [2, 3]] contains 3 non-nested items, 1, 2 and 3.
// Write a function that returns the total number of non-nested items in a nested array.
// Examples
// getLength([1, [2, 3]]) ➞ 3

// getLength([1, [2, [3, 4]]]) ➞ 4

// getLength([1, [2, [3, [4, [5, 6]]]]]) ➞ 6

// getLength([1, [2], 1, [2], 1]) ➞ 5

function getLength(arr) {
	return arr.flat(Infinity).length;	
}

// Factorial of a Positive Integer
// Published by Matt in 
// conditionsloopsmathrecursion
// Write a function that takes a positive integer and return its factorial.
// Examples
// factorial(4) ➞ 24

// factorial(0) ➞ 1

// factorial(9) ➞ 362880
// Notes
// •	The factorial of 0 is 1.
// •	The factorial of any positive integer Z is Z * (Z - 1) * (Z - 2) * . . . . . . * 1 (e.g. factorial of 3 is 3 * 2 * 1 = 6).

function factorial(z) {
	if(z < 0){ return ; }
	if(z===0){ return 1;} else return z * factorial(z - 1);
}