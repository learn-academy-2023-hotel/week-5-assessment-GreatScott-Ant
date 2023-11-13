// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

const { count } = require("console")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.


// describe("vowelToNumber", () => {
//     it("takes in a string and returns a string with a coded message", () => {
//         const secretCodeWord1 = "Lackadaisical"
//         expect(vowelToNumber(secretCodeWord1)).toEqual("Lackadaisical")
//         // Expected output: "L4ck4d41s1c4l"
        
//         const secretCodeWord2 = "Gobbledygook"
//         expect(vowelToNumber(secretCodeWord2)).toEqual("Gobbledygook")
//         // Expected output: "G0bbl3dyg00k"

//         const secretCodeWord3 = "Eccentric"
//         expect(vowelToNumber(secretCodeWord3)).toEqual("Eccentric")
//         // Expected output: "3cc3ntr1c"
//     })
// })


// OUTPUT: ReferenceError: vowelToNumber is not defined


// b) Create the function that makes the test pass.

// Pseudo code:

//INPUT: a string
//OUTPUT: a returned string that converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// const vowelToNumber = .toLowerCase(string) => {
//     let codeCreater = "";

//     for (let i = 0; i < string.length; i++) {
//         let charCode = string[i];

//         switch (charCode) {
//             case 'a':
//                 codeCreater += '4';
//                 break;
//             case 'e':
//                 codeCreater += '3';
//                  break;
//             case 'i':
//                 codeCreater += '1';
//                  break;
//             case 'o':
//                 codeCreater += '0';
//                 break;
//             default:
//                 codeCreater += charCode;
//         }
//     }
//     // .toLowerCase().split('')
//     // .filter('a' = '4', 'e' = '3', 'i' = '1', 'o'= '0')
//     // .join(' ')
//     return codeCreater
// }

// const secretCodeWord1 = "Lackadaisical"
// const secretCodeWord2 = "Gobbledygook"
// const secretCodeWord3 = "Eccentric"

// console.log(vowelToNumber(secretCodeWord1))
// console.log(voweltoNumber(secretCodeWord2))
// console.log(vowelToNumber(secretCodeWord3))

// create function that holds substitute letter value and iterates through string
//2nd option



// --------------------2) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

describe("pokerHand", () => {
    test("should return true if hand has a pair", () => {
        const hand1 = [5, 5, 5, 3, 3]
        expect(pokerHand(hand1)).toEqual(true)
        // Expected output: true

        const hand2 = [5, 5, 3, 3, 4]
        expect(pokerHand(hand2)).toEqual(false)
         // Expected output: false

        const hand3 = [5, 5, 5, 5, 4]
        expect(pokerHand(hand3)).toEqual(false)
         // Expected output: true

        const hand4 = [7, 2, 7, 2, 7]
        expect(pokerHand(hand4)).toEqual(true)
        // Expected output: true
    })

    test("should return true if hand has three of a kind", () => {
        const hand1 = [5, 5, 5, 3, 3]
        expect(pokerHand(hand1)).toEqual(true)
        // Expected output: true
        
        const hand2 = [5, 5, 3, 3, 4]
        expect(pokerHand(hand2)).toEqual(false)
        // Expected output: false
        
        const hand3 = [5, 5, 5, 5, 4]
        expect(pokerHand(hand3)).toEqual(false)
        // Expected output: false

        const hand4 = [7, 2, 7, 2, 7]
        expect(pokerHand(hand4)).toEqual(true)
        // Expected output: true
    })
})
// OUTPUT: ReferenceError: pokerHand is not defined

// b) Create the function that makes the test pass.

// Pseudo code:
//INPUT: an array
//OUTPUT: Boolean value true if array has a pair and three of a kind; false for everything else

const pokerHand = (arr) => {
    const cardCount = {}
  
    //create for loop to count each number in array and holds its value & iterates through to see if next number is the same. If it isn't, the count goes back to 0
    for (let num of arr) {
      cardCount[num] = (cardCount[num] || 0) + 1
    }
  
    // create Boolean value for a Pair & Three of a Kind
    let hasPair = false;
    let hasThreeOfAKind = false;
  
    // conditional for loop to count values from "cardCount"
    for (let count of Object.values(cardCount)) {
      if (count === 2) {
        hasPair = true;
      } else if (count === 3) {
        hasThreeOfAKind = true;
      }
    }
  
    // conditional for loop for "full house"
    if (hasPair && hasThreeOfAKind) {
      return true
    } else {
      return false
    }
  }
  
  const hand1 = [5, 5, 5, 3, 3]
  const hand2 = [5, 5, 3, 3, 4]
  const hand3 = [5, 5, 5, 5, 4]
  const hand4 = [7, 2, 7, 2, 7]

  console.log(pokerHand(hand1))
  console.log(pokerHand(hand2))
  console.log(pokerHand(hand3))
  console.log(pokerHand(hand4))
 
  
  
  
  
  
  