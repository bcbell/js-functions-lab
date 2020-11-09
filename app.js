// 1. (_completed below_) Define a function, as a function declaration, `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression -  the Math.max method is not allowed.

function maxOfTwoNumbers(x, y) {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
    
    // or more "elegantly" using the fantastic ternary expression!
    // return  x >= y ? x : y;
  }
  
  console.log(maxOfTwoNumbers(3, 9));

  // 2. Define a function as a function expression, `maxOfThree`, that takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.
const maxOfThree = function(x,y){
  if (x > y){
  } else{x}
}

//no need to specify the z statement

// 3. Define a function, as a function declaration, `isCharAVowel` that takes a character as an argument and returns true if it is a vowel, false otherwise.
 
function isCharAVowel(char){
  return('aeiou'.indexOf(char)> -1)
}

// function isCharAVowel(char){
//     char = char.toLowerCase() //changes the string to lowercase (.toLowerCase) || change the string to uppercase (.toUpperCase)
//     return ('aeiouy'.indexOf(char)> -1)//checking string 'aeiouy' for char 

console.log(isCharAVowel('t'))

// 4. Define a function, as a function expression, `sumArray` that takes an array of numbers and returns the sum of those numbers. For example, `sumArray([2, 4, 5]);` would return `11`.

const sumArray = function (array){ //the variable sumArray assigning the operator of function to an array
  let sum = 0 //let the sum assign a value of 0
array.forEach(function(number){ //for each value in the array the function of number
  sum += number //add the numbers to equal the sum
})
return (sum) //return the total sum  
}

console.log(sumArray([14, 15, 16, 20])) //console log the following array 


 



// 5. Define a function, as a function declaration, `multiplyArray` that takes an array of numbers and returns the product of those numbers. For example, `multiplyArray([2, 4, 5]);` would return `40`.

function multiplyArray (array){ //function multipleArray return array 
  let multiply = 1  //let multiply return value higher than 1
  for (i = 0; i <array.length; i++) { 
    multiply *= array[i] // multiple each number in the index and provide the total
  }
 
  return (multiply) //return the total of each number in the index to multiply
}

console.log(multiplyArray([45, 18, 120])) //in the console provide the total of the array 


// 6. Define a function, as a function expression, `numArgs` that returns the number of arguments passed to the function when called.

const numArgs = function(...nums){ // the value of numArgs assigning the operator of function using the spread syntax for nums
  return nums.length // return the arguments of the array nums
}

console.log(numArgs('everything', 'who', 10))


// 7. Define a function, as a function declaration, `reverseString` that takes a string, reverses the characters and returns it. For example, `reverseString('rockstar');` would return the string "ratskcor".

function reverseString(whoseThat){ //function reverserString
let array = whoseThat.split('') //creating an array of whoseThat (splits the word rockstar into separate letters)
return array.reverse('').join ('') //the reverse reverses the letters of rockstar and join joins the letters back together to create the word 'ratskcor'
}

console.log(reverseString('rockstar'))

// 8. Define a function, as a function expression, `longestStringInArray` that takes an array of strings as an argument and returns the longest string's length.

const longestStringArray = function (array){
  let longest = 0 //assign the longest variable to 0
 array.forEach(function(x){ //for each function 
   if (x.length > longest) longest = x.length //if the length of the string is greater than longest. Longest is equal to the the length of x 
 })
    return longest //return the longest value
  }
  


console.log(longestStringArray(['pinkgreen', 'blueblack', 'orangewhite']))


// 9. Define a function, as a function declaration, `stringsLongerThan` that takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, `stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);` would return `["hello", "morning"]`.

//function expression 

let longerOne = ['me', 'you', 'hi', "bye", 45, 'hello', 'morning', 46] //array

const stringLongerThan = longerOne.filter(longer => longer.length > 3) //set the stringLongerThan and filter the array longerOne. Filter out the elements of the array that have a length greater than 3 


console.log(stringLongerThan)



  
//function declaration

function stringLongerThan2 (arr,longer2) { //function stringLongerThan2 with array and longer as the parameters

  return arr.filter(function(long) { //return the value of arr filtering the function .
    return(long.length >  longer2)
})
}
console.log(stringLongerThan2(['have', 'a', 'time', 'hello', 'in', 'the', 'morning'], 4))