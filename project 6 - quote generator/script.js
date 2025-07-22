// Variables

let quote = document.querySelector("h4");
let button = document.querySelector("button");

let quotations = [
  "Believe you can and you're halfway there",
  "Don’t watch the clock; do what it does. Keep going.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "Hardships often prepare ordinary people for an extraordinary destiny.",
  "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.",
  "The future depends on what you do today.",
  "Start where you are. Use what you have. Do what you can.",
  "Everything you’ve ever wanted is on the other side of fear.",
  "Dream big and dare to fail.",
  "You are never too old to set another goal or to dream a new dream.",
  "Success usually comes to those who are too busy to be looking for it.",
  "It always seems impossible until it’s done.",
  "The only way to do great work is to love what you do.",
  "Push yourself, because no one else is going to do it for you.",
  "If you want to achieve greatness stop asking for permission.",
  "Great things never come from comfort zones.",
  "Don’t stop when you’re tired. Stop when you’re done.",
  "Wake up with determination. Go to bed with satisfaction.",
  "Do something today that your future self will thank you for.",
  "Little things make big days.",
];

//Logic
let quoteGenerator = () => {
  let randomIndex = Math.floor(Math.random() * quotations.length);
  quote.textContent = `"${quotations[randomIndex]}"`;
};
// Event Listerner
button.addEventListener("click", quoteGenerator);
