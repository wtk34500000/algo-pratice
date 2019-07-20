// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');
console.log(map([1,2,3], addTwo))
console.log(mapWith([1,2,3], addTwo))
console.log(forEach([1,2,3], addTwo))
console.log(reduce([1,2,3], add, 0))

// Challenge 1
function addTwo(num) {
 return num+2;
}

// To check if you've completed it, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo(10));


// Challenge 2
function addS(word) {
   return word+"s"
}

function add(a, b) {
   return a+b
}


// uncomment these to check your work
// console.log(addS('pizza'));
// console.log(addS('bagel'));


// Challenge 3
function map(array, callback) {
    return array.map(n => callback(n))
}

// console.log(map([1, 2, 3], addTwo));


// Challenge 4
function forEach(array, callback) {
  const result=[]
  array.forEach(n => result.push(callback(n)))
  return result;
}

// see for yourself if your forEach works!


//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function mapWith(array, callback) {
    const result=[]
    array.forEach(n => result.push(callback(n)))
    return result
}

//Extension 2
function reduce(array, callback, initialValue) {
    return array.reduce((a, b, idx, initialValue) => add(a, b))
}

//Extension 3
// function intersection(arrays) {

// }

// console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]

//Extension 4
// function union(arrays) {

// }

// console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5
function objOfMatches(array1, array2, callback) {
    const result={}
    for(let i =0; i<array1.length; i++){
      for(let j =0; j<array2.length; j++){
      if(matches(array1[i], array2[j])){
            result[array1[i]]= array2[j] 
          }
    }
}
  return result
}

function matches(word1, word2){
  return word1.toUpperCase() === word2
}


 console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], matches))
                   //       { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6
// function multiMap(arrVals, arrCallbacks) {

// }

// console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }