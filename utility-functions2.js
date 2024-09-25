//My utility function
//function scope allows user to reuse any variable over again within the curly braces

function temporary2() {
  const x = 15;
  document.write(x);
}
function temporary1() {
  const x = 8;
  document.write(x);
}

//document.write = Writes text to a document that overwrites HTML content

function display(Hello) {
  document.write(Hello);
}


//Variable function = Can be redeclared within the scope.

function ask2(myMessage) {
  var userText = prompt(myMessage);
  var userNumber = Number(userText);
  var isntNumber = isNaN(userNumber);
}

//let function = Cannot be redeclared within the scope

function userContent(myMessage) {
  let userText = prompt(myMessage);
  let userNumber = Number(userText);
  let isntNumber = isNaN(userNumber);
}

//Template string = Allows single or multiple lines of text to be used in one string

const userName = "Tammy";
const myString = "Hello ${userName}! How are you?";

function ask(wordType) {
  var userAnswer = prompt("give me a " + wordType);
  return userAnswer;
}

function game() {
  const array = [
    "adjective",
    "name",
    "adjective",
    "silly animal",
    "verb ending in -ing",
    "adjective",
    "silly noise",
    "place in the zoo",
    "animal",
    "verb",
    "funny item",
    "verb",
    "food",
    "adjective",
    "animal",
    "adjective",
    "verb ending in -ing",
  ];
  var object = {};
  for (let count = 0; count < 17; count++) { 
    object[count]= ask(array[count])
  }
  display
}

//Today, I went to the zoo with my (adjective) friend, (name). We saw a (adjective) (silly animal) that was (verb ending in -ing) while wearing a tiny hat! It made a really (adjective) sound like a (silly noise).

//Later, we visited the (place in the zoo) where the (animal) was (verb) and juggling (funny item)! I couldn’t believe my eyes when it started to (verb) on a unicycle!

//After that, we had (food) for lunch, and I accidentally dropped mine on a (adjective) (animal). It was a (adjective) disaster, but we couldn't stop (verb ending in -ing) with laughter!
