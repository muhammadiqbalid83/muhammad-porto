const dynamicContent = document.getElementById("dynamic-text");

console.log(dynamicContent);

const phrases = ["Software Engineer....", "Mentor...."];

let letterIndex = 0;

function printLetters(phrase) {
  for (let index = 0; index < phrase.length; index++) {
    console.log(phrase.charAt(index));
  }
}

printLetters(phrases[0]);
