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


// Algorithm 4


// Algorithm 5


// Algorithm 6