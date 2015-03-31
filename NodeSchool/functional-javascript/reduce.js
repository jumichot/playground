// var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian'];

// console.log(countWords(inputWords));
// countWords(inputWords);

// =>
// {
//   Apple: 2,
//   Banana: 1,
//   Durian: 3
// }

// function countWords(arr) {
//   return arr.reduce(function(countMap, word) {
//     countMap[word] = ++countMap[word] || 1 // increment or initialize to 1
//     return countMap
//   }, {}) // second argument to reduce initialises countMap to {}
// }

// module.exports = countWords;


// function reduce(arr, fn, initial) {
//   return (function reduceOne(index, value) {
//     if (index > arr.length - 1) return value // end condition
//     return reduceOne(index + 1, fn(value, arr[index], index, arr)) // calculate & pass values to next step
//   })(0, initial) // IIFE. kick off recursion with initial values
// }

// function reduce(arr, fn, initial) {
//   return function reduceOne(arr, index){
//     if(index > arr.length - 1) return arr;
//     arr.unshift(fn(arr.shift(), arr.shift(), index, arr));
//     return reduceOne(arr,index + 1);
//   }(arr,0);
// }

var reduce = function(arr, fn, init) {
  return function(){
    return arr;
  }();
};

var test = reduce([1,2,3], function(prev, curr, index, arr) {
  return prev + curr;
}, 0);
// console.log(test);
module.exports = reduce;


