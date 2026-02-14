// functions.js
import randomWords from "random-words";

// named export
export function sum(a, b) {
  return a + b;
}

// named export
export function multiply(a, b) {
  return a * b;
}

// default export (ერთი მთავარი რამ)
export default function getRandomWord() {
  return randomWords();
}
