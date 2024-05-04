// Create a function that reverse a string/Sentence

const string = "abcdefghijklmnopqrstuvwxyz";
console.log(string);

// vivek => 5 (0-4)

function reverseAString(string) {
  let reverseString = "";

  for (let i = string.length - 1; i >= 0; i--) {
    reverseString += string[i];
  }

  return reverseString;
}

console.log(reverseAString(string));

// used by inbuild functions
// function reverseAString2(string) {
//     return string.split('').reverse().join('');
//   }

const reverseAString3 = string => [...string].split('').reverse().join('');