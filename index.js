// Algorithm 1

function containsWord(sentence, word) {

  if ((sentence.includes, word)) {
    console.log(`Word found! ${word}`);
  } else {
    console.log("Word not found");
  }

  return sentence.includes(word);
}

const sentence = "This is a sentence for testing this function.";
const word = "sentence";

containsWord(sentence, word)

// Algorithm 2
function sumRecursive(n) {
    if(n === 0) {
        return 0
    }

    return n + sumRecursive(n - 1)
}

console.log(sumRecursive(4))

// Algorithm 3

function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString('Hello'))

// Algorithm 4

function capitalizeString(str){
  return str.toUpperCase();
}

console.log(capitalizeString("Hello world."))
// Algorithm 5

function productOfArray(arr){
  return arr.reduce((product, current) => product * current, 1)
}

console.log(productOfArray([1,2,3,4,5]))

// Algorithm 6

function printNonRepeatingIntegers(arr) {
  const counts = {};
  arr.forEach(num => {
    counts[num] = (counts[num] || 0) + 1;
  });

  const nonRepeating = [];
  for (const [num, count] of Object.entries(counts)) {
    if (count === 1) {
      nonRepeating.push(Number(num));
    }
  }

  console.log(nonRepeating.join(', '));
}

printNonRepeatingIntegers([1, 5, 1, 6, 8, 5]); 
