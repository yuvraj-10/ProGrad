// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(num1,num2){
  if (num1>num2){
   return num1
  }
  else if(num2>num1){
   return num2
  }
  else{
   return num1
  }
}

// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
function findScaryWord(words){
 if (words.length == 0){
   return null
 }
 else if (words.length == 1){
   return words[0]
 }
 else{
   var max=words[0].length
   var pos=0
   for (var i=1;i<words.length;i++){
      if (words[i].length > max){
       max = words[i].length
       pos = i
      }
   }
   return words[pos]
 }

}
// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function netPrice(numbers){
 var sum = 0
 if (numbers.length == 0) {
     return 0
 } else {
   for (var num of numbers) {
     sum+=num
   }
   return sum
 }
}

// Progression #3.1: bonus
function add(arr){
 var sum = 0
 if (arr.length == 0) {
   return 0
 }
 else{
   for(let ele of arr)
   {
     var type = typeof(ele)
     if (type == "object"){
       throw new Error("Unsupported data type sir or ma'am");
   }
   else if (type == "number"){
     sum+=ele
   }
   else if (type == "string"){
     sum+=ele.length
   }
   else if (type == "boolean"){
     sum+=Number(ele)
   }
}
 }
 return sum
}

// Progression #4: Calculate the average
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function midPointOfLevels(arr){
 if (arr.length == 0) {
   return null
 }
 var sum = add(arr)
 return (sum/arr.length)
}
// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
function averageWordLength(arr){
 if (arr.length == 0) {
   return null
 }
 var sum = add(arr)
 return (sum/arr.length)
}
//bonus
function avg(arr){
 if (arr.length == 0) {
   return null
 }
 var sum = add(arr)
 return parseFloat((sum/arr.length).toFixed(2))
}


// Progression #5: Unique arrays
const wordsUnique = [
 'bread',
 'jam',
 'milk',
 'egg',
 'flour',
 'oil',
 'rice',
 'coffee powder',
 'sugar',
 'salt',
 'egg',
 'flour'
];
function uniqueArray(arr){
 if (arr.length == 0) {
   return null
 }
 else {
   for (let i = 0; i < arr.length-1; i++) {
     for (let j = i+1; j < arr.length; j++) {
        if (arr[i]===arr[j]) {
         arr.splice(j,1)
        }
     }
   }
   return arr
 }
}
// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
function searchElement(arr,wrd){
 if (arr.length == 0) {
   return null
 }
else{
 for (let i = 0; i < arr.length-1; i++) {
  if (arr[i] === wrd) {
    return true
  }
}
}
}

// Progression #7: Count repetition
const wordsCount = [
 'machine',
 'matter',
 'subset',
 'trouble',
 'starting',
 'matter',
 'eating',
 'matter',
 'truth',
 'disobedience',
 'matter'
];
function howManyTimesElementRepeated(arr,wrd){
 if (arr.length == 0) {
   return 0
 }
else{
 var count = 0
 for (let i = 0; i < arr.length; i++) {
  if (arr[i] === wrd) {
     count+=1
  }
}
return count
}
}
// Progression #8: Bonus

const matrix = [
 [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
 [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
 [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
 [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
 [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
 [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
 [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
 [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
 [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
 [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];
function maximumProduct(matrix){
 var max=0
 var prodRow=1
 var prodCol=1
 for (var i=0; i<matrix.length;i++){
   //row wise
   for (num in matrix[i]){
     prodRow*=num
   }
     //columnwise
     for (var j=0; j<matrix.length;j++){
       prodCol*=matrix[i][j]
   }
   if (prodRow>max) {
     max = prodRow
   }
   if(prodCol>max){
     max=prodCol
   }
 }
return max
}