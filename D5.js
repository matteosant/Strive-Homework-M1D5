/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/
const rectangleArea = function (l1, l2) {
    console.log(`The area of your rectangle is ${l1*l2}cm`)
}
rectangleArea(8, 9)

/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/
const crazySum = function(int1, int2){ 
    if (int1===int2) {
        return (int1+int2)*3
    } else {
        return int1+int2
    } 
}
crazySum(2, 4)

/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/
let myNum = 19
const crazyDiff = function(givenNum) {
    if (givenNum>myNum) {
        return Math.abs((givenNum-myNum)*3);
    } else {
        return Math.abs(givenNum-myNum)
    }
}

crazyDiff(22)

/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/

const boundary = function(n) {
    if (n>=20 && n<=100 || n === 400) {
return true
    }
}
boundary(22)

/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

function strivify(givenString){
    if (givenString === `Strive${givenString.replace("Strive","")}`) {
      return givenString
    } else {
   return `Strive${givenString}`
  }
  }
  
  strivify(`whatever`)

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

const check3and7 = function (myNum) {
    if (myNum > 0) {
        if (myNum % 3 === 0 || myNum % 7 === 0) {
            console.log(`affermative`)
        } else {
            console.log(`negative`)
        }

    } else {
        console.log(`give me a positive number`)
    }
}
check3and7(18)

/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/
function reverseString(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) { 
        newString += str[i]; 
    }
    return newString; 
}
reverseString('halleluja');

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/

function upperFirst (givenString) {
  
    givenString = givenString.split(' ').filter(s => s).join(' ');//this is to remove all the extra whitespace from the givenstring in case there is some. Found here: https://stackoverflow.com/questions/7635952/javascript-how-to-remove-all-extra-spacing-between-words
      
        let myArray = givenString.split(" ");
      let newArray = []
      
        for (let i = 0; i < myArray.length; i++){
     newArray.push(myArray[i][0].toUpperCase() + myArray[i].replace(myArray[i][0], ``))
        
        }
      return newArray.join(" ")
     }
       upperFirst("hey is this working?")

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

/* function cutString (myCutString) {
    let myArray2 = myCutString.split(" ")
    let newCutArray = []
    for (let i = 0; i< myArray2.length; i++) {
      newCutArray.push(myArray2[i].slice(1, myArray2[i].length-1));
    }
return newCutArray  //this one deletes the first and last character of each word, need to be adjusted with if statement to not included single workds
    
}
cutString(`the am afer cutted string`)*/

function cutString (myCutString) {
    myCutString = myCutString.slice(1, myCutString.length-1);
    
     return myCutString
      
  }
  cutString(`Cutted String`) //this one cut the first and last character of the whole string
  


/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

function giveMeRandom (n) {
    let nArray = []
    function random(number) {
        return Math.floor(Math.random() * number);
      } 
      for (let i = 0; i < n; i++){
    nArray.push(random(10))
      }
      
    return nArray
}

giveMeRandom(10)

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit in Eduflow.
*/